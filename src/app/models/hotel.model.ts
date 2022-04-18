export class Hotel  {
    public id: number;
    public name: string;
    public arrival_date: string;
    public price_per_night: number;
    public local_airports: string[];
    public nights: number;

    constructor(id: number, name: string, arrival_date: string, price_per_night: number, local_airports: string[], nights: number){
        this.id = id;
        this.name = name;
        this.arrival_date = arrival_date;
        this.price_per_night = price_per_night;
        this.local_airports = local_airports;
        this.nights = nights;
    }
}