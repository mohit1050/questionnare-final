import { HotToastModule, HotToastService } from '@ngneat/hot-toast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from 'src/app/services/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form = {
    uemail: '',
    password: '',
  };
  constructor(
    private obj: RegistrationService,
    private toast: HotToastService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.obj.loginUser(this.form).subscribe(
      (response) => {
        console.log(response);
        this.toast.success('Successfully Logged in');
        console.log('user entered email: ' + response.uemail);

        localStorage.setItem('uemail', response.uemail);
        this.router.navigate(['/questionform']);
      },
      (error) => {
        console.log(error);
        this.toast.error('Login Failed');
      }
    );
  }

  // onReset(form:NgForm):void{
  //   form.reset();
  // }
}
