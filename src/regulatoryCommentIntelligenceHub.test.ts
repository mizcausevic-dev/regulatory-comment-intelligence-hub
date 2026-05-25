import { describe, expect, test } from "vitest";

import {
  agencyCoverage,
  approvalPosture,
  commentLane,
  obligationMap,
  payload,
  summary,
  verification
} from "./services/regulatoryCommentService";

describe("regulatory-comment-intelligence-hub", () => {
  test("summary exposes deadline pressure and approval readiness", () => {
    const stats = summary();
    expect(stats.docketCount).toBe(5);
    expect(stats.criticalCount).toBeGreaterThan(0);
    expect(stats.dueWithin14Days).toBeGreaterThan(0);
  });

  test("obligations and approvals stay commercially and operationally legible", () => {
    expect(obligationMap().length).toBe(4);
    expect(approvalPosture().some((packet) => packet.completenessScore < 80)).toBe(true);
    expect(agencyCoverage().length).toBeGreaterThan(3);
  });

  test("payload bundles the full regulated workflow surface", () => {
    expect(commentLane().length).toBe(5);
    expect(verification().length).toBe(3);
    expect(payload()).toHaveProperty("dashboard");
    expect(payload()).toHaveProperty("obligations");
    expect(payload()).toHaveProperty("approvals");
  });
});
