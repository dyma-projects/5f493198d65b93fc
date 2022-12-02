import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public users$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  constructor() {}

  public addUser(username: string) {
    const value = this.users$.getValue();
    if (value.length > 0) this.users$.next([...value, username]);
    else this.users$.next([username]);
  }
}
