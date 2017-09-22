import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'app-people-form',
    templateUrl: './people-form.component.html',
    styleUrls: ['./people-form.component.css']
})
export class PeopleFormComponent implements OnInit {

    constructor(
        public dialogRef: MdDialogRef<PeopleFormComponent>,
        @Inject(MD_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

    ngOnInit() {
        console.log(this.data);
    }

}
