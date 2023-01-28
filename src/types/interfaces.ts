export interface ISearchUserResponse {
  total_count: number;
  items: IUsersResult[];
}

export interface IUsersResult {
  login: string;
  id: number;
  avatar_url: string;
  url: string;
  html_url: string;
  repos_url: string;
}

export interface IResultSearch {
  count: number;
  users: IUsersResult[];
}

export interface IUser extends IUsersResult {
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  bio: string;
  twitter_username: string;
  public_repos: number;
  followers: number;
  following: number;
}

export interface IRepos {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  created_at: string;
  updated_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  language: string;
}
