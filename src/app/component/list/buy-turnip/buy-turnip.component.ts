import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../../../service/data.service';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Island, TurnipExchangeResponse} from '../../../interface/Island';

@Component({
  selector: 'app-buy-turnip',
  templateUrl: './buy-turnip.component.html',
  styleUrls: ['./buy-turnip.component.css']
})


export class BuyTurnipComponent implements OnInit {

  displayedColumns: string[] = ['name', 'fruit', 'turnipPrice', 'islandTime', 'creationTime', 'queued'];
  dataSource = new MatTableDataSource<Island>();

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private router: Router, private dataService: DataService) {
  }

  ngOnInit() {
    this.fetchData();
  }


  fetchData() {
    this.dataService.getIslands().subscribe((res: TurnipExchangeResponse) => {
      this.dataSource = new MatTableDataSource(res.islands.sort((a,b) => b.turnipPrice - a.turnipPrice));
      this.dataSource.sort = this.sort;
    }, err => {
      alert(JSON.stringify(err));
    });
  }

  goTo(code: string){
    const url = `https://turnip.exchange/island/${code}`;
    window.open(url);
  }


}
