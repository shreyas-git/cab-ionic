export class CabBooking {
    public employeeName:string;
    public time:string;
    public routeNumber:string;
    public dropPoint:string;
    public emailId:string;
    constructor(
        employeeName:string,
    time:string,
    routeNumber:string,
    dropPoint:string,
    emailId:string
    ){
        this.employeeName = employeeName;
        this.time = time;
        this.routeNumber = routeNumber;
        this.dropPoint = dropPoint;
        this.emailId = emailId;

    }


}