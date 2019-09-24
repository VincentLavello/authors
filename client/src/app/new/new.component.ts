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
  Pets;
  newPet: any =    {
    "name": "",
    "type": "",
    "desc": "",
    "skill1": "",
    "skill2": "",
    "skill3": ""
}
  ngOnInit() {
  }
  goHome() {
    this._router.navigate(['/home']);
  }
  createPet() {
    console.log(this.newPet);
    const obs = this._httpService.postPet(this.newPet);
    obs.subscribe((newlyCreatedPet: any) => {
      console.log(newlyCreatedPet);
      this.goHome();
    });
  }
}
