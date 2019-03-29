import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/planets.service';

@Component({
	selector: 'app-planets-details',
	templateUrl: './planets-details.component.html',
	styleUrls: [ './planets-details.component.scss' ]
})
export class PlanetsDetailsComponent {
	id: string;
	planet: Object;

	constructor(private route: ActivatedRoute, private dataServices: DataService) {}

	ngOnInit() {
		// get id from URL
		this.id = this.route.snapshot.paramMap.get('id');

		// fetch single planet data
		this.dataServices.getPlanet(this.id).subscribe((responseData) => {
			this.planet = responseData;
		});
	}
}
