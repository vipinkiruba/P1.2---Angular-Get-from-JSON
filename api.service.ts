import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  postEmpdetails: any;

  constructor(private http : HttpClient) { }

postemployee(data : any){
  return this.http.post<any>("http://localhost:3000/posts", data)
  .pipe(map((res:any)=>{
     return res; 
    }))
}

getemployee(){
  return this.http.get<any>("http://localhost:3000/posts")
  .pipe(map((res:any)=>{
     return res; 
    }))
}

updateemployee(data : any){
  return this.http.put<any>("http://localhost:3000/posts", data)
  .pipe(map((res:any)=>{
     return res; 
    }))
}

deleteemployee(data : any){
  return this.http.delete<any>("http://localhost:3000/posts", data)
  .pipe(map((res:any)=>{
     return res; 
    }))
}

}
