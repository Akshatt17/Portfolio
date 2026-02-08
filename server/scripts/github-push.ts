import { getUncachableGitHubClient } from './github';
import fs from 'fs';
import path from 'path';

async function pushToGitHub() {
  try {
    const octokit = await getUncachableGitHubClient();
    const { data: user } = await octokit.users.getAuthenticated();
    const repoName = 'akshatt-tayal-portfolio';
    
    console.log(`Authenticated as ${user.login}. Creating repository...`);

    let repo;
    try {
      const { data } = await octokit.repos.createForAuthenticatedUser({
        name: repoName,
        private: false,
        auto_init: false,
      });
      repo = data;
      console.log(`Repository created: ${repo.html_url}`);
    } catch (err: any) {
      if (err.status === 422) {
        console.log('Repository already exists, fetching details...');
        const { data } = await octokit.repos.get({
          owner: user.login,
          repo: repoName,
        });
        repo = data;
      } else {
        throw err;
      }
    }

    // This is a simplified push script. For a full git push, 
    // we'd normally use the git CLI, but here we'll use the API 
    // to create a commit for the current state.
    console.log('Preparing files for commit...');
    
    // In a real scenario, we'd use git push. Since we have shell access, 
    // let's try to use git CLI with the token.
    const accessToken = await (octokit.auth as any)();
    const remoteUrl = `https://x-access-token:${accessToken}@github.com/${user.login}/${repoName}.git`;
    
    return remoteUrl;
  } catch (error) {
    console.error('Error in GitHub operation:', error);
    throw error;
  }
}

pushToGitHub().then(url => {
  console.log(`GIT_REMOTE_URL=${url}`);
}).catch(err => {
  console.error(err);
  process.exit(1);
});
