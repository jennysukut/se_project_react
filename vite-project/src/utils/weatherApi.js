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
  if (secondsTime > sunrise || secondsTime < sunset) {
    return "day";
  } else {
    return "night";
  }
};
