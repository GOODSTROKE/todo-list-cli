# The To-Do List App (command line interface)

In this project we'll be building a command line program that lets the user maintain and edit a list of to-do items!

## Requirements

85 points
* The user is able to add new to-do items
* A list of to-do items is displayed to the user
  * The number of to-do items is displayed to the user
  * If the user has no to-do items, this should be indicated to the user
* Tell the user if they entered an invalid action

15 Points
* The user is able to display items as incomplete/complete
* The user is able to set existing to-do items as complete


## An Example

Below is an example of what your application might look like. You're welcome to take creativity liberties with the exact user interface!

---

```
Welcome to the To-Do List Manager Application! 

==============================================

Your to-do list is empty.

~ Select an action ~
[1] Create a to-do item
[2] Complete a to-do item
> 1

~ Creating a new to-do item ~
What is this to-do item called?
> Go to the dentist

==============================================

You have 1 to-do item(s).
1. [incomplete] Go to the dentist

~ Select an action ~
[1] Create a to-do item
[2] Complete a to-do item
> 1

~ Creating a new to-do item ~
What is this to-do item called?
> Buy groceries

==============================================

You have 2 to-do item(s).
1. [incomplete] Go to the dentist
2. [incomplete] Buy groceries

~ Select an action ~
[1] Create a to-do item
[2] Complete a to-do item
> 2

~ Completing a to-do item ~
Which to-do item would you like to complete?
> 2

==============================================

You have 2 to-do item(s).
1. [incomplete] Go to the dentist
2. [complete]   Buy groceries

~ Select an action ~
[1] Create a to-do item
[2] Complete a to-do item
>
```

---

## How do I build this?

Start off by trying this without any hints. If you find yourself stuck, check out the `HINTS.md` file.

## Stretch Goals

* Re-organize your code to make use of functions
* Allow the user to both complete and uncomplete to-do items
* Allow the user to fully delete a to-do item from the list
* Allow the user to edit the text of an existing to-do item
* Get creative! Add a new feature that you would find useful in a to-do list
