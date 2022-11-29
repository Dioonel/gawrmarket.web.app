import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field'
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
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
        FontAwesomeModule,
        SharedModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        MatFormFieldModule,
        ReactiveFormsModule,
    ]
})
export class WebsiteModule { }
