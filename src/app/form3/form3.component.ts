import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.scss']
})
export class Form3Component implements OnInit {

  addressForm: FormGroup;
  address;
  constructor() { }

  ngOnInit() {
    this.addressForm = new FormGroup({});
  }

  onSubmit() {
    console.log(this.addressForm.value);
  }

}
