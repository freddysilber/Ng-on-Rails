import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
	selector: 'app-d3-index',
	templateUrl: 'd3.component.html'
})
export class D3IndexComponent implements OnInit, AfterViewInit {

	ngOnInit() { }

	ngAfterViewInit() {
		this.buildSampleChart();
	}

	private buildSampleChart() {
		d3.selectAll('.d3Container')
			.append('h1')
			.text('hello d3')

		// d3.selectAll('p')
		// 	.attr('class', 'graf')
		// 	.style('color', 'red');
	}
}