import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

const DATA = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
@Component({
	selector: 'app-d3-index',
	templateUrl: 'd3.component.html'
})
export class D3IndexComponent implements OnInit, AfterViewInit {

	private _d3Container;

	ngOnInit() {
		console.log(DATA);
	}

	ngAfterViewInit() {
		this.buildSampleChart();
	}

	private buildSampleChart() {
		d3.select('.d3Container')
			.selectAll('p')
			.data(DATA)
			.enter()
			.append('p')
			.text((d) => d)
	}
}