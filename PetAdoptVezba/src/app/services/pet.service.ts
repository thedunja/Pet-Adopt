import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, TemplateRef } from '@angular/core';
import { Pet, PetList } from '../models/petList';
import { Observable, map } from 'rxjs';
import { Adoption } from '../models/adoption';

const baseUrl = "http://localhost:3000/api/pets";

@Injectable({
	providedIn: 'root'
})

export class PetService {

	toasts: any[] = [];

	constructor(private http: HttpClient) { }

	getAll(params?: any): Observable<PetList> {

		let options: any = {};

		if (params) {
			options = {
				params: new HttpParams()
					.set('sort', params.sort || "")
					.set('sortDirection', params.sortDirection || "")
					.set('page', params.page && params.page.toString() || "")
					.set('pageSize', params.pageSize && params.pageSize.toString() || "")
					.set('filter', params.filter && JSON.stringify(params.filter) || "")
			}
		}

		return this.http.get(baseUrl, options).pipe(map(
			(elem: any) => { return new PetList(elem); }
		));
	}

	getSpecificPet(id: number): Observable<Pet> {
		return this.http.get(baseUrl + "/" + id).pipe(map(
			(elem: any) => { return new Pet(elem); }
		));
	}

	addAdoption(newAdoption: Adoption): Observable<any> {
		return this.http.post("http://localhost:3000/api/adoptions/", newAdoption);
	}

	getAdoptionList(): Observable<Adoption[]> {
		return this.http.get("http://localhost:3000/api/adoptions").pipe(map(
			(elem: any) => { return elem.results && elem.results.map((elem: any) => new Adoption(elem)) || [] }
		))
	}

	deleteAdoptionRequest(id: number) {
		return this.http.delete("http://localhost:3000/api/adoptions/" + id);
	  }
}
