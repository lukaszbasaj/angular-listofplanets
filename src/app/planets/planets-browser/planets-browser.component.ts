import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DataService } from '../../services/planets.service';
import { ActivatedRoute } from '@angular/router';
import { Planet } from './model/planets.model';

@Component({
	selector: 'app-planets-browser',
	styleUrls: [ 'planets-browser.component.scss' ],
	templateUrl: 'planets-browser.component.html'
})
export class PlanetsBrowserComponent {
	displayedColumns = [ 'name', 'button' ];
	dataSource = new MatTableDataSource<Planet>([]);

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	constructor(private data: DataService, private route: ActivatedRoute) {}

	ngOnInit() {
		// subscribe to planets data and load it to Material data table
		this.data.currentData.subscribe((data) => {
			this.dataSource.data = data;
			this.dataSource.filterPredicate = (data: Planet, filter: string) =>
				data.name.trim().toLowerCase().indexOf(filter) != -1;
		});
	}

	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
	}

	applyFilter(filterValue: string) {
		filterValue = filterValue.trim();
		filterValue = filterValue.toLowerCase();
		this.dataSource.filter = filterValue;
	}
}
