import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { BehaviorSubject, observable } from 'rxjs';

//what is in video:
@Injectable({
     providedIn: 'root'
   })
  export class HttpService {
        constructor(private _http: HttpClient) {
    }
  getAuthors(){
    return this._http.get('/author');
  }
  justclickthefuknbutton(data){
    return this._http.get('/author', data);
  }


  getAuthorById(id) {
    
    return this._http.get(`/author/${id}`);
    
  }
  editAuthorById(id, data) {
    return this._http.put(`/author/${id}`, data);
  }
  postAuthor(data) {
    return this._http.post(`/author`, data);
  }

  deleteAuthor(id) {
    return this._http.delete(`/author/${id}`);
  }
}