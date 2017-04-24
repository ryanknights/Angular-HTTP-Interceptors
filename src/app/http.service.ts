import { Injectable } from '@angular/core';
import { Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/finally';

@Injectable()
export class HttpService extends Http {

  constructor(backend: XHRBackend, options: RequestOptions) { 
  	super(backend, options);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    console.log('Before request');
    let interceptedOptions = this.setOptions(options);
  	return super.request(url,interceptedOptions)
  		.do(this.successRequest, this.errorRequest)
  		.finally(this.afterRequest)
  		.catch(this.catchError(this));
  }

  private setOptions(options: RequestOptionsArgs) {
    let token = 'a_jwt_token';
    if (!options) {
      options = { headers: new Headers() };
    }
    options.headers.set('Authorization', `Bearer ${token}`);
    return options;
  }

  private successRequest (response) {
    console.log('Successful request');
  }

  private errorRequest (response) {
    console.log('Error request');
    switch (response.status) {
      case 401: 
        // Unauthorized
      break;
      case 403:
        // Forbidden
      break;
      case 404:
        // Not Found
      break;
      default:
      break;
    }
  }

  private afterRequest () {
    console.log('Ended request');
  }

  private catchError(self: HttpService) {
  	return (res: Response) => {
  		return Observable.throw(res);
  	}
  }
}
