import { bigbannerapi } from "../../../../Api/bigBanner";
import styles from "./Banner.module.css";
const Banner = () => {
  return (
    <img
      src={bigbannerapi.imgsrc}
      alt="banner image"
      className={styles.banner_img}
    />
  );
};
export default Banner;
