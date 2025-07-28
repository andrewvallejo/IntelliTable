import styles from './Arrows.module.css';

type ArrowsProps = {
  leftVisible: boolean;
  rightVisible: boolean;
};

export default function Arrows({ leftVisible, rightVisible }: ArrowsProps) {
  return (
    <>
      <div
        className={`${styles.leftArrow} ${leftVisible ? styles.visible : ''}`}
      >
        &#8592;
      </div>
      <div
        className={`${styles.rightArrow} ${rightVisible ? styles.visible : ''}`}
      >
        &#8594;
      </div>
    </>
  );
}
