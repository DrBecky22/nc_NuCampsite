console.log('javascript connected!');
    
const carousel = new bootstrap.Carousel('#homeCarousel', {
    interval: 2000,
    pause: false
})

// when the pause button is clicked, pause the carousel
const carouselPause = document.getElementById('carouselPause');
carouselPause.addEventListener('click', function() {
    console.log('pausing the carousel');
    carousel.pause();
})

// when the play button is clicked, begin cycling through the images
const carouselPlay = document.getElementById('carouselPlay');
carouselPlay.addEventListener('click', function() {
    console.log('cycle the carousel');
    carousel.cycle();
})

async function fetchWeather() {
    const apiKey = '19d863989ef8c8e648f7e3077302a835';
    console.log(apiKey);
    let city = "Aspen";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    
   
   
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        displayWeather(data);  
    } catch (error) {
        console.error('there was an error', error);
    }
}


fetchWeather();  

function displayWeather(data) {
   
    let icon = document.querySelector('#weather-icon');
    let temp = document.querySelector('#weather-temp');
    let description = document.querySelector('#weather-description');

    let iconSrc = data.weather[0].icon;
    let tempSrc = data.main.temp;
    let descriptionSrc = data.weather[0].description

    // console.log(iconSrc);
    // console.log(tempSrc);
    // console.log(descriptionSrc);

    let iconImg = document.createElement('img');
    iconImg.src = `https://openweathermap.org/img/w/${iconSrc}.png`;
    icon.appendChild(iconImg);

    temp.textContent = Math.floor(tempSrc) + "\u00B0" + "F";

    description.innerHTML = descriptionSrc;

}