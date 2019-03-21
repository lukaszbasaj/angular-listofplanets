import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'planetId'
})
export class PlanetIdPipe implements PipeTransform {
	transform(value: string): string {
		return value.replace('https://swapi.co/api/planets/', '').replace('/', '');
	}
}
