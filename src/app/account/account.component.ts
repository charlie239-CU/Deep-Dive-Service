import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountsService } from '../account.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
 // providers:[LoggingService]
})
export class AccountComponent {
  constructor(private service:LoggingService,private accountsService:AccountsService){}
  @Input() account: {name: string, status: string};
  @Input() id: number;
  

  onSetTo(status: string) {
    this.accountsService.onChanged(this.id,status)
   // this.service.loggingStatusChange(status);
   this.accountsService.statusUpdate.emit(status)
  }
 
}
