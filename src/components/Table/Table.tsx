import Row from './Row';
import styles from './Table.module.css';
import { Cell } from './IntelliCell';
import { formatDataToTableFormat } from '../../utils';
import { getRandomTableData } from '../../Utils/tableData';
import { useEffect, useRef, useState } from 'react';
import { useScroll } from '../../hooks/useScroll';

export default function Table() {
  const { headers, rows } = formatDataToTableFormat(getRandomTableData(10));
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrolled = useScroll(scrollRef);

  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const updateScrollIndicators = () => {
      const scrollLeft = el.scrollLeft;
      const maxScrollLeft = el.scrollWidth - el.clientWidth;

      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < maxScrollLeft - 1); // subtract 1 for float rounding
    };

    updateScrollIndicators(); // initial check

    el.addEventListener('scroll', updateScrollIndicators);
    window.addEventListener('resize', updateScrollIndicators); // handles window res

    return () => {
      el.removeEventListener('scroll', updateScrollIndicators);
      window.removeEventListener('resize', updateScrollIndicators);
    };
  }, []);

  return (
    <div className={styles.tableOuterWrapper}>
      <div
        className={styles.tableWrapper}
        ref={scrollRef}
        style={{ position: 'relative' }}
      >
        <table className={styles.table}>
          <thead
            className={`${styles.tableHeader} ${
              scrolled ? styles.isScrolled : ''
            }`}
          >
            <tr>
              {headers.map((header, idx) => (
                <th key={idx} className={styles.tableHeading}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={styles.tableBody}>
            {rows.map((row, rowIndex) => (
              <Row key={rowIndex} row={row} rowIndex={rowIndex} />
            ))}
          </tbody>
        </table>

        {/* Mobile Cards */}
        <div className={styles.cardList}>
          {rows.map((row, rowIdx) => (
            <div className={styles.card} key={rowIdx}>
              <header>
                <h4>{row[1]}</h4>
                <h3>{row[0]}</h3>
              </header>
              {row.slice(2).map((cell, cellIdx) => (
                <div className={styles.cardRow} key={cellIdx}>
                  <span className={styles.cardLabel}>{`${
                    headers[cellIdx + 2]
                  }:`}</span>
                  <span className={styles.cardValue}>
                    <Cell cellIndex={cellIdx} cell={cell} />
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div
        className={`${styles.leftArrow} ${
          showLeftArrow ? styles.visible : styles.hidden
        }`}
      >
        &#8592;
      </div>
      <div
        className={`${styles.rightArrow} ${
          showRightArrow ? styles.visible : styles.hidden
        }`}
      >
        &#8594;
      </div>
    </div>
  );
}
