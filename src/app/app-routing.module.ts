import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MainComponent } from './main/main.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { AdditemComponent } from './additem/additem.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomePageComponent},
  {path:'signup',component:SignUpComponent},
  { path:'productdetails/:id', component : ProductDetailsComponent},
  { path:'usercart',component:UserCartComponent},
  { path: 'profile',component:MyProfileComponent},
  { path: 'main' , component: MainComponent },
  { path: 'orderhistory' , component : OrderhistoryComponent},
  { path: 'additem' , component : AdditemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
