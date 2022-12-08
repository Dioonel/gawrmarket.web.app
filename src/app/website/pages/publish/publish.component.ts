import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Post } from './../../../models/post.model';
import { DataService } from './../../../services/data.service';
import { ImageService } from './../../../services/image.service';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css']
})
export class PublishComponent implements OnInit {
  form!: FormGroup;
  loadingImg = false;
  errorImg = false;
  loginError = false;
  createdPost!: Post;

  constructor(private dataService: DataService, private formBuilder: FormBuilder, private imageService: ImageService) {}

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(80), Validators.minLength(6)]],
      description: ['', [Validators.required, Validators.maxLength(300), Validators.minLength(6)]],
      price: [1, [Validators.required, Validators.min(1)]],
      image: ['https://cdn3.iconfinder.com/data/icons/design-n-code/100/272127c4-8d19-4bd3-bd22-2b75ce94ccb4-512.png', [Validators.required]],
    });
  }

  createPost(){
    if(this.form.valid){
      this.dataService.publishNewPost(this.form.value).subscribe(data => {
        if(data?.message){
          this.loginError = true;
        } else {
          console.log(data);
          this.createdPost = data;
        }
      });
    }
  }

  async getImage(event: Event){
    try{
      let input = event.target as HTMLInputElement;
      if(input.files && input.files.length > 0){
        this.loadingImg = true;
        let image: File = input.files[0];
        let postImg = await this.imageService.uploadImage(image);
        this.form.patchValue({image: postImg});
        this.loadingImg = false;
        this.errorImg = false;
      }
    } catch (err) {
      console.log(err);
      this.errorImg = true;
    }
  }
}
