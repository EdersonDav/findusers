import axios from 'axios';

import { ISearchUserResponse, IResultSearch, IUser, IRepos } from '../types/interfaces';
interface ICacheUserSearch {
  [key: string]: IResultSearch;
}


class GitHubAPI {
  private api;
  private baseURL = 'https://api.github.com/';
  private cacheUserSearch: ICacheUserSearch = {};
  private internPage = 1;

  constructor() {
    this.api = axios.create({ baseURL: this.baseURL })
  }

  private errorFormated(error: unknown, message: string) {
    const err = error as Error;
    return `Error in ${message} => ${err.message}`;
  }

  private getUrl(name: string, page: number) {
    return `search/users?q=${name}&page=${page}`
  }

  private setCache(results: IResultSearch, name: string): void {
    const count = results.count;
    const resultCount = results.users.length;
    const perPage = Math.ceil(resultCount / 20);
    let countSlice = 0;

    let index = Object.keys(this.cacheUserSearch).length;

    for (index; index < perPage + index; index++) {
      const sliceNumber = countSlice === 0 ? 0 : countSlice * 20;
      this.cacheUserSearch[this.getUrl(name, index + 1)] = {
        count,
        users: results.users.slice(sliceNumber, 20),
      }
      countSlice++
    }
  }

  // private getCache() { }

  public async searchUsers(name: string, page: number): Promise<IResultSearch> {
    try {
      //limit 30
      const usersResponse = await this.api.get(`${this.getUrl(name, this.internPage)}&per_page=100`);
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

  public async getRepos(userName: string, page: number): Promise<IRepos[]> {
    try {
      const userResponse = await this.api.get(`/users/${userName}/repos?page=${page}&per_page=10`);
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