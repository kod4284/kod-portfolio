import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Scrollbar from 'smooth-scrollbar';
import { isMobile } from 'react-device-detect';

export function applySmoothScroll(scrollTrigger: typeof ScrollTrigger, scrollBar: typeof Scrollbar) {
  if(isMobile) return;
  
  const scroller = document.querySelector("html") as HTMLElement;
  const bodyScrollBar = scrollBar.init(scroller, { damping: 0.1, delegateTo: document, alwaysShowTracks: true });
  
  scrollTrigger.scrollerProxy(scroller, {
    scrollTop(value) {
      if (arguments.length) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        bodyScrollBar.scrollTop = value!;
      }
      return bodyScrollBar.scrollTop;
    },
  });
  
  bodyScrollBar.addListener(ScrollTrigger.update);
  
  ScrollTrigger.defaults({ scroller: scroller });
}

export {}