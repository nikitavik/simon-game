(function(e){function t(t){for(var a,s,o=t[0],i=t[1],l=t[2],d=0,f=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);u&&u(t);while(f.length)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(a=!1)}a&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},c=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1804:function(e,t,n){},"4e97":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r={id:"app"},c={class:"container"},s=Object(a["f"])("h1",{class:"game-title"},"Simon",-1),o={class:"round-counter"},i={class:"game"},l={class:"game-field"},u={ref:"blue",class:"button blue","data-color":"blue"},d={ref:"red",class:"button red","data-color":"red"},f={ref:"yellow",class:"button yellow","data-color":"yellow"},b={ref:"green",class:"button green","data-color":"green"},p={key:0,class:"game-notify"},h=Object(a["e"])(" Sorry. You have failed :( Save Results? "),O={class:"game-settings"},v={class:"settings"},j=Object(a["f"])("h2",{class:"settings-title"},"Game Options",-1),m={class:"settings-radio"},y=Object(a["f"])("h3",{class:"settings-radio__title"},"Difficulty",-1),g={class:"settings-radio__label"},w=Object(a["f"])("span",null,"Easy",-1),k={class:"settings-radio__label"},x=Object(a["f"])("span",null,"Normal",-1),C={class:"settings-radio__label"},S=Object(a["f"])("span",null,"Hard",-1),_=Object(a["f"])("div",{class:"footer"},[Object(a["f"])("div",{class:"footer-text"},[Object(a["e"])("Created by "),Object(a["f"])("a",{href:"https://github.com/nikitavik"},"Nikita Kornilov")])],-1);function R(e,t,n,R,P,D){var H=Object(a["k"])("game-scoreboard");return Object(a["g"])(),Object(a["c"])("div",r,[Object(a["f"])("div",c,[s,Object(a["f"])("div",o,"Round: "+Object(a["l"])(P.round),1),Object(a["f"])("div",i,[Object(a["f"])("div",l,[Object(a["f"])("div",{onClick:t[1]||(t[1]=function(){return D.registerClick&&D.registerClick.apply(D,arguments)}),class:[{disabled:!P.active},"field"]},[Object(a["f"])("div",u,null,512),Object(a["f"])("div",d,null,512),Object(a["f"])("div",f,null,512),Object(a["f"])("div",b,null,512)],2),P.active||0===P.round?Object(a["d"])("",!0):(Object(a["g"])(),Object(a["c"])("div",p,[h,P.active||0===P.round?Object(a["d"])("",!0):(Object(a["g"])(),Object(a["c"])("button",{key:0,onClick:t[2]||(t[2]=function(){return D.saveResult&&D.saveResult.apply(D,arguments)}),class:"start-button"},"Save Results"))]))]),Object(a["f"])("div",O,[Object(a["f"])("div",v,[j,Object(a["f"])("div",m,[y,Object(a["f"])("label",g,[w,Object(a["n"])(Object(a["f"])("input",{type:"radio",value:"easy",disabled:P.active,"onUpdate:modelValue":t[3]||(t[3]=function(e){return P.difficulty=e})},null,8,["disabled"]),[[a["m"],P.difficulty]])]),Object(a["f"])("label",k,[x,Object(a["n"])(Object(a["f"])("input",{type:"radio",value:"normal",disabled:P.active,"onUpdate:modelValue":t[4]||(t[4]=function(e){return P.difficulty=e})},null,8,["disabled"]),[[a["m"],P.difficulty]])]),Object(a["f"])("label",C,[S,Object(a["n"])(Object(a["f"])("input",{type:"radio",value:"hard",disabled:P.active,"onUpdate:modelValue":t[5]||(t[5]=function(e){return P.difficulty=e})},null,8,["disabled"]),[[a["m"],P.difficulty]])])])]),Object(a["f"])("div",null,[Object(a["f"])("button",{onClick:t[6]||(t[6]=function(){return D.startButtonHandler&&D.startButtonHandler.apply(D,arguments)}),class:"start-button"},Object(a["l"])(P.active?"Stop":"Start"),1)])])]),Object(a["f"])(H),_])])}var P=n("b85c"),D=n("1da1"),H=(n("96cf"),n("d3b7"),n("99af"),n("fb6a"),n("d4ec")),N=n("bee2"),T=n("ade3"),E=function(){function e(){Object(H["a"])(this,e)}return Object(N["a"])(e,null,[{key:"playSound",value:function(t){e.sounds[t].play()}}]),e}();Object(T["a"])(E,"sounds",{blue:new Audio("/assets/sounds_1.mp3"),red:new Audio("/assets/sounds_2.mp3"),yellow:new Audio("/assets/sounds_3.mp3"),green:new Audio("/assets/sounds_4.mp3")});var q=E.playSound,A="https://simon-game-test-default-rtdb.europe-west1.firebasedatabase.app/scoreboard.json",M=function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(A);case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(t,n,a){var r,c,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=U(t,n,a),e.next=3,fetch(A,{method:"POST",headers:{"Content-Type":"application/json"},body:r});case 3:return c=e.sent,e.next=6,c.json();case 6:s=e.sent,console.log(s);case 8:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}();function U(e,t,n){var a={name:e,round:t,difficulty:n,date:(new Date).toLocaleDateString()};return JSON.stringify(a)}n("b0c0");var G=Object(a["o"])("data-v-67053290");Object(a["i"])("data-v-67053290");var B={key:0,class:"scoreboard"},I={class:"row"},J=Object(a["f"])("th",{class:"header cell"},"Name",-1),V=Object(a["f"])("th",{class:"header cell"},"Rounds",-1),K=Object(a["f"])("th",{class:"header cell"},"Difficulty",-1),Y=Object(a["f"])("th",{class:"header cell"},"Date",-1),$={class:"header cell"},z={class:"header cell"},F={class:"header cell"},Q={class:"header cell"},W=Object(a["f"])("tr",null,null,-1);Object(a["h"])();var X=G((function(e,t,n,r,c,s){return Object(a["g"])(),Object(a["c"])(a["a"],null,[Object(a["f"])("button",{onClick:t[1]||(t[1]=function(){return s.scoreboardOpenHandler&&s.scoreboardOpenHandler.apply(s,arguments)}),class:"open"}," Open Scoreboard"),c.opened?(Object(a["g"])(),Object(a["c"])("table",B,[Object(a["f"])("tr",I,[J,V,K,Y,Object(a["f"])("b",{onClick:t[2]||(t[2]=function(){return s.scoreboardCloseHandler&&s.scoreboardCloseHandler.apply(s,arguments)}),class:"close"},"x")]),(Object(a["g"])(!0),Object(a["c"])(a["a"],null,Object(a["j"])(c.scores,(function(e){return Object(a["g"])(),Object(a["c"])("tr",{key:e.index,class:"row"},[Object(a["f"])("td",$,Object(a["l"])(e.name),1),Object(a["f"])("td",z,Object(a["l"])(e.round),1),Object(a["f"])("td",F,Object(a["l"])(e.difficulty),1),Object(a["f"])("td",Q,Object(a["l"])(e.date),1)])})),128)),W])):Object(a["d"])("",!0)],64)})),Z=(n("07ac"),{name:"GameScoreboard",data:function(){return{opened:!1,scores:[]}},methods:{scoreboardOpenHandler:function(){this.opened||(this.opened=!0,this.updateData())},scoreboardCloseHandler:function(){this.opened=!1,this.scores=[]},updateData:function(){var e=this;return Object(D["a"])(regeneratorRuntime.mark((function t(){var n,a,r,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,M();case 2:for(n=t.sent,a=0,r=Object.values(n);a<r.length;a++)c=r[a],e.scores.push(c);console.log(e.scores);case 5:case"end":return t.stop()}}),t)})))()}}});n("9c61");Z.render=X,Z.__scopeId="data-v-67053290";var ee=Z,te={name:"App",components:{"game-scoreboard":ee},data:function(){return{difficulty:"normal",active:!1,pattern:[],round:0}},created:function(){window.p=L,window.g=M},methods:{startButtonHandler:function(){this.active?this.gameEnd():this.gameStart()},playPattern:function(e,t){var n=this;return Object(D["a"])(regeneratorRuntime.mark((function e(){var a,r,c,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=1e3,"easy"===t&&(a=1500),"hard"===t&&(a=400),r=Object(P["a"])(n.sequence),e.prev=4,r.s();case 6:if((c=r.n()).done){e.next=14;break}return s=c.value,e.next=10,new Promise((function(e){return setTimeout((function(){e()}),a)}));case 10:s.cb(),n.animateColor(s.colorName,a);case 12:e.next=6;break;case 14:e.next=19;break;case 16:e.prev=16,e.t0=e["catch"](4),r.e(e.t0);case 19:return e.prev=19,r.f(),e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[4,16,19,22]])})))()},gameStart:function(){console.warn("Game: STARTED with difficulty ".concat(this.difficulty.toUpperCase()," and pattern ").concat(this.sequence)),this.active=!0,this.sequence=[],this.round=0,this.newRound()},gameEnd:function(){console.warn("Game: ENDED with difficulty ".concat(this.difficulty.toUpperCase()," and pattern ").concat(this.sequence)),this.active=!1},newRound:function(){this.round=this.round+1,this.addNewColor(this.randomColor()),this.playPattern(this.pattern,this.difficulty),this.copy=this.sequence.slice(0)},registerClick:function(e){if(this.active&&e.target.dataset.color){var t=e.target.dataset.color;this.checkInput(t),this.animateColor(t),q(t)}},animateColor:function(e,t){var n=this.$refs[e];n.classList.add("active"),setTimeout((function(){n.classList.remove("active")}),t)},addNewColor:function(e){var t={colorName:e,cb:function(){q(e)}};this.sequence.push(t)},checkInput:function(e){var t=this.copy.shift();this.active=t.colorName===e,this.checkLose()},checkLose:function(){0===this.copy.length&&this.active?this.newRound():this.active||this.gameEnd()},randomColor:function(){var e=Math.floor(4*Math.random()),t=["yellow","blue","red","green"];return t[e]},saveResult:function(){var e=prompt("Tell me your name, please!");L(e,this.round,this.difficulty).then((function(e){alert("Successfully saved")}))}}};n("7293");te.render=R;var ne=te;Object(a["b"])(ne).mount("#app")},7293:function(e,t,n){"use strict";n("1804")},"9c61":function(e,t,n){"use strict";n("4e97")}});
//# sourceMappingURL=app.fdb058df.js.map