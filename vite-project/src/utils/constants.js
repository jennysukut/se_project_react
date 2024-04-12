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

export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

export const coordinates = {
  latitude: 41.9311,
  longitude: 19.2148,
};

export const APIKey = "c3c681e0ea0b927d15966a2468e02ae1";
