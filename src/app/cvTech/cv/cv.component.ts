import {Component, OnInit} from '@angular/core';
import { ListeCvComponent } from "../liste-cv/liste-cv.component";
import { DetailCvComponent } from "../detail-cv/detail-cv.component";
import { Personne } from '../../Model/Personne';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-cv',
  standalone: true,
  templateUrl: './cv.component.html',
  imports: [
    ListeCvComponent,
    DetailCvComponent,
    NgIf
  ],
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit{
  personnes: Personne[] = [];
  selectedPersonne!: Personne; 
  constructor(){
  }

ngOnInit() {
    this.personnes = [
        new Personne (1,'Ben Zaied','Mouna', 23,'mouna.png',7777777,'Etudiante Mamrouja'),
        new Personne (2,'Ouhibi','Ons', 22,'ons.png',8888888,'Etudiante Mamrouja 2'),
        new Personne(3,'Makni','Mariem', 22,'mariem.png',6666666,'Etudiante Teeba'),
        new Personne(4,'Taghlet','Narjes', 22,'jess.jpg',5555555,'Etudiante Teeba 2')
    ];
}

selectPersonne(personne :Personne){
this.selectedPersonne=personne;
}

}
