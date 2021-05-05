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
		path: 'api/users/:id',
		component: UsersComponent
	},
	{
		path: 'd3',
		loadChildren: () => import('../modules/d3/d3.module').then(m => m.D3Module)
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
