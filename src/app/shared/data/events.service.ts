import { Injectable } from '@angular/core';
import {Eventy} from '../../models/eventy';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
   url:string = "http://localhost:3000/events/"
   
    constructor(private http :  HttpClient) { }
   public getAllEvents(){

//get all
       return this.http.get<Eventy[]>(this.url);
  }
 // get by id
  public getEventById(id:number){
     //conditions
      return this.http.get<Eventy>(this.url+id);
  }
   /// post  
   public   AddEvent(event:Eventy){
    return this.http.post<Eventy>(this.url , event)
   }
//  delete 
  public  delete(id:number){
    return this.http.delete(this.url+id)
  }
  //update

  public updateee(id:number ,  event:Eventy){
    return this.http.put<Eventy>(this.url+id , event)
  }
/*
public addEvent(newEvent: Eventy): void {
  this.url.add(newEvent);
}*/

}
