import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-room-modal',
  templateUrl: './create-room-modal.component.html',
  styleUrls: ['./create-room-modal.component.css']
})
export class CreateRoomModalComponent implements OnInit {
  createIslandForm: FormGroup;
  isRequestInProgress = false;


  constructor(public dialogRef: MatDialogRef<CreateRoomModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.createIslandForm = this.formBuilder.group({
      price: ['', Validators.required],
      openTime: ['', Validators.required],
      islandPass: ['', Validators.required],
      otherInfo: [''],
      roomType: ['buy', Validators.required],
      pplCount: ['1', Validators.required],
    });
  }


  submit() {
    console.log(this.createIslandForm.value);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
