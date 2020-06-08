# Singleton Design Pattern

## Overview
- Used when we need to ensure that only one object of a particular class needs to be created.
- All further references to the objects are referred to the same underlying instance created.

## Advantages
- Controls concurrent access to the resource
- Ensures there is only one object available across the application in a controlled state

## Guidelines
- Ensure only one instance of a class exists
- Provide global access to that instance by:
	- Declaring all constructors of the class to be private
	- Providing static method that returns a reference to the instance
	- The instance is stored as a private static variable
