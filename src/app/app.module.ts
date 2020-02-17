import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenricInputComponent } from './genric-input/genric-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenericFormComponent } from './generic-form/generic-form.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { GenericFormAddressComponent } from './generic-form-address/generic-form-address.component';
import { Form3Component } from './form3/form3.component';
import { Form4Component } from './form4/form4.component';

@NgModule({
  declarations: [
    AppComponent,
    GenricInputComponent,
    GenericFormComponent,
    Form1Component,
    Form2Component,
    GenericFormAddressComponent,
    Form3Component,
    Form4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
