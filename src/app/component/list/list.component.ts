import { Component, OnInit } from '@angular/core';
import {CreateRoomModalComponent} from '../create-room-modal/create-room-modal.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  viewType = 'buy';

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openCreateRoomModal() {
    const dialogRef = this.dialog.open(CreateRoomModalComponent
      , {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
