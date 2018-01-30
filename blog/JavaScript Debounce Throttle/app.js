function loadPage() {
    this.addEvent();
}

function addEvent() {
    document.getElementById("debounce").addEventListener('click', debounce(function() {
        console.info('Debounce', new Date().toUTCString());
    }, 3000));
    
    document.getElementById("throttle").addEventListener('click', throttle(function() {
        return console.log('Throttle', new Date().toUTCString());
    }, 3000));
}
const debounce = (fn, delay) => {
    let timer;
    return function() {
        const self = this;
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(self, args), delay)
    }
}

const throttle = (fn, delay) => {

    let isThrottle, timer, last;

    return function() {

        const context = this;
        const args = arguments;

        if (!isThrottle) {
            fn.apply(context, args);
            last = Date.now();
            isThrottle = true;
        } else {
            clearTimeout(timer);
            timer = setTimeout(function() {
                if ((Date.now() - last) >= delay) {
                    fn.apply(context, args);
                    last = Date.now();
                }
            }, delay - (Date.now() - last));
        }
    }
}

window.onload = loadPage;