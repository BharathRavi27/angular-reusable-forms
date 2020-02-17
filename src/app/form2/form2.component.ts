import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GenericFormComponent } from '../generic-form/generic-form.component';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component implements OnInit {

  title = 'reusable-forms';


  addressForm: FormGroup;
  address: GenericFormComponent;
  constructor() { }

  ngOnInit() {
    this.addressForm = new FormGroup({});
    this.addressForm.addControl('v2', new FormControl());

  }

  submit() {
    debugger
    console.log(this.addressForm.value);
  }

}
