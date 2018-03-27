import { Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Cat} from './cat.class';

@Injectable()
export class CatSearchService{
	constructor(private http: Http){}
	
	searchByName(name_query: string): Observable<Cat[]>{
		return this.http.get(`app/cats/?name=${name_query}`).map(res => res.json().data as Cat[]);
	}

	searchByColor(color_query: string): Observable<Cat[]>{
		return this.http.get(`app/cats/?color=${color_query}`).map(res => res.json().data as Cat[]);
	}

}