'use strict';
module.exports = function() {

    var myVault = {};

    function setValue(key, value){
      if( key && value && key.length < 15 ) {
        myVault[key] = value;
      } else {
        return null;
      }
    };

    function getValue(key){
      if( myVault[key] && key.length < 15 ) {
        return myVault[key];
      } else {
       return null;
       }
    };


  return {
    setValue: setValue,
    getValue: getValue
  };

};