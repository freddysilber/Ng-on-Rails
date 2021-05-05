import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { D3IndexComponent } from './components';

const ROUTES: Routes = [
	{
		path: '',
		component: D3IndexComponent
	}
]

@NgModule({
	imports: [
		RouterModule.forChild(ROUTES)
	],
	exports: [
		RouterModule
	],
	declarations: [],
	providers: []
})
export class D3RoutingModule { }