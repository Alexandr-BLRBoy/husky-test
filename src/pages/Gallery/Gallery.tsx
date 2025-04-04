import styles from "./Gallery.module.scss";
import { products } from "../../data/products";
import { Card, Skeleton, Image, Button } from "antd";
import { useState, useEffect } from "react";

function Gallery() {
  const [loading, setLoading] = useState(true);
  const [shufFiltered, setShufFiltered] = useState(products)

  function randomCards () {
    const product = [...products];
    product.sort(() => Math.random() - .5)
    setShufFiltered(product)
  }

  // Имитация загрузки данных (замените на реальный запрос)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 секунды "загрузки"
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <h1 className={styles.gallery__title}>Welcome Gallery</h1>
      <div className={styles.gallery__cards_container}>
        {loading
          ? // Показываем скелетоны ТОЛЬКО при загрузке
            Array(8)
              .fill(0)
              .map((_, idx) => (
                <Card key={`skeleton-${idx}`} style={{ width: 240 }}>
                  <Skeleton.Image active style={{ height: 160 }} />
                  <Skeleton active paragraph={{ rows: 3 }} />
                </Card>
              ))
          : // Показываем реальные данные ПОСЛЕ загрузки
          shufFiltered.map((item) => (
              <div className={styles.gallery__item} key={item.price}>
                <Card cover={<Image src={item.image} alt="image" />}>
                  <h3 className={styles.gallery__item_title}>{item.name}</h3>
                  <span className={styles.gallery__item_price}>
                    {item.price}
                  </span>
                  <p className={styles.gallery__item_description}>
                    {item.composition}
                  </p>
                </Card>
              </div>
            ))}
      </div>
      <Button onClick={randomCards} type="primary" style={{margin: '20px auto', display: 'block'}}>Рандом</Button>
    </>
  );
}

export default Gallery;
