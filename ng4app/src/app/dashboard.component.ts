import { Component, OnInit} from '@angular/core';
import {Cat } from './cat.class';
import {CatCrudService} from './cat-crud-service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
	
	cats: Cat[] = [];
	
	constructor(private catCrudService: CatCrudService){}
	
	ngOnInit(): void{
		this.catCrudService.getCats().then(res_cats => this.cats = res_cats.slice(res_cats.length-6, res_cats.length));
	}
}