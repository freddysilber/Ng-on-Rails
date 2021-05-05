import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
	selector: 'app-d3-index',
	templateUrl: 'd3.component.html'
})
export class D3IndexComponent implements OnInit, AfterViewInit {

	ngOnInit() {
		console.log('hello D3');
	}

	ngAfterViewInit() {
		this.buildSampleChart();
	}

	private buildSampleChart() {
		d3.select('d3Container').append('svg')
	}
}