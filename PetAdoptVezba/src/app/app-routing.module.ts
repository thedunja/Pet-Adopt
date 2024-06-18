import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsComponent } from './pets/pets.component';
import { HomeComponent } from './core/home/home.component';
import { AdoptionComponent } from './pets/adoption/adoption.component';
import { PetDetailComponent } from './pets/pet-detail/pet-detail.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'pets', component: PetsComponent},
  {path: 'pets/:id', component: PetDetailComponent},
  {path: 'adoption', component: AdoptionComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full' }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
