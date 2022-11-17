import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { TimelineComponent} from './components/timeline/timeline.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { MyCartComponent } from './components/my-cart/my-cart.component';
import { LoginComponent } from './components/login/login.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { UserComponent } from './components/user/user.component';
import { PublishComponent } from './components/publish/publish.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: 'my-profile', component: MyProfileComponent },
  { path: 'my-cart', component: MyCartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'post/:id', component: PostDetailComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'publish', component: PublishComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
