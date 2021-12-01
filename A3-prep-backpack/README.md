# LC-A3-Prep-Backpack

Backpack project ([starter code and instructions](https://replit.com/@CarolineRose/MarsRoverPrepExercise-TDD-StarterCode#backpack.js))

**Highlights:  TDD (Jasmine) | Classes | Objects | Arrays | Error Handling **

As review for Unit 1 of LaunchCode LC101 coding course, I am working on practice projects that cover some of the early concepts. This time: Classes and TDD.

The Backpack project required me to create specs for tests in Jasmine to use in TDD on classes that create a student, their backpack, and the items in the backpack. Each student has a backpack with a main compartment and front & side pockets. 

 I started by building tests for the `Item` class, to ensure that it properly constructs the name and location properties and throws approriate errors for missing inputs. 

The `Backpack` class should instantiate an empty bag with a side pocket that fits one `Item` and a main compartment and front pocket that can take any number of Items. We take advantage of the `assert.deepStrictEqual()` statement to check into the arrays that represent the main compartment and front pocket. We test positive and negative cases to verify the constructor is functioning properly.

We can fill the backpack with the constructor or by using the `addToBackpack()` method. The `addToBackpack()` method takes in an `Item` then checks its location before placing it in the approriate spot. These tests mirror the constructor tests.

The `findItemInBackpack()` method returns the location of the `Item` passed. Items in the main compartment or front pocket are stored in an array, which we access using the `findItemInArray()` helper function. If the `Item` is not found, we throw an error. We test positive and negative cases for each location.

To remove items, we use the `removeItemFromBackpack()` method, which first calls on `findItemInBackpack()` to confirm if the item is present and then pass along the location. The method then removes the `Item` and returns a confirmation message.


The `Student` class takes in only a name and creates a `Backpack` for that student. The fillBackpack() method uses an arg and a rest parameter to take in any amount of Items. It then calls on the `addToBackpack()` method of the `Backpack` class. It should throw an error if not passed any Items. To empty the backpack, we simply instantiate a new `Backpack`. 