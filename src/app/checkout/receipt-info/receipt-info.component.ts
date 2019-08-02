import { Component, OnInit } from '@angular/core';
// Constant
import { appPath } from '../../app-path.const';
@Component({
  selector: 'app-receipt-info',
  templateUrl: './receipt-info.component.html',
  styleUrls: ['./receipt-info.component.css']
})
export class ReceiptInfoComponent implements OnInit {
  path = appPath;

  constructor() { }

  ngOnInit() {
  }

}
