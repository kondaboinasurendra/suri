import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ProductsComponent } from './products/products.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'home',redirectTo:'/home',pathMatch:'full'},
  {path:'dynamic',component:DynamicComponent},
  {path:'users',component:UsersComponent},


  {path:'home',component:HomeComponent},
  {path:'products',component:ProductsComponent},
  {path:'about',component:AboutComponent},
  {path:'services',component:ServicesComponent},        
  {path:'gallery',component:GalleryComponent},
  {path:'contactus',component:ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
