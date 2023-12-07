import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: '',

    });
  }

  // submit(): void {
  //   if (this.form) {
  //     const username = this.form.get('username')?.value;

  //     this.http.post('http://localhost:8000/api/login', this.form.getRawValue(), {
  //       withCredentials: true
  //     }).subscribe(() => {
  //       if (username === 'admin') {
  //         this.router.navigate(['/admin']);
  //       } else {
  //         this.router.navigate(['/homepage']);
  //       }
  //     });
  //   }
  // }



  submit(): void {
    if (this.form) {
      const email = this.form.get('email')?.value;

      this.http.post('http://localhost:8000/api/login', this.form.getRawValue(), {
        withCredentials: true
      }).subscribe((response: any) => {
        const message = response.message;
        const jwtToken = response.jwt;

        // Check if user is a superuser
        if (message === 'Logged in as superuser') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/home']);
        }
      });
    }


}

}

