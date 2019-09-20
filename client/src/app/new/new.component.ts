import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'; //from video
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(
      private _httpService: HttpService,
      private _route: ActivatedRoute,
      private _router: Router
    ) { 
    
  }
  Authors;
  newAuthor: any = {
    name: ''
  };
  ngOnInit() {
  }
  goHome() {
    this._router.navigate(['/home']);
  }
  createAuthor() {
    console.log(this.newAuthor);
    const obs = this._httpService.postAuthor(this.newAuthor);
    obs.subscribe((newlyCreatedAuthor: any) => {
      console.log(newlyCreatedAuthor);
      this.goHome();
    });
  }
}
