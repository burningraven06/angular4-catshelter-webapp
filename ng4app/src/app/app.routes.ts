import {Routes} from '@angular/router';
import { CatsComponent} from './cats.component';
import {HomeComponent} from './home.component';
import { CatDetailComponent } from './cat-detail.component';
import {DashboardComponent} from './dashboard.component';
import {AboutComponent} from './about.component';

export const AppRoutes: Routes =[
{
	path: 'cats',
	component: CatsComponent
},
{
	path : '',
	component: HomeComponent
},
{
	path : 'dashboard',
	component: DashboardComponent
},
{
	path: 'about',
	component: AboutComponent
},
{
	path: 'cat-info/:id',
	component: CatDetailComponent
}
]