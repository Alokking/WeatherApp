
var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')


var cityname = document.querySelector('.cityname')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')


button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=77232fef4a7cdc23733f79c24c15ea7e&units=metric')
    .then(response => response.json())
    .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];

        cityname.innerHTML = nameValue;
        desc.innerHTML = descValue;
        temp.innerHTML = tempValue;
    })

    
.catch(err => alert("Wrong city name!"))
})
