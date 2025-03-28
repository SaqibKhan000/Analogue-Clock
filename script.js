setInterval(() => {
   let hour = document.querySelector(".hour");
   let minute = document.querySelector(".minute");
   let second = document.querySelector(".second");

   let currentDate = new Date();
   let currentHour = currentDate.getHours();
   let currentMinute = currentDate.getMinutes();
   let currentSecond = currentDate.getSeconds();

   let rotateHour = currentHour * 30 + currentMinute / 2;
   let rotateMinute = currentMinute * 6;
   let rotateSecond = currentSecond * 6;

   hour.style.transform = `rotate(${rotateHour}deg)`;
   minute.style.transform = `rotate(${rotateMinute}deg)`;
   second.style.transform = `rotate(${rotateSecond}deg)`;
}, 1000);