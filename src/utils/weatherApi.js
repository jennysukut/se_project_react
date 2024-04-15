import { weatherCardBackground } from "./constants";

export const getWeather = ({ coordinates }, APIkey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      Promise.reject(`Uh oh! Error: ${res.status}`);
    }
  });
};

export const filterWeatherData = (data) => {
  const result = {};
  result.city = data.name;
  result.temp = { F: data.main.temp };
  result.type = findWeatherType(data.main.temp);
  result.style = data.weather[0].main; //this returns "Clear"
  result.timeOfDay = findTimeOfDay(
    data.sys.sunrise,
    data.sys.sunset,
    secondsTime
  );
  return result;
};

export const findWeatherType = (temperature) => {
  if (temperature > 75) {
    return "hot";
  } else if (temperature >= 65 && temperature < 75) {
    return "warm";
  } else {
    return "cold";
  }
};

export const secondsTime = new Date().getTime() / 1000;

export const findTimeOfDay = (sunrise, sunset, secondsTime) => {
  if (secondsTime > sunrise && secondsTime < sunset) {
    return "day";
  } else if (secondsTime < sunrise || secondsTime > sunset) {
    return "night";
  }
};

export const filterWeatherCardBackground = (currentData) => {
  if (currentData.timeOfDay == "day" && currentData.style == "Clear") {
    const currentBackground = weatherCardBackground.sunny.day.sunnyDay;
    return currentBackground;
  } else if (currentData.timeOfDay == "night" && currentData.style == "Clear") {
    const currentBackground = weatherCardBackground.sunny.night.sunnyNight;
    return currentBackground;
  } else if (currentData.timeOfDay == "day" && currentData.style == "Clouds") {
    const currentBackground = weatherCardBackground.cloudy.day.cloudyDay;
    return currentBackground;
  } else if (
    currentData.timeOfDay == "night" &&
    currentData.style == "Clouds"
  ) {
    const currentBackground = weatherCardBackground.cloudy.night.cloudyNight;
    return currentBackground;
  } else if (currentData.timeOfDay == "day" && currentData.style == "Rainy") {
    const currentBackground = weatherCardBackground.rainy.day.rainyDay;
    return currentBackground;
  } else if (currentData.timeOfDay == "night" && currentData.style == "Rainy") {
    const currentBackground = weatherCardBackground.rainy.night.rainyNight;
    return currentBackground;
  } else if (currentData.timeOfDay == "day" && currentData.style == "Stormy") {
    const currentBackground = weatherCardBackground.stormy.day.stormyDay;
    return currentBackground;
  } else if (
    currentData.timeOfDay == "night" &&
    currentData.style == "Stormy"
  ) {
    const currentBackground = weatherCardBackground.stormy.night.stormyNight;
    return currentBackground;
  } else if (currentData.timeOfDay == "day" && currentData.style == "Snowy") {
    const currentBackground = weatherCardBackground.snowy.day.snowyDay;
    return currentBackground;
  } else if (currentData.timeOfDay == "night" && currentData.style == "Snowy") {
    const currentBackground = weatherCardBackground.snowy.night.snowyNight;
    return currentBackground;
  } else if (currentData.timeOfDay == "day" && currentData.style == "Foggy") {
    const currentBackground = weatherCardBackground.foggy.day.foggyDay;
    return currentBackground;
  } else if (currentData.timeOfDay == "night" && currentData.style == "Foggy") {
    const currentBackground = weatherCardBackground.foggy.night.foggyNight;
    return currentBackground;
  } else {
    console.log(error);
  }
};
