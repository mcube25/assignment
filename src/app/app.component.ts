import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: `
.online {
  color: white;
}
  `
})
export class serversComponent implements onInit {
  allowNewServer=false;
  serverCreationStatus='no server was created';
  serverName='Testserver';
  serverCreated = false;
  serverStatus: string ='offline';
  servers = ['Testserver','Testserver 2']

  constructor(){
    this.serverStatus = Math.random()> 0.5 ? 'online': 'offline';
    getServerStatus(){
      return this.serverStatus;
    }
    setTimeout(() => {
      this.allowNewServer=true;
    }, 2000);
  }
  getColor(){
    return this.serverStatus === 'online'? 'green':'red';
  }
  ngOnInit(){
    onCreateServer(){
      this.serverCreated=true;
      this.servers.push(this.serverName);
      this.serverCreationStatus='server was created! Name is'+this.serverName;

    }
    onUpdateServerName(event: EVENT){
      this.serverName = (<HTMLInputElement>event.target).value;
    }
  }
}
