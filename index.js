//  github api
//  octokit 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
const { Octokit } = require("octokit");
const core = require("@actions/core");
const token = core.getInput("token");
const octokit = new Octokit({
  auth: token,
});

// octokit api create issue
octokit.rest.issues.create({
  owner: "LockingReal",
  repo: "issues-action",
  title: getTitle(),
  body: getBody(),
});

function getTitle() {
  return dayjs().format("YYYY-MM-DD");
}

function getBody() {
  return "[如何写每日任务](https://github.com/cuixiaorui/study-every-day/blob/main/sed/daily-task.md)";
}
