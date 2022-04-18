export class Flight  {
    public id: number;
    public airline: string;
    public from: string;
    public to: string;
    public price: number;
    public departure_date: string;

    constructor(id: number, airline: string, from: string, to: string, price: number, departure_date: string){
        this.id = id;
        this.airline = airline;
        this.from = from;
        this.to = to;
        this.price = price;
        this.departure_date = departure_date;
    }
}