const EventEmitter = require('events');

class Logger extends EventEmitter {
  log = (msg) => {
    console.log(msg);
    this.emit('event_name', { id: 1, text: 'Some text' });
  };
}

module.exports = Logger;
