# calculator-app
 
Hello,

Here is my custom, basic calculator that I programed using HTML, CSS, and JavaScript.

This project was my first, more complex JavaSript project. I wanted to push myself and test my knowledge on the JavaScript content I had learned so far. Therefore, no tutorials were used to create this. The only resources I used were Stack Overflow for little things that I got caught up on.

Here is the final outcome!

https://cheerful-pony-f97318.netlify.app/

# My Struggles

The first problem I was facing was turning the strings in the input textbox to two seperate values so I could add, subtract, multiply, or divide them together. I ended up figuring this out by using (substr) and seperating the string into the numbers before the operator, and after the operator.

The next problem I was facing was the actual computing part of the calculator. I was struggling to figure out how to set what operand was clicked, and use that to actually compute the two strings together. I figured this out, and used a series of if else statements to find what operator was clicked, and setting that to a variable that I could include into the final computation, which was made up of a switch statement.

Finally, after I had the rush of excitement thinking my calculator was perfectly working, I realized I get a display of "NaN" if I try to compute more than two sets of numbers together at once. To resolve this issue, I made it to where if there is already the same operand in the display, it will compute the first set before you can add in another one. Unfortunately, this is currently only working for more than one operand of the same type. So, this is not perfect. :(
