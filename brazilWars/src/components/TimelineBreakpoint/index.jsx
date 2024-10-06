import { useRef, useState } from 'react';
import styles from './TimelineBreakpoint.module.css';
import {
  useFloating,
  autoUpdate,
  offset,
  shift,
  flip,
  useHover,
  useInteractions,
  FloatingArrow,
  arrow,
} from '@floating-ui/react';

export default function TimelineBreakpoint({ year, handleClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef(null);
  const { refs, floatingStyles, context } = useFloating({
    whileElementsMounted: autoUpdate,
    placement: 'top',
    middleware: [
      offset(10),
      flip(),
      shift({ padding: 5 }),
      arrow({ element: arrowRef }),
    ],
    open: isOpen,
    onOpenChange: setIsOpen,
  });
  const hover = useHover(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

  return (
    <>
      <div
        ref={refs.setReference}
        className={styles.breakpoint}
        onClick={handleClick}
        {...getReferenceProps}></div>
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          className={styles.tooltip}
          {...getFloatingProps}>
          <FloatingArrow
            ref={arrowRef}
            context={context}
            tipRadius={2}
            width={20}
            height={20}
            d='M0 20C0 20 2.06906 19.9829 5.91817 15.4092C7.49986 13.5236 8.97939 12.3809 10.0002 12.3809C11.0202 12.3809 12.481 13.6451 14.0814 15.5472C17.952 20.1437 20 20 20 20H0Z'
            fill='rgba(255, 255, 255, 0.2)'
          />
          {year}
        </div>
      )}
    </>
  );
}
