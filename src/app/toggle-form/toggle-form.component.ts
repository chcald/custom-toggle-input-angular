import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-toggle-form',
  templateUrl: './toggle-form.component.html',
  styleUrls: ['./toggle-form.component.css']
})
export class ToggleFormComponent implements OnInit {

  form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      gender: [{value:false, disabled:false}, Validators.requiredTrue],
      gender1: [{value:true, disabled:false}, Validators.requiredTrue]
    });
  }


  ngOnInit() {

    // console.log(this.form.controls.submiter.disable())
    this.form.controls.gender.valueChanges.subscribe(() => {
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('form submitted');
    } else {
      // validate all form fields
    }
  }

  onChange(event){
    console.log("onChange")
    // console.log(event)
    // // console.log(this.form.controls.gender.disable())
    // console.log(this.form)
  }

}
