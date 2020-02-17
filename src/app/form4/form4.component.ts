import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form4',
  templateUrl: './form4.component.html',
  styleUrls: ['./form4.component.scss']
})
export class Form4Component implements OnInit {

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
