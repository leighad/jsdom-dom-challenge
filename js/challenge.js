const counter = document.getElementById("counter")


setInterval(function(){
    counter.innerText = ++counter.innerText
}, 1000)