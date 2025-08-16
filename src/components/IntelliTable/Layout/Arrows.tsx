import styles from './Arrows.module.css';

interface IArrowsProps {
  /** Whether the left arrow is visible */
  leftVisible: boolean;
  /** Whether the right arrow is visible */
  rightVisible: boolean;
  /** Whether the up arrow is visible */
  upVisible: boolean;
  /** Whether the down arrow is visible */
  downVisible: boolean;
  /** Handler for left arrow click */
  onLeftClick: () => void;
  /** Handler for right arrow click */
  onRightClick: () => void;
  /** Handler for up arrow click */
  onUpClick: () => void;
  /** Handler for down arrow click */
  onDownClick: () => void;
}

/** Component for rendering left and right arrows for horizontal scrolling */
export default function Arrows({
  leftVisible,
  rightVisible,
  upVisible,
  downVisible,
  onLeftClick,
  onRightClick,
  onUpClick,
  onDownClick,
}: IArrowsProps) {
  return (
    <>
      <button
        type="button"
        className={`${styles.leftArrow} ${leftVisible ? styles.visible : ''}`}
        onClick={onLeftClick}
        aria-label="Scroll to start"
      >
        &#8592;
      </button>
      <button
        type="button"
        className={`${styles.rightArrow} ${rightVisible ? styles.visible : ''}`}
        onClick={onRightClick}
        aria-label="Scroll to end"
      >
        &#8594;
      </button>
      <button
        type="button"
        className={`${styles.upArrow} ${upVisible ? styles.visible : ''}`}
        onClick={onUpClick}
        aria-label="Scroll to top"
      >
        &#8593;
      </button>
      <button
        type="button"
        className={`${styles.downArrow} ${downVisible ? styles.visible : ''}`}
        onClick={onDownClick}
        aria-label="Scroll to bottom"
      >
        &#8595;
      </button>
    </>
  );
}
