import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  showSecert : boolean = false;
  log = [];
  constructor() { }

  ngOnInit() {
  }
  onToggleDetails() {
    this.showSecert = !this.showSecert;
    //this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
