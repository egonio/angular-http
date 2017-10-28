import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServerService {
  constructor(private http: Http) {}

  // post request
  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'apllication/json'});
    // return this.http.post('https://udemy-ng-http-4a58a.firebaseio.com/data.json',
    //    servers,
    //    {headers: headers});

    return this.http.put('https://udemy-ng-http-4a58a.firebaseio.com/data.json',
    servers,
    {headers: headers});
  }

  // get request
  getServers() {
    return this.http.get('https://udemy-ng-http-4a58a.firebaseio.com/data.json')
      .map(
        (response: Response) => {
          const data = response.json();
          for (const server of data) {
            server.name = 'FETCHED_' + server.name;
          }
          return data;
        }
      ).catch( // catching error in the html
         (error: Response) => {
          //  console.log(error);
           return Observable.throw('Something went Wrong'); //must return an error
         }
      );
  }

  getAppName(){
    return this.http.get('https://udemy-ng-http-4a58a.firebaseio.com/appName.json')
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

}
