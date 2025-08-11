import { Component } from "react";
import styles from "../menu/Menu.module.css";
import FoodItem from "../FoodItem/FoodItem.jsx";
import menu  from "../../commonResource/data.js";

export default class Menu extends Component {
  render() {
    return (
      <div className={styles["foods-container"]}>
        {menu.map((item, index) => {
          const { title, category, price, img, desc } = item;
          return (
            <FoodItem
              key={index}
              title={title}
              category={category}
              price={price}
              img={img}
              desc={desc}
            />
          );
        })}
      </div>
    );
  }
}
