/**
 * Static prerender for GitHub Pages deployment.
 *
 * The control plane renders deterministic HTML from static sample data, so we
 * snapshot every route to a flat set of .html files (plus JSON for the API
 * surface) under ./site. Absolute nav links are rewritten to relative .html
 * links so the build works identically on the github.io project URL and on a
 * custom domain root.
 *
 * Deploy infra (Claude Code / Platform-SRE lane) — does not modify src/.
 */
import { copyFileSync, existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

import {
  renderApprovalPosture,
  renderCommentLane,
  renderDocs,
  renderObligationMap,
  renderOverview,
  renderVerification
} from "../src/services/render";
import {
  approvalPosture,
  commentLane,
  obligationMap,
  payload,
  summary,
  verification
} from "../src/services/regulatoryCommentService";

const OUT = join(process.cwd(), "site");

const pages: Record<string, string> = {
  "index.html": renderOverview(),
  "comment-lane.html": renderCommentLane(),
  "obligation-map.html": renderObligationMap(),
  "approval-posture.html": renderApprovalPosture(),
  "verification.html": renderVerification(),
  "docs.html": renderDocs()
};

// Rewrite server-absolute nav hrefs to flat relative links (host-agnostic).
const linkMap: Array<[string, string]> = [
  ['href="/"', 'href="index.html"'],
  ['href="/comment-lane"', 'href="comment-lane.html"'],
  ['href="/obligation-map"', 'href="obligation-map.html"'],
  ['href="/approval-posture"', 'href="approval-posture.html"'],
  ['href="/verification"', 'href="verification.html"'],
  ['href="/docs"', 'href="docs.html"']
];

function relativize(html: string): string {
  return linkMap.reduce((acc, [from, to]) => acc.split(from).join(to), html);
}

const api: Record<string, unknown> = {
  "api/dashboard/summary.json": summary(),
  "api/comment-lane.json": commentLane(),
  "api/obligation-map.json": obligationMap(),
  "api/approval-posture.json": approvalPosture(),
  "api/verification.json": verification(),
  "api/sample.json": payload()
};

rmSync(OUT, { recursive: true, force: true });
mkdirSync(join(OUT, "api", "dashboard"), { recursive: true });

for (const [file, html] of Object.entries(pages)) {
  writeFileSync(join(OUT, file), relativize(html), "utf8");
}
for (const [file, data] of Object.entries(api)) {
  writeFileSync(join(OUT, file), `${JSON.stringify(data, null, 2)}\n`, "utf8");
}
// Disable Jekyll so files are served verbatim.
writeFileSync(join(OUT, ".nojekyll"), "");

// Carry the custom-domain CNAME into the published artifact, if present.
const cnameSrc = join(process.cwd(), "CNAME");
if (existsSync(cnameSrc)) {
  copyFileSync(cnameSrc, join(OUT, "CNAME"));
}

console.log(
  `prerendered ${Object.keys(pages).length} pages + ${Object.keys(api).length} api files -> site/`
);
