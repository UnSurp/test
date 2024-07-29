let json = '{"name":"Red","age":12,"city":"London","img": "images/test.jpg"}';
// const json2 = new File(["test"], "test.json", {
//     type: "json/plain",
// });
let data = JSON.parse(json2);

document.getElementById("name").innerHTML = data.name;

document.getElementById("age").innerHTML = data.age;

document.getElementById("city").innerHTML = data.city;


// img
const img = document.createElement('img');

img.src = data.img;

const container = document.getElementById('imgDiv');

container.append(img);


