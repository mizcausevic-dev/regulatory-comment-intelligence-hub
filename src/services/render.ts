import {
  agencyCoverage,
  approvalPosture,
  commentLane,
  obligationMap,
  summary,
  verification
} from "./regulatoryCommentService";

function layout(title: string, body: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="Regulatory comment intake, obligation mapping, approval posture, and evidence-packaged submission workflows. TypeScript control plane with a deterministic static demo across 5 dockets (EPA, CMS, FTC, DOT, SEC). Part of the Kinetic Gain Suite." />
  <meta name="theme-color" content="#0f1923" />
  <meta name="referrer" content="strict-origin-when-cross-origin" />
  <meta http-equiv="Content-Security-Policy" content="default-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'; upgrade-insecure-requests" />
  <style>
    :root {
      --bg: #0a0f17;
      --bg-2: #0f1923;
      --panel: #131d2a;
      --panel-2: #182434;
      --panel-hover: #1d2d40;
      --ink: #e8edf2;
      --muted: #8a9ba8;
      --muted-2: #6b7a87;
      --border: #1f2d3d;
      --border-strong: #2a3a4a;
      --accent: #00b4d8;
      --accent-2: #38d9a9;
      --accent-soft: rgba(0, 180, 216, 0.12);
      --watch: #f59e0b;
      --critical: #f87171;
      --green: #34d399;
      --yellow: #fbbf24;
      --red: #f87171;
      --healthy: #34d399;
    }
    * { box-sizing: border-box; }
    html { color-scheme: dark; }
    body {
      margin: 0;
      background:
        radial-gradient(900px 480px at 12% 0%, rgba(0, 180, 216, 0.10), transparent 60%),
        radial-gradient(800px 460px at 100% 5%, rgba(56, 217, 169, 0.08), transparent 55%),
        linear-gradient(180deg, #070b12 0%, #0a0f17 100%);
      color: var(--ink);
      font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      min-height: 100vh;
      -webkit-font-smoothing: antialiased;
    }
    @keyframes fadeUp { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
    @media (prefers-reduced-motion: reduce) {
      .topbar, .card, .table-wrap, .stat { animation: none !important; }
    }
    .shell {
      max-width: 1380px;
      margin: 0 auto;
      padding: 24px 28px 60px;
    }
    .topbar, .card, .table-wrap {
      background: linear-gradient(180deg, rgba(19,29,42,0.94), rgba(15,25,35,0.92));
      border: 1px solid var(--border);
      border-radius: 16px;
      box-shadow: 0 8px 28px rgba(0, 0, 0, 0.35);
      animation: fadeUp 0.5s ease both;
    }
    .topbar {
      padding: 18px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 18px;
      margin-bottom: 22px;
      position: sticky;
      top: 0;
      z-index: 50;
      backdrop-filter: blur(12px);
    }
    .brand {
      display: flex;
      gap: 14px;
      align-items: center;
    }
    .badge {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: linear-gradient(135deg, var(--accent), var(--accent-2));
      color: #0a0f17;
      display: flex;
      align-items: center;
      justify-content: center;
      font: 700 16px/1 ui-sans-serif, system-ui, sans-serif;
      letter-spacing: 0.04em;
      box-shadow: 0 4px 18px rgba(0, 180, 216, 0.28);
    }
    .eyebrow {
      font: 600 11px/1.4 ui-sans-serif, system-ui, sans-serif;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--accent);
      margin-bottom: 4px;
    }
    .brand h1 {
      margin: 0;
      font: 700 22px/1.15 ui-sans-serif, system-ui, sans-serif;
      letter-spacing: -0.01em;
    }
    .brand p {
      margin: 3px 0 0;
      color: var(--muted);
      font: 14px/1.5 ui-sans-serif, system-ui, sans-serif;
    }
    nav { display: flex; flex-wrap: wrap; gap: 4px; }
    nav a {
      text-decoration: none;
      color: var(--muted);
      font: 600 12px/1 ui-sans-serif, system-ui, sans-serif;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      padding: 8px 12px;
      border-radius: 8px;
      border: 1px solid transparent;
      transition: color 0.15s, border-color 0.15s, background 0.15s;
    }
    nav a:hover { color: var(--ink); border-color: var(--border-strong); }
    nav a.active {
      color: var(--accent);
      background: var(--accent-soft);
      border-color: rgba(0, 180, 216, 0.30);
    }
    .demo-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 5px 11px;
      border-radius: 999px;
      border: 1px solid var(--border-strong);
      color: var(--muted);
      font: 600 11px/1 ui-sans-serif, system-ui, sans-serif;
      letter-spacing: 0.10em;
      text-transform: uppercase;
    }
    .demo-pill::before {
      content: "";
      width: 7px; height: 7px; border-radius: 50%;
      background: var(--accent-2);
      box-shadow: 0 0 6px var(--accent-2);
    }
    .hero {
      display: grid;
      grid-template-columns: 1.6fr 1fr;
      gap: 18px;
      margin-bottom: 22px;
    }
    .card { padding: 24px; transition: border-color 0.2s, transform 0.2s; }
    .card:hover { border-color: var(--border-strong); }
    .hero h2 {
      margin: 8px 0 10px;
      font: 700 40px/1.05 ui-sans-serif, system-ui, sans-serif;
      letter-spacing: -0.02em;
      color: var(--ink);
    }
    .hero p,
    .section p {
      color: var(--muted);
      font: 15.5px/1.6 ui-sans-serif, system-ui, sans-serif;
      margin: 0 0 18px;
    }
    .stat-grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 14px;
      margin-top: 16px;
    }
    .stat {
      position: relative;
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 16px;
      background: linear-gradient(180deg, var(--panel-2), var(--panel));
      transition: transform 0.18s, border-color 0.18s, box-shadow 0.18s;
    }
    .stat:hover {
      transform: translateY(-2px);
      border-color: var(--border-strong);
      box-shadow: 0 8px 22px rgba(0,0,0,0.30);
    }
    .stat::before {
      content: "";
      position: absolute; left: 0; right: 0; top: 0; height: 2px;
      background: linear-gradient(90deg, var(--accent), var(--accent-2));
      opacity: 0;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
      transition: opacity 0.18s;
    }
    .stat:hover::before { opacity: 1; }
    .stat label {
      display: block;
      color: var(--muted);
      font: 600 11px/1.4 ui-sans-serif, system-ui, sans-serif;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .stat strong {
      display: block;
      font: 700 36px/1 ui-sans-serif, system-ui, sans-serif;
      margin-bottom: 8px;
      letter-spacing: -0.02em;
      background: linear-gradient(135deg, var(--ink), var(--accent));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .stat span {
      display: block;
      color: var(--muted-2);
      font: 12.5px/1.5 ui-sans-serif, system-ui, sans-serif;
    }
    .section-grid {
      display: grid;
      grid-template-columns: 1.3fr 1fr;
      gap: 18px;
      margin-bottom: 22px;
    }
    .right-panel h3, .section h3, .card h3 {
      margin: 0 0 12px;
      font: 600 18px/1.3 ui-sans-serif, system-ui, sans-serif;
      color: var(--ink);
    }
    .list {
      display: grid;
      gap: 0;
    }
    .item {
      border-top: 1px solid var(--border);
      padding: 14px 0;
      transition: padding-left 0.2s, border-color 0.2s;
    }
    .item:first-child {
      border-top: 0;
      padding-top: 4px;
    }
    .item:hover {
      padding-left: 6px;
      border-color: var(--border-strong);
    }
    .item strong {
      display: block;
      font: 600 14.5px/1.4 ui-sans-serif, system-ui, sans-serif;
      margin-bottom: 4px;
      color: var(--ink);
    }
    .item p, .item span {
      color: var(--muted);
      font: 13px/1.55 ui-sans-serif, system-ui, sans-serif;
      margin: 0;
    }
    .item p { margin-bottom: 3px; }
    .table-wrap {
      padding: 16px 18px 18px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      font: 13.5px/1.5 ui-sans-serif, system-ui, sans-serif;
    }
    th, td {
      text-align: left;
      padding: 12px 10px;
      border-bottom: 1px solid var(--border);
      vertical-align: top;
      color: var(--ink);
    }
    th {
      color: var(--muted);
      font: 600 11px/1.4 ui-sans-serif, system-ui, sans-serif;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      background: rgba(0,0,0,0.18);
    }
    tbody tr { transition: background 0.15s; }
    tbody tr:hover { background: var(--panel-hover); }
    tbody tr:last-child td { border-bottom: 0; }
    td strong { color: var(--accent); font-weight: 600; }
    .tag {
      display: inline-block;
      padding: 4px 10px;
      border-radius: 999px;
      font: 600 10.5px/1.4 ui-monospace, SFMono-Regular, Consolas, monospace;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      background: var(--accent-soft);
      color: var(--accent);
      border: 1px solid rgba(0, 180, 216, 0.30);
    }
    .tag.watch, .tag.yellow { background: rgba(245, 158, 11, 0.12); color: var(--yellow); border-color: rgba(245, 158, 11, 0.30); }
    .tag.critical, .tag.red { background: rgba(248, 113, 113, 0.12); color: var(--red); border-color: rgba(248, 113, 113, 0.30); }
    .tag.healthy, .tag.green { background: rgba(52, 211, 153, 0.12); color: var(--green); border-color: rgba(52, 211, 153, 0.30); }
    .footer-note {
      margin-top: 14px;
      color: var(--muted);
      font: 13px/1.6 ui-sans-serif, system-ui, sans-serif;
    }
    .card-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 18px;
    }
    code {
      font: 12.5px/1.5 ui-monospace, SFMono-Regular, Consolas, monospace;
      background: rgba(0, 180, 216, 0.10);
      border: 1px solid rgba(0, 180, 216, 0.22);
      color: var(--accent);
      padding: 1px 7px;
      border-radius: 6px;
    }
    .global-footer {
      margin-top: 36px;
      padding-top: 18px;
      border-top: 1px solid var(--border);
      color: var(--muted-2);
      font: 12px/1.6 ui-sans-serif, system-ui, sans-serif;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 12px;
    }
    .global-footer a { color: var(--muted); text-decoration: none; margin-right: 14px; }
    .global-footer a:hover { color: var(--accent); }
    @media (max-width: 980px) {
      .hero, .section-grid, .card-grid { grid-template-columns: 1fr; }
      .stat-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .topbar { flex-direction: column; align-items: flex-start; position: static; }
      .hero h2 { font-size: 28px; }
    }
    @media (max-width: 600px) {
      .stat-grid { grid-template-columns: 1fr; }
      .shell { padding: 16px; }
    }
  </style>
</head>
<body>
  <div class="shell">
    ${body}
    <div class="global-footer">
      <div>
        Static demo data — deterministic dataset of 5 dockets across EPA · CMS · FTC · DOT · SEC. No live agency calls; refresh resets identical state.
      </div>
      <div>
        <a href="https://github.com/mizcausevic-dev/regulatory-comment-intelligence-hub">GitHub repo</a>
        <a href="https://kineticgain.com/embedded">Kinetic Gain Embedded</a>
        <a href="https://suite.kineticgain.com/">Suite hub</a>
      </div>
    </div>
  </div>
</body>
</html>`;
}

function topbar(active: string) {
  const links = [
    { href: "/", label: "Overview" },
    { href: "/comment-lane", label: "Comment Lane" },
    { href: "/obligation-map", label: "Obligation Map" },
    { href: "/approval-posture", label: "Approval Posture" },
    { href: "/verification", label: "Verification" },
    { href: "/docs", label: "Docs" }
  ];

  return `<div class="topbar">
    <div class="brand">
      <div class="badge">RC</div>
      <div>
        <div class="eyebrow">Regulatory Comment Intelligence Hub</div>
        <h1>Submission-ready regulated workflow control plane</h1>
        <p>Regulatory comments, obligation mapping, approval pressure, and evidence packaging in one operator surface.</p>
      </div>
    </div>
    <nav>${links
      .map((link) => `<a class="${active === link.href ? "active" : ""}" href="${link.href}">${link.label}</a>`)
      .join("")}<span class="demo-pill" style="margin-left:8px">Demo · static</span></nav>
  </div>`;
}

function riskClass(value: string) {
  return value.toLowerCase();
}

function readinessClass(value: string) {
  if (value === "green") return "green";
  if (value === "yellow") return "yellow";
  return "red";
}

export function renderOverview() {
  const stats = summary();
  const comments = commentLane();
  const obligations = obligationMap();
  const agencies = agencyCoverage();

  return layout(
    "Regulatory Comment Intelligence Hub",
    `${topbar("/")}
    <div class="hero">
      <div class="card">
        <div class="eyebrow">GovTech / RegTech</div>
        <h2>Good regulatory comments are workflow systems, not just polished prose.</h2>
        <p>This control plane makes deadline pressure, reviewer readiness, obligation coverage, and evidence gaps visible before a strong policy position dies in committee or misses the filing window.</p>
        <div class="stat-grid">
          <div class="stat"><label>Active Dockets</label><strong>${stats.docketCount}</strong><span>Rulemaking threads currently modeled across agencies and sectors.</span></div>
          <div class="stat"><label>Critical Items</label><strong>${stats.criticalCount}</strong><span>Comments or packets that can slip without direct intervention.</span></div>
          <div class="stat"><label>Due &lt; 14 Days</label><strong>${stats.dueWithin14Days}</strong><span>Submission windows with immediate calendar pressure.</span></div>
          <div class="stat"><label>Ready To Submit</label><strong>${stats.readyToSubmit}</strong><span>Dockets that have moved through drafting and review safely.</span></div>
        </div>
      </div>
      <div class="card right-panel">
        <div class="eyebrow">Operating Recommendation</div>
        <h3>${stats.recommendation}</h3>
        <div class="list">
          ${comments
            .slice(0, 3)
            .map(
              (item) => `<div class="item"><strong>${item.agency} · ${item.docketId}</strong><p>${item.ruleTitle}</p><span>${item.deadlineDays} days left · ${item.nextAction}</span></div>`
            )
            .join("")}
        </div>
      </div>
    </div>
    <div class="section-grid">
      <div class="table-wrap section">
        <div class="eyebrow">Deadline Queue</div>
        <h3>Which comments need intervention before the calendar wins.</h3>
        <table>
          <thead><tr><th>Docket</th><th>Agency</th><th>Stage</th><th>Days Left</th><th>Risk</th></tr></thead>
          <tbody>
            ${comments
              .map(
                (item) => `<tr><td><strong>${item.docketId}</strong><br />${item.ruleTitle}</td><td>${item.agency}</td><td>${item.stage}</td><td>${item.deadlineDays}</td><td><span class="tag ${riskClass(item.risk)}">${item.risk}</span></td></tr>`
              )
              .join("")}
          </tbody>
        </table>
      </div>
      <div class="card section">
        <div class="eyebrow">Agency Coverage</div>
        <h3>Where the comment desk is carrying cross-sector load.</h3>
        <div class="list">
          ${agencies
            .map(
              (agency) => `<div class="item"><strong>${agency.agency}</strong><span>${agency.commentCount} active docket${agency.commentCount === 1 ? "" : "s"} currently modeled.</span></div>`
            )
            .join("")}
        </div>
      </div>
    </div>
    <div class="card section">
      <div class="eyebrow">Obligation Gaps</div>
      <h3>Strong comments usually break where evidence ownership is fuzzy.</h3>
      <div class="card-grid">
        ${obligations
          .map(
            (item) => `<div class="stat"><label>${item.sourceSection}</label><strong style="font-size: 24px;">${item.impactArea}</strong><span>${item.obligation}</span><div class="footer-note"><span class="tag ${readinessClass(item.readiness)}">${item.readiness}</span> · ${item.owner} · ${item.evidenceGap}</div></div>`
          )
          .join("")}
      </div>
      <div class="footer-note">The regulated-workflow value is not “write a comment.” It is “show what still blocks sign-off, who owns it, and whether the submission path is commercially and legally safe.”</div>
    </div>`
  );
}

export function renderCommentLane() {
  return layout(
    "Regulatory Comment Intelligence Hub — Comment Lane",
    `${topbar("/comment-lane")}
    <div class="card section">
      <div class="eyebrow">Comment Lane</div>
      <h2 style="margin: 6px 0 10px; font: 700 46px/1 Georgia, serif;">A queue view of comment work, not a pile of disconnected drafts.</h2>
      <p>Each row shows where the submission sits, who owns the next move, and whether the issue is really substance, evidence, or calendar risk.</p>
    </div>
    <div class="table-wrap section" style="margin-top: 22px;">
      <table>
        <thead><tr><th>Docket</th><th>Sector</th><th>Lead</th><th>Stage</th><th>Days Left</th><th>Next Action</th><th>Risk</th></tr></thead>
        <tbody>
          ${commentLane()
            .map(
              (item) => `<tr><td><strong>${item.agency}</strong><br />${item.docketId}<br />${item.ruleTitle}</td><td>${item.sector}</td><td>${item.leadAnalyst}</td><td>${item.stage}</td><td>${item.deadlineDays}</td><td>${item.nextAction}</td><td><span class="tag ${riskClass(item.risk)}">${item.risk}</span></td></tr>`
            )
            .join("")}
        </tbody>
      </table>
    </div>`
  );
}

export function renderObligationMap() {
  return layout(
    "Regulatory Comment Intelligence Hub — Obligation Map",
    `${topbar("/obligation-map")}
    <div class="card section">
      <div class="eyebrow">Obligation Map</div>
      <h2 style="margin: 6px 0 10px; font: 700 46px/1 Georgia, serif;">Submission quality depends on whether each prompt has a real owner and real evidence.</h2>
      <p>This lane maps comment obligations to impact areas, readiness, and the evidence gaps that still need operational closure.</p>
    </div>
    <div class="section-grid" style="margin-top: 22px;">
      <div class="table-wrap section">
        <table>
          <thead><tr><th>Section</th><th>Obligation</th><th>Owner</th><th>Readiness</th></tr></thead>
          <tbody>
            ${obligationMap()
              .map(
                (item) => `<tr><td><strong>${item.sourceSection}</strong><br />${item.impactArea}</td><td>${item.obligation}</td><td>${item.owner}</td><td><span class="tag ${readinessClass(item.readiness)}">${item.readiness}</span></td></tr>`
              )
              .join("")}
        </tbody>
      </table>
      </div>
      <div class="card section">
        <div class="eyebrow">Evidence Gaps</div>
        <h3>Where approval is likely to slow down.</h3>
        <div class="list">
          ${obligationMap()
            .map(
              (item) => `<div class="item"><strong>${item.id} · ${item.owner}</strong><p>${item.evidenceGap}</p><span>${item.impactArea} · ${item.sourceSection}</span></div>`
            )
            .join("")}
        </div>
      </div>
    </div>`
  );
}

export function renderApprovalPosture() {
  return layout(
    "Regulatory Comment Intelligence Hub — Approval Posture",
    `${topbar("/approval-posture")}
    <div class="card section">
      <div class="eyebrow">Approval Posture</div>
      <h2 style="margin: 6px 0 10px; font: 700 46px/1 Georgia, serif;">Submission quality does not matter if approval collapses at the end.</h2>
      <p>This lane surfaces which packets are ready, which audiences are blocking them, and whether the remaining issue is judgment, evidence, or scheduling.</p>
    </div>
    <div class="card-grid" style="margin-top: 22px;">
      ${approvalPosture()
        .map(
          (packet) => `<div class="card section"><div class="eyebrow">${packet.packetId}</div><h3>${packet.audience}</h3><div class="stat-grid" style="grid-template-columns: repeat(2, minmax(0, 1fr)); margin-top: 0;"><div class="stat"><label>Completeness</label><strong style="font-size: 30px;">${packet.completenessScore}%</strong><span>${packet.dueDate}</span></div><div class="stat"><label>Status</label><strong style="font-size: 30px;"><span class="tag ${readinessClass(packet.status)}">${packet.status}</span></strong><span>${packet.blocker}</span></div></div><div class="footer-note">${packet.decisionNote}</div></div>`
        )
        .join("")}
    </div>`
  );
}

export function renderVerification() {
  return layout(
    "Regulatory Comment Intelligence Hub — Verification",
    `${topbar("/verification")}
    <div class="card section">
      <div class="eyebrow">Verification</div>
      <h2 style="margin: 6px 0 10px; font: 700 46px/1 Georgia, serif;">What this repo proves about regulated workflow systems.</h2>
      <div class="list">
        ${verification().map((item) => `<div class="item"><strong>${item}</strong></div>`).join("")}
      </div>
    </div>`
  );
}

export function renderDocs() {
  return layout(
    "Regulatory Comment Intelligence Hub — Docs",
    `${topbar("/docs")}
    <div class="card section">
      <div class="eyebrow">Docs</div>
      <h2 style="margin: 6px 0 10px; font: 700 46px/1 Georgia, serif;">A control plane for regulated commenting, evidence ownership, and buyer-safe approval flow.</h2>
      <p>This repo models the operational layer between a public rulemaking request and a submission-ready comment packet: intake, docket triage, section-level obligation tracking, evidence packaging, reviewer routing, and final approval posture.</p>
      <div class="footer-note">Routes: <code>/</code> · <code>/comment-lane</code> · <code>/obligation-map</code> · <code>/approval-posture</code> · <code>/verification</code> · <code>/docs</code></div>
    </div>`
  );
}
