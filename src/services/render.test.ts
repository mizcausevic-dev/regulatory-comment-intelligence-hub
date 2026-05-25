import { describe, expect, test } from "vitest";

import {
  renderApprovalPosture,
  renderCommentLane,
  renderDocs,
  renderObligationMap,
  renderOverview,
  renderVerification
} from "./render";
import {
  approvalPackets,
  commentRecords,
  obligationItems
} from "../data/sampleComments";

const renderers = [
  ["overview", renderOverview],
  ["comment-lane", renderCommentLane],
  ["obligation-map", renderObligationMap],
  ["approval-posture", renderApprovalPosture],
  ["verification", renderVerification],
  ["docs", renderDocs]
] as const;

describe("render", () => {
  test.each(renderers)("%s produces a full HTML document with nav", (_label, fn) => {
    const html = fn();
    expect(html.startsWith("<!DOCTYPE html>")).toBe(true);
    expect(html).toContain("</html>");
    expect(html).toContain("Regulatory Comment Intelligence Hub");
    expect(html).toContain('href="/comment-lane"');
    expect(html).toContain('href="/docs"');
  });

  test("overview surfaces docket data, stat grid, and risk tags", () => {
    const html = renderOverview();
    expect(html).toContain(commentRecords[0].docketId);
    expect(html).toContain("Active Dockets");
    expect(html).toContain("Ready To Submit");
    // riskClass() lowercases the data-driven risk into a tag class
    expect(html).toContain('class="tag critical"');
    expect(html).toContain('class="tag healthy"');
  });

  test("comment lane lists every docket with lead analyst and next action", () => {
    const html = renderCommentLane();
    for (const record of commentRecords) {
      expect(html).toContain(record.docketId);
      expect(html).toContain(record.leadAnalyst);
      expect(html).toContain(record.sector);
    }
  });

  test("obligation map shows obligations, owners, and all readiness tag classes", () => {
    const html = renderObligationMap();
    for (const item of obligationItems) {
      expect(html).toContain(item.id);
      expect(html).toContain(item.owner);
    }
    // readinessClass() maps each readiness value to a tag class
    expect(html).toContain('class="tag red"');
    expect(html).toContain('class="tag green"');
    expect(html).toContain('class="tag yellow"');
  });

  test("approval posture shows packets, completeness scores, and statuses", () => {
    const html = renderApprovalPosture();
    for (const packet of approvalPackets) {
      expect(html).toContain(packet.packetId);
      expect(html).toContain(String(packet.completenessScore));
      expect(html).toContain(packet.audience);
    }
  });

  test("verification renders every proof statement", () => {
    const html = renderVerification();
    expect(html).toContain("Verification");
    expect(html).toContain("deadline pressure");
  });

  test("docs page enumerates the route surface", () => {
    const html = renderDocs();
    expect(html).toContain("/obligation-map");
    expect(html).toContain("/approval-posture");
  });
});
