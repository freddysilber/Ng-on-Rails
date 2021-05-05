import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { D3IndexComponent } from './components';
import { D3RoutingModule } from './d3-routing.module';

const COMPONENTS = [
	D3IndexComponent
];

@NgModule({
	imports: [
		CommonModule,
		D3RoutingModule
	],
	exports: [],
	declarations: [
		COMPONENTS
	],
	providers: [],
	bootstrap: [
		D3IndexComponent
	]
})
export class D3Module { }