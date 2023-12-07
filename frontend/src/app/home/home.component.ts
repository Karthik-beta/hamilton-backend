import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Emitters } from '../emitters/emitters';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  subscription: Subscription = new Subscription();
  authenticated = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.subscription = this.http
      .get('http://localhost:8000/api/user', { withCredentials: true })
      .subscribe({
        next: (res: any) => {
          Emitters.authEmitter.emit(true);
        },
        error: (err: any) => {
          Emitters.authEmitter.emit(false);
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  logout(): void {
    this.http.post('http://localhost:8000/api/logout', {}, {withCredentials: true})
      .subscribe(() => this.authenticated = false);
}
}
