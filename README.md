# Method Factory Pattern

The following text was obtained from the book [Head First Desing Patterns](https://www.amazon.com/-/es/Eric-Freeman/dp/0596007124).

Instantiation is an activity that shouldn´t alaways be done in public and can be often lead to coupling problems.

If your code is written to an interface, then it will work with any new classes implementing that interface through polymorphism. However, when you make use of lots of concrete classes, you are looking for trouble because that code may have to be changed as new concrete classes are added. Your code will not be "closed to modification". To extend it with new concrete types, you will have to reopen it.

We take what varies and encapsulate it to create new objects, this is called a Factory. Factories handles the details of object creation.



