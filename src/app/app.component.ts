import { Component, OnInit } from '@angular/core';
import { DataService } from './services/planets.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	constructor(private dataServices: DataService) {}

	ngOnInit() {
		// Fetch data all from multi-page API
		this.dataServices.getAllPlanets().subscribe((responseList) => {
			const allPlanets = [
				...responseList[0].results,
				...responseList[1].results,
				...responseList[2].results,
				...responseList[3].results,
				...responseList[4].results,
				...responseList[5].results,
				...responseList[6].results
			];
			// load planets data to services observable
			this.dataServices.updateAllPlanetsData(allPlanets);
		});
	}
}
