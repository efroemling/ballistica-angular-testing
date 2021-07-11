import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService,
              private _snackBar: MatSnackBar,
  ) {
  }

  ngOnInit() {
  }

  clearClick() {
    this.messageService.clear();
    this._snackBar.open('Messages Cleared', 'Nice!', {duration: 1000}
    );
  }

}