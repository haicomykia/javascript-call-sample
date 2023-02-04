'use strict';
(function(){
    /**
     * call(this)を使うと
     * 'use strict'があってもwindowsオブジェクトを出力
     */
    console.log(this); 
}).call(this); // 関数外のthisは「windowオブジェクト」


var f = function () {
    // argumentsは通常の配列ではないのでエラー
    // console.log(arguments.join(','));
    // こうすると通常の配列のように扱える
    console.log(Array.prototype.join.call(arguments));
}
f(1, 2, 3);


function test(){
    console.log(this);
}

let obj = {name: 'obj'};

// thisはグローバルオブジェクトを参照
test();
// callを使うとthisはobjを参照
test.call(obj);