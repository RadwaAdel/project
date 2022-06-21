import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  reactiveFrom: FormGroup;
  constructor(public authServise: AuthService) {
    this.reactiveFrom = new FormGroup({
      UserName: new FormControl(''),
      Email: new FormControl(' ', [Validators.required]),
      Password: new FormControl(' ', [Validators.required]),
      Address: new FormControl(' ', [Validators.required]),
      City: new FormControl(' ', [Validators.required]),
    });
  }
  
  get fullName() {
    return this.reactiveFrom.get('UserName');
  }

  get email() {
    return this.reactiveFrom.get('Email');
  }
  get password() {
    return this.reactiveFrom.get('Password');
  }
  handleForm() {
    console.log(this.email?.value,this.fullName?.value,this.password?.value);
    this.authServise.createuser(
      this.fullName?.value,
      this.email?.value,
      this.password?.value
    );
  }

  signupSubmit() {
   
  }

  ngOnInit(): void {}
}
