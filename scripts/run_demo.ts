import { payload, summary } from "../src/services/regulatoryCommentService";

console.log("regulatory-comment-intelligence-hub demo");
console.log(JSON.stringify(summary(), null, 2));
console.log(JSON.stringify(payload().obligations, null, 2));
