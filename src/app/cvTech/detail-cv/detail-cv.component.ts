import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Personne} from "../../Model/Personne";

@Component({
  selector: 'app-detail-cv',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent {
constructor() {
}
@Input() personne! : Personne;

}
