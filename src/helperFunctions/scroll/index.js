// eslint-disable-next-line
import { animateScroll as scrollSpy, scroller } from 'react-scroll';

export const scrollToElement = (element) => {
    scroller.scrollTo(element, {
        duration: 500,
        smooth: true
    })
};
