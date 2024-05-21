# Does JavaScript really have classes?

If speaking technically, JavaScript doesn't have classes.
Yes, JavaScript supports classes. This feature was introduced with the ECMAScript 2015 specification (often shortened to ES6). However, it's important to understand that JavaScript is fundamentally a prototype-based language. Its classes primarily act as syntactic sugar, providing a familiar way to define objects with properties and methods. This approach might seem similar to class-based languages like Java or C++, but underneath, JavaScript works differently using prototypes for inheritance.

## What is OOP?

- OOP: Object-Oriented Programming.

- Focuses on Objects: It's a way of structuring code by creating objects.

- Objects Model Real-World Things: These objects represent things like cars, animals, or bank accounts.

- Objects Have Properties and Methods :-

  - Properties: Data that describes the object (e.g., a car's color or an animal's type).

  - Methods: Actions the object can perform (e.g., a car accelerating or an animal making a sound).

- Paradigm: OOP is a programming paradigm, which refers to the overall style and approach to writing code.

## What is an Object?

- Represent real-world things (like cars, animals, or bank accounts).

- Collection of properties and methods.

## Why use OOP?

Object-oriented programming (OOP) tackles the issue of messy, tangled code (spaghetti code) by organizing it into modular objects. These objects bundle data (often called properties) and methods, promoting reusability, maintainability, and clear code structure through features like classes and abstraction. This makes OOP ideal for managing complex software projects.

## Parts of OOP

Object Literal: Literally means it's just a plain object { }.

- Constructor Function: A special function that initializes objects with properties and methods when they are created.

- Prototypes: In JavaScript, a prototype is the blueprint from which objects inherit properties and methods.

- Classes: A blueprint that defines the properties and methods that objects of that class will share.

- Instances (new, this):

  - Instances are objects created from a class using the new keyword.
  - The this keyword refers to the current object within a method.

## 4 pillars of OOPs

- Abstraction: Focuses on essential details, hiding complexity.

- Encapsulation: Bundles data and methods within an object, controlling access.

- Inheritance: Creates new objects (subclasses) that inherit properties and behaviors from existing ones (superclasses).

- Polymorphism: Allows objects to respond differently to the same message based on their type.
