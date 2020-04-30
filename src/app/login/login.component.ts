import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signinForm: FormGroup
  constructor(
  private  _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    
    this.signinForm = this._formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
      confirmPasswors: ['', Validators.required]
      
    })

    this.signinForm.valueChanges.subscribe((value) => {
      console.log(JSON.stringify(value));
    })

    
  }

}
