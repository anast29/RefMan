import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxMaskModule} from 'ngx-mask';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AuthorizationUaComponent} from './authorization-ua/authorization-ua.component';
import { RefmanagerUaComponent } from './refmanager-ua/refmanager-ua.component';
import { ArticlesComponent } from './articles/articles.component';
import { PapersUaComponent } from './papers-ua/papers-ua.component';
import {RefmanagerHeaderUaComponent} from './refmanager-ua/refmanager-header-ua.component';
import {RefmanagerFooterUaComponent} from './refmanager-ua/refmanager-footer-ua.component';
import {ArticlesHeaderComponent} from './articles/articles-header.component';
import { FoodscienceUaComponent } from './foodscience-ua/foodscience-ua.component';
import {FoodscienceAuthorUaComponent} from './foodscience-ua/foodscience-author-ua.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { RefmanagerEnComponent } from './refmanager-en/refmanager-en.component';
import {RefmanagerHeaderEnComponent} from './refmanager-en/refmanager-header-en.component';
import { AuthorizationEnComponent } from './authorization-en/authorization-en.component';
import {ProfileEditComponent} from './profile/profile-edit.component';
import {ArticleTableComponent} from './articles/article-table.component';
import { ProfileEnComponent } from './profile-en/profile-en.component';
// import {CKEditorComponent, CKEditorModule} from 'ng2-ckeditor';

const routes = [
    {path: 'login', children: [{
            path: '', component: AuthorizationUaComponent
        }] },
    {path: 'login-en', children: [{
            path: '', component: AuthorizationEnComponent
        }] },
    {path: 'articles', children: [
            {path: '', component: ArticlesHeaderComponent, outlet: 'header'} ,
            {path: '', component: ArticlesComponent, outlet: 'main', pathMatch: 'full'},
            {path: '', component: RefmanagerFooterUaComponent, outlet: 'footer'},
        ]},
    {path: 'papers', children: [
            {path: '', component: ArticlesHeaderComponent, outlet: 'header'} ,
            {path: '', component: PapersUaComponent, outlet: 'main', pathMatch: 'full'},
            {path: '', component: RefmanagerFooterUaComponent, outlet: 'footer'},
        ]},
    {path: '_articles', children: [
            {path: '', component: ArticlesHeaderComponent, outlet: 'header'} ,
            {path: '', component: ArticleTableComponent, outlet: 'main', pathMatch: 'full'},
            {path: '', component: RefmanagerFooterUaComponent, outlet: 'footer'},
        ]},
    {path: 'profile', children: [
            {path: '', component: ArticlesHeaderComponent, outlet: 'header'} ,
            {path: '', component: ProfileComponent, outlet: 'main', pathMatch: 'full'},
            {path: '', component: RefmanagerFooterUaComponent, outlet: 'footer'},
        ]},
    {path: 'profile_en', children: [
            {path: '', component: ArticlesHeaderComponent, outlet: 'header'} ,
            {path: '', component: ProfileEnComponent, outlet: 'main', pathMatch: 'full'},
            {path: '', component: RefmanagerFooterUaComponent, outlet: 'footer'},
        ]},
    {path: 'profile/edit', children: [
            {path: '', component: ArticlesHeaderComponent, outlet: 'header'} ,
            {path: '', component: ProfileEditComponent, outlet: 'main', pathMatch: 'full'},
            {path: '', component: RefmanagerFooterUaComponent, outlet: 'footer'},
        ]},
    {path: 'food_science/author', children: [
            {path: '', component: ArticlesHeaderComponent, outlet: 'header'} ,
            {path: '', component: FoodscienceAuthorUaComponent, outlet: 'main', pathMatch: 'full'},
            {path: '', component: RefmanagerFooterUaComponent, outlet: 'footer'},
        ]},
    {path: 'food_science/article', children: [
            {path: '', component: ArticlesHeaderComponent, outlet: 'header'} ,
            {path: '', component: FoodscienceUaComponent, outlet: 'main', pathMatch: 'full'},
            {path: '', component: RefmanagerFooterUaComponent, outlet: 'footer'},
        ]},
    {path: '', children: [
            {path: '', component: RefmanagerHeaderUaComponent, outlet: 'header', pathMatch: 'full'},
            {path: '', component: RefmanagerUaComponent, outlet: 'main', pathMatch: 'full'},
            {path: '', component: RefmanagerFooterUaComponent, outlet: 'footer', pathMatch: 'full'}
        ] },
    {path: 'en', children: [
            {path: '', component: RefmanagerHeaderEnComponent, outlet: 'header', pathMatch: 'full'},
            {path: '', component: RefmanagerEnComponent, outlet: 'main', pathMatch: 'full'},
            {path: '', component: RefmanagerFooterUaComponent, outlet: 'footer', pathMatch: 'full'}
        ] }

];
@NgModule({
    declarations: [
        AppComponent,
        AuthorizationUaComponent,
        RefmanagerUaComponent,
        ArticlesComponent,
        PapersUaComponent,
        RefmanagerHeaderUaComponent,
        RefmanagerFooterUaComponent,
        ArticlesHeaderComponent,
        FoodscienceUaComponent,
        FoodscienceAuthorUaComponent,
        ProfileComponent,
        RefmanagerEnComponent,
        RefmanagerHeaderEnComponent,
        AuthorizationEnComponent,
        ProfileEditComponent,
        ArticleTableComponent,
        ProfileEnComponent
        // CKEditorComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes),
        RouterModule.forChild(routes),
        NgxMaskModule.forRoot()
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
