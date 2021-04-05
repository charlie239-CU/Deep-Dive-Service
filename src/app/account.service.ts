import { stringify } from "@angular/compiler/src/util";
import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";
@Injectable()
export class AccountsService{
    constructor(private logginService:LoggingService){}
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];
      statusUpdate=new EventEmitter<string>();
      onAdded(name: string, status: string) {
        this.accounts.push({name:name,status:status});
        this.logginService.loggingStatusChange(status)
      }
      onChanged(id:number,status:string) {
        this.accounts[id].status = status;
        this.logginService.loggingStatusChange(status)
      }
}