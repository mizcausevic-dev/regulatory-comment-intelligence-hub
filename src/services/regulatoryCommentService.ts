import { approvalPackets, commentRecords, obligationItems } from "../data/sampleComments";

export function summary() {
  return {
    docketCount: commentRecords.length,
    criticalCount: commentRecords.filter((item) => item.risk === "critical").length,
    dueWithin14Days: commentRecords.filter((item) => item.deadlineDays <= 14).length,
    readyToSubmit: commentRecords.filter((item) => item.stage === "ready-to-submit").length,
    recommendation:
      "Resolve approval blockers and evidence gaps first so substantive comments do not miss their submission window."
  };
}

export function commentLane() {
  return commentRecords;
}

export function obligationMap() {
  return obligationItems;
}

export function approvalPosture() {
  return approvalPackets;
}

export function agencyCoverage() {
  const counts = new Map<string, number>();
  for (const record of commentRecords) {
    counts.set(record.agency, (counts.get(record.agency) ?? 0) + 1);
  }

  return Array.from(counts.entries()).map(([agency, commentCount]) => ({
    agency,
    commentCount
  }));
}

export function verification() {
  return [
    "The queue models real deadline pressure instead of treating regulatory commenting like a static writing task.",
    "Obligation mapping exposes which sections still need technical, operational, or legal evidence before sign-off.",
    "Approval posture turns comment submission into a cross-functional workflow with commercial and governance consequences."
  ];
}

export function payload() {
  return {
    dashboard: summary(),
    comments: commentLane(),
    obligations: obligationMap(),
    approvals: approvalPosture(),
    agencies: agencyCoverage(),
    verification: verification()
  };
}
