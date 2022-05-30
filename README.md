# Functions
Problems for exercise and homework from my training in Softuni

## **1. Format Grade**

Write a function that **receives a grade** between **2.00** and **6.00**
and **prints** a formatted line with **grade and description.**

  - \< 3.00 - "**Fail**"

  - \>= 3.00 and \< 3.50 - "**Poor**"

  - \>= 3.50 and \< 4.50 - "**Good**"

  - \>= 4.50 and \< 5.50 - "**Very** **good**"

  - \>= 5.50 - "**Excellent**"

### Examples

| **Input** | **Output**       |
| --------- | ---------------- |
| 3.33      | Poor (3.33)      |
| 4.50      | Very good (4.50) |
| 2.99      | Fail (2)         |


## **2. Math Power**

Write a function that **calculates** and **print** the value of a number
**raised** to a **given power**:

### Examples

| **Input** | **Output** |
| --------- | ---------- |
| **2,8**   | **256**    |
| **3,4**   | **81**     |


## **3. Repeat String**

Write a function that receives a **string** and a **repeat** **count**
**n**. The function should **return** a new string (the old one repeated
**n** times).

### Examples

| **Input**           | **Output**       |
| ------------------- | ---------------- |
| "**abc**"**, 3**    | **abcabcabc**    |
| "**String**"**, 2** | **StringString** |


## **4. Orders**

Write a function that calculates the **total** **price** of an order and
prints it on the console. The function should receive one of the
following products: **coffee, coke, water, snacks**; and a **quantity**
of the product. The **prices** for a single piece of each product are:

  - coffee - 1.50

  - water - 1.00

  - coke - 1.40

  - snacks - 2.00

Print the result **formatted** to the **second** **decimal** **place**.

### Example

| **Input**           | **Output** |
| ------------------- | ---------- |
| "**water**"**, 5**  | **5.00**   |
| "**coffee**"**, 2** | **3.00**   |


## **5. Simple Calculator**

Write a function that **receives three parameters** – two numbers and an
operator (string) – and calculates the result depending on the operator.
Operator can be **'multiply'**, **'divide'**, **'add'** or
**'subtract'**. Try to solve this task using **arrow functions**.

### Bonus

Solve this task **without** using any conditional statements (no **if**
or **switch** statements or ternary operators).

### Input

The input comes as parameters named **numOne,** **numTwo,**
**operator**.

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>5,</p>
<p>5,</p>
<p>'multiply'</p></td>
<td>25</td>
</tr>
<tr class="even">
<td><p>40,</p>
<p>8,</p>
<p>'divide'</p></td>
<td>5</td>
</tr>
<tr class="odd">
<td><p>12,</p>
<p>19,</p>
<p>'add'</p></td>
<td>31</td>
</tr>
<tr class="even">
<td><p>50,</p>
<p>13,</p>
<p>'subtract'</p></td>
<td>37</td>
</tr>
</tbody>
</table>


## **6. Sign Check**

Write a function, that checks whether the result of the multiplication
**numOne \* numTwo \* numThree** is positive or negative. Try to do this
**WITHOUT** multiplying the 3 numbers.

### Input

The input comes as parameters named **numOne,** **numTwo,**
**numThree**.

### Output

  - If the **result** is **positive**, print on the console -\>
    **"Positive"**

  - Otherwise, print -\> **"Negative"**

### Example

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>5,</p>
<p>12,</p>
<p>-15</p></td>
<td>Negative</td>
</tr>
<tr class="even">
<td><p>-6,</p>
<p>-12,</p>
<p>14</p></td>
<td>Positive</td>
</tr>
<tr class="odd">
<td><p>-1,</p>
<p>-2,</p>
<p>-3</p></td>
<td>Negative</td>
</tr>
<tr class="even">
<td><p>-5,</p>
<p>1,</p>
<p>1</p></td>
<td>Negative</td>
</tr>
</tbody>
</table>

## **7. Smallest of Three Numbers**

Write a function that receives **three integers** and prints the
**smallest** number. Use an appropriate name for the function.

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>2,</p>
<p>5,</p>
<p>3</p></td>
<td><strong>2</strong></td>
</tr>
<tr class="even">
<td><p>600,</p>
<p>342,</p>
<p>123</p></td>
<td><strong>123</strong></td>
</tr>
<tr class="odd">
<td><p>25,</p>
<p>21,</p>
<p>4</p></td>
<td><strong>4</strong></td>
</tr>
<tr class="even">
<td><p>2,</p>
<p>2,</p>
<p>2</p></td>
<td><strong>2</strong></td>
</tr>
</tbody>
</table>

## **8. Add and Subtract**

You will receive **three** **integer numbers.**

Write a function **sum()** to calculate the sum of the first **two**
integers and a function **subtract()**, which subtracts the result of
the function the **sum()** and the **third** integer.

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>23,</p>
<p>6,</p>
<p>10</p></td>
<td>19</td>
</tr>
<tr class="even">
<td><p>1,</p>
<p>17,</p>
<p>30</p></td>
<td>-12</td>
</tr>
<tr class="odd">
<td><p>42,</p>
<p>58,</p>
<p>100</p></td>
<td>0</td>
</tr>
</tbody>
</table>

## **9. Characters in Range**

Write a function that receives **two characters** and prints on a single
line all the characters in between them according to the **ASCII** code.
Keep in mind that the second character code might be **before** the
first one inside the **ASCII table**.

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>'a',</p>
<p>'d'</p></td>
<td>b c</td>
</tr>
<tr class="even">
<td><p>'#',</p>
<p>':'</p></td>
<td>$ % &amp; ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9</td>
</tr>
<tr class="odd">
<td><p>'C',</p>
<p>'#'</p></td>
<td>$ % &amp; ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; &lt; = &gt; ? @ A B</td>
</tr>
</tbody>
</table>

## **10. Odd and Even Sum**

You will receive a **single number.** You have to write a function, that
returns the **sum** of **all even** and **all odd** digits from that
number.

### Examples

|                  |                             |
| ---------------- | --------------------------- |
| **Input**        | **Output**                  |
| 1000435          | Odd sum = 9, Even sum = 4   |
| 3495892137259234 | Odd sum = 54, Even sum = 22 |

## **11. Palindrome Integers**

A palindrome is a number, which reads the same **backward as forward**,
such as 323 or 1001. Write a function, which receives an **array of
positive integers** and checks if each integer is a palindrome or not.

### Output

  - If the current integer is a palindrome, print: **"true"**

  - Otherwise, print: **"false"**

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th></th>
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><strong>[123,323,421,121]</strong></td>
<td><p><strong>false</strong></p>
<p><strong>true</strong></p>
<p><strong>false</strong></p>
<p><strong>true</strong></p></td>
<td></td>
<td><strong>[32,2,232,1010]</strong></td>
<td><p><strong>false</strong></p>
<p><strong>true</strong></p>
<p><strong>true</strong></p>
<p><strong>false</strong></p></td>
</tr>
</tbody>
</table>

### Hints

  - Read more about palindromes:
    <https://en.wikipedia.org/wiki/Palindrome>

## **12. Password Validator**

Write a function that checks if a given password is valid. Password
validations are:

  - The **length** should be **6 - 10** characters (inclusive)

  - It should consist **only of** **letters** and **digits**

  - It should have **at least 2** digits

If a password is a valid print: **"Password** **is** **valid"**.

If it is **NOT** valid, for every unfulfilled rule print a message:

  - **"Password must be between 6 and 10 characters"**

  - **"Password must consist only of letters and digits"**

  - **"Password must have at least 2 digits"**

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>'logIn'</td>
<td><p>Password must be between 6 and 10 characters</p>
<p>Password must have at least 2 digits</p></td>
</tr>
<tr class="even">
<td>'MyPass123'</td>
<td>Password is valid</td>
</tr>
<tr class="odd">
<td>'Pa$s$s'</td>
<td><p>Password must consist only of letters and digits</p>
<p>Password must have at least 2 digits</p></td>
</tr>
</tbody>
</table>

## **13. NxN Matrix**

Write a function that receives a single integer number **n** and prints
**nxn** matrix with that number.

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>3</td>
<td><p>3 3 3</p>
<p>3 3 3</p>
<p>3 3 3</p></td>
</tr>
<tr class="even">
<td>7</td>
<td><p>7 7 7 7 7 7 7</p>
<p>7 7 7 7 7 7 7</p>
<p>7 7 7 7 7 7 7</p>
<p>7 7 7 7 7 7 7</p>
<p>7 7 7 7 7 7 7</p>
<p>7 7 7 7 7 7 7</p>
<p>7 7 7 7 7 7 7</p></td>
</tr>
<tr class="odd">
<td>2</td>
<td><p>2 2</p>
<p>2 2</p></td>
</tr>
</tbody>
</table>

## **14. Perfect Number**

Write a function that receives a **number** and checks if that number is
perfect or NOT.

A perfect number is a **positive** integer that is equal to the **sum**
of its **proper positive divisors**. That is the sum of its positive
**divisors** excluding the number itself (also known as its **aliquot
sum**).

### Output

  - If the number is perfect, print: **"We have a perfect number\!"**

  - Otherwise, print: **"It's not so perfect."**

### Examples

|           |                            |                    |
| --------- | -------------------------- | ------------------ |
| **Input** | **Output**                 | **Comments**       |
| 6         | We have a perfect number\! | 1 + 2 + 3          |
| 28        | We have a perfect number\! | 1 + 2 + 4 + 7 + 14 |
| 1236498   | It's not so perfect.       |                    |

### Hint

Equivalently, a perfect number is a number that is **half the sum** of
all of its positive divisors (including itself) =\> 6 is a perfect
number because it is the sum of 1 + 2 + 3 (all of which are divided
without residue).

  - Read about the Perfect number here:
    <https://en.wikipedia.org/wiki/Perfect_number>

## **15. Loading Bar**

You will receive a **single number** between **0** and **100**, which is
divided with 10 without residue (0, 10, 20, 30...).

Your task is to create a function that visualizes a **loading bar**
depending on the number you have received in the input.

### Examples

<table>
<tbody>
<tr class="odd">
<td><strong>Input</strong></td>
<td><strong>Output</strong></td>
</tr>
<tr class="even">
<td>30</td>
<td><p>30% [%%%.......]</p>
<p>Still loading...</p></td>
</tr>
<tr class="odd">
<td>50</td>
<td><p>50% [%%%%%.....]</p>
<p>Still loading...</p></td>
</tr>
<tr class="even">
<td>100</td>
<td><p>100% Complete!</p>
<p>[%%%%%%%%%%]</p></td>
</tr>
</tbody>
</table>

## **16. Factorial Division**

Write a function that receives **two** integer numbers. Calculate the
**factorial** of each number. Divide the first result by the second and
print the division formatted to the **second decimal** point.

### Examples

<table>
<thead>
<tr class="header">
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
<th></th>
<th><strong>Input</strong></th>
<th><strong>Output</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p><strong>5,</strong></p>
<p><strong>2</strong></p></td>
<td><strong>60.00</strong></td>
<td></td>
<td><p><strong>6,</strong></p>
<p><strong>2</strong></p></td>
<td><strong>360.00</strong></td>
</tr>
</tbody>
</table>
