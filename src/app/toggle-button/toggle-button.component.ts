import { Component, Input, forwardRef  } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

const customValueProvider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ToggleButtonComponent),
  multi: true
};

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css'],
  providers: [ customValueProvider ]
})
export class ToggleButtonComponent implements ControlValueAccessor {

  propagateChange:any = () => {};
  isChecked: boolean
  
  @Input() on: string;
  @Input() off: string;

  @Input() type: string;
  @Input() name: string;
  @Input() status: string;
  @Input() label = 'switch';
  @Input('value') _value = false;
  onChange: any = () => { };
  onTouched: any = () => { };


  get value() {
    return this._value;
  }
  
  set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }
  
  constructor() {
    this.isChecked = false
   }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  writeValue(value) {
    console.log("writeValue: ",value)
    this.value = value;
    if (value) {
      this.isChecked=true
    }else{
      this.isChecked=null
    }
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  switch() {
    // console.log("switch in toggle button")
    this.value = !this.value;
    // console.log("switch: ",this.value)
    // this.onChange();
  }


}
