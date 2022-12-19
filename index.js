//  github api
//  octokit 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
const { Octokit } = require("octokit");
const core = require('@actions/core');
const token = core.getInput('token');
const octokit = new Octokit({
  auth: token,
});

// octokit api create issue
octokit.rest.issues.create({
  owner: "LockingReal",
  repo: "issues-action",
  title: "lockingreal first issue",
  body:"test",
});
