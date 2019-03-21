import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetsBrowserComponent } from './planets/planets-browser/planets-browser.component';
import { PlanetsDetailsComponent } from './planets/planets-details/planets-details.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
	{ path: '', component: PlanetsBrowserComponent },
	{ path: 'details/:id', component: PlanetsDetailsComponent },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
