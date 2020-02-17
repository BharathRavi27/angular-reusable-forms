import { Component, OnInit, Input, ViewChild, ElementRef, Self } from '@angular/core';
import { NgForm, ControlValueAccessor, NG_VALUE_ACCESSOR, AbstractControl, ValidationErrors, Validators, ValidatorFn, NG_VALIDATORS, NgControl, Validator } from '@angular/forms';

@Component({
  selector: 'app-genric-input',
  templateUrl: './genric-input.component.html',
  styleUrls: ['./genric-input.component.scss'],
  providers: [
    //   {
    //   provide: NG_VALUE_ACCESSOR,
    //   multi: true,
    //   useExisting: GenricInputComponent
    // },
    // {
    //   provide: NG_VALIDATORS,
    //   useExisting: GenricInputComponent,
    //   multi: true
    // }
  ]
})
export class GenricInputComponent implements ControlValueAccessor, Validator, OnInit {
  @Input() type = 'text';
  @Input() isRequired: boolean = false;
  @Input() pattern: string = null;
  @Input() label: string = null;
  @Input() placeholder: string;
  @Input() errorMsg: string;

  @ViewChild('input') input: ElementRef;
  disabled;

  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
  }
  ngOnInit(): void {
    const control = this.controlDir.control;
    const validators: ValidatorFn[] = control.validator ? [control.validator] : [];
    if (this.isRequired) {
      validators.push(Validators.required);
    }
    if (this.pattern) {
      validators.push(Validators.pattern(this.pattern));
    }

    control.setValidators(validators);
    control.updateValueAndValidity();
  }

  writeValue(obj: any): void {
    this.input.nativeElement.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  onChange(event) { }

  onTouched() { }

  validate(c: AbstractControl): ValidationErrors {
    const validators: ValidatorFn[] = [];
    if (this.isRequired) {
      validators.push(Validators.required);
    }
    if (this.pattern) {
      validators.push(Validators.pattern(this.pattern));
    }

    return validators;
  }

}
