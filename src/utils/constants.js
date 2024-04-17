import sunnyDay from "../images/Sunny.svg";
import sunnyNight from "../images/SunnyNight.svg";
import cloudyDay from "../images/Cloudy.svg";
import cloudyNight from "../images/CloudyNight.svg";
import rainyDay from "../images/Rain.svg";
import rainyNight from "../images/RainNight.svg";
import stormyDay from "../images/Storm.svg";
import stormyNight from "../images/StormNight.svg";
import snowyDay from "../images/Snow.svg";
import snowyNight from "../images/SnowNight.svg";
import foggyDay from "../images/Fog.svg";
import foggyNight from "../images/FogNight.svg";

export const weatherCardBackground = {
  sunny: {
    day: { sunnyDay },
    night: { sunnyNight },
  },
  cloudy: {
    day: { cloudyDay },
    night: { cloudyNight },
  },
  rainy: {
    day: { rainyDay },
    night: { rainyNight },
  },
  stormy: {
    day: { stormyDay },
    night: { stormyNight },
  },
  snowy: {
    day: { snowyDay },
    night: { snowyNight },
  },
  foggy: {
    day: { foggyDay },
    night: { foggyNight },
  },
};

export const coordinates = {
  latitude: 45.6793,
  longitude: -111.042931,
};

export const APIKey = "c3c681e0ea0b927d15966a2468e02ae1";
