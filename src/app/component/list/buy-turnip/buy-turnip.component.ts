import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../../../service/data.service';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Island, TurnipExchangeResponse} from '../../../interface/Island';

const jlssb = new Audio('../assets/jlssb.wav');

@Component({
  selector: 'app-buy-turnip',
  templateUrl: './buy-turnip.component.html',
  styleUrls: ['./buy-turnip.component.scss']
})


export class BuyTurnipComponent implements OnInit {

  allColumns = ['name', 'fruit', 'turnipPrice', 'turnipCode', 'commerce', 'hemisphere', 'islandTime', 'creationTime', 'queued', 'description'];

  displayedColumns: string[] = ['name', 'turnipPrice', 'queued', 'description'];
  dataSource = new MatTableDataSource<Island>();

  dataRefreshRateSec = 30;
  autoRefresh = false;

  priceLowerBound = null;
  queueUpperBound = null;
  audioAlert = true;

  cachedData = [];

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private router: Router, private dataService: DataService) {
  }

  ngOnInit() {
    this.fetchData();
    this.fetchDataTimeout();
  }

  fetchData() {
    this.dataService.getIslands().subscribe((res: TurnipExchangeResponse) => {
      this.cachedData = res.islands.sort((a, b) => b.turnipPrice - a.turnipPrice);
      this.updateDataSource();
    }, err => {
      console.log(JSON.stringify(err));
    });
  }

  updateDataSource() {
    let check1 = false;
    let check2 = false;

    let data = Array.from(this.cachedData);
    if (this.priceLowerBound) {
      check1 = true;
      data = data.filter(x => x.turnipPrice > this.priceLowerBound);
    }
    if (this.queueUpperBound != null) {
      check2 = true;
      data = data.filter(x => x.queued < this.queueUpperBound);
    }
    if (check1 && check2 && this.audioAlert) {
      jlssb.play();
    }

    this.dataSource = new MatTableDataSource(data);
    this.dataSource.sort = this.sort;
  }

  fetchDataTimeout() {
    setTimeout( () => {
      if (this.autoRefresh){
        this.fetchData();
      }
      this.fetchDataTimeout();
      }, this.dataRefreshRateSec * 1000);
  }

  descriptionFilter = (str: string) => {
    this.dataSource.filter = str.trim().toLocaleLowerCase();
  }

  goTo(code: string){
    const url = `https://turnip.exchange/island/${code}`;
    window.open(url);
  }

  checkColumn(column: string) {
    const displayed = new Set(this.displayedColumns);

    return displayed.has(column);
  }

  toggleColumn(event, column: string){
    event.preventDefault();
    const displayed = new Set(this.displayedColumns);
    if (displayed.has(column)) {
        displayed.delete(column);
    } else {
        displayed.add(column);
    }

    const newDisplayedColumns = [];

    for (const cln of this.allColumns) {
        if (displayed.has(cln)){
          newDisplayedColumns.push(cln);
        }
    }

    this.displayedColumns = newDisplayedColumns;
  }

}
