import { Component, Input, OnInit } from '@angular/core';
import { Cat} from './cat.class';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import { CatCrudService} from './cat-crud-service';
import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'cat-detail',
	templateUrl: './cat-detail.component.html',
	styleUrls: ['./cat-detail.component.css']
})

export class CatDetailComponent implements OnInit{
	
	@Input() cat: Cat;
	
	constructor(private catCrudService: CatCrudService, private activatedRoute: ActivatedRoute, private location: Location){}

	ngOnInit(): void{
		this.activatedRoute.params.switchMap((params: Params) => this.catCrudService.getCat(+params['id'])).subscribe(res_cat => this.cat = res_cat);
	}

	goBack(): void{
		this.location.back();
	}

	saveCatDetails(): void{
		this.catCrudService.updateCat(this.cat).then(()=> this.goBack());
	}
	
}