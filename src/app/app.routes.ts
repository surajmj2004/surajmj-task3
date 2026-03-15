import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Course } from './course/course';
import { Contact } from './contact/contact';
import { Product } from './product/product';

export const routes: Routes = [
    { path:'',component:Home },
    { path: 'courses',component:Course },
    { path: 'contact',component:Contact },
    { path: 'product',component:Product}
];
