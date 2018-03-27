import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';
import { AppRoutes} from './app.routes';

import { AppComponent } from './app.component';
import {AppNavbarComponent} from './app-navbar.component';
import { HomeComponent} from './home.component';
import { CatsComponent} from './cats.component';
import { CatDetailComponent } from './cat-detail.component';
import { CatCrudService } from './cat-crud-service';
import {CatSearchService} from './cat-search.service';
import { DashboardComponent} from './dashboard.component';
import {AboutComponent} from './about.component';
import {CatSearchComponent} from './cat-search.component';

import { InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    HomeComponent,
    CatsComponent,
    CatDetailComponent,
    DashboardComponent,
    CatSearchComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes),
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [CatCrudService, CatSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
