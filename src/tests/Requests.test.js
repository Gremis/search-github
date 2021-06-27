import axios from "axios";

import { getUser, getRepos, getStarred } from "../services/Requests";

jest.mock("axios");

// Teste Enpoint 1

describe("fetchData getUser", () => {
  it("fetches successfully user data from the GitHub API", async () => {
    const data = {
      login: "Gremis",
      id: 48386386,
      node_id: "MDQ6VXNlcjQ4Mzg2Mzg2",
      avatar_url: "https://avatars.githubusercontent.com/u/48386386?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/Gremis",
      html_url: "https://github.com/Gremis",
      followers_url: "https://api.github.com/users/Gremis/followers",
      following_url:
        "https://api.github.com/users/Gremis/following{/other_user}",
      gists_url: "https://api.github.com/users/Gremis/gists{/gist_id}",
      starred_url: "https://api.github.com/users/Gremis/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/Gremis/subscriptions",
      organizations_url: "https://api.github.com/users/Gremis/orgs",
      repos_url: "https://api.github.com/users/Gremis/repos",
      events_url: "https://api.github.com/users/Gremis/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/Gremis/received_events",
      type: "User",
      site_admin: false,
      name: "Gremis Tovar",
      company: null,
      blog: "",
      location: "Brazil",
      email: null,
      hireable: null,
      bio: "Web FrontEnd Developer\r\n",
      twitter_username: null,
      public_repos: 36,
      public_gists: 0,
      followers: 2,
      following: 2,
      created_at: "2019-03-09T14:52:59Z",
      updated_at: "2021-06-25T19:51:23Z",
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(getUser("gremis")).resolves.toEqual(data);

    expect(axios.get).toHaveBeenCalledWith(
      `https://api.github.com/users/gremis?client_id=6f0a4c8107235118423f&client_secret=404a32dd46e3df5b6c13b2da1278411185a95a46`
    );
  });

  it("fetches erroneously data from the user github API", async () => {
    const errorMessage = "Network Error";

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );

    await expect(getUser("gremis")).rejects.toThrow(errorMessage);
  });
});

// Teste Enpoint 2

describe("fetchData getRepos", () => {
  it("fetches successfully user repos from the Github API", async () => {
    const data = [
      {
        id: 271430506,
        node_id: "MDEwOlJlcG9zaXRvcnkyNzE0MzA1MDY=",
        name: "animoteste",
        full_name: "Gremis/animoteste",
        private: false,
        owner: {
          login: "Gremis",
          id: 48386386,
          node_id: "MDQ6VXNlcjQ4Mzg2Mzg2",
          avatar_url: "https://avatars.githubusercontent.com/u/48386386?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Gremis",
          html_url: "https://github.com/Gremis",
          followers_url: "https://api.github.com/users/Gremis/followers",
          following_url:
            "https://api.github.com/users/Gremis/following{/other_user}",
          gists_url: "https://api.github.com/users/Gremis/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Gremis/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Gremis/subscriptions",
          organizations_url: "https://api.github.com/users/Gremis/orgs",
          repos_url: "https://api.github.com/users/Gremis/repos",
          events_url: "https://api.github.com/users/Gremis/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Gremis/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/Gremis/animoteste",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/Gremis/animoteste",
        forks_url: "https://api.github.com/repos/Gremis/animoteste/forks",
        keys_url:
          "https://api.github.com/repos/Gremis/animoteste/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/Gremis/animoteste/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/Gremis/animoteste/teams",
        hooks_url: "https://api.github.com/repos/Gremis/animoteste/hooks",
        issue_events_url:
          "https://api.github.com/repos/Gremis/animoteste/issues/events{/number}",
        events_url: "https://api.github.com/repos/Gremis/animoteste/events",
        assignees_url:
          "https://api.github.com/repos/Gremis/animoteste/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/Gremis/animoteste/branches{/branch}",
        tags_url: "https://api.github.com/repos/Gremis/animoteste/tags",
        blobs_url:
          "https://api.github.com/repos/Gremis/animoteste/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/Gremis/animoteste/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/Gremis/animoteste/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/Gremis/animoteste/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/Gremis/animoteste/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/Gremis/animoteste/languages",
        stargazers_url:
          "https://api.github.com/repos/Gremis/animoteste/stargazers",
        contributors_url:
          "https://api.github.com/repos/Gremis/animoteste/contributors",
        subscribers_url:
          "https://api.github.com/repos/Gremis/animoteste/subscribers",
        subscription_url:
          "https://api.github.com/repos/Gremis/animoteste/subscription",
        commits_url:
          "https://api.github.com/repos/Gremis/animoteste/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/Gremis/animoteste/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/Gremis/animoteste/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/Gremis/animoteste/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/Gremis/animoteste/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/Gremis/animoteste/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/Gremis/animoteste/merges",
        archive_url:
          "https://api.github.com/repos/Gremis/animoteste/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/Gremis/animoteste/downloads",
        issues_url:
          "https://api.github.com/repos/Gremis/animoteste/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/Gremis/animoteste/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/Gremis/animoteste/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/Gremis/animoteste/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/Gremis/animoteste/labels{/name}",
        releases_url:
          "https://api.github.com/repos/Gremis/animoteste/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/Gremis/animoteste/deployments",
        created_at: "2020-06-11T02:15:02Z",
        updated_at: "2021-05-19T18:23:15Z",
        pushed_at: "2020-08-09T18:17:23Z",
        git_url: "git://github.com/Gremis/animoteste.git",
        ssh_url: "git@github.com:Gremis/animoteste.git",
        clone_url: "https://github.com/Gremis/animoteste.git",
        svn_url: "https://github.com/Gremis/animoteste",
        homepage: "animoteste.vercel.app",
        size: 10019,
        stargazers_count: 1,
        watchers_count: 1,
        language: "CSS",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "master",
      },
      {
        id: 337736162,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzc3MzYxNjI=",
        name: "AplicacionTareas",
        full_name: "Gremis/AplicacionTareas",
        private: false,
        owner: {
          login: "Gremis",
          id: 48386386,
          node_id: "MDQ6VXNlcjQ4Mzg2Mzg2",
          avatar_url: "https://avatars.githubusercontent.com/u/48386386?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Gremis",
          html_url: "https://github.com/Gremis",
          followers_url: "https://api.github.com/users/Gremis/followers",
          following_url:
            "https://api.github.com/users/Gremis/following{/other_user}",
          gists_url: "https://api.github.com/users/Gremis/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Gremis/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Gremis/subscriptions",
          organizations_url: "https://api.github.com/users/Gremis/orgs",
          repos_url: "https://api.github.com/users/Gremis/repos",
          events_url: "https://api.github.com/users/Gremis/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Gremis/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/Gremis/AplicacionTareas",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/Gremis/AplicacionTareas",
        forks_url: "https://api.github.com/repos/Gremis/AplicacionTareas/forks",
        keys_url:
          "https://api.github.com/repos/Gremis/AplicacionTareas/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/Gremis/AplicacionTareas/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/Gremis/AplicacionTareas/teams",
        hooks_url: "https://api.github.com/repos/Gremis/AplicacionTareas/hooks",
        issue_events_url:
          "https://api.github.com/repos/Gremis/AplicacionTareas/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/Gremis/AplicacionTareas/events",
        assignees_url:
          "https://api.github.com/repos/Gremis/AplicacionTareas/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/Gremis/AplicacionTareas/branches{/branch}",
        tags_url: "https://api.github.com/repos/Gremis/AplicacionTareas/tags",
        blobs_url:
          "https://api.github.com/repos/Gremis/AplicacionTareas/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/Gremis/AplicacionTareas/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/Gremis/AplicacionTareas/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/Gremis/AplicacionTareas/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/Gremis/AplicacionTareas/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/Gremis/AplicacionTareas/languages",
        stargazers_url:
          "https://api.github.com/repos/Gremis/AplicacionTareas/stargazers",
        contributors_url:
          "https://api.github.com/repos/Gremis/AplicacionTareas/contributors",
        subscribers_url:
          "https://api.github.com/repos/Gremis/AplicacionTareas/subscribers",
        subscription_url:
          "https://api.github.com/repos/Gremis/AplicacionTareas/subscription",
        commits_url:
          "https://api.github.com/repos/Gremis/AplicacionTareas/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/Gremis/AplicacionTareas/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/Gremis/AplicacionTareas/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/Gremis/AplicacionTareas/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/Gremis/AplicacionTareas/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/Gremis/AplicacionTareas/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/Gremis/AplicacionTareas/merges",
        archive_url:
          "https://api.github.com/repos/Gremis/AplicacionTareas/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/Gremis/AplicacionTareas/downloads",
        issues_url:
          "https://api.github.com/repos/Gremis/AplicacionTareas/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/Gremis/AplicacionTareas/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/Gremis/AplicacionTareas/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/Gremis/AplicacionTareas/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/Gremis/AplicacionTareas/labels{/name}",
        releases_url:
          "https://api.github.com/repos/Gremis/AplicacionTareas/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/Gremis/AplicacionTareas/deployments",
        created_at: "2021-02-10T13:42:22Z",
        updated_at: "2021-02-10T13:47:39Z",
        pushed_at: "2021-02-10T13:47:37Z",
        git_url: "git://github.com/Gremis/AplicacionTareas.git",
        ssh_url: "git@github.com:Gremis/AplicacionTareas.git",
        clone_url: "https://github.com/Gremis/AplicacionTareas.git",
        svn_url: "https://github.com/Gremis/AplicacionTareas",
        homepage: "aplicacion-tareas.gremis.vercel.app",
        size: 2,
        stargazers_count: 0,
        watchers_count: 0,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: "main",
      },
      {
        id: 337786444,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzc3ODY0NDQ=",
        name: "AppProdutos",
        full_name: "Gremis/AppProdutos",
        private: false,
        owner: {
          login: "Gremis",
          id: 48386386,
          node_id: "MDQ6VXNlcjQ4Mzg2Mzg2",
          avatar_url: "https://avatars.githubusercontent.com/u/48386386?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Gremis",
          html_url: "https://github.com/Gremis",
          followers_url: "https://api.github.com/users/Gremis/followers",
          following_url:
            "https://api.github.com/users/Gremis/following{/other_user}",
          gists_url: "https://api.github.com/users/Gremis/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Gremis/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Gremis/subscriptions",
          organizations_url: "https://api.github.com/users/Gremis/orgs",
          repos_url: "https://api.github.com/users/Gremis/repos",
          events_url: "https://api.github.com/users/Gremis/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Gremis/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/Gremis/AppProdutos",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/Gremis/AppProdutos",
        forks_url: "https://api.github.com/repos/Gremis/AppProdutos/forks",
        keys_url:
          "https://api.github.com/repos/Gremis/AppProdutos/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/Gremis/AppProdutos/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/Gremis/AppProdutos/teams",
        hooks_url: "https://api.github.com/repos/Gremis/AppProdutos/hooks",
        issue_events_url:
          "https://api.github.com/repos/Gremis/AppProdutos/issues/events{/number}",
        events_url: "https://api.github.com/repos/Gremis/AppProdutos/events",
        assignees_url:
          "https://api.github.com/repos/Gremis/AppProdutos/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/Gremis/AppProdutos/branches{/branch}",
        tags_url: "https://api.github.com/repos/Gremis/AppProdutos/tags",
        blobs_url:
          "https://api.github.com/repos/Gremis/AppProdutos/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/Gremis/AppProdutos/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/Gremis/AppProdutos/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/Gremis/AppProdutos/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/Gremis/AppProdutos/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/Gremis/AppProdutos/languages",
        stargazers_url:
          "https://api.github.com/repos/Gremis/AppProdutos/stargazers",
        contributors_url:
          "https://api.github.com/repos/Gremis/AppProdutos/contributors",
        subscribers_url:
          "https://api.github.com/repos/Gremis/AppProdutos/subscribers",
        subscription_url:
          "https://api.github.com/repos/Gremis/AppProdutos/subscription",
        commits_url:
          "https://api.github.com/repos/Gremis/AppProdutos/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/Gremis/AppProdutos/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/Gremis/AppProdutos/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/Gremis/AppProdutos/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/Gremis/AppProdutos/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/Gremis/AppProdutos/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/Gremis/AppProdutos/merges",
        archive_url:
          "https://api.github.com/repos/Gremis/AppProdutos/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/Gremis/AppProdutos/downloads",
        issues_url:
          "https://api.github.com/repos/Gremis/AppProdutos/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/Gremis/AppProdutos/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/Gremis/AppProdutos/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/Gremis/AppProdutos/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/Gremis/AppProdutos/labels{/name}",
        releases_url:
          "https://api.github.com/repos/Gremis/AppProdutos/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/Gremis/AppProdutos/deployments",
        created_at: "2021-02-10T16:39:51Z",
        updated_at: "2021-02-11T01:27:49Z",
        pushed_at: "2021-02-11T01:27:47Z",
        git_url: "git://github.com/Gremis/AppProdutos.git",
        ssh_url: "git@github.com:Gremis/AppProdutos.git",
        clone_url: "https://github.com/Gremis/AppProdutos.git",
        svn_url: "https://github.com/Gremis/AppProdutos",
        homepage: "app-produtos.gremis.vercel.app",
        size: 3,
        stargazers_count: 0,
        watchers_count: 0,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: "main",
      },
      {
        id: 356922945,
        node_id: "MDEwOlJlcG9zaXRvcnkzNTY5MjI5NDU=",
        name: "app_filme",
        full_name: "Gremis/app_filme",
        private: false,
        owner: {
          login: "Gremis",
          id: 48386386,
          node_id: "MDQ6VXNlcjQ4Mzg2Mzg2",
          avatar_url: "https://avatars.githubusercontent.com/u/48386386?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Gremis",
          html_url: "https://github.com/Gremis",
          followers_url: "https://api.github.com/users/Gremis/followers",
          following_url:
            "https://api.github.com/users/Gremis/following{/other_user}",
          gists_url: "https://api.github.com/users/Gremis/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Gremis/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Gremis/subscriptions",
          organizations_url: "https://api.github.com/users/Gremis/orgs",
          repos_url: "https://api.github.com/users/Gremis/repos",
          events_url: "https://api.github.com/users/Gremis/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Gremis/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/Gremis/app_filme",
        description:
          "Search your favorite films using The Movie Database API, using only Javascript, HTML and CSS",
        fork: false,
        url: "https://api.github.com/repos/Gremis/app_filme",
        forks_url: "https://api.github.com/repos/Gremis/app_filme/forks",
        keys_url: "https://api.github.com/repos/Gremis/app_filme/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/Gremis/app_filme/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/Gremis/app_filme/teams",
        hooks_url: "https://api.github.com/repos/Gremis/app_filme/hooks",
        issue_events_url:
          "https://api.github.com/repos/Gremis/app_filme/issues/events{/number}",
        events_url: "https://api.github.com/repos/Gremis/app_filme/events",
        assignees_url:
          "https://api.github.com/repos/Gremis/app_filme/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/Gremis/app_filme/branches{/branch}",
        tags_url: "https://api.github.com/repos/Gremis/app_filme/tags",
        blobs_url:
          "https://api.github.com/repos/Gremis/app_filme/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/Gremis/app_filme/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/Gremis/app_filme/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/Gremis/app_filme/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/Gremis/app_filme/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/Gremis/app_filme/languages",
        stargazers_url:
          "https://api.github.com/repos/Gremis/app_filme/stargazers",
        contributors_url:
          "https://api.github.com/repos/Gremis/app_filme/contributors",
        subscribers_url:
          "https://api.github.com/repos/Gremis/app_filme/subscribers",
        subscription_url:
          "https://api.github.com/repos/Gremis/app_filme/subscription",
        commits_url:
          "https://api.github.com/repos/Gremis/app_filme/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/Gremis/app_filme/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/Gremis/app_filme/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/Gremis/app_filme/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/Gremis/app_filme/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/Gremis/app_filme/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/Gremis/app_filme/merges",
        archive_url:
          "https://api.github.com/repos/Gremis/app_filme/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/Gremis/app_filme/downloads",
        issues_url:
          "https://api.github.com/repos/Gremis/app_filme/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/Gremis/app_filme/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/Gremis/app_filme/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/Gremis/app_filme/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/Gremis/app_filme/labels{/name}",
        releases_url:
          "https://api.github.com/repos/Gremis/app_filme/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/Gremis/app_filme/deployments",
        created_at: "2021-04-11T16:42:36Z",
        updated_at: "2021-04-24T22:08:49Z",
        pushed_at: "2021-04-24T22:08:47Z",
        git_url: "git://github.com/Gremis/app_filme.git",
        ssh_url: "git@github.com:Gremis/app_filme.git",
        clone_url: "https://github.com/Gremis/app_filme.git",
        svn_url: "https://github.com/Gremis/app_filme",
        homepage: "app-filme.vercel.app",
        size: 1623,
        stargazers_count: 0,
        watchers_count: 0,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: "main",
      },
      {
        id: 361007566,
        node_id: "MDEwOlJlcG9zaXRvcnkzNjEwMDc1NjY=",
        name: "Blackjack_DOM_Manipulation",
        full_name: "Gremis/Blackjack_DOM_Manipulation",
        private: false,
        owner: {
          login: "Gremis",
          id: 48386386,
          node_id: "MDQ6VXNlcjQ4Mzg2Mzg2",
          avatar_url: "https://avatars.githubusercontent.com/u/48386386?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Gremis",
          html_url: "https://github.com/Gremis",
          followers_url: "https://api.github.com/users/Gremis/followers",
          following_url:
            "https://api.github.com/users/Gremis/following{/other_user}",
          gists_url: "https://api.github.com/users/Gremis/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Gremis/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Gremis/subscriptions",
          organizations_url: "https://api.github.com/users/Gremis/orgs",
          repos_url: "https://api.github.com/users/Gremis/repos",
          events_url: "https://api.github.com/users/Gremis/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Gremis/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/Gremis/Blackjack_DOM_Manipulation",
        description: "Small game application build with Javascript",
        fork: false,
        url: "https://api.github.com/repos/Gremis/Blackjack_DOM_Manipulation",
        forks_url:
          "https://api.github.com/repos/Gremis/Blackjack_DOM_Manipulation/forks",
        keys_url:
          "https://api.github.com/repos/Gremis/Blackjack_DOM_Manipulation/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/Gremis/Blackjack_DOM_Manipulation/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/Gremis/Blackjack_DOM_Manipulation/teams",
        hooks_url:
          "https://api.github.com/repos/Gremis/Blackjack_DOM_Manipulation/hooks",
        issue_events_url:
          "https://api.github.com/repos/Gremis/Blackjack_DOM_Manipulation/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/Gremis/Blackjack_DOM_Manipulation/events",
        assignees_url:
          "https://api.github.com/repos/Gremis/Blackjack_DOM_Manipulation/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/Gremis/Blackjack_DOM_Manipulation/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/Gremis/Blackjack_DOM_Manipulation/tags",
        blobs_url:
          "https://api.github.com/repos/Gremis/Blackjack_DOM_Manipulation/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/Gremis/Blackjack_DOM_Manipulation/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/Gremis/Blackjack_DOM_Manipulation/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/Gremis/Blackjack_DOM_Manipulation/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/Gremis/Blackjack_DOM_Manipulation/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/Gremis/Blackjack_DOM_Manipulation/languages",
        stargazers_url:
          "https://api.github.com/repos/Gremis/Blackjack_DOM_Manipulation/stargazers",
        contributors_url:
          "https://api.github.com/repos/Gremis/Blackjack_DOM_Manipulation/contributors",
        subscribers_url:
          "https://api.github.com/repos/Gremis/Blackjack_DOM_Manipulation/subscribers",
        subscription_url:
          "https://api.github.com/repos/Gremis/Blackjack_DOM_Manipulation/subscription",
        commits_url:
          "https://api.github.com/repos/Gremis/Blackjack_DOM_Manipulation/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/Gremis/Blackjack_DOM_Manipulation/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/Gremis/Blackjack_DOM_Manipulation/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/Gremis/Blackjack_DOM_Manipulation/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/Gremis/Blackjack_DOM_Manipulation/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/Gremis/Blackjack_DOM_Manipulation/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/Gremis/Blackjack_DOM_Manipulation/merges",
        archive_url:
          "https://api.github.com/repos/Gremis/Blackjack_DOM_Manipulation/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/Gremis/Blackjack_DOM_Manipulation/downloads",
        issues_url:
          "https://api.github.com/repos/Gremis/Blackjack_DOM_Manipulation/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/Gremis/Blackjack_DOM_Manipulation/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/Gremis/Blackjack_DOM_Manipulation/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/Gremis/Blackjack_DOM_Manipulation/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/Gremis/Blackjack_DOM_Manipulation/labels{/name}",
        releases_url:
          "https://api.github.com/repos/Gremis/Blackjack_DOM_Manipulation/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/Gremis/Blackjack_DOM_Manipulation/deployments",
        created_at: "2021-04-23T21:16:50Z",
        updated_at: "2021-04-25T03:31:07Z",
        pushed_at: "2021-04-25T03:31:05Z",
        git_url: "git://github.com/Gremis/Blackjack_DOM_Manipulation.git",
        ssh_url: "git@github.com:Gremis/Blackjack_DOM_Manipulation.git",
        clone_url: "https://github.com/Gremis/Blackjack_DOM_Manipulation.git",
        svn_url: "https://github.com/Gremis/Blackjack_DOM_Manipulation",
        homepage: "blackjack-dom-manipulation.vercel.app",
        size: 11466,
        stargazers_count: 0,
        watchers_count: 0,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: "main",
      },
      {
        id: 279726678,
        node_id: "MDEwOlJlcG9zaXRvcnkyNzk3MjY2Nzg=",
        name: "blog_responsive",
        full_name: "Gremis/blog_responsive",
        private: false,
        owner: {
          login: "Gremis",
          id: 48386386,
          node_id: "MDQ6VXNlcjQ4Mzg2Mzg2",
          avatar_url: "https://avatars.githubusercontent.com/u/48386386?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Gremis",
          html_url: "https://github.com/Gremis",
          followers_url: "https://api.github.com/users/Gremis/followers",
          following_url:
            "https://api.github.com/users/Gremis/following{/other_user}",
          gists_url: "https://api.github.com/users/Gremis/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Gremis/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Gremis/subscriptions",
          organizations_url: "https://api.github.com/users/Gremis/orgs",
          repos_url: "https://api.github.com/users/Gremis/repos",
          events_url: "https://api.github.com/users/Gremis/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Gremis/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/Gremis/blog_responsive",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/Gremis/blog_responsive",
        forks_url: "https://api.github.com/repos/Gremis/blog_responsive/forks",
        keys_url:
          "https://api.github.com/repos/Gremis/blog_responsive/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/Gremis/blog_responsive/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/Gremis/blog_responsive/teams",
        hooks_url: "https://api.github.com/repos/Gremis/blog_responsive/hooks",
        issue_events_url:
          "https://api.github.com/repos/Gremis/blog_responsive/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/Gremis/blog_responsive/events",
        assignees_url:
          "https://api.github.com/repos/Gremis/blog_responsive/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/Gremis/blog_responsive/branches{/branch}",
        tags_url: "https://api.github.com/repos/Gremis/blog_responsive/tags",
        blobs_url:
          "https://api.github.com/repos/Gremis/blog_responsive/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/Gremis/blog_responsive/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/Gremis/blog_responsive/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/Gremis/blog_responsive/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/Gremis/blog_responsive/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/Gremis/blog_responsive/languages",
        stargazers_url:
          "https://api.github.com/repos/Gremis/blog_responsive/stargazers",
        contributors_url:
          "https://api.github.com/repos/Gremis/blog_responsive/contributors",
        subscribers_url:
          "https://api.github.com/repos/Gremis/blog_responsive/subscribers",
        subscription_url:
          "https://api.github.com/repos/Gremis/blog_responsive/subscription",
        commits_url:
          "https://api.github.com/repos/Gremis/blog_responsive/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/Gremis/blog_responsive/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/Gremis/blog_responsive/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/Gremis/blog_responsive/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/Gremis/blog_responsive/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/Gremis/blog_responsive/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/Gremis/blog_responsive/merges",
        archive_url:
          "https://api.github.com/repos/Gremis/blog_responsive/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/Gremis/blog_responsive/downloads",
        issues_url:
          "https://api.github.com/repos/Gremis/blog_responsive/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/Gremis/blog_responsive/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/Gremis/blog_responsive/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/Gremis/blog_responsive/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/Gremis/blog_responsive/labels{/name}",
        releases_url:
          "https://api.github.com/repos/Gremis/blog_responsive/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/Gremis/blog_responsive/deployments",
        created_at: "2020-07-15T00:56:49Z",
        updated_at: "2021-05-19T18:22:15Z",
        pushed_at: "2020-07-15T12:27:35Z",
        git_url: "git://github.com/Gremis/blog_responsive.git",
        ssh_url: "git@github.com:Gremis/blog_responsive.git",
        clone_url: "https://github.com/Gremis/blog_responsive.git",
        svn_url: "https://github.com/Gremis/blog_responsive",
        homepage: "blog-responsive.vercel.app",
        size: 46023,
        stargazers_count: 1,
        watchers_count: 1,
        language: "CSS",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "master",
      },
      {
        id: 295209806,
        node_id: "MDEwOlJlcG9zaXRvcnkyOTUyMDk4MDY=",
        name: "calculator",
        full_name: "Gremis/calculator",
        private: false,
        owner: {
          login: "Gremis",
          id: 48386386,
          node_id: "MDQ6VXNlcjQ4Mzg2Mzg2",
          avatar_url: "https://avatars.githubusercontent.com/u/48386386?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Gremis",
          html_url: "https://github.com/Gremis",
          followers_url: "https://api.github.com/users/Gremis/followers",
          following_url:
            "https://api.github.com/users/Gremis/following{/other_user}",
          gists_url: "https://api.github.com/users/Gremis/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Gremis/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Gremis/subscriptions",
          organizations_url: "https://api.github.com/users/Gremis/orgs",
          repos_url: "https://api.github.com/users/Gremis/repos",
          events_url: "https://api.github.com/users/Gremis/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Gremis/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/Gremis/calculator",
        description: "Calcutator using html, css and javascript",
        fork: false,
        url: "https://api.github.com/repos/Gremis/calculator",
        forks_url: "https://api.github.com/repos/Gremis/calculator/forks",
        keys_url:
          "https://api.github.com/repos/Gremis/calculator/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/Gremis/calculator/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/Gremis/calculator/teams",
        hooks_url: "https://api.github.com/repos/Gremis/calculator/hooks",
        issue_events_url:
          "https://api.github.com/repos/Gremis/calculator/issues/events{/number}",
        events_url: "https://api.github.com/repos/Gremis/calculator/events",
        assignees_url:
          "https://api.github.com/repos/Gremis/calculator/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/Gremis/calculator/branches{/branch}",
        tags_url: "https://api.github.com/repos/Gremis/calculator/tags",
        blobs_url:
          "https://api.github.com/repos/Gremis/calculator/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/Gremis/calculator/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/Gremis/calculator/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/Gremis/calculator/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/Gremis/calculator/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/Gremis/calculator/languages",
        stargazers_url:
          "https://api.github.com/repos/Gremis/calculator/stargazers",
        contributors_url:
          "https://api.github.com/repos/Gremis/calculator/contributors",
        subscribers_url:
          "https://api.github.com/repos/Gremis/calculator/subscribers",
        subscription_url:
          "https://api.github.com/repos/Gremis/calculator/subscription",
        commits_url:
          "https://api.github.com/repos/Gremis/calculator/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/Gremis/calculator/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/Gremis/calculator/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/Gremis/calculator/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/Gremis/calculator/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/Gremis/calculator/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/Gremis/calculator/merges",
        archive_url:
          "https://api.github.com/repos/Gremis/calculator/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/Gremis/calculator/downloads",
        issues_url:
          "https://api.github.com/repos/Gremis/calculator/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/Gremis/calculator/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/Gremis/calculator/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/Gremis/calculator/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/Gremis/calculator/labels{/name}",
        releases_url:
          "https://api.github.com/repos/Gremis/calculator/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/Gremis/calculator/deployments",
        created_at: "2020-09-13T18:13:25Z",
        updated_at: "2020-09-13T18:19:31Z",
        pushed_at: "2020-09-13T18:19:18Z",
        git_url: "git://github.com/Gremis/calculator.git",
        ssh_url: "git@github.com:Gremis/calculator.git",
        clone_url: "https://github.com/Gremis/calculator.git",
        svn_url: "https://github.com/Gremis/calculator",
        homepage: "https://calculator-blue.vercel.app",
        size: 3,
        stargazers_count: 0,
        watchers_count: 0,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: "master",
      },
      {
        id: 286621435,
        node_id: "MDEwOlJlcG9zaXRvcnkyODY2MjE0MzU=",
        name: "chat",
        full_name: "Gremis/chat",
        private: false,
        owner: {
          login: "Gremis",
          id: 48386386,
          node_id: "MDQ6VXNlcjQ4Mzg2Mzg2",
          avatar_url: "https://avatars.githubusercontent.com/u/48386386?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Gremis",
          html_url: "https://github.com/Gremis",
          followers_url: "https://api.github.com/users/Gremis/followers",
          following_url:
            "https://api.github.com/users/Gremis/following{/other_user}",
          gists_url: "https://api.github.com/users/Gremis/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Gremis/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Gremis/subscriptions",
          organizations_url: "https://api.github.com/users/Gremis/orgs",
          repos_url: "https://api.github.com/users/Gremis/repos",
          events_url: "https://api.github.com/users/Gremis/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Gremis/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/Gremis/chat",
        description: "Chat usando HTML, CSS, PHP y AJAX",
        fork: false,
        url: "https://api.github.com/repos/Gremis/chat",
        forks_url: "https://api.github.com/repos/Gremis/chat/forks",
        keys_url: "https://api.github.com/repos/Gremis/chat/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/Gremis/chat/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/Gremis/chat/teams",
        hooks_url: "https://api.github.com/repos/Gremis/chat/hooks",
        issue_events_url:
          "https://api.github.com/repos/Gremis/chat/issues/events{/number}",
        events_url: "https://api.github.com/repos/Gremis/chat/events",
        assignees_url:
          "https://api.github.com/repos/Gremis/chat/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/Gremis/chat/branches{/branch}",
        tags_url: "https://api.github.com/repos/Gremis/chat/tags",
        blobs_url: "https://api.github.com/repos/Gremis/chat/git/blobs{/sha}",
        git_tags_url: "https://api.github.com/repos/Gremis/chat/git/tags{/sha}",
        git_refs_url: "https://api.github.com/repos/Gremis/chat/git/refs{/sha}",
        trees_url: "https://api.github.com/repos/Gremis/chat/git/trees{/sha}",
        statuses_url: "https://api.github.com/repos/Gremis/chat/statuses/{sha}",
        languages_url: "https://api.github.com/repos/Gremis/chat/languages",
        stargazers_url: "https://api.github.com/repos/Gremis/chat/stargazers",
        contributors_url:
          "https://api.github.com/repos/Gremis/chat/contributors",
        subscribers_url: "https://api.github.com/repos/Gremis/chat/subscribers",
        subscription_url:
          "https://api.github.com/repos/Gremis/chat/subscription",
        commits_url: "https://api.github.com/repos/Gremis/chat/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/Gremis/chat/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/Gremis/chat/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/Gremis/chat/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/Gremis/chat/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/Gremis/chat/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/Gremis/chat/merges",
        archive_url:
          "https://api.github.com/repos/Gremis/chat/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/Gremis/chat/downloads",
        issues_url: "https://api.github.com/repos/Gremis/chat/issues{/number}",
        pulls_url: "https://api.github.com/repos/Gremis/chat/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/Gremis/chat/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/Gremis/chat/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/Gremis/chat/labels{/name}",
        releases_url: "https://api.github.com/repos/Gremis/chat/releases{/id}",
        deployments_url: "https://api.github.com/repos/Gremis/chat/deployments",
        created_at: "2020-08-11T02:02:20Z",
        updated_at: "2021-02-18T14:58:03Z",
        pushed_at: "2020-08-11T02:04:57Z",
        git_url: "git://github.com/Gremis/chat.git",
        ssh_url: "git@github.com:Gremis/chat.git",
        clone_url: "https://github.com/Gremis/chat.git",
        svn_url: "https://github.com/Gremis/chat",
        homepage: null,
        size: 263,
        stargazers_count: 1,
        watchers_count: 1,
        language: "PHP",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "master",
      },
      {
        id: 361550833,
        node_id: "MDEwOlJlcG9zaXRvcnkzNjE1NTA4MzM=",
        name: "CRUD_Reactjs",
        full_name: "Gremis/CRUD_Reactjs",
        private: false,
        owner: {
          login: "Gremis",
          id: 48386386,
          node_id: "MDQ6VXNlcjQ4Mzg2Mzg2",
          avatar_url: "https://avatars.githubusercontent.com/u/48386386?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Gremis",
          html_url: "https://github.com/Gremis",
          followers_url: "https://api.github.com/users/Gremis/followers",
          following_url:
            "https://api.github.com/users/Gremis/following{/other_user}",
          gists_url: "https://api.github.com/users/Gremis/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Gremis/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Gremis/subscriptions",
          organizations_url: "https://api.github.com/users/Gremis/orgs",
          repos_url: "https://api.github.com/users/Gremis/repos",
          events_url: "https://api.github.com/users/Gremis/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Gremis/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/Gremis/CRUD_Reactjs",
        description: "JavaScript + React ---> Basic CRUD sem base de dados",
        fork: false,
        url: "https://api.github.com/repos/Gremis/CRUD_Reactjs",
        forks_url: "https://api.github.com/repos/Gremis/CRUD_Reactjs/forks",
        keys_url:
          "https://api.github.com/repos/Gremis/CRUD_Reactjs/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/Gremis/CRUD_Reactjs/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/Gremis/CRUD_Reactjs/teams",
        hooks_url: "https://api.github.com/repos/Gremis/CRUD_Reactjs/hooks",
        issue_events_url:
          "https://api.github.com/repos/Gremis/CRUD_Reactjs/issues/events{/number}",
        events_url: "https://api.github.com/repos/Gremis/CRUD_Reactjs/events",
        assignees_url:
          "https://api.github.com/repos/Gremis/CRUD_Reactjs/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/Gremis/CRUD_Reactjs/branches{/branch}",
        tags_url: "https://api.github.com/repos/Gremis/CRUD_Reactjs/tags",
        blobs_url:
          "https://api.github.com/repos/Gremis/CRUD_Reactjs/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/Gremis/CRUD_Reactjs/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/Gremis/CRUD_Reactjs/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/Gremis/CRUD_Reactjs/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/Gremis/CRUD_Reactjs/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/Gremis/CRUD_Reactjs/languages",
        stargazers_url:
          "https://api.github.com/repos/Gremis/CRUD_Reactjs/stargazers",
        contributors_url:
          "https://api.github.com/repos/Gremis/CRUD_Reactjs/contributors",
        subscribers_url:
          "https://api.github.com/repos/Gremis/CRUD_Reactjs/subscribers",
        subscription_url:
          "https://api.github.com/repos/Gremis/CRUD_Reactjs/subscription",
        commits_url:
          "https://api.github.com/repos/Gremis/CRUD_Reactjs/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/Gremis/CRUD_Reactjs/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/Gremis/CRUD_Reactjs/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/Gremis/CRUD_Reactjs/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/Gremis/CRUD_Reactjs/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/Gremis/CRUD_Reactjs/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/Gremis/CRUD_Reactjs/merges",
        archive_url:
          "https://api.github.com/repos/Gremis/CRUD_Reactjs/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/Gremis/CRUD_Reactjs/downloads",
        issues_url:
          "https://api.github.com/repos/Gremis/CRUD_Reactjs/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/Gremis/CRUD_Reactjs/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/Gremis/CRUD_Reactjs/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/Gremis/CRUD_Reactjs/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/Gremis/CRUD_Reactjs/labels{/name}",
        releases_url:
          "https://api.github.com/repos/Gremis/CRUD_Reactjs/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/Gremis/CRUD_Reactjs/deployments",
        created_at: "2021-04-25T22:16:51Z",
        updated_at: "2021-04-26T18:09:12Z",
        pushed_at: "2021-04-26T18:09:10Z",
        git_url: "git://github.com/Gremis/CRUD_Reactjs.git",
        ssh_url: "git@github.com:Gremis/CRUD_Reactjs.git",
        clone_url: "https://github.com/Gremis/CRUD_Reactjs.git",
        svn_url: "https://github.com/Gremis/CRUD_Reactjs",
        homepage: "",
        size: 189,
        stargazers_count: 0,
        watchers_count: 0,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: "main",
      },
      {
        id: 276518713,
        node_id: "MDEwOlJlcG9zaXRvcnkyNzY1MTg3MTM=",
        name: "CV",
        full_name: "Gremis/CV",
        private: false,
        owner: {
          login: "Gremis",
          id: 48386386,
          node_id: "MDQ6VXNlcjQ4Mzg2Mzg2",
          avatar_url: "https://avatars.githubusercontent.com/u/48386386?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Gremis",
          html_url: "https://github.com/Gremis",
          followers_url: "https://api.github.com/users/Gremis/followers",
          following_url:
            "https://api.github.com/users/Gremis/following{/other_user}",
          gists_url: "https://api.github.com/users/Gremis/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Gremis/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Gremis/subscriptions",
          organizations_url: "https://api.github.com/users/Gremis/orgs",
          repos_url: "https://api.github.com/users/Gremis/repos",
          events_url: "https://api.github.com/users/Gremis/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Gremis/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/Gremis/CV",
        description: "Curriculum Vitae",
        fork: false,
        url: "https://api.github.com/repos/Gremis/CV",
        forks_url: "https://api.github.com/repos/Gremis/CV/forks",
        keys_url: "https://api.github.com/repos/Gremis/CV/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/Gremis/CV/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/Gremis/CV/teams",
        hooks_url: "https://api.github.com/repos/Gremis/CV/hooks",
        issue_events_url:
          "https://api.github.com/repos/Gremis/CV/issues/events{/number}",
        events_url: "https://api.github.com/repos/Gremis/CV/events",
        assignees_url:
          "https://api.github.com/repos/Gremis/CV/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/Gremis/CV/branches{/branch}",
        tags_url: "https://api.github.com/repos/Gremis/CV/tags",
        blobs_url: "https://api.github.com/repos/Gremis/CV/git/blobs{/sha}",
        git_tags_url: "https://api.github.com/repos/Gremis/CV/git/tags{/sha}",
        git_refs_url: "https://api.github.com/repos/Gremis/CV/git/refs{/sha}",
        trees_url: "https://api.github.com/repos/Gremis/CV/git/trees{/sha}",
        statuses_url: "https://api.github.com/repos/Gremis/CV/statuses/{sha}",
        languages_url: "https://api.github.com/repos/Gremis/CV/languages",
        stargazers_url: "https://api.github.com/repos/Gremis/CV/stargazers",
        contributors_url: "https://api.github.com/repos/Gremis/CV/contributors",
        subscribers_url: "https://api.github.com/repos/Gremis/CV/subscribers",
        subscription_url: "https://api.github.com/repos/Gremis/CV/subscription",
        commits_url: "https://api.github.com/repos/Gremis/CV/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/Gremis/CV/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/Gremis/CV/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/Gremis/CV/issues/comments{/number}",
        contents_url: "https://api.github.com/repos/Gremis/CV/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/Gremis/CV/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/Gremis/CV/merges",
        archive_url:
          "https://api.github.com/repos/Gremis/CV/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/Gremis/CV/downloads",
        issues_url: "https://api.github.com/repos/Gremis/CV/issues{/number}",
        pulls_url: "https://api.github.com/repos/Gremis/CV/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/Gremis/CV/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/Gremis/CV/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/Gremis/CV/labels{/name}",
        releases_url: "https://api.github.com/repos/Gremis/CV/releases{/id}",
        deployments_url: "https://api.github.com/repos/Gremis/CV/deployments",
        created_at: "2020-07-02T01:25:15Z",
        updated_at: "2020-08-04T21:42:50Z",
        pushed_at: "2020-08-04T21:42:48Z",
        git_url: "git://github.com/Gremis/CV.git",
        ssh_url: "git@github.com:Gremis/CV.git",
        clone_url: "https://github.com/Gremis/CV.git",
        svn_url: "https://github.com/Gremis/CV",
        homepage: "https://cv-xi.vercel.app",
        size: 1429,
        stargazers_count: 1,
        watchers_count: 1,
        language: "HTML",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "master",
      },
      {
        id: 349386284,
        node_id: "MDEwOlJlcG9zaXRvcnkzNDkzODYyODQ=",
        name: "DesafioVagaTesseract",
        full_name: "Gremis/DesafioVagaTesseract",
        private: false,
        owner: {
          login: "Gremis",
          id: 48386386,
          node_id: "MDQ6VXNlcjQ4Mzg2Mzg2",
          avatar_url: "https://avatars.githubusercontent.com/u/48386386?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Gremis",
          html_url: "https://github.com/Gremis",
          followers_url: "https://api.github.com/users/Gremis/followers",
          following_url:
            "https://api.github.com/users/Gremis/following{/other_user}",
          gists_url: "https://api.github.com/users/Gremis/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Gremis/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Gremis/subscriptions",
          organizations_url: "https://api.github.com/users/Gremis/orgs",
          repos_url: "https://api.github.com/users/Gremis/repos",
          events_url: "https://api.github.com/users/Gremis/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Gremis/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/Gremis/DesafioVagaTesseract",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/Gremis/DesafioVagaTesseract",
        forks_url:
          "https://api.github.com/repos/Gremis/DesafioVagaTesseract/forks",
        keys_url:
          "https://api.github.com/repos/Gremis/DesafioVagaTesseract/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/Gremis/DesafioVagaTesseract/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/Gremis/DesafioVagaTesseract/teams",
        hooks_url:
          "https://api.github.com/repos/Gremis/DesafioVagaTesseract/hooks",
        issue_events_url:
          "https://api.github.com/repos/Gremis/DesafioVagaTesseract/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/Gremis/DesafioVagaTesseract/events",
        assignees_url:
          "https://api.github.com/repos/Gremis/DesafioVagaTesseract/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/Gremis/DesafioVagaTesseract/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/Gremis/DesafioVagaTesseract/tags",
        blobs_url:
          "https://api.github.com/repos/Gremis/DesafioVagaTesseract/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/Gremis/DesafioVagaTesseract/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/Gremis/DesafioVagaTesseract/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/Gremis/DesafioVagaTesseract/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/Gremis/DesafioVagaTesseract/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/Gremis/DesafioVagaTesseract/languages",
        stargazers_url:
          "https://api.github.com/repos/Gremis/DesafioVagaTesseract/stargazers",
        contributors_url:
          "https://api.github.com/repos/Gremis/DesafioVagaTesseract/contributors",
        subscribers_url:
          "https://api.github.com/repos/Gremis/DesafioVagaTesseract/subscribers",
        subscription_url:
          "https://api.github.com/repos/Gremis/DesafioVagaTesseract/subscription",
        commits_url:
          "https://api.github.com/repos/Gremis/DesafioVagaTesseract/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/Gremis/DesafioVagaTesseract/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/Gremis/DesafioVagaTesseract/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/Gremis/DesafioVagaTesseract/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/Gremis/DesafioVagaTesseract/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/Gremis/DesafioVagaTesseract/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/Gremis/DesafioVagaTesseract/merges",
        archive_url:
          "https://api.github.com/repos/Gremis/DesafioVagaTesseract/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/Gremis/DesafioVagaTesseract/downloads",
        issues_url:
          "https://api.github.com/repos/Gremis/DesafioVagaTesseract/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/Gremis/DesafioVagaTesseract/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/Gremis/DesafioVagaTesseract/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/Gremis/DesafioVagaTesseract/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/Gremis/DesafioVagaTesseract/labels{/name}",
        releases_url:
          "https://api.github.com/repos/Gremis/DesafioVagaTesseract/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/Gremis/DesafioVagaTesseract/deployments",
        created_at: "2021-03-19T10:36:33Z",
        updated_at: "2021-03-21T00:07:09Z",
        pushed_at: "2021-03-21T00:07:07Z",
        git_url: "git://github.com/Gremis/DesafioVagaTesseract.git",
        ssh_url: "git@github.com:Gremis/DesafioVagaTesseract.git",
        clone_url: "https://github.com/Gremis/DesafioVagaTesseract.git",
        svn_url: "https://github.com/Gremis/DesafioVagaTesseract",
        homepage: null,
        size: 199,
        stargazers_count: 0,
        watchers_count: 0,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: "main",
      },
      {
        id: 362560580,
        node_id: "MDEwOlJlcG9zaXRvcnkzNjI1NjA1ODA=",
        name: "formulario_registro_react_firebase",
        full_name: "Gremis/formulario_registro_react_firebase",
        private: false,
        owner: {
          login: "Gremis",
          id: 48386386,
          node_id: "MDQ6VXNlcjQ4Mzg2Mzg2",
          avatar_url: "https://avatars.githubusercontent.com/u/48386386?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Gremis",
          html_url: "https://github.com/Gremis",
          followers_url: "https://api.github.com/users/Gremis/followers",
          following_url:
            "https://api.github.com/users/Gremis/following{/other_user}",
          gists_url: "https://api.github.com/users/Gremis/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Gremis/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Gremis/subscriptions",
          organizations_url: "https://api.github.com/users/Gremis/orgs",
          repos_url: "https://api.github.com/users/Gremis/repos",
          events_url: "https://api.github.com/users/Gremis/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Gremis/received_events",
          type: "User",
          site_admin: false,
        },
        html_url:
          "https://github.com/Gremis/formulario_registro_react_firebase",
        description:
          " Basic Registration Form with Firebase Authentication, Bootstrap and react-router-dom",
        fork: false,
        url: "https://api.github.com/repos/Gremis/formulario_registro_react_firebase",
        forks_url:
          "https://api.github.com/repos/Gremis/formulario_registro_react_firebase/forks",
        keys_url:
          "https://api.github.com/repos/Gremis/formulario_registro_react_firebase/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/Gremis/formulario_registro_react_firebase/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/Gremis/formulario_registro_react_firebase/teams",
        hooks_url:
          "https://api.github.com/repos/Gremis/formulario_registro_react_firebase/hooks",
        issue_events_url:
          "https://api.github.com/repos/Gremis/formulario_registro_react_firebase/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/Gremis/formulario_registro_react_firebase/events",
        assignees_url:
          "https://api.github.com/repos/Gremis/formulario_registro_react_firebase/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/Gremis/formulario_registro_react_firebase/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/Gremis/formulario_registro_react_firebase/tags",
        blobs_url:
          "https://api.github.com/repos/Gremis/formulario_registro_react_firebase/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/Gremis/formulario_registro_react_firebase/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/Gremis/formulario_registro_react_firebase/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/Gremis/formulario_registro_react_firebase/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/Gremis/formulario_registro_react_firebase/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/Gremis/formulario_registro_react_firebase/languages",
        stargazers_url:
          "https://api.github.com/repos/Gremis/formulario_registro_react_firebase/stargazers",
        contributors_url:
          "https://api.github.com/repos/Gremis/formulario_registro_react_firebase/contributors",
        subscribers_url:
          "https://api.github.com/repos/Gremis/formulario_registro_react_firebase/subscribers",
        subscription_url:
          "https://api.github.com/repos/Gremis/formulario_registro_react_firebase/subscription",
        commits_url:
          "https://api.github.com/repos/Gremis/formulario_registro_react_firebase/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/Gremis/formulario_registro_react_firebase/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/Gremis/formulario_registro_react_firebase/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/Gremis/formulario_registro_react_firebase/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/Gremis/formulario_registro_react_firebase/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/Gremis/formulario_registro_react_firebase/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/Gremis/formulario_registro_react_firebase/merges",
        archive_url:
          "https://api.github.com/repos/Gremis/formulario_registro_react_firebase/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/Gremis/formulario_registro_react_firebase/downloads",
        issues_url:
          "https://api.github.com/repos/Gremis/formulario_registro_react_firebase/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/Gremis/formulario_registro_react_firebase/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/Gremis/formulario_registro_react_firebase/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/Gremis/formulario_registro_react_firebase/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/Gremis/formulario_registro_react_firebase/labels{/name}",
        releases_url:
          "https://api.github.com/repos/Gremis/formulario_registro_react_firebase/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/Gremis/formulario_registro_react_firebase/deployments",
        created_at: "2021-04-28T17:54:58Z",
        updated_at: "2021-04-30T01:38:15Z",
        pushed_at: "2021-04-30T01:38:13Z",
        git_url:
          "git://github.com/Gremis/formulario_registro_react_firebase.git",
        ssh_url: "git@github.com:Gremis/formulario_registro_react_firebase.git",
        clone_url:
          "https://github.com/Gremis/formulario_registro_react_firebase.git",
        svn_url: "https://github.com/Gremis/formulario_registro_react_firebase",
        homepage: "",
        size: 198,
        stargazers_count: 0,
        watchers_count: 0,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: "main",
      },
      {
        id: 277409350,
        node_id: "MDEwOlJlcG9zaXRvcnkyNzc0MDkzNTA=",
        name: "golpea_topo",
        full_name: "Gremis/golpea_topo",
        private: false,
        owner: {
          login: "Gremis",
          id: 48386386,
          node_id: "MDQ6VXNlcjQ4Mzg2Mzg2",
          avatar_url: "https://avatars.githubusercontent.com/u/48386386?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Gremis",
          html_url: "https://github.com/Gremis",
          followers_url: "https://api.github.com/users/Gremis/followers",
          following_url:
            "https://api.github.com/users/Gremis/following{/other_user}",
          gists_url: "https://api.github.com/users/Gremis/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Gremis/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Gremis/subscriptions",
          organizations_url: "https://api.github.com/users/Gremis/orgs",
          repos_url: "https://api.github.com/users/Gremis/repos",
          events_url: "https://api.github.com/users/Gremis/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Gremis/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/Gremis/golpea_topo",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/Gremis/golpea_topo",
        forks_url: "https://api.github.com/repos/Gremis/golpea_topo/forks",
        keys_url:
          "https://api.github.com/repos/Gremis/golpea_topo/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/Gremis/golpea_topo/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/Gremis/golpea_topo/teams",
        hooks_url: "https://api.github.com/repos/Gremis/golpea_topo/hooks",
        issue_events_url:
          "https://api.github.com/repos/Gremis/golpea_topo/issues/events{/number}",
        events_url: "https://api.github.com/repos/Gremis/golpea_topo/events",
        assignees_url:
          "https://api.github.com/repos/Gremis/golpea_topo/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/Gremis/golpea_topo/branches{/branch}",
        tags_url: "https://api.github.com/repos/Gremis/golpea_topo/tags",
        blobs_url:
          "https://api.github.com/repos/Gremis/golpea_topo/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/Gremis/golpea_topo/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/Gremis/golpea_topo/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/Gremis/golpea_topo/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/Gremis/golpea_topo/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/Gremis/golpea_topo/languages",
        stargazers_url:
          "https://api.github.com/repos/Gremis/golpea_topo/stargazers",
        contributors_url:
          "https://api.github.com/repos/Gremis/golpea_topo/contributors",
        subscribers_url:
          "https://api.github.com/repos/Gremis/golpea_topo/subscribers",
        subscription_url:
          "https://api.github.com/repos/Gremis/golpea_topo/subscription",
        commits_url:
          "https://api.github.com/repos/Gremis/golpea_topo/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/Gremis/golpea_topo/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/Gremis/golpea_topo/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/Gremis/golpea_topo/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/Gremis/golpea_topo/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/Gremis/golpea_topo/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/Gremis/golpea_topo/merges",
        archive_url:
          "https://api.github.com/repos/Gremis/golpea_topo/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/Gremis/golpea_topo/downloads",
        issues_url:
          "https://api.github.com/repos/Gremis/golpea_topo/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/Gremis/golpea_topo/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/Gremis/golpea_topo/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/Gremis/golpea_topo/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/Gremis/golpea_topo/labels{/name}",
        releases_url:
          "https://api.github.com/repos/Gremis/golpea_topo/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/Gremis/golpea_topo/deployments",
        created_at: "2020-07-06T00:49:22Z",
        updated_at: "2020-07-15T23:53:31Z",
        pushed_at: "2020-07-07T17:18:31Z",
        git_url: "git://github.com/Gremis/golpea_topo.git",
        ssh_url: "git@github.com:Gremis/golpea_topo.git",
        clone_url: "https://github.com/Gremis/golpea_topo.git",
        svn_url: "https://github.com/Gremis/golpea_topo",
        homepage: "https://golpea-topo.vercel.app",
        size: 42,
        stargazers_count: 1,
        watchers_count: 1,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "master",
      },
      {
        id: 341560270,
        node_id: "MDEwOlJlcG9zaXRvcnkzNDE1NjAyNzA=",
        name: "Gremis",
        full_name: "Gremis/Gremis",
        private: false,
        owner: {
          login: "Gremis",
          id: 48386386,
          node_id: "MDQ6VXNlcjQ4Mzg2Mzg2",
          avatar_url: "https://avatars.githubusercontent.com/u/48386386?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Gremis",
          html_url: "https://github.com/Gremis",
          followers_url: "https://api.github.com/users/Gremis/followers",
          following_url:
            "https://api.github.com/users/Gremis/following{/other_user}",
          gists_url: "https://api.github.com/users/Gremis/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Gremis/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Gremis/subscriptions",
          organizations_url: "https://api.github.com/users/Gremis/orgs",
          repos_url: "https://api.github.com/users/Gremis/repos",
          events_url: "https://api.github.com/users/Gremis/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Gremis/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/Gremis/Gremis",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/Gremis/Gremis",
        forks_url: "https://api.github.com/repos/Gremis/Gremis/forks",
        keys_url: "https://api.github.com/repos/Gremis/Gremis/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/Gremis/Gremis/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/Gremis/Gremis/teams",
        hooks_url: "https://api.github.com/repos/Gremis/Gremis/hooks",
        issue_events_url:
          "https://api.github.com/repos/Gremis/Gremis/issues/events{/number}",
        events_url: "https://api.github.com/repos/Gremis/Gremis/events",
        assignees_url:
          "https://api.github.com/repos/Gremis/Gremis/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/Gremis/Gremis/branches{/branch}",
        tags_url: "https://api.github.com/repos/Gremis/Gremis/tags",
        blobs_url: "https://api.github.com/repos/Gremis/Gremis/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/Gremis/Gremis/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/Gremis/Gremis/git/refs{/sha}",
        trees_url: "https://api.github.com/repos/Gremis/Gremis/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/Gremis/Gremis/statuses/{sha}",
        languages_url: "https://api.github.com/repos/Gremis/Gremis/languages",
        stargazers_url: "https://api.github.com/repos/Gremis/Gremis/stargazers",
        contributors_url:
          "https://api.github.com/repos/Gremis/Gremis/contributors",
        subscribers_url:
          "https://api.github.com/repos/Gremis/Gremis/subscribers",
        subscription_url:
          "https://api.github.com/repos/Gremis/Gremis/subscription",
        commits_url: "https://api.github.com/repos/Gremis/Gremis/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/Gremis/Gremis/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/Gremis/Gremis/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/Gremis/Gremis/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/Gremis/Gremis/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/Gremis/Gremis/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/Gremis/Gremis/merges",
        archive_url:
          "https://api.github.com/repos/Gremis/Gremis/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/Gremis/Gremis/downloads",
        issues_url:
          "https://api.github.com/repos/Gremis/Gremis/issues{/number}",
        pulls_url: "https://api.github.com/repos/Gremis/Gremis/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/Gremis/Gremis/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/Gremis/Gremis/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/Gremis/Gremis/labels{/name}",
        releases_url:
          "https://api.github.com/repos/Gremis/Gremis/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/Gremis/Gremis/deployments",
        created_at: "2021-02-23T13:16:01Z",
        updated_at: "2021-02-23T23:46:06Z",
        pushed_at: "2021-02-23T23:46:04Z",
        git_url: "git://github.com/Gremis/Gremis.git",
        ssh_url: "git@github.com:Gremis/Gremis.git",
        clone_url: "https://github.com/Gremis/Gremis.git",
        svn_url: "https://github.com/Gremis/Gremis",
        homepage: null,
        size: 1728,
        stargazers_count: 0,
        watchers_count: 0,
        language: null,
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: "main",
      },
      {
        id: 342290323,
        node_id: "MDEwOlJlcG9zaXRvcnkzNDIyOTAzMjM=",
        name: "Gremis-Tovar",
        full_name: "Gremis/Gremis-Tovar",
        private: false,
        owner: {
          login: "Gremis",
          id: 48386386,
          node_id: "MDQ6VXNlcjQ4Mzg2Mzg2",
          avatar_url: "https://avatars.githubusercontent.com/u/48386386?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Gremis",
          html_url: "https://github.com/Gremis",
          followers_url: "https://api.github.com/users/Gremis/followers",
          following_url:
            "https://api.github.com/users/Gremis/following{/other_user}",
          gists_url: "https://api.github.com/users/Gremis/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Gremis/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Gremis/subscriptions",
          organizations_url: "https://api.github.com/users/Gremis/orgs",
          repos_url: "https://api.github.com/users/Gremis/repos",
          events_url: "https://api.github.com/users/Gremis/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Gremis/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/Gremis/Gremis-Tovar",
        description: null,
        fork: true,
        url: "https://api.github.com/repos/Gremis/Gremis-Tovar",
        forks_url: "https://api.github.com/repos/Gremis/Gremis-Tovar/forks",
        keys_url:
          "https://api.github.com/repos/Gremis/Gremis-Tovar/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/Gremis/Gremis-Tovar/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/Gremis/Gremis-Tovar/teams",
        hooks_url: "https://api.github.com/repos/Gremis/Gremis-Tovar/hooks",
        issue_events_url:
          "https://api.github.com/repos/Gremis/Gremis-Tovar/issues/events{/number}",
        events_url: "https://api.github.com/repos/Gremis/Gremis-Tovar/events",
        assignees_url:
          "https://api.github.com/repos/Gremis/Gremis-Tovar/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/Gremis/Gremis-Tovar/branches{/branch}",
        tags_url: "https://api.github.com/repos/Gremis/Gremis-Tovar/tags",
        blobs_url:
          "https://api.github.com/repos/Gremis/Gremis-Tovar/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/Gremis/Gremis-Tovar/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/Gremis/Gremis-Tovar/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/Gremis/Gremis-Tovar/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/Gremis/Gremis-Tovar/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/Gremis/Gremis-Tovar/languages",
        stargazers_url:
          "https://api.github.com/repos/Gremis/Gremis-Tovar/stargazers",
        contributors_url:
          "https://api.github.com/repos/Gremis/Gremis-Tovar/contributors",
        subscribers_url:
          "https://api.github.com/repos/Gremis/Gremis-Tovar/subscribers",
        subscription_url:
          "https://api.github.com/repos/Gremis/Gremis-Tovar/subscription",
        commits_url:
          "https://api.github.com/repos/Gremis/Gremis-Tovar/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/Gremis/Gremis-Tovar/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/Gremis/Gremis-Tovar/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/Gremis/Gremis-Tovar/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/Gremis/Gremis-Tovar/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/Gremis/Gremis-Tovar/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/Gremis/Gremis-Tovar/merges",
        archive_url:
          "https://api.github.com/repos/Gremis/Gremis-Tovar/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/Gremis/Gremis-Tovar/downloads",
        issues_url:
          "https://api.github.com/repos/Gremis/Gremis-Tovar/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/Gremis/Gremis-Tovar/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/Gremis/Gremis-Tovar/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/Gremis/Gremis-Tovar/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/Gremis/Gremis-Tovar/labels{/name}",
        releases_url:
          "https://api.github.com/repos/Gremis/Gremis-Tovar/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/Gremis/Gremis-Tovar/deployments",
        created_at: "2021-02-25T15:31:05Z",
        updated_at: "2021-06-13T00:51:46Z",
        pushed_at: "2021-06-24T01:25:17Z",
        git_url: "git://github.com/Gremis/Gremis-Tovar.git",
        ssh_url: "git@github.com:Gremis/Gremis-Tovar.git",
        clone_url: "https://github.com/Gremis/Gremis-Tovar.git",
        svn_url: "https://github.com/Gremis/Gremis-Tovar",
        homepage: null,
        size: 160135,
        stargazers_count: 0,
        watchers_count: 0,
        language: "HTML",
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: "master",
      },
      {
        id: 278215589,
        node_id: "MDEwOlJlcG9zaXRvcnkyNzgyMTU1ODk=",
        name: "invasao_espacial",
        full_name: "Gremis/invasao_espacial",
        private: false,
        owner: {
          login: "Gremis",
          id: 48386386,
          node_id: "MDQ6VXNlcjQ4Mzg2Mzg2",
          avatar_url: "https://avatars.githubusercontent.com/u/48386386?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Gremis",
          html_url: "https://github.com/Gremis",
          followers_url: "https://api.github.com/users/Gremis/followers",
          following_url:
            "https://api.github.com/users/Gremis/following{/other_user}",
          gists_url: "https://api.github.com/users/Gremis/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Gremis/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Gremis/subscriptions",
          organizations_url: "https://api.github.com/users/Gremis/orgs",
          repos_url: "https://api.github.com/users/Gremis/repos",
          events_url: "https://api.github.com/users/Gremis/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Gremis/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/Gremis/invasao_espacial",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/Gremis/invasao_espacial",
        forks_url: "https://api.github.com/repos/Gremis/invasao_espacial/forks",
        keys_url:
          "https://api.github.com/repos/Gremis/invasao_espacial/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/Gremis/invasao_espacial/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/Gremis/invasao_espacial/teams",
        hooks_url: "https://api.github.com/repos/Gremis/invasao_espacial/hooks",
        issue_events_url:
          "https://api.github.com/repos/Gremis/invasao_espacial/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/Gremis/invasao_espacial/events",
        assignees_url:
          "https://api.github.com/repos/Gremis/invasao_espacial/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/Gremis/invasao_espacial/branches{/branch}",
        tags_url: "https://api.github.com/repos/Gremis/invasao_espacial/tags",
        blobs_url:
          "https://api.github.com/repos/Gremis/invasao_espacial/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/Gremis/invasao_espacial/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/Gremis/invasao_espacial/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/Gremis/invasao_espacial/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/Gremis/invasao_espacial/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/Gremis/invasao_espacial/languages",
        stargazers_url:
          "https://api.github.com/repos/Gremis/invasao_espacial/stargazers",
        contributors_url:
          "https://api.github.com/repos/Gremis/invasao_espacial/contributors",
        subscribers_url:
          "https://api.github.com/repos/Gremis/invasao_espacial/subscribers",
        subscription_url:
          "https://api.github.com/repos/Gremis/invasao_espacial/subscription",
        commits_url:
          "https://api.github.com/repos/Gremis/invasao_espacial/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/Gremis/invasao_espacial/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/Gremis/invasao_espacial/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/Gremis/invasao_espacial/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/Gremis/invasao_espacial/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/Gremis/invasao_espacial/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/Gremis/invasao_espacial/merges",
        archive_url:
          "https://api.github.com/repos/Gremis/invasao_espacial/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/Gremis/invasao_espacial/downloads",
        issues_url:
          "https://api.github.com/repos/Gremis/invasao_espacial/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/Gremis/invasao_espacial/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/Gremis/invasao_espacial/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/Gremis/invasao_espacial/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/Gremis/invasao_espacial/labels{/name}",
        releases_url:
          "https://api.github.com/repos/Gremis/invasao_espacial/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/Gremis/invasao_espacial/deployments",
        created_at: "2020-07-08T23:31:27Z",
        updated_at: "2020-07-15T23:53:34Z",
        pushed_at: "2020-07-08T23:38:37Z",
        git_url: "git://github.com/Gremis/invasao_espacial.git",
        ssh_url: "git@github.com:Gremis/invasao_espacial.git",
        clone_url: "https://github.com/Gremis/invasao_espacial.git",
        svn_url: "https://github.com/Gremis/invasao_espacial",
        homepage: "https://invasao-espacial.vercel.app",
        size: 3,
        stargazers_count: 1,
        watchers_count: 1,
        language: "HTML",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "master",
      },
      {
        id: 343194063,
        node_id: "MDEwOlJlcG9zaXRvcnkzNDMxOTQwNjM=",
        name: "JS_drumKit",
        full_name: "Gremis/JS_drumKit",
        private: false,
        owner: {
          login: "Gremis",
          id: 48386386,
          node_id: "MDQ6VXNlcjQ4Mzg2Mzg2",
          avatar_url: "https://avatars.githubusercontent.com/u/48386386?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Gremis",
          html_url: "https://github.com/Gremis",
          followers_url: "https://api.github.com/users/Gremis/followers",
          following_url:
            "https://api.github.com/users/Gremis/following{/other_user}",
          gists_url: "https://api.github.com/users/Gremis/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Gremis/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Gremis/subscriptions",
          organizations_url: "https://api.github.com/users/Gremis/orgs",
          repos_url: "https://api.github.com/users/Gremis/repos",
          events_url: "https://api.github.com/users/Gremis/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Gremis/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/Gremis/JS_drumKit",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/Gremis/JS_drumKit",
        forks_url: "https://api.github.com/repos/Gremis/JS_drumKit/forks",
        keys_url:
          "https://api.github.com/repos/Gremis/JS_drumKit/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/Gremis/JS_drumKit/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/Gremis/JS_drumKit/teams",
        hooks_url: "https://api.github.com/repos/Gremis/JS_drumKit/hooks",
        issue_events_url:
          "https://api.github.com/repos/Gremis/JS_drumKit/issues/events{/number}",
        events_url: "https://api.github.com/repos/Gremis/JS_drumKit/events",
        assignees_url:
          "https://api.github.com/repos/Gremis/JS_drumKit/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/Gremis/JS_drumKit/branches{/branch}",
        tags_url: "https://api.github.com/repos/Gremis/JS_drumKit/tags",
        blobs_url:
          "https://api.github.com/repos/Gremis/JS_drumKit/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/Gremis/JS_drumKit/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/Gremis/JS_drumKit/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/Gremis/JS_drumKit/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/Gremis/JS_drumKit/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/Gremis/JS_drumKit/languages",
        stargazers_url:
          "https://api.github.com/repos/Gremis/JS_drumKit/stargazers",
        contributors_url:
          "https://api.github.com/repos/Gremis/JS_drumKit/contributors",
        subscribers_url:
          "https://api.github.com/repos/Gremis/JS_drumKit/subscribers",
        subscription_url:
          "https://api.github.com/repos/Gremis/JS_drumKit/subscription",
        commits_url:
          "https://api.github.com/repos/Gremis/JS_drumKit/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/Gremis/JS_drumKit/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/Gremis/JS_drumKit/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/Gremis/JS_drumKit/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/Gremis/JS_drumKit/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/Gremis/JS_drumKit/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/Gremis/JS_drumKit/merges",
        archive_url:
          "https://api.github.com/repos/Gremis/JS_drumKit/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/Gremis/JS_drumKit/downloads",
        issues_url:
          "https://api.github.com/repos/Gremis/JS_drumKit/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/Gremis/JS_drumKit/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/Gremis/JS_drumKit/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/Gremis/JS_drumKit/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/Gremis/JS_drumKit/labels{/name}",
        releases_url:
          "https://api.github.com/repos/Gremis/JS_drumKit/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/Gremis/JS_drumKit/deployments",
        created_at: "2021-02-28T19:24:10Z",
        updated_at: "2021-03-02T15:16:15Z",
        pushed_at: "2021-03-02T15:16:13Z",
        git_url: "git://github.com/Gremis/JS_drumKit.git",
        ssh_url: "git@github.com:Gremis/JS_drumKit.git",
        clone_url: "https://github.com/Gremis/JS_drumKit.git",
        svn_url: "https://github.com/Gremis/JS_drumKit",
        homepage: null,
        size: 1048,
        stargazers_count: 0,
        watchers_count: 0,
        language: "HTML",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: "main",
      },
      {
        id: 277874990,
        node_id: "MDEwOlJlcG9zaXRvcnkyNzc4NzQ5OTA=",
        name: "juego_conecta_4",
        full_name: "Gremis/juego_conecta_4",
        private: false,
        owner: {
          login: "Gremis",
          id: 48386386,
          node_id: "MDQ6VXNlcjQ4Mzg2Mzg2",
          avatar_url: "https://avatars.githubusercontent.com/u/48386386?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Gremis",
          html_url: "https://github.com/Gremis",
          followers_url: "https://api.github.com/users/Gremis/followers",
          following_url:
            "https://api.github.com/users/Gremis/following{/other_user}",
          gists_url: "https://api.github.com/users/Gremis/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Gremis/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Gremis/subscriptions",
          organizations_url: "https://api.github.com/users/Gremis/orgs",
          repos_url: "https://api.github.com/users/Gremis/repos",
          events_url: "https://api.github.com/users/Gremis/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Gremis/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/Gremis/juego_conecta_4",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/Gremis/juego_conecta_4",
        forks_url: "https://api.github.com/repos/Gremis/juego_conecta_4/forks",
        keys_url:
          "https://api.github.com/repos/Gremis/juego_conecta_4/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/Gremis/juego_conecta_4/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/Gremis/juego_conecta_4/teams",
        hooks_url: "https://api.github.com/repos/Gremis/juego_conecta_4/hooks",
        issue_events_url:
          "https://api.github.com/repos/Gremis/juego_conecta_4/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/Gremis/juego_conecta_4/events",
        assignees_url:
          "https://api.github.com/repos/Gremis/juego_conecta_4/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/Gremis/juego_conecta_4/branches{/branch}",
        tags_url: "https://api.github.com/repos/Gremis/juego_conecta_4/tags",
        blobs_url:
          "https://api.github.com/repos/Gremis/juego_conecta_4/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/Gremis/juego_conecta_4/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/Gremis/juego_conecta_4/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/Gremis/juego_conecta_4/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/Gremis/juego_conecta_4/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/Gremis/juego_conecta_4/languages",
        stargazers_url:
          "https://api.github.com/repos/Gremis/juego_conecta_4/stargazers",
        contributors_url:
          "https://api.github.com/repos/Gremis/juego_conecta_4/contributors",
        subscribers_url:
          "https://api.github.com/repos/Gremis/juego_conecta_4/subscribers",
        subscription_url:
          "https://api.github.com/repos/Gremis/juego_conecta_4/subscription",
        commits_url:
          "https://api.github.com/repos/Gremis/juego_conecta_4/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/Gremis/juego_conecta_4/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/Gremis/juego_conecta_4/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/Gremis/juego_conecta_4/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/Gremis/juego_conecta_4/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/Gremis/juego_conecta_4/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/Gremis/juego_conecta_4/merges",
        archive_url:
          "https://api.github.com/repos/Gremis/juego_conecta_4/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/Gremis/juego_conecta_4/downloads",
        issues_url:
          "https://api.github.com/repos/Gremis/juego_conecta_4/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/Gremis/juego_conecta_4/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/Gremis/juego_conecta_4/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/Gremis/juego_conecta_4/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/Gremis/juego_conecta_4/labels{/name}",
        releases_url:
          "https://api.github.com/repos/Gremis/juego_conecta_4/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/Gremis/juego_conecta_4/deployments",
        created_at: "2020-07-07T16:59:59Z",
        updated_at: "2020-07-15T23:53:30Z",
        pushed_at: "2020-07-07T17:04:09Z",
        git_url: "git://github.com/Gremis/juego_conecta_4.git",
        ssh_url: "git@github.com:Gremis/juego_conecta_4.git",
        clone_url: "https://github.com/Gremis/juego_conecta_4.git",
        svn_url: "https://github.com/Gremis/juego_conecta_4",
        homepage: "https://juego-conecta-4.vercel.app",
        size: 3,
        stargazers_count: 1,
        watchers_count: 1,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "master",
      },
      {
        id: 277352989,
        node_id: "MDEwOlJlcG9zaXRvcnkyNzczNTI5ODk=",
        name: "juego_memoria",
        full_name: "Gremis/juego_memoria",
        private: false,
        owner: {
          login: "Gremis",
          id: 48386386,
          node_id: "MDQ6VXNlcjQ4Mzg2Mzg2",
          avatar_url: "https://avatars.githubusercontent.com/u/48386386?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Gremis",
          html_url: "https://github.com/Gremis",
          followers_url: "https://api.github.com/users/Gremis/followers",
          following_url:
            "https://api.github.com/users/Gremis/following{/other_user}",
          gists_url: "https://api.github.com/users/Gremis/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Gremis/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Gremis/subscriptions",
          organizations_url: "https://api.github.com/users/Gremis/orgs",
          repos_url: "https://api.github.com/users/Gremis/repos",
          events_url: "https://api.github.com/users/Gremis/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Gremis/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/Gremis/juego_memoria",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/Gremis/juego_memoria",
        forks_url: "https://api.github.com/repos/Gremis/juego_memoria/forks",
        keys_url:
          "https://api.github.com/repos/Gremis/juego_memoria/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/Gremis/juego_memoria/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/Gremis/juego_memoria/teams",
        hooks_url: "https://api.github.com/repos/Gremis/juego_memoria/hooks",
        issue_events_url:
          "https://api.github.com/repos/Gremis/juego_memoria/issues/events{/number}",
        events_url: "https://api.github.com/repos/Gremis/juego_memoria/events",
        assignees_url:
          "https://api.github.com/repos/Gremis/juego_memoria/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/Gremis/juego_memoria/branches{/branch}",
        tags_url: "https://api.github.com/repos/Gremis/juego_memoria/tags",
        blobs_url:
          "https://api.github.com/repos/Gremis/juego_memoria/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/Gremis/juego_memoria/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/Gremis/juego_memoria/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/Gremis/juego_memoria/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/Gremis/juego_memoria/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/Gremis/juego_memoria/languages",
        stargazers_url:
          "https://api.github.com/repos/Gremis/juego_memoria/stargazers",
        contributors_url:
          "https://api.github.com/repos/Gremis/juego_memoria/contributors",
        subscribers_url:
          "https://api.github.com/repos/Gremis/juego_memoria/subscribers",
        subscription_url:
          "https://api.github.com/repos/Gremis/juego_memoria/subscription",
        commits_url:
          "https://api.github.com/repos/Gremis/juego_memoria/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/Gremis/juego_memoria/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/Gremis/juego_memoria/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/Gremis/juego_memoria/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/Gremis/juego_memoria/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/Gremis/juego_memoria/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/Gremis/juego_memoria/merges",
        archive_url:
          "https://api.github.com/repos/Gremis/juego_memoria/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/Gremis/juego_memoria/downloads",
        issues_url:
          "https://api.github.com/repos/Gremis/juego_memoria/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/Gremis/juego_memoria/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/Gremis/juego_memoria/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/Gremis/juego_memoria/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/Gremis/juego_memoria/labels{/name}",
        releases_url:
          "https://api.github.com/repos/Gremis/juego_memoria/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/Gremis/juego_memoria/deployments",
        created_at: "2020-07-05T17:40:48Z",
        updated_at: "2020-07-15T23:53:29Z",
        pushed_at: "2020-07-05T17:52:33Z",
        git_url: "git://github.com/Gremis/juego_memoria.git",
        ssh_url: "git@github.com:Gremis/juego_memoria.git",
        clone_url: "https://github.com/Gremis/juego_memoria.git",
        svn_url: "https://github.com/Gremis/juego_memoria",
        homepage: "https://juego-memoria.vercel.app",
        size: 1068,
        stargazers_count: 1,
        watchers_count: 1,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "master",
      },
      {
        id: 282741968,
        node_id: "MDEwOlJlcG9zaXRvcnkyODI3NDE5Njg=",
        name: "landingpage",
        full_name: "Gremis/landingpage",
        private: false,
        owner: {
          login: "Gremis",
          id: 48386386,
          node_id: "MDQ6VXNlcjQ4Mzg2Mzg2",
          avatar_url: "https://avatars.githubusercontent.com/u/48386386?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Gremis",
          html_url: "https://github.com/Gremis",
          followers_url: "https://api.github.com/users/Gremis/followers",
          following_url:
            "https://api.github.com/users/Gremis/following{/other_user}",
          gists_url: "https://api.github.com/users/Gremis/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Gremis/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Gremis/subscriptions",
          organizations_url: "https://api.github.com/users/Gremis/orgs",
          repos_url: "https://api.github.com/users/Gremis/repos",
          events_url: "https://api.github.com/users/Gremis/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Gremis/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/Gremis/landingpage",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/Gremis/landingpage",
        forks_url: "https://api.github.com/repos/Gremis/landingpage/forks",
        keys_url:
          "https://api.github.com/repos/Gremis/landingpage/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/Gremis/landingpage/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/Gremis/landingpage/teams",
        hooks_url: "https://api.github.com/repos/Gremis/landingpage/hooks",
        issue_events_url:
          "https://api.github.com/repos/Gremis/landingpage/issues/events{/number}",
        events_url: "https://api.github.com/repos/Gremis/landingpage/events",
        assignees_url:
          "https://api.github.com/repos/Gremis/landingpage/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/Gremis/landingpage/branches{/branch}",
        tags_url: "https://api.github.com/repos/Gremis/landingpage/tags",
        blobs_url:
          "https://api.github.com/repos/Gremis/landingpage/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/Gremis/landingpage/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/Gremis/landingpage/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/Gremis/landingpage/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/Gremis/landingpage/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/Gremis/landingpage/languages",
        stargazers_url:
          "https://api.github.com/repos/Gremis/landingpage/stargazers",
        contributors_url:
          "https://api.github.com/repos/Gremis/landingpage/contributors",
        subscribers_url:
          "https://api.github.com/repos/Gremis/landingpage/subscribers",
        subscription_url:
          "https://api.github.com/repos/Gremis/landingpage/subscription",
        commits_url:
          "https://api.github.com/repos/Gremis/landingpage/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/Gremis/landingpage/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/Gremis/landingpage/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/Gremis/landingpage/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/Gremis/landingpage/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/Gremis/landingpage/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/Gremis/landingpage/merges",
        archive_url:
          "https://api.github.com/repos/Gremis/landingpage/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/Gremis/landingpage/downloads",
        issues_url:
          "https://api.github.com/repos/Gremis/landingpage/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/Gremis/landingpage/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/Gremis/landingpage/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/Gremis/landingpage/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/Gremis/landingpage/labels{/name}",
        releases_url:
          "https://api.github.com/repos/Gremis/landingpage/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/Gremis/landingpage/deployments",
        created_at: "2020-07-26T22:12:34Z",
        updated_at: "2020-07-31T17:57:39Z",
        pushed_at: "2020-07-26T22:17:02Z",
        git_url: "git://github.com/Gremis/landingpage.git",
        ssh_url: "git@github.com:Gremis/landingpage.git",
        clone_url: "https://github.com/Gremis/landingpage.git",
        svn_url: "https://github.com/Gremis/landingpage",
        homepage: null,
        size: 3085,
        stargazers_count: 1,
        watchers_count: 1,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "master",
      },
      {
        id: 286134062,
        node_id: "MDEwOlJlcG9zaXRvcnkyODYxMzQwNjI=",
        name: "landing_page",
        full_name: "Gremis/landing_page",
        private: false,
        owner: {
          login: "Gremis",
          id: 48386386,
          node_id: "MDQ6VXNlcjQ4Mzg2Mzg2",
          avatar_url: "https://avatars.githubusercontent.com/u/48386386?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Gremis",
          html_url: "https://github.com/Gremis",
          followers_url: "https://api.github.com/users/Gremis/followers",
          following_url:
            "https://api.github.com/users/Gremis/following{/other_user}",
          gists_url: "https://api.github.com/users/Gremis/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Gremis/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Gremis/subscriptions",
          organizations_url: "https://api.github.com/users/Gremis/orgs",
          repos_url: "https://api.github.com/users/Gremis/repos",
          events_url: "https://api.github.com/users/Gremis/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Gremis/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/Gremis/landing_page",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/Gremis/landing_page",
        forks_url: "https://api.github.com/repos/Gremis/landing_page/forks",
        keys_url:
          "https://api.github.com/repos/Gremis/landing_page/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/Gremis/landing_page/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/Gremis/landing_page/teams",
        hooks_url: "https://api.github.com/repos/Gremis/landing_page/hooks",
        issue_events_url:
          "https://api.github.com/repos/Gremis/landing_page/issues/events{/number}",
        events_url: "https://api.github.com/repos/Gremis/landing_page/events",
        assignees_url:
          "https://api.github.com/repos/Gremis/landing_page/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/Gremis/landing_page/branches{/branch}",
        tags_url: "https://api.github.com/repos/Gremis/landing_page/tags",
        blobs_url:
          "https://api.github.com/repos/Gremis/landing_page/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/Gremis/landing_page/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/Gremis/landing_page/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/Gremis/landing_page/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/Gremis/landing_page/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/Gremis/landing_page/languages",
        stargazers_url:
          "https://api.github.com/repos/Gremis/landing_page/stargazers",
        contributors_url:
          "https://api.github.com/repos/Gremis/landing_page/contributors",
        subscribers_url:
          "https://api.github.com/repos/Gremis/landing_page/subscribers",
        subscription_url:
          "https://api.github.com/repos/Gremis/landing_page/subscription",
        commits_url:
          "https://api.github.com/repos/Gremis/landing_page/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/Gremis/landing_page/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/Gremis/landing_page/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/Gremis/landing_page/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/Gremis/landing_page/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/Gremis/landing_page/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/Gremis/landing_page/merges",
        archive_url:
          "https://api.github.com/repos/Gremis/landing_page/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/Gremis/landing_page/downloads",
        issues_url:
          "https://api.github.com/repos/Gremis/landing_page/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/Gremis/landing_page/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/Gremis/landing_page/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/Gremis/landing_page/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/Gremis/landing_page/labels{/name}",
        releases_url:
          "https://api.github.com/repos/Gremis/landing_page/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/Gremis/landing_page/deployments",
        created_at: "2020-08-08T23:21:46Z",
        updated_at: "2020-08-09T18:16:04Z",
        pushed_at: "2020-08-09T18:16:02Z",
        git_url: "git://github.com/Gremis/landing_page.git",
        ssh_url: "git@github.com:Gremis/landing_page.git",
        clone_url: "https://github.com/Gremis/landing_page.git",
        svn_url: "https://github.com/Gremis/landing_page",
        homepage: "https://landing-page-mocha.vercel.app",
        size: 4257,
        stargazers_count: 1,
        watchers_count: 1,
        language: "CSS",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "master",
      },
      {
        id: 290074470,
        node_id: "MDEwOlJlcG9zaXRvcnkyOTAwNzQ0NzA=",
        name: "langing_design_adobexd",
        full_name: "Gremis/langing_design_adobexd",
        private: false,
        owner: {
          login: "Gremis",
          id: 48386386,
          node_id: "MDQ6VXNlcjQ4Mzg2Mzg2",
          avatar_url: "https://avatars.githubusercontent.com/u/48386386?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Gremis",
          html_url: "https://github.com/Gremis",
          followers_url: "https://api.github.com/users/Gremis/followers",
          following_url:
            "https://api.github.com/users/Gremis/following{/other_user}",
          gists_url: "https://api.github.com/users/Gremis/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Gremis/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Gremis/subscriptions",
          organizations_url: "https://api.github.com/users/Gremis/orgs",
          repos_url: "https://api.github.com/users/Gremis/repos",
          events_url: "https://api.github.com/users/Gremis/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Gremis/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/Gremis/langing_design_adobexd",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/Gremis/langing_design_adobexd",
        forks_url:
          "https://api.github.com/repos/Gremis/langing_design_adobexd/forks",
        keys_url:
          "https://api.github.com/repos/Gremis/langing_design_adobexd/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/Gremis/langing_design_adobexd/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/Gremis/langing_design_adobexd/teams",
        hooks_url:
          "https://api.github.com/repos/Gremis/langing_design_adobexd/hooks",
        issue_events_url:
          "https://api.github.com/repos/Gremis/langing_design_adobexd/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/Gremis/langing_design_adobexd/events",
        assignees_url:
          "https://api.github.com/repos/Gremis/langing_design_adobexd/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/Gremis/langing_design_adobexd/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/Gremis/langing_design_adobexd/tags",
        blobs_url:
          "https://api.github.com/repos/Gremis/langing_design_adobexd/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/Gremis/langing_design_adobexd/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/Gremis/langing_design_adobexd/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/Gremis/langing_design_adobexd/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/Gremis/langing_design_adobexd/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/Gremis/langing_design_adobexd/languages",
        stargazers_url:
          "https://api.github.com/repos/Gremis/langing_design_adobexd/stargazers",
        contributors_url:
          "https://api.github.com/repos/Gremis/langing_design_adobexd/contributors",
        subscribers_url:
          "https://api.github.com/repos/Gremis/langing_design_adobexd/subscribers",
        subscription_url:
          "https://api.github.com/repos/Gremis/langing_design_adobexd/subscription",
        commits_url:
          "https://api.github.com/repos/Gremis/langing_design_adobexd/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/Gremis/langing_design_adobexd/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/Gremis/langing_design_adobexd/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/Gremis/langing_design_adobexd/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/Gremis/langing_design_adobexd/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/Gremis/langing_design_adobexd/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/Gremis/langing_design_adobexd/merges",
        archive_url:
          "https://api.github.com/repos/Gremis/langing_design_adobexd/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/Gremis/langing_design_adobexd/downloads",
        issues_url:
          "https://api.github.com/repos/Gremis/langing_design_adobexd/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/Gremis/langing_design_adobexd/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/Gremis/langing_design_adobexd/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/Gremis/langing_design_adobexd/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/Gremis/langing_design_adobexd/labels{/name}",
        releases_url:
          "https://api.github.com/repos/Gremis/langing_design_adobexd/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/Gremis/langing_design_adobexd/deployments",
        created_at: "2020-08-25T00:50:01Z",
        updated_at: "2020-08-25T00:57:41Z",
        pushed_at: "2020-08-25T00:57:28Z",
        git_url: "git://github.com/Gremis/langing_design_adobexd.git",
        ssh_url: "git@github.com:Gremis/langing_design_adobexd.git",
        clone_url: "https://github.com/Gremis/langing_design_adobexd.git",
        svn_url: "https://github.com/Gremis/langing_design_adobexd",
        homepage: "https://langing-design-adobexd.vercel.app",
        size: 317,
        stargazers_count: 0,
        watchers_count: 0,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: "master",
      },
      {
        id: 280264671,
        node_id: "MDEwOlJlcG9zaXRvcnkyODAyNjQ2NzE=",
        name: "Lista_de_Tareas",
        full_name: "Gremis/Lista_de_Tareas",
        private: false,
        owner: {
          login: "Gremis",
          id: 48386386,
          node_id: "MDQ6VXNlcjQ4Mzg2Mzg2",
          avatar_url: "https://avatars.githubusercontent.com/u/48386386?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Gremis",
          html_url: "https://github.com/Gremis",
          followers_url: "https://api.github.com/users/Gremis/followers",
          following_url:
            "https://api.github.com/users/Gremis/following{/other_user}",
          gists_url: "https://api.github.com/users/Gremis/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Gremis/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Gremis/subscriptions",
          organizations_url: "https://api.github.com/users/Gremis/orgs",
          repos_url: "https://api.github.com/users/Gremis/repos",
          events_url: "https://api.github.com/users/Gremis/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Gremis/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/Gremis/Lista_de_Tareas",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/Gremis/Lista_de_Tareas",
        forks_url: "https://api.github.com/repos/Gremis/Lista_de_Tareas/forks",
        keys_url:
          "https://api.github.com/repos/Gremis/Lista_de_Tareas/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/Gremis/Lista_de_Tareas/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/Gremis/Lista_de_Tareas/teams",
        hooks_url: "https://api.github.com/repos/Gremis/Lista_de_Tareas/hooks",
        issue_events_url:
          "https://api.github.com/repos/Gremis/Lista_de_Tareas/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/Gremis/Lista_de_Tareas/events",
        assignees_url:
          "https://api.github.com/repos/Gremis/Lista_de_Tareas/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/Gremis/Lista_de_Tareas/branches{/branch}",
        tags_url: "https://api.github.com/repos/Gremis/Lista_de_Tareas/tags",
        blobs_url:
          "https://api.github.com/repos/Gremis/Lista_de_Tareas/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/Gremis/Lista_de_Tareas/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/Gremis/Lista_de_Tareas/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/Gremis/Lista_de_Tareas/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/Gremis/Lista_de_Tareas/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/Gremis/Lista_de_Tareas/languages",
        stargazers_url:
          "https://api.github.com/repos/Gremis/Lista_de_Tareas/stargazers",
        contributors_url:
          "https://api.github.com/repos/Gremis/Lista_de_Tareas/contributors",
        subscribers_url:
          "https://api.github.com/repos/Gremis/Lista_de_Tareas/subscribers",
        subscription_url:
          "https://api.github.com/repos/Gremis/Lista_de_Tareas/subscription",
        commits_url:
          "https://api.github.com/repos/Gremis/Lista_de_Tareas/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/Gremis/Lista_de_Tareas/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/Gremis/Lista_de_Tareas/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/Gremis/Lista_de_Tareas/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/Gremis/Lista_de_Tareas/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/Gremis/Lista_de_Tareas/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/Gremis/Lista_de_Tareas/merges",
        archive_url:
          "https://api.github.com/repos/Gremis/Lista_de_Tareas/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/Gremis/Lista_de_Tareas/downloads",
        issues_url:
          "https://api.github.com/repos/Gremis/Lista_de_Tareas/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/Gremis/Lista_de_Tareas/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/Gremis/Lista_de_Tareas/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/Gremis/Lista_de_Tareas/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/Gremis/Lista_de_Tareas/labels{/name}",
        releases_url:
          "https://api.github.com/repos/Gremis/Lista_de_Tareas/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/Gremis/Lista_de_Tareas/deployments",
        created_at: "2020-07-16T21:43:29Z",
        updated_at: "2020-07-31T17:57:38Z",
        pushed_at: "2020-07-16T22:29:22Z",
        git_url: "git://github.com/Gremis/Lista_de_Tareas.git",
        ssh_url: "git@github.com:Gremis/Lista_de_Tareas.git",
        clone_url: "https://github.com/Gremis/Lista_de_Tareas.git",
        svn_url: "https://github.com/Gremis/Lista_de_Tareas",
        homepage: "https://lista-de-tareas-drab.vercel.app",
        size: 2463,
        stargazers_count: 1,
        watchers_count: 1,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "master",
      },
      {
        id: 285696145,
        node_id: "MDEwOlJlcG9zaXRvcnkyODU2OTYxNDU=",
        name: "maquetado_web_designer",
        full_name: "Gremis/maquetado_web_designer",
        private: false,
        owner: {
          login: "Gremis",
          id: 48386386,
          node_id: "MDQ6VXNlcjQ4Mzg2Mzg2",
          avatar_url: "https://avatars.githubusercontent.com/u/48386386?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Gremis",
          html_url: "https://github.com/Gremis",
          followers_url: "https://api.github.com/users/Gremis/followers",
          following_url:
            "https://api.github.com/users/Gremis/following{/other_user}",
          gists_url: "https://api.github.com/users/Gremis/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Gremis/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Gremis/subscriptions",
          organizations_url: "https://api.github.com/users/Gremis/orgs",
          repos_url: "https://api.github.com/users/Gremis/repos",
          events_url: "https://api.github.com/users/Gremis/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Gremis/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/Gremis/maquetado_web_designer",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/Gremis/maquetado_web_designer",
        forks_url:
          "https://api.github.com/repos/Gremis/maquetado_web_designer/forks",
        keys_url:
          "https://api.github.com/repos/Gremis/maquetado_web_designer/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/Gremis/maquetado_web_designer/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/Gremis/maquetado_web_designer/teams",
        hooks_url:
          "https://api.github.com/repos/Gremis/maquetado_web_designer/hooks",
        issue_events_url:
          "https://api.github.com/repos/Gremis/maquetado_web_designer/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/Gremis/maquetado_web_designer/events",
        assignees_url:
          "https://api.github.com/repos/Gremis/maquetado_web_designer/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/Gremis/maquetado_web_designer/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/Gremis/maquetado_web_designer/tags",
        blobs_url:
          "https://api.github.com/repos/Gremis/maquetado_web_designer/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/Gremis/maquetado_web_designer/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/Gremis/maquetado_web_designer/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/Gremis/maquetado_web_designer/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/Gremis/maquetado_web_designer/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/Gremis/maquetado_web_designer/languages",
        stargazers_url:
          "https://api.github.com/repos/Gremis/maquetado_web_designer/stargazers",
        contributors_url:
          "https://api.github.com/repos/Gremis/maquetado_web_designer/contributors",
        subscribers_url:
          "https://api.github.com/repos/Gremis/maquetado_web_designer/subscribers",
        subscription_url:
          "https://api.github.com/repos/Gremis/maquetado_web_designer/subscription",
        commits_url:
          "https://api.github.com/repos/Gremis/maquetado_web_designer/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/Gremis/maquetado_web_designer/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/Gremis/maquetado_web_designer/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/Gremis/maquetado_web_designer/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/Gremis/maquetado_web_designer/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/Gremis/maquetado_web_designer/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/Gremis/maquetado_web_designer/merges",
        archive_url:
          "https://api.github.com/repos/Gremis/maquetado_web_designer/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/Gremis/maquetado_web_designer/downloads",
        issues_url:
          "https://api.github.com/repos/Gremis/maquetado_web_designer/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/Gremis/maquetado_web_designer/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/Gremis/maquetado_web_designer/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/Gremis/maquetado_web_designer/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/Gremis/maquetado_web_designer/labels{/name}",
        releases_url:
          "https://api.github.com/repos/Gremis/maquetado_web_designer/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/Gremis/maquetado_web_designer/deployments",
        created_at: "2020-08-07T00:03:13Z",
        updated_at: "2020-08-09T18:16:43Z",
        pushed_at: "2020-08-09T18:16:41Z",
        git_url: "git://github.com/Gremis/maquetado_web_designer.git",
        ssh_url: "git@github.com:Gremis/maquetado_web_designer.git",
        clone_url: "https://github.com/Gremis/maquetado_web_designer.git",
        svn_url: "https://github.com/Gremis/maquetado_web_designer",
        homepage: null,
        size: 53148,
        stargazers_count: 0,
        watchers_count: 0,
        language: "HTML",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: "master",
      },
      {
        id: 347059602,
        node_id: "MDEwOlJlcG9zaXRvcnkzNDcwNTk2MDI=",
        name: "my_portfolio",
        full_name: "Gremis/my_portfolio",
        private: false,
        owner: {
          login: "Gremis",
          id: 48386386,
          node_id: "MDQ6VXNlcjQ4Mzg2Mzg2",
          avatar_url: "https://avatars.githubusercontent.com/u/48386386?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Gremis",
          html_url: "https://github.com/Gremis",
          followers_url: "https://api.github.com/users/Gremis/followers",
          following_url:
            "https://api.github.com/users/Gremis/following{/other_user}",
          gists_url: "https://api.github.com/users/Gremis/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Gremis/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Gremis/subscriptions",
          organizations_url: "https://api.github.com/users/Gremis/orgs",
          repos_url: "https://api.github.com/users/Gremis/repos",
          events_url: "https://api.github.com/users/Gremis/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Gremis/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/Gremis/my_portfolio",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/Gremis/my_portfolio",
        forks_url: "https://api.github.com/repos/Gremis/my_portfolio/forks",
        keys_url:
          "https://api.github.com/repos/Gremis/my_portfolio/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/Gremis/my_portfolio/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/Gremis/my_portfolio/teams",
        hooks_url: "https://api.github.com/repos/Gremis/my_portfolio/hooks",
        issue_events_url:
          "https://api.github.com/repos/Gremis/my_portfolio/issues/events{/number}",
        events_url: "https://api.github.com/repos/Gremis/my_portfolio/events",
        assignees_url:
          "https://api.github.com/repos/Gremis/my_portfolio/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/Gremis/my_portfolio/branches{/branch}",
        tags_url: "https://api.github.com/repos/Gremis/my_portfolio/tags",
        blobs_url:
          "https://api.github.com/repos/Gremis/my_portfolio/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/Gremis/my_portfolio/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/Gremis/my_portfolio/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/Gremis/my_portfolio/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/Gremis/my_portfolio/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/Gremis/my_portfolio/languages",
        stargazers_url:
          "https://api.github.com/repos/Gremis/my_portfolio/stargazers",
        contributors_url:
          "https://api.github.com/repos/Gremis/my_portfolio/contributors",
        subscribers_url:
          "https://api.github.com/repos/Gremis/my_portfolio/subscribers",
        subscription_url:
          "https://api.github.com/repos/Gremis/my_portfolio/subscription",
        commits_url:
          "https://api.github.com/repos/Gremis/my_portfolio/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/Gremis/my_portfolio/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/Gremis/my_portfolio/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/Gremis/my_portfolio/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/Gremis/my_portfolio/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/Gremis/my_portfolio/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/Gremis/my_portfolio/merges",
        archive_url:
          "https://api.github.com/repos/Gremis/my_portfolio/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/Gremis/my_portfolio/downloads",
        issues_url:
          "https://api.github.com/repos/Gremis/my_portfolio/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/Gremis/my_portfolio/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/Gremis/my_portfolio/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/Gremis/my_portfolio/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/Gremis/my_portfolio/labels{/name}",
        releases_url:
          "https://api.github.com/repos/Gremis/my_portfolio/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/Gremis/my_portfolio/deployments",
        created_at: "2021-03-12T12:32:00Z",
        updated_at: "2021-03-12T12:42:16Z",
        pushed_at: "2021-03-12T12:42:13Z",
        git_url: "git://github.com/Gremis/my_portfolio.git",
        ssh_url: "git@github.com:Gremis/my_portfolio.git",
        clone_url: "https://github.com/Gremis/my_portfolio.git",
        svn_url: "https://github.com/Gremis/my_portfolio",
        homepage: "my-portfolio-gremis.vercel.app",
        size: 66777,
        stargazers_count: 0,
        watchers_count: 0,
        language: "HTML",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: "main",
      },
      {
        id: 351797665,
        node_id: "MDEwOlJlcG9zaXRvcnkzNTE3OTc2NjU=",
        name: "Processo-Seletivo-NewM",
        full_name: "Gremis/Processo-Seletivo-NewM",
        private: false,
        owner: {
          login: "Gremis",
          id: 48386386,
          node_id: "MDQ6VXNlcjQ4Mzg2Mzg2",
          avatar_url: "https://avatars.githubusercontent.com/u/48386386?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Gremis",
          html_url: "https://github.com/Gremis",
          followers_url: "https://api.github.com/users/Gremis/followers",
          following_url:
            "https://api.github.com/users/Gremis/following{/other_user}",
          gists_url: "https://api.github.com/users/Gremis/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Gremis/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Gremis/subscriptions",
          organizations_url: "https://api.github.com/users/Gremis/orgs",
          repos_url: "https://api.github.com/users/Gremis/repos",
          events_url: "https://api.github.com/users/Gremis/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Gremis/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/Gremis/Processo-Seletivo-NewM",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/Gremis/Processo-Seletivo-NewM",
        forks_url:
          "https://api.github.com/repos/Gremis/Processo-Seletivo-NewM/forks",
        keys_url:
          "https://api.github.com/repos/Gremis/Processo-Seletivo-NewM/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/Gremis/Processo-Seletivo-NewM/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/Gremis/Processo-Seletivo-NewM/teams",
        hooks_url:
          "https://api.github.com/repos/Gremis/Processo-Seletivo-NewM/hooks",
        issue_events_url:
          "https://api.github.com/repos/Gremis/Processo-Seletivo-NewM/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/Gremis/Processo-Seletivo-NewM/events",
        assignees_url:
          "https://api.github.com/repos/Gremis/Processo-Seletivo-NewM/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/Gremis/Processo-Seletivo-NewM/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/Gremis/Processo-Seletivo-NewM/tags",
        blobs_url:
          "https://api.github.com/repos/Gremis/Processo-Seletivo-NewM/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/Gremis/Processo-Seletivo-NewM/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/Gremis/Processo-Seletivo-NewM/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/Gremis/Processo-Seletivo-NewM/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/Gremis/Processo-Seletivo-NewM/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/Gremis/Processo-Seletivo-NewM/languages",
        stargazers_url:
          "https://api.github.com/repos/Gremis/Processo-Seletivo-NewM/stargazers",
        contributors_url:
          "https://api.github.com/repos/Gremis/Processo-Seletivo-NewM/contributors",
        subscribers_url:
          "https://api.github.com/repos/Gremis/Processo-Seletivo-NewM/subscribers",
        subscription_url:
          "https://api.github.com/repos/Gremis/Processo-Seletivo-NewM/subscription",
        commits_url:
          "https://api.github.com/repos/Gremis/Processo-Seletivo-NewM/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/Gremis/Processo-Seletivo-NewM/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/Gremis/Processo-Seletivo-NewM/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/Gremis/Processo-Seletivo-NewM/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/Gremis/Processo-Seletivo-NewM/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/Gremis/Processo-Seletivo-NewM/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/Gremis/Processo-Seletivo-NewM/merges",
        archive_url:
          "https://api.github.com/repos/Gremis/Processo-Seletivo-NewM/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/Gremis/Processo-Seletivo-NewM/downloads",
        issues_url:
          "https://api.github.com/repos/Gremis/Processo-Seletivo-NewM/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/Gremis/Processo-Seletivo-NewM/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/Gremis/Processo-Seletivo-NewM/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/Gremis/Processo-Seletivo-NewM/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/Gremis/Processo-Seletivo-NewM/labels{/name}",
        releases_url:
          "https://api.github.com/repos/Gremis/Processo-Seletivo-NewM/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/Gremis/Processo-Seletivo-NewM/deployments",
        created_at: "2021-03-26T13:50:40Z",
        updated_at: "2021-03-26T13:54:18Z",
        pushed_at: "2021-03-26T13:54:16Z",
        git_url: "git://github.com/Gremis/Processo-Seletivo-NewM.git",
        ssh_url: "git@github.com:Gremis/Processo-Seletivo-NewM.git",
        clone_url: "https://github.com/Gremis/Processo-Seletivo-NewM.git",
        svn_url: "https://github.com/Gremis/Processo-Seletivo-NewM",
        homepage: null,
        size: 198,
        stargazers_count: 0,
        watchers_count: 0,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: "master",
      },
      {
        id: 274788301,
        node_id: "MDEwOlJlcG9zaXRvcnkyNzQ3ODgzMDE=",
        name: "QuizApp",
        full_name: "Gremis/QuizApp",
        private: false,
        owner: {
          login: "Gremis",
          id: 48386386,
          node_id: "MDQ6VXNlcjQ4Mzg2Mzg2",
          avatar_url: "https://avatars.githubusercontent.com/u/48386386?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Gremis",
          html_url: "https://github.com/Gremis",
          followers_url: "https://api.github.com/users/Gremis/followers",
          following_url:
            "https://api.github.com/users/Gremis/following{/other_user}",
          gists_url: "https://api.github.com/users/Gremis/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Gremis/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Gremis/subscriptions",
          organizations_url: "https://api.github.com/users/Gremis/orgs",
          repos_url: "https://api.github.com/users/Gremis/repos",
          events_url: "https://api.github.com/users/Gremis/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Gremis/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/Gremis/QuizApp",
        description: "Aplication HTML5, CSS3 and JavaScript_Connect API Trivia",
        fork: false,
        url: "https://api.github.com/repos/Gremis/QuizApp",
        forks_url: "https://api.github.com/repos/Gremis/QuizApp/forks",
        keys_url: "https://api.github.com/repos/Gremis/QuizApp/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/Gremis/QuizApp/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/Gremis/QuizApp/teams",
        hooks_url: "https://api.github.com/repos/Gremis/QuizApp/hooks",
        issue_events_url:
          "https://api.github.com/repos/Gremis/QuizApp/issues/events{/number}",
        events_url: "https://api.github.com/repos/Gremis/QuizApp/events",
        assignees_url:
          "https://api.github.com/repos/Gremis/QuizApp/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/Gremis/QuizApp/branches{/branch}",
        tags_url: "https://api.github.com/repos/Gremis/QuizApp/tags",
        blobs_url:
          "https://api.github.com/repos/Gremis/QuizApp/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/Gremis/QuizApp/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/Gremis/QuizApp/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/Gremis/QuizApp/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/Gremis/QuizApp/statuses/{sha}",
        languages_url: "https://api.github.com/repos/Gremis/QuizApp/languages",
        stargazers_url:
          "https://api.github.com/repos/Gremis/QuizApp/stargazers",
        contributors_url:
          "https://api.github.com/repos/Gremis/QuizApp/contributors",
        subscribers_url:
          "https://api.github.com/repos/Gremis/QuizApp/subscribers",
        subscription_url:
          "https://api.github.com/repos/Gremis/QuizApp/subscription",
        commits_url:
          "https://api.github.com/repos/Gremis/QuizApp/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/Gremis/QuizApp/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/Gremis/QuizApp/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/Gremis/QuizApp/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/Gremis/QuizApp/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/Gremis/QuizApp/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/Gremis/QuizApp/merges",
        archive_url:
          "https://api.github.com/repos/Gremis/QuizApp/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/Gremis/QuizApp/downloads",
        issues_url:
          "https://api.github.com/repos/Gremis/QuizApp/issues{/number}",
        pulls_url: "https://api.github.com/repos/Gremis/QuizApp/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/Gremis/QuizApp/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/Gremis/QuizApp/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/Gremis/QuizApp/labels{/name}",
        releases_url:
          "https://api.github.com/repos/Gremis/QuizApp/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/Gremis/QuizApp/deployments",
        created_at: "2020-06-24T23:20:48Z",
        updated_at: "2020-07-15T23:53:24Z",
        pushed_at: "2020-06-24T23:36:16Z",
        git_url: "git://github.com/Gremis/QuizApp.git",
        ssh_url: "git@github.com:Gremis/QuizApp.git",
        clone_url: "https://github.com/Gremis/QuizApp.git",
        svn_url: "https://github.com/Gremis/QuizApp",
        homepage: "https://quiz-app-two.vercel.app",
        size: 6,
        stargazers_count: 1,
        watchers_count: 1,
        language: "HTML",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "master",
      },
      {
        id: 336640380,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzY2NDAzODA=",
        name: "react-website",
        full_name: "Gremis/react-website",
        private: false,
        owner: {
          login: "Gremis",
          id: 48386386,
          node_id: "MDQ6VXNlcjQ4Mzg2Mzg2",
          avatar_url: "https://avatars.githubusercontent.com/u/48386386?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Gremis",
          html_url: "https://github.com/Gremis",
          followers_url: "https://api.github.com/users/Gremis/followers",
          following_url:
            "https://api.github.com/users/Gremis/following{/other_user}",
          gists_url: "https://api.github.com/users/Gremis/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Gremis/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Gremis/subscriptions",
          organizations_url: "https://api.github.com/users/Gremis/orgs",
          repos_url: "https://api.github.com/users/Gremis/repos",
          events_url: "https://api.github.com/users/Gremis/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Gremis/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/Gremis/react-website",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/Gremis/react-website",
        forks_url: "https://api.github.com/repos/Gremis/react-website/forks",
        keys_url:
          "https://api.github.com/repos/Gremis/react-website/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/Gremis/react-website/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/Gremis/react-website/teams",
        hooks_url: "https://api.github.com/repos/Gremis/react-website/hooks",
        issue_events_url:
          "https://api.github.com/repos/Gremis/react-website/issues/events{/number}",
        events_url: "https://api.github.com/repos/Gremis/react-website/events",
        assignees_url:
          "https://api.github.com/repos/Gremis/react-website/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/Gremis/react-website/branches{/branch}",
        tags_url: "https://api.github.com/repos/Gremis/react-website/tags",
        blobs_url:
          "https://api.github.com/repos/Gremis/react-website/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/Gremis/react-website/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/Gremis/react-website/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/Gremis/react-website/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/Gremis/react-website/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/Gremis/react-website/languages",
        stargazers_url:
          "https://api.github.com/repos/Gremis/react-website/stargazers",
        contributors_url:
          "https://api.github.com/repos/Gremis/react-website/contributors",
        subscribers_url:
          "https://api.github.com/repos/Gremis/react-website/subscribers",
        subscription_url:
          "https://api.github.com/repos/Gremis/react-website/subscription",
        commits_url:
          "https://api.github.com/repos/Gremis/react-website/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/Gremis/react-website/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/Gremis/react-website/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/Gremis/react-website/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/Gremis/react-website/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/Gremis/react-website/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/Gremis/react-website/merges",
        archive_url:
          "https://api.github.com/repos/Gremis/react-website/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/Gremis/react-website/downloads",
        issues_url:
          "https://api.github.com/repos/Gremis/react-website/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/Gremis/react-website/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/Gremis/react-website/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/Gremis/react-website/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/Gremis/react-website/labels{/name}",
        releases_url:
          "https://api.github.com/repos/Gremis/react-website/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/Gremis/react-website/deployments",
        created_at: "2021-02-06T21:29:34Z",
        updated_at: "2021-02-06T21:44:51Z",
        pushed_at: "2021-02-06T21:44:48Z",
        git_url: "git://github.com/Gremis/react-website.git",
        ssh_url: "git@github.com:Gremis/react-website.git",
        clone_url: "https://github.com/Gremis/react-website.git",
        svn_url: "https://github.com/Gremis/react-website",
        homepage: null,
        size: 34184,
        stargazers_count: 0,
        watchers_count: 0,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: "main",
      },
      {
        id: 276713519,
        node_id: "MDEwOlJlcG9zaXRvcnkyNzY3MTM1MTk=",
        name: "Saw-Game_Practice",
        full_name: "Gremis/Saw-Game_Practice",
        private: false,
        owner: {
          login: "Gremis",
          id: 48386386,
          node_id: "MDQ6VXNlcjQ4Mzg2Mzg2",
          avatar_url: "https://avatars.githubusercontent.com/u/48386386?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Gremis",
          html_url: "https://github.com/Gremis",
          followers_url: "https://api.github.com/users/Gremis/followers",
          following_url:
            "https://api.github.com/users/Gremis/following{/other_user}",
          gists_url: "https://api.github.com/users/Gremis/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Gremis/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Gremis/subscriptions",
          organizations_url: "https://api.github.com/users/Gremis/orgs",
          repos_url: "https://api.github.com/users/Gremis/repos",
          events_url: "https://api.github.com/users/Gremis/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Gremis/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/Gremis/Saw-Game_Practice",
        description: "Game using JavaScript and library Propeller.js",
        fork: false,
        url: "https://api.github.com/repos/Gremis/Saw-Game_Practice",
        forks_url:
          "https://api.github.com/repos/Gremis/Saw-Game_Practice/forks",
        keys_url:
          "https://api.github.com/repos/Gremis/Saw-Game_Practice/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/Gremis/Saw-Game_Practice/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/Gremis/Saw-Game_Practice/teams",
        hooks_url:
          "https://api.github.com/repos/Gremis/Saw-Game_Practice/hooks",
        issue_events_url:
          "https://api.github.com/repos/Gremis/Saw-Game_Practice/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/Gremis/Saw-Game_Practice/events",
        assignees_url:
          "https://api.github.com/repos/Gremis/Saw-Game_Practice/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/Gremis/Saw-Game_Practice/branches{/branch}",
        tags_url: "https://api.github.com/repos/Gremis/Saw-Game_Practice/tags",
        blobs_url:
          "https://api.github.com/repos/Gremis/Saw-Game_Practice/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/Gremis/Saw-Game_Practice/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/Gremis/Saw-Game_Practice/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/Gremis/Saw-Game_Practice/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/Gremis/Saw-Game_Practice/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/Gremis/Saw-Game_Practice/languages",
        stargazers_url:
          "https://api.github.com/repos/Gremis/Saw-Game_Practice/stargazers",
        contributors_url:
          "https://api.github.com/repos/Gremis/Saw-Game_Practice/contributors",
        subscribers_url:
          "https://api.github.com/repos/Gremis/Saw-Game_Practice/subscribers",
        subscription_url:
          "https://api.github.com/repos/Gremis/Saw-Game_Practice/subscription",
        commits_url:
          "https://api.github.com/repos/Gremis/Saw-Game_Practice/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/Gremis/Saw-Game_Practice/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/Gremis/Saw-Game_Practice/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/Gremis/Saw-Game_Practice/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/Gremis/Saw-Game_Practice/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/Gremis/Saw-Game_Practice/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/Gremis/Saw-Game_Practice/merges",
        archive_url:
          "https://api.github.com/repos/Gremis/Saw-Game_Practice/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/Gremis/Saw-Game_Practice/downloads",
        issues_url:
          "https://api.github.com/repos/Gremis/Saw-Game_Practice/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/Gremis/Saw-Game_Practice/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/Gremis/Saw-Game_Practice/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/Gremis/Saw-Game_Practice/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/Gremis/Saw-Game_Practice/labels{/name}",
        releases_url:
          "https://api.github.com/repos/Gremis/Saw-Game_Practice/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/Gremis/Saw-Game_Practice/deployments",
        created_at: "2020-07-02T17:59:37Z",
        updated_at: "2020-07-15T23:53:27Z",
        pushed_at: "2020-07-02T18:02:59Z",
        git_url: "git://github.com/Gremis/Saw-Game_Practice.git",
        ssh_url: "git@github.com:Gremis/Saw-Game_Practice.git",
        clone_url: "https://github.com/Gremis/Saw-Game_Practice.git",
        svn_url: "https://github.com/Gremis/Saw-Game_Practice",
        homepage: "https://saw-game-practice.vercel.app",
        size: 567,
        stargazers_count: 1,
        watchers_count: 1,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "master",
      },
      {
        id: 357340686,
        node_id: "MDEwOlJlcG9zaXRvcnkzNTczNDA2ODY=",
        name: "Search-App",
        full_name: "Gremis/Search-App",
        private: false,
        owner: {
          login: "Gremis",
          id: 48386386,
          node_id: "MDQ6VXNlcjQ4Mzg2Mzg2",
          avatar_url: "https://avatars.githubusercontent.com/u/48386386?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Gremis",
          html_url: "https://github.com/Gremis",
          followers_url: "https://api.github.com/users/Gremis/followers",
          following_url:
            "https://api.github.com/users/Gremis/following{/other_user}",
          gists_url: "https://api.github.com/users/Gremis/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Gremis/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Gremis/subscriptions",
          organizations_url: "https://api.github.com/users/Gremis/orgs",
          repos_url: "https://api.github.com/users/Gremis/repos",
          events_url: "https://api.github.com/users/Gremis/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Gremis/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/Gremis/Search-App",
        description:
          "Build a search app using HTML5, Sass, JavaScript and the Wikipedia API",
        fork: false,
        url: "https://api.github.com/repos/Gremis/Search-App",
        forks_url: "https://api.github.com/repos/Gremis/Search-App/forks",
        keys_url:
          "https://api.github.com/repos/Gremis/Search-App/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/Gremis/Search-App/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/Gremis/Search-App/teams",
        hooks_url: "https://api.github.com/repos/Gremis/Search-App/hooks",
        issue_events_url:
          "https://api.github.com/repos/Gremis/Search-App/issues/events{/number}",
        events_url: "https://api.github.com/repos/Gremis/Search-App/events",
        assignees_url:
          "https://api.github.com/repos/Gremis/Search-App/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/Gremis/Search-App/branches{/branch}",
        tags_url: "https://api.github.com/repos/Gremis/Search-App/tags",
        blobs_url:
          "https://api.github.com/repos/Gremis/Search-App/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/Gremis/Search-App/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/Gremis/Search-App/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/Gremis/Search-App/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/Gremis/Search-App/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/Gremis/Search-App/languages",
        stargazers_url:
          "https://api.github.com/repos/Gremis/Search-App/stargazers",
        contributors_url:
          "https://api.github.com/repos/Gremis/Search-App/contributors",
        subscribers_url:
          "https://api.github.com/repos/Gremis/Search-App/subscribers",
        subscription_url:
          "https://api.github.com/repos/Gremis/Search-App/subscription",
        commits_url:
          "https://api.github.com/repos/Gremis/Search-App/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/Gremis/Search-App/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/Gremis/Search-App/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/Gremis/Search-App/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/Gremis/Search-App/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/Gremis/Search-App/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/Gremis/Search-App/merges",
        archive_url:
          "https://api.github.com/repos/Gremis/Search-App/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/Gremis/Search-App/downloads",
        issues_url:
          "https://api.github.com/repos/Gremis/Search-App/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/Gremis/Search-App/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/Gremis/Search-App/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/Gremis/Search-App/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/Gremis/Search-App/labels{/name}",
        releases_url:
          "https://api.github.com/repos/Gremis/Search-App/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/Gremis/Search-App/deployments",
        created_at: "2021-04-12T21:12:22Z",
        updated_at: "2021-04-14T13:29:09Z",
        pushed_at: "2021-04-14T13:29:07Z",
        git_url: "git://github.com/Gremis/Search-App.git",
        ssh_url: "git@github.com:Gremis/Search-App.git",
        clone_url: "https://github.com/Gremis/Search-App.git",
        svn_url: "https://github.com/Gremis/Search-App",
        homepage: "search-app-nine.vercel.app",
        size: 3397,
        stargazers_count: 0,
        watchers_count: 0,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: "main",
      },
    ];

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(getRepos("gremis")).resolves.toEqual(data);

    expect(axios.get).toHaveBeenCalledWith(
      `https://api.github.com/users/gremis/repos?client_id=6f0a4c8107235118423f&client_secret=404a32dd46e3df5b6c13b2da1278411185a95a46`
    );
  });

  it("fetches erroneously data from the github repos API", async () => {
    const errorMessage = "Network Error";

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );

    await expect(getRepos("gremis")).rejects.toThrow(errorMessage);
  });
});

// Teste Enpoint 3

describe("fetchData getStarred", () => {
  it("fetches successfully user starred repos from the GitHub API", async () => {
    const data = [
      {
        id: 336926477,
        node_id: "MDEwOlJlcG9zaXRvcnkzMzY5MjY0Nzc=",
        name: "Suculento-App",
        full_name: "jackomo007/Suculento-App",
        private: false,
        owner: {
          login: "jackomo007",
          id: 38612112,
          node_id: "MDQ6VXNlcjM4NjEyMTEy",
          avatar_url: "https://avatars.githubusercontent.com/u/38612112?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/jackomo007",
          html_url: "https://github.com/jackomo007",
          followers_url: "https://api.github.com/users/jackomo007/followers",
          following_url:
            "https://api.github.com/users/jackomo007/following{/other_user}",
          gists_url: "https://api.github.com/users/jackomo007/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/jackomo007/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/jackomo007/subscriptions",
          organizations_url: "https://api.github.com/users/jackomo007/orgs",
          repos_url: "https://api.github.com/users/jackomo007/repos",
          events_url:
            "https://api.github.com/users/jackomo007/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/jackomo007/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/jackomo007/Suculento-App",
        description:
          "Flutter cooking app, inspired by the desing Cooking App of Hend Elgohary https://www.uplabs.com/posts/cooking-app-1132c845-9423-45b7-84c8-aff430d589ae",
        fork: false,
        url: "https://api.github.com/repos/jackomo007/Suculento-App",
        forks_url:
          "https://api.github.com/repos/jackomo007/Suculento-App/forks",
        keys_url:
          "https://api.github.com/repos/jackomo007/Suculento-App/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/jackomo007/Suculento-App/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/jackomo007/Suculento-App/teams",
        hooks_url:
          "https://api.github.com/repos/jackomo007/Suculento-App/hooks",
        issue_events_url:
          "https://api.github.com/repos/jackomo007/Suculento-App/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/jackomo007/Suculento-App/events",
        assignees_url:
          "https://api.github.com/repos/jackomo007/Suculento-App/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/jackomo007/Suculento-App/branches{/branch}",
        tags_url: "https://api.github.com/repos/jackomo007/Suculento-App/tags",
        blobs_url:
          "https://api.github.com/repos/jackomo007/Suculento-App/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/jackomo007/Suculento-App/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/jackomo007/Suculento-App/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/jackomo007/Suculento-App/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/jackomo007/Suculento-App/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/jackomo007/Suculento-App/languages",
        stargazers_url:
          "https://api.github.com/repos/jackomo007/Suculento-App/stargazers",
        contributors_url:
          "https://api.github.com/repos/jackomo007/Suculento-App/contributors",
        subscribers_url:
          "https://api.github.com/repos/jackomo007/Suculento-App/subscribers",
        subscription_url:
          "https://api.github.com/repos/jackomo007/Suculento-App/subscription",
        commits_url:
          "https://api.github.com/repos/jackomo007/Suculento-App/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/jackomo007/Suculento-App/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/jackomo007/Suculento-App/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/jackomo007/Suculento-App/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/jackomo007/Suculento-App/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/jackomo007/Suculento-App/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/jackomo007/Suculento-App/merges",
        archive_url:
          "https://api.github.com/repos/jackomo007/Suculento-App/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/jackomo007/Suculento-App/downloads",
        issues_url:
          "https://api.github.com/repos/jackomo007/Suculento-App/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/jackomo007/Suculento-App/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/jackomo007/Suculento-App/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/jackomo007/Suculento-App/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/jackomo007/Suculento-App/labels{/name}",
        releases_url:
          "https://api.github.com/repos/jackomo007/Suculento-App/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/jackomo007/Suculento-App/deployments",
        created_at: "2021-02-08T01:08:51Z",
        updated_at: "2021-02-23T16:55:08Z",
        pushed_at: "2021-02-08T01:14:21Z",
        git_url: "git://github.com/jackomo007/Suculento-App.git",
        ssh_url: "git@github.com:jackomo007/Suculento-App.git",
        clone_url: "https://github.com/jackomo007/Suculento-App.git",
        svn_url: "https://github.com/jackomo007/Suculento-App",
        homepage: null,
        size: 1776,
        stargazers_count: 1,
        watchers_count: 1,
        language: "Dart",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "main",
      },
      {
        id: 318030626,
        node_id: "MDEwOlJlcG9zaXRvcnkzMTgwMzA2MjY=",
        name: "PokemonPartner",
        full_name: "jackomo007/PokemonPartner",
        private: false,
        owner: {
          login: "jackomo007",
          id: 38612112,
          node_id: "MDQ6VXNlcjM4NjEyMTEy",
          avatar_url: "https://avatars.githubusercontent.com/u/38612112?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/jackomo007",
          html_url: "https://github.com/jackomo007",
          followers_url: "https://api.github.com/users/jackomo007/followers",
          following_url:
            "https://api.github.com/users/jackomo007/following{/other_user}",
          gists_url: "https://api.github.com/users/jackomo007/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/jackomo007/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/jackomo007/subscriptions",
          organizations_url: "https://api.github.com/users/jackomo007/orgs",
          repos_url: "https://api.github.com/users/jackomo007/repos",
          events_url:
            "https://api.github.com/users/jackomo007/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/jackomo007/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/jackomo007/PokemonPartner",
        description: "A flutter app inspired by the appbrewery course",
        fork: false,
        url: "https://api.github.com/repos/jackomo007/PokemonPartner",
        forks_url:
          "https://api.github.com/repos/jackomo007/PokemonPartner/forks",
        keys_url:
          "https://api.github.com/repos/jackomo007/PokemonPartner/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/jackomo007/PokemonPartner/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/jackomo007/PokemonPartner/teams",
        hooks_url:
          "https://api.github.com/repos/jackomo007/PokemonPartner/hooks",
        issue_events_url:
          "https://api.github.com/repos/jackomo007/PokemonPartner/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/jackomo007/PokemonPartner/events",
        assignees_url:
          "https://api.github.com/repos/jackomo007/PokemonPartner/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/jackomo007/PokemonPartner/branches{/branch}",
        tags_url: "https://api.github.com/repos/jackomo007/PokemonPartner/tags",
        blobs_url:
          "https://api.github.com/repos/jackomo007/PokemonPartner/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/jackomo007/PokemonPartner/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/jackomo007/PokemonPartner/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/jackomo007/PokemonPartner/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/jackomo007/PokemonPartner/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/jackomo007/PokemonPartner/languages",
        stargazers_url:
          "https://api.github.com/repos/jackomo007/PokemonPartner/stargazers",
        contributors_url:
          "https://api.github.com/repos/jackomo007/PokemonPartner/contributors",
        subscribers_url:
          "https://api.github.com/repos/jackomo007/PokemonPartner/subscribers",
        subscription_url:
          "https://api.github.com/repos/jackomo007/PokemonPartner/subscription",
        commits_url:
          "https://api.github.com/repos/jackomo007/PokemonPartner/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/jackomo007/PokemonPartner/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/jackomo007/PokemonPartner/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/jackomo007/PokemonPartner/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/jackomo007/PokemonPartner/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/jackomo007/PokemonPartner/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/jackomo007/PokemonPartner/merges",
        archive_url:
          "https://api.github.com/repos/jackomo007/PokemonPartner/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/jackomo007/PokemonPartner/downloads",
        issues_url:
          "https://api.github.com/repos/jackomo007/PokemonPartner/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/jackomo007/PokemonPartner/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/jackomo007/PokemonPartner/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/jackomo007/PokemonPartner/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/jackomo007/PokemonPartner/labels{/name}",
        releases_url:
          "https://api.github.com/repos/jackomo007/PokemonPartner/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/jackomo007/PokemonPartner/deployments",
        created_at: "2020-12-03T00:40:32Z",
        updated_at: "2021-01-05T14:20:27Z",
        pushed_at: "2020-12-03T00:46:26Z",
        git_url: "git://github.com/jackomo007/PokemonPartner.git",
        ssh_url: "git@github.com:jackomo007/PokemonPartner.git",
        clone_url: "https://github.com/jackomo007/PokemonPartner.git",
        svn_url: "https://github.com/jackomo007/PokemonPartner",
        homepage: null,
        size: 3402,
        stargazers_count: 1,
        watchers_count: 1,
        language: "Dart",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "main",
      },
      {
        id: 318847809,
        node_id: "MDEwOlJlcG9zaXRvcnkzMTg4NDc4MDk=",
        name: "Gamizz",
        full_name: "jackomo007/Gamizz",
        private: false,
        owner: {
          login: "jackomo007",
          id: 38612112,
          node_id: "MDQ6VXNlcjM4NjEyMTEy",
          avatar_url: "https://avatars.githubusercontent.com/u/38612112?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/jackomo007",
          html_url: "https://github.com/jackomo007",
          followers_url: "https://api.github.com/users/jackomo007/followers",
          following_url:
            "https://api.github.com/users/jackomo007/following{/other_user}",
          gists_url: "https://api.github.com/users/jackomo007/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/jackomo007/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/jackomo007/subscriptions",
          organizations_url: "https://api.github.com/users/jackomo007/orgs",
          repos_url: "https://api.github.com/users/jackomo007/repos",
          events_url:
            "https://api.github.com/users/jackomo007/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/jackomo007/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/jackomo007/Gamizz",
        description: "A flutter quizz game inspired by the appbrewery course.",
        fork: false,
        url: "https://api.github.com/repos/jackomo007/Gamizz",
        forks_url: "https://api.github.com/repos/jackomo007/Gamizz/forks",
        keys_url:
          "https://api.github.com/repos/jackomo007/Gamizz/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/jackomo007/Gamizz/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/jackomo007/Gamizz/teams",
        hooks_url: "https://api.github.com/repos/jackomo007/Gamizz/hooks",
        issue_events_url:
          "https://api.github.com/repos/jackomo007/Gamizz/issues/events{/number}",
        events_url: "https://api.github.com/repos/jackomo007/Gamizz/events",
        assignees_url:
          "https://api.github.com/repos/jackomo007/Gamizz/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/jackomo007/Gamizz/branches{/branch}",
        tags_url: "https://api.github.com/repos/jackomo007/Gamizz/tags",
        blobs_url:
          "https://api.github.com/repos/jackomo007/Gamizz/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/jackomo007/Gamizz/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/jackomo007/Gamizz/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/jackomo007/Gamizz/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/jackomo007/Gamizz/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/jackomo007/Gamizz/languages",
        stargazers_url:
          "https://api.github.com/repos/jackomo007/Gamizz/stargazers",
        contributors_url:
          "https://api.github.com/repos/jackomo007/Gamizz/contributors",
        subscribers_url:
          "https://api.github.com/repos/jackomo007/Gamizz/subscribers",
        subscription_url:
          "https://api.github.com/repos/jackomo007/Gamizz/subscription",
        commits_url:
          "https://api.github.com/repos/jackomo007/Gamizz/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/jackomo007/Gamizz/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/jackomo007/Gamizz/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/jackomo007/Gamizz/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/jackomo007/Gamizz/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/jackomo007/Gamizz/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/jackomo007/Gamizz/merges",
        archive_url:
          "https://api.github.com/repos/jackomo007/Gamizz/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/jackomo007/Gamizz/downloads",
        issues_url:
          "https://api.github.com/repos/jackomo007/Gamizz/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/jackomo007/Gamizz/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/jackomo007/Gamizz/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/jackomo007/Gamizz/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/jackomo007/Gamizz/labels{/name}",
        releases_url:
          "https://api.github.com/repos/jackomo007/Gamizz/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/jackomo007/Gamizz/deployments",
        created_at: "2020-12-05T17:27:27Z",
        updated_at: "2021-01-05T14:20:24Z",
        pushed_at: "2020-12-05T17:42:57Z",
        git_url: "git://github.com/jackomo007/Gamizz.git",
        ssh_url: "git@github.com:jackomo007/Gamizz.git",
        clone_url: "https://github.com/jackomo007/Gamizz.git",
        svn_url: "https://github.com/jackomo007/Gamizz",
        homepage: "",
        size: 3312,
        stargazers_count: 1,
        watchers_count: 1,
        language: "Dart",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "main",
      },
      {
        id: 320110627,
        node_id: "MDEwOlJlcG9zaXRvcnkzMjAxMTA2Mjc=",
        name: "SoundTer",
        full_name: "jackomo007/SoundTer",
        private: false,
        owner: {
          login: "jackomo007",
          id: 38612112,
          node_id: "MDQ6VXNlcjM4NjEyMTEy",
          avatar_url: "https://avatars.githubusercontent.com/u/38612112?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/jackomo007",
          html_url: "https://github.com/jackomo007",
          followers_url: "https://api.github.com/users/jackomo007/followers",
          following_url:
            "https://api.github.com/users/jackomo007/following{/other_user}",
          gists_url: "https://api.github.com/users/jackomo007/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/jackomo007/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/jackomo007/subscriptions",
          organizations_url: "https://api.github.com/users/jackomo007/orgs",
          repos_url: "https://api.github.com/users/jackomo007/repos",
          events_url:
            "https://api.github.com/users/jackomo007/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/jackomo007/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/jackomo007/SoundTer",
        description: "A flutter sound pad app",
        fork: false,
        url: "https://api.github.com/repos/jackomo007/SoundTer",
        forks_url: "https://api.github.com/repos/jackomo007/SoundTer/forks",
        keys_url:
          "https://api.github.com/repos/jackomo007/SoundTer/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/jackomo007/SoundTer/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/jackomo007/SoundTer/teams",
        hooks_url: "https://api.github.com/repos/jackomo007/SoundTer/hooks",
        issue_events_url:
          "https://api.github.com/repos/jackomo007/SoundTer/issues/events{/number}",
        events_url: "https://api.github.com/repos/jackomo007/SoundTer/events",
        assignees_url:
          "https://api.github.com/repos/jackomo007/SoundTer/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/jackomo007/SoundTer/branches{/branch}",
        tags_url: "https://api.github.com/repos/jackomo007/SoundTer/tags",
        blobs_url:
          "https://api.github.com/repos/jackomo007/SoundTer/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/jackomo007/SoundTer/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/jackomo007/SoundTer/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/jackomo007/SoundTer/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/jackomo007/SoundTer/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/jackomo007/SoundTer/languages",
        stargazers_url:
          "https://api.github.com/repos/jackomo007/SoundTer/stargazers",
        contributors_url:
          "https://api.github.com/repos/jackomo007/SoundTer/contributors",
        subscribers_url:
          "https://api.github.com/repos/jackomo007/SoundTer/subscribers",
        subscription_url:
          "https://api.github.com/repos/jackomo007/SoundTer/subscription",
        commits_url:
          "https://api.github.com/repos/jackomo007/SoundTer/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/jackomo007/SoundTer/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/jackomo007/SoundTer/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/jackomo007/SoundTer/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/jackomo007/SoundTer/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/jackomo007/SoundTer/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/jackomo007/SoundTer/merges",
        archive_url:
          "https://api.github.com/repos/jackomo007/SoundTer/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/jackomo007/SoundTer/downloads",
        issues_url:
          "https://api.github.com/repos/jackomo007/SoundTer/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/jackomo007/SoundTer/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/jackomo007/SoundTer/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/jackomo007/SoundTer/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/jackomo007/SoundTer/labels{/name}",
        releases_url:
          "https://api.github.com/repos/jackomo007/SoundTer/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/jackomo007/SoundTer/deployments",
        created_at: "2020-12-10T00:00:27Z",
        updated_at: "2021-01-05T14:20:22Z",
        pushed_at: "2020-12-10T00:29:39Z",
        git_url: "git://github.com/jackomo007/SoundTer.git",
        ssh_url: "git@github.com:jackomo007/SoundTer.git",
        clone_url: "https://github.com/jackomo007/SoundTer.git",
        svn_url: "https://github.com/jackomo007/SoundTer",
        homepage: null,
        size: 937,
        stargazers_count: 1,
        watchers_count: 1,
        language: "Dart",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "main",
      },
      {
        id: 325888868,
        node_id: "MDEwOlJlcG9zaXRvcnkzMjU4ODg4Njg=",
        name: "WhereIsMyMoney",
        full_name: "jackomo007/WhereIsMyMoney",
        private: false,
        owner: {
          login: "jackomo007",
          id: 38612112,
          node_id: "MDQ6VXNlcjM4NjEyMTEy",
          avatar_url: "https://avatars.githubusercontent.com/u/38612112?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/jackomo007",
          html_url: "https://github.com/jackomo007",
          followers_url: "https://api.github.com/users/jackomo007/followers",
          following_url:
            "https://api.github.com/users/jackomo007/following{/other_user}",
          gists_url: "https://api.github.com/users/jackomo007/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/jackomo007/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/jackomo007/subscriptions",
          organizations_url: "https://api.github.com/users/jackomo007/orgs",
          repos_url: "https://api.github.com/users/jackomo007/repos",
          events_url:
            "https://api.github.com/users/jackomo007/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/jackomo007/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/jackomo007/WhereIsMyMoney",
        description:
          "Flutter Summary Expenses app (from A Complete Guide to the Flutter Course)",
        fork: false,
        url: "https://api.github.com/repos/jackomo007/WhereIsMyMoney",
        forks_url:
          "https://api.github.com/repos/jackomo007/WhereIsMyMoney/forks",
        keys_url:
          "https://api.github.com/repos/jackomo007/WhereIsMyMoney/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/jackomo007/WhereIsMyMoney/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/jackomo007/WhereIsMyMoney/teams",
        hooks_url:
          "https://api.github.com/repos/jackomo007/WhereIsMyMoney/hooks",
        issue_events_url:
          "https://api.github.com/repos/jackomo007/WhereIsMyMoney/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/jackomo007/WhereIsMyMoney/events",
        assignees_url:
          "https://api.github.com/repos/jackomo007/WhereIsMyMoney/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/jackomo007/WhereIsMyMoney/branches{/branch}",
        tags_url: "https://api.github.com/repos/jackomo007/WhereIsMyMoney/tags",
        blobs_url:
          "https://api.github.com/repos/jackomo007/WhereIsMyMoney/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/jackomo007/WhereIsMyMoney/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/jackomo007/WhereIsMyMoney/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/jackomo007/WhereIsMyMoney/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/jackomo007/WhereIsMyMoney/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/jackomo007/WhereIsMyMoney/languages",
        stargazers_url:
          "https://api.github.com/repos/jackomo007/WhereIsMyMoney/stargazers",
        contributors_url:
          "https://api.github.com/repos/jackomo007/WhereIsMyMoney/contributors",
        subscribers_url:
          "https://api.github.com/repos/jackomo007/WhereIsMyMoney/subscribers",
        subscription_url:
          "https://api.github.com/repos/jackomo007/WhereIsMyMoney/subscription",
        commits_url:
          "https://api.github.com/repos/jackomo007/WhereIsMyMoney/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/jackomo007/WhereIsMyMoney/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/jackomo007/WhereIsMyMoney/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/jackomo007/WhereIsMyMoney/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/jackomo007/WhereIsMyMoney/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/jackomo007/WhereIsMyMoney/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/jackomo007/WhereIsMyMoney/merges",
        archive_url:
          "https://api.github.com/repos/jackomo007/WhereIsMyMoney/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/jackomo007/WhereIsMyMoney/downloads",
        issues_url:
          "https://api.github.com/repos/jackomo007/WhereIsMyMoney/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/jackomo007/WhereIsMyMoney/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/jackomo007/WhereIsMyMoney/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/jackomo007/WhereIsMyMoney/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/jackomo007/WhereIsMyMoney/labels{/name}",
        releases_url:
          "https://api.github.com/repos/jackomo007/WhereIsMyMoney/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/jackomo007/WhereIsMyMoney/deployments",
        created_at: "2020-12-31T23:33:24Z",
        updated_at: "2021-01-05T14:20:21Z",
        pushed_at: "2020-12-31T23:41:54Z",
        git_url: "git://github.com/jackomo007/WhereIsMyMoney.git",
        ssh_url: "git@github.com:jackomo007/WhereIsMyMoney.git",
        clone_url: "https://github.com/jackomo007/WhereIsMyMoney.git",
        svn_url: "https://github.com/jackomo007/WhereIsMyMoney",
        homepage: null,
        size: 674,
        stargazers_count: 1,
        watchers_count: 1,
        language: "Dart",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "main",
      },
      {
        id: 293978680,
        node_id: "MDEwOlJlcG9zaXRvcnkyOTM5Nzg2ODA=",
        name: "vue-sanctum",
        full_name: "jackomo007/vue-sanctum",
        private: false,
        owner: {
          login: "jackomo007",
          id: 38612112,
          node_id: "MDQ6VXNlcjM4NjEyMTEy",
          avatar_url: "https://avatars.githubusercontent.com/u/38612112?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/jackomo007",
          html_url: "https://github.com/jackomo007",
          followers_url: "https://api.github.com/users/jackomo007/followers",
          following_url:
            "https://api.github.com/users/jackomo007/following{/other_user}",
          gists_url: "https://api.github.com/users/jackomo007/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/jackomo007/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/jackomo007/subscriptions",
          organizations_url: "https://api.github.com/users/jackomo007/orgs",
          repos_url: "https://api.github.com/users/jackomo007/repos",
          events_url:
            "https://api.github.com/users/jackomo007/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/jackomo007/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/jackomo007/vue-sanctum",
        description: "Vue app consuming Laravel Sanctum API",
        fork: false,
        url: "https://api.github.com/repos/jackomo007/vue-sanctum",
        forks_url: "https://api.github.com/repos/jackomo007/vue-sanctum/forks",
        keys_url:
          "https://api.github.com/repos/jackomo007/vue-sanctum/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/jackomo007/vue-sanctum/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/jackomo007/vue-sanctum/teams",
        hooks_url: "https://api.github.com/repos/jackomo007/vue-sanctum/hooks",
        issue_events_url:
          "https://api.github.com/repos/jackomo007/vue-sanctum/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/jackomo007/vue-sanctum/events",
        assignees_url:
          "https://api.github.com/repos/jackomo007/vue-sanctum/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/jackomo007/vue-sanctum/branches{/branch}",
        tags_url: "https://api.github.com/repos/jackomo007/vue-sanctum/tags",
        blobs_url:
          "https://api.github.com/repos/jackomo007/vue-sanctum/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/jackomo007/vue-sanctum/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/jackomo007/vue-sanctum/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/jackomo007/vue-sanctum/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/jackomo007/vue-sanctum/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/jackomo007/vue-sanctum/languages",
        stargazers_url:
          "https://api.github.com/repos/jackomo007/vue-sanctum/stargazers",
        contributors_url:
          "https://api.github.com/repos/jackomo007/vue-sanctum/contributors",
        subscribers_url:
          "https://api.github.com/repos/jackomo007/vue-sanctum/subscribers",
        subscription_url:
          "https://api.github.com/repos/jackomo007/vue-sanctum/subscription",
        commits_url:
          "https://api.github.com/repos/jackomo007/vue-sanctum/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/jackomo007/vue-sanctum/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/jackomo007/vue-sanctum/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/jackomo007/vue-sanctum/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/jackomo007/vue-sanctum/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/jackomo007/vue-sanctum/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/jackomo007/vue-sanctum/merges",
        archive_url:
          "https://api.github.com/repos/jackomo007/vue-sanctum/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/jackomo007/vue-sanctum/downloads",
        issues_url:
          "https://api.github.com/repos/jackomo007/vue-sanctum/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/jackomo007/vue-sanctum/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/jackomo007/vue-sanctum/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/jackomo007/vue-sanctum/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/jackomo007/vue-sanctum/labels{/name}",
        releases_url:
          "https://api.github.com/repos/jackomo007/vue-sanctum/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/jackomo007/vue-sanctum/deployments",
        created_at: "2020-09-09T02:17:08Z",
        updated_at: "2020-12-02T12:36:52Z",
        pushed_at: "2020-09-09T02:17:10Z",
        git_url: "git://github.com/jackomo007/vue-sanctum.git",
        ssh_url: "git@github.com:jackomo007/vue-sanctum.git",
        clone_url: "https://github.com/jackomo007/vue-sanctum.git",
        svn_url: "https://github.com/jackomo007/vue-sanctum",
        homepage: null,
        size: 0,
        stargazers_count: 1,
        watchers_count: 1,
        language: null,
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "master",
      },
      {
        id: 312245994,
        node_id: "MDEwOlJlcG9zaXRvcnkzMTIyNDU5OTQ=",
        name: "Flutter-BMI",
        full_name: "jackomo007/Flutter-BMI",
        private: false,
        owner: {
          login: "jackomo007",
          id: 38612112,
          node_id: "MDQ6VXNlcjM4NjEyMTEy",
          avatar_url: "https://avatars.githubusercontent.com/u/38612112?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/jackomo007",
          html_url: "https://github.com/jackomo007",
          followers_url: "https://api.github.com/users/jackomo007/followers",
          following_url:
            "https://api.github.com/users/jackomo007/following{/other_user}",
          gists_url: "https://api.github.com/users/jackomo007/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/jackomo007/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/jackomo007/subscriptions",
          organizations_url: "https://api.github.com/users/jackomo007/orgs",
          repos_url: "https://api.github.com/users/jackomo007/repos",
          events_url:
            "https://api.github.com/users/jackomo007/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/jackomo007/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/jackomo007/Flutter-BMI",
        description: "BMI calculator inspired by desing made by Ruben Vaalt.",
        fork: false,
        url: "https://api.github.com/repos/jackomo007/Flutter-BMI",
        forks_url: "https://api.github.com/repos/jackomo007/Flutter-BMI/forks",
        keys_url:
          "https://api.github.com/repos/jackomo007/Flutter-BMI/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/jackomo007/Flutter-BMI/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/jackomo007/Flutter-BMI/teams",
        hooks_url: "https://api.github.com/repos/jackomo007/Flutter-BMI/hooks",
        issue_events_url:
          "https://api.github.com/repos/jackomo007/Flutter-BMI/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/jackomo007/Flutter-BMI/events",
        assignees_url:
          "https://api.github.com/repos/jackomo007/Flutter-BMI/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/jackomo007/Flutter-BMI/branches{/branch}",
        tags_url: "https://api.github.com/repos/jackomo007/Flutter-BMI/tags",
        blobs_url:
          "https://api.github.com/repos/jackomo007/Flutter-BMI/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/jackomo007/Flutter-BMI/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/jackomo007/Flutter-BMI/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/jackomo007/Flutter-BMI/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/jackomo007/Flutter-BMI/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/jackomo007/Flutter-BMI/languages",
        stargazers_url:
          "https://api.github.com/repos/jackomo007/Flutter-BMI/stargazers",
        contributors_url:
          "https://api.github.com/repos/jackomo007/Flutter-BMI/contributors",
        subscribers_url:
          "https://api.github.com/repos/jackomo007/Flutter-BMI/subscribers",
        subscription_url:
          "https://api.github.com/repos/jackomo007/Flutter-BMI/subscription",
        commits_url:
          "https://api.github.com/repos/jackomo007/Flutter-BMI/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/jackomo007/Flutter-BMI/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/jackomo007/Flutter-BMI/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/jackomo007/Flutter-BMI/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/jackomo007/Flutter-BMI/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/jackomo007/Flutter-BMI/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/jackomo007/Flutter-BMI/merges",
        archive_url:
          "https://api.github.com/repos/jackomo007/Flutter-BMI/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/jackomo007/Flutter-BMI/downloads",
        issues_url:
          "https://api.github.com/repos/jackomo007/Flutter-BMI/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/jackomo007/Flutter-BMI/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/jackomo007/Flutter-BMI/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/jackomo007/Flutter-BMI/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/jackomo007/Flutter-BMI/labels{/name}",
        releases_url:
          "https://api.github.com/repos/jackomo007/Flutter-BMI/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/jackomo007/Flutter-BMI/deployments",
        created_at: "2020-11-12T10:44:02Z",
        updated_at: "2020-12-02T12:36:49Z",
        pushed_at: "2020-11-14T03:45:32Z",
        git_url: "git://github.com/jackomo007/Flutter-BMI.git",
        ssh_url: "git@github.com:jackomo007/Flutter-BMI.git",
        clone_url: "https://github.com/jackomo007/Flutter-BMI.git",
        svn_url: "https://github.com/jackomo007/Flutter-BMI",
        homepage: "",
        size: 108,
        stargazers_count: 1,
        watchers_count: 1,
        language: "Dart",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "main",
      },
      {
        id: 314894202,
        node_id: "MDEwOlJlcG9zaXRvcnkzMTQ4OTQyMDI=",
        name: "Climapp",
        full_name: "jackomo007/Climapp",
        private: false,
        owner: {
          login: "jackomo007",
          id: 38612112,
          node_id: "MDQ6VXNlcjM4NjEyMTEy",
          avatar_url: "https://avatars.githubusercontent.com/u/38612112?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/jackomo007",
          html_url: "https://github.com/jackomo007",
          followers_url: "https://api.github.com/users/jackomo007/followers",
          following_url:
            "https://api.github.com/users/jackomo007/following{/other_user}",
          gists_url: "https://api.github.com/users/jackomo007/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/jackomo007/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/jackomo007/subscriptions",
          organizations_url: "https://api.github.com/users/jackomo007/orgs",
          repos_url: "https://api.github.com/users/jackomo007/repos",
          events_url:
            "https://api.github.com/users/jackomo007/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/jackomo007/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/jackomo007/Climapp",
        description:
          "A flutter app to know the weather in a city. Inspired by appbrewery course project.",
        fork: false,
        url: "https://api.github.com/repos/jackomo007/Climapp",
        forks_url: "https://api.github.com/repos/jackomo007/Climapp/forks",
        keys_url:
          "https://api.github.com/repos/jackomo007/Climapp/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/jackomo007/Climapp/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/jackomo007/Climapp/teams",
        hooks_url: "https://api.github.com/repos/jackomo007/Climapp/hooks",
        issue_events_url:
          "https://api.github.com/repos/jackomo007/Climapp/issues/events{/number}",
        events_url: "https://api.github.com/repos/jackomo007/Climapp/events",
        assignees_url:
          "https://api.github.com/repos/jackomo007/Climapp/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/jackomo007/Climapp/branches{/branch}",
        tags_url: "https://api.github.com/repos/jackomo007/Climapp/tags",
        blobs_url:
          "https://api.github.com/repos/jackomo007/Climapp/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/jackomo007/Climapp/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/jackomo007/Climapp/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/jackomo007/Climapp/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/jackomo007/Climapp/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/jackomo007/Climapp/languages",
        stargazers_url:
          "https://api.github.com/repos/jackomo007/Climapp/stargazers",
        contributors_url:
          "https://api.github.com/repos/jackomo007/Climapp/contributors",
        subscribers_url:
          "https://api.github.com/repos/jackomo007/Climapp/subscribers",
        subscription_url:
          "https://api.github.com/repos/jackomo007/Climapp/subscription",
        commits_url:
          "https://api.github.com/repos/jackomo007/Climapp/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/jackomo007/Climapp/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/jackomo007/Climapp/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/jackomo007/Climapp/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/jackomo007/Climapp/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/jackomo007/Climapp/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/jackomo007/Climapp/merges",
        archive_url:
          "https://api.github.com/repos/jackomo007/Climapp/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/jackomo007/Climapp/downloads",
        issues_url:
          "https://api.github.com/repos/jackomo007/Climapp/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/jackomo007/Climapp/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/jackomo007/Climapp/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/jackomo007/Climapp/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/jackomo007/Climapp/labels{/name}",
        releases_url:
          "https://api.github.com/repos/jackomo007/Climapp/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/jackomo007/Climapp/deployments",
        created_at: "2020-11-21T20:06:42Z",
        updated_at: "2020-12-02T12:36:47Z",
        pushed_at: "2020-11-21T20:19:00Z",
        git_url: "git://github.com/jackomo007/Climapp.git",
        ssh_url: "git@github.com:jackomo007/Climapp.git",
        clone_url: "https://github.com/jackomo007/Climapp.git",
        svn_url: "https://github.com/jackomo007/Climapp",
        homepage: "",
        size: 733,
        stargazers_count: 1,
        watchers_count: 1,
        language: "Dart",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "main",
      },
      {
        id: 316072956,
        node_id: "MDEwOlJlcG9zaXRvcnkzMTYwNzI5NTY=",
        name: "BadChoices",
        full_name: "jackomo007/BadChoices",
        private: false,
        owner: {
          login: "jackomo007",
          id: 38612112,
          node_id: "MDQ6VXNlcjM4NjEyMTEy",
          avatar_url: "https://avatars.githubusercontent.com/u/38612112?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/jackomo007",
          html_url: "https://github.com/jackomo007",
          followers_url: "https://api.github.com/users/jackomo007/followers",
          following_url:
            "https://api.github.com/users/jackomo007/following{/other_user}",
          gists_url: "https://api.github.com/users/jackomo007/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/jackomo007/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/jackomo007/subscriptions",
          organizations_url: "https://api.github.com/users/jackomo007/orgs",
          repos_url: "https://api.github.com/users/jackomo007/repos",
          events_url:
            "https://api.github.com/users/jackomo007/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/jackomo007/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/jackomo007/BadChoices",
        description: "Flutter game inspired by appbrewery course project.",
        fork: false,
        url: "https://api.github.com/repos/jackomo007/BadChoices",
        forks_url: "https://api.github.com/repos/jackomo007/BadChoices/forks",
        keys_url:
          "https://api.github.com/repos/jackomo007/BadChoices/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/jackomo007/BadChoices/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/jackomo007/BadChoices/teams",
        hooks_url: "https://api.github.com/repos/jackomo007/BadChoices/hooks",
        issue_events_url:
          "https://api.github.com/repos/jackomo007/BadChoices/issues/events{/number}",
        events_url: "https://api.github.com/repos/jackomo007/BadChoices/events",
        assignees_url:
          "https://api.github.com/repos/jackomo007/BadChoices/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/jackomo007/BadChoices/branches{/branch}",
        tags_url: "https://api.github.com/repos/jackomo007/BadChoices/tags",
        blobs_url:
          "https://api.github.com/repos/jackomo007/BadChoices/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/jackomo007/BadChoices/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/jackomo007/BadChoices/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/jackomo007/BadChoices/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/jackomo007/BadChoices/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/jackomo007/BadChoices/languages",
        stargazers_url:
          "https://api.github.com/repos/jackomo007/BadChoices/stargazers",
        contributors_url:
          "https://api.github.com/repos/jackomo007/BadChoices/contributors",
        subscribers_url:
          "https://api.github.com/repos/jackomo007/BadChoices/subscribers",
        subscription_url:
          "https://api.github.com/repos/jackomo007/BadChoices/subscription",
        commits_url:
          "https://api.github.com/repos/jackomo007/BadChoices/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/jackomo007/BadChoices/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/jackomo007/BadChoices/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/jackomo007/BadChoices/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/jackomo007/BadChoices/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/jackomo007/BadChoices/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/jackomo007/BadChoices/merges",
        archive_url:
          "https://api.github.com/repos/jackomo007/BadChoices/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/jackomo007/BadChoices/downloads",
        issues_url:
          "https://api.github.com/repos/jackomo007/BadChoices/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/jackomo007/BadChoices/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/jackomo007/BadChoices/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/jackomo007/BadChoices/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/jackomo007/BadChoices/labels{/name}",
        releases_url:
          "https://api.github.com/repos/jackomo007/BadChoices/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/jackomo007/BadChoices/deployments",
        created_at: "2020-11-25T23:06:01Z",
        updated_at: "2020-12-02T12:36:46Z",
        pushed_at: "2020-11-27T12:36:00Z",
        git_url: "git://github.com/jackomo007/BadChoices.git",
        ssh_url: "git@github.com:jackomo007/BadChoices.git",
        clone_url: "https://github.com/jackomo007/BadChoices.git",
        svn_url: "https://github.com/jackomo007/BadChoices",
        homepage: "",
        size: 4573,
        stargazers_count: 1,
        watchers_count: 1,
        language: "Dart",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "main",
      },
      {
        id: 316863893,
        node_id: "MDEwOlJlcG9zaXRvcnkzMTY4NjM4OTM=",
        name: "FlutChat",
        full_name: "jackomo007/FlutChat",
        private: false,
        owner: {
          login: "jackomo007",
          id: 38612112,
          node_id: "MDQ6VXNlcjM4NjEyMTEy",
          avatar_url: "https://avatars.githubusercontent.com/u/38612112?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/jackomo007",
          html_url: "https://github.com/jackomo007",
          followers_url: "https://api.github.com/users/jackomo007/followers",
          following_url:
            "https://api.github.com/users/jackomo007/following{/other_user}",
          gists_url: "https://api.github.com/users/jackomo007/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/jackomo007/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/jackomo007/subscriptions",
          organizations_url: "https://api.github.com/users/jackomo007/orgs",
          repos_url: "https://api.github.com/users/jackomo007/repos",
          events_url:
            "https://api.github.com/users/jackomo007/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/jackomo007/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/jackomo007/FlutChat",
        description:
          "Flutter Chat application inspired by the appbrewery course ",
        fork: false,
        url: "https://api.github.com/repos/jackomo007/FlutChat",
        forks_url: "https://api.github.com/repos/jackomo007/FlutChat/forks",
        keys_url:
          "https://api.github.com/repos/jackomo007/FlutChat/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/jackomo007/FlutChat/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/jackomo007/FlutChat/teams",
        hooks_url: "https://api.github.com/repos/jackomo007/FlutChat/hooks",
        issue_events_url:
          "https://api.github.com/repos/jackomo007/FlutChat/issues/events{/number}",
        events_url: "https://api.github.com/repos/jackomo007/FlutChat/events",
        assignees_url:
          "https://api.github.com/repos/jackomo007/FlutChat/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/jackomo007/FlutChat/branches{/branch}",
        tags_url: "https://api.github.com/repos/jackomo007/FlutChat/tags",
        blobs_url:
          "https://api.github.com/repos/jackomo007/FlutChat/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/jackomo007/FlutChat/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/jackomo007/FlutChat/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/jackomo007/FlutChat/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/jackomo007/FlutChat/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/jackomo007/FlutChat/languages",
        stargazers_url:
          "https://api.github.com/repos/jackomo007/FlutChat/stargazers",
        contributors_url:
          "https://api.github.com/repos/jackomo007/FlutChat/contributors",
        subscribers_url:
          "https://api.github.com/repos/jackomo007/FlutChat/subscribers",
        subscription_url:
          "https://api.github.com/repos/jackomo007/FlutChat/subscription",
        commits_url:
          "https://api.github.com/repos/jackomo007/FlutChat/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/jackomo007/FlutChat/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/jackomo007/FlutChat/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/jackomo007/FlutChat/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/jackomo007/FlutChat/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/jackomo007/FlutChat/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/jackomo007/FlutChat/merges",
        archive_url:
          "https://api.github.com/repos/jackomo007/FlutChat/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/jackomo007/FlutChat/downloads",
        issues_url:
          "https://api.github.com/repos/jackomo007/FlutChat/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/jackomo007/FlutChat/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/jackomo007/FlutChat/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/jackomo007/FlutChat/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/jackomo007/FlutChat/labels{/name}",
        releases_url:
          "https://api.github.com/repos/jackomo007/FlutChat/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/jackomo007/FlutChat/deployments",
        created_at: "2020-11-29T02:53:08Z",
        updated_at: "2020-12-02T12:36:45Z",
        pushed_at: "2020-11-29T14:41:34Z",
        git_url: "git://github.com/jackomo007/FlutChat.git",
        ssh_url: "git@github.com:jackomo007/FlutChat.git",
        clone_url: "https://github.com/jackomo007/FlutChat.git",
        svn_url: "https://github.com/jackomo007/FlutChat",
        homepage: null,
        size: 1712,
        stargazers_count: 1,
        watchers_count: 1,
        language: "Dart",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "main",
      },
      {
        id: 317012160,
        node_id: "MDEwOlJlcG9zaXRvcnkzMTcwMTIxNjA=",
        name: "ToDoWithFlutter",
        full_name: "jackomo007/ToDoWithFlutter",
        private: false,
        owner: {
          login: "jackomo007",
          id: 38612112,
          node_id: "MDQ6VXNlcjM4NjEyMTEy",
          avatar_url: "https://avatars.githubusercontent.com/u/38612112?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/jackomo007",
          html_url: "https://github.com/jackomo007",
          followers_url: "https://api.github.com/users/jackomo007/followers",
          following_url:
            "https://api.github.com/users/jackomo007/following{/other_user}",
          gists_url: "https://api.github.com/users/jackomo007/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/jackomo007/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/jackomo007/subscriptions",
          organizations_url: "https://api.github.com/users/jackomo007/orgs",
          repos_url: "https://api.github.com/users/jackomo007/repos",
          events_url:
            "https://api.github.com/users/jackomo007/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/jackomo007/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/jackomo007/ToDoWithFlutter",
        description: "Flutter application ToDo ",
        fork: false,
        url: "https://api.github.com/repos/jackomo007/ToDoWithFlutter",
        forks_url:
          "https://api.github.com/repos/jackomo007/ToDoWithFlutter/forks",
        keys_url:
          "https://api.github.com/repos/jackomo007/ToDoWithFlutter/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/jackomo007/ToDoWithFlutter/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/jackomo007/ToDoWithFlutter/teams",
        hooks_url:
          "https://api.github.com/repos/jackomo007/ToDoWithFlutter/hooks",
        issue_events_url:
          "https://api.github.com/repos/jackomo007/ToDoWithFlutter/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/jackomo007/ToDoWithFlutter/events",
        assignees_url:
          "https://api.github.com/repos/jackomo007/ToDoWithFlutter/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/jackomo007/ToDoWithFlutter/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/jackomo007/ToDoWithFlutter/tags",
        blobs_url:
          "https://api.github.com/repos/jackomo007/ToDoWithFlutter/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/jackomo007/ToDoWithFlutter/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/jackomo007/ToDoWithFlutter/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/jackomo007/ToDoWithFlutter/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/jackomo007/ToDoWithFlutter/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/jackomo007/ToDoWithFlutter/languages",
        stargazers_url:
          "https://api.github.com/repos/jackomo007/ToDoWithFlutter/stargazers",
        contributors_url:
          "https://api.github.com/repos/jackomo007/ToDoWithFlutter/contributors",
        subscribers_url:
          "https://api.github.com/repos/jackomo007/ToDoWithFlutter/subscribers",
        subscription_url:
          "https://api.github.com/repos/jackomo007/ToDoWithFlutter/subscription",
        commits_url:
          "https://api.github.com/repos/jackomo007/ToDoWithFlutter/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/jackomo007/ToDoWithFlutter/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/jackomo007/ToDoWithFlutter/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/jackomo007/ToDoWithFlutter/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/jackomo007/ToDoWithFlutter/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/jackomo007/ToDoWithFlutter/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/jackomo007/ToDoWithFlutter/merges",
        archive_url:
          "https://api.github.com/repos/jackomo007/ToDoWithFlutter/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/jackomo007/ToDoWithFlutter/downloads",
        issues_url:
          "https://api.github.com/repos/jackomo007/ToDoWithFlutter/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/jackomo007/ToDoWithFlutter/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/jackomo007/ToDoWithFlutter/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/jackomo007/ToDoWithFlutter/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/jackomo007/ToDoWithFlutter/labels{/name}",
        releases_url:
          "https://api.github.com/repos/jackomo007/ToDoWithFlutter/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/jackomo007/ToDoWithFlutter/deployments",
        created_at: "2020-11-29T18:05:46Z",
        updated_at: "2020-12-02T12:36:43Z",
        pushed_at: "2020-11-29T18:17:07Z",
        git_url: "git://github.com/jackomo007/ToDoWithFlutter.git",
        ssh_url: "git@github.com:jackomo007/ToDoWithFlutter.git",
        clone_url: "https://github.com/jackomo007/ToDoWithFlutter.git",
        svn_url: "https://github.com/jackomo007/ToDoWithFlutter",
        homepage: null,
        size: 438,
        stargazers_count: 1,
        watchers_count: 1,
        language: "Dart",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "main",
      },
      {
        id: 317719466,
        node_id: "MDEwOlJlcG9zaXRvcnkzMTc3MTk0NjY=",
        name: "iAmDev",
        full_name: "jackomo007/iAmDev",
        private: false,
        owner: {
          login: "jackomo007",
          id: 38612112,
          node_id: "MDQ6VXNlcjM4NjEyMTEy",
          avatar_url: "https://avatars.githubusercontent.com/u/38612112?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/jackomo007",
          html_url: "https://github.com/jackomo007",
          followers_url: "https://api.github.com/users/jackomo007/followers",
          following_url:
            "https://api.github.com/users/jackomo007/following{/other_user}",
          gists_url: "https://api.github.com/users/jackomo007/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/jackomo007/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/jackomo007/subscriptions",
          organizations_url: "https://api.github.com/users/jackomo007/orgs",
          repos_url: "https://api.github.com/users/jackomo007/repos",
          events_url:
            "https://api.github.com/users/jackomo007/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/jackomo007/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/jackomo007/iAmDev",
        description: "Flutter application inspired by the appbrewery course",
        fork: false,
        url: "https://api.github.com/repos/jackomo007/iAmDev",
        forks_url: "https://api.github.com/repos/jackomo007/iAmDev/forks",
        keys_url:
          "https://api.github.com/repos/jackomo007/iAmDev/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/jackomo007/iAmDev/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/jackomo007/iAmDev/teams",
        hooks_url: "https://api.github.com/repos/jackomo007/iAmDev/hooks",
        issue_events_url:
          "https://api.github.com/repos/jackomo007/iAmDev/issues/events{/number}",
        events_url: "https://api.github.com/repos/jackomo007/iAmDev/events",
        assignees_url:
          "https://api.github.com/repos/jackomo007/iAmDev/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/jackomo007/iAmDev/branches{/branch}",
        tags_url: "https://api.github.com/repos/jackomo007/iAmDev/tags",
        blobs_url:
          "https://api.github.com/repos/jackomo007/iAmDev/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/jackomo007/iAmDev/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/jackomo007/iAmDev/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/jackomo007/iAmDev/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/jackomo007/iAmDev/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/jackomo007/iAmDev/languages",
        stargazers_url:
          "https://api.github.com/repos/jackomo007/iAmDev/stargazers",
        contributors_url:
          "https://api.github.com/repos/jackomo007/iAmDev/contributors",
        subscribers_url:
          "https://api.github.com/repos/jackomo007/iAmDev/subscribers",
        subscription_url:
          "https://api.github.com/repos/jackomo007/iAmDev/subscription",
        commits_url:
          "https://api.github.com/repos/jackomo007/iAmDev/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/jackomo007/iAmDev/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/jackomo007/iAmDev/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/jackomo007/iAmDev/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/jackomo007/iAmDev/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/jackomo007/iAmDev/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/jackomo007/iAmDev/merges",
        archive_url:
          "https://api.github.com/repos/jackomo007/iAmDev/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/jackomo007/iAmDev/downloads",
        issues_url:
          "https://api.github.com/repos/jackomo007/iAmDev/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/jackomo007/iAmDev/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/jackomo007/iAmDev/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/jackomo007/iAmDev/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/jackomo007/iAmDev/labels{/name}",
        releases_url:
          "https://api.github.com/repos/jackomo007/iAmDev/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/jackomo007/iAmDev/deployments",
        created_at: "2020-12-02T01:52:16Z",
        updated_at: "2020-12-02T12:36:42Z",
        pushed_at: "2020-12-02T01:57:58Z",
        git_url: "git://github.com/jackomo007/iAmDev.git",
        ssh_url: "git@github.com:jackomo007/iAmDev.git",
        clone_url: "https://github.com/jackomo007/iAmDev.git",
        svn_url: "https://github.com/jackomo007/iAmDev",
        homepage: null,
        size: 1164,
        stargazers_count: 1,
        watchers_count: 1,
        language: "Dart",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "main",
      },
      {
        id: 158300011,
        node_id: "MDEwOlJlcG9zaXRvcnkxNTgzMDAwMTE=",
        name: "APIREST-LARAVEL-5.5",
        full_name: "jackomo007/APIREST-LARAVEL-5.5",
        private: false,
        owner: {
          login: "jackomo007",
          id: 38612112,
          node_id: "MDQ6VXNlcjM4NjEyMTEy",
          avatar_url: "https://avatars.githubusercontent.com/u/38612112?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/jackomo007",
          html_url: "https://github.com/jackomo007",
          followers_url: "https://api.github.com/users/jackomo007/followers",
          following_url:
            "https://api.github.com/users/jackomo007/following{/other_user}",
          gists_url: "https://api.github.com/users/jackomo007/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/jackomo007/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/jackomo007/subscriptions",
          organizations_url: "https://api.github.com/users/jackomo007/orgs",
          repos_url: "https://api.github.com/users/jackomo007/repos",
          events_url:
            "https://api.github.com/users/jackomo007/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/jackomo007/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/jackomo007/APIREST-LARAVEL-5.5",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/jackomo007/APIREST-LARAVEL-5.5",
        forks_url:
          "https://api.github.com/repos/jackomo007/APIREST-LARAVEL-5.5/forks",
        keys_url:
          "https://api.github.com/repos/jackomo007/APIREST-LARAVEL-5.5/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/jackomo007/APIREST-LARAVEL-5.5/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/jackomo007/APIREST-LARAVEL-5.5/teams",
        hooks_url:
          "https://api.github.com/repos/jackomo007/APIREST-LARAVEL-5.5/hooks",
        issue_events_url:
          "https://api.github.com/repos/jackomo007/APIREST-LARAVEL-5.5/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/jackomo007/APIREST-LARAVEL-5.5/events",
        assignees_url:
          "https://api.github.com/repos/jackomo007/APIREST-LARAVEL-5.5/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/jackomo007/APIREST-LARAVEL-5.5/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/jackomo007/APIREST-LARAVEL-5.5/tags",
        blobs_url:
          "https://api.github.com/repos/jackomo007/APIREST-LARAVEL-5.5/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/jackomo007/APIREST-LARAVEL-5.5/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/jackomo007/APIREST-LARAVEL-5.5/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/jackomo007/APIREST-LARAVEL-5.5/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/jackomo007/APIREST-LARAVEL-5.5/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/jackomo007/APIREST-LARAVEL-5.5/languages",
        stargazers_url:
          "https://api.github.com/repos/jackomo007/APIREST-LARAVEL-5.5/stargazers",
        contributors_url:
          "https://api.github.com/repos/jackomo007/APIREST-LARAVEL-5.5/contributors",
        subscribers_url:
          "https://api.github.com/repos/jackomo007/APIREST-LARAVEL-5.5/subscribers",
        subscription_url:
          "https://api.github.com/repos/jackomo007/APIREST-LARAVEL-5.5/subscription",
        commits_url:
          "https://api.github.com/repos/jackomo007/APIREST-LARAVEL-5.5/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/jackomo007/APIREST-LARAVEL-5.5/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/jackomo007/APIREST-LARAVEL-5.5/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/jackomo007/APIREST-LARAVEL-5.5/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/jackomo007/APIREST-LARAVEL-5.5/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/jackomo007/APIREST-LARAVEL-5.5/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/jackomo007/APIREST-LARAVEL-5.5/merges",
        archive_url:
          "https://api.github.com/repos/jackomo007/APIREST-LARAVEL-5.5/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/jackomo007/APIREST-LARAVEL-5.5/downloads",
        issues_url:
          "https://api.github.com/repos/jackomo007/APIREST-LARAVEL-5.5/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/jackomo007/APIREST-LARAVEL-5.5/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/jackomo007/APIREST-LARAVEL-5.5/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/jackomo007/APIREST-LARAVEL-5.5/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/jackomo007/APIREST-LARAVEL-5.5/labels{/name}",
        releases_url:
          "https://api.github.com/repos/jackomo007/APIREST-LARAVEL-5.5/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/jackomo007/APIREST-LARAVEL-5.5/deployments",
        created_at: "2018-11-19T22:47:54Z",
        updated_at: "2020-07-07T17:20:08Z",
        pushed_at: "2018-11-28T09:36:28Z",
        git_url: "git://github.com/jackomo007/APIREST-LARAVEL-5.5.git",
        ssh_url: "git@github.com:jackomo007/APIREST-LARAVEL-5.5.git",
        clone_url: "https://github.com/jackomo007/APIREST-LARAVEL-5.5.git",
        svn_url: "https://github.com/jackomo007/APIREST-LARAVEL-5.5",
        homepage: null,
        size: 211,
        stargazers_count: 1,
        watchers_count: 1,
        language: "PHP",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "master",
      },
      {
        id: 159478186,
        node_id: "MDEwOlJlcG9zaXRvcnkxNTk0NzgxODY=",
        name: "Laravel-5.7-Guzzle-HTTPRequest-Telescope",
        full_name: "jackomo007/Laravel-5.7-Guzzle-HTTPRequest-Telescope",
        private: false,
        owner: {
          login: "jackomo007",
          id: 38612112,
          node_id: "MDQ6VXNlcjM4NjEyMTEy",
          avatar_url: "https://avatars.githubusercontent.com/u/38612112?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/jackomo007",
          html_url: "https://github.com/jackomo007",
          followers_url: "https://api.github.com/users/jackomo007/followers",
          following_url:
            "https://api.github.com/users/jackomo007/following{/other_user}",
          gists_url: "https://api.github.com/users/jackomo007/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/jackomo007/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/jackomo007/subscriptions",
          organizations_url: "https://api.github.com/users/jackomo007/orgs",
          repos_url: "https://api.github.com/users/jackomo007/repos",
          events_url:
            "https://api.github.com/users/jackomo007/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/jackomo007/received_events",
          type: "User",
          site_admin: false,
        },
        html_url:
          "https://github.com/jackomo007/Laravel-5.7-Guzzle-HTTPRequest-Telescope",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/jackomo007/Laravel-5.7-Guzzle-HTTPRequest-Telescope",
        forks_url:
          "https://api.github.com/repos/jackomo007/Laravel-5.7-Guzzle-HTTPRequest-Telescope/forks",
        keys_url:
          "https://api.github.com/repos/jackomo007/Laravel-5.7-Guzzle-HTTPRequest-Telescope/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/jackomo007/Laravel-5.7-Guzzle-HTTPRequest-Telescope/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/jackomo007/Laravel-5.7-Guzzle-HTTPRequest-Telescope/teams",
        hooks_url:
          "https://api.github.com/repos/jackomo007/Laravel-5.7-Guzzle-HTTPRequest-Telescope/hooks",
        issue_events_url:
          "https://api.github.com/repos/jackomo007/Laravel-5.7-Guzzle-HTTPRequest-Telescope/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/jackomo007/Laravel-5.7-Guzzle-HTTPRequest-Telescope/events",
        assignees_url:
          "https://api.github.com/repos/jackomo007/Laravel-5.7-Guzzle-HTTPRequest-Telescope/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/jackomo007/Laravel-5.7-Guzzle-HTTPRequest-Telescope/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/jackomo007/Laravel-5.7-Guzzle-HTTPRequest-Telescope/tags",
        blobs_url:
          "https://api.github.com/repos/jackomo007/Laravel-5.7-Guzzle-HTTPRequest-Telescope/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/jackomo007/Laravel-5.7-Guzzle-HTTPRequest-Telescope/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/jackomo007/Laravel-5.7-Guzzle-HTTPRequest-Telescope/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/jackomo007/Laravel-5.7-Guzzle-HTTPRequest-Telescope/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/jackomo007/Laravel-5.7-Guzzle-HTTPRequest-Telescope/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/jackomo007/Laravel-5.7-Guzzle-HTTPRequest-Telescope/languages",
        stargazers_url:
          "https://api.github.com/repos/jackomo007/Laravel-5.7-Guzzle-HTTPRequest-Telescope/stargazers",
        contributors_url:
          "https://api.github.com/repos/jackomo007/Laravel-5.7-Guzzle-HTTPRequest-Telescope/contributors",
        subscribers_url:
          "https://api.github.com/repos/jackomo007/Laravel-5.7-Guzzle-HTTPRequest-Telescope/subscribers",
        subscription_url:
          "https://api.github.com/repos/jackomo007/Laravel-5.7-Guzzle-HTTPRequest-Telescope/subscription",
        commits_url:
          "https://api.github.com/repos/jackomo007/Laravel-5.7-Guzzle-HTTPRequest-Telescope/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/jackomo007/Laravel-5.7-Guzzle-HTTPRequest-Telescope/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/jackomo007/Laravel-5.7-Guzzle-HTTPRequest-Telescope/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/jackomo007/Laravel-5.7-Guzzle-HTTPRequest-Telescope/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/jackomo007/Laravel-5.7-Guzzle-HTTPRequest-Telescope/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/jackomo007/Laravel-5.7-Guzzle-HTTPRequest-Telescope/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/jackomo007/Laravel-5.7-Guzzle-HTTPRequest-Telescope/merges",
        archive_url:
          "https://api.github.com/repos/jackomo007/Laravel-5.7-Guzzle-HTTPRequest-Telescope/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/jackomo007/Laravel-5.7-Guzzle-HTTPRequest-Telescope/downloads",
        issues_url:
          "https://api.github.com/repos/jackomo007/Laravel-5.7-Guzzle-HTTPRequest-Telescope/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/jackomo007/Laravel-5.7-Guzzle-HTTPRequest-Telescope/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/jackomo007/Laravel-5.7-Guzzle-HTTPRequest-Telescope/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/jackomo007/Laravel-5.7-Guzzle-HTTPRequest-Telescope/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/jackomo007/Laravel-5.7-Guzzle-HTTPRequest-Telescope/labels{/name}",
        releases_url:
          "https://api.github.com/repos/jackomo007/Laravel-5.7-Guzzle-HTTPRequest-Telescope/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/jackomo007/Laravel-5.7-Guzzle-HTTPRequest-Telescope/deployments",
        created_at: "2018-11-28T09:40:02Z",
        updated_at: "2020-07-07T17:20:07Z",
        pushed_at: "2018-11-28T14:10:23Z",
        git_url:
          "git://github.com/jackomo007/Laravel-5.7-Guzzle-HTTPRequest-Telescope.git",
        ssh_url:
          "git@github.com:jackomo007/Laravel-5.7-Guzzle-HTTPRequest-Telescope.git",
        clone_url:
          "https://github.com/jackomo007/Laravel-5.7-Guzzle-HTTPRequest-Telescope.git",
        svn_url:
          "https://github.com/jackomo007/Laravel-5.7-Guzzle-HTTPRequest-Telescope",
        homepage: null,
        size: 694,
        stargazers_count: 1,
        watchers_count: 1,
        language: "PHP",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "master",
      },
      {
        id: 160511667,
        node_id: "MDEwOlJlcG9zaXRvcnkxNjA1MTE2Njc=",
        name: "Laravel-APIREST-GoogleMap",
        full_name: "jackomo007/Laravel-APIREST-GoogleMap",
        private: false,
        owner: {
          login: "jackomo007",
          id: 38612112,
          node_id: "MDQ6VXNlcjM4NjEyMTEy",
          avatar_url: "https://avatars.githubusercontent.com/u/38612112?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/jackomo007",
          html_url: "https://github.com/jackomo007",
          followers_url: "https://api.github.com/users/jackomo007/followers",
          following_url:
            "https://api.github.com/users/jackomo007/following{/other_user}",
          gists_url: "https://api.github.com/users/jackomo007/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/jackomo007/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/jackomo007/subscriptions",
          organizations_url: "https://api.github.com/users/jackomo007/orgs",
          repos_url: "https://api.github.com/users/jackomo007/repos",
          events_url:
            "https://api.github.com/users/jackomo007/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/jackomo007/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/jackomo007/Laravel-APIREST-GoogleMap",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/jackomo007/Laravel-APIREST-GoogleMap",
        forks_url:
          "https://api.github.com/repos/jackomo007/Laravel-APIREST-GoogleMap/forks",
        keys_url:
          "https://api.github.com/repos/jackomo007/Laravel-APIREST-GoogleMap/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/jackomo007/Laravel-APIREST-GoogleMap/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/jackomo007/Laravel-APIREST-GoogleMap/teams",
        hooks_url:
          "https://api.github.com/repos/jackomo007/Laravel-APIREST-GoogleMap/hooks",
        issue_events_url:
          "https://api.github.com/repos/jackomo007/Laravel-APIREST-GoogleMap/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/jackomo007/Laravel-APIREST-GoogleMap/events",
        assignees_url:
          "https://api.github.com/repos/jackomo007/Laravel-APIREST-GoogleMap/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/jackomo007/Laravel-APIREST-GoogleMap/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/jackomo007/Laravel-APIREST-GoogleMap/tags",
        blobs_url:
          "https://api.github.com/repos/jackomo007/Laravel-APIREST-GoogleMap/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/jackomo007/Laravel-APIREST-GoogleMap/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/jackomo007/Laravel-APIREST-GoogleMap/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/jackomo007/Laravel-APIREST-GoogleMap/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/jackomo007/Laravel-APIREST-GoogleMap/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/jackomo007/Laravel-APIREST-GoogleMap/languages",
        stargazers_url:
          "https://api.github.com/repos/jackomo007/Laravel-APIREST-GoogleMap/stargazers",
        contributors_url:
          "https://api.github.com/repos/jackomo007/Laravel-APIREST-GoogleMap/contributors",
        subscribers_url:
          "https://api.github.com/repos/jackomo007/Laravel-APIREST-GoogleMap/subscribers",
        subscription_url:
          "https://api.github.com/repos/jackomo007/Laravel-APIREST-GoogleMap/subscription",
        commits_url:
          "https://api.github.com/repos/jackomo007/Laravel-APIREST-GoogleMap/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/jackomo007/Laravel-APIREST-GoogleMap/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/jackomo007/Laravel-APIREST-GoogleMap/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/jackomo007/Laravel-APIREST-GoogleMap/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/jackomo007/Laravel-APIREST-GoogleMap/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/jackomo007/Laravel-APIREST-GoogleMap/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/jackomo007/Laravel-APIREST-GoogleMap/merges",
        archive_url:
          "https://api.github.com/repos/jackomo007/Laravel-APIREST-GoogleMap/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/jackomo007/Laravel-APIREST-GoogleMap/downloads",
        issues_url:
          "https://api.github.com/repos/jackomo007/Laravel-APIREST-GoogleMap/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/jackomo007/Laravel-APIREST-GoogleMap/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/jackomo007/Laravel-APIREST-GoogleMap/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/jackomo007/Laravel-APIREST-GoogleMap/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/jackomo007/Laravel-APIREST-GoogleMap/labels{/name}",
        releases_url:
          "https://api.github.com/repos/jackomo007/Laravel-APIREST-GoogleMap/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/jackomo007/Laravel-APIREST-GoogleMap/deployments",
        created_at: "2018-12-05T11:59:15Z",
        updated_at: "2020-07-07T17:20:05Z",
        pushed_at: "2018-12-06T13:25:09Z",
        git_url: "git://github.com/jackomo007/Laravel-APIREST-GoogleMap.git",
        ssh_url: "git@github.com:jackomo007/Laravel-APIREST-GoogleMap.git",
        clone_url:
          "https://github.com/jackomo007/Laravel-APIREST-GoogleMap.git",
        svn_url: "https://github.com/jackomo007/Laravel-APIREST-GoogleMap",
        homepage: null,
        size: 256,
        stargazers_count: 1,
        watchers_count: 1,
        language: "PHP",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "master",
      },
      {
        id: 179845388,
        node_id: "MDEwOlJlcG9zaXRvcnkxNzk4NDUzODg=",
        name: "FoliumMaps",
        full_name: "jackomo007/FoliumMaps",
        private: false,
        owner: {
          login: "jackomo007",
          id: 38612112,
          node_id: "MDQ6VXNlcjM4NjEyMTEy",
          avatar_url: "https://avatars.githubusercontent.com/u/38612112?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/jackomo007",
          html_url: "https://github.com/jackomo007",
          followers_url: "https://api.github.com/users/jackomo007/followers",
          following_url:
            "https://api.github.com/users/jackomo007/following{/other_user}",
          gists_url: "https://api.github.com/users/jackomo007/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/jackomo007/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/jackomo007/subscriptions",
          organizations_url: "https://api.github.com/users/jackomo007/orgs",
          repos_url: "https://api.github.com/users/jackomo007/repos",
          events_url:
            "https://api.github.com/users/jackomo007/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/jackomo007/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/jackomo007/FoliumMaps",
        description: "Create Maps with Folium and Pandas",
        fork: false,
        url: "https://api.github.com/repos/jackomo007/FoliumMaps",
        forks_url: "https://api.github.com/repos/jackomo007/FoliumMaps/forks",
        keys_url:
          "https://api.github.com/repos/jackomo007/FoliumMaps/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/jackomo007/FoliumMaps/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/jackomo007/FoliumMaps/teams",
        hooks_url: "https://api.github.com/repos/jackomo007/FoliumMaps/hooks",
        issue_events_url:
          "https://api.github.com/repos/jackomo007/FoliumMaps/issues/events{/number}",
        events_url: "https://api.github.com/repos/jackomo007/FoliumMaps/events",
        assignees_url:
          "https://api.github.com/repos/jackomo007/FoliumMaps/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/jackomo007/FoliumMaps/branches{/branch}",
        tags_url: "https://api.github.com/repos/jackomo007/FoliumMaps/tags",
        blobs_url:
          "https://api.github.com/repos/jackomo007/FoliumMaps/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/jackomo007/FoliumMaps/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/jackomo007/FoliumMaps/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/jackomo007/FoliumMaps/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/jackomo007/FoliumMaps/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/jackomo007/FoliumMaps/languages",
        stargazers_url:
          "https://api.github.com/repos/jackomo007/FoliumMaps/stargazers",
        contributors_url:
          "https://api.github.com/repos/jackomo007/FoliumMaps/contributors",
        subscribers_url:
          "https://api.github.com/repos/jackomo007/FoliumMaps/subscribers",
        subscription_url:
          "https://api.github.com/repos/jackomo007/FoliumMaps/subscription",
        commits_url:
          "https://api.github.com/repos/jackomo007/FoliumMaps/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/jackomo007/FoliumMaps/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/jackomo007/FoliumMaps/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/jackomo007/FoliumMaps/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/jackomo007/FoliumMaps/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/jackomo007/FoliumMaps/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/jackomo007/FoliumMaps/merges",
        archive_url:
          "https://api.github.com/repos/jackomo007/FoliumMaps/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/jackomo007/FoliumMaps/downloads",
        issues_url:
          "https://api.github.com/repos/jackomo007/FoliumMaps/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/jackomo007/FoliumMaps/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/jackomo007/FoliumMaps/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/jackomo007/FoliumMaps/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/jackomo007/FoliumMaps/labels{/name}",
        releases_url:
          "https://api.github.com/repos/jackomo007/FoliumMaps/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/jackomo007/FoliumMaps/deployments",
        created_at: "2019-04-06T14:44:35Z",
        updated_at: "2020-07-07T17:20:04Z",
        pushed_at: "2019-04-06T15:08:47Z",
        git_url: "git://github.com/jackomo007/FoliumMaps.git",
        ssh_url: "git@github.com:jackomo007/FoliumMaps.git",
        clone_url: "https://github.com/jackomo007/FoliumMaps.git",
        svn_url: "https://github.com/jackomo007/FoliumMaps",
        homepage: null,
        size: 1481,
        stargazers_count: 1,
        watchers_count: 1,
        language: "HTML",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: true,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "master",
      },
      {
        id: 180033725,
        node_id: "MDEwOlJlcG9zaXRvcnkxODAwMzM3MjU=",
        name: "BlockeneitorWeb",
        full_name: "jackomo007/BlockeneitorWeb",
        private: false,
        owner: {
          login: "jackomo007",
          id: 38612112,
          node_id: "MDQ6VXNlcjM4NjEyMTEy",
          avatar_url: "https://avatars.githubusercontent.com/u/38612112?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/jackomo007",
          html_url: "https://github.com/jackomo007",
          followers_url: "https://api.github.com/users/jackomo007/followers",
          following_url:
            "https://api.github.com/users/jackomo007/following{/other_user}",
          gists_url: "https://api.github.com/users/jackomo007/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/jackomo007/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/jackomo007/subscriptions",
          organizations_url: "https://api.github.com/users/jackomo007/orgs",
          repos_url: "https://api.github.com/users/jackomo007/repos",
          events_url:
            "https://api.github.com/users/jackomo007/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/jackomo007/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/jackomo007/BlockeneitorWeb",
        description:
          "Sctipt to block especific sites to determinated interval time",
        fork: false,
        url: "https://api.github.com/repos/jackomo007/BlockeneitorWeb",
        forks_url:
          "https://api.github.com/repos/jackomo007/BlockeneitorWeb/forks",
        keys_url:
          "https://api.github.com/repos/jackomo007/BlockeneitorWeb/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/jackomo007/BlockeneitorWeb/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/jackomo007/BlockeneitorWeb/teams",
        hooks_url:
          "https://api.github.com/repos/jackomo007/BlockeneitorWeb/hooks",
        issue_events_url:
          "https://api.github.com/repos/jackomo007/BlockeneitorWeb/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/jackomo007/BlockeneitorWeb/events",
        assignees_url:
          "https://api.github.com/repos/jackomo007/BlockeneitorWeb/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/jackomo007/BlockeneitorWeb/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/jackomo007/BlockeneitorWeb/tags",
        blobs_url:
          "https://api.github.com/repos/jackomo007/BlockeneitorWeb/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/jackomo007/BlockeneitorWeb/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/jackomo007/BlockeneitorWeb/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/jackomo007/BlockeneitorWeb/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/jackomo007/BlockeneitorWeb/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/jackomo007/BlockeneitorWeb/languages",
        stargazers_url:
          "https://api.github.com/repos/jackomo007/BlockeneitorWeb/stargazers",
        contributors_url:
          "https://api.github.com/repos/jackomo007/BlockeneitorWeb/contributors",
        subscribers_url:
          "https://api.github.com/repos/jackomo007/BlockeneitorWeb/subscribers",
        subscription_url:
          "https://api.github.com/repos/jackomo007/BlockeneitorWeb/subscription",
        commits_url:
          "https://api.github.com/repos/jackomo007/BlockeneitorWeb/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/jackomo007/BlockeneitorWeb/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/jackomo007/BlockeneitorWeb/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/jackomo007/BlockeneitorWeb/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/jackomo007/BlockeneitorWeb/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/jackomo007/BlockeneitorWeb/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/jackomo007/BlockeneitorWeb/merges",
        archive_url:
          "https://api.github.com/repos/jackomo007/BlockeneitorWeb/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/jackomo007/BlockeneitorWeb/downloads",
        issues_url:
          "https://api.github.com/repos/jackomo007/BlockeneitorWeb/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/jackomo007/BlockeneitorWeb/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/jackomo007/BlockeneitorWeb/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/jackomo007/BlockeneitorWeb/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/jackomo007/BlockeneitorWeb/labels{/name}",
        releases_url:
          "https://api.github.com/repos/jackomo007/BlockeneitorWeb/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/jackomo007/BlockeneitorWeb/deployments",
        created_at: "2019-04-07T22:57:47Z",
        updated_at: "2020-07-07T17:20:02Z",
        pushed_at: "2019-04-07T23:24:42Z",
        git_url: "git://github.com/jackomo007/BlockeneitorWeb.git",
        ssh_url: "git@github.com:jackomo007/BlockeneitorWeb.git",
        clone_url: "https://github.com/jackomo007/BlockeneitorWeb.git",
        svn_url: "https://github.com/jackomo007/BlockeneitorWeb",
        homepage: null,
        size: 1,
        stargazers_count: 1,
        watchers_count: 1,
        language: "Python",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "master",
      },
      {
        id: 199228660,
        node_id: "MDEwOlJlcG9zaXRvcnkxOTkyMjg2NjA=",
        name: "Reactive",
        full_name: "jackomo007/Reactive",
        private: false,
        owner: {
          login: "jackomo007",
          id: 38612112,
          node_id: "MDQ6VXNlcjM4NjEyMTEy",
          avatar_url: "https://avatars.githubusercontent.com/u/38612112?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/jackomo007",
          html_url: "https://github.com/jackomo007",
          followers_url: "https://api.github.com/users/jackomo007/followers",
          following_url:
            "https://api.github.com/users/jackomo007/following{/other_user}",
          gists_url: "https://api.github.com/users/jackomo007/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/jackomo007/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/jackomo007/subscriptions",
          organizations_url: "https://api.github.com/users/jackomo007/orgs",
          repos_url: "https://api.github.com/users/jackomo007/repos",
          events_url:
            "https://api.github.com/users/jackomo007/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/jackomo007/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/jackomo007/Reactive",
        description: "Lista Reactiva de Tarefas",
        fork: false,
        url: "https://api.github.com/repos/jackomo007/Reactive",
        forks_url: "https://api.github.com/repos/jackomo007/Reactive/forks",
        keys_url:
          "https://api.github.com/repos/jackomo007/Reactive/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/jackomo007/Reactive/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/jackomo007/Reactive/teams",
        hooks_url: "https://api.github.com/repos/jackomo007/Reactive/hooks",
        issue_events_url:
          "https://api.github.com/repos/jackomo007/Reactive/issues/events{/number}",
        events_url: "https://api.github.com/repos/jackomo007/Reactive/events",
        assignees_url:
          "https://api.github.com/repos/jackomo007/Reactive/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/jackomo007/Reactive/branches{/branch}",
        tags_url: "https://api.github.com/repos/jackomo007/Reactive/tags",
        blobs_url:
          "https://api.github.com/repos/jackomo007/Reactive/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/jackomo007/Reactive/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/jackomo007/Reactive/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/jackomo007/Reactive/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/jackomo007/Reactive/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/jackomo007/Reactive/languages",
        stargazers_url:
          "https://api.github.com/repos/jackomo007/Reactive/stargazers",
        contributors_url:
          "https://api.github.com/repos/jackomo007/Reactive/contributors",
        subscribers_url:
          "https://api.github.com/repos/jackomo007/Reactive/subscribers",
        subscription_url:
          "https://api.github.com/repos/jackomo007/Reactive/subscription",
        commits_url:
          "https://api.github.com/repos/jackomo007/Reactive/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/jackomo007/Reactive/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/jackomo007/Reactive/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/jackomo007/Reactive/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/jackomo007/Reactive/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/jackomo007/Reactive/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/jackomo007/Reactive/merges",
        archive_url:
          "https://api.github.com/repos/jackomo007/Reactive/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/jackomo007/Reactive/downloads",
        issues_url:
          "https://api.github.com/repos/jackomo007/Reactive/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/jackomo007/Reactive/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/jackomo007/Reactive/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/jackomo007/Reactive/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/jackomo007/Reactive/labels{/name}",
        releases_url:
          "https://api.github.com/repos/jackomo007/Reactive/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/jackomo007/Reactive/deployments",
        created_at: "2019-07-28T01:16:29Z",
        updated_at: "2020-07-07T17:20:00Z",
        pushed_at: "2019-07-28T13:28:59Z",
        git_url: "git://github.com/jackomo007/Reactive.git",
        ssh_url: "git@github.com:jackomo007/Reactive.git",
        clone_url: "https://github.com/jackomo007/Reactive.git",
        svn_url: "https://github.com/jackomo007/Reactive",
        homepage: null,
        size: 4,
        stargazers_count: 1,
        watchers_count: 1,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "master",
      },
      {
        id: 181342498,
        node_id: "MDEwOlJlcG9zaXRvcnkxODEzNDI0OTg=",
        name: "PortfolioFlask",
        full_name: "jackomo007/PortfolioFlask",
        private: false,
        owner: {
          login: "jackomo007",
          id: 38612112,
          node_id: "MDQ6VXNlcjM4NjEyMTEy",
          avatar_url: "https://avatars.githubusercontent.com/u/38612112?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/jackomo007",
          html_url: "https://github.com/jackomo007",
          followers_url: "https://api.github.com/users/jackomo007/followers",
          following_url:
            "https://api.github.com/users/jackomo007/following{/other_user}",
          gists_url: "https://api.github.com/users/jackomo007/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/jackomo007/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/jackomo007/subscriptions",
          organizations_url: "https://api.github.com/users/jackomo007/orgs",
          repos_url: "https://api.github.com/users/jackomo007/repos",
          events_url:
            "https://api.github.com/users/jackomo007/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/jackomo007/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/jackomo007/PortfolioFlask",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/jackomo007/PortfolioFlask",
        forks_url:
          "https://api.github.com/repos/jackomo007/PortfolioFlask/forks",
        keys_url:
          "https://api.github.com/repos/jackomo007/PortfolioFlask/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/jackomo007/PortfolioFlask/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/jackomo007/PortfolioFlask/teams",
        hooks_url:
          "https://api.github.com/repos/jackomo007/PortfolioFlask/hooks",
        issue_events_url:
          "https://api.github.com/repos/jackomo007/PortfolioFlask/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/jackomo007/PortfolioFlask/events",
        assignees_url:
          "https://api.github.com/repos/jackomo007/PortfolioFlask/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/jackomo007/PortfolioFlask/branches{/branch}",
        tags_url: "https://api.github.com/repos/jackomo007/PortfolioFlask/tags",
        blobs_url:
          "https://api.github.com/repos/jackomo007/PortfolioFlask/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/jackomo007/PortfolioFlask/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/jackomo007/PortfolioFlask/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/jackomo007/PortfolioFlask/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/jackomo007/PortfolioFlask/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/jackomo007/PortfolioFlask/languages",
        stargazers_url:
          "https://api.github.com/repos/jackomo007/PortfolioFlask/stargazers",
        contributors_url:
          "https://api.github.com/repos/jackomo007/PortfolioFlask/contributors",
        subscribers_url:
          "https://api.github.com/repos/jackomo007/PortfolioFlask/subscribers",
        subscription_url:
          "https://api.github.com/repos/jackomo007/PortfolioFlask/subscription",
        commits_url:
          "https://api.github.com/repos/jackomo007/PortfolioFlask/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/jackomo007/PortfolioFlask/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/jackomo007/PortfolioFlask/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/jackomo007/PortfolioFlask/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/jackomo007/PortfolioFlask/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/jackomo007/PortfolioFlask/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/jackomo007/PortfolioFlask/merges",
        archive_url:
          "https://api.github.com/repos/jackomo007/PortfolioFlask/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/jackomo007/PortfolioFlask/downloads",
        issues_url:
          "https://api.github.com/repos/jackomo007/PortfolioFlask/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/jackomo007/PortfolioFlask/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/jackomo007/PortfolioFlask/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/jackomo007/PortfolioFlask/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/jackomo007/PortfolioFlask/labels{/name}",
        releases_url:
          "https://api.github.com/repos/jackomo007/PortfolioFlask/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/jackomo007/PortfolioFlask/deployments",
        created_at: "2019-04-14T17:10:17Z",
        updated_at: "2020-07-07T17:19:58Z",
        pushed_at: "2021-03-20T00:52:19Z",
        git_url: "git://github.com/jackomo007/PortfolioFlask.git",
        ssh_url: "git@github.com:jackomo007/PortfolioFlask.git",
        clone_url: "https://github.com/jackomo007/PortfolioFlask.git",
        svn_url: "https://github.com/jackomo007/PortfolioFlask",
        homepage: null,
        size: 4,
        stargazers_count: 1,
        watchers_count: 1,
        language: "CSS",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 2,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        forks: 0,
        open_issues: 2,
        watchers: 1,
        default_branch: "master",
      },
      {
        id: 205906900,
        node_id: "MDEwOlJlcG9zaXRvcnkyMDU5MDY5MDA=",
        name: "Contador-React-Native",
        full_name: "jackomo007/Contador-React-Native",
        private: false,
        owner: {
          login: "jackomo007",
          id: 38612112,
          node_id: "MDQ6VXNlcjM4NjEyMTEy",
          avatar_url: "https://avatars.githubusercontent.com/u/38612112?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/jackomo007",
          html_url: "https://github.com/jackomo007",
          followers_url: "https://api.github.com/users/jackomo007/followers",
          following_url:
            "https://api.github.com/users/jackomo007/following{/other_user}",
          gists_url: "https://api.github.com/users/jackomo007/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/jackomo007/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/jackomo007/subscriptions",
          organizations_url: "https://api.github.com/users/jackomo007/orgs",
          repos_url: "https://api.github.com/users/jackomo007/repos",
          events_url:
            "https://api.github.com/users/jackomo007/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/jackomo007/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/jackomo007/Contador-React-Native",
        description: "React Native First App",
        fork: false,
        url: "https://api.github.com/repos/jackomo007/Contador-React-Native",
        forks_url:
          "https://api.github.com/repos/jackomo007/Contador-React-Native/forks",
        keys_url:
          "https://api.github.com/repos/jackomo007/Contador-React-Native/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/jackomo007/Contador-React-Native/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/jackomo007/Contador-React-Native/teams",
        hooks_url:
          "https://api.github.com/repos/jackomo007/Contador-React-Native/hooks",
        issue_events_url:
          "https://api.github.com/repos/jackomo007/Contador-React-Native/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/jackomo007/Contador-React-Native/events",
        assignees_url:
          "https://api.github.com/repos/jackomo007/Contador-React-Native/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/jackomo007/Contador-React-Native/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/jackomo007/Contador-React-Native/tags",
        blobs_url:
          "https://api.github.com/repos/jackomo007/Contador-React-Native/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/jackomo007/Contador-React-Native/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/jackomo007/Contador-React-Native/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/jackomo007/Contador-React-Native/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/jackomo007/Contador-React-Native/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/jackomo007/Contador-React-Native/languages",
        stargazers_url:
          "https://api.github.com/repos/jackomo007/Contador-React-Native/stargazers",
        contributors_url:
          "https://api.github.com/repos/jackomo007/Contador-React-Native/contributors",
        subscribers_url:
          "https://api.github.com/repos/jackomo007/Contador-React-Native/subscribers",
        subscription_url:
          "https://api.github.com/repos/jackomo007/Contador-React-Native/subscription",
        commits_url:
          "https://api.github.com/repos/jackomo007/Contador-React-Native/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/jackomo007/Contador-React-Native/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/jackomo007/Contador-React-Native/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/jackomo007/Contador-React-Native/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/jackomo007/Contador-React-Native/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/jackomo007/Contador-React-Native/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/jackomo007/Contador-React-Native/merges",
        archive_url:
          "https://api.github.com/repos/jackomo007/Contador-React-Native/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/jackomo007/Contador-React-Native/downloads",
        issues_url:
          "https://api.github.com/repos/jackomo007/Contador-React-Native/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/jackomo007/Contador-React-Native/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/jackomo007/Contador-React-Native/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/jackomo007/Contador-React-Native/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/jackomo007/Contador-React-Native/labels{/name}",
        releases_url:
          "https://api.github.com/repos/jackomo007/Contador-React-Native/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/jackomo007/Contador-React-Native/deployments",
        created_at: "2019-09-02T17:37:31Z",
        updated_at: "2020-07-07T17:19:57Z",
        pushed_at: "2021-05-25T14:44:57Z",
        git_url: "git://github.com/jackomo007/Contador-React-Native.git",
        ssh_url: "git@github.com:jackomo007/Contador-React-Native.git",
        clone_url: "https://github.com/jackomo007/Contador-React-Native.git",
        svn_url: "https://github.com/jackomo007/Contador-React-Native",
        homepage: null,
        size: 530,
        stargazers_count: 1,
        watchers_count: 1,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 6,
        license: null,
        forks: 0,
        open_issues: 6,
        watchers: 1,
        default_branch: "master",
      },
      {
        id: 160963599,
        node_id: "MDEwOlJlcG9zaXRvcnkxNjA5NjM1OTk=",
        name: "MEVN",
        full_name: "jackomo007/MEVN",
        private: false,
        owner: {
          login: "jackomo007",
          id: 38612112,
          node_id: "MDQ6VXNlcjM4NjEyMTEy",
          avatar_url: "https://avatars.githubusercontent.com/u/38612112?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/jackomo007",
          html_url: "https://github.com/jackomo007",
          followers_url: "https://api.github.com/users/jackomo007/followers",
          following_url:
            "https://api.github.com/users/jackomo007/following{/other_user}",
          gists_url: "https://api.github.com/users/jackomo007/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/jackomo007/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/jackomo007/subscriptions",
          organizations_url: "https://api.github.com/users/jackomo007/orgs",
          repos_url: "https://api.github.com/users/jackomo007/repos",
          events_url:
            "https://api.github.com/users/jackomo007/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/jackomo007/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/jackomo007/MEVN",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/jackomo007/MEVN",
        forks_url: "https://api.github.com/repos/jackomo007/MEVN/forks",
        keys_url: "https://api.github.com/repos/jackomo007/MEVN/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/jackomo007/MEVN/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/jackomo007/MEVN/teams",
        hooks_url: "https://api.github.com/repos/jackomo007/MEVN/hooks",
        issue_events_url:
          "https://api.github.com/repos/jackomo007/MEVN/issues/events{/number}",
        events_url: "https://api.github.com/repos/jackomo007/MEVN/events",
        assignees_url:
          "https://api.github.com/repos/jackomo007/MEVN/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/jackomo007/MEVN/branches{/branch}",
        tags_url: "https://api.github.com/repos/jackomo007/MEVN/tags",
        blobs_url:
          "https://api.github.com/repos/jackomo007/MEVN/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/jackomo007/MEVN/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/jackomo007/MEVN/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/jackomo007/MEVN/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/jackomo007/MEVN/statuses/{sha}",
        languages_url: "https://api.github.com/repos/jackomo007/MEVN/languages",
        stargazers_url:
          "https://api.github.com/repos/jackomo007/MEVN/stargazers",
        contributors_url:
          "https://api.github.com/repos/jackomo007/MEVN/contributors",
        subscribers_url:
          "https://api.github.com/repos/jackomo007/MEVN/subscribers",
        subscription_url:
          "https://api.github.com/repos/jackomo007/MEVN/subscription",
        commits_url:
          "https://api.github.com/repos/jackomo007/MEVN/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/jackomo007/MEVN/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/jackomo007/MEVN/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/jackomo007/MEVN/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/jackomo007/MEVN/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/jackomo007/MEVN/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/jackomo007/MEVN/merges",
        archive_url:
          "https://api.github.com/repos/jackomo007/MEVN/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/jackomo007/MEVN/downloads",
        issues_url:
          "https://api.github.com/repos/jackomo007/MEVN/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/jackomo007/MEVN/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/jackomo007/MEVN/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/jackomo007/MEVN/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/jackomo007/MEVN/labels{/name}",
        releases_url:
          "https://api.github.com/repos/jackomo007/MEVN/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/jackomo007/MEVN/deployments",
        created_at: "2018-12-08T17:42:13Z",
        updated_at: "2020-07-07T17:19:56Z",
        pushed_at: "2021-05-07T23:04:11Z",
        git_url: "git://github.com/jackomo007/MEVN.git",
        ssh_url: "git@github.com:jackomo007/MEVN.git",
        clone_url: "https://github.com/jackomo007/MEVN.git",
        svn_url: "https://github.com/jackomo007/MEVN",
        homepage: null,
        size: 481,
        stargazers_count: 1,
        watchers_count: 1,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 3,
        license: null,
        forks: 0,
        open_issues: 3,
        watchers: 1,
        default_branch: "master",
      },
      {
        id: 202400952,
        node_id: "MDEwOlJlcG9zaXRvcnkyMDI0MDA5NTI=",
        name: "Redux-ToDo",
        full_name: "jackomo007/Redux-ToDo",
        private: false,
        owner: {
          login: "jackomo007",
          id: 38612112,
          node_id: "MDQ6VXNlcjM4NjEyMTEy",
          avatar_url: "https://avatars.githubusercontent.com/u/38612112?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/jackomo007",
          html_url: "https://github.com/jackomo007",
          followers_url: "https://api.github.com/users/jackomo007/followers",
          following_url:
            "https://api.github.com/users/jackomo007/following{/other_user}",
          gists_url: "https://api.github.com/users/jackomo007/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/jackomo007/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/jackomo007/subscriptions",
          organizations_url: "https://api.github.com/users/jackomo007/orgs",
          repos_url: "https://api.github.com/users/jackomo007/repos",
          events_url:
            "https://api.github.com/users/jackomo007/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/jackomo007/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/jackomo007/Redux-ToDo",
        description: "To Do in React JS with Redux!",
        fork: false,
        url: "https://api.github.com/repos/jackomo007/Redux-ToDo",
        forks_url: "https://api.github.com/repos/jackomo007/Redux-ToDo/forks",
        keys_url:
          "https://api.github.com/repos/jackomo007/Redux-ToDo/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/jackomo007/Redux-ToDo/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/jackomo007/Redux-ToDo/teams",
        hooks_url: "https://api.github.com/repos/jackomo007/Redux-ToDo/hooks",
        issue_events_url:
          "https://api.github.com/repos/jackomo007/Redux-ToDo/issues/events{/number}",
        events_url: "https://api.github.com/repos/jackomo007/Redux-ToDo/events",
        assignees_url:
          "https://api.github.com/repos/jackomo007/Redux-ToDo/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/jackomo007/Redux-ToDo/branches{/branch}",
        tags_url: "https://api.github.com/repos/jackomo007/Redux-ToDo/tags",
        blobs_url:
          "https://api.github.com/repos/jackomo007/Redux-ToDo/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/jackomo007/Redux-ToDo/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/jackomo007/Redux-ToDo/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/jackomo007/Redux-ToDo/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/jackomo007/Redux-ToDo/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/jackomo007/Redux-ToDo/languages",
        stargazers_url:
          "https://api.github.com/repos/jackomo007/Redux-ToDo/stargazers",
        contributors_url:
          "https://api.github.com/repos/jackomo007/Redux-ToDo/contributors",
        subscribers_url:
          "https://api.github.com/repos/jackomo007/Redux-ToDo/subscribers",
        subscription_url:
          "https://api.github.com/repos/jackomo007/Redux-ToDo/subscription",
        commits_url:
          "https://api.github.com/repos/jackomo007/Redux-ToDo/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/jackomo007/Redux-ToDo/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/jackomo007/Redux-ToDo/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/jackomo007/Redux-ToDo/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/jackomo007/Redux-ToDo/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/jackomo007/Redux-ToDo/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/jackomo007/Redux-ToDo/merges",
        archive_url:
          "https://api.github.com/repos/jackomo007/Redux-ToDo/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/jackomo007/Redux-ToDo/downloads",
        issues_url:
          "https://api.github.com/repos/jackomo007/Redux-ToDo/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/jackomo007/Redux-ToDo/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/jackomo007/Redux-ToDo/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/jackomo007/Redux-ToDo/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/jackomo007/Redux-ToDo/labels{/name}",
        releases_url:
          "https://api.github.com/repos/jackomo007/Redux-ToDo/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/jackomo007/Redux-ToDo/deployments",
        created_at: "2019-08-14T18:02:02Z",
        updated_at: "2020-07-07T17:19:54Z",
        pushed_at: "2021-01-05T13:13:18Z",
        git_url: "git://github.com/jackomo007/Redux-ToDo.git",
        ssh_url: "git@github.com:jackomo007/Redux-ToDo.git",
        clone_url: "https://github.com/jackomo007/Redux-ToDo.git",
        svn_url: "https://github.com/jackomo007/Redux-ToDo",
        homepage: "https://www.facebook.com/JEAL47",
        size: 481,
        stargazers_count: 1,
        watchers_count: 1,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 1,
        license: null,
        forks: 0,
        open_issues: 1,
        watchers: 1,
        default_branch: "master",
      },
      {
        id: 207403440,
        node_id: "MDEwOlJlcG9zaXRvcnkyMDc0MDM0NDA=",
        name: "ToDo-App-Reactive",
        full_name: "jackomo007/ToDo-App-Reactive",
        private: false,
        owner: {
          login: "jackomo007",
          id: 38612112,
          node_id: "MDQ6VXNlcjM4NjEyMTEy",
          avatar_url: "https://avatars.githubusercontent.com/u/38612112?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/jackomo007",
          html_url: "https://github.com/jackomo007",
          followers_url: "https://api.github.com/users/jackomo007/followers",
          following_url:
            "https://api.github.com/users/jackomo007/following{/other_user}",
          gists_url: "https://api.github.com/users/jackomo007/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/jackomo007/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/jackomo007/subscriptions",
          organizations_url: "https://api.github.com/users/jackomo007/orgs",
          repos_url: "https://api.github.com/users/jackomo007/repos",
          events_url:
            "https://api.github.com/users/jackomo007/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/jackomo007/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/jackomo007/ToDo-App-Reactive",
        description: "List To Do in React Native",
        fork: false,
        url: "https://api.github.com/repos/jackomo007/ToDo-App-Reactive",
        forks_url:
          "https://api.github.com/repos/jackomo007/ToDo-App-Reactive/forks",
        keys_url:
          "https://api.github.com/repos/jackomo007/ToDo-App-Reactive/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/jackomo007/ToDo-App-Reactive/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/jackomo007/ToDo-App-Reactive/teams",
        hooks_url:
          "https://api.github.com/repos/jackomo007/ToDo-App-Reactive/hooks",
        issue_events_url:
          "https://api.github.com/repos/jackomo007/ToDo-App-Reactive/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/jackomo007/ToDo-App-Reactive/events",
        assignees_url:
          "https://api.github.com/repos/jackomo007/ToDo-App-Reactive/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/jackomo007/ToDo-App-Reactive/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/jackomo007/ToDo-App-Reactive/tags",
        blobs_url:
          "https://api.github.com/repos/jackomo007/ToDo-App-Reactive/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/jackomo007/ToDo-App-Reactive/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/jackomo007/ToDo-App-Reactive/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/jackomo007/ToDo-App-Reactive/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/jackomo007/ToDo-App-Reactive/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/jackomo007/ToDo-App-Reactive/languages",
        stargazers_url:
          "https://api.github.com/repos/jackomo007/ToDo-App-Reactive/stargazers",
        contributors_url:
          "https://api.github.com/repos/jackomo007/ToDo-App-Reactive/contributors",
        subscribers_url:
          "https://api.github.com/repos/jackomo007/ToDo-App-Reactive/subscribers",
        subscription_url:
          "https://api.github.com/repos/jackomo007/ToDo-App-Reactive/subscription",
        commits_url:
          "https://api.github.com/repos/jackomo007/ToDo-App-Reactive/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/jackomo007/ToDo-App-Reactive/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/jackomo007/ToDo-App-Reactive/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/jackomo007/ToDo-App-Reactive/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/jackomo007/ToDo-App-Reactive/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/jackomo007/ToDo-App-Reactive/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/jackomo007/ToDo-App-Reactive/merges",
        archive_url:
          "https://api.github.com/repos/jackomo007/ToDo-App-Reactive/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/jackomo007/ToDo-App-Reactive/downloads",
        issues_url:
          "https://api.github.com/repos/jackomo007/ToDo-App-Reactive/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/jackomo007/ToDo-App-Reactive/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/jackomo007/ToDo-App-Reactive/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/jackomo007/ToDo-App-Reactive/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/jackomo007/ToDo-App-Reactive/labels{/name}",
        releases_url:
          "https://api.github.com/repos/jackomo007/ToDo-App-Reactive/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/jackomo007/ToDo-App-Reactive/deployments",
        created_at: "2019-09-09T20:58:23Z",
        updated_at: "2020-07-07T17:19:53Z",
        pushed_at: "2020-01-20T08:19:52Z",
        git_url: "git://github.com/jackomo007/ToDo-App-Reactive.git",
        ssh_url: "git@github.com:jackomo007/ToDo-App-Reactive.git",
        clone_url: "https://github.com/jackomo007/ToDo-App-Reactive.git",
        svn_url: "https://github.com/jackomo007/ToDo-App-Reactive",
        homepage: null,
        size: 2269,
        stargazers_count: 1,
        watchers_count: 1,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "master",
      },
      {
        id: 242609684,
        node_id: "MDEwOlJlcG9zaXRvcnkyNDI2MDk2ODQ=",
        name: "HuntGames",
        full_name: "jackomo007/HuntGames",
        private: false,
        owner: {
          login: "jackomo007",
          id: 38612112,
          node_id: "MDQ6VXNlcjM4NjEyMTEy",
          avatar_url: "https://avatars.githubusercontent.com/u/38612112?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/jackomo007",
          html_url: "https://github.com/jackomo007",
          followers_url: "https://api.github.com/users/jackomo007/followers",
          following_url:
            "https://api.github.com/users/jackomo007/following{/other_user}",
          gists_url: "https://api.github.com/users/jackomo007/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/jackomo007/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/jackomo007/subscriptions",
          organizations_url: "https://api.github.com/users/jackomo007/orgs",
          repos_url: "https://api.github.com/users/jackomo007/repos",
          events_url:
            "https://api.github.com/users/jackomo007/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/jackomo007/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/jackomo007/HuntGames",
        description:
          "React js Frontend + Node backend + Consuming REST GAMES API",
        fork: false,
        url: "https://api.github.com/repos/jackomo007/HuntGames",
        forks_url: "https://api.github.com/repos/jackomo007/HuntGames/forks",
        keys_url:
          "https://api.github.com/repos/jackomo007/HuntGames/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/jackomo007/HuntGames/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/jackomo007/HuntGames/teams",
        hooks_url: "https://api.github.com/repos/jackomo007/HuntGames/hooks",
        issue_events_url:
          "https://api.github.com/repos/jackomo007/HuntGames/issues/events{/number}",
        events_url: "https://api.github.com/repos/jackomo007/HuntGames/events",
        assignees_url:
          "https://api.github.com/repos/jackomo007/HuntGames/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/jackomo007/HuntGames/branches{/branch}",
        tags_url: "https://api.github.com/repos/jackomo007/HuntGames/tags",
        blobs_url:
          "https://api.github.com/repos/jackomo007/HuntGames/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/jackomo007/HuntGames/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/jackomo007/HuntGames/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/jackomo007/HuntGames/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/jackomo007/HuntGames/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/jackomo007/HuntGames/languages",
        stargazers_url:
          "https://api.github.com/repos/jackomo007/HuntGames/stargazers",
        contributors_url:
          "https://api.github.com/repos/jackomo007/HuntGames/contributors",
        subscribers_url:
          "https://api.github.com/repos/jackomo007/HuntGames/subscribers",
        subscription_url:
          "https://api.github.com/repos/jackomo007/HuntGames/subscription",
        commits_url:
          "https://api.github.com/repos/jackomo007/HuntGames/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/jackomo007/HuntGames/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/jackomo007/HuntGames/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/jackomo007/HuntGames/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/jackomo007/HuntGames/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/jackomo007/HuntGames/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/jackomo007/HuntGames/merges",
        archive_url:
          "https://api.github.com/repos/jackomo007/HuntGames/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/jackomo007/HuntGames/downloads",
        issues_url:
          "https://api.github.com/repos/jackomo007/HuntGames/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/jackomo007/HuntGames/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/jackomo007/HuntGames/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/jackomo007/HuntGames/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/jackomo007/HuntGames/labels{/name}",
        releases_url:
          "https://api.github.com/repos/jackomo007/HuntGames/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/jackomo007/HuntGames/deployments",
        created_at: "2020-02-23T23:45:08Z",
        updated_at: "2020-07-07T17:19:51Z",
        pushed_at: "2020-03-05T13:51:01Z",
        git_url: "git://github.com/jackomo007/HuntGames.git",
        ssh_url: "git@github.com:jackomo007/HuntGames.git",
        clone_url: "https://github.com/jackomo007/HuntGames.git",
        svn_url: "https://github.com/jackomo007/HuntGames",
        homepage: null,
        size: 169,
        stargazers_count: 1,
        watchers_count: 1,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "master",
      },
      {
        id: 221278642,
        node_id: "MDEwOlJlcG9zaXRvcnkyMjEyNzg2NDI=",
        name: "Uphoto",
        full_name: "jackomo007/Uphoto",
        private: false,
        owner: {
          login: "jackomo007",
          id: 38612112,
          node_id: "MDQ6VXNlcjM4NjEyMTEy",
          avatar_url: "https://avatars.githubusercontent.com/u/38612112?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/jackomo007",
          html_url: "https://github.com/jackomo007",
          followers_url: "https://api.github.com/users/jackomo007/followers",
          following_url:
            "https://api.github.com/users/jackomo007/following{/other_user}",
          gists_url: "https://api.github.com/users/jackomo007/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/jackomo007/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/jackomo007/subscriptions",
          organizations_url: "https://api.github.com/users/jackomo007/orgs",
          repos_url: "https://api.github.com/users/jackomo007/repos",
          events_url:
            "https://api.github.com/users/jackomo007/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/jackomo007/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/jackomo007/Uphoto",
        description: "Instagram App React Native",
        fork: false,
        url: "https://api.github.com/repos/jackomo007/Uphoto",
        forks_url: "https://api.github.com/repos/jackomo007/Uphoto/forks",
        keys_url:
          "https://api.github.com/repos/jackomo007/Uphoto/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/jackomo007/Uphoto/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/jackomo007/Uphoto/teams",
        hooks_url: "https://api.github.com/repos/jackomo007/Uphoto/hooks",
        issue_events_url:
          "https://api.github.com/repos/jackomo007/Uphoto/issues/events{/number}",
        events_url: "https://api.github.com/repos/jackomo007/Uphoto/events",
        assignees_url:
          "https://api.github.com/repos/jackomo007/Uphoto/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/jackomo007/Uphoto/branches{/branch}",
        tags_url: "https://api.github.com/repos/jackomo007/Uphoto/tags",
        blobs_url:
          "https://api.github.com/repos/jackomo007/Uphoto/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/jackomo007/Uphoto/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/jackomo007/Uphoto/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/jackomo007/Uphoto/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/jackomo007/Uphoto/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/jackomo007/Uphoto/languages",
        stargazers_url:
          "https://api.github.com/repos/jackomo007/Uphoto/stargazers",
        contributors_url:
          "https://api.github.com/repos/jackomo007/Uphoto/contributors",
        subscribers_url:
          "https://api.github.com/repos/jackomo007/Uphoto/subscribers",
        subscription_url:
          "https://api.github.com/repos/jackomo007/Uphoto/subscription",
        commits_url:
          "https://api.github.com/repos/jackomo007/Uphoto/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/jackomo007/Uphoto/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/jackomo007/Uphoto/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/jackomo007/Uphoto/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/jackomo007/Uphoto/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/jackomo007/Uphoto/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/jackomo007/Uphoto/merges",
        archive_url:
          "https://api.github.com/repos/jackomo007/Uphoto/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/jackomo007/Uphoto/downloads",
        issues_url:
          "https://api.github.com/repos/jackomo007/Uphoto/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/jackomo007/Uphoto/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/jackomo007/Uphoto/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/jackomo007/Uphoto/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/jackomo007/Uphoto/labels{/name}",
        releases_url:
          "https://api.github.com/repos/jackomo007/Uphoto/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/jackomo007/Uphoto/deployments",
        created_at: "2019-11-12T17:54:25Z",
        updated_at: "2020-07-07T17:19:49Z",
        pushed_at: "2020-03-15T13:57:50Z",
        git_url: "git://github.com/jackomo007/Uphoto.git",
        ssh_url: "git@github.com:jackomo007/Uphoto.git",
        clone_url: "https://github.com/jackomo007/Uphoto.git",
        svn_url: "https://github.com/jackomo007/Uphoto",
        homepage: null,
        size: 3984,
        stargazers_count: 1,
        watchers_count: 1,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "master",
      },
      {
        id: 249299413,
        node_id: "MDEwOlJlcG9zaXRvcnkyNDkyOTk0MTM=",
        name: "NodeAPI",
        full_name: "jackomo007/NodeAPI",
        private: false,
        owner: {
          login: "jackomo007",
          id: 38612112,
          node_id: "MDQ6VXNlcjM4NjEyMTEy",
          avatar_url: "https://avatars.githubusercontent.com/u/38612112?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/jackomo007",
          html_url: "https://github.com/jackomo007",
          followers_url: "https://api.github.com/users/jackomo007/followers",
          following_url:
            "https://api.github.com/users/jackomo007/following{/other_user}",
          gists_url: "https://api.github.com/users/jackomo007/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/jackomo007/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/jackomo007/subscriptions",
          organizations_url: "https://api.github.com/users/jackomo007/orgs",
          repos_url: "https://api.github.com/users/jackomo007/repos",
          events_url:
            "https://api.github.com/users/jackomo007/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/jackomo007/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/jackomo007/NodeAPI",
        description: "api+node+cors+mongo",
        fork: false,
        url: "https://api.github.com/repos/jackomo007/NodeAPI",
        forks_url: "https://api.github.com/repos/jackomo007/NodeAPI/forks",
        keys_url:
          "https://api.github.com/repos/jackomo007/NodeAPI/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/jackomo007/NodeAPI/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/jackomo007/NodeAPI/teams",
        hooks_url: "https://api.github.com/repos/jackomo007/NodeAPI/hooks",
        issue_events_url:
          "https://api.github.com/repos/jackomo007/NodeAPI/issues/events{/number}",
        events_url: "https://api.github.com/repos/jackomo007/NodeAPI/events",
        assignees_url:
          "https://api.github.com/repos/jackomo007/NodeAPI/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/jackomo007/NodeAPI/branches{/branch}",
        tags_url: "https://api.github.com/repos/jackomo007/NodeAPI/tags",
        blobs_url:
          "https://api.github.com/repos/jackomo007/NodeAPI/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/jackomo007/NodeAPI/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/jackomo007/NodeAPI/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/jackomo007/NodeAPI/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/jackomo007/NodeAPI/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/jackomo007/NodeAPI/languages",
        stargazers_url:
          "https://api.github.com/repos/jackomo007/NodeAPI/stargazers",
        contributors_url:
          "https://api.github.com/repos/jackomo007/NodeAPI/contributors",
        subscribers_url:
          "https://api.github.com/repos/jackomo007/NodeAPI/subscribers",
        subscription_url:
          "https://api.github.com/repos/jackomo007/NodeAPI/subscription",
        commits_url:
          "https://api.github.com/repos/jackomo007/NodeAPI/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/jackomo007/NodeAPI/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/jackomo007/NodeAPI/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/jackomo007/NodeAPI/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/jackomo007/NodeAPI/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/jackomo007/NodeAPI/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/jackomo007/NodeAPI/merges",
        archive_url:
          "https://api.github.com/repos/jackomo007/NodeAPI/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/jackomo007/NodeAPI/downloads",
        issues_url:
          "https://api.github.com/repos/jackomo007/NodeAPI/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/jackomo007/NodeAPI/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/jackomo007/NodeAPI/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/jackomo007/NodeAPI/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/jackomo007/NodeAPI/labels{/name}",
        releases_url:
          "https://api.github.com/repos/jackomo007/NodeAPI/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/jackomo007/NodeAPI/deployments",
        created_at: "2020-03-23T00:28:00Z",
        updated_at: "2021-04-29T18:25:13Z",
        pushed_at: "2021-05-09T08:23:51Z",
        git_url: "git://github.com/jackomo007/NodeAPI.git",
        ssh_url: "git@github.com:jackomo007/NodeAPI.git",
        clone_url: "https://github.com/jackomo007/NodeAPI.git",
        svn_url: "https://github.com/jackomo007/NodeAPI",
        homepage: null,
        size: 27,
        stargazers_count: 1,
        watchers_count: 1,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 1,
        license: null,
        forks: 0,
        open_issues: 1,
        watchers: 1,
        default_branch: "master",
      },
      {
        id: 160707137,
        node_id: "MDEwOlJlcG9zaXRvcnkxNjA3MDcxMzc=",
        name: "CRUD-LARAVEL-VUEJS",
        full_name: "jackomo007/CRUD-LARAVEL-VUEJS",
        private: false,
        owner: {
          login: "jackomo007",
          id: 38612112,
          node_id: "MDQ6VXNlcjM4NjEyMTEy",
          avatar_url: "https://avatars.githubusercontent.com/u/38612112?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/jackomo007",
          html_url: "https://github.com/jackomo007",
          followers_url: "https://api.github.com/users/jackomo007/followers",
          following_url:
            "https://api.github.com/users/jackomo007/following{/other_user}",
          gists_url: "https://api.github.com/users/jackomo007/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/jackomo007/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/jackomo007/subscriptions",
          organizations_url: "https://api.github.com/users/jackomo007/orgs",
          repos_url: "https://api.github.com/users/jackomo007/repos",
          events_url:
            "https://api.github.com/users/jackomo007/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/jackomo007/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/jackomo007/CRUD-LARAVEL-VUEJS",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/jackomo007/CRUD-LARAVEL-VUEJS",
        forks_url:
          "https://api.github.com/repos/jackomo007/CRUD-LARAVEL-VUEJS/forks",
        keys_url:
          "https://api.github.com/repos/jackomo007/CRUD-LARAVEL-VUEJS/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/jackomo007/CRUD-LARAVEL-VUEJS/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/jackomo007/CRUD-LARAVEL-VUEJS/teams",
        hooks_url:
          "https://api.github.com/repos/jackomo007/CRUD-LARAVEL-VUEJS/hooks",
        issue_events_url:
          "https://api.github.com/repos/jackomo007/CRUD-LARAVEL-VUEJS/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/jackomo007/CRUD-LARAVEL-VUEJS/events",
        assignees_url:
          "https://api.github.com/repos/jackomo007/CRUD-LARAVEL-VUEJS/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/jackomo007/CRUD-LARAVEL-VUEJS/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/jackomo007/CRUD-LARAVEL-VUEJS/tags",
        blobs_url:
          "https://api.github.com/repos/jackomo007/CRUD-LARAVEL-VUEJS/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/jackomo007/CRUD-LARAVEL-VUEJS/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/jackomo007/CRUD-LARAVEL-VUEJS/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/jackomo007/CRUD-LARAVEL-VUEJS/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/jackomo007/CRUD-LARAVEL-VUEJS/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/jackomo007/CRUD-LARAVEL-VUEJS/languages",
        stargazers_url:
          "https://api.github.com/repos/jackomo007/CRUD-LARAVEL-VUEJS/stargazers",
        contributors_url:
          "https://api.github.com/repos/jackomo007/CRUD-LARAVEL-VUEJS/contributors",
        subscribers_url:
          "https://api.github.com/repos/jackomo007/CRUD-LARAVEL-VUEJS/subscribers",
        subscription_url:
          "https://api.github.com/repos/jackomo007/CRUD-LARAVEL-VUEJS/subscription",
        commits_url:
          "https://api.github.com/repos/jackomo007/CRUD-LARAVEL-VUEJS/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/jackomo007/CRUD-LARAVEL-VUEJS/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/jackomo007/CRUD-LARAVEL-VUEJS/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/jackomo007/CRUD-LARAVEL-VUEJS/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/jackomo007/CRUD-LARAVEL-VUEJS/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/jackomo007/CRUD-LARAVEL-VUEJS/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/jackomo007/CRUD-LARAVEL-VUEJS/merges",
        archive_url:
          "https://api.github.com/repos/jackomo007/CRUD-LARAVEL-VUEJS/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/jackomo007/CRUD-LARAVEL-VUEJS/downloads",
        issues_url:
          "https://api.github.com/repos/jackomo007/CRUD-LARAVEL-VUEJS/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/jackomo007/CRUD-LARAVEL-VUEJS/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/jackomo007/CRUD-LARAVEL-VUEJS/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/jackomo007/CRUD-LARAVEL-VUEJS/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/jackomo007/CRUD-LARAVEL-VUEJS/labels{/name}",
        releases_url:
          "https://api.github.com/repos/jackomo007/CRUD-LARAVEL-VUEJS/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/jackomo007/CRUD-LARAVEL-VUEJS/deployments",
        created_at: "2018-12-06T17:13:35Z",
        updated_at: "2020-07-07T17:19:45Z",
        pushed_at: "2021-05-27T07:26:25Z",
        git_url: "git://github.com/jackomo007/CRUD-LARAVEL-VUEJS.git",
        ssh_url: "git@github.com:jackomo007/CRUD-LARAVEL-VUEJS.git",
        clone_url: "https://github.com/jackomo007/CRUD-LARAVEL-VUEJS.git",
        svn_url: "https://github.com/jackomo007/CRUD-LARAVEL-VUEJS",
        homepage: null,
        size: 1714,
        stargazers_count: 1,
        watchers_count: 1,
        language: "PHP",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 17,
        license: null,
        forks: 0,
        open_issues: 17,
        watchers: 1,
        default_branch: "master",
      },
      {
        id: 159479079,
        node_id: "MDEwOlJlcG9zaXRvcnkxNTk0NzkwNzk=",
        name: "Consumir-APIREST-Angular-7-Bootstrap-4",
        full_name: "jackomo007/Consumir-APIREST-Angular-7-Bootstrap-4",
        private: false,
        owner: {
          login: "jackomo007",
          id: 38612112,
          node_id: "MDQ6VXNlcjM4NjEyMTEy",
          avatar_url: "https://avatars.githubusercontent.com/u/38612112?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/jackomo007",
          html_url: "https://github.com/jackomo007",
          followers_url: "https://api.github.com/users/jackomo007/followers",
          following_url:
            "https://api.github.com/users/jackomo007/following{/other_user}",
          gists_url: "https://api.github.com/users/jackomo007/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/jackomo007/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/jackomo007/subscriptions",
          organizations_url: "https://api.github.com/users/jackomo007/orgs",
          repos_url: "https://api.github.com/users/jackomo007/repos",
          events_url:
            "https://api.github.com/users/jackomo007/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/jackomo007/received_events",
          type: "User",
          site_admin: false,
        },
        html_url:
          "https://github.com/jackomo007/Consumir-APIREST-Angular-7-Bootstrap-4",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/jackomo007/Consumir-APIREST-Angular-7-Bootstrap-4",
        forks_url:
          "https://api.github.com/repos/jackomo007/Consumir-APIREST-Angular-7-Bootstrap-4/forks",
        keys_url:
          "https://api.github.com/repos/jackomo007/Consumir-APIREST-Angular-7-Bootstrap-4/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/jackomo007/Consumir-APIREST-Angular-7-Bootstrap-4/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/jackomo007/Consumir-APIREST-Angular-7-Bootstrap-4/teams",
        hooks_url:
          "https://api.github.com/repos/jackomo007/Consumir-APIREST-Angular-7-Bootstrap-4/hooks",
        issue_events_url:
          "https://api.github.com/repos/jackomo007/Consumir-APIREST-Angular-7-Bootstrap-4/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/jackomo007/Consumir-APIREST-Angular-7-Bootstrap-4/events",
        assignees_url:
          "https://api.github.com/repos/jackomo007/Consumir-APIREST-Angular-7-Bootstrap-4/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/jackomo007/Consumir-APIREST-Angular-7-Bootstrap-4/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/jackomo007/Consumir-APIREST-Angular-7-Bootstrap-4/tags",
        blobs_url:
          "https://api.github.com/repos/jackomo007/Consumir-APIREST-Angular-7-Bootstrap-4/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/jackomo007/Consumir-APIREST-Angular-7-Bootstrap-4/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/jackomo007/Consumir-APIREST-Angular-7-Bootstrap-4/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/jackomo007/Consumir-APIREST-Angular-7-Bootstrap-4/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/jackomo007/Consumir-APIREST-Angular-7-Bootstrap-4/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/jackomo007/Consumir-APIREST-Angular-7-Bootstrap-4/languages",
        stargazers_url:
          "https://api.github.com/repos/jackomo007/Consumir-APIREST-Angular-7-Bootstrap-4/stargazers",
        contributors_url:
          "https://api.github.com/repos/jackomo007/Consumir-APIREST-Angular-7-Bootstrap-4/contributors",
        subscribers_url:
          "https://api.github.com/repos/jackomo007/Consumir-APIREST-Angular-7-Bootstrap-4/subscribers",
        subscription_url:
          "https://api.github.com/repos/jackomo007/Consumir-APIREST-Angular-7-Bootstrap-4/subscription",
        commits_url:
          "https://api.github.com/repos/jackomo007/Consumir-APIREST-Angular-7-Bootstrap-4/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/jackomo007/Consumir-APIREST-Angular-7-Bootstrap-4/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/jackomo007/Consumir-APIREST-Angular-7-Bootstrap-4/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/jackomo007/Consumir-APIREST-Angular-7-Bootstrap-4/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/jackomo007/Consumir-APIREST-Angular-7-Bootstrap-4/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/jackomo007/Consumir-APIREST-Angular-7-Bootstrap-4/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/jackomo007/Consumir-APIREST-Angular-7-Bootstrap-4/merges",
        archive_url:
          "https://api.github.com/repos/jackomo007/Consumir-APIREST-Angular-7-Bootstrap-4/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/jackomo007/Consumir-APIREST-Angular-7-Bootstrap-4/downloads",
        issues_url:
          "https://api.github.com/repos/jackomo007/Consumir-APIREST-Angular-7-Bootstrap-4/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/jackomo007/Consumir-APIREST-Angular-7-Bootstrap-4/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/jackomo007/Consumir-APIREST-Angular-7-Bootstrap-4/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/jackomo007/Consumir-APIREST-Angular-7-Bootstrap-4/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/jackomo007/Consumir-APIREST-Angular-7-Bootstrap-4/labels{/name}",
        releases_url:
          "https://api.github.com/repos/jackomo007/Consumir-APIREST-Angular-7-Bootstrap-4/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/jackomo007/Consumir-APIREST-Angular-7-Bootstrap-4/deployments",
        created_at: "2018-11-28T09:45:52Z",
        updated_at: "2020-07-07T17:19:44Z",
        pushed_at: "2021-05-27T05:38:56Z",
        git_url:
          "git://github.com/jackomo007/Consumir-APIREST-Angular-7-Bootstrap-4.git",
        ssh_url:
          "git@github.com:jackomo007/Consumir-APIREST-Angular-7-Bootstrap-4.git",
        clone_url:
          "https://github.com/jackomo007/Consumir-APIREST-Angular-7-Bootstrap-4.git",
        svn_url:
          "https://github.com/jackomo007/Consumir-APIREST-Angular-7-Bootstrap-4",
        homepage: null,
        size: 1275,
        stargazers_count: 1,
        watchers_count: 1,
        language: "TypeScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 15,
        license: null,
        forks: 0,
        open_issues: 15,
        watchers: 1,
        default_branch: "master",
      },
      {
        id: 193407891,
        node_id: "MDEwOlJlcG9zaXRvcnkxOTM0MDc4OTE=",
        name: "SPA",
        full_name: "jackomo007/SPA",
        private: false,
        owner: {
          login: "jackomo007",
          id: 38612112,
          node_id: "MDQ6VXNlcjM4NjEyMTEy",
          avatar_url: "https://avatars.githubusercontent.com/u/38612112?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/jackomo007",
          html_url: "https://github.com/jackomo007",
          followers_url: "https://api.github.com/users/jackomo007/followers",
          following_url:
            "https://api.github.com/users/jackomo007/following{/other_user}",
          gists_url: "https://api.github.com/users/jackomo007/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/jackomo007/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/jackomo007/subscriptions",
          organizations_url: "https://api.github.com/users/jackomo007/orgs",
          repos_url: "https://api.github.com/users/jackomo007/repos",
          events_url:
            "https://api.github.com/users/jackomo007/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/jackomo007/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/jackomo007/SPA",
        description: "SPA+Laravel+Vue",
        fork: false,
        url: "https://api.github.com/repos/jackomo007/SPA",
        forks_url: "https://api.github.com/repos/jackomo007/SPA/forks",
        keys_url: "https://api.github.com/repos/jackomo007/SPA/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/jackomo007/SPA/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/jackomo007/SPA/teams",
        hooks_url: "https://api.github.com/repos/jackomo007/SPA/hooks",
        issue_events_url:
          "https://api.github.com/repos/jackomo007/SPA/issues/events{/number}",
        events_url: "https://api.github.com/repos/jackomo007/SPA/events",
        assignees_url:
          "https://api.github.com/repos/jackomo007/SPA/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/jackomo007/SPA/branches{/branch}",
        tags_url: "https://api.github.com/repos/jackomo007/SPA/tags",
        blobs_url:
          "https://api.github.com/repos/jackomo007/SPA/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/jackomo007/SPA/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/jackomo007/SPA/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/jackomo007/SPA/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/jackomo007/SPA/statuses/{sha}",
        languages_url: "https://api.github.com/repos/jackomo007/SPA/languages",
        stargazers_url:
          "https://api.github.com/repos/jackomo007/SPA/stargazers",
        contributors_url:
          "https://api.github.com/repos/jackomo007/SPA/contributors",
        subscribers_url:
          "https://api.github.com/repos/jackomo007/SPA/subscribers",
        subscription_url:
          "https://api.github.com/repos/jackomo007/SPA/subscription",
        commits_url:
          "https://api.github.com/repos/jackomo007/SPA/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/jackomo007/SPA/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/jackomo007/SPA/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/jackomo007/SPA/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/jackomo007/SPA/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/jackomo007/SPA/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/jackomo007/SPA/merges",
        archive_url:
          "https://api.github.com/repos/jackomo007/SPA/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/jackomo007/SPA/downloads",
        issues_url:
          "https://api.github.com/repos/jackomo007/SPA/issues{/number}",
        pulls_url: "https://api.github.com/repos/jackomo007/SPA/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/jackomo007/SPA/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/jackomo007/SPA/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/jackomo007/SPA/labels{/name}",
        releases_url:
          "https://api.github.com/repos/jackomo007/SPA/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/jackomo007/SPA/deployments",
        created_at: "2019-06-24T00:13:29Z",
        updated_at: "2020-07-07T17:19:42Z",
        pushed_at: "2021-05-27T14:12:45Z",
        git_url: "git://github.com/jackomo007/SPA.git",
        ssh_url: "git@github.com:jackomo007/SPA.git",
        clone_url: "https://github.com/jackomo007/SPA.git",
        svn_url: "https://github.com/jackomo007/SPA",
        homepage: null,
        size: 1439,
        stargazers_count: 1,
        watchers_count: 1,
        language: "PHP",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 13,
        license: null,
        forks: 0,
        open_issues: 13,
        watchers: 1,
        default_branch: "master",
      },
      {
        id: 200550589,
        node_id: "MDEwOlJlcG9zaXRvcnkyMDA1NTA1ODk=",
        name: "Vuex-ToDo",
        full_name: "jackomo007/Vuex-ToDo",
        private: false,
        owner: {
          login: "jackomo007",
          id: 38612112,
          node_id: "MDQ6VXNlcjM4NjEyMTEy",
          avatar_url: "https://avatars.githubusercontent.com/u/38612112?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/jackomo007",
          html_url: "https://github.com/jackomo007",
          followers_url: "https://api.github.com/users/jackomo007/followers",
          following_url:
            "https://api.github.com/users/jackomo007/following{/other_user}",
          gists_url: "https://api.github.com/users/jackomo007/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/jackomo007/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/jackomo007/subscriptions",
          organizations_url: "https://api.github.com/users/jackomo007/orgs",
          repos_url: "https://api.github.com/users/jackomo007/repos",
          events_url:
            "https://api.github.com/users/jackomo007/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/jackomo007/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/jackomo007/Vuex-ToDo",
        description: null,
        fork: false,
        url: "https://api.github.com/repos/jackomo007/Vuex-ToDo",
        forks_url: "https://api.github.com/repos/jackomo007/Vuex-ToDo/forks",
        keys_url:
          "https://api.github.com/repos/jackomo007/Vuex-ToDo/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/jackomo007/Vuex-ToDo/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/jackomo007/Vuex-ToDo/teams",
        hooks_url: "https://api.github.com/repos/jackomo007/Vuex-ToDo/hooks",
        issue_events_url:
          "https://api.github.com/repos/jackomo007/Vuex-ToDo/issues/events{/number}",
        events_url: "https://api.github.com/repos/jackomo007/Vuex-ToDo/events",
        assignees_url:
          "https://api.github.com/repos/jackomo007/Vuex-ToDo/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/jackomo007/Vuex-ToDo/branches{/branch}",
        tags_url: "https://api.github.com/repos/jackomo007/Vuex-ToDo/tags",
        blobs_url:
          "https://api.github.com/repos/jackomo007/Vuex-ToDo/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/jackomo007/Vuex-ToDo/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/jackomo007/Vuex-ToDo/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/jackomo007/Vuex-ToDo/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/jackomo007/Vuex-ToDo/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/jackomo007/Vuex-ToDo/languages",
        stargazers_url:
          "https://api.github.com/repos/jackomo007/Vuex-ToDo/stargazers",
        contributors_url:
          "https://api.github.com/repos/jackomo007/Vuex-ToDo/contributors",
        subscribers_url:
          "https://api.github.com/repos/jackomo007/Vuex-ToDo/subscribers",
        subscription_url:
          "https://api.github.com/repos/jackomo007/Vuex-ToDo/subscription",
        commits_url:
          "https://api.github.com/repos/jackomo007/Vuex-ToDo/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/jackomo007/Vuex-ToDo/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/jackomo007/Vuex-ToDo/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/jackomo007/Vuex-ToDo/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/jackomo007/Vuex-ToDo/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/jackomo007/Vuex-ToDo/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/jackomo007/Vuex-ToDo/merges",
        archive_url:
          "https://api.github.com/repos/jackomo007/Vuex-ToDo/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/jackomo007/Vuex-ToDo/downloads",
        issues_url:
          "https://api.github.com/repos/jackomo007/Vuex-ToDo/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/jackomo007/Vuex-ToDo/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/jackomo007/Vuex-ToDo/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/jackomo007/Vuex-ToDo/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/jackomo007/Vuex-ToDo/labels{/name}",
        releases_url:
          "https://api.github.com/repos/jackomo007/Vuex-ToDo/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/jackomo007/Vuex-ToDo/deployments",
        created_at: "2019-08-04T23:10:45Z",
        updated_at: "2020-07-07T17:19:41Z",
        pushed_at: "2021-05-27T23:28:17Z",
        git_url: "git://github.com/jackomo007/Vuex-ToDo.git",
        ssh_url: "git@github.com:jackomo007/Vuex-ToDo.git",
        clone_url: "https://github.com/jackomo007/Vuex-ToDo.git",
        svn_url: "https://github.com/jackomo007/Vuex-ToDo",
        homepage: null,
        size: 1354,
        stargazers_count: 1,
        watchers_count: 1,
        language: "PHP",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 13,
        license: null,
        forks: 0,
        open_issues: 13,
        watchers: 1,
        default_branch: "master",
      },
    ];

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(getStarred("gremis")).resolves.toEqual(data);

    expect(axios.get).toHaveBeenCalledWith(
      `https://api.github.com/users/gremis/starred?client_id=6f0a4c8107235118423f&client_secret=404a32dd46e3df5b6c13b2da1278411185a95a46`
    );
  });

  it("fetches erroneously data from the github starred repos API", async () => {
    const errorMessage = "Network Error";

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );

    await expect(getUser("gremis")).rejects.toThrow(errorMessage);
  });
});
