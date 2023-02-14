import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from
  "@angular/forms"
import { PasswordStrengthValidator } from "./password-strength.validators"
import { ConfirmPasswordValidator } from "./password-strength.validators"



@Component({ 
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public NamFomNgs: FormGroup;

  constructor(fb: FormBuilder) {
    
    this.NamFomNgs = fb.group(
      {
        MylNgs: [null, Validators.compose([
          Validators.required,
          Validators.email])],
        PwdNgs: [null, Validators.compose([
          Validators.required, PasswordStrengthValidator])],
          confirmPassword: ['', [Validators.required]]
        }, {
          validator: ConfirmPasswordValidator("PwdNgs","confirmPassword")
      });



  }


}


