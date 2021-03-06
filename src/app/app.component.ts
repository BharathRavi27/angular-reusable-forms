import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GenericFormComponent } from './generic-form/generic-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reusable-forms';


  addressForm: FormGroup;
  address: GenericFormComponent;
  constructor() { }

  ngOnInit() {
    this.addressForm = new FormGroup({});
    this.addressForm.addControl('v2', new FormControl());

  }

  submit() {

    console.log(this.addressForm.value);
  }


  onSubmit(data) {

  }
}
