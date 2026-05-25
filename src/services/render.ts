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
  <style>
    :root {
      --bg: #f4f0e7;
      --paper: #fbf9f3;
      --ink: #1d2026;
      --muted: #5f6470;
      --border: #d8d2c7;
      --accent: #0f766e;
      --accent-2: #1d4ed8;
      --watch: #b45309;
      --critical: #b91c1c;
      --green: #166534;
      --yellow: #a16207;
      --red: #b91c1c;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      background: linear-gradient(180deg, #ece6dc 0%, #f7f4ee 100%);
      color: var(--ink);
      font-family: Georgia, "Times New Roman", serif;
    }
    .shell {
      max-width: 1380px;
      margin: 0 auto;
      padding: 28px;
    }
    .topbar, .card, .table-wrap {
      background: rgba(251, 249, 243, 0.94);
      border: 1px solid var(--border);
      border-radius: 18px;
      box-shadow: 0 16px 40px rgba(36, 32, 27, 0.08);
    }
    .topbar {
      padding: 18px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
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
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font: 700 16px/1 Arial, sans-serif;
    }
    .eyebrow {
      font: 600 11px/1.4 Arial, sans-serif;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--accent);
      margin-bottom: 4px;
    }
    .brand h1 {
      margin: 0;
      font: 700 28px/1.1 Arial, sans-serif;
    }
    .brand p {
      margin: 3px 0 0;
      color: var(--muted);
      font: 14px/1.5 Arial, sans-serif;
    }
    nav a {
      text-decoration: none;
      color: var(--muted);
      font: 600 13px/1 Arial, sans-serif;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-left: 16px;
    }
    nav a.active, nav a:hover { color: var(--ink); }
    .hero {
      display: grid;
      grid-template-columns: 1.6fr 1fr;
      gap: 22px;
      margin-bottom: 22px;
    }
    .card { padding: 24px; }
    .hero h2 {
      margin: 8px 0 10px;
      font: 700 54px/0.98 Georgia, serif;
      letter-spacing: -0.03em;
    }
    .hero p,
    .section p {
      color: var(--muted);
      font: 18px/1.6 Arial, sans-serif;
      margin: 0 0 18px;
    }
    .stat-grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 16px;
      margin-top: 16px;
    }
    .stat {
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 16px;
      background: rgba(255,255,255,0.56);
    }
    .stat label {
      display: block;
      color: var(--muted);
      font: 700 11px/1.4 Arial, sans-serif;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .stat strong {
      display: block;
      font: 700 40px/1 Arial, sans-serif;
      margin-bottom: 8px;
    }
    .stat span {
      display: block;
      color: var(--muted);
      font: 13px/1.5 Arial, sans-serif;
    }
    .section-grid {
      display: grid;
      grid-template-columns: 1.3fr 1fr;
      gap: 22px;
      margin-bottom: 22px;
    }
    .right-panel h3, .section h3 {
      margin: 0 0 12px;
      font: 700 20px/1.2 Arial, sans-serif;
    }
    .list {
      display: grid;
      gap: 12px;
    }
    .item {
      border-top: 1px solid var(--border);
      padding-top: 12px;
    }
    .item:first-child {
      border-top: 0;
      padding-top: 0;
    }
    .item strong {
      display: block;
      font: 700 15px/1.4 Arial, sans-serif;
      margin-bottom: 4px;
    }
    .item p, .item span {
      color: var(--muted);
      font: 13px/1.6 Arial, sans-serif;
      margin: 0;
    }
    .table-wrap {
      padding: 14px 18px 18px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      font: 14px/1.5 Arial, sans-serif;
    }
    th, td {
      text-align: left;
      padding: 14px 10px;
      border-bottom: 1px solid var(--border);
      vertical-align: top;
    }
    th {
      color: var(--muted);
      font: 700 11px/1.4 Arial, sans-serif;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    .tag {
      display: inline-block;
      padding: 4px 8px;
      border-radius: 999px;
      font: 700 11px/1 Arial, sans-serif;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      background: #e5f3f1;
      color: var(--accent);
    }
    .tag.watch, .tag.yellow { background: #fdf1db; color: var(--yellow); }
    .tag.critical, .tag.red { background: #fee5e5; color: var(--red); }
    .tag.green { background: #e7f7ec; color: var(--green); }
    .footer-note {
      margin-top: 12px;
      color: var(--muted);
      font: 13px/1.6 Arial, sans-serif;
    }
    .card-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 18px;
    }
    @media (max-width: 980px) {
      .hero, .section-grid, .card-grid { grid-template-columns: 1fr; }
      .stat-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      nav { display: none; }
    }
  </style>
</head>
<body>
  <div class="shell">
    ${body}
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
      .join("")}</nav>
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
