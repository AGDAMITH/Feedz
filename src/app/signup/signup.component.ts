import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  
  
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup
  constructor(
  private  _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    
    this.signupForm = this._formBuilder.group({
      fullName: ['', Validators.required]
    })

    this.signupForm.valueChanges.subscribe((value) => {
      console.log(JSON.stringify(value));
    })
  }

}
