import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Authorization} from './authorization';
import {Registration} from './registration';

@Injectable()
export class HttpService {
    constructor(private http: HttpClient) {
    }
    postData(authorization: Authorization) {
        const body = {email: authorization.email, password: authorization.password};
        return this.http.post('http://refman.onaft.edu.ua:5000/login', body);
    }
    postDataRegistration(registration: Registration) {
        const body = {email_signup: registration.email_signup, password_signup: registration.password_signup};
        return this.http.post('http://refman.onaft.edu.ua:5000/register', body);
    }
}
