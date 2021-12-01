# LC-A3-Prep-Cabinets-pt2

##### Building Storage, part 2 ([starter code and instructions](https://replit.com/@CarolineRose/CabinetsPart2-StarterCode#instructions.txt))

###### Highlights: TDD | Classes | Modules | Error Handling


This portion of the cabinets project built on the original objects by splitting them out into classes and using TDD to flesh out each class.

The resulting app stores media as instances of the `Contents`, `Shelf`, and `Cabinet` classes, then provides methods appropriate to each class.

Each instance of `Contents` contains:
    - books
    - frames
    - decor

Each instance of `Shelf` contains:
    - a name
    - a single `Contents` object
    - checkStatus method to build a string literal of items on the shelf
    - moveItems method to move items to and from a shelf, with error handling

Each instance of `Cabinet` contains:
    - at least one `Shelf` object
    - a staging area, for moving items on or off shelves   
    - methods to total and report the items in the cabinet
    - methods to manipulate items on shelves of the cabinet
