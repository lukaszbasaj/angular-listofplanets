import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatInputModule, MatFormFieldModule, MatPaginatorModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatTableModule } from '@angular/material/table';
import { AppComponent } from './app.component';
import { PlanetsBrowserComponent } from './planets/planets-browser/planets-browser.component';
import { PlanetsDetailsComponent } from './planets/planets-details/planets-details.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataService } from './services/planets.service';
import { PlanetIdPipe } from './services/planedId.pipe';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { ToastrModule } from 'ngx-toastr';
import { ErrorHandlingInterceptor } from './core/error-handling.interceptor';
import { MessageService } from './services/message.service';

@NgModule({
	declarations: [
		AppComponent,
		PlanetsBrowserComponent,
		PlanetsDetailsComponent,
		PlanetIdPipe,
		PageNotFoundComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		MatFormFieldModule,
		MatButtonModule,
		MatTableModule,
		MatPaginatorModule,
		MatInputModule,
		BrowserAnimationsModule,
		HttpClientModule,
		ToastrModule.forRoot()
	],
	providers: [
		DataService,
		MessageService,
		{ provide: HTTP_INTERCEPTORS, useClass: ErrorHandlingInterceptor, multi: true }
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
