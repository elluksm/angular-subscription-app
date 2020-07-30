import { Component, OnInit } from '@angular/core';
import { UploadComponent } from '../upload/upload.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(public dialog: MatDialog) {}


  uploadModal(): void {
    const dialogRef = this.dialog.open(UploadComponent, {});
  }
  ngOnInit(): void {
  }

}
