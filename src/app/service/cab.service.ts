import { Injectable, OnInit } from "@angular/core";
import { Http, Response, RequestOptions, Headers  } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { CabBooking } from "../models/cab.booking";
@Injectable()
export class CabService implements OnInit{

  baseUrl: string = "http://blrlw6631.asia.manh.com:3000"
  baseUri: string = "http://blrlw6631.asia.manh.com:9090"
  bookCabUrl: string="/servers/bookCab"
  constructor(public http: Http) {
  }
  ngOnInit()
  {
    
  }

  //for getting the data for the google charts for reading the cab data
  getData() {
    return this.http.get(this.baseUrl+'/orderOrchestration').map(res => res.json());
  }

  //For getting the data of the employees
  getEmployeeData():any
  {
    return this.http.get(this.baseUri+'/servers/getEmps').map(res => res.json());    
  }
  //Getting the data of the routes of the cab
  getRouteData()
  {
    return this.http.get(this.baseUrl+'/routeDetails').map(res => res.json());
    
  }
  getBookings():any
  {
    return this.http.get('http://blrlw6631.asia.manh.com:9090/servers/getCurrentBookings').map(this.extractData).catch(this.handleError); 
  }  

  private extractData(response: Response) {
    let body = response.json();
    if(response.status < 200 || response.status >= 300) {
      //throw new Error('This request has failed ' + body.status);
      console.log("error caught")
    } 
    // If everything went fine, return the response
    else {
      return body || {};
    }
    
    } 

    private handleError(error:any){
      console.log(error+"resolve this");
      return error;
    }


    updateCab(body: Object): Observable<any> {
      //let bodyString = JSON.stringify(body); // Stringify payload
      let headers: Headers = new Headers({'content-type':'application/json'});
      let options = new RequestOptions({ 'headers': headers }); // Create a request option
      
      return this.http.post(this.baseUri+'/servers/updateCab', body, options)
      .map((res:Response) => res.json()) // ...using post request
       // ...and calling .json() on the response to return data
      // .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
      }

  bookCab(body: Object): Observable<CabBooking[]> {
    //let bodyString = JSON.stringify(body); // Stringify payload
    let headers: Headers = new Headers({'content-type':'application/json'});
    let options = new RequestOptions({ 'headers': headers }); // Create a request option
    
    return this.http.post(this.baseUri+this.bookCabUrl, body, options) // ...using post request
    .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
    // .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }

    

}