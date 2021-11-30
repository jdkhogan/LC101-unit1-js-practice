import { Component } from '@angular/core';
import { Flight } from './flight';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flight-status-board';
  constructor() { }

  ngOnInit() {
    this.getFlights();
  }

  allArrivals: Flight[] = [];
  allDepartures: Flight[] = [];
  filteredArrivals: Flight[] = []; 
  filteredDepartures: Flight[] = [];

  arrivalText: string = "arrival";
  departureText: string = "departure";
  showArrivals: boolean = true;

  getFlights(): void {
    fetch("assets/data/flights.json").then((response) => {
      response.json().then((json) => {
          json.forEach((flight: any) => {
              let newFlight = new Flight(flight.airline, flight.flightNumber, flight.origin, flight.departure, flight.destination, flight.arrival);
              newFlight.gate = flight.gate;
              newFlight.status = flight.status;
              if ( newFlight.origin.includes("Chattanooga") ) {
                this.allDepartures.push(newFlight);
                this.filteredDepartures = [...this.allDepartures];
              } else {
                this.allArrivals.push(newFlight);
                this.filteredArrivals = [...this.allArrivals];
              }
            });
        });
    });
  }

  filterFlights(keyword: string): void {
    keyword = keyword.toLowerCase();
    let matchingArrivals: Flight[] = [];
    for(let i=0; i < this.allArrivals.length; i++) {
        let flight = this.allArrivals[i];
        let flightInfo = (flight.airline + flight.flightNumber + flight.origin + flight.status).toLowerCase();
        if (flightInfo.indexOf(keyword) >= 0) {
            matchingArrivals.push(flight);
        }            
    }
    this.filteredArrivals = [...matchingArrivals];
    let matchingDepartures: Flight[] = [];
    for(let i=0; i < this.allDepartures.length; i++) {
        let flight = this.allDepartures[i];
        let flightInfo = (flight.airline + flight.flightNumber + flight.destination + flight.status).toLowerCase();
        if (flightInfo.indexOf(keyword) >= 0) {
            matchingDepartures.push(flight);
        }
    }
    this.filteredDepartures = [...matchingDepartures];
}

  resetFlights(): void {
    this.filteredArrivals = [...this.allArrivals];
    this.filteredDepartures = [...this.allDepartures];
}

}
