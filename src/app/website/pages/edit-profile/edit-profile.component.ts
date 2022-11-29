import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Country } from '@angular-material-extensions/select-country';

import { DataService } from './../../../services/data.service';
import { User } from './../../../models/user.model';
import { isEmpty } from './../../../../common/fns';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  defaultCountry: Country = {
    name: '',
    alpha2Code: '',
    alpha3Code: '',
    numericCode: '',
    callingCode: ''
  }
  form!: FormGroup;
  loading = true;
  user!: User;

  constructor(private dataService: DataService, private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.dataService.getMyProfile().subscribe(data => {
      console.log(data);
      this.user = data;
      this.defaultCountry.alpha2Code = data.country.toString();
      this.buildForm();
      this.loading = false;
    });
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: [this.user.email, Validators.email],
      social: [this.user.social],
      bio: [this.user.bio, Validators.maxLength(240)],
      image: [this.user.image],
      age: [this.user.age, Validators.min(1)],
      country: [this.defaultCountry],
      gender: [this.user.gender]
    });
  }

  updateProfile() {
    if(this.form.valid) {
      let changes = this.form.value;
      if(changes.email === this.user.email || changes.email === '') delete changes.email;
      if(changes.social === this.user.social || changes.social === '') delete changes.social;
      if(changes.bio === this.user.bio || changes.bio === '') delete changes.bio;
      if(changes.image === this.user.image || changes.image === '') delete changes.image;
      if(changes.age === this.user.age) delete changes.age;
      if(changes.gender === this.user.gender || changes.gender === '') delete changes.gender;
      if(changes.country?.alpha2Code === this.user.country) {
        delete changes.country;
      } else {
        changes.country = changes.country?.alpha2Code;
      }

      if(!isEmpty(changes)) {
        console.log(changes);
        this.dataService.updateMyProfile(this.form.value).subscribe(data => {
          this.router.navigate(['/my-profile']);
        });
      }
      // no changes
      this.router.navigate(['/my-profile']);
    }
    // configure invalid messages
  }

}
