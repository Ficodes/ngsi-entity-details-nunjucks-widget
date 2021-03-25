export default class Methods {
    static initialize() {
        const clickableEls = document.querySelectorAll("[data-action]");
        clickableEls.forEach( (el) => {
            if(Methods[el.getAttribute('data-action')]) {
                el.addEventListener('click', () => {
                    Methods[el.getAttribute('data-action')](el);
                });
            }
        });
    }
}
