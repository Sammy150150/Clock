function clock() {
  var header = document.getElementById('header');
  const d = new Date();
  var seconds = d.getSeconds();
  var minutes = d.getMinutes();
  var hours = d.getHours();
  if (seconds >= 10){
    seconds = seconds;
  }
  else{
    seconds = "0" + seconds;
  }
  if (minutes >= 10){
    minutes = minutes;
  }
  else{
    minutes = "0" + minutes;
  }
  if (hours >= 10){
    hours = hours;
  }
  else{
    hours = "0" + hours;
  }
  header.textContent = hours + ':' + minutes + ':' + seconds;
}

setInterval(clock, 1);