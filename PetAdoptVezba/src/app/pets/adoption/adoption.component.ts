import { Component, OnInit } from '@angular/core';
import { Adoption, AdoptionList } from 'src/app/models/adoption';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-adoption',
  templateUrl: './adoption.component.html',
  styleUrls: ['./adoption.component.css']
})
export class AdoptionComponent implements OnInit {

  adoptionList: Adoption[] = [];
  
  constructor(private service: PetService) { }

  ngOnInit(): void {
    this.getAdoptionList();
    console.log(this.adoptionList);
  }

  getAdoptionList() {
    this.service.getAdoptionList().subscribe ({
      next: (results: Adoption[]) => { this.adoptionList = results},
      error: (err) => { console.log(err) }
    })
  }

  approveAdoption (id: number) {
    this.service.deleteAdoptionRequest(id).subscribe({
      next: (response: any) => {
        this.getAdoptionList();
      } 
    });
  }

}
