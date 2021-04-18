import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UsersService } from './providers/users.service';
import {
	DashboardComponent,
	UsersComponent
} from './components';

const COMPONENTS = [
	UsersComponent,
	DashboardComponent,
];

@NgModule({
	declarations: [
		AppComponent,
		COMPONENTS,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		MatTabsModule,
		MatButtonModule,
		AppRoutingModule,
		BrowserAnimationsModule,
	],
	providers: [
		UsersService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
