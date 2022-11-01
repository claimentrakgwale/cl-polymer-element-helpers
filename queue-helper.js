import { symbolIterator } from "./cl-helpers.js";

export const dequeueMessage = function( manager ) {
    let message = manager.messageQueue.shift();
    message && cwb(manager, "DEQUEUE");
    return message
};

const oh = function(a) {
    return Object.keys(a).map(function(b) {
        return a[b]
    })
};

const vqa = function() {
    let a = 0;
    return {
        next: function() {
            let b = a;
            a += 1;
            return b.toString()
        }
    }
};

const cwb = function(a, b) {
    a = symbolIterator(oh(a.listeners));
    for (let c = a.next(); !c.done; c = a.next())
        c = c.value,
        c(b)
};

export class queueMessageHelper {
    constructor () {
        this.messageQueue = [];
        this.listeners = {};
        this.listenerIdGenerator = vqa()
    }

    enqueue (a) {
        this.messageQueue.push(a);
        cwb(this, "ENQUEUE")
    }
    
    listen (a) {
        let b = this.listenerIdGenerator.next();
        this.listeners[b] = a;
        return b
    }
    
    unlisten  (a) {
        return this.listeners[a] ? (delete this.listeners[a],
        true) : false
    }
}