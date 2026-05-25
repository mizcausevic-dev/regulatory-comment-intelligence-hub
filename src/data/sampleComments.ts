export type CommentStage =
  | "drafting"
  | "legal-review"
  | "evidence-packaging"
  | "approval-board"
  | "ready-to-submit";

export type RiskLevel = "healthy" | "watch" | "critical";
export type ReadinessLevel = "green" | "yellow" | "red";

export interface CommentRecord {
  docketId: string;
  agency: string;
  ruleTitle: string;
  sector: string;
  stage: CommentStage;
  leadAnalyst: string;
  deadlineDays: number;
  risk: RiskLevel;
  summary: string;
  nextAction: string;
}

export interface ObligationItem {
  id: string;
  sourceSection: string;
  obligation: string;
  owner: string;
  impactArea: string;
  readiness: ReadinessLevel;
  evidenceGap: string;
}

export interface ApprovalPacket {
  packetId: string;
  audience: string;
  completenessScore: number;
  blocker: string;
  status: ReadinessLevel;
  dueDate: string;
  decisionNote: string;
}

export const commentRecords: CommentRecord[] = [
  {
    docketId: "EPA-HQ-OAR-2026-0142",
    agency: "EPA",
    ruleTitle: "Methane monitoring requirements for upstream operators",
    sector: "CleanTech / Energy",
    stage: "evidence-packaging",
    leadAnalyst: "Policy Counsel",
    deadlineDays: 9,
    risk: "critical",
    summary: "Operational telemetry is strong, but vendor-attested measurement methodology still needs supporting language.",
    nextAction: "Finalize measurement appendix and attach field-method evidence packet before legal review closes."
  },
  {
    docketId: "CMS-2026-0091",
    agency: "CMS",
    ruleTitle: "Prior authorization transparency and turnaround posture",
    sector: "Digital Health / MedTech",
    stage: "legal-review",
    leadAnalyst: "Clinical Ops Lead",
    deadlineDays: 12,
    risk: "watch",
    summary: "Workflow and provider burden examples are ready, but payer exception math needs finance validation.",
    nextAction: "Resolve economic-impact table and align objection language with legal and compliance."
  },
  {
    docketId: "FTC-2026-0207",
    agency: "FTC",
    ruleTitle: "Consumer data portability and dark-pattern disclosure",
    sector: "MarTech / AdTech",
    stage: "approval-board",
    leadAnalyst: "Privacy Program Manager",
    deadlineDays: 5,
    risk: "critical",
    summary: "Draft narrative is board-ready, but third-party data-broker examples need brand-safe redaction.",
    nextAction: "Approve redacted examples and move final packet into executive sign-off."
  },
  {
    docketId: "DOT-OST-2026-0068",
    agency: "DOT",
    ruleTitle: "Fleet safety event reporting modernization",
    sector: "Mobility / Transportation",
    stage: "drafting",
    leadAnalyst: "Operations Research Lead",
    deadlineDays: 18,
    risk: "healthy",
    summary: "Strong operational evidence exists from dispatch dashboards, but the narrative still needs industry framing.",
    nextAction: "Convert dispatch latency metrics into a comment narrative structured around incident-prevention outcomes."
  },
  {
    docketId: "SEC-2026-0044",
    agency: "SEC",
    ruleTitle: "Cyber disclosure materiality timing updates",
    sector: "GovTech / RegTech",
    stage: "ready-to-submit",
    leadAnalyst: "Security Governance Director",
    deadlineDays: 3,
    risk: "watch",
    summary: "Evidence and counsel language are complete; final submission checklist only needs executive attestation.",
    nextAction: "Confirm signatory availability and submit before the filing window compresses further."
  }
];

export const obligationItems: ObligationItem[] = [
  {
    id: "OB-11",
    sourceSection: "§ 4.2(a)",
    obligation: "Show measurable implementation burden for mid-market operators, not only enterprise examples.",
    owner: "Research Ops",
    impactArea: "Economic impact",
    readiness: "yellow",
    evidenceGap: "Need one more benchmark from a smaller deployment profile."
  },
  {
    id: "OB-19",
    sourceSection: "Appendix B",
    obligation: "Tie telemetry claims to named system-of-record exports and retention windows.",
    owner: "Platform Engineering",
    impactArea: "Technical evidence",
    readiness: "red",
    evidenceGap: "Retention evidence is fragmented across logging and analytics teams."
  },
  {
    id: "OB-23",
    sourceSection: "Question 7",
    obligation: "Explain how proposed language changes would affect review cycle time and staff workload.",
    owner: "RevOps Strategy",
    impactArea: "Workflow operations",
    readiness: "green",
    evidenceGap: "No blocking gap; cycle-time model already attached."
  },
  {
    id: "OB-28",
    sourceSection: "Request for Comment 12",
    obligation: "Map consumer-protection concerns to actual release controls and review gates.",
    owner: "Compliance PM",
    impactArea: "Governance controls",
    readiness: "yellow",
    evidenceGap: "Need final screenshot pack from the release workflow system."
  }
];

export const approvalPackets: ApprovalPacket[] = [
  {
    packetId: "PKT-301",
    audience: "Executive sign-off",
    completenessScore: 92,
    blocker: "Awaiting signatory scheduling confirmation.",
    status: "yellow",
    dueDate: "2026-05-29",
    decisionNote: "Commercial argument is strong; timing risk is now the main exposure."
  },
  {
    packetId: "PKT-287",
    audience: "Legal and privacy",
    completenessScore: 78,
    blocker: "Redacted examples require final approval.",
    status: "red",
    dueDate: "2026-05-27",
    decisionNote: "Narrative quality is solid, but evidence cannot move forward while disclosure examples are unresolved."
  },
  {
    packetId: "PKT-276",
    audience: "Policy and analyst review",
    completenessScore: 96,
    blocker: "None.",
    status: "green",
    dueDate: "2026-05-31",
    decisionNote: "Ready for handoff; issue is no longer substance but calendar discipline."
  }
];
