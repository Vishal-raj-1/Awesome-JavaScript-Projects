var number = Math.floor(Math.random() * 78);
const box = document.getElementById("box");
var n = Math.floor(Math.random() * 7);
const facts = [
  " Zero ( 0 ) is the only number which can not be represented by Roman numerals.",
  " What comes after a million, billion and trillion? A quadrillion, quintillion, sextillion, septillion, octillion, nonillion, decillion and undecillion .",
  " Plus (+) and Minus (-) sign symbols were used as early as 1489 A.D.",
  " 4. 2 and 5 are the only primes that end in 2 or 5 .",
  " An icosagon is a shape with 20 sides",
  " Among all shapes with the same perimeter a circle has the largest area.",
  " Among all shapes with the same area circle has the shortest perimeter.",
  '40 when written "forty" is the only number with letters in alphabetical order, while "one" is the only one with letters in reverse order ',
  "'FOUR' is the only number in the English language that is spelt with the same number of letters as the number itself ",
  ' From 0 to 1,000, the letter "A" only appears in 1,000 ("one thousand") ',
  " 12,345,678,987,654,321 is the product of 111,111,111 x 111,111,111. Notice the sequence of the numbers 1 to 9 and back to 1. ",
  "  Have you ever noticed that the opposite sides a die always add up to seven ",
  "  Trigonometry is the study of the relationship between the angles of triangles and their sides ",
  "  Abacus is considered the origin of the calculator",
  "   Here is an interesting trick to check divisibility of any number by number 3.A number is divisible by three if the sum of its digits is divisible by three (3)",
  "   Do you know the magic of no. nine (9)? Multiply any number with nine (9 ) and then sum all individual digits of the result (product) to make it single digit, the sum of all these individual digits would always be nine (9).",

  " If you add up the numbers 1-100 consecutively (1+2+3+4+5...) the total is 5050",
  "   A 'jiffy' is an actual unit of time for 1/100th of a second ",
  "  Have you heard about a Palindrome Number? It is a number that reads the same backwards and forward, e.g. 12421 ",
  "  Have you heard about Fibonacci? It is the sequence of numbers wherein a number is the result of adding the two numbers before it! Here is an example: 1, 1, 2, 3, 5, 8, 13, 21, 34, and so on",

  "  The word “hundred” comes from the old Norse term, “hundrath”, which actually means 120 and not 100.",

  "  In a room of 23 people there’s a 50% chance that two people have the same birthday.",

  " Most mathematical symbols weren’t invented until the 16th century. Before that, equations were written in words.",

  " “Forty” is the only number that is spelt with letters arranged in alphabetical order.",

  " Conversely, “one” is the only number that is spelt with letters arranged in descending order.",

  " From 0 to 1000, the only number that has the letter “a” in it is “one thousand”.",

  " ‘Four’ is the only number in the English language that is spelt with the same number of letters as the number itself.",

  " Every odd number has an “e” in it",

  " The reason Americans call mathematics “math”, is because they argue that “mathematics” functions as a singular noun so ‘math’ should be singular too.",

  " Markings on animal bones indicate that humans have been doing maths since around 30,000BC",

  " “Eleven plus two” is an anagram of “twelve plus one” which is pretty fitting as the answer to both equations is 13.",

  " Also, there are 13 letters in both “eleven plus two” and “twelve plus one”.",

  " Zero is not represented in Roman numerals.",

  " The word “mathematics” only appears in one Shakespearean play, “The Taming of the Shrew”",

  " -40 °C is equal to -40 °F.",

  " In France, a pie chart is sometimes referred to as a “camembert”.",

  " The symbol for division (i.e.÷) is called an obelus.",

  " 2 and 5 are the only prime numbers that end in 2 or 5",

  " A ‘jiffy’ is an actual unit of time. It means 1/100th of a second.",

  " If you shuffle a deck of cards properly, it’s more than likely that the exact order of the cards you get has never been seen before in the whole history of the universe.",

  " You can cut a cake into 8 pieces by using only 3 cuts,You just need to make two cuts in a vertical plane and one in a horizontal plane.  Save yourself some time next time you have a party!",

  " Dividing by zero once put a US Navy Warship out of action",

  " The number 0.999999….. is exactly equal to 1",

  " The numbers on opposite sides of a dice always add up to seven On a dice the numbers 1,2 and 3 all share a vertex. ",

  ' "Hundred" Does not Mean 100 The word "hundred" is actually derived from the Old Norse word "hundrath," which actually means 120, not 100.',
  " 2There Is Only One Even Prime Number",

  " You probably never thought about this before, but there is only one number spelled with the same number of letters as itself. Can you guess which one? No? Well, It is 4. Oh, and the number 4 on a calculator is made up of four light bars.",

  " Six Is the Smallest Perfect Number",

  "The Number Pi Is Irrational",

  "132 And 5 Are the Only Prime Numbers That End With 2 And 5",

  "One Is Not a Prime Number",

  "The Most Popular Two-Digit Number Is 13 Friday the 13th You do think unlucky number 13 would be one that most people want to stay away from. But in Alex Bellos  research, it turned out to be the most popular two-digit number (selected by 5 percent of all respondents), and sixth-most popular number overall (following 7, 3, 8, 4, and 5 in the top five spots—that is right, the number five is also the fifth most popular numbers)",
  "8 is the largest cube in the Fibonacci series",
  "123 is the tenth Lucas number",
  "3 is the fourth open meandric number",
  "15 is a triangular number, a hexagonal number, a pentatope number and the 4th Bell number.",
  "111 is the smallest possible magic constant of a 3×3 magic square of distinct primes.",
  "55 is the largest triangular number in the Fibonacci sequence.",
  "3 is the second triangular number and it is the only prime triangular number.",
  "2 is a primorial, as well as its own factorial.",
  "7 is the lowest number that cannot be represented as the sum of the squares of three integers.",
  "13 is the number of Archimedian solids.",
  "16 is a centered pentagonal number.",
  "17 is the only positive Genocchi number that is prime, the only negative one being −3.",
  "100 is the smallest number whose common logarithm is a prime number.",
  "100 is the smallest square which is also the sum of 4 consecutive cubes.",
  "99 is the ninth repdigit, a palindromic number and a Kaprekar number.",
  "23 is the ninth prime number, the smallest odd prime that is not a twin prime.",
  "21 is a repdigit in base 4 (111)",
  "20 is the smallest primitive abundant number",
  "72 is the sum of four consecutive primes (13 + 17 + 19 + 23), as well as the sum of six consecutive primes (5 + 7 + 11 + 13 + 17 + 19).",
  "75 is the number of orderings of 4 objects with ties allowed.",
  "79 is the n value of the Wagstaff prime 201487636602438195784363.",
  "80 is the smallest number n where n and n+1 are both products of 4 or more primes.",
  "25 is an aliquot sum of 6 and number 6 is the first (or smallest) number to have an aliquot sequence that does not culminate in 0 through a prime.",
  "37 is a prime number, the fifth lucky prime, the first irregular prime, the third unique prime and the third cuban prime of the form.",
  "101 is the number of partitions of 13.",
  "88 is one of only 2 numbers known whose square has no isolated digits.",
];

console.log(facts.length);
let fact = facts[number];
box.innerHTML = ` <h2>${fact}</h2>`;

console.log(fact);
function factnew() {
  var number = Math.floor(Math.random() * 78);
  let fact = facts[number];
  box.innerHTML = ` <h2>${fact}</h2>`;
}
