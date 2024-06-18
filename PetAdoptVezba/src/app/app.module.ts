import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetsComponent } from './pets/pets.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { PetComponent } from './pets/pet/pet.component';
import { PetDetailComponent } from './pets/pet-detail/pet-detail.component';
import { HomeComponent } from './core/home/home.component';
import { AdoptionComponent } from './pets/adoption/adoption.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ToastComponent } from './pets/toast/toast.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PetsComponent,
    AdoptionComponent,
    NavbarComponent,
    PetComponent,
    PetDetailComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  schemas:  [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
