import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  creatEventForm: FormGroup
  formValues:any[] = []
  submittedEvents: any[]=[]
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

    this.creatEventForm.valueChanges.subscribe((value) => {
      // console.log(value)
       this.formValues.push(value)
    })
  }



  createEvent(){
      console.log(this.formValues[this.formValues.length-1])
      this.submittedEvents.push(this.formValues[this.formValues.length-1])
      // this.formValues = []

      this.submittedEvents.forEach(element => {
        console.log(JSON.stringify(element))
      });

  }
}
