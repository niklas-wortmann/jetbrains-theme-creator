import { Injectable } from '@angular/core';
import { Auth, GithubAuthProvider, signInWithPopup, User } from '@angular/fire/auth';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  constructor(private auth: Auth) {
    auth.onAuthStateChanged(user => this.userSubject.next(user));
  }

  async loginWithGithub() {
    const provider = new GithubAuthProvider();
    try {
      await signInWithPopup(this.auth, provider);
    } catch (error) {
      console.error('Authentication failed:', error);
      throw error;
    }
  }

  async logout() {
    await this.auth.signOut();
  }

  isAuthenticated(): Observable<boolean> {
    return new Observable(subscriber => {
      this.auth.onAuthStateChanged(user => {
        subscriber.next(!!user);
      });
    });
  }
}