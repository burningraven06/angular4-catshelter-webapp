import { Injectable } from '@angular/core';
import { Cat} from './cat.class';
import { ALLCATS} from './cat-data';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CatCrudService{
	private catsUrl ='api/cats';

	constructor(private http: Http){}

	getCats(): Promise<Cat[]>{
		// return Promise.resolve(ALLCATS);
		return this.http.get(this.catsUrl).toPromise().then(res => res.json().data as Cat[]).catch(this.catchError);
	}

	getCat(id: number): Promise<Cat>{
		// return this.getCats().then(res_cats => res_cats.find(cat => cat.id === id))
		const getCatByIDURL = `${this.catsUrl}/${id}`;
		return this.http.get(getCatByIDURL).toPromise().then(res => res.json().data as Cat).catch(this.catchError);
	}

	private headers = new Headers({'Content-Type': 'application/json'});

	updateCat(cat: Cat): Promise<Cat>{
		const updateCatByURL = `${this.catsUrl}/${cat.id}`;
		return this.http.put(updateCatByURL, JSON.stringify(cat), {headers: this.headers}).toPromise().then(()=> cat).catch(this.catchError);
	}

	createCat(cat: Cat): Promise<Cat>{
		return this.http.post(this.catsUrl, JSON.stringify(cat), {headers: this.headers}).toPromise().then(res => res.json().data as Cat).catch(this.catchError);
	}

	deleteCat(id: number): Promise<void>{
		const deleteCatByIDURL = `${this.catsUrl}/${id}`;
		return this.http.delete(deleteCatByIDURL, {headers: this.headers}).toPromise().then(() => null).catch(this.catchError);
	}

	private catchError(error: any): Promise<any>{
		console.error('Error: ', error);
		return Promise.reject(error.message);
	}
	
}