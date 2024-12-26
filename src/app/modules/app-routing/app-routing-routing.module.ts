import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../components/home/home.component';
import { LoginComponent } from '../../components/login/login.component';
import { SignupComponent } from '../../components/signup/signup.component';
import { ProfileComponent } from '../../components/profile/profile.component';
import { AddPostComponent } from '../../components/add-post/add-post.component';
import { RandomEmployeesReelsComponent } from '../../components/random-employees-reels/random-employees-reels.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'add-post', component: AddPostComponent },
  { path: 'random-reels', component: RandomEmployeesReelsComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }, // Redirect unknown routes to login

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingRoutingModule { }
