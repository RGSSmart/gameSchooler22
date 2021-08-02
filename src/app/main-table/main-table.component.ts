import { Component, OnInit } from '@angular/core';
import { STUDENTS } from 'src/data';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css']
})
export class MainTableComponent implements OnInit {

  dataSource = STUDENTS;
  displayedColumns = ["id",  "rang","name", "score", "grades", "life","avg","actions"];
  constructor() { }
  ngOnInit() {
    this.dataSource = STUDENTS.sort((a,b)=> b.score-a.score );
  }

  details(item) {
     alert(item.id); 
    }
}
