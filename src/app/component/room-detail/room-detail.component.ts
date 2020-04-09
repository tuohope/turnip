import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';


@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.scss']
})
export class RoomDetailComponent implements OnInit {

  displayedColumns: string[] = ['nickname', 'enqueueTime', 'dequeueTime'];
  dataSource = [];

  constructor() {
    for (let i = 0; i < 5; i++) {
        this.dataSource.push({
          sw: faker.phone.phoneNumber(),
          nickname : faker.name.firstName(),
          enqueueTime : faker.date.recent(),
          dequeueTime : null,
        });
    }
  }

  ngOnInit() {
  }

}
