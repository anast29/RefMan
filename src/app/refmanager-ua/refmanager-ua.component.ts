import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-refmanager-ua',
  templateUrl: './refmanager-ua.component.html',
  styleUrls: ['./refmanager-ua.component.css']
})
export class RefmanagerUaComponent implements OnInit {
    // myForm: FormGroup = new FormGroup({
    //     user: new FormControl('', Validators.required),
    // });
    user = new FormControl('');

    constructor() {
    }

    ngOnInit() {
    }
    sendEmail() {
        const txt = <HTMLTextAreaElement> document.getElementById('text');
        const uname = <HTMLTextAreaElement> document.getElementById('user_name');
        if (txt.value.length !== 0 && uname.value.length !== 0) {
            alert('Дякуємо ' + this.user.value + ', Ваше повідомлення відправлено!');
        } else {
            alert('Заповніть поля!');
        }

    }
}
