import { Injectable } from "@angular/core";

@Injectable()
export class LoggingService{
    loggingStatusChange(status:string)
    {
        console.log("server status change, new status:"+status)
    }
}