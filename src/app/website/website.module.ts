import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import { QuicklinkModule } from 'ngx-quicklink';

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
import { UserTemplateComponent } from './components/user-template/user-template.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';


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
        UserTemplateComponent,
        EditProfileComponent,

    ],
    imports: [
        CommonModule,
        WebsiteRoutingModule,
        HttpClientModule,
        FormsModule,
        QuicklinkModule,
        FontAwesomeModule,
        SharedModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        MatFormFieldModule,
        MatTabsModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        ReactiveFormsModule,
        MatSelectCountryModule.forRoot('en')
    ]
})
export class WebsiteModule { }
