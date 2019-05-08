import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-foodscience-author-ua',
    templateUrl: './foodscience-author-ua.component.html',
    styleUrls: ['./foodscience-ua.component.css']
})
export class FoodscienceAuthorUaComponent implements OnInit {
    addAuthor () {
        const main = document.getElementById('content_for_authors');
        const div = document.createElement('div');
        const content = document.createElement('div');
        content.className = 'author';
        const line = document.createElement('div');
        line.className = 'line';
        div.className = 'title';
        div.innerHTML += '<h2>Інформація про співавтора</h2>';
        const delet = document.createElement('a');
        delet.title = 'Delete author';
        const i = document.createElement('i');
        i.classList.add('fa', 'fa-trash-o');
        delet.appendChild(i);
        div.appendChild(delet);
        content.appendChild(div);
        line.innerHTML += '<h4>Ініціали та прізвище співавтора</h4>' +
            '                    <p>українською</p>\n' +
            '                    <p>російською</p>\n' +
            '                    <p>англійською</p>';
        const name_uk = document.createElement('input');
        const name_rus = document.createElement('input');
        const name_en = document.createElement('input');
        line.appendChild(name_uk);
        line.appendChild(name_rus);
        line.appendChild(name_en);
        content.appendChild(line);
        const contact = document.createElement('div');
        contact.className = 'line';
        const  block = document.createElement('div');
        block.innerHTML += '<h3>E-mail </h3>\n' +
            '                        <h3>Контактний телефон </h3>';
        contact.appendChild(block);
        const email = document.createElement('input');
        const telephone = document.createElement('input');
        contact.appendChild(email);
        contact.appendChild(telephone);
        content.appendChild(contact);
        const science = document.createElement('div');
        science.classList.add('line');
       science.innerHTML += ' <h4>Вчене звання</h4>\n' +
           '                    <p>українською</p>\n' +
           '                    <p>російською</p>\n' +
           '                    <p>англійською</p>';
        const academtitle_ua = document.createElement('input');
        const academtitle_ru = document.createElement('input');
        const academtitle_en = document.createElement('input');
        science.appendChild(academtitle_ua);
        science.appendChild(academtitle_ru);
        science.appendChild(academtitle_en);
        const degree = document.createElement('div');
        degree.classList.add('line', 'bottom_none');
        degree.innerHTML += ' <h4>Науковий ступінь</h4>\n' +
            '                    <p>українською</p>\n' +
            '                    <p>російською</p>\n' +
            '                    <p>англійською</p>';
        const sciencedegree_ua = document.createElement('input');
        const sciencedegree_ru = document.createElement('input');
        const sciencedegree_en = document.createElement('input');
        degree.appendChild(sciencedegree_ua);
        degree.appendChild(sciencedegree_ru);
        degree.appendChild(sciencedegree_en);
        content.appendChild(science);
        content.appendChild(degree);
        main.appendChild(content);
        delet.addEventListener('click', function ( ) {
            main.removeChild(content);
        });
    }

    constructor() { }
    ngOnInit() {
        // const button = <HTMLButtonElement> document.getElementById('creat_author');
        // const main = document.getElementById('content_for_authors');
        // button.addEventListener('click', function() {
        //     const content = document.createElement('div');
        //     content.className = 'author';
        //     content.
        //     const line = document.createElement('div');
        //     line.className = 'line';
        //     line.innerHTML += '<h4>Ініціали та прізвище співавтора</h4>\n' +
        //         '                    <p>українською</p>\n' +
        //         '                    <p>російською</p>\n' +
        //         '                    <p>англійською</p>';
        //     const name_uk = document.createElement('input');
        //     const name_rus = document.createElement('input');
        //     const name_en = document.createElement('input');
        //     line.appendChild(name_uk);
        //     line.appendChild(name_rus);
        //     line.appendChild(name_en);
        //     content.appendChild(line);
        //     const contact = document.createElement('div');
        //     contact.className = 'line';
        //     const  block = document.createElement('div');
        //     block.innerHTML += '<h4>E-mail співавтора</h4>\n' +
        //         '                        <h4>Контактний телефон співавтора</h4>';
        //     contact.appendChild(block);
        //     const email = document.createElement('input');
        //     const telephone = document.createElement('input');
        //     contact.appendChild(email);
        //     contact.appendChild(telephone);
        //     content.appendChild(contact);
        //     main.appendChild(content);
        //     const science = document.createElement('div');
        //     science.className = 'line';
        //     const  block_science = document.createElement('div');
        //     block_science.innerHTML += '<h4>Вчене звання співавтора</h4>\n' +
        //         '                        <h4>Науковий ступінь співавтора</h4>';
        //     science.appendChild(block_science);
        //     const academtitle = document.createElement('input');
        //     const sciencedegree = document.createElement('input');
        //     science.appendChild(academtitle);
        //     science.appendChild(sciencedegree);
        //     content.appendChild(science);
        //     main.appendChild(content);
        //
        // });
    }

}
