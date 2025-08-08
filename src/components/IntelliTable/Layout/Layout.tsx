import Arrows from './Arrows';
import styles from './Layout.module.css';
import { type PropsWithChildren, useRef } from 'react';
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll';
import { useHorizontalScrollControls } from '@/hooks/useHorizontalScrollControls';

type TLayoutProps = PropsWithChildren;

export default function Layout({ children }: TLayoutProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const { showLeftArrow, showRightArrow } = useHorizontalScroll(scrollRef);
  const { scrollToStart, scrollToEnd } = useHorizontalScrollControls(scrollRef);

  return (
    <div className={styles.layout}>
      <div className={styles.layoutInner} ref={scrollRef}>
        {children}
      </div>
      <Arrows
        leftVisible={showLeftArrow}
        rightVisible={showRightArrow}
        onLeftClick={scrollToStart}
        onRightClick={scrollToEnd}
      />
    </div>
  );
}
