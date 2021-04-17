import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent, UsersComponent } from './components';

const ROUTES: Routes = [
	{
		path: '',
		component: DashboardComponent,
	},
	{
		path: 'api/users',
		component: UsersComponent
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: ''
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(ROUTES)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }
