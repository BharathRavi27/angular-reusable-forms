import { Component, OnInit, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-generic-form-address',
  templateUrl: './generic-form-address.component.html',
  styleUrls: ['./generic-form-address.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class GenericFormAddressComponent implements OnInit {

  @Input() address;
  form: FormGroup;

  constructor(private ctrlContainer: FormGroupDirective,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.ctrlContainer.form;

    this.form.addControl('addressForm',
      this.formBuilder.group({
        'firstName': [null, [Validators.required]],
        'lastName': [null, [Validators.required]],
        'phone': [null, null],
        'street': [null, [Validators.required]],
        'city': [null, [Validators.required]],
        'state': [null],
        'zip': [null, [Validators.required]],
      }));
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
