import { Component } from "react";
import styles from "../menu/Menu.module.css";
import FoodItem from "../FoodItem/FoodItem.jsx";
import menu from "../../commonResource/data.js";
//  using the render() method of a class-based React component//
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

// Menu is a class-based component that extends Component.

// Inside render(), it returns a <div> with a CSS module class foods-container.

// It loops over the menu array using .map():

// Destructures { title, category, price, img, desc } from each item.

// Creates a FoodItem component for each one.

// Passes the properties as props to FoodItem.

// Uses key={index} for React’s list rendering optimization.

// The result is a list/grid of FoodItem components.