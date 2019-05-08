///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {HttpService} from '../http.service';
import {Authorization} from '../authorization';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Registration} from '../registration';

@Component({
    selector: 'app-authorization-ua',
    templateUrl: './authorization-ua.component.html',
    styleUrls: ['./authorization-ua.component.css'],
    providers: [HttpService]
})
export class AuthorizationUaComponent implements OnInit {
    authorization: Authorization = new Authorization();
    registration: Registration = new Registration();
    constructor(private httpService: HttpService, private http: HttpClient) {
    }
    ngOnInit() {
       /** this.http.get<Authorization>
        ('http://localhost:4200/assets/authorization.json').subscribe((data: Authorization) => this.authorization = data,
            (err: HttpErrorResponse) => {
                if (err.error instanceof Error) {
                    console.log('Client-side error occured.');
                } else {
                    console.log('Server-side error occured.');
                }
            });**/
        const letr = <HTMLImageElement> document.getElementsByClassName('log')[0];
        const input = document.getElementById('email');
        input.addEventListener('focus', function () {
            letr.src = '../../assets/img/letter.active.png';
        });
        input.addEventListener('blur', function () {
            letr.src = '../../assets/img/letter.png';
            letr.style.transition = 'all 600ms ease-in-out';
        });
        const lock = <HTMLImageElement> document.getElementsByClassName('log')[1];
        const pas = document.getElementById('passw');
        pas.addEventListener('focus', function () {
            lock.src = '../../assets/img/lock.active.png';
            lock.style.transition = 'all 600ms ease-in-out';
        });
        pas.addEventListener('blur', function () {
            lock.src = '../../assets/img/lock.png';
            lock.style.transition = 'all 600ms ease-in-out';
        });



        const passw = <HTMLInputElement> document.getElementById('password_signup');
        const letter = document.getElementById('letter');
        const capital = document.getElementById('capital');
        const number = document.getElementById('number');
        const length = document.getElementById('length');
        passw.onkeyup = function() {
            const lowerCaseLetters = /[a-zа-я]/g;
            if (passw.value.match(lowerCaseLetters)) {
                letter.classList.remove('invalid');
                letter.classList.add('valid');
            } else {
                letter.classList.remove('valid');
                letter.classList.add('invalid');
            }

            const upperCaseLetters = /[A-ZА-Я]/g;
            if (passw.value.match(upperCaseLetters)) {
                capital.classList.remove('invalid');
                capital.classList.add('valid');
            } else {
                capital.classList.remove('valid');
                capital.classList.add('invalid');
            }

            const numbers = /[0-9]/g;
            if (passw.value.match(numbers)) {
                number.classList.remove('invalid');
                number.classList.add('valid');
            } else {
                number.classList.remove('valid');
                number.classList.add('invalid');
            }

            if (passw.value.length >= 8) {
                length.classList.remove('invalid');
                length.classList.add('valid');
            } else {
                length.classList.remove('valid');
                length.classList.add('invalid');
            }
        };
    }
    submitAuthorization(authorization: Authorization) {
        this.httpService.postData(authorization) .subscribe(error => console.log(error));
    }
    submitRegistration(registration: Registration) {
        this.httpService.postDataRegistration(registration) .subscribe(error => console.log(error));
    }
}


/**
receivedUser: Authorization; // полученный пользователь
    done = false;
const myHeaders = new HttpHeaders().set('Authorization', 'my-auth-token');
        const body = {email: authorization.email, password: authorization.password};
       this.http.post('http://localhost:4200/assets/post.php', body)
        //this.httpService.postData(authorization)
            .subscribe(
                (data: Authorization) => {
                   console.log(JSON.stringify(data));
                    this.receivedUser=data;
                    this.done=true;
                },
                error => console.log(error)
            );
             this.http.get<Authorization>
        ('http://localhost:4200/assets/authorization.json').subscribe((data: Authorization) => this.authorization = data,
            (err: HttpErrorResponse) => {
                if (err.error instanceof Error) {
                    console.log('Client-side error occured.');
                } else {
                    console.log('Server-side error occured.');
                }
            }
        );**/
