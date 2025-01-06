import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../components/home/home.component';
import { LoginComponent } from '../../components/login/login.component';
import { SignupComponent } from '../../components/signup/signup.component';
import { ProfileComponent } from '../../components/profile/profile.component';
import { AddPostComponent } from '../../components/add-post/add-post.component';
import { RandomEmployeesReelsComponent } from '../../components/random-employees-reels/random-employees-reels.component';
import { ForgetPasswordComponent } from '../../components/forget-password/forget-password.component';
import { FavouriteComponent } from '../../components/favourite/favourite.component';
import { NeutranceCommunityComponent } from '../../components/neutrance-community/neutrance-community.component';
import { CommunityJoinScreenComponent } from '../../components/community-join-screen/community-join-screen.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'favourite', component: FavouriteComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'add-post', component: AddPostComponent },
  { path: 'random-reels', component: RandomEmployeesReelsComponent },
  { path: 'neutrance', component: NeutranceCommunityComponent },
  { path: 'join-community', component: CommunityJoinScreenComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }, // Redirect unknown routes to login
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingRoutingModule {}
