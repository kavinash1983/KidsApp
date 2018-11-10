import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material";
import { MAT_DIALOG_DATA} from "@angular/material";
import { MatDialog, MatDialogConfig} from "@angular/material";
@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.css']
})
export class DialogBodyComponent implements OnInit {

  constructor(private dialog: MatDialog ,
    public dialogRef: MatDialogRef<DialogBodyComponent>){}

    close() {
      this.dialogRef.close("Thanks for using me!");
    }

  ngOnInit() {
  }


  openDialog(msg) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = msg;
    let dialogRef = this.dialog.open(DialogBodyComponent, dialogConfig);
  }

}
