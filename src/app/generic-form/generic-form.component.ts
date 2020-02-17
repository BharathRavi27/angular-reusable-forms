import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: GenericFormComponent,
    multi: true
  }]
})
export class GenericFormComponent implements OnInit, ControlValueAccessor {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      'firstName': [null, [Validators.required]],
      'lastName': [null, [Validators.required]],
      'phone': [null, null],
      'street': [null, [Validators.required]],
      'city': [null, [Validators.required]],
      'state': [null],
      'zip': [null, [Validators.required]],
    });
  }

  onTouch() { }

  writeValue(obj: any): void {
    obj && this.form.setValue(obj, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    this.form.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.form.disabled : this.form.enabled;
  }

}
