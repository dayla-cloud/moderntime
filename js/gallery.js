const imgBoard = document.querySelector("#gallery-img");

const imgArray = ["1", "2", "3", "4", "5"];
const imgRandom = imgArray[Math.floor(Math.random() * imgArray.length)];

imgBoard.src = `./asset/gallery/${imgRandom}.jpg`;

// console.log(imgBoard.src);
