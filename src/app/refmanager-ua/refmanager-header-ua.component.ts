import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-refmanager-header-ua',
    templateUrl: './refmanager-header-ua.component.html',
    styleUrls: ['./refmanager-ua.component.css']
})
export class RefmanagerHeaderUaComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        (function () {
            'use strict';
            const toggles = document.querySelectorAll('.toggle-hamburger');
            for (let i = toggles.length - 1; i >= 0; i--) {
                const toggle = toggles[i];
                toggleHandler(toggle);
            }

            function toggleHandler(toggle) {
                toggle.addEventListener('click', function (e) {
                    e.preventDefault();
                    (this.classList.contains('is-active') === true) ? this.classList.remove('is-active') : this.classList.add('is-active');
                });
            }

            const button = document.getElementById('menu');
            const block = document.getElementById('hidden-menu');
            const left = block.style.display;
            button.addEventListener('click', function () {
                if (left === 'none') {
                    block.style.display = 'flex';
                    block.style.left = '0';
                } else {
                    block.style.display = 'none';
                    block.style.left = '-100%';
                }
            });

        })();
        $('a[href^="#"]').on('click', function () {
            const target = $(this).attr('href');
            $('html,body').animate({
                    scrollTop: $(target).offset().top
                },
                'slow');
        });
    }
}
