import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngluarAssignments';
  serverName : string = 'Test';
  serverStatus : boolean = false;
  serverID : string = "10";
  sStatus : string = "offline";
  servers = ['TestServer','TestServer 2'];

  constructor() {
    this.sStatus = Math.random() > 0.5 ? "online" : "offline";
  }

  getServerCreated() {
    this.serverStatus = true;
    this.servers.push(this.serverName);
    //this.serverName = "Server was created and server name is " + this.serverName;
  }
  getColor() {
    return this.sStatus === "online" ? "green" : "red";
  }
}
