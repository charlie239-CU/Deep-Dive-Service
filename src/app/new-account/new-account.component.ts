import { Component, EventEmitter, Output } from '@angular/core';
import { AccountsService } from '../account.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
// providers:[LoggingService]
})
export class NewAccountComponent {
  constructor(private service:LoggingService,private accountsService:AccountsService){
    this.accountsService.statusUpdate.subscribe((status:string)=>alert("new status:"+status))
  }
  
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.onAdded(accountName,accountStatus)
  //  this.service.loggingStatusChange(accountStatus)
    
  }
}
