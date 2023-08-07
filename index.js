
// // Задание 1

// const name = 'Alexey';
// admin = name;
// console.log(admin);


// // Задание 2

// let tempCel = 23;
// tempFah = (9 / 5) * 23 + 32;

// console.log(`
// Градусов Цельсия: ${tempCel}
// Градусов Фаренгейта: ${tempFah}
// `);


// // Задание 3

// let num1 = Number(prompt('Введите число'));
// let num2 = Number(prompt('Введите число'));
// if (num1 <= 1) {
//     console.log(`${num1} <= 1`);
// } else if (num1 > 1) {
//     console.log(`${num1} > 1`);
// }
// if (num2 >= 3) {
//     console.log(`${num2} >= 3`);
// } else if (num2 < 3) {
//     console.log(`${num2} < 3`);
// }


// // Задание 4

// let test = true;
// console.log(
//     (test === true) ? `${'+++'}`
//         : `${'---'}`
// );


// // Задание 5

// let day = Number();
// if (day <= 10) {
//     console.log('Первая декада месяца');
// } else if (day > 10, day <= 20) {
//     console.log('Вторая декада месяца');
// } else if (day > 20, day <= 31) {
//     console.log('Третья декада месяца');
// }


// // Задание 6

// function cubing(num) {
//     return Math.pow(num, 3)
// }
// const a = cubing(2);
// const b = cubing(3);

// console.log(a, b);


// // Задание 7

// function salary(money) {
//     if (isNaN(userMoney)) {
//         console.log('Значение задано не верно');
//     } else {
//         money = money * 0.87;
//         return money;
//     }
// }
// const userMoney = Number(prompt('Введите зарабатную плату без вычета налога'))
// console.log(`Размер заработной платы за вычетом налогов равен : ${salary(userMoney)}`);


// // Задание 8

// function maxNumber(num1, num2, num3) {
//     return Math.max(num1, num2, num3)
// }

// const num1 = Number(prompt('Введите число A'));
// const num2 = Number(prompt('Введите число B'));
// const num3 = Number(prompt('Введите число C'));
// console.log(`Максимальное число ${maxNumber(num1, num2, num3)}`);


// // Задание 9

// function sum(a, b) {
//     return a + b;
// }


// function diff(a, b) {
//     if (a > b) {
//         return a - b;
//     } else {
//         return b - a;
//     }
// }


// function multi(a, b) {
//     return a * b;
// }

// function div(a, b) {
//     return a / b;
// }

// const num1 = +prompt(`Введите число А: `);
// const num2 = +prompt(`Введите число B: `);

// console.log(`Сумма числел А и В: ${sum(num1, num2)}`);
// console.log(`Разность числел А и В: ${diff(num1, num2)}`);
// console.log(`Произведение числел А и В: ${multi(num1, num2)}`);
// console.log(`Деление числел А и В: ${div(num1, num2)}`);


// // Задание 10

// let x = 11;
// for (let i = 0; i < x; i++) {
//     if (i === 0) {
//         console.log(`${i} - Это ноль`);
//     } else if (i % 2 == 0) {
//         console.log(`${i} - Четное число`);
//     } else {
//         console.log(`${i} - Нечетное число`);
//     }
// }


// // Задание 11

// const arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(3, 2);
// console.log(arr);


// // Задание 12

// const arr = [];
// let sum = 0;
// let minIndex = 0;

// for (let i = 0; i < 5; i++) {
//     arr[i] = Math.round(Math.random() * 10);
//     sum = sum + arr[i];
//     if (arr[i] === 3) {
//         console.log(`В массиве есть число ${arr[i]}`);
//     }
// }
// console.log(arr);

// for (let i = 1; i < arr.length; i++) {
//     if (arr[minIndex] > arr[i]) {
//         minIndex = i;
//     }
// }
// console.log(`Сумма элементов массива = ${sum}`);
// console.log(`Минимальное число в массиве = ${arr[minIndex]}`);


// // Задание 13

// let n = 20;
// let str = '';
// let step = 'x';
// for (let i = 0; i < n; i++) {
//     str = str + step;
//     console.log(str);
// }


// // Задание 14

// const numbers = {
//     keyin1: 1,
//     keyin2: 2,
//     keyin3: 3,
//     keyin4: 4,
//     keyin5: 5,
//     keyin6: 6,
//     keyin7: 7,
// }

// const numObj = Object.values(numbers);
// for (let i = 0; i <= numObj.length; i++) {
//     if (numObj[i] >= 3) {
//         console.log(`Число ${numObj[i]} >= 3`);
//     }
// }


// // Задание 15

// const post = {
//     author: "John", // вывести этот текст
//     postId: 23,
//     comments: [
//         {
//             userId: 10,
//             userName: "Alex",
//             text: "lorem ipsum",
//             rating: {
//                 likes: 10,
//                 dislikes: 2, // вывести это число
//             },
//         },
//         {
//             userId: 5, // вывести это число
//             userName: "Jane",
//             text: "lorem ipsum 2", // вывести этот текст
//             rating: {
//                 likes: 3,
//                 dislikes: 1,
//             },
//         },
//     ],
// };

// console.log(post.author);
// console.log(post.comments[0].rating.dislikes);
// console.log(post.comments[1].userId);
// console.log(post.comments[1].text);


// // Задание 16

// const products = [
//     {
//         id: 3,
//         price: 200,
//     },
//     {
//         id: 4,
//         price: 900,
//     },
//     {
//         id: 1,
//         price: 1000,
//     },
// ]

// products.forEach((products) => {
//     products.price = products.price * 0.85;
//     console.log(products);
// })






// // Задание 17

// const products = [
//     {
//         id: 3,
//         price: 127,
//         photos: [
//             "1.jpg",
//             "2.jpg",
//         ],
//     },
//     {
//         id: 5,
//         price: 499,
//         photos: [],
//     },
//     {
//         id: 10,
//         price: 26,
//         photos: [
//             "3.jpg",
//         ],
//     },
//     {
//         id: 8,
//         price: 78,
//     },
// ];



// const prodIsPhoto = products.filter((el) => el.photos.length > 0)
// console.log(prodIsPhoto);

// const sortPrice = products.sort((a, b) => a.price - b.price);
// console.log(sortPrice);


// // Задание 18

// const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
// const obj = [];
// for (let i = 0; i < en.length; i++) {
//     obj[en[i]] = ru[i];
// }
// console.log(obj);


// // Задание 19

// import { rickAndMorty } from "./data.js";
// const data = JSON.parse(rickAndMorty);

// const content = document.querySelector('.content');
// content.style.display = 'flex';
// content.style.flexWrap = 'wrap';
// content.style.justifyContent = 'space-around';

// data.forEach(({ id, name, status, species, type, gender, url }) => {
//     const div = document.createElement('div');
//     div.classList.add('card-list');
//     content.appendChild(div);

//     const idPar = document.createElement('p');
//     idPar.classList.add('card-item');
//     idPar.textContent = `${id}.`;
//     idPar.style.textAlign = 'center'
//     div.appendChild(idPar);

//     const userName = document.createElement('h3');
//     userName.classList.add('card-name');
//     userName.textContent = name;
//     userName.style.boxShadow = '3px 3px 3px blue';
//     div.appendChild(userName);

//     const img = document.createElement('img');
//     img.classList.add('card-img');
//     img.src = url;
//     img.width = 150;
//     div.appendChild(img)

//     const statusUser = document.createElement('p');
//     statusUser.classList.add('card-stat');
//     statusUser.textContent = `status: ${status}`;
//     if (statusUser.textContent === "status: Dead") {
//         statusUser.style.textShadow = 'red 1px 0 10px';
//         statusUser.style.textDecoration = 'underline'
//     } else if (statusUser.textContent === 'status: unknown') {
//         statusUser.style.textShadow = 'green 1px 0 10px';
//     } else {
//         statusUser.style.textShadow = '#FC0 1px 0 10px';
//     }
//     div.appendChild(statusUser);

//     const genderUser = document.createElement('p');
//     genderUser.classList.add('card-gen');
//     genderUser.textContent = `gender: ${gender}`;
//     if (genderUser.textContent === 'gender: Male') {
//         genderUser.style.textShadow = 'blue 1px 0 10px';
//     } else if (genderUser.textContent === 'gender: unknown') {
//         genderUser.style.textShadow = '#82f70c 1px 0 10px';
//     }else {
//         genderUser.style.textShadow = '#ed11c8 10px 0 10px';
//     }
//     div.appendChild(genderUser);

//     const specUser = document.createElement('p');
//     specUser.classList.add('Card-spec');
//     specUser.textContent = `species: ${species}`;
//     if (specUser.textContent === 'species: Human') {
//         specUser.style.textShadow = 'black 1px 0 10px';
//     } else {
//         specUser.style.textShadow = '#0b6e32 1px 0 10px';
//     }
//     div.appendChild(specUser);

//     const typeUse = document.createElement('p');
//     typeUse.classList.add('card-typeUs');
//     typeUse.textContent = `type: ${type}`;
//     div.appendChild(typeUse);
// });


// Задание 20

// async function myFun() {
//     try {
//         const response = await fetch('data.json');
//         if(!response.ok) {
//             throw new Error('Не удалось обработать data.json')
//         }
//         const data = await response.json();
//         const container = document.querySelector('.container');

//         data.forEach(({image, name, description, price}) =>{
//             const productEl = `
//         <div class="card">
//             <div class="product__content">
//                 <img class="product__img" src="${image}" alt="">
//                 <div class="product__desc">
//                     <h2 class="product__name">${name}</h2>
//                     <p class="description">${description}</p>
//                     <p class="product__price">$${price}</p>
//                 </div>
//             </div>
//         </div>
//         `
//         container.insertAdjacentHTML('beforeend', productEl)
//         })
//     } catch (error) {
//         console.error(error);
//     }
// };

// myFun()

// // Задание 21
// // Задание 22
// // Задание 23
// // Задание 24
// // Задание 25
// // Задание 26
// // Задание 27
