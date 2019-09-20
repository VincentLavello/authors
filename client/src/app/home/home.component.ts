import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'; //from video
import { ActivatedRoute, Params, Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router ,
    private _httpService: HttpService 
    
    ) { }
   Authors;
    ngOnInit(){
      this.getAuthorsFromService();
    }
    deleteAuthor(id) {
      console.log(id);
      const obs = this._httpService.deleteAuthor(id);
      obs.subscribe(data => {
        this.getAuthorsFromService();
      });
      
    }
    selectAuthorToEdit(id){
      const obs = this._httpService.getAuthorById(id);
      obs.subscribe(data => {
        console.log(data);
        // this.Author = data;
        // this.AuthorToEdit = data;
      });
    }  
    getAuthorsFromService(){
        let observable = this._httpService.getAuthors();
        observable.subscribe(data => {
          this.Authors = data;
        console.log("Did we really Get our Authors from components?????!", data);
        });
    }

}
