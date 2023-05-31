class EventEmitter {
    Callbacks={};

  subscribe(event, cb) {
      if(this.Callbacks[event]){
          this.Callbacks[event].push(cb);
      }else{
          this.Callbacks[event]=[cb];
      }
    return {
        unsubscribe: () => {
            if(this.Callbacks[event] && this.Callbacks[event].length>1){
                this.Callbacks[event].pop();
            }else{
                delete this.Callbacks[event];
            }
        },
    };
  }

  emit(event, args = []) {
      if(this.Callbacks[event]){
          return this.Callbacks[event].map(cb=>cb(...args));
      }
      return [];
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */