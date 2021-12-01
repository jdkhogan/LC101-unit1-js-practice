import { Component, OnInit, Input } from '@angular/core';
import { List } from '../list';

@Component({
    selector: 'app-current-list',
    templateUrl: './current-list.component.html',
    styleUrls: ['./current-list.component.css']
})

export class CurrentListComponent implements OnInit {

    // xTODO: use the @Input() decorator (already imported above) to bring in currentList and allLists from the main component - you also need code in the <app-current-list> element in main.component.html for this to work!
    @Input() currentList: List;
    @Input() allLists: List[];

    editing: boolean = false;
    formIncomplete: boolean = false;

    constructor() { }

    ngOnInit() {}

    addItem(): void {
        this.currentList.items.push("");
    }
    
    saveItem(item: string, i: number): void {
        this.currentList.items[i] = item;
    }

    saveList(title: string, type: string, desc: string): void {
        if (title === '') {
            this.formIncomplete = true;
        } else {
            // Remove any items that were left blank
            let i: number = 0;
            let item: string;
            while (i < this.currentList.items.length) {
                item = this.currentList.items[i];
                if (item.trim() === "") {
                    this.currentList.items.splice(i,1);
                } else {
                    i += 1;
                }
            }
            let updatedItems = this.currentList.items;
            this.currentList = new List(title, type, desc);
            this.currentList.items = updatedItems;
            this.formIncomplete = false;
            this.editing = false;
        }
    }

    deleteList(): void {
        // TODO: Add a confirmation pop-up here just like you would in the DOM to make sure the user really wants to delete the list before allowing it to happen!
        if (confirm("Are you sure you want to delete this list?")) {
            this.allLists.splice(this.allLists.indexOf(this.currentList), 1);
            if (this.allLists.length > 0) {
                this.currentList = this.allLists[0];
            } else {
                this.currentList = null;
            }
        }
    }

}
