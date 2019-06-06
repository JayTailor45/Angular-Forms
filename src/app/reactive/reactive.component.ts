import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  name = new FormControl('');

  nameForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  });

  profileForm = new FormGroup({
    name: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      zip: new FormControl('')
    })
  });

  
  constructor(private fb: FormBuilder) { }
  
  fbprofileForm = this.fb.group({
    fbname: ['', Validators.required],
    fbaddress: this.fb.group({
      fbcity: [''],
      fbzip: ['']
    })
  });
  
  ngOnInit() {
  }

  updateName(){
    this.name.setValue('Jay Tailor');
  }

  formSubmitted(){
    console.log(this.nameForm.value);
  }

  profileFormSubmitted(){
    console.log(this.profileForm.value);
  }

  fbProfileFormSubmitted(){
    console.log(this.fbprofileForm.value);
  }

}
