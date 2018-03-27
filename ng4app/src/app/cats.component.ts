import { Component, OnInit } from '@angular/core';
import { Cat} from './cat.class';
import { CatCrudService} from './cat-crud-service';
import { Router} from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})

export class CatsComponent implements OnInit{

  constructor(private catCrudService: CatCrudService, private router: Router, private formBuilder: FormBuilder){}

  cats: Cat[];
  selectedCat: Cat;
  displayCatAddForm= false;
  //cats = CATS;

  fetchAllCats(): void{
  	//this.cats = this.catCrudService.getCats();
  	this.catCrudService.getCats().then(res_cats => this.cats = res_cats);
  }

  onSelect(cat: Cat): void{
  	this.selectedCat = cat;
  }

  goToCatInfo(): void{
  	this.router.navigate(['/cat-info', this.selectedCat.id]);
  }

  showCatAddForm(){
    this.displayCatAddForm=true;
  }
  hideCatAddForm(){
    this.displayCatAddForm=false;
  }

  public addCatForm: FormGroup;
  public submitted: boolean;

  saveCat(cat: Cat, isValid: boolean): void{
    if (isValid){
      this.catCrudService.createCat(cat).then(cat =>{
        this.cats.push(cat);
        this.selectedCat = null;
      });
      this.displayCatAddForm=false;
      this.initializeBlankForm();
    }
    this.submitted = true;
  }

  removeCat(cat: Cat): void{
    this.catCrudService.deleteCat(cat.id).then(()=> {
      this.cats = this.cats.filter(c => c!==cat);
      if (this.selectedCat === cat) { this.selectedCat = null;}
    });
  }

  initializeBlankForm(){
    this.addCatForm = this.formBuilder.group({
      name: ["", [<any>Validators.required, <any>Validators.minLength(3)]],
      color: ["", [<any>Validators.required, <any>Validators.minLength(3)]],
      found_location: ["", [<any>Validators.required]],
      found_by: ["", [<any>Validators.required, <any>Validators.minLength(3)]],
      isHealthy: ["", [<any>Validators.required]]
    });
  }

  ngOnInit(): void{
  	this.fetchAllCats();
    this.initializeBlankForm();
  }
}
