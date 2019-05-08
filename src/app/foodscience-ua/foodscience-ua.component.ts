import {Component, OnInit} from '@angular/core';


declare var CKEDITOR: any;
@Component({
  selector: 'app-foodscience-ua',
  templateUrl: './foodscience-ua.component.html',
  styleUrls: ['./foodscience-ua.component.css']
})
export class FoodscienceUaComponent implements OnInit {

    ngOnInit() {
        const editor = CKEDITOR.instances['abstract_ua'];
        if (editor) { editor.destroy(true); }
        CKEDITOR.disableAutoInline = true;
        CKEDITOR.config.toolbar_Basic =  [
            { name: 'clipboard', items: [ 'Cut', 'Copy', 'Paste', '-', 'Undo', 'Redo' ] },
            { name: 'styles', items: [  'Font', 'FontSize' ] },
            { name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline', 'Subscript', 'Superscript', '-', 'RemoveFormat'] },
            { name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'] },
            { name: 'links', items: [ 'Link', 'Unlink' ] },
            { name: 'insert', items: [ 'Image',  'Table', 'SpecialChar'] }];
        CKEDITOR.config.toolbar = 'Basic';
        CKEDITOR.fontFamily = 'Times New Roman';
        CKEDITOR.config.font_defaultLabel = 'Times New Roman';
        CKEDITOR.config.fontSize_defaultLabel = '12px';
        $('.textarea').each(function() {
            CKEDITOR.inline( this );
        });
        const select = <HTMLSelectElement> document.getElementsByTagName('select');
        const select_books = <HTMLSelectElement> document.getElementById('books');
        const select_authors = <HTMLSelectElement> document.getElementById('num_athr');
        const add_author = document.getElementById('add_author');
        const add_reference = document.getElementById('add_reference');
        const references = document.getElementById('references');
        const series = document.getElementById('series');
        const div_book = document.getElementById('book');
        const name_div = document.getElementById('name_div');
        const type_div = document.getElementById('type_div');
        const publisher = document.getElementById('publisher');
        const city = document.getElementById('city');

        const text = <HTMLSelectElement> document.getElementsByTagName('input');

        const name_book = <HTMLInputElement> document.getElementById('name_book');
        const type_book = <HTMLInputElement> document.getElementById('type_book');
        const city_book = <HTMLInputElement> document.getElementById('city_book');
        const publish = <HTMLInputElement> document.getElementById('publish');
        const year_publish = <HTMLInputElement> document.getElementById('year_publish');
        const page = <HTMLInputElement> document.getElementById('page');

        function selectedAuthor() {
            if (select_authors.options.selectedIndex === 2 || select_authors.options.selectedIndex === 3 || select_authors.options.selectedIndex === 4) {
                add_author.innerHTML = '';
                for (let x = 1; x <= +select_authors.value.toString(); x++) {
                    const div = document.createElement('div');
                    add_author.innerHTML += '<p>Прізвище  та інціали ' + x + '-го автора:</p><input type="text" placeholder="" class="name_athr"/>';
                    add_author.appendChild(div);
                }
                add_reference.style.display = 'block';
                add_author.style.display = 'block';
                div_book.style.display = 'flex';
            } else if (select_authors.options.selectedIndex === 5) {
                add_reference.style.display = 'block';
                add_author.style.display = 'flex';
                div_book.style.display = 'flex';
                add_author.innerHTML = '<p>Прізвище  та інціали одного<br> з авторів:</p><input type="text" id="athr_four" placeholder=""/>';
            }
        }
        function clearInput () {
            for (let y = 0; y < text.length; y++){
                text[y].value = '';
            }
        }
        function counterAuthor() {
            const mass_athr = [];
            const name_author = document.getElementsByClassName('name_athr');
            for (let x = 0; x < name_author.length; x++) {
                const buff = <HTMLInputElement> name_author[x];
                mass_athr[x] = buff.value;
            }
            return mass_athr.join(', ').valueOf();
        }

        for (let i = 0 ; i < select.length; i++ ) {
            select[i].addEventListener('change', function () {
                if (select_books.options.selectedIndex === 1 ) {
                    clearInput ();
                    add_author.innerHTML = '';
                    selectedAuthor();
                    series.style.display = 'none';
                    name_div.style.display = 'flex';
                    type_div.style.display = 'flex';
                    publisher.style.display = 'flex';
                    city.style.display = 'flex';
                } else if (select_books.options.selectedIndex === 2) {
                    clearInput ();
                    add_author.innerHTML = '';
                    selectedAuthor();
                    series.innerHTML = '<p>Серія випуску роботи: </p><input type="text" placeholder="" id="series_name"/>';
                    series.style.display = 'flex';
                    name_div.style.display = 'flex';
                    type_div.style.display = 'flex';
                    publisher.style.display = 'flex';
                    city.style.display = 'flex';
                } else if (select_books.options.selectedIndex === 3) {
                    clearInput ();
                    series.innerHTML = '<p>Назва роботи: </p><input type="text" ' +
                        'placeholder="Збірник наукових праць молодих учених" id="science_work"/> ' +
                        '<div></div> <p>Принадлежність: </p><input type="text" placeholder="Одес. нац. акад. харч. технологій" ' +
                        'id="copyright"/>';
                    series.style.display = 'block';
                    add_reference.style.display = 'block';
                    add_author.style.display = 'none';
                    div_book.style.display = 'flex';
                    name_div.style.display = 'none';
                    type_div.style.display = 'none';
                    publisher.style.display = 'none';
                    city.style.display = 'flex';
                } else if (select_books.options.selectedIndex === 4) {
                    clearInput ();
                    add_author.innerHTML = '';
                    selectedAuthor();
                    series.innerHTML = '<p>Номер тому: </p><input type="text" placeholder="" id="num_tom"/> ' +
                        '<div></div> <p>Назва тому: </p><input type="text" placeholder="" id="name_tom"/>';
                    series.style.display = 'block';
                    name_div.style.display = 'flex';
                    type_div.style.display = 'flex';
                    publisher.style.display = 'flex';
                    city.style.display = 'flex';
                } else if (select_books.options.selectedIndex === 5) {

                } else if (select_books.options.selectedIndex === 6) {
                    clearInput ();
                    add_author.innerHTML = '<p>Назва закону: </p><input type="text" placeholder="Конституція України" id="name_law"/> <div></div>' +
                        '<p> Закон:</p><input type="text" placeholder="Закон від 28.06.1996 № 254к/96-ВР" id="law"/> <div></div>' +
                        '<p> Наказом:</p><input type="text" placeholder="Мін-во Юстиції України" id="pub_law"/>'
                    series.style.display = 'none';
                    add_reference.style.display = 'block';
                    add_author.style.display = 'block';
                    div_book.style.display = 'flex';
                    name_div.style.display = 'none';
                    type_div.style.display = 'none';
                    publisher.style.display = 'none';
                    city.style.display = 'flex';
                } else if (select_books.options.selectedIndex === 7 || select_books.options.selectedIndex === 8) {
                    clearInput ();
                    add_author.innerHTML = '<p>Прізвище  та інціали автора: </p><input type="text" placeholder="Цюндик О.Г." ' +
                        'id="name_athr"/> <div></div> <p>Назва роботи: </p><input type="text" ' +
                        'id="name_work" placeholder="Удосконалення технології виробництва комбікормів для коней"/> <div></div>' +
                        '<p>Науковий ступінь:</p><input type="text" id="degree" placeholder="Кандидат технічних наук"/><div></div>' +
                        '<p>Дата написання: </p><input type="text" id="date_write" placeholder="05.18.02"/> <div></div>' +
                        '<p>Дата захисту: </p><input type="text" id="protect" placeholder="16.12.2016 "/> <div></div>' +
                        '<p>Науковий керівник: </p><input type="text" id="science_hand" placeholder="Б.В. Єгоров"/> <div></div>' +
                        '<p>Наукова установа: </p><input type="text" id="institution" placeholder="ОНАХТ"/> <div></div>';
                    add_reference.style.display = 'block';
                    add_author.style.display = 'block';
                    div_book.style.display = 'flex';
                    name_div.style.display = 'none';
                    type_div.style.display = 'none';
                    publisher.style.display = 'none';
                    series.style.display = 'none';
                    city.style.display = 'flex';
                } else if (select_books.options.selectedIndex === 9) {
                    clearInput ();
                    add_author.innerHTML = '<p>Стандарт: </p><input type="text" placeholder="ДСТУ 7152:2010" id="iso"/> <div></div>' +
                        '<p>Назва стандарту: </p><input type="text" id="name_iso" placeholder="Видання. ' +
                        'Оформлення публікацій у журналах і збірниках"/> ';
                    add_reference.style.display = 'block';
                    add_author.style.display = 'block';
                    div_book.style.display = 'flex';
                    name_div.style.display = 'none';
                    type_div.style.display = 'none';
                    publisher.style.display = 'none';
                    series.style.display = 'none';
                    city.style.display = 'flex';
                } else if (select_books.options.selectedIndex === 10) {

                } else if (select_books.options.selectedIndex === 11) {
                    add_author.innerHTML = '';
                    clearInput();
                    selectedAuthor();
                    series.innerHTML = '<p>Назва статті:</p><input type="text" id="article_name" placeholder="Аналіз підприємства"> ' +
                        '<div></div> <p>За загальною редакцією:</p><input type="text" id="editor_article" placeholder="Немченка В.В.">';
                    name_div.style.display = 'flex';
                    type_div.style.display = 'none';
                    publisher.style.display = 'none';
                    series.style.display = 'block';
                    city.style.display = 'flex';
                } else if (select_books.options.selectedIndex === 12) {
                    add_author.innerHTML = '';
                    clearInput();
                    selectedAuthor();
                    series.innerHTML = '<p>Назва багатотомного видання:</p><input type="text" id="name_tom" ' +
                        'placeholder="Енцикл. Сучас. України"> <div></div> ' +
                        '<p>Номер тому:</p><input type="text" id="tom" placeholder="7">';
                    name_div.style.display = 'flex';
                    type_div.style.display = 'none';
                    publisher.style.display = 'none';
                    series.style.display = 'block';
                    city.style.display = 'flex';
                } else if (select_books.options.selectedIndex === 13) {
                    add_author.innerHTML = '';
                    clearInput();
                    selectedAuthor();
                    series.innerHTML = '<p>Назва глави або розділу:</p><input type="text" id="name_part" ' +
                        'placeholder="Основи управління сільськими територіями"> <div></div> ' +
                        '<p>За редакцією:</p><input type="text" id="editor_part" placeholder="А.П. Савкова"> <div></div>' +
                        '<p>Номер глави чи розділу:</p><input type="text" id="num_part" placeholder="2">';
                    name_div.style.display = 'flex';
                    type_div.style.display = 'flex';
                    publisher.style.display = 'none';
                    series.style.display = 'block';
                    city.style.display = 'flex';
                } else if (select_books.options.selectedIndex === 14) {
                    add_author.innerHTML = '';
                    clearInput();
                    selectedAuthor();
                    series.innerHTML = '<p>Назва статті:</p><input type="text" id="name_paper" ' +
                        'placeholder="Технологія отримання залізовмісного комплексу"> <div></div> ' +
                        '<p>Назва журнала:</p><input type="text" id="journal" placeholder="Харч. наука і технологія"> <div></div>' +
                        '<p>Номер тому:</p><input type="text" id="paper_tom" placeholder="3"><div></div>' +
                        '<p>Випуск:</p><input type="text" id="release" placeholder="5">';
                    name_div.style.display = 'none';
                    type_div.style.display = 'none';
                    publisher.style.display = 'none';
                    series.style.display = 'block';
                    city.style.display = 'none';
                } else {
                    div_book.style.display = 'none';
                    add_author.style.display = 'none';
                    add_reference.style.display = 'none';
                    series.style.display = 'none';
                }
            });
        }
        function isEmpty (sgn, element, sign) {
            return element.value === '' ? '' : (sgn + element.value + sign);
        }
        let counter = 1;
        add_reference.addEventListener('click', function () {
            const athr_four = document.getElementById('athr_four');
            if (select_books.options.selectedIndex === 1) {
                if (select_authors.options.selectedIndex === 5) {
                    references.innerHTML += counter + '.\t'  + isEmpty('', name_book, '' ) + ' ' +
                        '' + isEmpty(': ', type_book, '.' ) + isEmpty(' / ', athr_four, ' та ін.' ) + '' +
                        '' + isEmpty(' ', city_book, '' ) + '' +
                        '' + isEmpty(': ', publish, '' )  + isEmpty(', ', year_publish, '. ' ) + isEmpty('', page, ' c.' ) + '\n';
                    counter++;
                } else {
                    references.innerHTML += counter + '.\t' + counterAuthor() + isEmpty(' ', name_book, '' ) + ' ' +
                        '' + isEmpty(': ', type_book, '.' ) +
                        ' ' + isEmpty(' ', city_book, '' ) + '' +
                        '' + isEmpty(': ', publish, '' )  + isEmpty(', ', year_publish, '. ' ) + isEmpty('', page, ' c.' ) + '\n';
                    counter++;
                }
            } else if (select_books.options.selectedIndex === 2) {
                const series_name = <HTMLInputElement> document.getElementById('series_name');
                if (select_authors.options.selectedIndex === 5) {
                    references.innerHTML += counter + '.\t'  + isEmpty('', name_book, '' ) + ' ' +
                        '' + isEmpty(': ', type_book, '.' ) + isEmpty(' / ', athr_four, ' та ін.' ) + '' +
                        '' + isEmpty(' ', city_book, '' ) + '' +
                        '' + isEmpty(': ', publish, '' )  + isEmpty(', ', year_publish, '. ' ) + isEmpty('', page, ' c.' ) +'' +
                        '' + isEmpty(' (', series_name, ') ') + '\n';
                    counter++;
                } else {
                    references.innerHTML += counter + '.\t' + counterAuthor() + isEmpty(' ', name_book, '') + '' +
                        '' + isEmpty(': ', type_book, '.') +
                        '' + isEmpty(' ', city_book, '') + isEmpty(': ', publish, '') + '' +
                        '' + isEmpty(', ', year_publish, '. ') + isEmpty('', page, ' c.') + isEmpty(' (', series_name, ') ') + '\n';
                    counter++;
                }
            } else if (select_books.options.selectedIndex === 3) {
                const science_work = document.getElementById('science_work');
                const copyright = document.getElementById('copyright');
                references.innerHTML += counter + '.\t' + isEmpty('', science_work, '' ) + '' +
                    '' + isEmpty(' / ', copyright, '.' ) +
                    '' + isEmpty(' ', city_book, '' ) + '' +
                    '' + isEmpty(', ', year_publish, '. ' ) + isEmpty('', page, ' c.' ) + '\n';
                counter++;
            } else if (select_books.options.selectedIndex === 4) {
                const name_tom = document.getElementById('name_tom');
                const num_tom = document.getElementById('num_tom');
                if (select_authors.options.selectedIndex === 5) {
                    references.innerHTML += counter + '.\t' + counterAuthor() + isEmpty(' ', name_book, '' ) + '' +
                        '' + isEmpty(': ', type_book, '.' ) +
                        '' + isEmpty(' ', city_book, '' ) + isEmpty(': ', publish, '' ) + '' +
                        '' + isEmpty(', ', year_publish, '. ' ) + isEmpty('Т. ', num_tom, '' ) + '' +
                        '' + isEmpty(': ', name_tom, '. ' ) + isEmpty('', page, ' c.' )  + '\n';
                    counter++;
                } else {
                    references.innerHTML += counter + '.\t' + counterAuthor() + isEmpty(' ', name_book, '' ) + '' +
                        '' + isEmpty(': ', type_book, '.' ) + isEmpty(' / ', athr_four, ' та ін.' ) + '' +
                        '' + isEmpty(' ', city_book, '' ) + isEmpty(': ', publish, '' ) + '' +
                        '' + isEmpty(', ', year_publish, '. ' ) + isEmpty('Т. ', num_tom, '' ) + '' +
                        '' + isEmpty(': ', name_tom, '. ' ) + isEmpty('', page, ' c.' )  + '\n';
                    counter++;
                }
            } else if (select_books.options.selectedIndex === 5) {

            } else if (select_books.options.selectedIndex === 6) {
                const name_law = document.getElementById('name_law');
                const law = document.getElementById('law');
                const pub_law = document.getElementById('pub_law');
                references.innerHTML += counter + '.\t' + isEmpty('', name_law, '') + isEmpty(': ', law, '.') +
                    '' + isEmpty(' ', city_book, '') +
                    isEmpty(': ', pub_law, '') + isEmpty(', ', year_publish, '. ') + isEmpty('', page, ' c.') + '\n';
                counter++;
            } else if (select_books.options.selectedIndex === 7) {
                const name_work = document.getElementById('name_work');
                const degree = document.getElementById('degree');
                const name = document.getElementById('name_athr');
                const date_write = document.getElementById('date_write');
                const protect = document.getElementById('protect');
                const science_hand = document.getElementById('science_hand');
                const institution = document.getElementById('institution');
                references.innerHTML += counter + '.\t' + isEmpty('', name, '') + isEmpty(' ', name_work, '') +
                    '' + isEmpty(': автореф. дис. на здобуття наук. ступеня ', degree, '') + '' +
                    '' + isEmpty(': ', date_write, '') + isEmpty(': захист ', protect, '') + '' +
                    '' + isEmpty(' / наук. кер. ', science_hand, '.') + isEmpty(' ', city_book, '') + '' +
                    '' + isEmpty(': ', institution, '') + isEmpty(', ', year_publish, '. ' ) + isEmpty('', page, ' c.') + '\n';
                counter++;
            } else if (select_books.options.selectedIndex === 8) {
                const name_work = document.getElementById('name_work');
                const degree = document.getElementById('degree');
                const name = document.getElementById('name_athr');
                const date_write = document.getElementById('date_write');
                const protect = document.getElementById('protect');
                const science_hand = document.getElementById('science_hand');
                const institution = document.getElementById('institution');
                references.innerHTML += counter + '.\t' + isEmpty('', name, '') + isEmpty(' ', name_work, '') +
                    '' + isEmpty(': дис. на здобуття наук. ступеня ', degree, '') + isEmpty(': ', date_write, '') + '' +
                    '' + isEmpty(': захист ', protect, '') + '' +
                    '' + isEmpty(' / наук. кер. ', science_hand, '.') + isEmpty(' ', city_book, '') + '' +
                    '' + isEmpty(': ', institution, '') + isEmpty(', ', year_publish, '. ' ) + isEmpty( '', page, ' c.') + '\n';
                counter++;
            } else if (select_books.options.selectedIndex === 9) {
                const iso = document.getElementById('iso');
                const name_iso = document.getElementById('name_iso');
                references.innerHTML += counter + '.\t' + isEmpty('', iso, '') + isEmpty('. ', name_iso, '')  + '' +
                    '' + isEmpty('. ', city_book, '') + '' +
                    '' + isEmpty(', ', year_publish, '. ' ) + isEmpty('', page, ' c.') + '\n';
                    counter++;
            } else if (select_books.options.selectedIndex === 10) {
            } else if (select_books.options.selectedIndex === 11) {
                const article_name = document.getElementById('article_name');
                const editor_article = document.getElementById('editor_article');
                references.innerHTML += counter + '.\t' + counterAuthor() + isEmpty(' ', name_book, '' ) + ' ' +
                    '' + isEmpty(' // ', article_name, '' ) + isEmpty('/ за заг. ред. ', editor_article, '' ) + '' +
                    '' + isEmpty(' ', city_book, '' ) + '' +
                    ''  + isEmpty(', ', year_publish, '. ' ) + isEmpty('С. ', page, '' ) + '\n';
                counter++;
            } else if (select_books.options.selectedIndex === 12) {
                const name_tom = document.getElementById('name_tom');
                const tom = document.getElementById('tom');
                references.innerHTML += counter + '.\t' + counterAuthor() + isEmpty(' ', name_book, '' ) + ' ' +
                    '' + isEmpty(' // ', name_tom, '' ) + '' +
                    '' + isEmpty(' ', city_book, '' ) + '' +
                    '' + isEmpty(', ', year_publish, '. ' ) + isEmpty(' Т. ', tom, '' ) + '' +
                    '' + isEmpty(' С. ', page, '' ) + '\n';
                counter++;
            } else if (select_books.options.selectedIndex === 13) {
                const name_part = document.getElementById('name_part');
                const editor_part = document.getElementById('editor_part');
                const num_part = document.getElementById('num_part');

                references.innerHTML += counter + '.\t'  + isEmpty('', name_part, '' ) + '/ ' + counterAuthor() + '' +
                    '' + isEmpty(' // ', name_book, '' ) + isEmpty(': ', type_book, '.' ) + '' +
                    '' + isEmpty(' / за ред. ', editor_part, '' ) + '' +
                    '' + isEmpty(' ', city_book, '' ) + isEmpty(': ', publish, '' ) + '' +
                    '' + isEmpty(', ', year_publish, '. ' ) + isEmpty(' Тема ', num_part, '' )  + isEmpty(' С. ', page, '' )  + '\n';
                counter++;
            } else if (select_books.options.selectedIndex === 14) {
                const name_paper = document.getElementById('name_paper');
                const journal = document.getElementById('journal');
                const paper_tom = document.getElementById('paper_tom');
                const release = document.getElementById('release');
                references.innerHTML += counter + '.\t' + counterAuthor() + isEmpty(' ', name_paper, '' ) + ' ' +
                    '' + isEmpty(' // ', journal, '. ' ) + '' +
                    '' + isEmpty('', year_publish, '. ' )  + isEmpty(' T. ', paper_tom, '' ) + '' +
                    '' + isEmpty(', вип. ', release, '.' ) + isEmpty(' С. ', page, '. ' ) + '\n';
                counter++;

            };
        };
    }
}


