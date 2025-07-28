import Arrows from './Arrows';
import styles from './Layout.module.css';
import { type PropsWithChildren, useRef } from 'react';
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll';

type Props = PropsWithChildren;

export default function Layout({ children }: Props) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const { showLeftArrow, showRightArrow } = useHorizontalScroll(scrollRef);

  return (
    <div className={styles.layout}>
      <div className={styles.layoutInner} ref={scrollRef}>
        {children}
      </div>
      <Arrows leftVisible={showLeftArrow} rightVisible={showRightArrow} />
    </div>
  );
}
