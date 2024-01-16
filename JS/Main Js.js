
// Exercise 1

// let name = 'mamad'
// let admin = name 
// alert(admin)

////////////////////////////////////////////////////////////////

// Exercise 2

// name = prompt('whats your name ?', ['kobra'])
// alert("Your name is " + name );

////////////////////////////////////////////////////////////////

// Exercise 3

// a = prompt('عدد اول را وارد کنید' , [ex=5])
// b = prompt('عدد دوم را وارد کنید' , [ex=5]) 
// alert( +a + +b )
// alert( a - b )
// alert( a * b )
// alert( a / b )
// alert( a ** b )
// alert( a % b )

////////////////////////////////////////////////////////////////

// Exercise 4

// let a = prompt('Enter a number' , '') 
// 1)
// if ( a > 0) {
//     alert('1')
// } else if ( a < 0){
//     alert('-1')
// } 
// else if (a == 0) {
//     alert('0')
// } 
// 2)
// let b = (a > 0) ? '1' :
// (a < 0) ? '-1' : '0' 
// alert( b )

////////////////////////////////////////////////////////////////

// Exercise 5

// let message;
// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

// let message = (login == 'Employee') ? 'Hello' :
//  (login == 'Director') ? 'Greetings' : 
//  (login == '') ? 'No login' : ''

////////////////////////////////////////////////////////////////

// Exercise 6

// let a = prompt('enter a number') 
// let b = ( a % 2 == 0) ? alert('zooj') : alert('fard')

////////////////////////////////////////////////////////////////

// Exercise 7

// let a = +prompt('enter number1') 
// let b = +prompt('enter number2') 
// let c = +prompt('enter number3') 
// alert( (a + b + c ) / 3 )

////////////////////////////////////////////////////////////////

//Exercise 8

// let age = +prompt('Enter your age' , ' ex     :     18 ')
// let b = (age < 18) ? alert('sikk out') : alert('sik in')

////////////////////////////////////////////////////////////////

//Exercise 9

// let a = +prompt ( 'enter       number      one' , 0 )
// let b = +prompt ('enter number two' , 0 )
// alert( a ** b )

////////////////////////////////////////////////////////////////

//Exercise 10

// let age = +prompt('enter your year' , '')
// let calculateAge =  1401 - age
// if (isNaN(age)) { 
//     alert(' tarikh tavalod ro be soat sahih vared konid')
// }else if(age < 1300 ){
//     alert( calculateAge + '  cheghade to piri kale shiri')
// } else {   
//     alert( 'tarikh tavalod shoma :  ' + calculateAge )  
// } 

////////////////////////////////////////////////////////////////

//Exercise 11 

// let minuet = +prompt('Enter a minuet' , '50')
// let hour = (isNaN(minuet)) ? alert('Wrong time') :
//  alert( minuet / 60 + '  hour') 

////////////////////////////////////////////////////////////////

//Exercise 12

// let step1 = prompt('Whos there?' , 'admin')
// let step2 = (step1 == 'admin') ? prompt('Password?') : alert('I dont know you') :
// (step2 == TheMaster) ? alert('Welcome!') : 
// let step2

// if (step1 == 'admin') {
//     step2 = prompt('Password?')
// } else {
//     alert('I dont know you')
// }

// if (step2 == TheMaster) {
//     alert('Welcome!')
// } else {
//     alert('Wrong password')
// }

// if (step1 == 'admin') {
//     alert('Welcome!')
// }else {
//     alert('I dont know you')
// }

// if (a == TheMaster) {
//     alert('Welcome!')
// } else {
//     alert('Wrong password')
// }

// let step1 = prompt('Whos there?' , 'admin')
// let step2 = prompt('Password?' ,'TheMaster' )
//  if (step1 == 'admin' && step2 == 'TheMaster' ) {
//     alert('Welcome!')
//  }else if(step1 == 'admin' && step2 !== 'TheMaster'){
//     alert('Wrong password')
//  }
//  else{
//     alert('I dont know you')
//  }

////////////////////////////////////////////////////////////////

//Exercise 13

// let age = prompt('Enter your age' , '')
// let sex = prompt('Enter your sex' , 'female')
// let ide = !(age < 18 || sex === 'female') ? alert('in') : alert('out')

////////////////////////////////////////////////////////////////

//Exercise 14

// let browser = prompt('what do you use browser ?')

// if (browser == 'Edge' ) {
//     alert( "You've got the Edge!" )
// } else if (browser == 'Chrome' || 'Firefox' || 'Safari' || 'Opera' ) {
//     alert( 'Okay we support these browsers too' )
// } else {
//     alert( 'We hope that this page looks ok!' )
// }

////////////////////////////////////////////////////////////////

//Exercise 15

// let avg = +prompt('Enter your avg', 'ex : 19')

// switch (avg) {
//     case 20:
//     case 19:
//     case 18:
//         alert('Grade A')
//         break;
//     case 17:
//     case 16:
//     case 15:
//         alert('Grade B')
//         break;
//     case 14:
//     case 13:
//     case 12:
//         alert('Grade C')
//         break;

//         default:
//             alert('Failed')
//             break;
// }

////////////////////////////////////////////////////////////////

//Exercise 16

// function pow(a , b) {
//     pow = a**b 
//     return

// }
// pow( 2 , 4)
// alert(pow)

////////////////////////////////////////////////////////////////

//Exercise 17

// function Zojer (x) {
//    let num =  +prompt('Enter Your number' , '3')
//    if ( num % 2 === 0 ) {
//     alert('zoj')
//    } else {
//     alert( 'fard' )
//    }
// }
// Zojer()

////////////////////////////////////////////////////////////////

//Exercise 18

// function avg (x , y , z) {
//     let num1 = +prompt('Enter number on')
//     let num2 = +prompt('Enter number two')
//     let num3 = +prompt('Enter number three')

//     let avg = (num1 + num2 + num3 )/3
//     alert( 'Your average numbers is : ' + avg)
// }
// avg()

////////////////////////////////////////////////////////////////

//Exercise 19

// let userName = prompt('User Name : ' , 'username')
// let password = prompt('Password : ' , 'password')

// function login () {
//     if (userName.length < 3) {
//         alert('username at least 3 character')
//     } else if (password.length < 8 ){
//         alert('password at least 8 character')
//     } else {
//         alert('Welcome')
//     }

//     return
// }

// let loginPannel = login()

// alert(loginPannel +  'boos')


////////////////////////////////////////////////////////////////

//Exercise 20

// function findMinimum(a, b) {
//   const minValue = a > b ? b : a;
//   alert(minValue);
// }


// findMinimum( 3 , 6)

////////////////////////////////////////////////////////////////

//Exercise 21

// // Prompt user to enter their username
// let UserName = prompt('USER NAME : ')
// // Prompt user to enter their password
// let Password = prompt('PASSWORD : ')

// // Check if both the entered values match the expected ones
// if (UserName === 'ali' && Password === 'password123' ) {
// // Output message welcoming the user on successful login
// alert('Welcome !')
// } else {
// // Output message indicating that the username is incorrect
// alert('Your Username is incorrect !')
// }


////////////////////////////////////////////////////////////////

//Exercise 22


// const randomNumber = Math.floor(Math.random() * 100000);

// if (randomNumber.toString().length === 5) {
//     console.log(randomNumber);
// }


////////////////////////////////////////////////////////////////

//Exercise 23


// for (let zoj = 0; zoj < 101 ; zoj ) {
//     console.log(zoj)    
// }

//2)

// for (let i = 0; i <= 100 ; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

////////////////////////////////////////////////////////////////

//Exercise 24

// let allprices = 0

// for(let i = 0 ; i < 5 ; i++){
//     let ProductPrice = +prompt('قیمت محصول ')
//     allprices += ProductPrice;
// }

// alert("Total price : " + allprices)


////////////////////////////////////////////////////////////////

//Exercise 25

// let TotalNum = 0

// for(let i = 0 ; i < 5 ; i++){
//     let Num = +prompt('Enter your Number ')
//     TotalNum += Num 
// }

// alert( TotalNum / 5) //Calculate average of entered numbers


////////////////////////////////////////////////////////////////

//Exercise 26

// let Num = prompt("ENter Number")

// let plus = 0 

// for(let i = 0 ; i < Num.length ;  i++){
//     let a = +Num.charAt(i)
//     plus += a

// }

// console.log(plus)


////////////////////////////////////////////////////////////////

//Exercise 27

// let Num = prompt("ENter Number")

// let plus = 0 

// for(let i = 0 ; i < Num.length ;  i++){
//     let a = +Num.charAt(i)
//     plus += a
// }

// console.log(plus)


////////////////////////////////////////////////////////////////

//Exercise 28

// let Num = prompt("ENter Number")

// var a = 0

// for(let i = 0 ; i < Num.length ;  i++){
//     var b = Num.length
//     a += b
// }
// alert(b)

////////////////////////////////////////////////////////////////

//Exercise 29


// let Num = prompt("Enter Number")

// var a = 0
// var i = 0
// var b = Num.length

// while (i < b) {
//     a += b
//     i++
// }

// alert(b)


////////////////////////////////////////////////////////////////

//Exercise 30


// let Num = prompt("Enter Number")

// var plus = 0
// var i = 0


// while (i < Num.length) {
//     let a = +Num.charAt(i)
//     plus += a
//     i++
// }

// alert(plus)


////////////////////////////////////////////////////////////////

//Exercise 31

// let Num1 = +(prompt("Enter Number"))
// let Num2 = +(prompt("Enter Number"))

// while (Num1 < Num2) {
//    if (Num1 % 2 == 0) {
//     alert(Num1)
//    }
//    else {
//     Num1 += 1
//     alert(Num1)
//    }
//    Num1 += 2
// }



////////////////////////////////////////////////////////////////

//Exercise 32

// var a = 0 
// var count = 0 
// var sum = 0 

// while (a != -1) {
//     sum += a
//     var a = +prompt('Enter your number')
//    if (a != -1 ) {
//     count++
//    }

// }
// console.log(sum / count )


////////////////////////////////////////////////////////////////

//Exercise 33

// var a = +prompt('Enter number') //2
// var b = +prompt('Enter number') //3
// var p = 1
// var i = 0
// while ( i < b) {
//    p = p * a 
//     i++
// }

// alert(p)

////////////////////////////////////////////////////////////////

//Exercise 34

// var a = +prompt('Enter number') //2
// var b = +prompt('Enter number') //3
// var p = 1

// for(let i = 0; i < b ; i++){
//     p = p * a 
// }

// alert(p)


////////////////////////////////////////////////////////////////

//Exercise 35

// var a = +prompt('Enter number') //2
// var b = +prompt('Enter number') //3
// var p = 1
// var i = 0
// do {
//     p = p * a 
//     i++
// } while (i < b);

// alert(p)


////////////////////////////////////////////////////////////////

//Exercise 36


// let a = 0 
// const numbers = []
// let f = 0

// while (a !== -1 ) {
//     a = +prompt('Enter a number.\nIf you want to stop, enter -1')
//     if (a !== -1 && !isNaN(a)) { // Check if input is a number
//         numbers.push(a)   
//     }   
// }

// if (numbers.length > 0) { // Check if the array is empty
//     for (let i = 0; i < numbers.length; i++) {
//         const d = numbers[i]
//         f += d
//     }
//     alert(f / numbers.length)
// } else {
//     alert("Array is empty.")
// }


////////////////////////////////////////////////////////////////

//Exercise 37

// const info = [
//   { Name: 'Erfan', Family: 'Tolou', Age: 23, Email: 'erfantolou@gmail.com' },
//   { Name: 'Fatemeh', Family: 'Norayi', Age: 24, Email: 'nora98@gmail.com' },
//   { Name: 'Amir', Family: 'momeni', Age: 23, Email: 'momeni@gmail.com' }
// ];

// let name, family, age, email;

// do {
//   name = prompt('Enter your Name : ');
//   family = prompt('Enter your Family : ');
//   age = +(prompt('Enter your Age : '));
//   email = prompt('Enter your Email :');

//   if (name.length >= 3 && name.length <= 10 && family.length >= 3 && family.length <= 15 && age <= 100) {
//     info.push({ Name: name, Family: family, Age: age, Email: email });
//   } else {
//     alert('The name must be at least 3 and at most 10 letters \nThe last name must be at least 3 and at most 15 letters and The maximum age must be 3 digits.');
//   }

// } while (!name || !family || isNaN(age) || !email);

// console.log(info);


////////////////////////////////////////////////////////////////

//Exercise 38

// var DataBase = [
//   { id : 1 , name : 'erfan' , age : 24},
//   { id : 2 , name : 'fatemeh' , age : 25},
//   { id : 3 , name : 'ali' , age : 22},
//   { id : 4 , name : 'eli' , age : 20}
// ]

// DataBase.forEach(function (user) {
//   console.log( 'name : ' + user.name   + '   ' +  'age : ' +   user.age)
// })


////////////////////////////////////////////////////////////////

//Exercise 39


// // An array containing the names of available products 
// var priceProducts = [
//   'iphone 13',
//   'samsung A10',
//   'T shirt'
// ];

// // An array containing available products, along with their ID and price 
// var depote = [
//   {id: 1, product: 'iphone 13', price: 200},
//   {id: 2, product: 'samsung A10', price: 50},
//   {id: 3, product: 'T shirt', price: 10},
//   {id: 4, product: 'bag', price: 15},
//   {id: 5, product: 'car', price: 1000},
//   {id: 6, product: 'labtab', price: 100},
//   {id: 7, product: 'table', price: 40},
//   {id: 8, product: 'shoes', price: 20},
// ];

// // Prompt the user to choose a product to buy from the above list 
// var chooseProduct = '';
// while (chooseProduct !== '-1') {
//     chooseProduct = prompt('Enter the name of a product to buy (-1 to stop):\n' + depote.map(p => p.product).join(', '));

//     if (chooseProduct !== '-1') {
//         var IsExist = depote.some(function (pro) {
//             return pro.product == chooseProduct;
//         });

//         if (IsExist) {
//             priceProducts.push(chooseProduct);
//         } else {
//             alert('This item does not exist!');
//         }
//     }
// }

// // Display the updated 'priceProducts' array in the console 
// console.log('Products: ' + priceProducts);

// // Compute the total price of all items in the 'priceProducts' array using the 'forEach()' and 'find()' methods 
// var totalPrice = 0;
// priceProducts.forEach(function (product) {
//   var matchedProduct = depote.find(function (item) {
//     return item.product == product;
//   });
//   if (matchedProduct) {
//     totalPrice += matchedProduct.price;
//   }
// });

// // Alert the user with the total price of all selected items 
// alert('Total price: ' + totalPrice);


////////////////////////////////////////////////////////////////

//Exercise 40

// var filterAge = [
//   25 , 36 , 21 , 19 , 24
// ]

// while (ageUser !== -1 ) {
//   var ageUser = +prompt('ENter your age : (stop -1) ')
//     if (ageUser !== -1 && !isNaN(ageUser)) { // Check if input is a number
//         filterAge.push(ageUser)   
//     }   
// }

// var checking = filterAge.every(function (user) {
//   return user > 18
// })

// if (checking) {
//   alert('Calling')
// } else {
//   alert('Not Calling')
// }


////////////////////////////////////////////////////////////////

//Exercise 41

// An array containing the names of available products 
// var priceProducts = ['iphone 13', 'samsung A10', 'T shirt'];

// // An object mapping product names to their prices
// var depote = {
//     'iphone 13': 200,
//     'samsung A10': 50,
//     'T shirt': 10,
//     'bag': 15,
//     'car': 1000,
//     'labtab': 100,
//     'table': 40,
//     'shoes': 20
// };

// // Prompt the user to choose a product to buy from the above list 
// var chooseProduct = '';
// while (chooseProduct !== '-1') {
//     chooseProduct = prompt('Enter the name of a product to buy (-1 to stop):\n' + Object.keys(depote).join(', '));

//     // if user enters a valid product name, add it to the purchased products array
//     if (chooseProduct !== '-1') {
//         if (depote[chooseProduct]) {
//             priceProducts.push(chooseProduct);
//         } else {
//             alert('This item does not exist!'); // Otherwise, show an error message
//         }
//     }
// }

// // Show the list of purchased products to the user
// alert("Your purchased products: " + priceProducts.join(', '));

// // Ask the user if they are satisfied with their purchase
// var editQuestion = prompt('If you are satisfied, enter the number 1, otherwise, enter the number -1');

// // If the user is not satisfied, ask them which product to remove
// if (editQuestion == -1) {
//     var removeProduct = '';
//     while (removeProduct !== '-1') {
//         removeProduct = prompt('Remove the product you want (-1 to stop):'+ priceProducts.join(', '));
//         if (removeProduct !== '-1') {
//             var index = priceProducts.indexOf(removeProduct);
//             if (index !== -1) {
//                 priceProducts.splice(index, 1); // Remove the product from the purchased products array
//             } else {
//                 alert('This item does not exist in your purchased products!'); // If product doesn't exist, show an error message
//             }
//         }
//     }
// } else {
//     alert('Congratulations :)'); // If the user is satisfied with their purchase, show a congratulatory message
// }

// // Show the final list of purchased products to the user
// alert("Congratulations ! Your purchased products: " + priceProducts.join(', '));

// // Calculate and display the total cost of all purchased products
// var totalCost = 0;
// for (var i = 0; i < priceProducts.length; i++) {
//     var productName = priceProducts[i];
//     totalCost += depote[productName]; // Add the price of each product to the total cost
// }
// alert("Total cost of all purchased products: $" + totalCost.toFixed(2)); // Display the total cost with 2 decimal places


////////////////////////////////////////////////////////////////

//Exercise 42

// const depote = [
//   {id: 1, product: 'iphone 13', price: 200},
//   {id: 2, product: 'samsung A10', price: 150},
//   {id: 3, product: 'T shirt', price: 10},
//   {id: 4, product: 'bag', price: 15},
//   {id: 5, product: 'car', price: 1000},
//   {id: 6, product: 'labtab', price: 300},
//   {id: 7, product: 'shoes', price: 200}
// ];

// const CheckPostCost = depote.filter(product => product.price < 100);

// const extraCost = depote.map(product => product.price + 10);

// const totalPrice = depote.reduce((accumulator, product) => accumulator + product.price, 0);

// console.log(`Total price of all products: ${totalPrice}`); 


////////////////////////////////////////////////////////////////

//Exercise 43

// var userName = prompt('word !')
// var splitName = userName.split('')
// var reverseName = splitName.reverse()
// var joinName = reverseName.join('')

// // console.log(userName)

// if (joinName == userName) {
//     alert('1')
// } else {
//     alert('0')
// }


////////////////////////////////////////////////////////////////

//Exercise 44

// // Define an array of objects that represent our to do list.
// let toDoList = [
//     { id: 1, task: 'Gym', state: true },
//     { id: 2, task: 'Uni', state: false },
//     { id: 3, task: 'Homework', state: false },
// ];

// // Define a function that prompts the user for a task name and adds it to the to do list.
// function addToDo() {
//     let taskNameAdd = prompt('Enter your task to be added:');
//     toDoList.push({ id: toDoList.length + 1, task: taskNameAdd, state: false }); // Add new object representing new to do item to end of array.
// }

// // Define a function that prompts the user for the number of a task to delete and removes it from the to do list.
// function deleteToDo() {
//     let taskNameDel = prompt(`Enter the number of the task you want to delete:\n${toDoList.map(toDo => `${toDo.id}: ${toDo.task}`).join('\n')}`);
//     let indexToDelete = toDoList.findIndex(task => task.id === Number(taskNameDel)); // Find index of object in array with matching id property.
//     if (indexToDelete !== -1) { // Check if object with given id was found.
//         toDoList.splice(indexToDelete, 1); // Remove object with given id from array.
//         alert(`Task ${taskNameDel} deleted successfully.`);
//     } else {
//         alert(`Task ${taskNameDel} not found in the To Do list.`);
//     }
// }

// // Define a function that prompts the user for the number of a task to update and changes its state to done if requested.
// function updateToDo() {
//     let taskNameChange = prompt(`Enter the number of the task you want to update:\n${toDoList.map(toDo => `${toDo.id}: ${toDo.task}`).join('\n')}`);
//     let toDoToUpdate = toDoList.find(task => task.id === Number(taskNameChange)); // Find object in array with matching id property.
//     if (toDoToUpdate) { // Check if object with given id was found.
//         let yesOrNo = prompt(`Do you want to mark ${toDoToUpdate.task} as done? Enter YES or NO.`);
//         if (yesOrNo.toUpperCase() === "YES") { // Check if user requested to mark task as done
//             toDoToUpdate.state = true; // Set state property of object to true.
//             alert(`Task ${toDoToUpdate.task} marked as done.`);
//         } else {
//             alert(`Task ${toDoToUpdate.task} state remains unchanged.`);
//         }
//     } else {
//         alert(`Task ${taskNameChange} not found in the To Do list.`);
//     }
// }

// // Prompt the user for an option and execute the corresponding function.
// let option = +prompt(`Enter option:\n1) Add To Do\n2) Delete To Do\n3) Update To Do`);
// switch (option) {
//     case 1:
//         addToDo();
//         break;
//     case 2:
//         deleteToDo();
//         break;
//     case 3:
//         updateToDo();
//         break;
//     default:
//         alert('Invalid option. Please try again.');
// }

// console.table(toDoList); // Print the final version of our to do list in a table format.



////////////////////////////////////////////////////////////////

//Exercise 45


// // Create a database object with names as keys and arrays of skills as values.
// const DataBase = {
//     mamad: ['debugger', 'developer'],
//     akbar: ['js', 'css', 'html'],
//     ali: ['seller', 'marketing'],
//     javad: ['advisor', 'planner'],
// };

// // Prompt the user for a task and person name and store them in variables.
// const task = prompt('Enter your task:');
// const person = prompt('Enter a Name:');

// // Check if the person exists in the database. If yes, add the task to their skill set.
// if (person in DataBase) {
//     DataBase[person].push(task);
// } else { // If no, log an error message to the console.
//     console.log('Person not found in the database');
// }

// // Log the updated database to the console.
// console.log(DataBase);


////////////////////////////////////////////////////////////////

//Exercise 46

// // Prompt the user to enter the name of a province and store the input in a variable.
// var Province = prompt('استان مبدا مورد نظر خود را وارد کنید : ')

// // Create an object with province names as keys, and arrays of city names as values.
// var CityOfProvince = {
//     تهران : ["تهران" , 'شهریار' , 'رباط کریم'],
//     اصفهان : ["نطنز" , 'اصفهان' , 'اردکان'],
//     شیراز : ["شیراز" , 'داراب' , 'مرودشت'],
//     آذربایجان : ["تبریز" , 'اردبیل' , ' سرعین']
// }

// // Retrieve the array of city names for the given province, and loop through its elements.
// var citisProvince = CityOfProvince[Province].forEach(function (city) {
//     console.log(city)
// });


////////////////////////////////////////////////////////////////

//Exercise 47

// // define an array of questions and their corresponding answers
// const questions = [
//   { q: "meaning of class ?", a: "class" },
//   { q: "meaning of home ?", a: "home" },
//   { q: "meaning of work ?", a: "job" },
//   { q: "meaning of pc ?", a: "computer" }
// ];

// // initialize a variable to keep track of the score
// let score = 0;

// // loop through each question and prompt the user for an answer
// // increment the score if the user's answer matches the correct answer
// questions.forEach(function(question) {
//    var ans = prompt(question.q)
//    if (ans === question.a) {
//     score++;
//   }
//     console.log(question)
// });

// // calculate the percentage of correct answers and log it to the console
// const percentage = (score / questions.length) * 100;
// console.log(percentage);


////////////////////////////////////////////////////////////////

//Exercise 48

// let Num1 = +prompt('Enter number 1 : ')
// let Op = prompt('Enter your operator (+ - / *) : ')
// let Num2 = +prompt('Enter number 2 : ')

// let DataBase = [
//     {id : 1 , title : '+' , Task : Num1 + Num2 },
//     {id : 2 , title : '-' , Task : Num1 - Num2},
//     {id : 3 , title : '/' , Task : Num1 / Num2},
//     {id : 4 , title : '*' , Task : Num1 * Num2}
// ]

// var result = DataBase.forEach(function (n) {
//      if (n.title === Op) {
//         console.log(n.Task)
//      }
// })


////////////////////////////////////////////////////////////////

//Exercise 49

// let user = [
//     {id : 1 , username : 'erfan' , pass : '123'},
//     {id : 2 , username : 'ali' , pass : '243'},
//     {id : 3 , username : 'mamad' , pass : '543'},
//     {id : 4 , username : 'akbar' , pass : '677'}
// ]

// let findUser = prompt('Enter your username : ')

// let findPass = user.find(function (n) {
//     if (findUser === n.username) {
//         console.log('yor password : ' + n.pass)

//     }
// })


////////////////////////////////////////////////////////////////

//Exercise 50

// // Prompt the user to input minutes and seconds
// let min = prompt('Enter a min')
// let sec = prompt('Enter a sec')

// // Set an interval that will run every second
// let timer = setInterval(function () {
//     // If seconds count reaches -1, reduce minute count by 1 and reset seconds count to 59
//     if (sec === -1 ) {
//         min--
//         sec += 59   
//     }
//     // If both minute and second counts are 0, stop the interval
//     if (min === 0 && sec === 0) {
//         clearInterval(timer)
//     }
//     // Log the current time (in mm : ss format)
//     console.log(min + ' : ' + sec)
//     // Reduce the seconds count by 1 in each iteration
//     sec--
// }, 1000 )



////////////////////////////////////////////////////////////////

//Exercise 51

// let check = ''

// if (check) {
//     alert('ok')
// } else {
//     setTimeout(() => {
//         alert('Time Out')

//     }, 5000);
// }


////////////////////////////////////////////////////////////////

//Exercise 52

let imgElem = document.getElementById('lamp')
let btnElem = document.getElementById('btn')

let bulbFlag = false

function onOff() {

  if (bulbFlag) {
    imgElem.setAttribute('src', "pics/bulboff.gif")
    btnElem.innerHTML = 'Turn On'
    bulbFlag = false
  } else {
    imgElem.setAttribute('src', "pics/bulbon.gif")
    btnElem.innerHTML = 'Turn Off'

    bulbFlag = true
  }

  console.log(bulbFlag)
}


////////////////////////////////////////////////////////////////

//Exercise 53

// function checking() {
//   const MIN_USERNAME_LENGTH = 12;
//   const MIN_PASSWORD_LENGTH = 8;
//   const usernameInput = document.getElementsByClassName('UserName');
//   const passwordInput = document.getElementsByClassName('Password');
//   const username = usernameInput.value;
//   const password = passwordInput.value;

//   if (username.length >= MIN_USERNAME_LENGTH && password.length >= MIN_PASSWORD_LENGTH) {
//     alert(`Welcome, ${username}!`);
//   } else {
//     alert(`Your username must be at least ${MIN_USERNAME_LENGTH} characters long and your password must be at least ${MIN_PASSWORD_LENGTH} characters long.`);
//   }
// }


////////////////////////////////////////////////////////////////

//Exercise 54

let usernameInput = document.querySelector('.username')
let passwordInput = document.querySelector('.password')

let usernameMessage = document.querySelector('.username-validation')
let passwordMessage = document.querySelector('.password-validation')

function usernameValidation() {

  console.log(usernameInput.value)

  if (usernameInput.value.length < 12) {
    usernameMessage.style.display = 'block'
    usernameMessage.innerHTML = 'Must Contain 12 Character (Min)'
    usernameMessage.style.color = 'red'
  } else {
    usernameMessage.innerHTML = 'okeye'
    usernameMessage.style.color = 'green'
  }

}
function passwordValidation() {
  if (passwordInput.value.length < 8) {
    passwordMessage.style.display = 'block'
    passwordMessage.innerHTML = 'Must Contain 8 Character (Min)'
    passwordMessage.style.color = 'red'
  } else {
    passwordMessage.innerHTML = 'okeye'
    passwordMessage.style.color = 'green'
  }
}

function Welcome() {
  alert(`Welcome, ${usernameInput.value} !`);
}


let pElem = document.getElementById('change')

pElem.addEventListener('dblclick', change)

function change() {
  pElem.innerHTML = prompt('change to ?')
}


////////////////////////////////////////////////////////////////

//Exercise 55

// let bgColorElem = document.querySelector('body')
// setInterval(function() {
//   console.log(bgColorElem)
//   const randomColor = Math.floor(Math.random()*16777215).toString(16);
//   bgColorElem.style.backgroundColor = '#' + randomColor

// }, 5000);


////////////////////////////////////////////////////////////////

//Exercise 56

let countrySelect = document.querySelector('.countrySelect')
let citySelect = document.querySelector('.citySelect')


let cityCountry = {
  Iran: ['Tehran', 'Tabriz', 'Kerman', 'Kish'],
  Canada: ['Torento', 'Vancover', 'Quebec'],
  Usa: ['Los angles', 'Texas', 'New yourk', 'Boston']
}

countrySelect.addEventListener('change', countrySelectFunction)

function countrySelectFunction(e) {

  let target = e.target.value

  citySelect.disabled = false;

  citySelect.innerHTML = "";

  cityCountry[target].forEach(city => {

    let option = document.createElement('option')
    option.value = city
    option.textContent = city
    citySelect.appendChild(option)

  });

}


////////////////////////////////////////////////////////////////

//Exercise 57

const menu = document.getElementById("contextMenu")
let openMenu = document.body.addEventListener('contextmenu', function (e) {
  e.preventDefault()
  let pageX = e.pageX
  let pageY = e.pageY
  menu.style.display = 'block'
  menu.style.left = pageX + 'px'
  menu.style.top = pageY + 'px'
})

document.body.addEventListener('keydown', function (e) {
  if (e.keyCode === 27) {
    menu.style.display = 'none'
  }
})
document.body.addEventListener('click', function () {
    menu.style.display = 'none'
})

////////////////////////////////////////////////////////////////

//Exercise 58
const loader = document.querySelector('.loader')

 window.addEventListener('DOMContentLoaded' , function () {
  
  loader.classList.add('hidden')

})





