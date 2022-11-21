import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './website/pages/home/home.component';
import { NavComponent } from './website/components/nav/nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TimelineComponent } from './website/pages/timeline/timeline.component';
import { MyProfileComponent } from './website/pages/my-profile/my-profile.component';
import { MyCartComponent } from './website/pages/my-cart/my-cart.component';
import { InterceptorService } from './services/interceptor.service';
import { LoginComponent } from './website/pages/login/login.component';
import { PostDetailComponent } from './website/pages/post-detail/post-detail.component';
import { UserComponent } from './website/pages/user/user.component';
import { PublishComponent } from './website/pages/publish/publish.component';
import { RegisterComponent } from './website/pages/register/register.component';
import { LayoutComponent } from './website/pages/layout/layout.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
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
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
