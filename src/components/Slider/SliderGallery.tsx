import { Carousel } from "antd";
import styles from './Slider.module.scss';

function SliderGallery() {

  return(
    <Carousel className={styles.castom__carousel} autoplay={{ dotDuration: true }} autoplaySpeed={2000} arrows={true} infinite={true}>
      <div className={styles.slider__img_box}>
        <img src="images/1.webp" alt="images" />
      </div>
      <div className={styles.slider__img_box}>
        <img src="images/2.webp" alt="images" />
      </div>
      <div className={styles.slider__img_box}>
        <img src="images/3.webp" alt="images" />
      </div>
      <div className={styles.slider__img_box}>
        <img src="images/4.webp" alt="images" />
      </div>
    </Carousel>
  )
}

export default SliderGallery;