import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants";

function Main({ weatherData }) {
  return (
    <main className="main">
      <WeatherCard />
      <p className="itemCard__text">
        Today is 100° F / You may want to wear nothing, but here are some
        options:
      </p>
      <ul className="itemCard__list">
        {defaultClothingItems
          .filter((item) => {
            return item.weather === weatherData.type;
          })
          .map((item) => {
            return <ItemCard key={item._id} item={item} />;
          })}
      </ul>
    </main>
  );
}

export default Main;
