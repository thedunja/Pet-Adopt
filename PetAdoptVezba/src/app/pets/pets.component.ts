import { Component, OnInit } from '@angular/core';
import { Pet, PetList } from '../models/petList';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  petList: Pet[] = [];
  count: number = 0;
  params: any = {
    sort: "",
    sortDirection: "asc",
    filter: {
      sex: "",
      category: ""
    }
  }

  constructor(private service: PetService) { }

  ngOnInit(): void {
    this.getAllPets();
  }

  getAllPets() {
    this.service.getAll(this.params).subscribe({
      next: (search: PetList) => {
        this.petList = search.results;
        this.count = search.count;
        console.log(this.petList);
        console.log(this.petList[0].image);
      },
      error: (err) => { console.log(err) }
    })
  }

  onCategoryChanged() {
    this.ngOnInit();
  }

  onSexChanged(sex: string) {
    this.params.filter.sex = sex;
    console.log(sex);
    this.ngOnInit();
  }

  onSortParamChanged() {
    this.ngOnInit();
  }

}
