import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  authenticated = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      name: '',
      email: '',
      password: ''
    });

}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
      email: '',
      password: ''
    });
  }

  submit(): void {
    this.http.post('http://localhost:8000/api/register', this.form.getRawValue())
      .subscribe(() => this.router.navigate(['/admin']));
}

logout(): void {
  this.http.post('http://localhost:8000/api/logout', {}, {withCredentials: true})
    .subscribe(() => this.authenticated = false);
}
}
