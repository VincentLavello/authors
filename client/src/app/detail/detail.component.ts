import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'; //from video
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  constructor(
      private _httpService: HttpService,
      private _route: ActivatedRoute,
      private _router: Router
    ){}
  viewThisPet: any = { name: '', type:'', desc: '', skill1: '', skill2: '', skill3: '', likes: 0 };
  // ngOnInit will run when the component is initialized, after the constructor method.
  ngOnInit(){
    // this.getPetsFromService();
    this._route.params.subscribe((params: Params) => {
      console.log("#### VIEW ####", params['id']);
      this.ViewPet(params['id']);
    });
  }
  goHome() {
    this._router.navigate(['/home']);
  }
LikePet(id) {
     console.log("Likes: ", id);
    const obs = this._httpService.LikePetByID(id);
    obs.subscribe(data => {
      this.viewThisPet= data;
      console.log(data);
    }); 
}
  ViewPet(id){
    console.log(id);
    const obs = this._httpService.getPetById(id);
    obs.subscribe(data => {
      console.log(data);
      this.viewThisPet = data;
      console.log("view PET: ", this.viewThisPet);
    });
  }
  DeletePet(id): void {
    console.log("home.deletepet", id);
    const obs = this._httpService.deletePet(id);
    obs.subscribe();
    // console.log(id); //successful to here
    this.goHome();
    // obs.subscribe();
  }
}  