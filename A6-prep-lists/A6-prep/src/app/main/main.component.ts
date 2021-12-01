import { Component, OnInit } from '@angular/core';
import { List } from '../list';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

    // Declare fields (properties of class)
    allLists: List[] = []; // array of List objects
    currentList: List = null; // List object to display in current-list component
    addingNewList: boolean = false;
    formIncomplete: boolean = false;

    constructor() { 
    }

    ngOnInit() {
        this.createInitialLists();
    }

    // For the sake of demonstration, create some existing lists since there is no back end (database)
    createInitialLists(): void {
        this.allLists = [
            new List("Schnucks", "shopping", "groceries and household items"),
            new List("Home Depot", "shopping", "hardware for bathroom project"),
            new List("Errands", "to do", "bank, grocery shopping, etc."),
            new List("Household Chores", "to do", "laundry, cleaning, etc."),
            new List("Things to Pack", "to do", "everything needed for weekend trip")
        ]
        this.allLists[0].items = ["apples", "lettuce", "pita chips", "dark chocolate Oreos", "ground cinnamon", "flour", "Coke Zero", "Ben & Jerry's Non-Dairy Cherry Garcia", "Activia Black Cherry yogurt", "Parmesan cheese", "Cashew  milk", "toothpaste", "shampoo", "AA batteries"];
        this.allLists[1].items = ["furnace filters", "shower rack", "paint samples", "doorknob for bathroom", "towel holder", "masonry drill bits"];
        this.allLists[2].items = ["Drop business deposit at bank", "Pick up prescriptions", "Go grocery shopping (see Schnucks list)"];
        this.allLists[3].items = ["Unload dishwasher", "Clean out fridge", "Reload dishwasher", "Take out trash & recyclables", "Sweep kitchen floor", "Wash sheets & towels", "Change furnace filter"];
        this.allLists[4].items = ["shirts & pants for 3 days", "undies", "socks and shoes", "sleepwear", "light coat", "toiletries (don't forget deodorant!!!)", "hair clips", "phone charger", "pillow"];

        this.currentList = this.allLists[0]; // set default now that some lists are in place
    }

    // Select new list to view
    viewNewList(list: List): void {
        this.currentList = list;
    }

    // Create new list
    createNewList(title: string, type: string, desc: string): void {
        if (title === '') {
            this.formIncomplete = true;
        } else {
            this.allLists.push(new List(title, type, desc));
            this.formIncomplete = false;
            this.addingNewList = false;
        }
    }

}
