import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { BehaviorSubject, observable } from 'rxjs';

//what is in video:
@Injectable({
     providedIn: 'root'
   })


  export class HttpService {
  
  
  constructor(private _http: HttpClient) {}
  
  getPets(){
    return this._http.get('/pet');
  }
  
  
  LikePetByID(id) {
    console.log("SERVICE.LikePetByID()", id);

    return this._http.get('/pet/like/' + id);
    // return this._http.get(`/pet/like/${id}`);
    
  }
  getPetById(id) {
    console.log(id);
    return this._http.get(`/pet/${id}`);
    
  }
  editPetById(id, data) {
    return this._http.put(`/pet/${id}`, data);
  }
  postPet(data) {
    return this._http.post(`/pet`, data);
  }

  deletePet(id) {
    console.log("@@HERE TO PEEK A BOOO", id); //success so far
    return this._http.delete(`/pet/${id}`);
    // return this._http.delete("/pet/" + id);
  }
}