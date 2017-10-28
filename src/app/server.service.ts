import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class ServerService {
  constructor(private http: Http) {}
  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'apllication/json'});
    return this.http.post('https://udemy-ng-http-4a58a.firebaseio.com/data.json',
       servers,
       {headers: headers});
  }

}
