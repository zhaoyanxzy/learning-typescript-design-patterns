Define an interface for creating an object, but let subclasses decide which class to instantiate. The Factory method lets a class defer instantiation it uses to subclasses.

Factory pattern creates object without exposing the creation logic to the client and refer to newly created object using a common interface.

## Simple Factory
Client uses Factory to create Products

# Implementation Guidelines
Use Factory pattern when:
- The object needs to be extended to subclasses
- The classes doesn't know what exact subclasses it has to create
- The product implementation tend to change over time and the client remains unchanged
