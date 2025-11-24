import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feedback } from '../../models/feedback';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {


  //s1 url backkend  
   url:string = "http://localhost:3000/feedback/"
   //s2 inject hhtp clientserver 
  // model class feedback
  constructor(private HttpClient:HttpClient) {
  } 
  public  createFeedback (feedback : Feedback):Observable<Feedback>{
    return this.HttpClient.post<Feedback>(this.url, feedback); 
  }

  public GETalllFeadbcak():Observable<Feedback[]>{
    return this.HttpClient.get<Feedback[]>(this.url );
  }

   public deleteone(id:number){
    return this.HttpClient.delete(this.url+id)
   }
   public update (feedback:Feedback){
    return this.HttpClient.put(this.url+feedback , feedback)
   }
 /// get by id 
    public getFeedbackByEventId(eventId: number): Observable<Feedback[]> {
    return this.HttpClient.get<Feedback[]>(`${this.url}?eventId=${eventId}`);
  }


  //aadd

   // Add comment for specific event
  public addCommentForEvent(eventId: number, comment: string): Observable<Feedback> {
    const feedback: Feedback = {
      eventId: eventId,
      comment: comment,
      // Add other required properties based on your Feedback model
      id: 0, // JSON server will auto-generate this
      date: new Date().toISOString(),
    };
    return this.HttpClient.post<Feedback>(this.url, feedback);
  }
}
