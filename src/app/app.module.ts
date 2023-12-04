import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ColorComponent } from './color/color.component';
import { LoginComponent } from './login/login.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { FormsModule } from '@angular/forms';
import { RainbowDirective } from './directives/rainbow.directive';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { FilsComponent } from './fils/fils.component';
import { CardComponent } from './card/card.component';
import { CustomDirective } from './custom-directive.directive';
import {CvComponent} from "./cvTech/cv/cv.component";
import {ListeCvComponent} from "./cvTech/liste-cv/liste-cv.component";
import {ItemCvComponent} from "./cvTech/item-cv/item-cv.component";
import {DetailCvComponent} from "./cvTech/detail-cv/detail-cv.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ColorComponent,
    LoginComponent,
    TaskManagerComponent,
    DefaultImagePipe,
    RainbowDirective,
    MiniWordComponent,
    FilsComponent,
    CardComponent,
    CustomDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ListeCvComponent,
    DetailCvComponent,
    ItemCvComponent,
    CvComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
