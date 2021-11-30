
// Copy these and place after your getFlights() function (but still inside) the app component class.
// Then un-comment them.

// COPY LINES BELOW ONLY

// filterFlights(keyword: string): void {
//     keyword = keyword.toLowerCase();
//     let matchingArrivals: Flight[] = [];
//     for(let i=0; i < this.allArrivals.length; i++) {
//         let flight = this.allArrivals[i];
//         let flightInfo = (flight.airline + flight.flightNo + flight.origin + flight.status).toLowerCase();
//         if (flightInfo.indexOf(keyword) >= 0) {
//             matchingArrivals.push(flight);
//         }            
//     }
//     this.filteredArrivals = [...matchingArrivals];
//     let matchingDepartures: Flight[] = [];
//     for(let i=0; i < this.allDepartures.length; i++) {
//         let flight = this.allDepartures[i];
//         let flightInfo = (flight.airline + flight.flightNo + flight.destination + flight.status).toLowerCase();
//         if (flightInfo.indexOf(keyword) >= 0) {
//             matchingDepartures.push(flight);
//         }
//     }
//     this.filteredDepartures = [...matchingDepartures];
// }

// resetFlights(): void {
//     this.filteredArrivals = [...this.allArrivals];
//     this.filteredDepartures = [...this.allDepartures];
// }