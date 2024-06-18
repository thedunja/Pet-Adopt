import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Adoption } from 'src/app/models/adoption';
import { Pet } from 'src/app/models/petList';
import { PetService } from 'src/app/services/pet.service';
import { ToastService } from 'src/app/services/toast.service';


@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {

  pet: Pet = new Pet();
  petId: number = NaN;
  adoption: Adoption = new Adoption();

  constructor(private service: PetService,
    private route: ActivatedRoute,
    private router: Router,
    public toast: ToastService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.petId = params['id'];
      this.getPet();
    });
  }

  getPet() {
    this.service.getSpecificPet(this.petId).subscribe({
      next: (response: Pet) => {
        this.pet = response;
        console.log(this.pet);
        },
      error: (err) => { console.log(err) }
    })
  }

  submitAdoption() {
    if (!this.adoption.name || !this.adoption.contact) {
      this.toast.show("Please fill in the form", { classname: 'bg-danger text-light', delay: 5000 })
      return;
    }
    this.adoption.petId = this.pet._id
    this.adoption.petName = this.pet.name;
    console.log(this.adoption);
    this.service.addAdoption(this.adoption).subscribe(x => {
    }, err => {
      this.toast.show("Error",  { classname: 'bg-danger text-light', delay: 10000 })
    })
    this.router.navigate(['adoption']);
  }

  

}
