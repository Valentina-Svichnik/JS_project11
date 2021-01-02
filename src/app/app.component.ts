import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { randomBytes } from 'crypto';
import { myDet } from './shared/models/det.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'project11';
  addCounts = 10;

  dets = [
    new myDet(1,'name 1'),
    new myDet(2,'name 2'),
    new myDet(3,'name 3'),
    new myDet(4,'name 4'),
    new myDet(5,'name 5'),
    new myDet(6,'name 6'),
    new myDet(7,'name 7'),
    new myDet(8,'name 8'),
    new myDet(9,'name 9'),
    new myDet(10,'name 10'),
  ]

  deleteCard(elm) {
    for (let i=0; i<this.dets.length; i++){
      if (this.dets[i]['id'] === elm.id) {
        this.dets.splice(i, 1);
      }
    }
  }

  addCard(elm) {
    this.addCounts++;
    this.dets.push({id: this.addCounts, name: elm.value, status: Boolean(Math.round(Math.random()))})
  }
}
