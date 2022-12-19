//  github api
//  octokit
const { Octokit } = require("octokit");
const octokit = new Octokit({
  auth: `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`,
});

// octokit api create issue
octokit.rest.issues.create({
  owner: "LockingReal",
  repo: "issues-action",
  title: "lockingreal first issue",
  body:"test",
});
