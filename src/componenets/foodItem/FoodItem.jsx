import { Component } from "react";
import styles from "../foodItem/FoodItem.module.css";

export default class FoodItem extends Component {
  render() {
    const { title, category, price, img, desc } = this.props;

    // Assign category colors
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
