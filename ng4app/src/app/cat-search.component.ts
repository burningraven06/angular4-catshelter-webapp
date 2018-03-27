import {Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import { Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { CatSearchService} from './cat-search.service';
import { Cat} from './cat.class'

@Component({
	selector: 'cat-search',
	templateUrl: './cat-search.component.html',
	styleUrls: ['./cat-search.component.css']
})

export class CatSearchComponent implements OnInit{
	catsByName: Observable <Cat[]>;
	catsByColor: Observable <Cat[]>;

	private searchTerms = new Subject<string>();

	constructor(private catSearchService: CatSearchService, private router: Router){}

	searchByName(term : string): void{
		this.searchTerms.next(term);
	}

	searchByColor(term: string): void{
		this.searchTerms.next(term);
	}
	searchResultsByName(){
		this.catsByName = this.searchTerms.debounceTime(300).distinctUntilChanged().switchMap(term => term? this.catSearchService.searchByName(term): Observable.of<Cat[]>([]));
	}

	searchResultsByColor(){
		this.catsByColor = this.searchTerms.debounceTime(300).distinctUntilChanged().switchMap(term => term? this.catSearchService.searchByColor(term): Observable.of<Cat[]>([]))

	}

	ngOnInit(): void{
		this.searchResultsByColor();
		this.searchResultsByName();
	}

	goToDetail(cat: Cat): void{
		let link = ['/cat-info', cat.id];
		this.router.navigate(link);
	}

}