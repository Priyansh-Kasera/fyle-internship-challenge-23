import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getUser(githubUsername: string) {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}`);
  }
  getRepo(githubUsername : string,perPage : number,pageNo : number){
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}/repos?per_page=${perPage}&page=${pageNo}`)
  }
  // implement getRepos method by referring to the documentation. Add proper types for the return type and params 
}
