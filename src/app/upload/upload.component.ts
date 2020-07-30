import { Component, OnInit } from '@angular/core';
import { FileSystemFileEntry, NgxFileDropEntry } from 'ngx-file-drop';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  public files: NgxFileDropEntry[] = [];

  constructor(public dialogRef: MatDialogRef<UploadComponent>
    ) { }

  ngOnInit(): void {
  }

  public dropped(files: NgxFileDropEntry[]): void {
    this.files = files;
    for (const droppedFile of files) {

      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          console.log(droppedFile.relativePath, file);
        });
      }
    }
  }
  public fileOver(event): void{
    console.log(event);
  }
 
  public fileLeave(event): void{
    console.log(event);
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}
