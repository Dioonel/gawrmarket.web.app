import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './../shared/shared.module';
import { WebsiteRoutingModule } from './website-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { MyCartComponent } from './pages/my-cart/my-cart.component';
import { LoginComponent } from './pages/login/login.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { UserComponent } from './pages/user/user.component';
import { PublishComponent } from './pages/publish/publish.component';
import { RegisterComponent } from './pages/register/register.component';
import { LayoutComponent } from './pages/layout/layout.component';


@NgModule({
    declarations: [
        HomeComponent,
        NavComponent,
        TimelineComponent,
        MyProfileComponent,
        MyCartComponent,
        LoginComponent,
        PostDetailComponent,
        UserComponent,
        PublishComponent,
        RegisterComponent,
        LayoutComponent,

    ],
    imports: [
        CommonModule,
        WebsiteRoutingModule,
        HttpClientModule,
        FormsModule,
        FontAwesomeModule,
        SharedModule,
        MatToolbarModule,
        MatButtonModule,
        ReactiveFormsModule
    ]
})
export class WebsiteModule { }
