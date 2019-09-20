import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'; //from video
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  constructor(
      private _httpService: HttpService,
      private _route: ActivatedRoute,
      private _router: Router
    ){}
  Authors;
  AuthorToEdit: any = {
    name: '',
  };
  AuthorID;
  // Implement OnInit.
  // ngOnInit will run when the component is initialized, after the constructor method.
  ngOnInit(){
    // this.getAuthorsFromService();
     this._route.params.subscribe((params: Params) => {
      let AuthorID=params['id'];
        console.log("###############");
        console.log(params['id']);
      this.selectAuthorToEdit(params['id']);
    });
  }

  goHome() {
    this._router.navigate(['/home']);
  }
 getParameter() {
   
 }

  // getAuthorsFromService(){
  //     let observable = this._httpService.getAuthors();
  //     observable.subscribe(data => {
  //       this.Authors = data;
  //     // console.log("Did we really Get our Authors from components?????!", data);
  //     });
  // }
  selectAuthorToEdit(id){
    console.log("AuthorID: ", id)
    const obs = this._httpService.getAuthorById(id);
    obs.subscribe(data => {
      console.log(data);
      // this.Author = data;
      this.AuthorToEdit = data;
    });
  }  
  // getAuthorById(id) {
  //   const obs = this._httpService.getAuthorById(id);
  //   obs.subscribe(data => {
  //     console.log(data);
  //     // this.Author = data;
  //     // this.AuthorDetail = data;
  //   });
  // } 

  editAuthor(id) {
    // console.log(this.AuthorToEdit);
    const obs = this._httpService.editAuthorById(id, this.AuthorToEdit);
    obs.subscribe((newlyCreatedAuthor: any) => {
      console.log(newlyCreatedAuthor);
      this.goHome();
      // this.getAuthors();
    });
  }

}