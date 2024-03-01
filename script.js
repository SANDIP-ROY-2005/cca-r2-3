const apiKey = 'f28bd1a82eff7521d8a8670e8c8480f4';
const baseURl = 'https://api.openweathermap.org/data/2.5';
 const city = document.querySelector(".city");
 const temperature = document.querySelector(".temp");
 const humidity =  document.querySelector(".humid");
 const descript =  document.querySelector(".descp");
 const speeds= document.querySelector(".spee");
const input = document.querySelector(".searchbox input");
const bodyImage = document.querySelector(".image");
const btn =document.querySelector(".searchbox button") ;
const locationNOtFound = document.querySelector(".location-not-found") ;
const imgBody =  document.getElementById("imgggg") ;
//const backgroundimgg = document.querySelector(".bg-imgg");
  
 
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//let URl =  `https://api.openweathermap.org/data/2.5/weather?q=${city name}&appid=${apiKey}`;



async function weatherInput(_inputValue){
     
     let apiKey = 'f28bd1a82eff7521d8a8670e8c8480f4';
      
     let URL = `https://api.openweathermap.org/data/2.5/weather?q=${_inputValue}&appid=${apiKey}`;
  
    let response = await fetch(URL);
    let data =  await response.json();
    console.log(data);
     return data ;
}
 

btn.addEventListener("click",searchWeather);
async function searchWeather(){
    let inputValue = input.value;
    if (inputValue == "") {
        alert("Please enter the name of CITY");
        return;
    }
    const dataTwo = await weatherInput(input.value);
    console.log(dataTwo);

    
    if(dataTwo.cod ===`404`){
      locationNOtFound.style.display = "flex";
      imgBody.style.display="none";
      console.log("error");
     return;
  }
     
   city.innerHTML = dataTwo.name;
   descript.innerHTML = dataTwo.weather[0].main;
     temperature.innerHTML =( Math.round(dataTwo.main.temp)-273)+"°C";
     humidity.innerHTML = dataTwo.main.humidity +"%";
     speeds.innerHTML = dataTwo.wind.speed +"km/h";

 

    
     if(dataTwo.weather[0].main=="Clouds"){
        bodyImage.src= "img/cloud.png";
      //   backgroundimgg.style.background-image =URL("img/cloud.png");
     // backgroundimgg.style.background-image ="img/cloud.png";
       // background-image=URL("img/cloud.png");
     }
     if(dataTwo.weather[0].main=="Clear"){
        bodyImage.src="img/clear.png";
     }
     if(dataTwo.weather[0].main=="Rain"){
        bodyImage.src="img/rain.png";
     }
     if(dataTwo.weather[0].main== "Mist"){
        bodyImage.src="img/mist.png";
     }
 
    
}