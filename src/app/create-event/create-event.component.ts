import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  creatEventForm: FormGroup
  constructor(
    private  _formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.creatEventForm = this._formBuilder.group({
      eventName: ['', Validators.required],
      startDate: ['', Validators.required,],
      startTime: ['', Validators.required],
      EndDate: ['', Validators.required],
      EndTime: ['', Validators.required]
    })
  }

}
