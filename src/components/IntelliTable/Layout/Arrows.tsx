import styles from './Arrows.module.css';

interface IArrowsProps {
  /** Whether the left arrow is visible */
  leftVisible: boolean;
  /** Whether the right arrow is visible */
  rightVisible: boolean;
  /** Handler for left arrow click */
  onLeftClick: () => void;
  /** Handler for right arrow click */
  onRightClick: () => void;
}

/** Component for rendering left and right arrows for horizontal scrolling */
export default function Arrows({
  leftVisible,
  rightVisible,
  onLeftClick,
  onRightClick,
}: IArrowsProps) {
  return (
    <>
      <button
        className={`${styles.leftArrow} ${leftVisible ? styles.visible : ''} `}
        onClick={onLeftClick}
        aria-label="Scroll to start"
      >
        &#8592;
      </button>
      <button
        className={`${styles.rightArrow} ${rightVisible ? styles.visible : ''}`}
        onClick={onRightClick}
        aria-label="Scroll to end"
      >
        &#8594;
      </button>
    </>
  );
}
