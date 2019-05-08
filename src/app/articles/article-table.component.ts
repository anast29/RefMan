import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-articles',
    templateUrl: './article-table.component.html',
    styleUrls: ['./articles.component.css']
})
export class ArticleTableComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
    }

    createPaper() {
        this.router.navigate(['papers']);
    }

}
