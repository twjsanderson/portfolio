// eslint-disable-next-line
import { animateScroll as scrollSpy, scroller } from 'react-scroll';

const scrollToElement = (element) => {
    scroller.scrollTo(element, {
        duration: 1000,
        smooth: true
    })
};

export default { scrollToElement };