//  github api
//  octokit

const octokit = new Octokit({ auth: `personal-access-token123` });

// octokit api create issue

await octokit.rest.issues.create({
  owner: "octocat",
  repo: "hello-world",
  title: "Hello World from " + slug,
});
