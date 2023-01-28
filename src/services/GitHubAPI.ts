import axios from 'axios';

import { ISearchUserResponse, IResultSearch, IUser, IRepos } from '../types/interfaces';

class GitHubAPI {
  private api;
  private baseURL = 'https://api.github.com/'
  constructor() {
    this.api = axios.create({ baseURL: this.baseURL })
  }

  private errorFormated(error: unknown, message: string) {
    const err = error as Error;
    return `Error in ${message} => ${err.message}`;
  }

  public async searchUsers(name: string, page = 1): Promise<IResultSearch> {
    try {
      const usersResponse = await this.api.get(`search/users?q=${name}&page=${page}`);
      if (usersResponse.status != 200) {
        return { users: [], count: 0 }
      }

      const data: ISearchUserResponse = usersResponse.data;

      const { items: users, total_count: count } = data;

      return { users, count };
    } catch (error) {
      console.error(this.errorFormated(error, 'search users'));
      return { users: [], count: 0 }
    }

  }

  public async getUser(userName: string): Promise<IUser | null> {
    try {
      const userResponse = await this.api.get(`/users/${userName}`);
      if (userResponse.status != 200) {
        return null;
      }

      const user: IUser = userResponse.data;

      return user;
    } catch (error) {
      console.error(this.errorFormated(error, 'get user'));
      return null;
    }

  }

  public async getRepos(userName: string): Promise<IRepos[]> {
    try {
      const userResponse = await this.api.get(`/users/${userName}/repos`);
      if (userResponse.status != 200) {
        return [];
      }

      const repos: IRepos[] = userResponse.data;

      return repos;

    } catch (error) {
      console.error(this.errorFormated(error, 'get repositories'));
      return [];
    }

  }

}


export const gitHubApi = new GitHubAPI();