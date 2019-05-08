import {Component, Input, OnInit} from '@angular/core';
import { ProfileEditComponent} from './profile-edit.component';
import {bind} from '@angular/core/src/render3/instructions';
// import {ProfileService} from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    previewFile() {
        const preview = document.querySelectorAll('.preview');
        const file = (<HTMLInputElement> document.querySelector('input[type=file]')).files[0];
        const reader = new FileReader();
        let i = 0;
        reader.onloadend = function () {
            while (i < preview.length) {
                preview[i].setAttribute('src', reader.result);
                i++;
            }
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    }
    constructor() {
    }
    ngOnInit() {
    }
}
