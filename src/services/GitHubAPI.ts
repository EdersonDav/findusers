import axios from 'axios';

import { ISearchUserResponse, IResultSearch, IUser, IRepos } from '../types/interfaces';

class GitHubAPI {
  private api;
  private baseURL = 'https://api.github.com/'
  constructor() {
    this.api = axios.create({ baseURL: this.baseURL })
  }

  public async searchUsers(name: string, page = 1): Promise<IResultSearch> {
    const usersResponse = await this.api.get(`search/users?q=${name}&page=${page}`);
    if (usersResponse.status != 200) {
      return { users: [], count: 0 }
    }

    const data: ISearchUserResponse = usersResponse.data;

    const { items: users, total_count: count } = data;

    return { users, count };
  }

  public async getUser(userName: string): Promise<IUser | null> {
    const userResponse = await this.api.get(`/users/${userName}`);
    if (userResponse.status != 200) {
      return null;
    }

    const user: IUser = userResponse.data;

    return user;
  }

  public async getRepos(userName: string): Promise<IRepos[]> {
    const userResponse = await this.api.get(`/users/${userName}/repos`);
    if (userResponse.status != 200) {
      return [];
    }

    const repos: IRepos[] = userResponse.data;

    return repos;
  }

}


export const gitHubApi = new GitHubAPI();