require = function o(c, a, h) {
function d(i, t) {
if (!a[i]) {
if (!c[i]) {
var s = "function" == typeof require && require;
if (!t && s) return s(i, !0);
if (r) return r(i, !0);
var e = new Error("Cannot find module '" + i + "'");
throw e.code = "MODULE_NOT_FOUND", e;
}
var n = a[i] = {
exports: {}
};
c[i][0].call(n.exports, function(t) {
return d(c[i][1][t] || t);
}, n, n.exports, o, c, a, h);
}
return a[i].exports;
}
for (var r = "function" == typeof require && require, t = 0; t < h.length; t++) d(h[t]);
return d;
}({
Bg1: [ function(t, i, s) {
"use strict";
cc._RF.push(i, "d1a95lriVlBEK/GjNykCFn6", "Bg1");
var e;
function n(t, i, s) {
i in t ? Object.defineProperty(t, i, {
value: s,
enumerable: !0,
configurable: !0,
writable: !0
}) : t[i] = s;
return t;
}
cc.Class({
extends: cc.Component,
properties: (e = {
accel: 10,
pickRadius: 0,
bg2: {
default: null,
type: cc.Node
},
player: {
default: null,
type: cc.Node
},
ground: {
default: null,
type: cc.Node
},
ground1: {
default: null,
type: cc.Node
},
ground2: {
default: null,
type: cc.Node
},
ground3: {
default: null,
type: cc.Node
},
ground4: {
default: null,
type: cc.Node
},
ground5: {
default: null,
type: cc.Node
},
island: {
default: null,
type: cc.Node
},
island2: {
default: null,
type: cc.Node
},
starPrefab: {
default: null,
type: cc.Prefab
},
star: {
default: null,
type: cc.Node
},
star1: {
default: null,
type: cc.Node
},
star2: {
default: null,
type: cc.Node
},
star3: {
default: null,
type: cc.Node
},
star4: {
default: null,
type: cc.Node
},
star5: {
default: null,
type: cc.Node
},
star6: {
default: null,
type: cc.Node
},
star7: {
default: null,
type: cc.Node
},
star8: {
default: null,
type: cc.Node
}
}, n(e, "player", null), n(e, "distance_display", {
default: null,
type: cc.Label
}), n(e, "score_display", {
default: null,
type: cc.Label
}), n(e, "bird", {
default: null,
type: cc.Node
}), n(e, "bird2", {
default: null,
type: cc.Node
}), n(e, "bgmusic", {
default: null,
url: cc.AudioClip
}), e),
onLoad: function() {
cc.audioEngine.playMusic(this.bgmusic);
cc.audioEngine.setMusicVolume(.2);
this.xSpeed = 250;
this.dist = cc.pDistance(this.star.position, this.player.getPosition());
this.distance = 0;
this.score = 0;
},
start: function() {},
update: function(t) {
var i = cc.pDistance(this.star.position, this.player.getPosition()), s = cc.pDistance(this.star1.position, this.player.getPosition()), e = cc.pDistance(this.star2.position, this.player.getPosition()), n = cc.pDistance(this.star3.position, this.player.getPosition()), o = cc.pDistance(this.star4.position, this.player.getPosition()), c = cc.pDistance(this.star5.position, this.player.getPosition()), a = cc.pDistance(this.star6.position, this.player.getPosition()), h = cc.pDistance(this.star7.position, this.player.getPosition()), d = cc.pDistance(this.star8.position, this.player.getPosition());
this.xSpeed += this.accel * t;
this.node.x -= 1;
this.bg2.x -= 1;
this.bird.x -= 5;
this.bird2.x -= 5;
this.star.x -= this.xSpeed * t;
this.star1.x -= this.xSpeed * t;
this.star2.x -= this.xSpeed * t;
this.star3.x -= this.xSpeed * t;
this.star4.x -= this.xSpeed * t;
this.star5.x -= this.xSpeed * t;
this.star6.x -= this.xSpeed * t;
this.star7.x -= this.xSpeed * t;
this.star8.x -= this.xSpeed * t;
this.ground.x -= this.xSpeed * t;
this.ground1.x -= this.xSpeed * t;
this.ground2.x -= this.xSpeed * t;
this.ground3.x -= this.xSpeed * t;
this.ground4.x -= this.xSpeed * t;
this.ground5.x -= this.xSpeed * t;
this.island.x -= 2;
this.island2.x -= 2;
if (this.player.y <= -100) {
this.player.stopAllActions();
cc.director.loadScene("Gameover");
}
if (i < this.pickRadius) {
this.star.opacity = 0;
this.gainScore();
}
if (s < this.pickRadius) {
this.star1.opacity = 0;
this.gainScore();
}
if (e < this.pickRadius) {
this.star2.opacity = 0;
this.gainScore();
}
if (n < this.pickRadius) {
this.star3.opacity = 0;
this.gainScore();
}
if (o < this.pickRadius) {
this.star4.opacity = 0;
this.gainScore();
}
if (c < this.pickRadius) {
this.star5.opacity = 0;
this.gainScore();
}
if (a < this.pickRadius) {
this.star6.opacity = 0;
this.gainScore();
}
if (h < this.pickRadius) {
this.star7.opacity = 0;
this.gainScore();
}
if (d < this.pickRadius) {
this.star8.opacity = 0;
this.gainScore();
}
this.node.x <= -573 && (this.node.x = this.bg2.x + 1141);
this.bg2.x <= -573 && (this.bg2.x = this.node.x + 1141);
if (this.ground.x <= -841) {
this.ground.x = this.ground3.x + 1015;
this.ground.y = Math.floor(200 * Math.random() + 180);
}
if (this.ground3.x <= -841) {
this.ground3.x = this.ground.x + 1015;
this.ground3.y = Math.floor(200 * Math.random() + 180);
}
if (this.ground1.x <= -592) {
this.ground1.x = this.ground4.x + 1015;
this.ground1.y = Math.floor(200 * Math.random() + 180);
}
if (this.ground4.x <= -592) {
this.ground4.x = this.ground1.x + 1015;
this.ground4.y = Math.floor(200 * Math.random() + 180);
}
if (this.ground2.x <= -359) {
this.ground2.x = this.ground5.x + 1015;
this.ground2.y = Math.floor(200 * Math.random() + 180);
}
if (this.ground5.x <= -592) {
this.ground5.x = this.ground2.x + 1015;
this.ground5.y = Math.floor(200 * Math.random() + 180);
}
this.island.x <= -796 && (this.island.x = this.island2.x + 1597);
this.island2.x <= -796 && (this.island2.x = this.island.x + 1597);
if (this.star.x <= 7) {
this.star.opacity = 255;
this.star.x = this.star8.x + Math.floor(100 * Math.random() + 700);
this.star.y = Math.floor(80 * Math.random() + 400);
}
if (this.star8.x <= 7) {
this.star8.opacity = 255;
this.star8.x = this.star.x + Math.floor(100 * Math.random() + 700);
this.star8.y = Math.floor(80 * Math.random() + 400);
}
if (this.star1.x <= 81) {
this.star1.opacity = 255;
this.star1.x = this.star7.x + Math.floor(100 * Math.random() + 700);
this.star1.y = Math.floor(80 * Math.random() + 400);
}
if (this.star7.x <= 81) {
this.star7.opacity = 255;
this.star7.x = this.star1.x + Math.floor(100 * Math.random() + 700);
this.star7.y = Math.floor(80 * Math.random() + 400);
}
this.bird.x <= -695 && (this.bird.x = this.bird2.x + 2121);
this.bird2.x <= -695 && (this.bird2.x = this.bird.x + 2121);
this.gainDistance();
},
gainDistance: function() {
this.distance += 1;
this.distance_display.string = "距离： " + this.distance.toString();
},
gainScore: function() {
this.score += 1;
this.score_display.string = "得分： " + this.score.toString();
}
});
cc._RF.pop();
}, {} ],
Gameover: [ function(t, i, s) {
"use strict";
cc._RF.push(i, "3abcePuouFErqhC7CvgfZUE", "Gameover");
cc.Class({
extends: cc.Component,
properties: {
bg1: {
default: null,
type: cc.Node
},
bg2: {
default: null,
type: cc.Node
},
island: {
default: null,
type: cc.Node
},
island2: {
default: null,
type: cc.Node
},
button: {
default: null,
type: cc.Button
},
button1: {
default: null,
type: cc.Button
},
showdiatance: {
default: null,
type: cc.Label
},
showscore: {
default: null,
type: cc.Label
}
},
update: function(t) {
this.bg1.x -= 2;
this.bg2.x -= 2;
this.island.x -= 2;
this.island2.x -= 2;
this.bg1.x <= -573 && (this.bg1.x = this.bg2.x + 1141);
this.bg2.x <= -573 && (this.bg2.x = this.bg1.x + 1141);
this.island.x <= -796 && (this.island.x = this.island2.x + 1597);
this.island2.x <= -796 && (this.island2.x = this.island.x + 1597);
this.dis += 1;
this.showdiatance.string = "距离： " + this.distance.toString();
},
onLoad: function() {
this.button.node.on(cc.Node.EventType.TOUCH_START, function(t) {
cc.director.loadScene("mygame");
});
this.button1.node.on(cc.Node.EventType.TOUCH_START, function(t) {
cc.director.loadScene("menu");
});
this.dis = 0;
},
start: function() {}
});
cc._RF.pop();
}, {} ],
Menu: [ function(t, i, s) {
"use strict";
cc._RF.push(i, "df9307Hc6ROirED+jMjCwYB", "Menu");
cc.Class({
extends: cc.Component,
properties: {
bg1: {
default: null,
type: cc.Node
},
bg2: {
default: null,
type: cc.Node
},
island: {
default: null,
type: cc.Node
},
island2: {
default: null,
type: cc.Node
},
button: {
default: null,
type: cc.Button
},
exit_btn: {
default: null,
type: cc.Button
},
bird1: {
default: null,
type: cc.Node
},
bird2: {
default: null,
type: cc.Node
},
bgmusic: {
default: null,
url: cc.AudioClip
}
},
update: function(t) {
this.bird1.x -= 5;
this.bird2.x -= 5;
this.bg1.x -= 2;
this.bg2.x -= 2;
this.island.x -= 2;
this.island2.x -= 2;
this.bg1.x <= -573 && (this.bg1.x = this.bg2.x + 1141);
this.bg2.x <= -573 && (this.bg2.x = this.bg1.x + 1141);
this.island.x <= -796 && (this.island.x = this.island2.x + 1597);
this.island2.x <= -796 && (this.island2.x = this.island.x + 1597);
this.bird1.x <= -192 && (this.bird1.x = this.bird2.x + 1495);
this.bird2.x <= -192 && (this.bird2.x = this.bird1.x + 1495);
},
onLoad: function() {
cc.audioEngine.playMusic(this.bgmusic);
cc.audioEngine.setMusicVolume(.2);
this.button.node.on(cc.Node.EventType.TOUCH_START, function(t) {
cc.director.loadScene("mygame");
});
this.exit_btn.node.on(cc.Node.EventType.TOUCH_START, function(t) {
cc.director.end();
});
},
start: function() {}
});
cc._RF.pop();
}, {} ],
Player: [ function(t, i, s) {
"use strict";
cc._RF.push(i, "f728f+grw5HLKrMJV5IuDnZ", "Player");
cc.Class({
extends: cc.Component,
properties: {
speed: cc.v2(0, 0),
maxSpeed: cc.v2(0, 0),
acce: 0,
direction: 0,
jumpSpeed: 0,
jumpCount: 0,
gravity: 0,
player: null,
jumpAudio: {
default: null,
url: cc.AudioClip
}
},
onLoad: function() {
this.player = this.node.getComponent(cc.Animation);
this.jumping = !1;
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
cc.director.getCollisionManager().enabled = !0;
cc.director.getCollisionManager().enabledDebugDraw = !1;
this.collisionX = 0;
this.collisionY = 0;
(this.touchingNumber = 0) == this.jumping && this.player.playAdditive("PlayerRun");
},
onDestroy: function() {
cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
cc.director.getCollisionManager().enabled = !1;
cc.director.getCollisionManager().enabledDebugDraw = !1;
},
onKeyDown: function(t) {
switch (t.keyCode) {
case cc.KEY.w:
case cc.KEY.up:
if (!this.jumping || this.jumpCount < 2) {
this.jumping = !0;
this.speed.y = this.jumpSpeed;
this.jumpCount++;
this.player.playAdditive("PlayerAnimation");
}
cc.audioEngine.playEffect(this.jumpAudio, !1);
cc.audioEngine.setEffectsVolume(1);
}
},
onCollisionEnter: function(t, i) {
this.touchingNumber++;
var s = t.world.aabb, e = t.world.preAabb.clone(), n = i.world.aabb, o = i.world.preAabb.clone();
o.x = n.x;
e.x = s.x;
if (cc.Intersection.rectRect(o, e)) {
if (this.speed.x < 0 && o.xMax > e.xMax) {
this.node.x = e.xMax - this.node.parent.x;
this.collisionX = -1;
} else if (0 < this.speed.x && o.xMin < e.xMin) {
this.node.x = e.xMin - o.width - this.node.parent.x;
this.collisionX = 1;
}
this.speed.x = 0;
t.touchingX = !0;
} else {
o.y = n.y;
e.y = s.y;
if (cc.Intersection.rectRect(o, e)) {
if (this.speed.y < 0 && o.yMax > e.yMax) {
this.node.y = e.yMax - this.node.parent.y;
this.jumping = !1;
this.jumpCount = 0;
this.collisionY = -1;
} else if (0 < this.speed.y && o.yMax < e.yMin) {
this.node.y = e.yMin + o.height - this.node.parent.y;
this.collisionY = 1;
}
this.speed.y = 0;
t.touchingY = !0;
}
}
},
onCollisionExit: function(t) {
this.touchingNumber--;
0 === this.touchingNumber && (this.node.color = cc.Color.WHITE);
if (t.touchingX) {
this.collisionX = 0;
t.touchingX = !1;
} else if (t.touchingY) {
t.touchingY = !1;
this.collisionY = 0;
this.jumping = !0;
this.jumpCount = 1;
}
},
update: function(t) {
if (0 === this.collisionY) {
this.speed.y += this.gravity * t;
Math.abs(this.speed.y) > this.maxSpeed.y && (this.speed.y = 0 < this.speed.y ? this.maxSpeed.y : -this.maxSpeed.y);
}
0 === this.direction ? this.speed.x = 0 : this.speed.x = 200 * (0 < this.direction ? 1 : -1);
0 < this.speed.x * this.collisionX && (this.speed.x = 0);
this.node.x += this.speed.x * t;
this.node.y += this.speed.y * t;
}
});
cc._RF.pop();
}, {} ]
}, {}, [ "Bg1", "Gameover", "Menu", "Player" ]);