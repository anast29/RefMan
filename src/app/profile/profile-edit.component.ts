import {Component, OnInit} from '@angular/core';
// import {Profile} from '../profile';
// import {ProfileEditService} from '../profile-edit.service';

@Component({
    selector: 'app-profile-edit',
    templateUrl: './profile-edit.component.html',
    styleUrls: ['./profile.component.css']
    // providers: [ProfileEditService]
})
export class ProfileEditComponent implements OnInit {
    email: string;
    // profile: Profile = new Profile();
    // private profileService: ProfileEditService
    constructor() {
    }
    // public myModel = '';
    // public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    ngOnInit() {
        // $(function(){
        //     $('#orcid').mask('____-____');
        //     $.mask.definitions['h'] = '[A-Fa-f0-9]';
        // });

        // // const email = <HTMLInputElement> document.getElementById('email');
        // // email.value = localStorage.getItem('email_');
        // const elements = document.querySelectorAll('input, textarea');
        //
        // function checkValidity() {};
        // for (let i = 0; i < elements.length; i++) {
        //     (function(element) {
        //         const id = element.getAttribute('id');
        //         element.value = localStorage.getItem(id); // обязательно наличие у элементов id
        //         element.addEventListener('input', function() {
        //             localStorage.setItem(id, element.value);
        //             checkValidity();
        //         });
        //     })(elements[i]);
        // }
    }
    // submitProfile(profile: Profile) {
    //     this.profileService.postProfile(profile) .subscribe(error => console.log(error));
    // }


}
