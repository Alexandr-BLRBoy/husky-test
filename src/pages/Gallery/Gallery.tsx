import styles from "./Gallery.module.scss";
import { products } from "../../data/products";

function Gallery() {
  return (
    <>
      <h1 className={styles.gallery__title}>Welcome Gallery</h1>
      <div className={styles.gallery__cards_container}>
        {products.map((item) => (
          <div className={styles.gallery__item} key={item.price}>
            <img
              className={styles.gallery__item_img}
              src={item.image}
              alt="image"
            />
            <h3 className={styles.gallery__item_title}>{item.name}</h3>
            <span className={styles.gallery__item_price}>{item.price}</span>
            <p className={styles.gallery__item_description}>
              {item.composition}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Gallery;
