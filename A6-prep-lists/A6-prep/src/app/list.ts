export class List {

    title: string;
    type: string;
    desc: string;
    items: string[];

    constructor(title: string, type: string, desc: string) {
        this.title = title;
        this.type = type;
        this.desc = desc;
        this.items = []; // always initialized to empty array
    }

    sortItems() {
        this.items.sort((a,b) => a.localeCompare(b, undefined, {sensitivity: 'base'}));
    }

}
