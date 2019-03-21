import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';
import 'rxjs/add/observable/forkJoin';

import { PlanetResponse } from '../planets/planets-browser/model/planets.model';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DataService {
	private readonly baseUrl = 'https://swapi.co/api/';

	// declare planets data observable
	private dataSource = new BehaviorSubject([]);
	currentData = this.dataSource.asObservable();

	// update planets data observable
	changeData(data: any[]) {
		this.dataSource.next(data);
	}

	constructor(private http: HttpClient) {}

	// get planets from single page API
	getPlanets(page?: number): Observable<PlanetResponse> {
		const options = {
			params: {}
		};
		const link = `${this.baseUrl}planets/`;
		if (page) {
			options.params = { page };
		}

		return this.http.get<PlanetResponse>(link, options);
	}

	// get planets from all pages API
	getAllPlanets(): Observable<any[]> {
		let response1 = this.getPlanets();
		let response2 = this.getPlanets(2);
		let response3 = this.getPlanets(3);
		let response4 = this.getPlanets(4);
		let response5 = this.getPlanets(5);
		let response6 = this.getPlanets(6);
		let response7 = this.getPlanets(7);

		return Observable.forkJoin([ response1, response2, response3, response4, response5, response6, response7 ]);
	}

	// get single planet
	getPlanet(id) {
		return this.http.get(`https://swapi.co/api/planets/${id}`);
	}
}
