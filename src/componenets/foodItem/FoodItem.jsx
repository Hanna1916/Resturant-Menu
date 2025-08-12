import { Component } from "react";
import styles from "../foodItem/FoodItem.module.css";

export default class FoodItem extends Component {
  render() {
    // destructure the incoming props from this.props//
    const { title, category, price, img, desc } = this.props;

    // Assign category
    const categoryClass =
      {
        breakfast: styles.breakfast,
        lunch: styles.lunch,
        dinner: styles.dinner,
      }[category] || styles.defaultCategory;

    return (
      <div className={styles["single-food"]}>
        {/* Image */}
        <div className={styles["img"]}>
          <img src={img} alt={title} />
        </div>

        {/* Title, Category, Price */}
        <div className={styles["title-price"]}>
          <h3>{title}</h3>
          <span className={`${styles.category} ${categoryClass}`}>
            {category}
          </span>
          <p>${price}</p>
        </div>

        {/* Description */}
        <div className={styles["food-desc"]}>{desc}</div>
      </div>
    );
  }
}

// Receives data about a food item through props.

// Dynamically assigns a CSS class based on the category.

// Renders structured JSX for displaying that food item.

// Uses CSS modules for styling.
