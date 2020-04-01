import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as faker from 'faker';

@Component({
  selector: 'app-buy-turnip',
  templateUrl: './buy-turnip.component.html',
  styleUrls: ['./buy-turnip.component.css']
})


export class BuyTurnipComponent implements OnInit {

  displayedColumns: string[] = ['nickname', 'price', 'openTime', 'closeTime', 'queueSize'];
  dataSource = [];

  constructor(private router: Router) {
    for (let i = 0; i < 5; i++) {
      this.dataSource.push({
        sw: faker.phone.phoneNumber(),
        nickname : faker.name.firstName(),
        price: (Math.random() * 10000) % 850 >> 0,
        openTime : faker.date.recent(),
        closeTime : faker.date.recent(),
        queueSize : 5
      });
    }
  }

  ngOnInit() {
  }

}
