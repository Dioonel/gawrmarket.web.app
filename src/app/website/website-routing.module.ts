import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { TimelineComponent} from './pages/timeline/timeline.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { MyCartComponent } from './pages/my-cart/my-cart.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { UserComponent } from './pages/user/user.component';
import { PublishComponent } from './pages/publish/publish.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'timeline', component: TimelineComponent },
      { path: 'my-profile', component: MyProfileComponent },
      { path: 'my-profile/edit', component: EditProfileComponent },
      { path: 'my-cart', component: MyCartComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'post/:id', component: PostDetailComponent },
      { path: 'user/:id', component: UserComponent },
      { path: 'publish', component: PublishComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
