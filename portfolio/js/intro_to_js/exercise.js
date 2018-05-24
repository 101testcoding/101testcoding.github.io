/*
Q0 Example function
*/
function exampleHello(name){
  document.write('Hello ' + name + '<br/>');
}

// example of calling functions 2 times with different values
exampleHello('Sher Minn');
exampleHello('Audrey');


/*
Q1 The Fortune Teller
  Why pay a fortune teller when you can just program your fortune yourself?

  - Write a function named tellFortune that:
    - takes 4 arguments: number of children, partner's name, geographic location, job title.
    - displays your fortune like so: "You will be a X in Y, and married to Z with N kids."
  - Call that function 3 times with 3 different values for the arguments.

  - Example:
      tellFortune(3, 'Lee Min Ho', 'Penang', 'dog walker') should display 'You will be a dog walker in Penang, and married to Lee Min Ho with 3 kids'

*/
function tellFortune(children, wife, location, job){
}

/*
Q2 Dog Age Calculator
You know how old your dog is in human years, but what about dog years? Calculate it!

  - Write a function named calculateDogAge that:
    - takes 1 argument: your puppy's age.
    - calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
    - displays your fortune like so: "Your doggie is NN years old in dog years!"
  - Call the function three times with different sets of values.

  - Example:
      calculateDogAge(2) should display 14.
*/
function calculateDogAge(age){
}

/*
  Q3 The Lifetime Supply Calculator
  Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

  - Write a function named calculateSupply that:
    - takes 3 arguments: current age, maximum age expectancy, amount per day.
    - calculates the amount consumed for rest of the life (based on the maximum age).
    - displays your result like so: "You will need NN to last you until the ripe old age of X"
  - Call that function three times, passing in different values each time.

  - Example:
      calculateSupply(28, 80, 1) should display 'You will need 18980 to last you until the ripe old age of 80'

  Bonus: Accept floating point values for amount per day, and round the result to a round number.
*/

function calculateSupply(current_age, max_age, amount_per_day){

    lifetimeSupply = ((max_age - current_age)*365)*amount_per_day)
    document.write(lifetimeSupply)
}
calculateSupply(30, 70, 2)

/*
 Q4 Temperature converter

 - Write a function that converts a temperature from Farenheit to Celcius.
*/
function farenheitToCelcius(){
}
