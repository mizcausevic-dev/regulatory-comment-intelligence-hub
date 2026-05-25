import express from "express";

import {
  approvalPosture,
  commentLane,
  obligationMap,
  payload,
  summary,
  verification
} from "./services/regulatoryCommentService";
import {
  renderApprovalPosture,
  renderCommentLane,
  renderDocs,
  renderObligationMap,
  renderOverview,
  renderVerification
} from "./services/render";

const app = express();
const port = Number(process.env.PORT ?? 5414);

app.get("/", (_req, res) => res.type("html").send(renderOverview()));
app.get("/comment-lane", (_req, res) => res.type("html").send(renderCommentLane()));
app.get("/obligation-map", (_req, res) => res.type("html").send(renderObligationMap()));
app.get("/approval-posture", (_req, res) => res.type("html").send(renderApprovalPosture()));
app.get("/verification", (_req, res) => res.type("html").send(renderVerification()));
app.get("/docs", (_req, res) => res.type("html").send(renderDocs()));

app.get("/api/dashboard/summary", (_req, res) => res.json(summary()));
app.get("/api/comment-lane", (_req, res) => res.json(commentLane()));
app.get("/api/obligation-map", (_req, res) => res.json(obligationMap()));
app.get("/api/approval-posture", (_req, res) => res.json(approvalPosture()));
app.get("/api/verification", (_req, res) => res.json(verification()));
app.get("/api/sample", (_req, res) => res.json(payload()));

if (require.main === module) {
  app.listen(port, "127.0.0.1", () => {
    console.log(`Regulatory Comment Intelligence Hub listening on http://127.0.0.1:${port}`);
  });
}

export default app;
