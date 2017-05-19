'use strict';
module.exports = function() {

  var vault = (function(){

    function setValue(key, value){
      this.key = value;
    };

    function getValue(key){
      return this.key;
    };

    return {
      setValue: setValue,
      getValue: getValue
    };

  })();


};