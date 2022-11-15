import Calendar from './lib';

const calendar = new Calendar('calender', {});

document.addEventListener('DOMContentLoaded', () => {
    calendar.registerHook('hooks:render', (args, handler) => {
        console.log('before');
        handler(args);
        console.log('after');
    });

    calendar.render();
})
