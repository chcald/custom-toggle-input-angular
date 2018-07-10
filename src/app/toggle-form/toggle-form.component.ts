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
      gender: ['naranja', Validators.required]
    });
  }


  ngOnInit() {
    this.form.controls.gender.valueChanges.subscribe(() => {
    });
  }

  onChange(event){

    console.log(this.form.value)
  }

}
