setInterval(() => {
    let date=new Date();
// console.log(date)
document.querySelector("#head").innerHTML= `<marquee behavior="slide" direction="up" id="info">${date}</marquee>`
}, 5000);