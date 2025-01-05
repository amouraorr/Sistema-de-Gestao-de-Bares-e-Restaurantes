import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

interface User {
	id: number;
	username: string;
	password: string;
	role: string;
	dataRegistration: string;
	lastLogin: string | null;
	status: boolean;
}

@Injectable({
	providedIn: 'root'
})
export class UserService {
	private apiUrl = 'http://localhost:8080/users';
	private usernameSource = new BehaviorSubject<string>(localStorage.getItem('username') || '');
	currentUsername = this.usernameSource.asObservable();

	constructor(private http: HttpClient) { }

	getUsernames(): Observable<string[]> {
		return this.http.get<User[]>(this.apiUrl).pipe(
			map((users: User[]) => {
				return users.map(user => user.username);
			})
		);
	}

	changeUsername(username: string) {
		localStorage.setItem('username', username);
		this.usernameSource.next(username);
	}

	clearUsername() {
		localStorage.removeItem('username');
		this.usernameSource.next('');
	}
}
