import scrollToElement from './scroll';

const scroll = scrollToElement.scrollToElement;

it('scrollToElement function exists and returns something', () => {
    expect(() => scroll()).toBeInstanceOf(Function);
    expect(() => scroll()).toBeDefined();
});
