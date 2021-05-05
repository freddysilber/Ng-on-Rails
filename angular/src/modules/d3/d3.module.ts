import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { D3IndexComponent } from './components';

const COMPONENTS = [
	D3IndexComponent
];

@NgModule({
	imports: [
		CommonModule
	],
	exports: [],
	declarations: [
		COMPONENTS
	],
	providers: []
})
export class D3Module { }