/*
 * function bind():
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = bind(alice.shout, alice);
 * boundShout(); // alerts 'alice'
 * boundShout = bind(alice.shout, {name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = bind(func, null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
 */

var bind = function() {
  // a morning walk object 
  var morningWalk = {
    name: 'Khal',
    goPoop: function(){
      onCommand(this.name);
    }
  }
  //goPoop is bound to morning walk, the function goPoop to the name 'Khal
  var boundGoPoop = bind(morningWalk.goPoop, 'khal');
  //tell khal to goPoop on command
  boundGoPoop(); 
  //binds goPoop function to the name Mitch
  boundGoPoop = bind(khal.goPoop, {name: 'mitch'})
  // tell mitch  to goPoop on command
  boundGoPoop();

};

/*
 * Function.prototype.bind:
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = alice.shout.bind(alice);
 * boundShout(); // alerts 'alice'
 * boundShout = alice.shout.bind({name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = func.bind(null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
 */

Function.prototype.bind = function() {
  // TODO: Your code here
};
