# Virtual pet project
This project is part of the Manchester Codes programming funadmentals module. 

## Description 

It is a virtual pet made out of JavaScript that has multiple features simulating a real pet. 

## Features
* Create your own pet
* Name your pet
* You can increase the age of your pet using the `growUp()` method
* You can feed your pet using the `feed()` method
* You can walk your pet using the `walk()` method
* You can check in on your pet to see whether it is hungry or fit using the `checkUp()` method
* BE WARNED if you do not look after your pet it will die
* Your pet can have babies using the `adoptChild()` and `haveBaby` methods (you must also care for the children)

## Max and min values for characteristics 
* minFitness = 0
* maxFitness = 10
* minAge = 0
* maxAge = 30 - after 30 your pet will sadly die
* minHunger = 0
* maxHunger = 10
* yearIncrement - adds one year to age
* hungerIncrement - adds 5+ to hunger level when `growUp()` invoked
* fitnessDecrement - decreases fitness by 3 when `growUp()` invoked
* fitnessIncrement - increases fitness by 4 when `walk()` invoked
* hungerDecrement - decreases hunger by 3 when `feed()` invoked

# Requirements

## Hard requirements
* Node JS will be needed to run the program

## Development dependencies 
* Jest - used for unit testing

# Author
Emily Cotter