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
  Pets;
  PetToEdit: any = { name: '', type:'', desc: '', skill1: '', skill2: '', skill3: '' };
  PetID;
  // Implement OnInit.
  // ngOnInit will run when the component is initialized, after the constructor method.
  ngOnInit(){
    // this.getPetsFromService();
    this._route.params.subscribe((params: Params) => {
      console.log("#### EDIT ####", params['id']);
          // let PetID=params['id'];
      this.selectPetToEdit(params['id']);
    });
  }

  goHome() {
    this._router.navigate(['/home']);
  }


  selectPetToEdit(id){
    console.log(id);
    const obs = this._httpService.getPetById(id);
    obs.subscribe(data => {
      console.log(data);
      // this.Pet = data;
      this.PetToEdit = data;
      console.log("EDIT PET: ", this.PetToEdit);
    });
  }  

  editPet(id) {
    // console.log(this.PetToEdit);
    const obs = this._httpService.editPetById(id, this.PetToEdit);
    obs.subscribe((newlyCreatedPet: any) => {
      console.log(newlyCreatedPet);
      this.goHome();
      // this.getPets();
    });
  }

}