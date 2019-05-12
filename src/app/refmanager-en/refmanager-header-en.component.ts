import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
    selector: 'app-refmanager-header-en',
    templateUrl: './refmanager-header-en.component.html',
    styleUrls: ['./refmanager-en.component.css']
})
export class RefmanagerHeaderEnComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        $('a[href^="#"]').on('click', function () {
            const target = $(this).attr('href');
            $('html,body').animate({
                    scrollTop: $(target).offset().top
                },
                'slow');
        });
    }


}
