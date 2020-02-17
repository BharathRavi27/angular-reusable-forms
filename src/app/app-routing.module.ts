import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import { Form4Component } from './form4/form4.component';


const routes: Routes = [
  { path: 'simple-input-field', component: Form1Component },
  { path: 'value-accessror', component: Form2Component },
  { path: 'value-accessror-V2', component: Form3Component },
  { path: 'value-accessror-V2-repeat', component: Form4Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
