import Arrows from './Arrows';
import styles from './Layout.module.css';
import { type PropsWithChildren, useRef } from 'react';
import { useHorizontalScroll } from '@/hooks/scroll/useHorizontalScroll';
import { useHorizontalScrollControls } from '@/hooks/scroll/useHorizontalScrollControls';
import { useVerticalScroll } from '@/hooks/scroll/useVerticalScroll';
import { useVerticalScrollControls } from '@/hooks/scroll/useVerticalScrollControls';

type TLayoutProps = PropsWithChildren;

export default function Layout({ children }: TLayoutProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const { showLeftArrow, showRightArrow } = useHorizontalScroll(scrollRef);
  const { scrollToStart, scrollToEnd } = useHorizontalScrollControls(scrollRef);
  const { showUpArrow, showDownArrow } = useVerticalScroll(scrollRef);
  const { scrollToTop, scrollToBottom } = useVerticalScrollControls(scrollRef);

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
        upVisible={showUpArrow}
        downVisible={showDownArrow}
        onUpClick={scrollToTop}
        onDownClick={scrollToBottom}
      />
    </div>
  );
}
