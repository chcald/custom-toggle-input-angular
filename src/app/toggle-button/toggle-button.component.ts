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
  
  @Input() type: string;
  @Input() name: string;
  @Input() label = 'switch';
  @Input('value') _value = false;
  @Input('disable') _disable = false;
  onChange: any = () => { };
  onTouched: any = () => { };
  
  get disable() {
    return this._disable;
  }
  
  set disable(disable) {
    if (disable) {
      this._disable = disable;
    }
  }
  
  get value() {
    return this._value;
  }
  
  set value(val) {
    this._value = val;
    // console.log( '  SET  _value:', this._value);
    this.onChange(val);
    this.onTouched();
  }
  
  constructor() {
   }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  writeValue(value) {
    console.log('value:', this.value, '    _value:', this._value);
    if (value) {
      this.value = value;
    }
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  switch() {
    console.log("switch in toggle button")
    this.value = !this.value;
    // this.onChange("cambie");
  }


}
