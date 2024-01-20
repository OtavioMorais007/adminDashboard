import Image from "next/image";
import styles from "./rightbar.module.css";
import { MdPlayCircleFilled } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="" fill />
        </div>
        <div className={styles.texts}>
          <span className={styles.notifications}>Disponivel agora</span>
          <h3 className={styles.title}>Como usar a nova versao do painel?</h3>
          <span className={styles.subTitle}>
            Reserve 4 minutos para aprender
          </span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </div>
        <button className={styles.button}>
          <MdPlayCircleFilled />
          Ler
        </button>
      </div>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="" fill className={styles.bg} />
        </div>
        <div className={styles.texts}>
          <span className={styles.notifications}>Disponivel agora</span>
          <h3 className={styles.title}>Como usar a nova versao do painel?</h3>
          <span className={styles.subTitle}>
            Reserve 4 minutos para aprender
          </span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </div>
        <button className={styles.button}>
          <MdPlayCircleFilled />
          Ler
        </button>
      </div>
    </div>
  );
};

export default Rightbar;
