import React from "react";
import ReactDOM from "react-dom";

import CalendarUI from "../components/calendar-ui";

const defaultOptions = {};

class Calendar {
    constructor(rootElementId, options = defaultOptions) {
        this.rootElementId = rootElementId;
        this.options = options;
        this.hooks = {
            render: [() => ReactDOM.render(<CalendarUI />, document.getElementById(this.rootElementId))],
        };
    }

    static render() {
        this.hooks.call({
            name: 'hooks:render',
            args: {},
            handler: () => {
                console.log('render onto screen');
                
            }
        })
    }

    // HOOKS
    static callHook({name, args, handler}) {
        // this.hooks[name].forEach
        // TODO: handle hooks
    }
}

export default Calendar;