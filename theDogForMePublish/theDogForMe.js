(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"theDogForMe_atlas_", frames: [[3965,403,92,44],[0,3509,680,452],[1026,2483,680,544],[3510,743,310,289],[2991,2483,625,519],[1708,3883,640,426],[2309,2971,680,455],[2390,3459,680,453],[1026,3484,680,453],[3510,490,375,251],[0,2483,1024,1024],[3965,0,128,128],[3072,3459,680,453],[2309,2483,680,486],[2350,3914,600,400],[4022,130,68,68],[4022,200,68,68],[3850,2394,230,200],[3618,2596,230,200],[3618,2798,230,200],[3850,2596,230,200],[3850,2798,230,200],[3754,3404,230,200],[3510,0,453,488],[3673,3202,230,200],[682,3509,230,200],[3673,3000,230,200],[1708,3060,230,200],[3965,130,55,271],[3754,3606,230,200],[1940,3060,230,200],[3510,1034,381,173],[3510,1209,381,173],[682,3711,230,200],[3742,1990,230,200],[3822,743,230,200],[3510,2192,230,200],[3510,1586,230,200],[3742,1586,230,200],[3510,1788,230,200],[3618,2394,230,200],[3742,1788,230,200],[3742,1384,230,200],[3510,1384,230,200],[3510,1990,230,200],[2991,3004,680,453],[1708,3428,680,453],[1026,3029,680,453],[1708,3262,229,116],[1708,2483,599,575],[3742,2192,230,200],[3887,490,190,189],[0,0,3508,2481]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._1pngcopy2 = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._6runningforward = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.B1 = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.B2 = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.B3 = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bichonfrisebeach = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bishon3 = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Chi1 = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Chi3 = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.chiwawa = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.forbiddenicon27 = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.if_29_Sound_alt_1062171 = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.s2 = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.s3 = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.sharpeipuppyi9 = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.איקסלבן = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.איקסלסגירתפופאפ = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.אמסטף = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.אמריקןבולדוג = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.באסטהאונד = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.בובייהדהפלנדר = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.בוקסר = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.בולדוגאנגלי = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.בעלים = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.בישוןפריזהjpgcopy = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.גולדןרטריבר = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.האסקיסיבירי = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.טריירטיבטי = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.סוגרחדש = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.סינימצוייץ = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.סמויאד = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.עצםגדול1 = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.עצםגדול2 = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.פג = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.פפילון = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.פינצר = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.ציוואווה = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.קוקרספנייל = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.קולימזוקן = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.רוטווילר = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.רועהגרמני = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.שרפיי = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.שיצו = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.שיקוקו = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.שלטי = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.תמונה1 = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.תמונה2 = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.תמונה3 = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.תמונה1_1 = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.כלב = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.לברדוררטריבר = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.לוגומעודכן = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.מלונהמעודכןיותר01 = function() {
	this.spriteSheet = ss["theDogForMe_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Sharpey1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sharpeipuppyi9();
	this.instance.parent = this;
	this.instance.setTransform(-75,-60,0.25,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-60,150,120);


(lib.PopUpWindow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.מלונהמעודכןיותר01();
	this.instance.parent = this;
	this.instance.setTransform(-541.5,-382.9,0.309,0.309);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.PopUpWindow, new cjs.Rectangle(-541.5,-382.9,1083.1,766), null);


(lib.icon5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.לוגומעודכן();
	this.instance.parent = this;
	this.instance.setTransform(-22.8,-22.7,0.241,0.241);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.icon5, new cjs.Rectangle(-22.8,-22.7,45.8,45.5), null);


(lib.icon4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.סוגרחדש();
	this.instance.parent = this;
	this.instance.setTransform(-11,-118.4,0.734,0.865,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.icon4, new cjs.Rectangle(-29.2,-118.4,58.5,236.8), null);


(lib.icon3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.סוגרחדש();
	this.instance.parent = this;
	this.instance.setTransform(-11,-118.4,0.734,0.865,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.icon3, new cjs.Rectangle(-29.2,-118.4,58.5,236.8), null);


(lib.icon2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.כלב();
	this.instance.parent = this;
	this.instance.setTransform(-21.4,-20.5,0.071,0.071);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.icon2, new cjs.Rectangle(-21.4,-20.5,42.8,41.1), null);


(lib.icon1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.בעלים();
	this.instance.parent = this;
	this.instance.setTransform(30.7,-36.2,0.135,0.148,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.icon1, new cjs.Rectangle(-30.6,-36.2,61.4,72.5), null);


(lib.Fill_ChoiseButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.עצםגדול2();
	this.instance.parent = this;
	this.instance.setTransform(-47.2,-21.4,0.248,0.248);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.2,-21.4,94.5,42.9);


(lib.ExitButton_Boxer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.איקסלבן();
	this.instance.parent = this;
	this.instance.setTransform(-21.2,-21.2,0.544,0.531);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.2,-21.2,37,36.1);


(lib.teryer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.טריירטיבטי();
	this.instance.parent = this;
	this.instance.setTransform(-42.5,-37.5,0.37,0.375);

	this.instance_1 = new lib.forbiddenicon27();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-20,-20,0.039,0.039);

	this.text = new cjs.Text("טרייר טיבטי", "16px 'Gisha'");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 99;
	this.text.parent = this;
	this.text.setTransform(6.3,-53.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.text},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-37.5,85,75);


(lib.shitzu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.שיצו();
	this.instance.parent = this;
	this.instance.setTransform(-42.5,-37.5,0.37,0.375);

	this.instance_1 = new lib.forbiddenicon27();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-13,-15,0.039,0.039);

	this.text = new cjs.Text("שיצו", "16px 'Gisha'");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 99;
	this.text.parent = this;
	this.text.setTransform(9,-46.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.text},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-37.5,85,75);


(lib.shikuku = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.שיקוקו();
	this.instance.parent = this;
	this.instance.setTransform(-42.5,-37.5,0.37,0.375);

	this.instance_1 = new lib.forbiddenicon27();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-20,-20,0.039,0.039);

	this.text = new cjs.Text("שיקוקו", "16px 'Gisha'");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 92;
	this.text.parent = this;
	this.text.setTransform(0.5,-55.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.text},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-37.5,85,75);


(lib.Sharpey3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.s3();
	this.instance.parent = this;
	this.instance.setTransform(-75,-60,0.221,0.247);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-60,150,120);


(lib.Sharpey2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.s2();
	this.instance.parent = this;
	this.instance.setTransform(-75,-60,0.221,0.265);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-60,150,120);


(lib.sharpey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.שרפיי();
	this.instance.parent = this;
	this.instance.setTransform(-42.5,-37.5,0.37,0.375);

	this.text = new cjs.Text("שר פיי", "16px 'Gisha'");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 99;
	this.text.parent = this;
	this.text.setTransform(0,-46.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-37.5,85,75);


(lib.shalty = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.שלטי();
	this.instance.parent = this;
	this.instance.setTransform(-42.5,-37.5,0.37,0.375);

	this.instance_1 = new lib.forbiddenicon27();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-4,-19,0.039,0.039);

	this.text = new cjs.Text("שלטי", "16px 'Gisha'");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 92;
	this.text.parent = this;
	this.text.setTransform(21.4,-51.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.text},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-37.5,85,75);


(lib.samyoad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.סמויאד();
	this.instance.parent = this;
	this.instance.setTransform(-42.5,-37.5,0.37,0.375);

	this.instance_1 = new lib.forbiddenicon27();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-20,-20,0.039,0.039);

	this.text = new cjs.Text("סמויאד", "16px 'Gisha'");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 99;
	this.text.parent = this;
	this.text.setTransform(3.8,-50.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.text},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-37.5,85,75);


(lib.rotwiler = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.רוטווילר();
	this.instance.parent = this;
	this.instance.setTransform(-42.5,-37.5,0.37,0.375);

	this.instance_1 = new lib.forbiddenicon27();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-17,-17,0.039,0.039);

	this.text = new cjs.Text("רוטווילר", "16px 'Gisha'");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 92;
	this.text.parent = this;
	this.text.setTransform(0,-49.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.text},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-37.5,85,75);


(lib.pincher = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.פינצר();
	this.instance.parent = this;
	this.instance.setTransform(-42.5,-37.5,0.37,0.375);

	this.instance_1 = new lib.forbiddenicon27();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-22,-19,0.039,0.039);

	this.text = new cjs.Text("פינצ'ר", "16px 'Gisha'");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 99;
	this.text.parent = this;
	this.text.setTransform(0,-50.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.text},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-37.5,85,75);


(lib.papylon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.פפילון();
	this.instance.parent = this;
	this.instance.setTransform(-42.5,-37.5,0.37,0.375);

	this.instance_1 = new lib.forbiddenicon27();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-20,-20,0.039,0.039);

	this.text = new cjs.Text("פפילון", "16px 'Gisha'");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 99;
	this.text.parent = this;
	this.text.setTransform(0,-58.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.text},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-37.5,85,75);


(lib.pag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.פג();
	this.instance.parent = this;
	this.instance.setTransform(-42.5,-37.5,0.37,0.375);

	this.instance_1 = new lib.forbiddenicon27();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-20,-20,0.039,0.039);

	this.text = new cjs.Text("פאג", "16px 'Gisha'");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 99;
	this.text.parent = this;
	this.text.setTransform(0,-58.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.text},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-37.5,85,75);


(lib.megorim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("סגנון מגורים", "bold 14px 'Gisha'");
	this.text.textAlign = "right";
	this.text.lineHeight = 18;
	this.text.lineWidth = 143;
	this.text.parent = this;
	this.text.setTransform(71.4,-10.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmRApIAAhRIMjAAIAABRg");
	this.shape.setTransform(33.1,-4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.3,-12.6,146.7,25.3);


(lib.labrador = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.לברדוררטריבר();
	this.instance.parent = this;
	this.instance.setTransform(-42.5,-37.5,0.37,0.375);

	this.instance_1 = new lib.forbiddenicon27();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-20,-20,0.039,0.039);

	this.text = new cjs.Text("לברדור", "16px 'Gisha'");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 92;
	this.text.parent = this;
	this.text.setTransform(-5.1,-55.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.text},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-37.5,85,75);


(lib.koli = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.קולימזוקן();
	this.instance.parent = this;
	this.instance.setTransform(-42.5,-37.5,0.37,0.375);

	this.instance_1 = new lib.forbiddenicon27();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-25,-20,0.039,0.039);

	this.text = new cjs.Text("קולי מזוקן", "16px 'Gisha'");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 92;
	this.text.parent = this;
	this.text.setTransform(2.6,-55.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.text},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-37.5,85,75);


(lib.hasky = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.האסקיסיבירי();
	this.instance.parent = this;
	this.instance.setTransform(-42.5,-37.5,0.37,0.375);

	this.instance_1 = new lib.forbiddenicon27();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-20,-20,0.039,0.039);

	this.text = new cjs.Text("האסקי סיבירי", "16px 'Gisha'");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 136;
	this.text.parent = this;
	this.text.setTransform(12.5,-55.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.text},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-37.5,85,75);


(lib.golden = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.גולדןרטריבר();
	this.instance.parent = this;
	this.instance.setTransform(-42.5,-37.5,0.37,0.375);

	this.instance_1 = new lib.forbiddenicon27();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-23,-20,0.039,0.039);

	this.text = new cjs.Text("גולדן רטריבר", "16px 'Gisha'");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 99;
	this.text.parent = this;
	this.text.setTransform(-9.1,-58.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.text},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-37.5,85,75);


(lib.german = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.רועהגרמני();
	this.instance.parent = this;
	this.instance.setTransform(-42.5,-37.5,0.37,0.375);

	this.instance_1 = new lib.forbiddenicon27();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-6,-24,0.039,0.039);

	this.text = new cjs.Text("רועה גרמני", "16px 'Gisha'");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 92;
	this.text.parent = this;
	this.text.setTransform(15.1,-46.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.text},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-37.5,85,75);


(lib.ExitButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.איקסלסגירתפופאפ();
	this.instance.parent = this;
	this.instance.setTransform(-21.2,-21.2,0.624,0.624);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBAA1F").s().p("AgFDWQhTgDg7g8Qg9g/AAhYQAAhYA9g/QA7g7BTgDIAFAAQBXABA8A9QA+A/AABYQAABYg+A/Qg8A+hXABIgFAAg");
	this.shape.setTransform(-0.3,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ExitButton, new cjs.Rectangle(-21.2,-21.8,42.5,43.1), null);


(lib.Empty_Bone17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._1pngcopy2();
	this.instance.parent = this;
	this.instance.setTransform(-15,-7.5,0.077,0.077);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Empty_Bone17, new cjs.Rectangle(-15,-7.5,7.1,3.4), null);


(lib.coker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.קוקרספנייל();
	this.instance.parent = this;
	this.instance.setTransform(-42.5,-37.5,0.37,0.375);

	this.instance_1 = new lib.forbiddenicon27();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-13,-18,0.039,0.039);

	this.text = new cjs.Text("קוקר ספנייל", "16px 'Gisha'");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 99;
	this.text.parent = this;
	this.text.setTransform(9,-58.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.text},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-37.5,85,75);


(lib.Chiwawa3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Chi1();
	this.instance.parent = this;
	this.instance.setTransform(-75,-60,0.221,0.265);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-60,150,120);


(lib.Chiwawa1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Chi3();
	this.instance.parent = this;
	this.instance.setTransform(-75,-60,0.221,0.265);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-60,150,120);


(lib.chiwawa_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ציוואווה();
	this.instance.parent = this;
	this.instance.setTransform(-42.5,-37.5,0.37,0.375);

	this.text = new cjs.Text("צ'יוואווה", "16px 'Gisha'");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 92;
	this.text.parent = this;
	this.text.setTransform(5.7,-56.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-37.5,85,75);


(lib.chinese = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.סינימצוייץ();
	this.instance.parent = this;
	this.instance.setTransform(-42.5,-37.5,0.37,0.375);

	this.instance_1 = new lib.forbiddenicon27();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-20,-20,0.039,0.039);

	this.text = new cjs.Text("סיני מצויץ", "16px 'Gisha'");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 99;
	this.text.parent = this;
	this.text.setTransform(9,-58.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.text},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-37.5,85,75);


(lib.category6_size = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("גודל הכלב", "bold 14px 'Gisha'");
	this.text.textAlign = "right";
	this.text.lineHeight = 18;
	this.text.lineWidth = 168;
	this.text.parent = this;
	this.text.setTransform(84.2,-8.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("Al3hKILvAAIAACVIrvAAg");
	this.shape.setTransform(53.8,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Al3BLIAAiVILvAAIAACVg");
	this.shape_1.setTransform(53.8,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.1,-10.2,178.6,20.4);


(lib.category5_ofi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("אופי הכלב", "bold 14px 'Gisha'");
	this.text.textAlign = "right";
	this.text.lineHeight = 18;
	this.text.lineWidth = 168;
	this.text.parent = this;
	this.text.setTransform(84.2,-8.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmEhqIMJAAIAADVIsJAAg");
	this.shape.setTransform(52.7,-0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmEBqIAAjUIMJAAIAADUg");
	this.shape_1.setTransform(52.7,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.1,-12.4,178.8,23.3);


(lib.category4_time = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("זמן איכות נדרש לכלב", "bold 14px 'Gisha'");
	this.text.textAlign = "right";
	this.text.lineHeight = 18;
	this.text.lineWidth = 168;
	this.text.parent = this;
	this.text.setTransform(84.2,-20.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("Atli4IbLAAIAAFxI7LAAg");
	this.shape.setTransform(-0.8,-5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AtlC5IAAlxIbLAAIAAFxg");
	this.shape_1.setTransform(-0.8,-5.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.8,-24.8,176,39);


(lib.category3_clean = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("ניקיון הבית", "bold 14px 'Gisha'");
	this.text.textAlign = "right";
	this.text.lineHeight = 18;
	this.text.lineWidth = 143;
	this.text.parent = this;
	this.text.setTransform(71.4,-10.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AoAhZIQBAAIAACzIwBAAg");
	this.shape.setTransform(46.7,-3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AoABaIAAizIQBAAIAACzg");
	this.shape_1.setTransform(46.7,-3.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.3,-13.7,172.4,26.4);


(lib.category2_family = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("מצב משפחתי", "bold 14px 'Gisha'");
	this.text.textAlign = "right";
	this.text.lineHeight = 18;
	this.text.lineWidth = 143;
	this.text.parent = this;
	this.text.setTransform(71.4,-10.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnDhLIOHAAIAACXIuHAAg");
	this.shape.setTransform(27.3,-2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnDBMIAAiXIOHAAIAACXg");
	this.shape_1.setTransform(27.3,-2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.3,-12.6,146.8,25.3);


(lib.bust = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.באסטהאונד();
	this.instance.parent = this;
	this.instance.setTransform(-42.5,-37.5,0.37,0.375);

	this.instance_1 = new lib.forbiddenicon27();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-20,-20,0.039,0.039);

	this.text = new cjs.Text("באסט האונד", "16px 'Gisha'");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 99;
	this.text.parent = this;
	this.text.setTransform(0,-58.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.text},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-37.5,85,75);


(lib.british_boldug = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.בולדוגאנגלי();
	this.instance.parent = this;
	this.instance.setTransform(-42.5,-37.5,0.37,0.375);

	this.instance_1 = new lib.forbiddenicon27();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-17,-17,0.039,0.039);

	this.text = new cjs.Text("בולדוג בריטי", "16px 'Gisha'");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 99;
	this.text.parent = this;
	this.text.setTransform(9,-58.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.text},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-37.5,85,75);


(lib.Boxer3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.B2();
	this.instance.parent = this;
	this.instance.setTransform(-75,-60,0.484,0.415);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-60,150,120);


(lib.Boxer2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.B3();
	this.instance.parent = this;
	this.instance.setTransform(-75,-60,0.24,0.231);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-60,150,120);


(lib.boxer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.בוקסר();
	this.instance.parent = this;
	this.instance.setTransform(-42.5,-37.5,0.37,0.375);

	this.text = new cjs.Text("בוקסר", "16px 'Gisha'");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 92;
	this.text.parent = this;
	this.text.setTransform(0,-49.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-37.5,85,75);


(lib.bone_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.עצםגדול1();
	this.instance.parent = this;
	this.instance.setTransform(-15.5,-7.5,0.081,0.087);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bone_1, new cjs.Rectangle(-15.5,-7.5,31,15), null);


(lib.bobyea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.בובייהדהפלנדר();
	this.instance.parent = this;
	this.instance.setTransform(-42.5,-37.5,0.37,0.375);

	this.instance_1 = new lib.forbiddenicon27();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-21,-17,0.039,0.039);

	this.text = new cjs.Text("בובייה דה פלנדר", "16px 'Gisha'");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 116;
	this.text.parent = this;
	this.text.setTransform(-0.5,-54.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.text},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-37.5,85,75);


(lib.bishon2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bishon3();
	this.instance.parent = this;
	this.instance.setTransform(-75,-60,0.221,0.264);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-60,150,120);


(lib.bishon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.בישוןפריזהjpgcopy();
	this.instance.parent = this;
	this.instance.setTransform(-42.5,-37.5,0.37,0.375);

	this.text = new cjs.Text("בישון פריזה", "16px 'Gisha'");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 99;
	this.text.parent = this;
	this.text.setTransform(1.3,-58.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-37.5,85,75);


(lib.AudioAmstaff_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.if_29_Sound_alt_1062171();
	this.instance.parent = this;
	this.instance.setTransform(14.1,14.1,0.22,0.22,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,-14,28.1,28.1);


(lib.Amstaff2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.תמונה2();
	this.instance.parent = this;
	this.instance.setTransform(-75,-60,0.221,0.265);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-60,150,120);


(lib.Amstaff1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.תמונה1();
	this.instance.parent = this;
	this.instance.setTransform(-75,-60,0.221,0.265);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-60,150,120);


(lib.amstaf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.אמסטף();
	this.instance.parent = this;
	this.instance.setTransform(-42.5,-37.5,0.37,0.375);

	this.text = new cjs.Text("אמסטף", "16px 'Gisha'");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 99;
	this.text.parent = this;
	this.text.setTransform(0,-58.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-37.5,85,75);


(lib.american_boldug = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.אמריקןבולדוג();
	this.instance.parent = this;
	this.instance.setTransform(-42.5,-37.5,0.37,0.375);

	this.instance_1 = new lib.forbiddenicon27();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-20,-20,0.039,0.039);

	this.text = new cjs.Text("בולדוג אמריקאי", "16px 'Gisha'");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 99;
	this.text.parent = this;
	this.text.setTransform(9,-58.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.text},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-37.5,85,75);


(lib.clean_choise1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("נקה בחירה", "bold 14px 'Gisha'");
	this.text.textAlign = "right";
	this.text.lineHeight = 18;
	this.text.lineWidth = 71;
	this.text.parent = this;
	this.text.setTransform(37.3,-9.8);

	this.instance = new lib.תמונה1_1();
	this.instance.parent = this;
	this.instance.setTransform(-50.1,-23,0.437,0.397);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.1,-23,100.2,46.1);


(lib.Chiwawa2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.chiwawa();
	this.instance.parent = this;
	this.instance.setTransform(-347,-215.8,1.851,1.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-347,-215.8,694.1,431.7);


(lib.BSharpey1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sharpeipuppyi9();
	this.instance.parent = this;
	this.instance.setTransform(-337.3,-224.8,1.124,1.124);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-337.3,-224.8,674.6,449.8);


(lib.Boxer1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.B1();
	this.instance.parent = this;
	this.instance.setTransform(-340,-272);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-340,-272,680,544);


(lib.Bishon3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._6runningforward();
	this.instance.parent = this;
	this.instance.setTransform(-75,-60.5,0.221,0.268);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-60.5,150,121);


(lib.Bishon1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bichonfrisebeach();
	this.instance.parent = this;
	this.instance.setTransform(-75,-60,0.234,0.282);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-60,150,120);


(lib.BBishon3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._6runningforward();
	this.instance.parent = this;
	this.instance.setTransform(-264.7,-176,0.779,0.779);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-264.7,-176,529.6,352);


(lib.BBishon1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bichonfrisebeach();
	this.instance.parent = this;
	this.instance.setTransform(-308.5,-244,0.964,1.146);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-308.5,-244,617,488);


(lib.BAmstaff3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.תמונה3();
	this.instance.parent = this;
	this.instance.setTransform(-340,-226.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-340,-226.5,680,453);


(lib.time3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("שלוש פעמים ביום", "14px 'Gisha'");
	this.text.textAlign = "right";
	this.text.lineHeight = 18;
	this.text.lineWidth = 205;
	this.text.parent = this;
	this.text.setTransform(102.4,-9.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ApFhfISLAAIAAC/IyLAAg");
	this.shape.setTransform(49.6,3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ApFBgIAAi/ISKAAIAAC/g");
	this.shape_1.setTransform(49.6,3.2);

	this.Empty_Bone5 = new lib.Empty_Bone17();
	this.Empty_Bone5.parent = this;
	this.Empty_Bone5.setTransform(180.2,27.2,4.479,4.478);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.Empty_Bone5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.3,-11.9,213.1,25.8);


(lib.time2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("פעמיים ביום", "14px 'Gisha'");
	this.text.textAlign = "right";
	this.text.lineHeight = 18;
	this.text.lineWidth = 205;
	this.text.parent = this;
	this.text.setTransform(102.4,-9.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnSg2IOlAAIAABtIulAAg");
	this.shape.setTransform(56.6,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnSA3IAAhtIOlAAIAABtg");
	this.shape_1.setTransform(56.6,-0.3);

	this.Empty_Bone5 = new lib.Empty_Bone17();
	this.Empty_Bone5.parent = this;
	this.Empty_Bone5.setTransform(179.5,27.8,4.479,4.478);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.Empty_Bone5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.3,-11.9,208.7,23.9);


(lib.time1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("פעם ביום", "14px 'Gisha'");
	this.text.textAlign = "right";
	this.text.lineHeight = 18;
	this.text.lineWidth = 205;
	this.text.parent = this;
	this.text.setTransform(102.4,-9.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AkfhbII/AAIAAC3Io/AAg");
	this.shape.setTransform(75.6,-2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkfBcIAAi3II/AAIAAC3g");
	this.shape_1.setTransform(75.6,-2.7);

	this.Empty_Bone5 = new lib.Empty_Bone17();
	this.Empty_Bone5.parent = this;
	this.Empty_Bone5.setTransform(179.7,26.1,4.479,4.478);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.Empty_Bone5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.3,-12.9,209.7,24.9);


(lib.size3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("גדול", "14px 'Gisha'");
	this.text.textAlign = "right";
	this.text.lineHeight = 18;
	this.text.lineWidth = 205;
	this.text.parent = this;
	this.text.setTransform(102.4,-9.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ai7hHIF3AAIAACPIl3AAg");
	this.shape.setTransform(87.5,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ai7BIIAAiPIF2AAIAACPg");
	this.shape_1.setTransform(87.5,0.5);

	this.Empty_Bone5 = new lib.Empty_Bone17();
	this.Empty_Bone5.parent = this;
	this.Empty_Bone5.setTransform(179.1,25.5,4.479,4.478);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.Empty_Bone5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.3,-11.9,211.5,23.9);


(lib.size2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("בינוני", "14px 'Gisha'");
	this.text.textAlign = "right";
	this.text.lineHeight = 18;
	this.text.lineWidth = 205;
	this.text.parent = this;
	this.text.setTransform(102.4,-9.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjWgxIGtAAIAABjImtAAg");
	this.shape.setTransform(88.1,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjWAyIAAhjIGtAAIAABjg");
	this.shape_1.setTransform(88.1,-0.8);

	this.Empty_Bone5 = new lib.Empty_Bone17();
	this.Empty_Bone5.parent = this;
	this.Empty_Bone5.setTransform(179.8,26.8,4.479,4.478);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.Empty_Bone5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.3,-11.9,214.9,23.9);


(lib.size1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("קטן", "14px 'Gisha'");
	this.text.textAlign = "right";
	this.text.lineHeight = 18;
	this.text.lineWidth = 205;
	this.text.parent = this;
	this.text.setTransform(102.4,-9.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AizhBIFnAAIAACDIlnAAg");
	this.shape.setTransform(88.8,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiyBCIAAiDIFmAAIAACDg");
	this.shape_1.setTransform(88.8,0.6);

	this.Empty_Bone5 = new lib.Empty_Bone17();
	this.Empty_Bone5.parent = this;
	this.Empty_Bone5.setTransform(180.4,25.7,4.479,4.478);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.Empty_Bone5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.3,-11.9,212,23.9);


(lib.ofi5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("כלב שמירה", "14px 'Gisha'");
	this.text.textAlign = "right";
	this.text.lineHeight = 18;
	this.text.lineWidth = 205;
	this.text.parent = this;
	this.text.setTransform(102.4,-9.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("Al+hCIL9AAIAACFIr9AAg");
	this.shape.setTransform(67.4,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Al9BDIAAiFIL8AAIAACFg");
	this.shape_1.setTransform(67.4,0.9);

	this.Empty_Bone5 = new lib.Empty_Bone17();
	this.Empty_Bone5.parent = this;
	this.Empty_Bone5.setTransform(179.5,24.6,4.479,4.478);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.Empty_Bone5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.3,-11.9,211,23.9);


(lib.ofi4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("רועש", "14px 'Gisha'");
	this.text.textAlign = "right";
	this.text.lineHeight = 18;
	this.text.lineWidth = 205;
	this.text.parent = this;
	this.text.setTransform(102.4,-9.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlDg5IKHAAIAABzIqHAAg");
	this.shape.setTransform(71.5,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlDA5IAAhxIKHAAIAABxg");
	this.shape_1.setTransform(71.5,-0.4);

	this.Empty_Bone5 = new lib.Empty_Bone17();
	this.Empty_Bone5.parent = this;
	this.Empty_Bone5.setTransform(179.8,24,4.479,4.478);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.Empty_Bone5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.3,-11.9,209.2,23.9);


(lib.ofi3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("קל לאילוף", "14px 'Gisha'");
	this.text.textAlign = "right";
	this.text.lineHeight = 18;
	this.text.lineWidth = 205;
	this.text.parent = this;
	this.text.setTransform(102.4,-9.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlIhBIKRAAIAACDIqRAAg");
	this.shape.setTransform(70.2,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlIBCIAAiDIKRAAIAACDg");
	this.shape_1.setTransform(70.2,-0.5);

	this.Empty_Bone5 = new lib.Empty_Bone17();
	this.Empty_Bone5.parent = this;
	this.Empty_Bone5.setTransform(180,23.7,4.479,4.478);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.Empty_Bone5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.3,-11.9,208.7,23.9);


(lib.ofi2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("אנרגטי", "14px 'Gisha'");
	this.text.textAlign = "right";
	this.text.lineHeight = 18;
	this.text.lineWidth = 205;
	this.text.parent = this;
	this.text.setTransform(102.4,-9.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjWhKIGtAAIAACVImtAAg");
	this.shape.setTransform(81.8,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjWBLIAAiVIGtAAIAACVg");
	this.shape_1.setTransform(81.8,-0.8);

	this.Empty_Bone5 = new lib.Empty_Bone17();
	this.Empty_Bone5.parent = this;
	this.Empty_Bone5.setTransform(179.3,23.7,4.479,4.478);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.Empty_Bone5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.3,-11.9,208.7,23.9);


(lib.ofi1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("רגוע", "14px 'Gisha'");
	this.text.textAlign = "right";
	this.text.lineHeight = 18;
	this.text.lineWidth = 205;
	this.text.parent = this;
	this.text.setTransform(102.4,-9.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ak7hbIJ3AAIAAC3Ip3AAg");
	this.shape.setTransform(72.8,-2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ak7BcIAAi3IJ3AAIAAC3g");
	this.shape_1.setTransform(72.8,-2.7);

	this.Empty_Bone5 = new lib.Empty_Bone17();
	this.Empty_Bone5.parent = this;
	this.Empty_Bone5.setTransform(179.3,25.1,4.479,4.478);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.Empty_Bone5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.3,-12.9,209.7,24.9);


(lib.megorim_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("בית עם חצר", "14px 'Gisha'");
	this.text.textAlign = "right";
	this.text.lineHeight = 18;
	this.text.lineWidth = 143;
	this.text.parent = this;
	this.text.setTransform(71.4,-10.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlohCILRAAIAACFIrRAAg");
	this.shape.setTransform(35.7,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AloBCIAAiDILRAAIAACDg");
	this.shape_1.setTransform(35.7,0);

	this.instance = new lib.Empty_Bone17();
	this.instance.parent = this;
	this.instance.setTransform(147.4,28,4.366,4.627);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.3,-12.6,146.7,25.3);


(lib.megorim_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("דירה עם מרפסת", "14px 'Gisha'");
	this.text.textAlign = "right";
	this.text.lineHeight = 18;
	this.text.lineWidth = 143;
	this.text.parent = this;
	this.text.setTransform(71.4,-10.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AnVg4IOrAAIAABxIurAAg");
	this.shape.setTransform(25.4,-1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnVA5IAAhxIOqAAIAABxg");
	this.shape_1.setTransform(25.4,-1.4);

	this.instance = new lib.Empty_Bone17();
	this.instance.parent = this;
	this.instance.setTransform(147.2,26.1,4.366,4.627);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.3,-12.6,146.7,25.3);


(lib.megorim_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("דירה גדולה", "14px 'Gisha'");
	this.text.textAlign = "right";
	this.text.lineHeight = 18;
	this.text.lineWidth = 143;
	this.text.parent = this;
	this.text.setTransform(71.4,-10.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ak6hBIJ1AAIAACDIp1AAg");
	this.shape.setTransform(40.6,-2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ak6BCIAAiDIJ1AAIAACDg");
	this.shape_1.setTransform(40.6,-2.7);

	this.instance = new lib.Empty_Bone17();
	this.instance.parent = this;
	this.instance.setTransform(147.1,26.8,4.366,4.627);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.3,-12.6,146.7,25.3);


(lib.megorim_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("דירה קטנה", "14px 'Gisha'");
	this.text.textAlign = "right";
	this.text.lineHeight = 18;
	this.text.lineWidth = 143;
	this.text.parent = this;
	this.text.setTransform(71.4,-10.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlHg2IKPAAIAABtIqPAAg");
	this.shape.setTransform(39.4,-2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlHA3IAAhtIKPAAIAABtg");
	this.shape_1.setTransform(39.4,-2.3);

	this.OverBone1 = new lib.Empty_Bone17();
	this.OverBone1.parent = this;
	this.OverBone1.setTransform(147.2,28,4.366,4.627);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.OverBone1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.3,-12.6,146.7,25.3);


(lib.family2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("ללא ילדים", "14px 'Gisha'");
	this.text.textAlign = "right";
	this.text.lineHeight = 18;
	this.text.lineWidth = 143;
	this.text.parent = this;
	this.text.setTransform(71.4,-10.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ak/hEIJ/AAIAACJIp/AAg");
	this.shape.setTransform(37.6,-2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ak/BFIAAiJIJ/AAIAACJg");
	this.shape_1.setTransform(37.6,-2);

	this.Empty_Bone5 = new lib.Empty_Bone17();
	this.Empty_Bone5.parent = this;
	this.Empty_Bone5.setTransform(148.5,23.5,4.479,4.478);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.Empty_Bone5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.3,-12.6,146.7,25.3);


(lib.family1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("עם ילדים", "14px 'Gisha'");
	this.text.textAlign = "right";
	this.text.lineHeight = 18;
	this.text.lineWidth = 143;
	this.text.parent = this;
	this.text.setTransform(71.4,-10.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AkngzIJPAAIAABnIpPAAg");
	this.shape.setTransform(44.6,-2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AknA0IAAhnIJPAAIAABng");
	this.shape_1.setTransform(44.6,-2.1);

	this.Empty_Bone4 = new lib.Empty_Bone17();
	this.Empty_Bone4.parent = this;
	this.Empty_Bone4.setTransform(148.4,23.8,4.479,4.478);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.Empty_Bone4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.3,-12.6,148.5,25.3);


(lib.clean2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("לא חובה שהבית יהיה מבריק", "14px 'Gisha'");
	this.text.textAlign = "right";
	this.text.lineHeight = 18;
	this.text.lineWidth = 205;
	this.text.parent = this;
	this.text.setTransform(102.4,-20.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AwSDlIAAjRIAAj4MAglAAAAQTAUIAADR");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AwSB8IAAj3MAglAAAIAAD3g");
	this.shape_1.setTransform(0,-10.4);

	this.Empty_Bone5 = new lib.Empty_Bone17();
	this.Empty_Bone5.parent = this;
	this.Empty_Bone5.setTransform(179.4,16.1,4.479,4.478);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AQTBVIAACQMgglAAAIAAiQIAAipIAAiQMAglAAAIAACQ");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AwSBVIAAipMAglAAAIAACpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.text},{t:this.Empty_Bone5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.3,-23.9,210.7,47.8);


(lib.clean1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("חובה שהבית יהיה מתוקתק", "14px 'Gisha'");
	this.text.textAlign = "right";
	this.text.lineHeight = 18;
	this.text.lineWidth = 205;
	this.text.parent = this;
	this.text.setTransform(102.4,-20.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AvrhJIfXAAIAACTI/XAAg");
	this.shape.setTransform(4,-10.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AvrBKIAAiTIfXAAIAACTg");
	this.shape_1.setTransform(4,-10.3);

	this.Empty_Bone5 = new lib.Empty_Bone17();
	this.Empty_Bone5.parent = this;
	this.Empty_Bone5.setTransform(179.3,15.7,4.479,4.478);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.Empty_Bone5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.3,-22.9,209.7,21);


(lib.clean_choise = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("נקה בחירה", "bold 14px 'Gisha'");
	this.text.textAlign = "right";
	this.text.lineHeight = 18;
	this.text.lineWidth = 71;
	this.text.parent = this;
	this.text.setTransform(37,-9);

	this.clean_choise = new lib.Fill_ChoiseButton();
	this.clean_choise.parent = this;
	new cjs.ButtonHelper(this.clean_choise, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.clean_choise},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.2,-21.4,94.5,42.9);


(lib.category1_megorim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.megorim();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmGhJIMNAAIAACTIsNAAg");
	this.shape.setTransform(33.1,-2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmGBKIAAiTIMNAAIAACTg");
	this.shape_1.setTransform(33.1,-2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.3,-12.6,146.7,25.3);


// stage content:
(lib.klavlavy14101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var buttonClicked = 0;
		this.clean_choise.alpha = 0;
		
		//פונקציה Fade לכולם 
		
		function fadeAll() {
		
			this.american_boldug.alpha = 0.1;
			this.amstaf.alpha = 0.1;
			this.koli.alpha = 0.1;
			this.bust.alpha = 0.1;
			this.bishon.alpha = 0.1;
			this.bobyea.alpha = 0.1;
			this.boxer.alpha = 0.1;
			this.chiwawa.alpha = 0.1;
			this.chinese.alpha = 0.1;
			this.sharpey.alpha = 0.1;
			this.coker.alpha = 0.1;
			this.british_boldug.alpha = 0.1;
			this.german.alpha = 0.1;
			this.golden.alpha = 0.1;
			this.labrador.alpha = 0.1;
			this.papylon.alpha = 0.1;
			this.pincher.alpha = 0.1;
			this.pag.alpha = 0.1;
			this.rotwiler.alpha = 0.1;
			this.samyoad.alpha = 0.1;
			this.shalty.alpha = 0.1;
			this.shikuku.alpha = 0.1;
			this.hasky.alpha = 0.1;
			this.teryer.alpha = 0.1;
			this.shitzu.alpha = 0.1;
		
			this.category1_megorim.alpha = 0.1;
			this.megorim1.alpha = 0.1;
			this.megorim2.alpha = 0.1;
			this.megorim3.alpha = 0.1;
			this.megorim4.alpha = 0.1;
			this.category2_family.alpha = 0.1;
			this.family1.alpha = 0.1;
			this.family2.alpha = 0.1;
			this.category3_clean.alpha = 0.1;
			this.clean1.alpha = 0.1;
			this.clean2.alpha = 0.1;
			this.category4_time.alpha = 0.1;
			this.time1.alpha = 0.1;
			this.time2.alpha = 0.1;
			this.time3.alpha = 0.1;
			this.category5_ofi.alpha = 0.1;
			this.ofi1.alpha = 0.1;
			this.ofi2.alpha = 0.1;
			this.ofi3.alpha = 0.1;
			this.ofi4.alpha = 0.1;
			this.ofi5.alpha = 0.1;
			this.category6_size.alpha = 0.1;
			this.size1.alpha = 0.1;
			this.size2.alpha = 0.1;
			this.size3.alpha = 0.1;
		}
		
		
		
		//פונקציה SHOW לכולם 
		
		function showAll() {
		
			this.american_boldug.alpha = 1;
			this.amstaf.alpha = 1;
			this.koli.alpha = 1;
			this.bust.alpha = 1;
			this.bishon.alpha = 1;
			this.bobyea.alpha = 1;
			this.boxer.alpha = 1;
			this.chiwawa.alpha = 1;
			this.chinese.alpha = 1;
			this.sharpey.alpha = 1;
			this.coker.alpha = 1;
			this.british_boldug.alpha = 1;
			this.german.alpha = 1;
			this.golden.alpha = 1;
			this.labrador.alpha = 1;
			this.papylon.alpha = 1;
			this.pincher.alpha = 1;
			this.pag.alpha = 1;
			this.rotwiler.alpha = 1;
			this.samyoad.alpha = 1;
			this.shalty.alpha = 1;
			this.shikuku.alpha = 1;
			this.hasky.alpha = 1;
			this.teryer.alpha = 1;
			this.shitzu.alpha = 1;
		
			this.category1_megorim.alpha = 1;
			this.megorim1.alpha = 1;
			this.megorim2.alpha = 1;
			this.megorim3.alpha = 1;
			this.megorim4.alpha = 1;
			this.category2_family.alpha = 1;
			this.family1.alpha = 1;
			this.family2.alpha = 1;
			this.category3_clean.alpha = 1;
			this.clean1.alpha = 1;
			this.clean2.alpha = 1;
			this.category4_time.alpha = 1;
			this.time1.alpha = 1;
			this.time2.alpha = 1;
			this.time3.alpha = 1;
			this.category5_ofi.alpha = 1;
			this.ofi1.alpha = 1;
			this.ofi2.alpha = 1;
			this.ofi3.alpha = 1;
			this.ofi4.alpha = 1;
			this.ofi5.alpha = 1;
			this.category6_size.alpha = 1;
			this.size1.alpha = 1;
			this.size2.alpha = 1;
			this.size3.alpha = 1;
		
		}
		
		
		//הסתר עצמות מלאות
		
		
		this.bone_1.alpha = 0;
		this.bone_2.alpha = 0;
		this.bone_3.alpha = 0;
		this.bone_4.alpha = 0;
		this.bone_5.alpha = 0;
		this.bone_6.alpha = 0;
		this.bone_7.alpha = 0;
		this.bone_8.alpha = 0;
		this.bone_9.alpha = 0;
		this.bone_10.alpha = 0;
		this.bone_11.alpha = 0;
		this.bone_12.alpha = 0;
		this.bone_13.alpha = 0;
		this.bone_14.alpha = 0;
		this.bone_15.alpha = 0;
		this.bone_16.alpha = 0;
		this.bone_17.alpha = 0;
		this.bone_18.alpha = 0;
		this.bone_19.alpha = 0;
		
		
		//פונקציית הסתרה של כל העצמות המלאות
		function hideBones() {
			this.bone_1.alpha = 0;
			this.bone_2.alpha = 0;
			this.bone_3.alpha = 0;
			this.bone_4.alpha = 0;
			this.bone_5.alpha = 0;
			this.bone_6.alpha = 0;
			this.bone_7.alpha = 0;
			this.bone_8.alpha = 0;
			this.bone_9.alpha = 0;
			this.bone_10.alpha = 0;
			this.bone_11.alpha = 0;
			this.bone_12.alpha = 0;
			this.bone_13.alpha = 0;
			this.bone_14.alpha = 0;
			this.bone_15.alpha = 0;
			this.bone_16.alpha = 0;
			this.bone_17.alpha = 0;
			this.bone_18.alpha = 0;
			this.bone_19.alpha = 0;
		}
		
		
		
		
		
		//הסתר עצמות ריקות 
		this.Empty_Bone1.alpha = 0;
		this.Empty_Bone2.alpha = 0;
		this.Empty_Bone3.alpha = 0;
		this.Empty_Bone4.alpha = 0;
		this.Empty_Bone5.alpha = 0;
		this.Empty_Bone6.alpha = 0;
		this.Empty_Bone7.alpha = 0;
		this.Empty_Bone8.alpha = 0;
		this.Empty_Bone9.alpha = 0;
		this.Empty_Bone10.alpha = 0;
		this.Empty_Bone11.alpha = 0;
		this.Empty_Bone12.alpha = 0;
		this.Empty_Bone13.alpha = 0;
		this.Empty_Bone14.alpha = 0;
		this.Empty_Bone15.alpha = 0;
		this.Empty_Bone16.alpha = 0;
		this.Empty_Bone17.alpha = 0;
		this.Empty_Bone18.alpha = 0;
		this.Empty_Bone19.alpha = 0;
		
		
		function HideAllEmptyBones() {
			this.Empty_Bone1.alpha = 0;
			this.Empty_Bone2.alpha = 0;
			this.Empty_Bone3.alpha = 0;
			this.Empty_Bone4.alpha = 0;
			this.Empty_Bone5.alpha = 0;
			this.Empty_Bone6.alpha = 0;
			this.Empty_Bone7.alpha = 0;
			this.Empty_Bone8.alpha = 0;
			this.Empty_Bone9.alpha = 0;
			this.Empty_Bone10.alpha = 0;
			this.Empty_Bone11.alpha = 0;
			this.Empty_Bone12.alpha = 0;
			this.Empty_Bone13.alpha = 0;
			this.Empty_Bone14.alpha = 0;
			this.Empty_Bone15.alpha = 0;
			this.Empty_Bone16.alpha = 0;
			this.Empty_Bone17.alpha = 0;
			this.Empty_Bone18.alpha = 0;
			this.Empty_Bone19.alpha = 0;
		}
		//אלמנטים לא לחיצים
		function disableAll() {
			this.category1_megorim.mouseEnabled = false;
			this.megorim1.mouseEnabled = false;
			this.megorim2.mouseEnabled = false;
			this.megorim3.mouseEnabled = false;
			this.megorim4.mouseEnabled = false;
			this.category2_family.mouseEnabled = false;
			this.family1.mouseEnabled = false;
			this.family2.mouseEnabled = false;
			this.category3_clean.mouseEnabled = false;
			this.clean1.mouseEnabled = false;
			this.clean2.mouseEnabled = false;
			this.category4_time.mouseEnabled = false;
			this.time1.mouseEnabled = false;
			this.time2.mouseEnabled = false;
			this.time3.mouseEnabled = false;
			this.category5_ofi.mouseEnabled = false;
			this.ofi1.mouseEnabled = false;
			this.ofi2.mouseEnabled = false;
			this.ofi3.mouseEnabled = false;
			this.ofi4.mouseEnabled = false;
			this.ofi5.mouseEnabled = false;
			this.category6_size.mouseEnabled = false;
			this.size1.mouseEnabled = false;
			this.size2.mouseEnabled = false;
			this.size3.mouseEnabled = false;
		}
		
		
		//אלמנטים  לחיצים
		
		function enableAll() {
			this.category1_megorim.mouseEnabled = true;
			this.megorim1.mouseEnabled = true;
			this.megorim2.mouseEnabled = true;
			this.megorim3.mouseEnabled = true;
			this.megorim4.mouseEnabled = true;
			this.category2_family.mouseEnabled = true;
			this.family1.mouseEnabled = true;
			this.family2.mouseEnabled = true;
			this.category3_clean.mouseEnabled = true;
			this.clean1.mouseEnabled = true;
			this.clean2.mouseEnabled = true;
			this.category4_time.mouseEnabled = true;
			this.time1.mouseEnabled = true;
			this.time2.mouseEnabled = true;
			this.time3.mouseEnabled = true;
			this.category5_ofi.mouseEnabled = true;
			this.ofi1.mouseEnabled = true;
			this.ofi2.mouseEnabled = true;
			this.ofi3.mouseEnabled = true;
			this.ofi4.mouseEnabled = true;
			this.ofi5.mouseEnabled = true;
			this.category6_size.mouseEnabled = true;
			this.size1.mouseEnabled = true;
			this.size2.mouseEnabled = true;
			this.size3.mouseEnabled = true;
		}
		
		
		
		
		//הסתר פופ אפ כלבים
		this.PopUpWindow.alpha = 0;
		this.ExitButton.alpha = 0;
		
		//הסתר פופ אפ אמסטף 
		this.HeaderAmstaff.alpha = 0;
		this.AudioAmstaff.alpha = 0;
		this.TextAmstaff.alpha = 0;
		this.Amstaff1.alpha = 0;
		this.Amstaff2.alpha = 0;
		this.Amstaff3.alpha = 0;
		
		//הסתר פופ אפ בוקסר
		this.HeaderBoxer.alpha = 0;
		this.TextBoxer.alpha = 0;
		this.AudioBoxer.alpha = 0;
		this.Boxer2.alpha = 0;
		this.Boxer1.alpha = 0;
		this.Boxer3.alpha = 0;
		
		//הסתר פופ אפ בישון
		
		this.HeaderBishon.alpha = 0;
		this.TextBishon.alpha = 0;
		this.AudioBishon.alpha = 0;
		this.Bishon2.alpha = 0;
		this.Bishon1.alpha = 0;
		this.Bishon3.alpha = 0;
		
		//הסתר פופ אפ ציוואוואה
		
		this.HeaderChiwawa.alpha = 0;
		this.TextChiwawa.alpha = 0;
		this.AudioChiwawa.alpha = 0;
		this.Chiwawa2.alpha = 0;
		this.Chiwawa1.alpha = 0;
		this.Chiwawa3.alpha = 0;
		
		//הסתר פופ אפ שרפיי
		this.HeaderSharpey.alpha = 0;
		this.TextSharpey.alpha = 0;
		this.AudioSharpey.alpha = 0;
		this.Sharpey2.alpha = 0;
		this.Sharpey1.alpha = 0;
		this.Sharpey3.alpha = 0;
		
		
		
		function HideAllPopups() {
			this.PopUpWindow.alpha = 0;
			this.ExitButton.alpha = 0;
		
			this.HeaderAmstaff.alpha = 0;
			this.AudioAmstaff.alpha = 0;
			this.TextAmstaff.alpha = 0;
			this.Amstaff1.alpha = 0;
			this.Amstaff2.alpha = 0;
			this.Amstaff3.alpha = 0;
		
		
			this.HeaderBoxer.alpha = 0;
			this.TextBoxer.alpha = 0;
			this.AudioBoxer.alpha = 0;
			this.Boxer2.alpha = 0;
			this.Boxer1.alpha = 0;
			this.Boxer3.alpha = 0;
		
		
			this.HeaderBishon.alpha = 0;
			this.TextBishon.alpha = 0;
			this.AudioBishon.alpha = 0;
			this.Bishon2.alpha = 0;
			this.Bishon1.alpha = 0;
			this.Bishon3.alpha = 0;
		
		
			this.HeaderChiwawa.alpha = 0;
			this.TextChiwawa.alpha = 0;
			this.AudioChiwawa.alpha = 0;
			this.Chiwawa2.alpha = 0;
			this.Chiwawa1.alpha = 0;
			this.Chiwawa3.alpha = 0;
		
			this.HeaderSharpey.alpha = 0;
			this.TextSharpey.alpha = 0;
			this.AudioSharpey.alpha = 0;
			this.Sharpey2.alpha = 0;
			this.Sharpey1.alpha = 0;
			this.Sharpey3.alpha = 0;
		}
		
		//מעבר עכבר
		//אינטראקציות לקטגוריות
		//אינטראקציה לקטגוריות - סגנון המגורים
		
		//אינטראקציה לדירה קטנה
		this.megorim1.addEventListener("mouseover", fadeMouseOverSmallApartmant.bind(this));
		
		
		function fadeMouseOverSmallApartmant() {
			if (buttonClicked == 0 || buttonClicked==3) {
				fadeAll.bind(this)();
				this.megorim1.alpha = 1;
				this.category1_megorim.alpha = 1;
				this.bust.alpha = 1;
				this.bishon.alpha = 1;
				this.chiwawa.alpha = 1;
				this.chinese.alpha = 1;
				this.coker.alpha = 1;
				this.british_boldug.alpha = 1;
				this.papylon.alpha = 1;
				this.pincher.alpha = 1;
				this.pag.alpha = 1;
				this.teryer.alpha = 1;
				this.shitzu.alpha = 1;
			}
		}
		
		
		
		this.megorim1.addEventListener("mouseout", fadeMouseOutSmallApartmant.bind(this));
		
		function fadeMouseOutSmallApartmant() {
			if (buttonClicked == 0 || buttonClicked==3) {
				showAll.bind(this)();
			}
		}
		
		
		//אינטראקציה לדירה גדולה
		
		this.megorim2.addEventListener("mouseover", fadeMouseOverBigApartmant.bind(this));
		
		
		function fadeMouseOverBigApartmant() {
			if (buttonClicked == 0 || buttonClicked==3) {
				fadeAll.bind(this)();
				this.category1_megorim.alpha = 1;
				this.megorim2.alpha = 1;
				this.american_boldug.alpha = 1;
				this.koli.alpha = 1;
				this.bust.alpha = 1;
				this.bishon.alpha = 1;
				this.boxer.alpha = 1;
				this.chiwawa.alpha = 1;
				this.chinese.alpha = 1;
				this.sharpey.alpha = 1;
				this.coker.alpha = 1;
				this.british_boldug.alpha = 1;
				this.golden.alpha = 1;
				this.labrador.alpha = 1;
				this.papylon.alpha = 1;
				this.pincher.alpha = 1;
				this.pag.alpha = 1;
				this.samyoad.alpha = 1;
				this.shikuku.alpha = 1;
				this.teryer.alpha = 1;
				this.shitzu.alpha = 1;
			}
		
		}
		
		this.megorim2.addEventListener("mouseout", fadeMouseOutBigApartmant.bind(this));
		
		function fadeMouseOutBigApartmant() {
			if (buttonClicked == 0 || buttonClicked==3) {
				showAll.bind(this)();
			}
		}
		
		
		
		
		//דירה עם מרפסת
		
		this.megorim3.addEventListener("mouseover", fadeMouseOverBalconyApartmant.bind(this));
		
		
		function fadeMouseOverBalconyApartmant() {
			if (buttonClicked == 0 || buttonClicked==3) {
				fadeAll.bind(this)();
				this.category1_megorim.alpha = 1;
				this.megorim3.alpha = 1;
				this.american_boldug.alpha = 1;
				this.amstaf.alpha = 1;
				this.koli.alpha = 1;
				this.bust.alpha = 1;
				this.bishon.alpha = 1;
				this.bobyea.alpha = 1;
				this.boxer.alpha = 1;
				this.chiwawa.alpha = 1;
				this.chinese.alpha = 1;
				this.sharpey.alpha = 1;
				this.coker.alpha = 1;
				this.british_boldug.alpha = 1;
				this.german.alpha = 1;
				this.golden.alpha = 1;
				this.labrador.alpha = 1;
				this.papylon.alpha = 1;
				this.pincher.alpha = 1;
				this.pag.alpha = 1;
				this.samyoad.alpha = 1;
				this.shalty.alpha = 1;
				this.shikuku.alpha = 1;
				this.hasky.alpha = 1;
				this.teryer.alpha = 1;
				this.shitzu.alpha = 1;
			}
		}
		
		
		this.megorim3.addEventListener("mouseout", fadeMouseOutBigApartmant.bind(this));
		
		function fadeMouseOutBigApartmant() {
			if (buttonClicked == 0 || buttonClicked==3) {
				showAll.bind(this)();
			}
		}
		
		//בית עם חצר
		
		this.megorim4.addEventListener("mouseover", fadeMouseOverGardenApartmant.bind(this));
		
		
		function fadeMouseOverGardenApartmant() {
		if (buttonClicked == 0 || buttonClicked==3) {
				fadeAll.bind(this)();
				this.category1_megorim.alpha = 1;
				this.megorim4.alpha = 1;
				this.american_boldug.alpha = 1;
				this.amstaf.alpha = 1;
				this.koli.alpha = 1;
				this.bust.alpha = 1;
				this.bishon.alpha = 1;
				this.bobyea.alpha = 1;
				this.boxer.alpha = 1;
				this.chiwawa.alpha = 1;
				this.chinese.alpha = 1;
				this.sharpey.alpha = 1;
				this.coker.alpha = 1;
				this.german.alpha = 1;
				this.golden.alpha = 1;
				this.labrador.alpha = 1;
				this.pincher.alpha = 1;
				this.rotwiler.alpha = 1;
				this.samyoad.alpha = 1;
				this.shalty.alpha = 1;
				this.shikuku.alpha = 1;
				this.hasky.alpha = 1;
				this.teryer.alpha = 1;
				this.shitzu.alpha = 1;
		
			}
		}
		
		
		
		
		this.megorim4.addEventListener("mouseout", fadeMouseOutGardenApartmant.bind(this));
		
		function fadeMouseOutGardenApartmant() {
			if (buttonClicked == 0 || buttonClicked==3) {
				showAll.bind(this)();
			}
		}
		
		
		
		
		//אינטראקציה לקטגוריית מצב משפחתי
		
		//עם ילדים
		this.family1.addEventListener("mouseover", fadeMouseOverYesKids.bind(this));
		
		function fadeMouseOverYesKids() {
			if (buttonClicked == 0 || buttonClicked==3) {
				fadeAll.bind(this)();
				this.category2_family.alpha = 1;
				this.family1.alpha = 1;
				this.american_boldug.alpha = 1;
				this.amstaf.alpha = 1;
				this.koli.alpha = 1;
				this.bust.alpha = 1;
				this.bishon.alpha = 1;
				this.bobyea.alpha = 1;
				this.boxer.alpha = 1;
				this.chinese.alpha = 1;
				this.coker.alpha = 1;
				this.british_boldug.alpha = 1;
				this.german.alpha = 1;
				this.golden.alpha = 1;
				this.labrador.alpha = 1;
				this.papylon.alpha = 1;
				this.pincher.alpha = 1;
				this.pag.alpha = 1;
				this.samyoad.alpha = 1;
				this.shalty.alpha = 1;
				this.hasky.alpha = 1;
				this.teryer.alpha = 1;
		
			}
		}
		
		
		this.family1.addEventListener("mouseout", fadeMouseOutYesKids.bind(this));
		
		function fadeMouseOutYesKids() {
			if (buttonClicked == 0 || buttonClicked==3) {
				showAll.bind(this)();
			}
		}
		
		
		//ללא ילדים
		this.family2.addEventListener("mouseover", fadeMouseOverNoKids.bind(this));
		
		function fadeMouseOverNoKids() {
			if (buttonClicked == 0 || buttonClicked==3) {
				fadeAll.bind(this)();
				this.category2_family.alpha = 1;
				this.family2.alpha = 1;
				this.chiwawa.alpha = 1;
				this.sharpey.alpha = 1;
				this.rotwiler.alpha = 1;
				this.shitzzu.alpha = 1;
			}
		}
		
		
		this.family2.addEventListener("mouseout", fadeMouseOutNoKids.bind(this));
		
		function fadeMouseOutNoKids() {
			if (buttonClicked == 0 || buttonClicked==3) {
				showAll.bind(this)();
			}
		}
		
		
		
		//אינטראקציה לקטגוריית ניקיון הבית
		
		//אני חייב שהבית יהיה מתוקתוק
		this.clean1.addEventListener("mouseover", fadeMouseOverYesClean.bind(this));
		
		function fadeMouseOverYesClean() {
			if (buttonClicked == 0 || buttonClicked==3) {
				fadeAll.bind(this)();
				this.category3_clean.alpha = 1;
				this.clean1.alpha = 1;
				this.amstaf.alpha = 1;
				this.bishon.alpha = 1;
				this.chiwawa.alpha = 1;
				this.chinese.alpha = 1;
				this.sharpey.alpha = 1;
				this.papylon.alpha = 1;
				this.teryer.alpha = 1;
				this.shitzu.alpha = 1;
			}
		}
		
		
		this.clean1.addEventListener("mouseout", fadeMouseOutYesClean.bind(this));
		
		function fadeMouseOutYesClean() {
			if (buttonClicked == 0 || buttonClicked==3) {
				showAll.bind(this)();
			}
		}
		
		
		//לא מפריע לי שמלוכלך
		this.clean2.addEventListener("mouseover", fadeMouseOverNoClean.bind(this));
		
		function fadeMouseOverNoClean() {
			if (buttonClicked == 0 || buttonClicked==3) {
				fadeAll.bind(this)();
				this.category3_clean.alpha = 1;
				this.clean2.alpha = 1;
				this.american_boldug.alpha = 1;
				this.amstaf.alpha = 1;
				this.koli.alpha = 1;
				this.bust.alpha = 1;
				this.boxer.alpha = 1;
				this.coker.alpha = 1;
				this.british_boldug.alpha = 1;
				this.german.alpha = 1;
				this.golden.alpha = 1;
				this.labrador.alpha = 1;
				this.pincher.alpha = 1;
				this.pag.alpha = 1;
				this.rotwiler.alpha = 1;
				this.samyoad.alpha = 1;
				this.shalty.alpha = 1;
				this.shikuku.alpha = 1;
				this.hasky.alpha = 1;
		
			}
		}
		
		
		this.clean2.addEventListener("mouseout", fadeMouseOutNoClean.bind(this));
		
		function fadeMouseOutNoClean() {
			if (buttonClicked == 0 || buttonClicked==3) {
				showAll.bind(this)();
			}
		}
		
		//אינטראקציה לקטגוריית הענק תזמן לכלב
		
		//פעם ביום
		this.time1.addEventListener("mouseover", fadeMouseOverTime1.bind(this));
		
		function fadeMouseOverTime1() {
			if (buttonClicked == 0 || buttonClicked==3) {
				fadeAll.bind(this)();
				this.category4_time.alpha = 1;
				this.time1.alpha = 1;
				this.sharpey.alpha = 1;
		
			}
		}
		
		this.time1.addEventListener("mouseout", fadeMouseOutTime1.bind(this));
		
		function fadeMouseOutTime1() {
			if (buttonClicked == 0 || buttonClicked==3) {
				showAll.bind(this)();
			}
		}
		
		
		//פעמיים ביום
		this.time2.addEventListener("mouseover", fadeMouseOverTime2.bind(this));
		
		function fadeMouseOverTime2() {
			if (buttonClicked == 0 || buttonClicked==3) {
				fadeAll.bind(this)();
				this.category4_time.alpha = 1;
				this.time2.alpha = 1;
				this.american_boldug.alpha = 1;
				this.amstaf.alpha = 1;
				this.samyoad.alpha = 1;
				this.shikuku.alpha = 1;
				this.shitzu.alpha = 1;
		
		
			}
		}
		
		
		this.time2.addEventListener("mouseout", fadeMouseOutTime2.bind(this));
		
		function fadeMouseOutTime2() {
			if (buttonClicked == 0 || buttonClicked==3) {
				showAll.bind(this)();
			}
		}
		
		
		//שלוש פעמים ביום 
		this.time3.addEventListener("mouseover", fadeMouseOverTime3.bind(this));
		
		function fadeMouseOverTime3() {
			if (buttonClicked == 0 || buttonClicked==3) {
				fadeAll.bind(this)();
				this.category4_time.alpha = 1;
				this.time3.alpha = 1;
				this.koli.alpha = 1;
				this.bishon.alpha = 1;
				this.bobyea.alpha = 1;
				this.boxer.alpha = 1;
				this.chiwawa.alpha = 1;
				this.chinese.alpha = 1;
				this.coker.alpha = 1;
				this.golden.alpha = 1;
				this.papylon.alpha = 1;
				this.pag.alpha = 1;
				this.rotwiler.alpha = 1;
				this.samyoad.alpha = 1;
				this.hasky.alpha = 1;
				this.teryer.alpha = 1;
		
		
			}
		}
		
		
		this.time3.addEventListener("mouseout", fadeMouseOutTime3.bind(this));
		
		function fadeMouseOutTime3() {
			if (buttonClicked == 0 || buttonClicked==3) {
				showAll.bind(this)();
			}
		}
		
		
		//אינטראקציה לקטגוריית אופי הכלב
		
		//רגוע
		this.ofi1.addEventListener("mouseover", fadeMouseOverOfi1.bind(this));
		
		function fadeMouseOverOfi1() {
		if (buttonClicked == 0 || buttonClicked==3) {
				fadeAll.bind(this)();
				this.category5_ofi.alpha = 1;
				this.ofi1.alpha = 1;
				this.bust.alpha = 1;
				this.chinese.alpha = 1;
				this.sharpey.alpha = 1;
				this.pag.alpha = 1;
				this.hasky.alpha = 1;
				this.shitzu.alpha = 1;
		
		
			}
		}
		
		this.ofi1.addEventListener("mouseout", fadeMouseOutOfi1.bind(this));
		
		function fadeMouseOutOfi1() {
			if (buttonClicked == 0 || buttonClicked==3) {
				showAll.bind(this)();
			}
		}
		
		
		//אנרגטי
		this.ofi2.addEventListener("mouseover", fadeMouseOverOfi2.bind(this));
		
		function fadeMouseOverOfi2() {
			if (buttonClicked == 0 || buttonClicked==3) {
				fadeAll.bind(this)();
				this.category5_ofi.alpha = 1;
				this.ofi2.alpha = 1;
				this.american_boldug.alpha = 1;
				this.amstaf.alpha = 1;
				this.koli.alpha = 1;
				this.bishon.alpha = 1;
				this.bobyea.alpha = 1;
				this.boxer.alpha = 1;
				this.chiwawa.alpha = 1;
				this.chinese.alpha = 1;
				this.german.alpha = 1;
				this.german.alpha = 1;
				this.golden.alpha = 1;
				this.labrador.alpha = 1;
				this.papylon.alpha = 1;
				this.pincher.alpha = 1;
				this.rotwiler.alpha = 1;
				this.samyoad.alpha = 1;
				this.shalty.alpha = 1;
				this.hasky.alpha = 1;
				this.shitzu.alpha = 1;
		
		
			}
		}
		
		this.ofi2.addEventListener("mouseout", fadeMouseOutOfi2.bind(this));
		
		function fadeMouseOutOfi2() {
			if (buttonClicked == 0 || buttonClicked==3) {
				showAll.bind(this)();
			}
		}
		
		
		//קל לאילוף
		
		this.ofi3.addEventListener("mouseover", fadeMouseOverOfi3.bind(this));
		
		function fadeMouseOverOfi3() {
			if (buttonClicked == 0 || buttonClicked==3) {
				fadeAll.bind(this)();
				this.category5_ofi.alpha = 1;
				this.ofi3.alpha = 1;
				this.american_boldug.alpha = 1;
				this.amstaf.alpha = 1;
				this.bishon.alpha = 1;
				this.bobyea.alpha = 1;
				this.boxer.alpha = 1;
				this.chiwawa.alpha = 1;
				this.chinese.alpha = 1;
				this.sharpey.alpha = 1;
				this.sharpey.alpha = 1;
				this.british_boldug.alpha = 1;
				this.german.alpha = 1;
				this.golden.alpha = 1;
				this.labrador.alpha = 1;
				this.papylon.alpha = 1;
				this.pincher.alpha = 1;
				this.pag.alpha = 1;
				this.rotwiler.alpha = 1;
				this.samyoad.alpha = 1;
				this.shalty.alpha = 1;
				this.shikuku.alpha = 1;
				this.shitzu.alpha = 1;
				this.shitzu.alpha = 1;
		
		
			}
		}
		
		this.ofi3.addEventListener("mouseout", fadeMouseOutOfi3.bind(this));
		
		function fadeMouseOutOfi3() {
			if (buttonClicked == 0 || buttonClicked==3) {
				showAll.bind(this)();
			}
		}
		
		
		//רועש
		this.ofi4.addEventListener("mouseover", fadeMouseOverOfi4.bind(this));
		
		function fadeMouseOverOfi4() {
			if (buttonClicked == 0 || buttonClicked==3) {
				fadeAll.bind(this)();
				this.category5_ofi.alpha = 1;
				this.ofi4.alpha = 1;
				this.amstaf.alpha = 1;
				this.koli.alpha = 1;
				this.bust.alpha = 1;
				this.bobyea.alpha = 1;
				this.chiwawa.alpha = 1;
				this.british_boldug.alpha = 1;
				this.german.alpha = 1;
				this.labrador.alpha = 1;
				this.papylon.alpha = 1;
				this.pincher.alpha = 1;
				this.samyoad.alpha = 1;
				this.shalty.alpha = 1;
		
		
			}
		}
		
		this.ofi4.addEventListener("mouseout", fadeMouseOutOfi4.bind(this));
		
		function fadeMouseOutOfi4() {
			if (buttonClicked == 0 || buttonClicked==3) {
				showAll.bind(this)();
			}
		}
		
		
		//כלב שמירה
		this.ofi5.addEventListener("mouseover", fadeMouseOverOfi5.bind(this));
		
		function fadeMouseOverOfi5() {
			if (buttonClicked == 0 || buttonClicked==3) {
				fadeAll.bind(this)();
				this.category5_ofi.alpha = 1;
				this.ofi5.alpha = 1;
				this.american_boldug.alpha = 1;
				this.amstaf.alpha = 1;
				this.bobyea.alpha = 1;
				this.boxer.alpha = 1;
				this.sharpey.alpha = 1;
				this.british_boldug.alpha = 1;
				this.german.alpha = 1;
				this.rotwiler.alpha = 1;
				this.shalty.alpha = 1;
				this.shikuku.alpha = 1;
		
			}
		}
		
		this.ofi5.addEventListener("mouseout", fadeMouseOutOfi5.bind(this));
		
		function fadeMouseOutOfi5() {
			if (buttonClicked == 0 || buttonClicked==3) {
				showAll.bind(this)();
			}
		}
		
		
		//אינטראקציות קטגוריית גודל הכלב
		//קטן
		this.size1.addEventListener("mouseover", fadeMouseOverSize1.bind(this));
		
		function fadeMouseOverSize1() {
			if (buttonClicked == 0 || buttonClicked==3) {
				fadeAll.bind(this)();
				this.category6_size.alpha = 1;
				this.size1.alpha = 1;
				this.bishon.alpha = 1;
				this.chiwawa.alpha = 1;
				this.chinese.alpha = 1;
				this.pag.alpha = 1;
				this.pincher.alpha = 1;
				this.papylon.alpha = 1;
				this.shalty.alpha = 1;
				this.shitzu.alpha = 1;
			}
		}
		
		this.size1.addEventListener("mouseout", fadeMouseOutSize1.bind(this));
		
		function fadeMouseOutSize1() {
			if (buttonClicked == 0 || buttonClicked==3) {
				showAll.bind(this)();
			}
		}
		
		//בינוני
		this.size2.addEventListener("mouseover", fadeMouseOverSize2.bind(this));
		
		function fadeMouseOverSize2() {
			if (buttonClicked == 0 || buttonClicked==3) {
				fadeAll.bind(this)();
				this.category6_size.alpha = 1;
				this.size2.alpha = 1;
				this.american_boldug.alpha = 1;
				this.amstaf.alpha = 1;
				this.koli.alpha = 1;
				this.bust.alpha = 1;
				this.boxer.alpha = 1;
				this.sharpey.alpha = 1;
				this.coker.alpha = 1;
				this.british_boldug.alpha = 1;
				this.german.alpha = 1;
				this.golden.alpha = 1;
				this.labrador.alpha = 1;
				this.rotwiler.alpha = 1;
				this.samyoad.alpha = 1;
				this.shikuku.alpha = 1;
				this.hasky.alpha = 1;
				this.teryer.alpha = 1;
		
			}
		}
		
		this.size2.addEventListener("mouseout", fadeMouseOutSize2.bind(this));
		
		function fadeMouseOutSize2() {
			if (buttonClicked == 0 || buttonClicked==3) {
				showAll.bind(this)();
			}
		}
		
		//גדול
		this.size3.addEventListener("mouseover", fadeMouseOverSize3.bind(this));
		
		function fadeMouseOverSize3() {
			if (buttonClicked == 0 || buttonClicked==3) {
				fadeAll.bind(this)();
				this.category6_size.alpha = 1;
				this.size3.alpha = 1;
				this.american_boldug.alpha = 1;
				this.bobyea.alpha = 1;
				this.boxer.alpha = 1;
				this.german.alpha = 1;
				this.golden.alpha = 1;
				this.rotwiler.alpha = 1;
			}
		}
		
		this.size3.addEventListener("mouseout", fadeMouseOutSize3.bind(this));
		
		function fadeMouseOutSize3() {
			if (buttonClicked == 0 || buttonClicked==3) {
				showAll.bind(this)();
			}
		}
		
		
		//אינטראקציות לכלבים
		//בולדוג אמריקאי
		
		this.american_boldug.addEventListener("mouseover", fadeMouseOverAmerican_boldug.bind(this));
		
		function fadeMouseOverAmerican_boldug() {
			if (buttonClicked == 0 || buttonClicked==3) {
				fadeAll.bind(this)();
				this.category1_megorim.alpha = 1;
				this.category4_time.alpha = 1;
				this.category3_clean.alpha = 1;
				this.category2_family.alpha = 1;
				this.category5_ofi.alpha = 1;
				this.category6_size.alpha = 1;
		
				this.megorim2.alpha = 1;
				this.megorim3.alpha = 1;
				this.megorim4.alpha = 1;
				this.time2.alpha = 1;
				this.clean2.alpha = 1;
				this.family1.alpha = 1;
				this.ofi2.alpha = 1;
				this.ofi3.alpha = 1;
				this.ofi5.alpha = 1;
				this.size2.alpha = 1;
				this.size3.alpha = 1;
		
				this.american_boldug.alpha = 1;
		
				this.Empty_Bone2.alpha = 1;
				this.Empty_Bone3.alpha = 1;
				this.Empty_Bone4.alpha = 1;
				this.Empty_Bone5.alpha = 1;
				this.Empty_Bone6.alpha = 1;
				this.Empty_Bone7.alpha = 1;
				this.Empty_Bone8.alpha = 1;
				this.Empty_Bone9.alpha = 1;
				this.Empty_Bone10.alpha = 1;
				this.Empty_Bone11.alpha = 1;
				this.Empty_Bone12.alpha = 1;
				this.Empty_Bone13.alpha = 1;
				this.Empty_Bone14.alpha = 1;
				this.Empty_Bone15.alpha = 1;
				this.Empty_Bone16.alpha = 1;
				this.Empty_Bone17.alpha = 1;
				this.Empty_Bone18.alpha = 1;
				this.Empty_Bone19.alpha = 1;
		
			}
		}
		
		this.american_boldug.addEventListener("mouseout", fadeMouseOutAmerican_boldug.bind(this));
		
		function fadeMouseOutAmerican_boldug() {
			if (buttonClicked == 0 || buttonClicked==3) {
				showAll.bind(this)();
				HideAllEmptyBones.bind(this)();
			}
		}
		
		
		//אמסטף
		
		this.amstaf.addEventListener("mouseover", fadeMouseOverAmstaf.bind(this));
		
		function fadeMouseOverAmstaf() {
			if (buttonClicked == 0 || buttonClicked==3) {
				fadeAll.bind(this)();
				this.category1_megorim.alpha = 1;
				this.category4_time.alpha = 1;
				this.category3_clean.alpha = 1;
				this.category2_family.alpha = 1;
				this.category5_ofi.alpha = 1;
				this.category6_size.alpha = 1;
		
				this.megorim3.alpha = 1;
				this.megorim4.alpha = 1;
				this.time2.alpha = 1;
				this.clean1.alpha = 1;
				this.family1.alpha = 1;
				this.ofi2.alpha = 1;
				this.ofi3.alpha = 1;
				this.ofi4.alpha = 1;
				this.ofi5.alpha = 1;
				this.size2.alpha = 1;
		
		
				this.amstaf.alpha = 1;
		
				this.Empty_Bone3.alpha = 1;
				this.Empty_Bone4.alpha = 1;
				this.Empty_Bone5.alpha = 1;
				this.Empty_Bone7.alpha = 1;
				this.Empty_Bone13.alpha = 1;
				this.Empty_Bone14.alpha = 1;
				this.Empty_Bone15.alpha = 1;
				this.Empty_Bone16.alpha = 1;
				this.Empty_Bone18.alpha = 1;
		
		
		
		
			}
		}
		
		this.amstaf.addEventListener("mouseout", fadeMouseOutAmstaf.bind(this));
		
		function fadeMouseOutAmstaf() {
			if (buttonClicked == 0 || buttonClicked==3) {
				showAll.bind(this)();
				HideAllEmptyBones.bind(this)();
		
			}
		}
		
		
		//קולי מזוקן
		
		this.koli.addEventListener("mouseover", fadeMouseOverKoli.bind(this));
		
		function fadeMouseOverKoli() {
			if (buttonClicked == 0 || buttonClicked==3) {
				fadeAll.bind(this)();
				this.category1_megorim.alpha = 1;
				this.category4_time.alpha = 1;
				this.category3_clean.alpha = 1;
				this.category2_family.alpha = 1;
				this.category5_ofi.alpha = 1;
				this.category6_size.alpha = 1;
		
				this.megorim2.alpha = 1;
				this.megorim3.alpha = 1;
				this.megorim4.alpha = 1;
				this.time3.alpha = 1;
				this.clean2.alpha = 1;
				this.family1.alpha = 1;
				this.ofi2.alpha = 1;
				this.ofi4.alpha = 1;
				this.size2.alpha = 1;
		
				this.koli.alpha = 1;
				this.Empty_Bone2.alpha = 1;
				this.Empty_Bone3.alpha = 1;
				this.Empty_Bone4.alpha = 1;
				this.Empty_Bone5.alpha = 1;
				this.Empty_Bone8.alpha = 1;
		
				this.Empty_Bone11.alpha = 1;
				this.Empty_Bone13.alpha = 1;
				this.Empty_Bone15.alpha = 1;
				this.Empty_Bone18.alpha = 1;
		
		
			}
		
		}
		
		this.koli.addEventListener("mouseout", fadeMouseOutKoli.bind(this));
		
		function fadeMouseOutKoli() {
			if (buttonClicked == 0 || buttonClicked==3) {
				showAll.bind(this)();
				HideAllEmptyBones.bind(this)();
		
			}
		}
		
		
		//באסט האונד
		
		this.bust.addEventListener("mouseover", fadeMouseOverBust.bind(this));
		
		function fadeMouseOverBust() {
			if (buttonClicked == 0 || buttonClicked==3) {
				fadeAll.bind(this)();
				this.category1_megorim.alpha = 1;
				this.category4_time.alpha = 1;
				this.category3_clean.alpha = 1;
				this.category2_family.alpha = 1;
				this.category5_ofi.alpha = 1;
				this.category6_size.alpha = 1;
		
				this.megorim1.alpha = 1;
				this.megorim2.alpha = 1;
				this.megorim3.alpha = 1;
				this.megorim4.alpha = 1;
				this.time2.alpha = 1;
				this.clean2.alpha = 1;
				this.family1.alpha = 1;
				this.ofi1.alpha = 1;
				this.ofi4.alpha = 1;
				this.size2.alpha = 1;
				this.bust.alpha = 1;
		
				this.Empty_Bone1.alpha = 1;
				this.Empty_Bone2.alpha = 1;
				this.Empty_Bone3.alpha = 1;
				this.Empty_Bone4.alpha = 1;
				this.Empty_Bone5.alpha = 1;
				this.Empty_Bone8.alpha = 1;
				this.Empty_Bone10.alpha = 1;
				this.Empty_Bone12.alpha = 1;
		
				this.Empty_Bone15.alpha = 1;
				this.Empty_Bone18.alpha = 1;
		
		
			}
		}
		
		this.bust.addEventListener("mouseout", fadeMouseOutBust.bind(this));
		
		function fadeMouseOutBust() {
			if (buttonClicked == 0 || buttonClicked==3) {
				showAll.bind(this)();
				HideAllEmptyBones.bind(this)();
		
			}
		}
		
		//בישון פריזה
		
		this.bishon.addEventListener("mouseover", fadeMouseOverBishon.bind(this));
		
		function fadeMouseOverBishon() {
			if (buttonClicked == 0 || buttonClicked==3) {
				fadeAll.bind(this)();
				this.category1_megorim.alpha = 1;
				this.category4_time.alpha = 1;
				this.category3_clean.alpha = 1;
				this.category2_family.alpha = 1;
				this.category5_ofi.alpha = 1;
				this.category6_size.alpha = 1;
		
				this.megorim1.alpha = 1;
				this.megorim2.alpha = 1;
				this.megorim3.alpha = 1;
				this.megorim4.alpha = 1;
				this.time3.alpha = 1;
				this.clean1.alpha = 1;
				this.family1.alpha = 1;
				this.ofi2.alpha = 1;
				this.ofi3.alpha = 1;
				this.size1.alpha = 1;
		
		
				this.bishon.alpha = 1;
		
				this.Empty_Bone1.alpha = 1;
				this.Empty_Bone2.alpha = 1;
				this.Empty_Bone3.alpha = 1;
				this.Empty_Bone4.alpha = 1;
				this.Empty_Bone5.alpha = 1;
				this.Empty_Bone7.alpha = 1;
				this.Empty_Bone11.alpha = 1;
				this.Empty_Bone13.alpha = 1;
				this.Empty_Bone14.alpha = 1;
				this.Empty_Bone17.alpha = 1;
		
		
		
			}
		}
		
		this.bishon.addEventListener("mouseout", fadeMouseOutBishon.bind(this));
		
		function fadeMouseOutBishon() {
			if (buttonClicked == 0 || buttonClicked==3) {
				showAll.bind(this)();
				HideAllEmptyBones.bind(this)();
		
			}
		}
		
		
		
		//בובייה דה פלנדר 
		
		this.bobyea.addEventListener("mouseover", fadeMouseOverBobyea.bind(this));
		
		function fadeMouseOverBobyea() {
			if (buttonClicked == 0 || buttonClicked==3) {
				fadeAll.bind(this)();
				this.category1_megorim.alpha = 1;
				this.category4_time.alpha = 1;
				this.category3_clean.alpha = 1;
				this.category2_family.alpha = 1;
				this.category5_ofi.alpha = 1;
				this.category6_size.alpha = 1;
		
				this.megorim3.alpha = 1;
				this.megorim4.alpha = 1;
				this.time3.alpha = 1;
				this.clean2.alpha = 1;
				this.family1.alpha = 1;
				this.ofi2.alpha = 1;
				this.ofi3.alpha = 1;
				this.ofi4.alpha = 1;
				this.ofi5.alpha = 1;
				this.size3.alpha = 1;
		
		
				this.bobyea.alpha = 1;
		
		
				this.Empty_Bone3.alpha = 1;
				this.Empty_Bone4.alpha = 1;
				this.Empty_Bone5.alpha = 1;
				this.Empty_Bone8.alpha = 1;
				this.Empty_Bone11.alpha = 1;
				this.Empty_Bone13.alpha = 1;
				this.Empty_Bone14.alpha = 1;
				this.Empty_Bone15.alpha = 1;
				this.Empty_Bone16.alpha = 1;
				this.Empty_Bone19.alpha = 1;
		
		
			}
		}
		
		this.bobyea.addEventListener("mouseout", fadeMouseOutBobyea.bind(this));
		
		function fadeMouseOutBobyea() {
			if (buttonClicked == 0 || buttonClicked==3) {
				showAll.bind(this)();
				HideAllEmptyBones.bind(this)();
		
			}
		}
		
		
		//בוקסר
		
		this.boxer.addEventListener("mouseover", fadeMouseOverBoxer.bind(this));
		
		function fadeMouseOverBoxer() {
			if (buttonClicked == 0 || buttonClicked==3) {
				fadeAll.bind(this)();
				this.category1_megorim.alpha = 1;
				this.category4_time.alpha = 1;
				this.category3_clean.alpha = 1;
				this.category2_family.alpha = 1;
				this.category5_ofi.alpha = 1;
				this.category6_size.alpha = 1;
		
				this.megorim2.alpha = 1;
				this.megorim3.alpha = 1;
				this.megorim4.alpha = 1;
				this.time3.alpha = 1;
				this.clean2.alpha = 1;
				this.family1.alpha = 1;
				this.ofi2.alpha = 1;
				this.ofi3.alpha = 1;
				this.ofi5.alpha = 1;
				this.size2.alpha = 1;
				this.size3.alpha = 1;
		
		
				this.boxer.alpha = 1;
		
				this.Empty_Bone2.alpha = 1;
				this.Empty_Bone3.alpha = 1;
				this.Empty_Bone4.alpha = 1;
				this.Empty_Bone5.alpha = 1;
				this.Empty_Bone8.alpha = 1;
		
				this.Empty_Bone11.alpha = 1;
		
				this.Empty_Bone13.alpha = 1;
				this.Empty_Bone14.alpha = 1;
				this.Empty_Bone16.alpha = 1;
				this.Empty_Bone18.alpha = 1;
				this.Empty_Bone19.alpha = 1;
		
		
		
			}
		}
		
		this.boxer.addEventListener("mouseout", fadeMouseOutBoxer.bind(this));
		
		function fadeMouseOutBoxer() {
			if (buttonClicked == 0 || buttonClicked==3) {
				showAll.bind(this)();
				HideAllEmptyBones.bind(this)();
		
			}
		}
		
		//צ'יוואוה 
		
		this.chiwawa.addEventListener("mouseover", fadeMouseOverChiwawa.bind(this));
		
		function fadeMouseOverChiwawa() {
		if (buttonClicked == 0 || buttonClicked==3) {
				fadeAll.bind(this)();
				this.category1_megorim.alpha = 1;
				this.category4_time.alpha = 1;
				this.category3_clean.alpha = 1;
				this.category2_family.alpha = 1;
				this.category5_ofi.alpha = 1;
				this.category6_size.alpha = 1;
		
				this.megorim1.alpha = 1;
				this.megorim2.alpha = 1;
				this.megorim3.alpha = 1;
				this.megorim4.alpha = 1;
				this.time3.alpha = 1;
				this.clean1.alpha = 1;
				this.family2.alpha = 1;
				this.ofi2.alpha = 1;
				this.ofi3.alpha = 1;
				this.ofi4.alpha = 1;
				this.size1.alpha = 1;
		
		
				this.chiwawa.alpha = 1;
		
				this.Empty_Bone1.alpha = 1;
				this.Empty_Bone2.alpha = 1;
				this.Empty_Bone3.alpha = 1;
				this.Empty_Bone4.alpha = 1;
				this.Empty_Bone6.alpha = 1;
				this.Empty_Bone7.alpha = 1;
				this.Empty_Bone11.alpha = 1;
				this.Empty_Bone13.alpha = 1;
				this.Empty_Bone14.alpha = 1;
				this.Empty_Bone15.alpha = 1;
				this.Empty_Bone18.alpha = 1;
				this.Empty_Bone19.alpha = 1;
		
		
		
		
			}
		}
		
		this.chiwawa.addEventListener("mouseout", fadeMouseOutChiwawa.bind(this));
		
		function fadeMouseOutChiwawa() {
		if (buttonClicked == 0 || buttonClicked==3) {
				showAll.bind(this)();
				HideAllEmptyBones.bind(this)();
		
			}
		}
		
		//סיני מצויץ 
		
		this.chinese.addEventListener("mouseover", fadeMouseOverChinese.bind(this));
		
		function fadeMouseOverChinese() {
			if (buttonClicked == 0 || buttonClicked==3) {
				fadeAll.bind(this)();
				this.category1_megorim.alpha = 1;
				this.category4_time.alpha = 1;
				this.category3_clean.alpha = 1;
				this.category2_family.alpha = 1;
				this.category5_ofi.alpha = 1;
				this.category6_size.alpha = 1;
		
				this.megorim1.alpha = 1;
				this.megorim2.alpha = 1;
				this.megorim3.alpha = 1;
				this.megorim4.alpha = 1;
				this.time3.alpha = 1;
				this.clean1.alpha = 1;
				this.family1.alpha = 1;
				this.ofi2.alpha = 1;
				this.ofi1.alpha = 1;
				this.ofi3.alpha = 1;
				this.size1.alpha = 1;
		
		
				this.chinese.alpha = 1;
		
				this.Empty_Bone1.alpha = 1;
				this.Empty_Bone2.alpha = 1;
				this.Empty_Bone3.alpha = 1;
				this.Empty_Bone4.alpha = 1;
				this.Empty_Bone5.alpha = 1;
				this.Empty_Bone7.alpha = 1;
				this.Empty_Bone11.alpha = 1;
				this.Empty_Bone12.alpha = 1;
				this.Empty_Bone13.alpha = 1;
				this.Empty_Bone14.alpha = 1;
				this.Empty_Bone15.alpha = 1;
				this.Empty_Bone16.alpha = 1;
				this.Empty_Bone17.alpha = 1;
		
		
		
			}
		}
		
		this.chinese.addEventListener("mouseout", fadeMouseOutChinese.bind(this));
		
		function fadeMouseOutChinese() {
			if (buttonClicked == 0 || buttonClicked==3) {
				showAll.bind(this)();
				HideAllEmptyBones.bind(this)();
		
			}
		}
		
		//שר פיי 
		
		this.sharpey.addEventListener("mouseover", fadeMouseOverSharpey.bind(this));
		
		function fadeMouseOverSharpey() {
			if (buttonClicked == 0 || buttonClicked==3) {
				fadeAll.bind(this)();
				this.category1_megorim.alpha = 1;
				this.category4_time.alpha = 1;
				this.category3_clean.alpha = 1;
				this.category2_family.alpha = 1;
				this.category5_ofi.alpha = 1;
				this.category6_size.alpha = 1;
		
				this.megorim2.alpha = 1;
				this.megorim3.alpha = 1;
				this.megorim4.alpha = 1;
				this.time1.alpha = 1;
				this.time2.alpha = 1;
				this.clean1.alpha = 1;
				this.family2.alpha = 1;
				this.ofi1.alpha = 1;
				this.ofi3.alpha = 1;
				this.ofi5.alpha = 1;
				this.size2.alpha = 1;
		
		
				this.sharpey.alpha = 1;
		
				this.Empty_Bone2.alpha = 1;
				this.Empty_Bone3.alpha = 1;
				this.Empty_Bone4.alpha = 1;
				this.Empty_Bone6.alpha = 1;
				this.Empty_Bone7.alpha = 1;
				this.Empty_Bone9.alpha = 1;
				this.Empty_Bone10.alpha = 1;
				this.Empty_Bone12.alpha = 1;
				this.Empty_Bone14.alpha = 1;
				this.Empty_Bone16.alpha = 1;
				this.Empty_Bone18.alpha = 1;
		
		
		
			}
		}
		
		this.sharpey.addEventListener("mouseout", fadeMouseOutSharpey.bind(this));
		
		function fadeMouseOutSharpey() {
			if (buttonClicked == 0 || buttonClicked==3) {
				showAll.bind(this)();
				HideAllEmptyBones.bind(this)();
		
			}
		}
		
		//קוקר ספנייל
		this.coker.addEventListener("mouseover", fadeMouseOverCoker.bind(this));
		
		function fadeMouseOverCoker() {
			if (buttonClicked == 0 || buttonClicked==3) {
				fadeAll.bind(this)();
				this.category1_megorim.alpha = 1;
				this.category4_time.alpha = 1;
				this.category3_clean.alpha = 1;
				this.category2_family.alpha = 1;
				this.category5_ofi.alpha = 1;
				this.category6_size.alpha = 1;
		
				this.megorim1.alpha = 1;
				this.megorim2.alpha = 1;
				this.megorim3.alpha = 1;
				this.megorim4.alpha = 1;
				this.time3.alpha = 1;
				this.clean2.alpha = 1;
				this.family1.alpha = 1;
				this.ofi2.alpha = 1;
				this.ofi3.alpha = 1;
				this.size2.alpha = 1;
		
		
				this.coker.alpha = 1;
		
				this.Empty_Bone1.alpha = 1;
				this.Empty_Bone2.alpha = 1;
				this.Empty_Bone3.alpha = 1;
				this.Empty_Bone4.alpha = 1;
				this.Empty_Bone5.alpha = 1;
				this.Empty_Bone8.alpha = 1;
				this.Empty_Bone11.alpha = 1;
				this.Empty_Bone13.alpha = 1;
				this.Empty_Bone14.alpha = 1;
				this.Empty_Bone18.alpha = 1;
		
		
		
			}
		}
		
		this.coker.addEventListener("mouseout", fadeMouseOutCoker.bind(this));
		
		function fadeMouseOutCoker() {
			if (buttonClicked == 0 || buttonClicked==3) {
				showAll.bind(this)();
				HideAllEmptyBones.bind(this)();
		
			}
		}
		
		//בולדוג אנגלי 
		
		this.british_boldug.addEventListener("mouseover", fadeMouseOverBritish.bind(this));
		
		function fadeMouseOverBritish() {
			if (buttonClicked == 0 || buttonClicked==3) {
				fadeAll.bind(this)();
				this.category1_megorim.alpha = 1;
				this.category4_time.alpha = 1;
				this.category3_clean.alpha = 1;
				this.category2_family.alpha = 1;
				this.category5_ofi.alpha = 1;
				this.category6_size.alpha = 1;
		
				this.megorim1.alpha = 1;
				this.megorim2.alpha = 1;
				this.megorim3.alpha = 1;
				this.time2.alpha = 1;
				this.clean2.alpha = 1;
				this.family1.alpha = 1;
				this.ofi3.alpha = 1;
				this.ofi4.alpha = 1;
				this.ofi5.alpha = 1;
				this.size2.alpha = 1;
		
				this.british_boldug.alpha = 1;
		
				this.Empty_Bone1.alpha = 1;
				this.Empty_Bone2.alpha = 1;
				this.Empty_Bone3.alpha = 1;
				this.Empty_Bone5.alpha = 1;
				this.Empty_Bone8.alpha = 1;
				this.Empty_Bone10.alpha = 1;
				this.Empty_Bone14.alpha = 1;
				this.Empty_Bone15.alpha = 1;
				this.Empty_Bone16.alpha = 1;
				this.Empty_Bone18.alpha = 1;
		
		
		
		
			}
		}
		
		this.british_boldug.addEventListener("mouseout", fadeMouseOutBritish.bind(this));
		
		function fadeMouseOutBritish() {
			if (buttonClicked == 0 || buttonClicked==3) {
				showAll.bind(this)();
				HideAllEmptyBones.bind(this)();
		
			}
		}
		
		//רועה גרמני
		
		this.german.addEventListener("mouseover", fadeMouseOverGerman.bind(this));
		
		function fadeMouseOverGerman() {
			if (buttonClicked == 0 || buttonClicked==3) {
				fadeAll.bind(this)();
				this.category1_megorim.alpha = 1;
				this.category4_time.alpha = 1;
				this.category3_clean.alpha = 1;
				this.category2_family.alpha = 1;
				this.category5_ofi.alpha = 1;
				this.category6_size.alpha = 1;
		
				this.megorim3.alpha = 1;
				this.megorim4.alpha = 1;
				this.time2.alpha = 1;
				this.clean2.alpha = 1;
				this.family1.alpha = 1;
				this.ofi2.alpha = 1;
				this.ofi3.alpha = 1;
				this.ofi4.alpha = 1;
				this.ofi5.alpha = 1;
				this.size2.alpha = 1;
				this.size3.alpha = 1;
		
				this.german.alpha = 1;
		
				this.Empty_Bone3.alpha = 1;
				this.Empty_Bone4.alpha = 1;
				this.Empty_Bone5.alpha = 1;
				this.Empty_Bone8.alpha = 1;
				this.Empty_Bone10.alpha = 1;
				this.Empty_Bone13.alpha = 1;
				this.Empty_Bone14.alpha = 1;
				this.Empty_Bone15.alpha = 1;
				this.Empty_Bone16.alpha = 1;
				this.Empty_Bone18.alpha = 1;
				this.Empty_Bone19.alpha = 1;
		
		
			}
		}
		
		this.german.addEventListener("mouseout", fadeMouseOutGerman.bind(this));
		
		function fadeMouseOutGerman() {
			if (buttonClicked == 0 || buttonClicked==3) {
				showAll.bind(this)();
				HideAllEmptyBones.bind(this)();
		
			}
		}
		
		//גולדן רטריבר
		
		this.golden.addEventListener("mouseover", fadeMouseOverGolden.bind(this));
		
		function fadeMouseOverGolden() {
			if (buttonClicked == 0 || buttonClicked==3) {
				fadeAll.bind(this)();
				this.category1_megorim.alpha = 1;
				this.category4_time.alpha = 1;
				this.category3_clean.alpha = 1;
				this.category2_family.alpha = 1;
				this.category5_ofi.alpha = 1;
				this.category6_size.alpha = 1;
		
				this.megorim2.alpha = 1;
				this.megorim3.alpha = 1;
				this.megorim4.alpha = 1;
				this.time3.alpha = 1;
				this.clean2.alpha = 1;
				this.family1.alpha = 1;
				this.ofi2.alpha = 1;
				this.ofi3.alpha = 1;
				this.size2.alpha = 1;
				this.size3.alpha = 1;
		
				this.golden.alpha = 1;
		
				this.Empty_Bone2.alpha = 1;
				this.Empty_Bone3.alpha = 1;
				this.Empty_Bone4.alpha = 1;
				this.Empty_Bone5.alpha = 1;
				this.Empty_Bone8.alpha = 1;
				this.Empty_Bone11.alpha = 1;
				this.Empty_Bone13.alpha = 1;
				this.Empty_Bone14.alpha = 1;
				this.Empty_Bone18.alpha = 1;
				this.Empty_Bone19.alpha = 1;
		
		
			}
		}
		
		this.golden.addEventListener("mouseout", fadeMouseOutGolden.bind(this));
		
		function fadeMouseOutGolden() {
			if (buttonClicked == 0 || buttonClicked==3) {
				showAll.bind(this)();
				HideAllEmptyBones.bind(this)();
		
			}
		}
		
		//לברדור רטריבר
		
		this.labrador.addEventListener("mouseover", fadeMouseOverLabrador.bind(this));
		
		function fadeMouseOverLabrador() {
			if (buttonClicked == 0 || buttonClicked==3) {
				fadeAll.bind(this)();
				this.category1_megorim.alpha = 1;
				this.category4_time.alpha = 1;
				this.category3_clean.alpha = 1;
				this.category2_family.alpha = 1;
				this.category5_ofi.alpha = 1;
				this.category6_size.alpha = 1;
		
				this.megorim3.alpha = 1;
				this.megorim4.alpha = 1;
				this.time3.alpha = 1;
				this.clean2.alpha = 1;
				this.family1.alpha = 1;
				this.ofi2.alpha = 1;
				this.ofi3.alpha = 1;
				this.ofi4.alpha = 1;
				this.ofi5.alpha = 1;
				this.size2.alpha = 1;
		
				this.labrador.alpha = 1;
		
				this.Empty_Bone3.alpha = 1;
				this.Empty_Bone4.alpha = 1;
				this.Empty_Bone5.alpha = 1;
				this.Empty_Bone8.alpha = 1;
				this.Empty_Bone11.alpha = 1;
				this.Empty_Bone13.alpha = 1;
				this.Empty_Bone14.alpha = 1;
				this.Empty_Bone15.alpha = 1;
				this.Empty_Bone16.alpha = 1;
				this.Empty_Bone18.alpha = 1;
		
		
		
			}
		}
		
		this.labrador.addEventListener("mouseout", fadeMouseOutLabrador.bind(this));
		
		function fadeMouseOutLabrador() {
			if (buttonClicked == 0 || buttonClicked==3) {
				showAll.bind(this)();
				HideAllEmptyBones.bind(this)();
		
			}
		}
		
		//פפילון
		
		this.papylon.addEventListener("mouseover", fadeMouseOverPapylon.bind(this));
		
		function fadeMouseOverPapylon() {
			if (buttonClicked == 0 || buttonClicked==3) {
				fadeAll.bind(this)();
				this.category1_megorim.alpha = 1;
				this.category4_time.alpha = 1;
				this.category3_clean.alpha = 1;
				this.category2_family.alpha = 1;
				this.category5_ofi.alpha = 1;
				this.category6_size.alpha = 1;
		
				this.megorim1.alpha = 1;
				this.megorim2.alpha = 1;
				this.megorim3.alpha = 1;
				this.time3.alpha = 1;
				this.clean1.alpha = 1;
				this.family1.alpha = 1;
				this.ofi2.alpha = 1;
				this.ofi3.alpha = 1;
				this.ofi4.alpha = 1;
				this.size1.alpha = 1;
		
		
				this.papylon.alpha = 1;
		
				this.Empty_Bone1.alpha = 1;
				this.Empty_Bone2.alpha = 1;
				this.Empty_Bone3.alpha = 1;
				this.Empty_Bone5.alpha = 1;
				this.Empty_Bone7.alpha = 1;
				this.Empty_Bone11.alpha = 1;
				this.Empty_Bone13.alpha = 1;
				this.Empty_Bone14.alpha = 1;
				this.Empty_Bone15.alpha = 1;
				this.Empty_Bone17.alpha = 1;
		
			}
		}
		
		this.papylon.addEventListener("mouseout", fadeMouseOutPapylon.bind(this));
		
		function fadeMouseOutPapylon() {
			if (buttonClicked == 0 || buttonClicked==3) {
				showAll.bind(this)();
				HideAllEmptyBones.bind(this)();
		
			}
		}
		
		//פינצ'ר ננסי
		
		this.pincher.addEventListener("mouseover", fadeMouseOverPincher.bind(this));
		
		function fadeMouseOverPincher() {
			if (buttonClicked == 0 || buttonClicked==3) {
				fadeAll.bind(this)();
				this.category1_megorim.alpha = 1;
				this.category4_time.alpha = 1;
				this.category3_clean.alpha = 1;
				this.category2_family.alpha = 1;
				this.category5_ofi.alpha = 1;
				this.category6_size.alpha = 1;
		
				this.megorim1.alpha = 1;
				this.megorim2.alpha = 1;
				this.megorim3.alpha = 1;
				this.megorim4.alpha = 1;
				this.time2.alpha = 1;
				this.clean2.alpha = 1;
				this.family1.alpha = 1;
				this.ofi2.alpha = 1;
				this.ofi3.alpha = 1;
				this.ofi4.alpha = 1;
				this.size1.alpha = 1;
		
		
				this.pincher.alpha = 1;
		
				this.Empty_Bone1.alpha = 1;
				this.Empty_Bone2.alpha = 1;
				this.Empty_Bone3.alpha = 1;
				this.Empty_Bone4.alpha = 1;
				this.Empty_Bone5.alpha = 1;
				this.Empty_Bone8.alpha = 1;
				this.Empty_Bone10.alpha = 1;
				this.Empty_Bone13.alpha = 1;
				this.Empty_Bone14.alpha = 1;
				this.Empty_Bone15.alpha = 1;
				this.Empty_Bone17.alpha = 1;
		
		
		
		
			}
		}
		
		this.pincher.addEventListener("mouseout", fadeMouseOutPincher.bind(this));
		
		function fadeMouseOutPincher() {
			if (buttonClicked == 0 || buttonClicked==3) {
				showAll.bind(this)();
				HideAllEmptyBones.bind(this)();
		
			}
		}
		
		//פאג
		this.pag.addEventListener("mouseover", fadeMouseOverPag.bind(this));
		
		function fadeMouseOverPag() {
			if (buttonClicked == 0 || buttonClicked==3) {
				fadeAll.bind(this)();
				this.category1_megorim.alpha = 1;
				this.category4_time.alpha = 1;
				this.category3_clean.alpha = 1;
				this.category2_family.alpha = 1;
				this.category5_ofi.alpha = 1;
				this.category6_size.alpha = 1;
		
				this.megorim3.alpha = 1;
				this.megorim4.alpha = 1;
				this.time3.alpha = 1;
				this.clean2.alpha = 1;
				this.family1.alpha = 1;
				this.ofi2.alpha = 1;
				this.ofi3.alpha = 1;
				this.ofi4.alpha = 1;
				this.ofi5.alpha = 1;
				this.size1.alpha = 1;
		
				this.pag.alpha = 1;
		
				this.Empty_Bone3.alpha = 1;
				this.Empty_Bone4.alpha = 1;
				this.Empty_Bone5.alpha = 1;
				this.Empty_Bone8.alpha = 1;
				this.Empty_Bone11.alpha = 1;
				this.Empty_Bone13.alpha = 1;
				this.Empty_Bone14.alpha = 1;
				this.Empty_Bone15.alpha = 1;
				this.Empty_Bone16.alpha = 1;
				this.Empty_Bone17.alpha = 1;
		
		
		
			}
		}
		
		this.pag.addEventListener("mouseout", fadeMouseOutPag.bind(this));
		
		function fadeMouseOutPag() {
			if (buttonClicked == 0 || buttonClicked==3) {
				showAll.bind(this)();
				HideAllEmptyBones.bind(this)();
		
			}
		}
		
		//רוטווילר
		
		this.rotwiler.addEventListener("mouseover", fadeMouseOverRotwiler.bind(this));
		
		function fadeMouseOverRotwiler() {
			if (buttonClicked == 0 || buttonClicked==3) {
				fadeAll.bind(this)();
				this.category1_megorim.alpha = 1;
				this.category4_time.alpha = 1;
				this.category3_clean.alpha = 1;
				this.category2_family.alpha = 1;
				this.category5_ofi.alpha = 1;
				this.category6_size.alpha = 1;
		
				this.megorim4.alpha = 1;
				this.time3.alpha = 1;
				this.clean2.alpha = 1;
				this.family2.alpha = 1;
				this.ofi2.alpha = 1;
				this.ofi3.alpha = 1;
				this.ofi5.alpha = 1;
				this.size2.alpha = 1;
				this.size3.alpha = 1;
		
				this.rotwiler.alpha = 1;
		
				this.Empty_Bone4.alpha = 1;
				this.Empty_Bone6.alpha = 1;
				this.Empty_Bone8.alpha = 1;
				this.Empty_Bone11.alpha = 1;
				this.Empty_Bone13.alpha = 1;
				this.Empty_Bone14.alpha = 1;
				this.Empty_Bone16.alpha = 1;
				this.Empty_Bone18.alpha = 1;
				this.Empty_Bone19.alpha = 1;
		
		
			}
		}
		
		this.rotwiler.addEventListener("mouseout", fadeMouseOutRotwiler.bind(this));
		
		function fadeMouseOutRotwiler() {
		if (buttonClicked == 0 || buttonClicked==3) {
				showAll.bind(this)();
				HideAllEmptyBones.bind(this)();
		
			}
		}
		
		//סמויאד
		
		this.samyoad.addEventListener("mouseover", fadeMouseOverSamoyed.bind(this));
		
		function fadeMouseOverSamoyed() {
			if (buttonClicked == 0 || buttonClicked==3) {
				fadeAll.bind(this)();
				this.category1_megorim.alpha = 1;
				this.category4_time.alpha = 1;
				this.category3_clean.alpha = 1;
				this.category2_family.alpha = 1;
				this.category5_ofi.alpha = 1;
				this.category6_size.alpha = 1;
		
				this.megorim3.alpha = 1;
				this.megorim4.alpha = 1;
				this.time3.alpha = 1;
				this.clean2.alpha = 1;
				this.family1.alpha = 1;
				this.ofi2.alpha = 1;
				this.ofi3.alpha = 1;
				this.ofi4.alpha = 1;
				this.ofi5.alpha = 1;
				this.size2.alpha = 1;
		
				this.samyoad.alpha = 1;
		
				this.Empty_Bone3.alpha = 1;
				this.Empty_Bone4.alpha = 1;
				this.Empty_Bone5.alpha = 1;
				this.Empty_Bone8.alpha = 1;
				this.Empty_Bone11.alpha = 1;
				this.Empty_Bone13.alpha = 1;
				this.Empty_Bone14.alpha = 1;
				this.Empty_Bone15.alpha = 1;
				this.Empty_Bone16.alpha = 1;
				this.Empty_Bone18.alpha = 1;
		
		
			}
		}
		
		this.samyoad.addEventListener("mouseout", fadeMouseOutSamoyed.bind(this));
		
		function fadeMouseOutSamoyed() {
			if (buttonClicked == 0 || buttonClicked==3) {
				showAll.bind(this)();
				HideAllEmptyBones.bind(this)();
		
			}
		}
		
		//שלטי
		
		this.shalty.addEventListener("mouseover", fadeMouseOverShalty.bind(this));
		
		function fadeMouseOverShalty() {
			if (buttonClicked == 0 || buttonClicked==3) {
				fadeAll.bind(this)();
				this.category1_megorim.alpha = 1;
				this.category4_time.alpha = 1;
				this.category3_clean.alpha = 1;
				this.category2_family.alpha = 1;
				this.category5_ofi.alpha = 1;
				this.category6_size.alpha = 1;
		
				this.megorim3.alpha = 1;
				this.megorim4.alpha = 1;
				this.time2.alpha = 1;
				this.clean2.alpha = 1;
				this.family1.alpha = 1;
				this.ofi2.alpha = 1;
				this.ofi3.alpha = 1;
				this.ofi4.alpha = 1;
				this.ofi5.alpha = 1;
				this.size1.alpha = 1;
		
		
				this.shalty.alpha = 1;
		
				this.Empty_Bone3.alpha = 1;
				this.Empty_Bone4.alpha = 1;
				this.Empty_Bone5.alpha = 1;
				this.Empty_Bone8.alpha = 1;
				this.Empty_Bone10.alpha = 1;
				this.Empty_Bone13.alpha = 1;
				this.Empty_Bone14.alpha = 1;
				this.Empty_Bone15.alpha = 1;
				this.Empty_Bone16.alpha = 1;
				this.Empty_Bone17.alpha = 1;
		
		
		
			}
		}
		
		this.shalty.addEventListener("mouseout", fadeMouseOutShalty.bind(this));
		
		function fadeMouseOutShalty() {
			if (buttonClicked == 0 || buttonClicked==3) {
				showAll.bind(this)();
				HideAllEmptyBones.bind(this)();
		
			}
		}
		
		//שיקוקו
		
		this.shikuku.addEventListener("mouseover", fadeMouseOverShikuku.bind(this));
		
		function fadeMouseOverShikuku() {
			if (buttonClicked == 0 || buttonClicked==3) {
				fadeAll.bind(this)();
				this.category1_megorim.alpha = 1;
				this.category4_time.alpha = 1;
				this.category3_clean.alpha = 1;
				this.category2_family.alpha = 1;
				this.category5_ofi.alpha = 1;
				this.category6_size.alpha = 1;
		
				this.megorim2.alpha = 1;
				this.megorim3.alpha = 1;
				this.megorim4.alpha = 1;
				this.time3.alpha = 1;
				this.clean2.alpha = 1;
				this.family1.alpha = 1;
				this.ofi2.alpha = 1;
				this.ofi3.alpha = 1;
				this.ofi4.alpha = 1;
				this.size2.alpha = 1;
		
				this.shikuku.alpha = 1;
		
				this.Empty_Bone2.alpha = 1;
				this.Empty_Bone3.alpha = 1;
				this.Empty_Bone4.alpha = 1;
				this.Empty_Bone5.alpha = 1;
				this.Empty_Bone8.alpha = 1;
				this.Empty_Bone11.alpha = 1;
				this.Empty_Bone13.alpha = 1;
				this.Empty_Bone14.alpha = 1;
				this.Empty_Bone15.alpha = 1;
				this.Empty_Bone18.alpha = 1;
		
		
			}
		}
		
		this.shikuku.addEventListener("mouseout", fadeMouseOutShikuku.bind(this));
		
		function fadeMouseOutShikuku() {
			if (buttonClicked == 0 || buttonClicked==3) {
				showAll.bind(this)();
				HideAllEmptyBones.bind(this)();
		
			}
		}
		
		//האסקי סיבירי
		
		this.hasky.addEventListener("mouseover", fadeMouseOverHasky.bind(this));
		
		function fadeMouseOverHasky() {
			if (buttonClicked == 0 || buttonClicked==3) {
				fadeAll.bind(this)();
				this.category1_megorim.alpha = 1;
				this.category4_time.alpha = 1;
				this.category3_clean.alpha = 1;
				this.category2_family.alpha = 1;
				this.category5_ofi.alpha = 1;
				this.category6_size.alpha = 1;
		
				this.megorim3.alpha = 1;
				this.megorim4.alpha = 1;
				this.time3.alpha = 1;
				this.clean2.alpha = 1;
				this.ofi2.alpha = 1;
				this.ofi1.alpha = 1;
				this.ofi5.alpha = 1;
				this.size2.alpha = 1;
				this.family1.alpha = 1;
		
		
				this.hasky.alpha = 1;
		
				this.Empty_Bone3.alpha = 1;
				this.Empty_Bone4.alpha = 1;
				this.Empty_Bone5.alpha = 1;
				this.Empty_Bone8.alpha = 1;
				this.Empty_Bone11.alpha = 1;
				this.Empty_Bone12.alpha = 1;
				this.Empty_Bone13.alpha = 1;
				this.Empty_Bone16.alpha = 1;
				this.Empty_Bone18.alpha = 1;
			}
		}
		
		this.hasky.addEventListener("mouseout", fadeMouseOutHasky.bind(this));
		
		function fadeMouseOutHasky() {
			if (buttonClicked == 0 || buttonClicked==3) {
				showAll.bind(this)();
				HideAllEmptyBones.bind(this)();
		
			}
		}
		
		//טרייר טיבטי
		
		this.teryer.addEventListener("mouseover", fadeMouseOverTeryer.bind(this));
		
		function fadeMouseOverTeryer() {
			if (buttonClicked == 0 || buttonClicked==3) {
				fadeAll.bind(this)();
				this.category1_megorim.alpha = 1;
				this.category4_time.alpha = 1;
				this.category3_clean.alpha = 1;
				this.category2_family.alpha = 1;
				this.category5_ofi.alpha = 1;
				this.category6_size.alpha = 1;
		
				this.megorim1.alpha = 1;
				this.megorim2.alpha = 1;
				this.megorim3.alpha = 1;
				this.megorim4.alpha = 1;
				this.time3.alpha = 1;
				this.clean1.alpha = 1;
				this.ofi1.alpha = 1;
				this.ofi2.alpha = 1;
				this.ofi3.alpha = 1;
				this.size2.alpha = 1;
				this.family1.alpha = 1;
		
		
		
				this.teryer.alpha = 1;
		
				this.Empty_Bone1.alpha = 1;
				this.Empty_Bone2.alpha = 1;
				this.Empty_Bone3.alpha = 1;
				this.Empty_Bone4.alpha = 1;
				this.Empty_Bone5.alpha = 1;
				this.Empty_Bone7.alpha = 1;
				this.Empty_Bone11.alpha = 1;
				this.Empty_Bone12.alpha = 1;
				this.Empty_Bone13.alpha = 1;
				this.Empty_Bone14.alpha = 1;
				this.Empty_Bone18.alpha = 1;
		
		
		
			}
		}
		
		this.teryer.addEventListener("mouseout", fadeMouseOutTeryer.bind(this));
		
		function fadeMouseOutTeryer() {
			if (buttonClicked == 0 || buttonClicked==3) {
				showAll.bind(this)();
				HideAllEmptyBones.bind(this)();
		
			}
		}
		
		
		//שיצו
		
		this.shitzu.addEventListener("mouseover", fadeMouseOverShitzu.bind(this));
		
		function fadeMouseOverShitzu() {
			if (buttonClicked == 0 || buttonClicked==3) {
				fadeAll.bind(this)();
				this.category1_megorim.alpha = 1;
				this.category4_time.alpha = 1;
				this.category3_clean.alpha = 1;
				this.category2_family.alpha = 1;
				this.category5_ofi.alpha = 1;
				this.category6_size.alpha = 1;
		
				this.megorim1.alpha = 1;
				this.megorim2.alpha = 1;
				this.megorim3.alpha = 1;
				this.megorim4.alpha = 1;
				this.time2.alpha = 1;
				this.clean1.alpha = 1;
				this.family2.alpha = 1;
				this.ofi1.alpha = 1;
				this.ofi3.alpha = 1;
				this.size1.alpha = 1;
		
				this.shitzu.alpha = 1;
		
				this.Empty_Bone1.alpha = 1;
				this.Empty_Bone2.alpha = 1;
				this.Empty_Bone3.alpha = 1;
				this.Empty_Bone4.alpha = 1;
				this.Empty_Bone6.alpha = 1;
				this.Empty_Bone7.alpha = 1;
				this.Empty_Bone10.alpha = 1;
				this.Empty_Bone12.alpha = 1;
				this.Empty_Bone14.alpha = 1;
				this.Empty_Bone17.alpha = 1;
			}
		
		
		}
		
		
		this.shitzu.addEventListener("mouseout", fadeMouseOutShitzu.bind(this));
		
		function fadeMouseOutShitzu() {
			if (buttonClicked == 0 || buttonClicked==3) {
				showAll.bind(this)();
				HideAllEmptyBones.bind(this)();
		
			}
		
		}
		
		
		
		
		
		//קיבועים קטגוריות 
		
		
		//קיבוע קטגוריה 1 - סוג מגורים
		//קיבוע דירה קטנה
		this.megorim1.addEventListener("click", ClickOverSmallApartmant.bind(this));
		
		
		function ClickOverSmallApartmant() {
			buttonClicked = 2
			fadeAll.bind(this)();
			this.megorim1.alpha = 1;
			this.bone_1.alpha = 1;
			this.category1_megorim.alpha = 1;
			this.bust.alpha = 1;
			this.bishon.alpha = 1;
			this.chiwawa.alpha = 1;
			this.chinese.alpha = 1;
			this.coker.alpha = 1;
			this.british_boldug.alpha = 1;
			this.papylon.alpha = 1;
			this.pincher.alpha = 1;
			this.pag.alpha = 1;
			this.teryer.alpha = 1;
			this.shitzu.alpha = 1;
		
			disableAll.bind(this)();
		
			this.clean_choise.alpha = 1;
		}
		
		
		//קיבוע דירה גדולה
		this.megorim2.addEventListener("click", ClickOverBigApartmant.bind(this));
		
		
		function ClickOverBigApartmant() {
			buttonClicked = 2
			fadeAll.bind(this)();
			this.category1_megorim.alpha = 1;
			this.megorim2.alpha = 1;
			this.bone_2.alpha = 1;
		
			this.american_boldug.alpha = 1;
			this.koli.alpha = 1;
			this.bust.alpha = 1;
			this.bishon.alpha = 1;
			this.boxer.alpha = 1;
			this.chiwawa.alpha = 1;
			this.chinese.alpha = 1;
			this.sharpey.alpha = 1;
			this.coker.alpha = 1;
			this.british_boldug.alpha = 1;
			this.golden.alpha = 1;
			this.labrador.alpha = 1;
			this.papylon.alpha = 1;
			this.pincher.alpha = 1;
			this.pag.alpha = 1;
			this.samyoad.alpha = 1;
			this.shikuku.alpha = 1;
			this.teryer.alpha = 1;
			this.shitzu.alpha = 1;
		
			disableAll.bind(this)();
			this.clean_choise.alpha = 1;
		
		
		}
		
		
		//קיבוע דירה עם מרפסת
		this.megorim3.addEventListener("click", ClickOverBalconyApartmant.bind(this));
		
		
		function ClickOverBalconyApartmant() {
			buttonClicked = 2
			fadeAll.bind(this)();
			this.category1_megorim.alpha = 1;
			this.megorim3.alpha = 1;
			this.bone_3.alpha = 1;
		
			this.american_boldug.alpha = 1;
			this.amstaf.alpha = 1;
			this.koli.alpha = 1;
			this.bust.alpha = 1;
			this.bishon.alpha = 1;
			this.bobyea.alpha = 1;
			this.boxer.alpha = 1;
			this.chiwawa.alpha = 1;
			this.chinese.alpha = 1;
			this.sharpey.alpha = 1;
			this.coker.alpha = 1;
			this.british_boldug.alpha = 1;
			this.german.alpha = 1;
			this.golden.alpha = 1;
			this.labrador.alpha = 1;
			this.papylon.alpha = 1;
			this.pincher.alpha = 1;
			this.pag.alpha = 1;
			this.samyoad.alpha = 1;
			this.shalty.alpha = 1;
			this.shikuku.alpha = 1;
			this.hasky.alpha = 1;
			this.teryer.alpha = 1;
			this.shitzu.alpha = 1;
			disableAll.bind(this)();
		
			this.clean_choise.alpha = 1;
		
		
		
		}
		
		//קיבוע בית עם חצר
		this.megorim4.addEventListener("click", ClickOverGardenApartmant.bind(this));
		
		
		function ClickOverGardenApartmant() {
			buttonClicked = 2
			fadeAll.bind(this)();
			this.category1_megorim.alpha = 1;
			this.megorim4.alpha = 1;
			this.bone_4.alpha = 1;
		
			this.american_boldug.alpha = 1;
			this.amstaf.alpha = 1;
			this.koli.alpha = 1;
			this.bust.alpha = 1;
			this.bishon.alpha = 1;
			this.bobyea.alpha = 1;
			this.boxer.alpha = 1;
			this.chiwawa.alpha = 1;
			this.chinese.alpha = 1;
			this.sharpey.alpha = 1;
			this.coker.alpha = 1;
			this.german.alpha = 1;
			this.golden.alpha = 1;
			this.labrador.alpha = 1;
			this.pincher.alpha = 1;
			this.rotwiler.alpha = 1;
			this.samyoad.alpha = 1;
			this.shalty.alpha = 1;
			this.shikuku.alpha = 1;
			this.hasky.alpha = 1;
			this.teryer.alpha = 1;
			this.shitzu.alpha = 1;
		
			disableAll.bind(this)();
			this.clean_choise.alpha = 1;
		
		
		
		}
		
		//קיבוע קטגורייה 2 - מצב משפחתי 
		//קיבוע עם ילדים 
		this.family1.addEventListener("click", ClickOverfamily1.bind(this));
		function ClickOverfamily1() {
			buttonClicked = 2
			fadeAll.bind(this)();
			this.category2_family.alpha = 1;
			this.family1.alpha = 1;
			this.bone_5.alpha = 1;
		
			this.american_boldug.alpha = 1;
			this.amstaf.alpha = 1;
			this.koli.alpha = 1;
			this.bust.alpha = 1;
			this.bishon.alpha = 1;
			this.bobyea.alpha = 1;
			this.boxer.alpha = 1;
			this.chinese.alpha = 1;
			this.coker.alpha = 1;
			this.british_boldug.alpha = 1;
			this.german.alpha = 1;
			this.golden.alpha = 1;
			this.labrador.alpha = 1;
			this.papylon.alpha = 1;
			this.pincher.alpha = 1;
			this.pag.alpha = 1;
			this.samyoad.alpha = 1;
			this.shalty.alpha = 1;
			this.hasky.alpha = 1;
			this.teryer.alpha = 1;
		
			disableAll.bind(this)();
			this.clean_choise.alpha = 1;
		
		
		
		}
		
		
		//קיבוע ללא ילדים 
		this.family2.addEventListener("click", ClickOverfamily2.bind(this));
		
		function ClickOverfamily2() {
			buttonClicked = 2
			fadeAll.bind(this)();
			this.category2_family.alpha = 1;
			this.family2.alpha = 1;
			this.bone_6.alpha = 1;
		
			this.chiwawa.alpha = 1;
			this.sharpey.alpha = 1;
			this.rotwiler.alpha = 1;
			this.shitzu.alpha = 1;
		
			disableAll.bind(this)();
			this.clean_choise.alpha = 1;
		
		
		
		}
		
		
		
		
		//קיבוע קטגוריית 3 - ניקיון הבית  
		//מתוקתק 
		this.clean1.addEventListener("click", ClickOverclean1.bind(this));
		
		
		function ClickOverclean1() {
			buttonClicked = 2
			fadeAll.bind(this)();
			this.category3_clean.alpha = 1;
			this.clean1.alpha = 1;
			this.bone_7.alpha = 1;
		
			this.amstaf.alpha = 1;
			this.bishon.alpha = 1;
			this.chiwawa.alpha = 1;
			this.chinese.alpha = 1;
			this.sharpey.alpha = 1;
			this.papylon.alpha = 1;
			this.teryer.alpha = 1;
			this.shitzu.alpha = 1;
		
			disableAll.bind(this)();
			this.clean_choise.alpha = 1;
		
		
		
		}
		
		//לא מתוקתק 
		this.clean2.addEventListener("click", ClickOverclean2.bind(this));
		
		
		function ClickOverclean2() {
			buttonClicked = 2
			fadeAll.bind(this)();
			this.category3_clean.alpha = 1;
			this.clean2.alpha = 1;
			this.bone_8.alpha = 1;
		
			this.american_boldug.alpha = 1;
			this.amstaf.alpha = 1;
			this.koli.alpha = 1;
			this.bust.alpha = 1;
			this.boxer.alpha = 1;
			this.coker.alpha = 1;
			this.british_boldug.alpha = 1;
			this.german.alpha = 1;
			this.golden.alpha = 1;
			this.labrador.alpha = 1;
			this.pincher.alpha = 1;
			this.pag.alpha = 1;
			this.rotwiler.alpha = 1;
			this.samyoad.alpha = 1;
			this.shalty.alpha = 1;
			this.shikuku.alpha = 1;
			this.hasky.alpha = 1;
		
			disableAll.bind(this)();
			this.clean_choise.alpha = 1;
		
		
		
		}
		
		
		
		
		//קיבוע קטגוריית 4 - זמן איכות  
		//פעם אחת 
		this.time1.addEventListener("click", ClickOvertime1.bind(this));
		
		
		function ClickOvertime1() {
			buttonClicked = 2
			fadeAll.bind(this)();
			this.category4_time.alpha = 1;
			this.time1.alpha = 1;
			this.bone_9.alpha = 1;
		
			this.sharpey.alpha = 1;
		
			disableAll.bind(this)();
			this.clean_choise.alpha = 1;
		
		
		
		}
		
		//פעמיים 
		this.time2.addEventListener("click", ClickOvertime2.bind(this));
		
		function ClickOvertime2() {
			buttonClicked = 2
			fadeAll.bind(this)();
			this.category4_time.alpha = 1;
			this.time2.alpha = 1;
			this.bone_10.alpha = 1;
		
			this.american_boldug.alpha = 1;
			this.amstaf.alpha = 1;
			this.samyoad.alpha = 1;
			this.shikuku.alpha = 1;
			this.shitzu.alpha = 1;
		
			disableAll.bind(this)();
			this.clean_choise.alpha = 1;
		
		
		}
		
		
		//שלוש פעמים 
		this.time3.addEventListener("click", ClickOvertime3.bind(this));
		
		function ClickOvertime3() {
			buttonClicked = 2
			fadeAll.bind(this)();
			this.category4_time.alpha = 1;
			this.time3.alpha = 1;
			this.bone_11.alpha = 1;
		
			this.koli.alpha = 1;
			this.bishon.alpha = 1;
			this.bobyea.alpha = 1;
			this.boxer.alpha = 1;
			this.chiwawa.alpha = 1;
			this.chinese.alpha = 1;
			this.coker.alpha = 1;
			this.golden.alpha = 1;
			this.papylon.alpha = 1;
			this.pag.alpha = 1;
			this.rotwiler.alpha = 1;
			this.samyoad.alpha = 1;
			this.hasky.alpha = 1;
			this.teryer.alpha = 1;
		
			disableAll.bind(this)();
		
		
		}
		
		
		
		
		//קיבוע קטגוריות 5 - אופי הכלב
		//רגוע
		this.ofi1.addEventListener("click", ClickOverofi1.bind(this));
		
		
		function ClickOverofi1() {
			buttonClicked = 2
			fadeAll.bind(this)();
			this.category5_ofi.alpha = 1;
			this.ofi1.alpha = 1;
			this.bone_12.alpha = 1;
		
			this.bust.alpha = 1;
			this.chinese.alpha = 1;
			this.sharpey.alpha = 1;
			this.pag.alpha = 1;
			this.hasky.alpha = 1;
			this.shitzu.alpha = 1;
		
			disableAll.bind(this)();
			this.clean_choise.alpha = 1;
		
		
		
		
		}
		
		
		//אנרגטי
		this.ofi2.addEventListener("click", ClickOverofi2.bind(this));
		
		
		function ClickOverofi2() {
			buttonClicked = 2
			fadeAll.bind(this)();
			this.category5_ofi.alpha = 1;
			this.ofi2.alpha = 1;
			this.bone_13.alpha = 1;
		
			this.american_boldug.alpha = 1;
			this.amstaf.alpha = 1;
			this.koli.alpha = 1;
			this.bishon.alpha = 1;
			this.bobyea.alpha = 1;
			this.boxer.alpha = 1;
			this.chiwawa.alpha = 1;
			this.chinese.alpha = 1;
			this.german.alpha = 1;
			this.german.alpha = 1;
			this.golden.alpha = 1;
			this.labrador.alpha = 1;
			this.papylon.alpha = 1;
			this.pincher.alpha = 1;
			this.rotwiler.alpha = 1;
			this.samyoad.alpha = 1;
			this.shalty.alpha = 1;
			this.hasky.alpha = 1;
			this.shitzu.alpha = 1;
		
			disableAll.bind(this)();
			this.clean_choise.alpha = 1;
		
		
		}
		
		
		
		
		//קל לאילוף
		this.ofi3.addEventListener("click", ClickOverofi3.bind(this));
		
		
		function ClickOverofi3() {
			buttonClicked = 2
			fadeAll.bind(this)();
			this.category5_ofi.alpha = 1;
			this.ofi3.alpha = 1;
		
			this.bone_14.alpha = 1;
		
			this.american_boldug.alpha = 1;
			this.amstaf.alpha = 1;
			this.bishon.alpha = 1;
			this.bobyea.alpha = 1;
			this.boxer.alpha = 1;
			this.chiwawa.alpha = 1;
			this.chinese.alpha = 1;
			this.sharpey.alpha = 1;
			this.sharpey.alpha = 1;
			this.british_boldug.alpha = 1;
			this.german.alpha = 1;
			this.golden.alpha = 1;
			this.labrador.alpha = 1;
			this.papylon.alpha = 1;
			this.pincher.alpha = 1;
			this.pag.alpha = 1;
			this.rotwiler.alpha = 1;
			this.samyoad.alpha = 1;
			this.shalty.alpha = 1;
			this.shikuku.alpha = 1;
			this.shitzu.alpha = 1;
			this.shitzu.alpha = 1;
		
			disableAll.bind(this)();
			this.clean_choise.alpha = 1;
		
		}
		
		
		
		//רועש
		this.ofi4.addEventListener("click", ClickOverofi4.bind(this));
		
		
		function ClickOverofi4() {
			buttonClicked = 2
			fadeAll.bind(this)();
			this.category5_ofi.alpha = 1;
			this.ofi4.alpha = 1;
			this.bone_15.alpha = 1;
		
			this.amstaf.alpha = 1;
			this.koli.alpha = 1;
			this.bust.alpha = 1;
			this.bobyea.alpha = 1;
			this.chiwawa.alpha = 1;
			this.british_boldug.alpha = 1;
			this.german.alpha = 1;
			this.labrador.alpha = 1;
			this.papylon.alpha = 1;
			this.pincher.alpha = 1;
			this.samyoad.alpha = 1;
			this.shalty.alpha = 1;
		
			disableAll.bind(this)();
			this.clean_choise.alpha = 1;
		
		
		}
		
		
		
		//כלב שמירה 
		this.ofi5.addEventListener("click", ClickOverofi5.bind(this));
		
		
		function ClickOverofi5() {
			buttonClicked = 2
			fadeAll.bind(this)();
			this.category5_ofi.alpha = 1;
			this.ofi5.alpha = 1;
			this.bone_16.alpha = 1;
		
			this.american_boldug.alpha = 1;
			this.amstaf.alpha = 1;
			this.bobyea.alpha = 1;
			this.boxer.alpha = 1;
			this.sharpey.alpha = 1;
			this.british_boldug.alpha = 1;
			this.german.alpha = 1;
			this.rotwiler.alpha = 1;
			this.shalty.alpha = 1;
			this.shikuku.alpha = 1;
		
			disableAll.bind(this)();
			this.clean_choise.alpha = 1;
		
		
		}
		
		
		
		//קיבוע קטגוריית 6 - גודל הכלב
		//קטן
		this.size1.addEventListener("click", ClickOverosize1.bind(this));
		
		
		function ClickOverosize1() {
			buttonClicked = 2
			fadeAll.bind(this)();
			this.category6_size.alpha = 1;
			this.size1.alpha = 1;
			this.bone_17.alpha = 1;
		
			this.bishon.alpha = 1;
			this.chiwawa.alpha = 1;
			this.chinese.alpha = 1;
			this.pag.alpha = 1;
			this.pincher.alpha = 1;
			this.papylon.alpha = 1;
			this.shalty.alpha = 1;
			this.shitzu.alpha = 1;
		
			disableAll.bind(this)();
			this.clean_choise.alpha = 1;
		
		}
		
		
		//בינוני
		this.size2.addEventListener("click", ClickOverosize2.bind(this));
		function ClickOverosize2() {
			buttonClicked = 2
			fadeAll.bind(this)();
			this.category6_size.alpha = 1;
			this.size2.alpha = 1;
			this.bone_18.alpha = 1;
		
			this.american_boldug.alpha = 1;
			this.amstaf.alpha = 1;
			this.koli.alpha = 1;
			this.bust.alpha = 1;
			this.boxer.alpha = 1;
			this.sharpey.alpha = 1;
			this.coker.alpha = 1;
			this.british_boldug.alpha = 1;
			this.german.alpha = 1;
			this.golden.alpha = 1;
			this.labrador.alpha = 1;
			this.rotwiler.alpha = 1;
			this.samyoad.alpha = 1;
			this.shikuku.alpha = 1;
			this.hasky.alpha = 1;
			this.teryer.alpha = 1;
		
			disableAll.bind(this)();
			this.clean_choise.alpha = 1;
		
		}
		
		
		//גדול
		this.size3.addEventListener("click", ClickOverosize3.bind(this));
		function ClickOverosize3() {
			buttonClicked = 2
			fadeAll.bind(this)();
			this.category6_size.alpha = 1;
			this.size3.alpha = 1;
			this.bone_19.alpha = 1;
		
			this.american_boldug.alpha = 1;
			this.bobyea.alpha = 1;
			this.boxer.alpha = 1;
			this.german.alpha = 1;
			this.golden.alpha = 1;
			this.rotwiler.alpha = 1;
		
			disableAll.bind(this)();
			this.clean_choise.alpha = 1;
		
		}
		
		
		
		//נקה בחירה
		
		this.clean_choise.addEventListener("click", ClickOverCleanChoise.bind(this));
		
		function ClickOverCleanChoise() {
			showAll.bind(this)();
			hideBones.bind(this)();
		    buttonClicked = 3;
			enableAll.bind(this)();
			this.clean_choise.alpha = 0;
		
		
		}
		
		
		
		//קליק פופ אפ כלבים
		//אמסטף
		this.amstaf.addEventListener("click", ClickOverAmstaf.bind(this));
		
		
		function ClickOverAmstaf() {
			buttonClicked = 2
		
			fadeAll.bind(this)();
		
			this.PopUpWindow.alpha = 1;
			this.ExitButton.alpha = 1;
		
			this.HeaderAmstaff.alpha = 1;
			this.AudioAmstaff.alpha = 1;
			this.TextAmstaff.alpha = 1;
		
			this.Amstaff1.alpha = 1;
			this.Amstaff2.alpha = 1;
			this.Amstaff3.alpha = 1;
			fadeAll.bind(this)();
		
			HideLogo.bind(this)();
		
			HideAllEmptyBones.bind(this)();
			this.clean_choise1.alpha = 0.1;
			disableAll.bind(this)();
		
		
		
		}
		//בוקסר
		this.boxer.addEventListener("click", ClickOverboxer.bind(this));
		
		
		function ClickOverboxer() {
			buttonClicked = 2
		
			fadeAll.bind(this)();
		
			this.PopUpWindow.alpha = 1;
			this.ExitButton.alpha = 1;
			this.HeaderBoxer.alpha = 1;
			this.TextBoxer.alpha = 1;
			this.AudioBoxer.alpha = 1;
			this.Boxer2.alpha = 1;
			this.Boxer1.alpha = 1;
			this.Boxer3.alpha = 1;
			fadeAll.bind(this)();
		
			HideLogo.bind(this)();
		
			HideAllEmptyBones.bind(this)();
			this.clean_choise1.alpha = 0.1;
			disableAll.bind(this)();
		
		
		
		}
		
		
		//בישון
		this.bishon.addEventListener("click", ClickOverbishon.bind(this));
		
		function ClickOverbishon() {
			buttonClicked = 2
		
			this.PopUpWindow.alpha = 1;
			this.ExitButton.alpha = 1;
			this.HeaderBishon.alpha = 1;
			this.TextBishon.alpha = 1;
			this.AudioBishon.alpha = 1;
			this.Bishon2.alpha = 1;
			this.Bishon1.alpha = 1;
			this.Bishon3.alpha = 1;
		
			HideLogo.bind(this)();
			fadeAll.bind(this)();
		
			HideAllEmptyBones.bind(this)();
			this.clean_choise1.alpha = 0.1;
			disableAll.bind(this)();
		
		
		
		}
		
		//ציוואוה
		this.chiwawa.addEventListener("click", ClickOverchiwawa.bind(this));
		
		
		function ClickOverchiwawa() {
			buttonClicked = 2
			this.PopUpWindow.alpha = 1;
			this.ExitButton.alpha = 1;
			this.HeaderChiwawa.alpha = 1;
			this.TextChiwawa.alpha = 1;
			this.AudioChiwawa.alpha = 1;
			this.Chiwawa2.alpha = 1;
			this.Chiwawa1.alpha = 1;
			this.Chiwawa3.alpha = 1;
			fadeAll.bind(this)();
		
			HideLogo.bind(this)();
			HideAllEmptyBones.bind(this)();
			this.clean_choise1.alpha = 0.1;
			disableAll.bind(this)();
		
		
		
		}
		
		//שרפיי
		this.sharpey.addEventListener("click", ClickOversharpey.bind(this));
		
		
		function ClickOversharpey() {
			buttonClicked = 2
			this.PopUpWindow.alpha = 1;
			this.ExitButton.alpha = 1;
			this.HeaderSharpey.alpha = 1;
			this.TextSharpey.alpha = 1;
			this.AudioSharpey.alpha = 1;
			this.Sharpey2.alpha = 1;
			this.Sharpey1.alpha = 1;
			this.Sharpey3.alpha = 1;
			HideLogo.bind(this)();
		
			fadeAll.bind(this)();
		
			HideAllEmptyBones.bind(this)();
			this.clean_choise1.alpha = 0.1;
			disableAll.bind(this)();
		
		
		
		}
		//הצגה והסתרה של אלמנטים בסטייג'
		this.Logo.alpha = 1;
		this.Header1.alpha = 1;
		this.Header2.alpha = 1;
		this.Icon3.alpha = 1;
		this.Icon1.alpha = 1;
		this.Icon2.alpha = 1;
		this.Icon4.alpha = 1;
		this.clean_choise1.alpha = 1;
		
		
		
		function ShowLogo() {
			this.Logo.alpha = 1;
			this.Header1.alpha = 1;
			this.Header2.alpha = 1;
			this.Icon3.alpha = 1;
			this.Icon1.alpha = 1;
			this.Icon2.alpha = 1;
			this.Icon4.alpha = 1;
			this.clean_choise1.alpha = 1;
		
		}
		
		function HideLogo() {
			this.Logo.alpha = 0.1;
			this.Header1.alpha = 0.1;
			this.Header2.alpha = 0.1;
			this.Icon3.alpha = 0.1;
			this.Icon1.alpha = 0.1;
			this.Icon2.alpha = 0.1;
			this.Icon4.alpha = 0.1;
			this.clean_choise1.alpha = 0.1;
		
		}
		
		
		
		this.ExitButton.addEventListener("click", ClickOverExitButton.bind(this));
		
		function ClickOverExitButton() {
			HideAllPopups.bind(this)();
			buttonClicked=3;
			HideAllEmptyBones.bind(this)();
			hideBones.bind(this)();
			showAll.bind(this)();
			enableAll.bind(this)()
			ShowLogo.bind(this)()
			this.clean_choise.alpha=0;
		}
		
		
		//הסתר תמונות גדולות
		this.BAmstaff1.alpha = 0;
		this.BAmstaff2.alpha = 0;
		this.BAmstaff3.alpha = 0;
		this.BSharpey2.alpha = 0;
		this.BSharpey1.alpha = 0;
		this.BSharpey3.alpha = 0;
		this.BChiwawa2.alpha = 0;
		this.BChiwawa1.alpha = 0;
		this.BChiwawa3.alpha = 0;
		this.BBishon2.alpha = 0;
		this.BBishon1.alpha = 0;
		this.BBishon3.alpha = 0;
		this.BBoxer2.alpha = 0;
		this.BBoxer1.alpha = 0;
		this.BBoxer3.alpha = 0;
		this.ExitButton_Amstaff.alpha = 0;
		this.ExitButton_Sharpey.alpha = 0;
		this.ExitButton_Chiwawa.alpha = 0;
		this.ExitButton_Bishon.alpha = 0;
		this.ExitButton_Boxer.alpha = 0;
		
		
		//פונקציית הסתרה של כל התמונות
		function hideBigPhotos() {
			this.BAmstaff1.alpha = 0;
			this.BAmstaff2.alpha = 0;
			this.BAmstaff3.alpha = 0;
			this.BSharpey2.alpha = 0;
			this.BSharpey1.alpha = 0;
			this.BSharpey3.alpha = 0;
			this.BChiwawa2.alpha = 0;
			this.BChiwawa1.alpha = 0;
			this.BChiwawa3.alpha = 0;
			this.BBishon2.alpha = 0;
			this.BBishon1.alpha = 0;
			this.BBishon3.alpha = 0;
			this.BBoxer2.alpha = 0;
			this.BBoxer1.alpha = 0;
			this.BBoxer3.alpha = 0;
			this.ExitButton_Amstaff.alpha = 0;
			this.ExitButton_Sharpey.alpha = 0;
			this.ExitButton_Chiwawa.alpha = 0;
			this.ExitButton_Bishon.alpha = 0;
			this.ExitButton_Boxer.alpha = 0;
		
		
		}
		
		//FADE תמונות
		
		this.Amstaff1.addEventListener("mouseover", fadeMouseOverAmstaff1.bind(this));
		
		
		function fadeMouseOverAmstaff1() {
			this.Amstaff1.alpha = 0.5;
		
		}
		
		this.Amstaff1.addEventListener("mouseout", fadeMouseoutAmstaff1.bind(this));
		
		
		function fadeMouseoutAmstaff1() {
			this.Amstaff1.alpha = 1;
		
		}
		
		
		this.Amstaff2.addEventListener("mouseover", fadeMouseOverAmstaff2.bind(this));
		
		
		function fadeMouseOverAmstaff2() {
			this.Amstaff2.alpha = 0.5;
		
		}
		
		this.Amstaff2.addEventListener("mouseout", fadeMouseoutAmstaff2.bind(this));
		
		
		function fadeMouseoutAmstaff2() {
			this.Amstaff2.alpha = 1;
		
		}
		
		
		this.Amstaff3.addEventListener("mouseover", fadeMouseOverAmstaff3.bind(this));
		
		
		function fadeMouseOverAmstaff3() {
			this.Amstaff3.alpha = 0.5;
		
		}
		
		this.Amstaff3.addEventListener("mouseout", fadeMouseoutAmstaff3.bind(this));
		
		
		function fadeMouseoutAmstaff3() {
			this.Amstaff3.alpha = 1;
		
		}
		
		
		this.Boxer1.addEventListener("mouseover", fadeMouseOverBoxer1.bind(this));
		
		
		function fadeMouseOverBoxer1() {
			this.Boxer1.alpha = 0.5;
		
		}
		
		this.Boxer1.addEventListener("mouseout", fadeMouseoutBoxer1.bind(this));
		
		
		function fadeMouseoutBoxer1() {
			this.Boxer1.alpha = 1;
		
		}
		
		
		this.Boxer2.addEventListener("mouseover", fadeMouseOverBoxer2.bind(this));
		
		
		function fadeMouseOverBoxer2() {
			this.Boxer2.alpha = 0.5;
		
		}
		
		this.Boxer2.addEventListener("mouseout", fadeMouseOutBoxer2.bind(this));
		
		
		function fadeMouseOutBoxer2() {
			this.Boxer2.alpha = 1;
		
		}
		
		
		
		this.Boxer3.addEventListener("mouseout", fadeMouseoutBoxer3.bind(this));
		
		
		function fadeMouseoutBoxer3() {
			this.Boxer3.alpha = 1;
		
		}
		
		this.Boxer3.addEventListener("mouseover", fadeMouseOverBoxer3.bind(this));
		
		
		function fadeMouseOverBoxer3() {
			this.Boxer3.alpha = 0.5;
		
		}
		
		
		
		
		this.Bishon1.addEventListener("mouseover", fadeMouseOverBishon1.bind(this));
		
		
		function fadeMouseOverBishon1() {
			this.Bishon1.alpha = 0.5;
		
		}
		
		
		this.Bishon1.addEventListener("mouseout", fadeMouseoutBishon1.bind(this));
		
		
		function fadeMouseoutBishon1() {
			this.Bishon1.alpha = 1;
		
		}
		
		
		this.Bishon2.addEventListener("mouseover", fadeMouseOverBishon2.bind(this));
		
		
		function fadeMouseOverBishon2() {
			this.Bishon2.alpha = 0.5;
		
		}
		
		this.Bishon2.addEventListener("mouseout", fadeMouseoutBishon2.bind(this));
		
		
		function fadeMouseoutBishon2() {
			this.Bishon2.alpha = 1;
		
		}
		
		
		this.Bishon3.addEventListener("mouseover", fadeMouseOverBishon3.bind(this));
		
		
		function fadeMouseOverBishon3() {
			this.Bishon3.alpha = 0.5;
		
		}
		
		this.Bishon3.addEventListener("mouseout", fadeMouseoutBishon3.bind(this));
		
		
		function fadeMouseoutBishon3() {
			this.Bishon3.alpha = 1;
		
		}
		
		
		this.Sharpey1.addEventListener("mouseover", fadeMouseOverSharpey1.bind(this));
		
		
		function fadeMouseOverSharpey1() {
			this.Sharpey1.alpha = 0.5;
		
		}
		
		
		this.Sharpey1.addEventListener("mouseout", fadeMouseoutSharpey1.bind(this));
		
		
		function fadeMouseoutSharpey1() {
			this.Sharpey1.alpha = 1;
		
		}
		
		
		this.Sharpey2.addEventListener("mouseout", fadeMouseoutSharpey2.bind(this));
		
		
		function fadeMouseoutSharpey2() {
			this.Sharpey2.alpha = 1;
		
		}
		
		
		this.Sharpey2.addEventListener("mouseover", fadeMouseOverSharpey2.bind(this));
		
		
		function fadeMouseOverSharpey2() {
			this.Sharpey2.alpha = 0.5;
		
		}
		
		
		this.Sharpey3.addEventListener("mouseout", fadeMouseoutSharpey3.bind(this));
		
		
		function fadeMouseoutSharpey3() {
			this.Sharpey3.alpha = 1;
		
		}
		
		
		
		this.Sharpey3.addEventListener("mouseover", fadeMouseOverSharpey3.bind(this));
		
		
		function fadeMouseOverSharpey3() {
			this.Sharpey3.alpha = 0.5;
		
		}
		
		this.Chiwawa1.addEventListener("mouseover", fadeMouseOverChiwawa1.bind(this));
		
		
		function fadeMouseOverChiwawa1() {
			this.Chiwawa1.alpha = 0.5;
		
		}
		
		
		
		this.Chiwawa1.addEventListener("mouseout", fadeMouseoutChiwawa1.bind(this));
		
		
		function fadeMouseoutChiwawa1() {
			this.Chiwawa1.alpha = 1;
		
		}
		
		
		this.Chiwawa2.addEventListener("mouseover", fadeMouseOverChiwawa2.bind(this));
		
		
		function fadeMouseOverChiwawa2() {
			this.Chiwawa2.alpha = 0.5;
		
		}
		
		
		this.Chiwawa2.addEventListener("mouseout", fadeMouseoutChiwawa2.bind(this));
		
		
		function fadeMouseoutChiwawa2() {
			this.Chiwawa2.alpha = 1;
		
		}
		
		this.Chiwawa3.addEventListener("mouseover", fadeMouseOverChiwawa3.bind(this));
		
		
		function fadeMouseOverChiwawa3() {
			this.Chiwawa3.alpha = 0.5;
		
		}
		
		
		
		this.Chiwawa3.addEventListener("mouseout", fadeMouseoutChiwawa3.bind(this));
		
		
		function fadeMouseoutChiwawa3() {
			this.Chiwawa3.alpha = 1;
		
		}
		
		
		
		
		//יציאה מתמונה גדולה של אמסטף
		this.ExitButton_Amstaff.addEventListener("click", ClickOverExitButtonamstaff.bind(this));
		function ClickOverExitButtonamstaff() {
			hideBigPhotos.bind(this)();
			disableAll.bind(this)();
		
		
		
		}
		
		
		//יציאה מתמונה גדולה של שרפיי
		this.ExitButton_Sharpey.addEventListener("click", ClickOverExitButtonSharpey.bind(this));
		function ClickOverExitButtonSharpey() {
			hideBigPhotos.bind(this)();
			disableAll.bind(this)();
		
		
		
		}
		
		
		//יציאה מתמונה גדולה של ציוואווה
		this.ExitButton_Chiwawa.addEventListener("click", ClickOverExitButtonChiwawa.bind(this));
		function ClickOverExitButtonChiwawa() {
			hideBigPhotos.bind(this)();
			disableAll.bind(this)();
		
		
		
		}
		
		
		//יציאה מתמונה גדולה של בישון
		this.ExitButton_Bishon.addEventListener("click", ClickOverExitButtonBishon.bind(this));
		function ClickOverExitButtonBishon() {
			hideBigPhotos.bind(this)();
			disableAll.bind(this)();
		
		
		
		}
		
		
		//יציאה מתמונה גדולה של בוקסר
		this.ExitButton_Boxer.addEventListener("click", ClickOverExitButtonBoxer.bind(this));
		function ClickOverExitButtonBoxer() {
			hideBigPhotos.bind(this)();
			disableAll.bind(this)();
		
		
		}
		
		
		//לחיצה על תמונה להגדלה
		//הגדלה תמונת אמסטף 1
		this.Amstaff1.addEventListener("click", ClickOveramstaff1.bind(this));
		function ClickOveramstaff1() {
			this.BAmstaff1.alpha = 1;
			this.ExitButton_Amstaff.alpha = 1;
		
			disableAll.bind(this)();
		
		}
		
		
		//הגדלה תמונת אמסטף 2
		this.Amstaff2.addEventListener("click", ClickOveramstaff2.bind(this));
		function ClickOveramstaff2() {
			this.BAmstaff2.alpha = 1;
			this.ExitButton_Amstaff.alpha = 1;
		
			disableAll.bind(this)();
		
		
		}
		//הגדלה תמונת אמסטף 3
		this.Amstaff3.addEventListener("click", ClickOveramstaff3.bind(this));
		function ClickOveramstaff3() {
			this.BAmstaff3.alpha = 1;
			this.ExitButton_Amstaff.alpha = 1;
		
			disableAll.bind(this)();
		
		
		}
		
		//הגדלה תמונת שרפיי 1
		this.Sharpey1.addEventListener("click", ClickOverSharpey1.bind(this));
		function ClickOverSharpey1() {
			this.BSharpey1.alpha = 1;
			this.ExitButton_Sharpey.alpha = 1;
		
			disableAll.bind(this)();
		
		
		}
		//הגדלה תמונת שרפיי 2
		this.Sharpey2.addEventListener("click", ClickOverSharpey2.bind(this));
		function ClickOverSharpey2() {
			this.BSharpey2.alpha = 1;
			this.ExitButton_Sharpey.alpha = 1;
		
			disableAll.bind(this)();
		
		
		}
		//הגדלה תמונת שרפיי 3
		this.Sharpey3.addEventListener("click", ClickOverSharpey3.bind(this));
		function ClickOverSharpey3() {
			this.BSharpey3.alpha = 1;
			this.ExitButton_Sharpey.alpha = 1;
		
			disableAll.bind(this)();
		
		
		}
		//הגדלה תמונת ציוואווה 1
		this.Chiwawa1.addEventListener("click", ClickOverChiwawa1.bind(this));
		function ClickOverChiwawa1() {
			this.BChiwawa1.alpha = 1;
		
			this.ExitButton_Chiwawa.alpha = 1;
		
			disableAll.bind(this)();
		
		
		
		}
		
		//הגדלה תמונת ציוואווה 2
		this.Chiwawa2.addEventListener("click", ClickOverChiwawa2.bind(this));
		function ClickOverChiwawa2() {
			this.BChiwawa2.alpha = 1;
		
			this.ExitButton_Chiwawa.alpha = 1;
		
			disableAll.bind(this)();
		
		
		}
		//הגדלה תמונת ציוואווה 3
		this.Chiwawa3.addEventListener("click", ClickOverChiwawa3.bind(this));
		function ClickOverChiwawa3() {
			this.BChiwawa3.alpha = 1;
		
			this.ExitButton_Chiwawa.alpha = 1;
		
			disableAll.bind(this)();
		
		
		}
		//דלה תמונת בישון 1
		this.Bishon1.addEventListener("click", ClickOverBishon1.bind(this));
		function ClickOverBishon1() {
			this.BBishon1.alpha = 1;
		
			this.ExitButton_Bishon.alpha = 1;
		
			disableAll.bind(this)();
		
		
		}
		//דלה תמונת בישון 2
		this.Bishon2.addEventListener("click", ClickOverBishon2.bind(this));
		function ClickOverBishon2() {
			this.BBishon2.alpha = 1;
		
			this.ExitButton_Bishon.alpha = 1;
		
			disableAll.bind(this)();
		
		
		}
		//דלה תמונת בישון 3
		this.Bishon3.addEventListener("click", ClickOverBishon3.bind(this));
		function ClickOverBishon3() {
			this.BBishon3.alpha = 1;
		
			this.ExitButton_Bishon.alpha = 1;
		
			disableAll.bind(this)();
		
		
		}
		//דלה תמונת בוקסר 1
		this.Boxer1.addEventListener("click", ClickOverBoxer1.bind(this));
		function ClickOverBoxer1() {
			this.BBoxer1.alpha = 1;
		
			this.ExitButton_Boxer.alpha = 1;
		
			disableAll.bind(this)();
		
		}
		//דלה תמונת בוקסר 2
		this.Boxer2.addEventListener("click", ClickOverBoxer2.bind(this));
		function ClickOverBoxer2() {
			this.BBoxer2.alpha = 1;
		
			this.ExitButton_Boxer.alpha = 1;
		
			disableAll.bind(this)();
		
		
		}
		//דלה תמונת בוקסר 3
		this.Boxer3.addEventListener("click", ClickOverBoxer3.bind(this));
		function ClickOverBoxer3() {
			this.BBoxer3.alpha = 1;
		
			this.ExitButton_Boxer.alpha = 1;
		
			disableAll.bind(this)();
		
		
		}
		//סאונד כלבים
		
		//סאונד בוקסר
		this.AudioBoxer.addEventListener("click", PlayAudioBoxer.bind(this));
		function PlayAudioBoxer() {
		
			//Playing an audio file (with linkage name 'audio1' )
			if (!this.s1)
				this.s1 = playSound("AudioBoxer");
			else
				this.s1.play();
		
		}
		
		//סאונד בישון
		this.AudioBishon.addEventListener("click", PlayAudioBishon.bind(this));
		function PlayAudioBishon() {
		
			//Playing an audio file (with linkage name 'audio1' )
			if (!this.s2)
				this.s2 = playSound("AudioBishon");
			else
				this.s2.play();
		
		}
		
		//סאונד שרפיי
		this.AudioSharpey.addEventListener("click", PlayAudioSharpey.bind(this));
		function PlayAudioSharpey() {
		
			//Playing an audio file (with linkage name 'audio1' )
			if (!this.s3)
				this.s3 = playSound("AudioSharpey");
			else
				this.s3.play();
		
		}
		
		//סאונד אמסטף
		
		this.AudioAmstaff.addEventListener("click", PlayAudioAmstaff.bind(this));
		function PlayAudioAmstaff() {
		
			//Playing an audio file (with linkage name 'audio1' )
			if (!this.s4)
				this.s4 = playSound("AudioAmstaff");
			else
				this.s4.play();
		
		}
		
		//סאונד ציוואוה
		
		this.AudioChiwawa.addEventListener("click", PlayAudioChiwawa.bind(this));
		function PlayAudioChiwawa() {
		
			//Playing an audio file (with linkage name 'audio1' )
			if (!this.s5)
				this.s5 = playSound("AudioChiwawa");
			else
				this.s5.play();
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// ExitChiwawa
	this.ExitButton_Chiwawa = new lib.ExitButton_Boxer();
	this.ExitButton_Chiwawa.parent = this;
	this.ExitButton_Chiwawa.setTransform(683.2,158,0.829,0.837,0,0,0,-9.8,0.1);
	new cjs.ButtonHelper(this.ExitButton_Chiwawa, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.ExitButton_Chiwawa).wait(1));

	// ExitBishon
	this.ExitButton_Bishon = new lib.ExitButton_Boxer();
	this.ExitButton_Bishon.parent = this;
	this.ExitButton_Bishon.setTransform(657.2,202.6,0.829,0.837);
	new cjs.ButtonHelper(this.ExitButton_Bishon, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.ExitButton_Bishon).wait(1));

	// ExitAmstaf
	this.ExitButton_Amstaff = new lib.ExitButton_Boxer();
	this.ExitButton_Amstaff.parent = this;
	this.ExitButton_Amstaff.setTransform(669.4,163.4,0.829,0.837);
	new cjs.ButtonHelper(this.ExitButton_Amstaff, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.ExitButton_Amstaff).wait(1));

	// ExitSharpey
	this.ExitButton_Sharpey = new lib.ExitButton_Boxer();
	this.ExitButton_Sharpey.parent = this;
	this.ExitButton_Sharpey.setTransform(679.2,178.1,0.829,0.837);
	new cjs.ButtonHelper(this.ExitButton_Sharpey, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.ExitButton_Sharpey).wait(1));

	// ExitBoxer
	this.ExitButton_Boxer = new lib.ExitButton_Boxer();
	this.ExitButton_Boxer.parent = this;
	this.ExitButton_Boxer.setTransform(681.7,170.7,0.829,0.837);
	new cjs.ButtonHelper(this.ExitButton_Boxer, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.ExitButton_Boxer).wait(1));

	// BigChiwaw3
	this.BChiwawa3 = new lib.Chiwawa3();
	this.BChiwawa3.parent = this;
	this.BChiwawa3.setTransform(439.1,355.3,4.165,3.878,0,0,0,0.3,0.3);
	new cjs.ButtonHelper(this.BChiwawa3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.BChiwawa3).wait(1));

	// BigChiwaw2
	this.BChiwawa2 = new lib.Chiwawa2();
	this.BChiwawa2.parent = this;
	this.BChiwawa2.setTransform(440.4,348.6,0.907,1.05,0,0,0,0.1,0.2);
	new cjs.ButtonHelper(this.BChiwawa2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.BChiwawa2).wait(1));

	// BigChiwawa1
	this.BChiwawa1 = new lib.Chiwawa1();
	this.BChiwawa1.parent = this;
	this.BChiwawa1.setTransform(452.7,514.9,4.07,4.07,0,0,0,1.9,36.8);
	new cjs.ButtonHelper(this.BChiwawa1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.BChiwawa1).wait(1));

	// BigAmstaff3
	this.BAmstaff3 = new lib.BAmstaff3();
	this.BAmstaff3.parent = this;
	this.BAmstaff3.setTransform(428.3,311.5,0.918,0.826);

	this.timeline.addTween(cjs.Tween.get(this.BAmstaff3).wait(1));

	// BigAmstaff2
	this.BAmstaff2 = new lib.Amstaff2();
	this.BAmstaff2.parent = this;
	this.BAmstaff2.setTransform(440.5,353.2,4.005,3.845,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.BAmstaff2).wait(1));

	// BigAmstaff1
	this.BAmstaff1 = new lib.Amstaff1();
	this.BAmstaff1.parent = this;
	this.BAmstaff1.setTransform(437.9,368.5,3.777,3.917,0,0,0,0.1,0.4);

	this.timeline.addTween(cjs.Tween.get(this.BAmstaff1).wait(1));

	// BigSharpey3
	this.BSharpey3 = new lib.Sharpey3();
	this.BSharpey3.parent = this;
	this.BSharpey3.setTransform(435.3,355.1,3.907,3.649,0,0,0,0.3,0.3);
	new cjs.ButtonHelper(this.BSharpey3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.BSharpey3).wait(1));

	// BigSharpey2
	this.BSharpey2 = new lib.Sharpey2();
	this.BSharpey2.parent = this;
	this.BSharpey2.setTransform(433.9,368.6,3.904,3.904,0,0,0,0.1,0.2);
	new cjs.ButtonHelper(this.BSharpey2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.BSharpey2).wait(1));

	// BigSharpey1
	this.BSharpey1 = new lib.BSharpey1();
	this.BSharpey1.parent = this;
	this.BSharpey1.setTransform(434.8,357.8,0.857,1.021,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.BSharpey1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.BSharpey1).wait(1));

	// BigBoxer3
	this.BBoxer3 = new lib.Boxer3();
	this.BBoxer3.parent = this;
	this.BBoxer3.setTransform(436.8,368.8,3.918,3.996,0,0,0,0.5,0.4);

	this.timeline.addTween(cjs.Tween.get(this.BBoxer3).wait(1));

	// BigBoxer2
	this.BBoxer2 = new lib.Boxer2();
	this.BBoxer2.parent = this;
	this.BBoxer2.setTransform(435.8,360.9,3.867,3.797,0,0,0,0.2,0.3);

	this.timeline.addTween(cjs.Tween.get(this.BBoxer2).wait(1));

	// BigBoxer1
	this.BBoxer1 = new lib.Boxer1();
	this.BBoxer1.parent = this;
	this.BBoxer1.setTransform(438,364.4,0.859,0.859);

	this.timeline.addTween(cjs.Tween.get(this.BBoxer1).wait(1));

	// BigBishon3
	this.BBishon3 = new lib.BBishon3();
	this.BBishon3.parent = this;
	this.BBishon3.setTransform(439.4,339.7);
	new cjs.ButtonHelper(this.BBishon3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.BBishon3).wait(1));

	// BigBishon2
	this.BBishon2 = new lib.bishon2();
	this.BBishon2.parent = this;
	this.BBishon2.setTransform(438.2,384.1,3.528,3.607,0,0,0,0.3,0.3);
	new cjs.ButtonHelper(this.BBishon2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.BBishon2).wait(1));

	// BigBishon1
	this.BBishon1 = new lib.BBishon1();
	this.BBishon1.parent = this;
	this.BBishon1.setTransform(433.1,367.2,0.847,0.834,0,0,0,0.2,0.2);
	new cjs.ButtonHelper(this.BBishon1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.BBishon1).wait(1));

	// chiwawa
	this.Chiwawa3 = new lib.Chiwawa3();
	this.Chiwawa3.parent = this;
	this.Chiwawa3.setTransform(615,535);
	new cjs.ButtonHelper(this.Chiwawa3, 0, 1, 1);

	this.Chiwawa2 = new lib.Chiwawa2();
	this.Chiwawa2.parent = this;
	this.Chiwawa2.setTransform(451.5,535.1,0.216,0.278,0,0,0,0,0.2);
	new cjs.ButtonHelper(this.Chiwawa2, 0, 1, 1);

	this.Chiwawa1 = new lib.Chiwawa1();
	this.Chiwawa1.parent = this;
	this.Chiwawa1.setTransform(288,535);
	new cjs.ButtonHelper(this.Chiwawa1, 0, 1, 1);

	this.AudioChiwawa = new lib.AudioAmstaff_1();
	this.AudioChiwawa.parent = this;
	this.AudioChiwawa.setTransform(373.1,159.1);
	new cjs.ButtonHelper(this.AudioChiwawa, 0, 1, 1);

	this.TextChiwawa = new cjs.Text(".צ'יוואוואה הוא כלב קטן, תוסס ולא דומיננטי\n הוא גזע הכלבים הקטן ביותר בעולם, הוא אינו זקוק לפעילות ספורטיבית עצימה אלא ריצה והשתובבות בבית מספיקות להוצאת .האנרגיה של הצ'יוואוואה\nכלב הצ'יוואוואה לא סבלן, העדיפות היא לגדל אותו לצד ילדים גדולים ולא לצד ילדים קטנים/תינוקות. כלב הצ'יוואוואה אידיאלי .לגידול בדירה\n\nגובה ממוצע של כלב בוגר: 18 ס\"מ \nמשקל ממוצע של כלב בוגר: 2 ק\"ג", "16px 'Gisha'");
	this.TextChiwawa.name = "TextChiwawa";
	this.TextChiwawa.textAlign = "right";
	this.TextChiwawa.lineHeight = 22;
	this.TextChiwawa.lineWidth = 428;
	this.TextChiwawa.parent = this;
	this.TextChiwawa.setTransform(655.3,227.7);

	this.HeaderChiwawa = new cjs.Text("צ'יוואוואה\nChihuahua", "bold 22px 'Gisha'");
	this.HeaderChiwawa.name = "HeaderChiwawa";
	this.HeaderChiwawa.textAlign = "center";
	this.HeaderChiwawa.lineHeight = 28;
	this.HeaderChiwawa.lineWidth = 181;
	this.HeaderChiwawa.parent = this;
	this.HeaderChiwawa.setTransform(447.4,133.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.HeaderChiwawa},{t:this.TextChiwawa},{t:this.AudioChiwawa},{t:this.Chiwawa1},{t:this.Chiwawa2},{t:this.Chiwawa3}]}).wait(1));

	// Sharpey
	this.Sharpey3 = new lib.Sharpey3();
	this.Sharpey3.parent = this;
	this.Sharpey3.setTransform(630,536);
	new cjs.ButtonHelper(this.Sharpey3, 0, 1, 1);

	this.Sharpey2 = new lib.Sharpey2();
	this.Sharpey2.parent = this;
	this.Sharpey2.setTransform(455,536);
	new cjs.ButtonHelper(this.Sharpey2, 0, 1, 1);

	this.Sharpey1 = new lib.Sharpey1();
	this.Sharpey1.parent = this;
	this.Sharpey1.setTransform(284,536);
	new cjs.ButtonHelper(this.Sharpey1, 0, 1, 1);

	this.AudioSharpey = new lib.AudioAmstaff_1();
	this.AudioSharpey.parent = this;
	this.AudioSharpey.setTransform(373.1,146.9);
	new cjs.ButtonHelper(this.AudioSharpey, 0, 1, 1);

	this.TextSharpey = new cjs.Text("כלבי השר פיי הם כלבים בגודל בינוני, גבוהים ובעלי מראה מעט .מרתיע\n.כלב זה נקי מאוד מלבד הנטייה שלו להזיל ריר\nכלבי השר פיי מאוד חברותיים כלפי בני משפחתם וממש לא .ידידותיים כלפי זרים\n\nגובה ממוצע של כלב בוגר: 49 ס\"מ \nמשקל ממוצע של כלב בוגר: 20 ק\"ג", "16px 'Gisha'");
	this.TextSharpey.name = "TextSharpey";
	this.TextSharpey.textAlign = "right";
	this.TextSharpey.lineHeight = 22;
	this.TextSharpey.lineWidth = 428;
	this.TextSharpey.parent = this;
	this.TextSharpey.setTransform(655.3,227.7);

	this.HeaderSharpey = new cjs.Text("שר פיי \nChinese Shar-Peis", "bold 22px 'Gisha'");
	this.HeaderSharpey.name = "HeaderSharpey";
	this.HeaderSharpey.textAlign = "center";
	this.HeaderSharpey.lineHeight = 28;
	this.HeaderSharpey.lineWidth = 197;
	this.HeaderSharpey.parent = this;
	this.HeaderSharpey.setTransform(439.4,133.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.HeaderSharpey},{t:this.TextSharpey},{t:this.AudioSharpey},{t:this.Sharpey1},{t:this.Sharpey2},{t:this.Sharpey3}]}).wait(1));

	// Bishon
	this.Bishon3 = new lib.Bishon3();
	this.Bishon3.parent = this;
	this.Bishon3.setTransform(615,535.5);
	new cjs.ButtonHelper(this.Bishon3, 0, 1, 1);

	this.Bishon2 = new lib.bishon2();
	this.Bishon2.parent = this;
	this.Bishon2.setTransform(449.5,535);
	new cjs.ButtonHelper(this.Bishon2, 0, 1, 1);

	this.Bishon1 = new lib.Bishon1();
	this.Bishon1.parent = this;
	this.Bishon1.setTransform(284,553.2,1,1,0,0,0,0,17.2);
	new cjs.ButtonHelper(this.Bishon1, 0, 1, 1);

	this.AudioBishon = new lib.AudioAmstaff_1();
	this.AudioBishon.parent = this;
	this.AudioBishon.setTransform(361.1,159.1);
	new cjs.ButtonHelper(this.AudioBishon, 0, 1, 1);

	this.TextBishon = new cjs.Text(".הבישון פריזה הוא כלב קטן וידידותי בעל פרווה מתולתלת וסמיכה\nגזע זה הוא בין היחידים המתאים לילדים בכל הגילאים וגם עם .מבוגרים, הוא מאוד אוהב להיות בחיק הבעלים ולאהוב אותם\nבישון פריזה בעל נטייה נמוכה לנשירה ולכן טוב לאנשים בעלי .חשיבות רבה לניקיון ומתאים לסובלים מאלרגיה\n\nגובה ממוצע של כלב בוגר: 23-30 ס\"מ\nמשקל ממוצע של כלב בוגר: 3-7 ק\"ג", "16px 'Gisha'");
	this.TextBishon.name = "TextBishon";
	this.TextBishon.textAlign = "right";
	this.TextBishon.lineHeight = 22;
	this.TextBishon.lineWidth = 428;
	this.TextBishon.parent = this;
	this.TextBishon.setTransform(655.3,227.7);

	this.HeaderBishon = new cjs.Text("בישון פריזה\nBichon Frises", "bold 22px 'Gisha'");
	this.HeaderBishon.name = "HeaderBishon";
	this.HeaderBishon.textAlign = "center";
	this.HeaderBishon.lineHeight = 28;
	this.HeaderBishon.lineWidth = 181;
	this.HeaderBishon.parent = this;
	this.HeaderBishon.setTransform(447.4,133.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.HeaderBishon},{t:this.TextBishon},{t:this.AudioBishon},{t:this.Bishon1},{t:this.Bishon2},{t:this.Bishon3}]}).wait(1));

	// Boxer
	this.Boxer3 = new lib.Boxer3();
	this.Boxer3.parent = this;
	this.Boxer3.setTransform(630,536);
	new cjs.ButtonHelper(this.Boxer3, 0, 1, 1);

	this.Boxer2 = new lib.Boxer2();
	this.Boxer2.parent = this;
	this.Boxer2.setTransform(456,536);
	new cjs.ButtonHelper(this.Boxer2, 0, 1, 1);

	this.Boxer1 = new lib.Boxer1();
	this.Boxer1.parent = this;
	this.Boxer1.setTransform(274.5,533.3,0.221,0.221,0,0,0,0,0.3);
	new cjs.ButtonHelper(this.Boxer1, 0, 1, 1);

	this.AudioBoxer = new lib.AudioAmstaff_1();
	this.AudioBoxer.parent = this;
	this.AudioBoxer.setTransform(373.1,159.1);
	new cjs.ButtonHelper(this.AudioBoxer, 0, 1, 1);

	this.TextBoxer = new cjs.Text("הבוקסר הינו כלב גדול, המהווה כלב שמירה מטבעו. כלב שמח, אוהב .משחק, אנרגטי ותחרותי\nחשוב מאוד להוציא אותו להליכות ארוכות על בסיס יום-יומי, הם .זקוקים לפעילות גופנית (לדוגמא ריצות יחד עם הבעלים)\nכלב הבוקסר יעדיף סביבת חצר, כמו בית פרטי עם חצר (אך עם גדר בטוחה). אפשרי לנסות בניין מגורים בעיר – אך עדיף לצד פארק .סמוך, שיוכל לפרוק את האנרגיות שלו\n.הבוקסר הינו ידידותי לילדים, משחק ומגונן. נחשב ככלב משפחה\n\nגובה ממוצע של כלב בוגר: 53-63 ס\"מ\nמשקל ממוצע של כלב בוגר: 25-32 ק\"ג", "16px 'Gisha'");
	this.TextBoxer.name = "TextBoxer";
	this.TextBoxer.textAlign = "right";
	this.TextBoxer.lineHeight = 22;
	this.TextBoxer.lineWidth = 428;
	this.TextBoxer.parent = this;
	this.TextBoxer.setTransform(655.3,227.7);

	this.HeaderBoxer = new cjs.Text("בוקסר\nBoxer", "bold 22px 'Gisha'");
	this.HeaderBoxer.name = "HeaderBoxer";
	this.HeaderBoxer.textAlign = "center";
	this.HeaderBoxer.lineHeight = 28;
	this.HeaderBoxer.lineWidth = 181;
	this.HeaderBoxer.parent = this;
	this.HeaderBoxer.setTransform(447.4,133.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.HeaderBoxer},{t:this.TextBoxer},{t:this.AudioBoxer},{t:this.Boxer1},{t:this.Boxer2},{t:this.Boxer3}]}).wait(1));

	// Amstaff
	this.Amstaff3 = new lib.BAmstaff3();
	this.Amstaff3.parent = this;
	this.Amstaff3.setTransform(636.6,535,0.221,0.265);
	new cjs.ButtonHelper(this.Amstaff3, 0, 1, 1);

	this.Amstaff2 = new lib.Amstaff2();
	this.Amstaff2.parent = this;
	this.Amstaff2.setTransform(455,537.3);
	new cjs.ButtonHelper(this.Amstaff2, 0, 1, 1);

	this.Amstaff1 = new lib.Amstaff1();
	this.Amstaff1.parent = this;
	this.Amstaff1.setTransform(280,537.3);
	new cjs.ButtonHelper(this.Amstaff1, 0, 1, 1);

	this.AudioAmstaff = new lib.AudioAmstaff_1();
	this.AudioAmstaff.parent = this;
	this.AudioAmstaff.setTransform(373.1,160.3);
	new cjs.ButtonHelper(this.AudioAmstaff, 0, 1, 1);

	this.TextAmstaff = new cjs.Text(".אמסטף הוא כלב גדול ומאסיבי\nכלבים אלו יכולים לשמש ככלבי שמירה טובים, בתנאי שהם עברו .אילוף נכון ומקצועי, שיכול לדכא את הנטייה שלהם לתוקפנות\n.כלב זה מתאים לגידול בבית גדול ומרווח עם חצר\nלאמסטף אין נטייה להנשיר שיער ולכן טוב לאנשים בעלי חשיבות .רבה לניקיון\n\nגובה ממוצע של כלב בוגר :21-27 ס\"מ \nמשקל ממוצע של כלב בוגר :4-9.5 ק\"ג", "16px 'Gisha'");
	this.TextAmstaff.name = "TextAmstaff";
	this.TextAmstaff.textAlign = "right";
	this.TextAmstaff.lineHeight = 22;
	this.TextAmstaff.lineWidth = 428;
	this.TextAmstaff.parent = this;
	this.TextAmstaff.setTransform(655.3,228.9);

	this.HeaderAmstaff = new cjs.Text("אמסטף \nAmstaff", "bold 22px 'Gisha'");
	this.HeaderAmstaff.name = "HeaderAmstaff";
	this.HeaderAmstaff.textAlign = "center";
	this.HeaderAmstaff.lineHeight = 28;
	this.HeaderAmstaff.lineWidth = 181;
	this.HeaderAmstaff.parent = this;
	this.HeaderAmstaff.setTransform(447.4,135.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.HeaderAmstaff},{t:this.TextAmstaff},{t:this.AudioAmstaff},{t:this.Amstaff1},{t:this.Amstaff2},{t:this.Amstaff3}]}).wait(1));

	// popUp
	this.ExitButton = new lib.ExitButton();
	this.ExitButton.parent = this;
	this.ExitButton.setTransform(803.9,288.2,1.291,1.291);
	new cjs.ButtonHelper(this.ExitButton, 0, 1, 1);

	this.PopUpWindow = new lib.PopUpWindow();
	this.PopUpWindow.parent = this;
	this.PopUpWindow.setTransform(438.2,335.5,1.291,1.291);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.PopUpWindow},{t:this.ExitButton}]}).wait(1));

	// Emptybones copy
	this.Empty_Bone2 = new lib.Empty_Bone17();
	this.Empty_Bone2.parent = this;
	this.Empty_Bone2.setTransform(885.5,144.5,4.479,4.478);

	this.Empty_Bone1 = new lib.Empty_Bone17();
	this.Empty_Bone1.parent = this;
	this.Empty_Bone1.setTransform(884,126,4.366,4.478);

	this.Empty_Bone17 = new lib.Empty_Bone17();
	this.Empty_Bone17.parent = this;
	this.Empty_Bone17.setTransform(885.7,571.9,4.479,4.478);

	this.Empty_Bone4 = new lib.Empty_Bone17();
	this.Empty_Bone4.parent = this;
	this.Empty_Bone4.setTransform(885.7,186,4.479,4.478);

	this.Empty_Bone19 = new lib.Empty_Bone17();
	this.Empty_Bone19.parent = this;
	this.Empty_Bone19.setTransform(885.7,611.8,4.479,4.478);

	this.Empty_Bone18 = new lib.Empty_Bone17();
	this.Empty_Bone18.parent = this;
	this.Empty_Bone18.setTransform(885.7,591.5,4.479,4.478);

	this.Empty_Bone16 = new lib.Empty_Bone17();
	this.Empty_Bone16.parent = this;
	this.Empty_Bone16.setTransform(885.7,527.4,4.479,4.478);

	this.Empty_Bone15 = new lib.Empty_Bone17();
	this.Empty_Bone15.parent = this;
	this.Empty_Bone15.setTransform(885.7,505.4,4.479,4.478);

	this.Empty_Bone13 = new lib.Empty_Bone17();
	this.Empty_Bone13.parent = this;
	this.Empty_Bone13.setTransform(885.7,465.1,4.479,4.478);

	this.Empty_Bone14 = new lib.Empty_Bone17();
	this.Empty_Bone14.parent = this;
	this.Empty_Bone14.setTransform(885.7,485.2,4.479,4.478);

	this.Empty_Bone12 = new lib.Empty_Bone17();
	this.Empty_Bone12.parent = this;
	this.Empty_Bone12.setTransform(885.7,446.3,4.479,4.478);

	this.Empty_Bone11 = new lib.Empty_Bone17();
	this.Empty_Bone11.parent = this;
	this.Empty_Bone11.setTransform(885.7,407.6,4.479,4.478);

	this.Empty_Bone10 = new lib.Empty_Bone17();
	this.Empty_Bone10.parent = this;
	this.Empty_Bone10.setTransform(885.7,387.2,4.479,4.478);

	this.Empty_Bone9 = new lib.Empty_Bone17();
	this.Empty_Bone9.parent = this;
	this.Empty_Bone9.setTransform(885.7,366.3,4.479,4.478);

	this.Empty_Bone8 = new lib.Empty_Bone17();
	this.Empty_Bone8.parent = this;
	this.Empty_Bone8.setTransform(885.7,309.1,4.479,4.478);

	this.Empty_Bone7 = new lib.Empty_Bone17();
	this.Empty_Bone7.parent = this;
	this.Empty_Bone7.setTransform(885.7,287.6,4.479,4.478);

	this.Empty_Bone6 = new lib.Empty_Bone17();
	this.Empty_Bone6.parent = this;
	this.Empty_Bone6.setTransform(885.7,245.4,4.479,4.478);

	this.Empty_Bone5 = new lib.Empty_Bone17();
	this.Empty_Bone5.parent = this;
	this.Empty_Bone5.setTransform(885.7,224.9,4.479,4.478);

	this.Empty_Bone3 = new lib.Empty_Bone17();
	this.Empty_Bone3.parent = this;
	this.Empty_Bone3.setTransform(885.7,165.7,4.479,4.478);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Empty_Bone3},{t:this.Empty_Bone5},{t:this.Empty_Bone6},{t:this.Empty_Bone7},{t:this.Empty_Bone8},{t:this.Empty_Bone9},{t:this.Empty_Bone10},{t:this.Empty_Bone11},{t:this.Empty_Bone12},{t:this.Empty_Bone14},{t:this.Empty_Bone13},{t:this.Empty_Bone15},{t:this.Empty_Bone16},{t:this.Empty_Bone18},{t:this.Empty_Bone19},{t:this.Empty_Bone4},{t:this.Empty_Bone17},{t:this.Empty_Bone1},{t:this.Empty_Bone2}]}).wait(1));

	// bones
	this.bone_8 = new lib.bone_1();
	this.bone_8.parent = this;
	this.bone_8.setTransform(834.9,283.4);

	this.bone_2 = new lib.bone_1();
	this.bone_2.parent = this;
	this.bone_2.setTransform(834.6,118.4);

	this.bone_19 = new lib.bone_1();
	this.bone_19.parent = this;
	this.bone_19.setTransform(834.8,585.4);

	this.bone_18 = new lib.bone_1();
	this.bone_18.parent = this;
	this.bone_18.setTransform(834.8,565.4);

	this.bone_17 = new lib.bone_1();
	this.bone_17.parent = this;
	this.bone_17.setTransform(834.8,545.8);

	this.bone_16 = new lib.bone_1();
	this.bone_16.parent = this;
	this.bone_16.setTransform(834.8,501.3);

	this.bone_15 = new lib.bone_1();
	this.bone_15.parent = this;
	this.bone_15.setTransform(834.8,479.3);

	this.bone_14 = new lib.bone_1();
	this.bone_14.parent = this;
	this.bone_14.setTransform(834.8,459.1);

	this.bone_13 = new lib.bone_1();
	this.bone_13.parent = this;
	this.bone_13.setTransform(834.8,439.1);

	this.bone_12 = new lib.bone_1();
	this.bone_12.parent = this;
	this.bone_12.setTransform(834.6,420.2);

	this.bone_11 = new lib.bone_1();
	this.bone_11.parent = this;
	this.bone_11.setTransform(834.9,381.5);

	this.bone_10 = new lib.bone_1();
	this.bone_10.parent = this;
	this.bone_10.setTransform(834.8,361.1);

	this.bone_9 = new lib.bone_1();
	this.bone_9.parent = this;
	this.bone_9.setTransform(834.8,340.2);

	this.bone_7 = new lib.bone_1();
	this.bone_7.parent = this;
	this.bone_7.setTransform(834.8,261.5);

	this.bone_6 = new lib.bone_1();
	this.bone_6.parent = this;
	this.bone_6.setTransform(834.8,219.3);

	this.bone_5 = new lib.bone_1();
	this.bone_5.parent = this;
	this.bone_5.setTransform(834.9,198.8);

	this.bone_4 = new lib.bone_1();
	this.bone_4.parent = this;
	this.bone_4.setTransform(834.9,160.1);

	this.bone_3 = new lib.bone_1();
	this.bone_3.parent = this;
	this.bone_3.setTransform(834.6,139.6);

	this.bone_1 = new lib.bone_1();
	this.bone_1.parent = this;
	this.bone_1.setTransform(834,100.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bone_1},{t:this.bone_3},{t:this.bone_4},{t:this.bone_5},{t:this.bone_6},{t:this.bone_7},{t:this.bone_9},{t:this.bone_10},{t:this.bone_11},{t:this.bone_12},{t:this.bone_13},{t:this.bone_14},{t:this.bone_15},{t:this.bone_16},{t:this.bone_17},{t:this.bone_18},{t:this.bone_19},{t:this.bone_2},{t:this.bone_8}]}).wait(1));

	// FillBones
	this.clean_choise = new lib.clean_choise();
	this.clean_choise.parent = this;
	this.clean_choise.setTransform(761.2,632.5,1.06,1.073);
	new cjs.ButtonHelper(this.clean_choise, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.clean_choise).wait(1));

	// kanvas
	this.Logo = new lib.icon5();
	this.Logo.parent = this;
	this.Logo.setTransform(844.5,30.8,1,1,0,0,0,4.6,0);

	this.Icon4 = new lib.icon4();
	this.Icon4.parent = this;
	this.Icon4.setTransform(866.5,462.6);

	this.Icon3 = new lib.icon3();
	this.Icon3.parent = this;
	this.Icon3.setTransform(864.4,182.8);

	this.Icon2 = new lib.icon2();
	this.Icon2.parent = this;
	this.Icon2.setTransform(913.4,460.6);

	this.Icon1 = new lib.icon1();
	this.Icon1.parent = this;
	this.Icon1.setTransform(919.7,162.2);

	this.clean2 = new lib.clean2();
	this.clean2.parent = this;
	this.clean2.setTransform(706.2,293.8);
	new cjs.ButtonHelper(this.clean2, 0, 1, 1);

	this.clean1 = new lib.clean1();
	this.clean1.parent = this;
	this.clean1.setTransform(706.2,272.8);
	new cjs.ButtonHelper(this.clean1, 0, 1, 1);

	this.category3_clean = new lib.category3_clean();
	this.category3_clean.parent = this;
	this.category3_clean.setTransform(737.2,241.1);
	new cjs.ButtonHelper(this.category3_clean, 0, 1, 1);

	this.family2 = new lib.family2();
	this.family2.parent = this;
	this.family2.setTransform(737.2,222);
	new cjs.ButtonHelper(this.family2, 0, 1, 1);

	this.family1 = new lib.family1();
	this.family1.parent = this;
	this.family1.setTransform(737.2,201.3);
	new cjs.ButtonHelper(this.family1, 0, 1, 1);

	this.category2_family = new lib.category2_family();
	this.category2_family.parent = this;
	this.category2_family.setTransform(737.2,181.5);
	new cjs.ButtonHelper(this.category2_family, 0, 1, 1);

	this.megorim4 = new lib.megorim_4();
	this.megorim4.parent = this;
	this.megorim4.setTransform(737.2,159);
	new cjs.ButtonHelper(this.megorim4, 0, 1, 1);

	this.megorim3 = new lib.megorim_3();
	this.megorim3.parent = this;
	this.megorim3.setTransform(737.2,140.1);
	new cjs.ButtonHelper(this.megorim3, 0, 1, 1);

	this.megorim2 = new lib.megorim_2();
	this.megorim2.parent = this;
	this.megorim2.setTransform(737.2,120.9);
	new cjs.ButtonHelper(this.megorim2, 0, 1, 1);

	this.megorim1 = new lib.megorim_1();
	this.megorim1.parent = this;
	this.megorim1.setTransform(737.2,99.9);
	new cjs.ButtonHelper(this.megorim1, 0, 1, 1);

	this.category1_megorim = new lib.category1_megorim();
	this.category1_megorim.parent = this;
	this.category1_megorim.setTransform(737.2,79.8);
	new cjs.ButtonHelper(this.category1_megorim, 0, 1, 1);

	this.size3 = new lib.size3();
	this.size3.parent = this;
	this.size3.setTransform(706.2,586);
	new cjs.ButtonHelper(this.size3, 0, 1, 1);

	this.size2 = new lib.size2();
	this.size2.parent = this;
	this.size2.setTransform(706.1,566.2);
	new cjs.ButtonHelper(this.size2, 0, 1, 1);

	this.size1 = new lib.size1();
	this.size1.parent = this;
	this.size1.setTransform(706.1,544.8);
	new cjs.ButtonHelper(this.size1, 0, 1, 1);

	this.category6_size = new lib.category6_size();
	this.category6_size.parent = this;
	this.category6_size.setTransform(724.3,522.7);
	new cjs.ButtonHelper(this.category6_size, 0, 1, 1);

	this.ofi5 = new lib.ofi5();
	this.ofi5.parent = this;
	this.ofi5.setTransform(706.1,502.4);
	new cjs.ButtonHelper(this.ofi5, 0, 1, 1);

	this.ofi4 = new lib.ofi4();
	this.ofi4.parent = this;
	this.ofi4.setTransform(706.1,482.1);
	new cjs.ButtonHelper(this.ofi4, 0, 1, 1);

	this.ofi3 = new lib.ofi3();
	this.ofi3.parent = this;
	this.ofi3.setTransform(706.1,461.8);
	new cjs.ButtonHelper(this.ofi3, 0, 1, 1);

	this.ofi2 = new lib.ofi2();
	this.ofi2.parent = this;
	this.ofi2.setTransform(706.1,441.5);
	new cjs.ButtonHelper(this.ofi2, 0, 1, 1);

	this.ofi1 = new lib.ofi1();
	this.ofi1.parent = this;
	this.ofi1.setTransform(706.1,421.2);
	new cjs.ButtonHelper(this.ofi1, 0, 1, 1);

	this.category5_ofi = new lib.category5_ofi();
	this.category5_ofi.parent = this;
	this.category5_ofi.setTransform(724.3,401.5);
	new cjs.ButtonHelper(this.category5_ofi, 0, 1, 1);

	this.time3 = new lib.time3();
	this.time3.parent = this;
	this.time3.setTransform(706.1,380.1);
	new cjs.ButtonHelper(this.time3, 0, 1, 1);

	this.time2 = new lib.time2();
	this.time2.parent = this;
	this.time2.setTransform(706.1,360.3);
	new cjs.ButtonHelper(this.time2, 0, 1, 1);

	this.time1 = new lib.time1();
	this.time1.parent = this;
	this.time1.setTransform(706.1,340);
	new cjs.ButtonHelper(this.time1, 0, 1, 1);

	this.category4_time = new lib.category4_time();
	this.category4_time.parent = this;
	this.category4_time.setTransform(724.3,331.3);
	new cjs.ButtonHelper(this.category4_time, 0, 1, 1);

	this.bishon = new lib.bishon();
	this.bishon.parent = this;
	this.bishon.setTransform(292.5,557.4);
	new cjs.ButtonHelper(this.bishon, 0, 1, 1);

	this.rotwiler = new lib.rotwiler();
	this.rotwiler.parent = this;
	this.rotwiler.setTransform(504.5,223.4);
	new cjs.ButtonHelper(this.rotwiler, 0, 1, 1);

	this.coker = new lib.coker();
	this.coker.parent = this;
	this.coker.setTransform(90.5,224.4);
	new cjs.ButtonHelper(this.coker, 0, 1, 1);

	this.shitzu = new lib.shitzu();
	this.shitzu.parent = this;
	this.shitzu.setTransform(187.5,223.4);
	new cjs.ButtonHelper(this.shitzu, 0, 1, 1);

	this.sharpey = new lib.sharpey();
	this.sharpey.parent = this;
	this.sharpey.setTransform(187.5,332.4);
	new cjs.ButtonHelper(this.sharpey, 0, 1, 1);

	this.papylon = new lib.papylon();
	this.papylon.parent = this;
	this.papylon.setTransform(398.5,333.4);
	new cjs.ButtonHelper(this.papylon, 0, 1, 1);

	this.pincher = new lib.pincher();
	this.pincher.parent = this;
	this.pincher.setTransform(504.5,557.4);
	new cjs.ButtonHelper(this.pincher, 0, 1, 1);

	this.pag = new lib.pag();
	this.pag.parent = this;
	this.pag.setTransform(90.5,332.4);
	new cjs.ButtonHelper(this.pag, 0, 1, 1);

	this.teryer = new lib.teryer();
	this.teryer.parent = this;
	this.teryer.setTransform(399.5,557.4);
	new cjs.ButtonHelper(this.teryer, 0, 1, 1);

	this.amstaf = new lib.amstaf();
	this.amstaf.parent = this;
	this.amstaf.setTransform(187.5,445.4);
	new cjs.ButtonHelper(this.amstaf, 0, 1, 1);

	this.american_boldug = new lib.american_boldug();
	this.american_boldug.parent = this;
	this.american_boldug.setTransform(90.5,445.4);
	new cjs.ButtonHelper(this.american_boldug, 0, 1, 1);

	this.chinese = new lib.chinese();
	this.chinese.parent = this;
	this.chinese.setTransform(398.5,444.4);
	new cjs.ButtonHelper(this.chinese, 0, 1, 1);

	this.samyoad = new lib.samyoad();
	this.samyoad.parent = this;
	this.samyoad.setTransform(292.5,444.4);
	new cjs.ButtonHelper(this.samyoad, 0, 1, 1);

	this.chiwawa = new lib.chiwawa_1();
	this.chiwawa.parent = this;
	this.chiwawa.setTransform(292.5,224.4);
	new cjs.ButtonHelper(this.chiwawa, 0, 1, 1);

	this.shalty = new lib.shalty();
	this.shalty.parent = this;
	this.shalty.setTransform(398.5,223.4);
	new cjs.ButtonHelper(this.shalty, 0, 1, 1);

	this.bust = new lib.bust();
	this.bust.parent = this;
	this.bust.setTransform(504.5,445.4);
	new cjs.ButtonHelper(this.bust, 0, 1, 1);

	this.bobyea = new lib.bobyea();
	this.bobyea.parent = this;
	this.bobyea.setTransform(188.5,558.4);
	new cjs.ButtonHelper(this.bobyea, 0, 1, 1);

	this.british_boldug = new lib.british_boldug();
	this.british_boldug.parent = this;
	this.british_boldug.setTransform(90.5,558.4);
	new cjs.ButtonHelper(this.british_boldug, 0, 1, 1);

	this.golden = new lib.golden();
	this.golden.parent = this;
	this.golden.setTransform(292.5,332.4);
	new cjs.ButtonHelper(this.golden, 0, 1, 1);

	this.german = new lib.german();
	this.german.parent = this;
	this.german.setTransform(90.5,115.4);
	new cjs.ButtonHelper(this.german, 0, 1, 1);

	this.boxer = new lib.boxer();
	this.boxer.parent = this;
	this.boxer.setTransform(191.5,115.4);
	new cjs.ButtonHelper(this.boxer, 0, 1, 1);

	this.koli = new lib.koli();
	this.koli.parent = this;
	this.koli.setTransform(292.5,115.4);
	new cjs.ButtonHelper(this.koli, 0, 1, 1);

	this.shikuku = new lib.shikuku();
	this.shikuku.parent = this;
	this.shikuku.setTransform(405.7,115.4);
	new cjs.ButtonHelper(this.shikuku, 0, 1, 1);

	this.labrador = new lib.labrador();
	this.labrador.parent = this;
	this.labrador.setTransform(504.5,115.4);
	new cjs.ButtonHelper(this.labrador, 0, 1, 1);

	this.hasky = new lib.hasky();
	this.hasky.parent = this;
	this.hasky.setTransform(504.5,328.4);
	new cjs.ButtonHelper(this.hasky, 0, 1, 1);

	this.Header2 = new cjs.Text(".בחר במאפיין המתאר את העדפותייך / סוג הכלב המועדף על מנת לקבל התאמה", "18px 'Gisha'");
	this.Header2.name = "Header2";
	this.Header2.textAlign = "right";
	this.Header2.lineHeight = 23;
	this.Header2.lineWidth = 645;
	this.Header2.parent = this;
	this.Header2.setTransform(809.7,37.8);

	this.Header1 = new cjs.Text("הכלב המתאים לי", "25px 'Gisha'");
	this.Header1.name = "Header1";
	this.Header1.textAlign = "right";
	this.Header1.lineHeight = 31;
	this.Header1.lineWidth = 295;
	this.Header1.parent = this;
	this.Header1.setTransform(809.7,4);

	this.clean_choise1 = new lib.clean_choise1();
	this.clean_choise1.parent = this;
	this.clean_choise1.setTransform(761.7,632.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.clean_choise1},{t:this.Header1},{t:this.Header2},{t:this.hasky},{t:this.labrador},{t:this.shikuku},{t:this.koli},{t:this.boxer},{t:this.german},{t:this.golden},{t:this.british_boldug},{t:this.bobyea},{t:this.bust},{t:this.shalty},{t:this.chiwawa},{t:this.samyoad},{t:this.chinese},{t:this.american_boldug},{t:this.amstaf},{t:this.teryer},{t:this.pag},{t:this.pincher},{t:this.papylon},{t:this.sharpey},{t:this.shitzu},{t:this.coker},{t:this.rotwiler},{t:this.bishon},{t:this.category4_time},{t:this.time1},{t:this.time2},{t:this.time3},{t:this.category5_ofi},{t:this.ofi1},{t:this.ofi2},{t:this.ofi3},{t:this.ofi4},{t:this.ofi5},{t:this.category6_size},{t:this.size1},{t:this.size2},{t:this.size3},{t:this.category1_megorim},{t:this.megorim1},{t:this.megorim2},{t:this.megorim3},{t:this.megorim4},{t:this.category2_family},{t:this.family1},{t:this.family2},{t:this.category3_clean},{t:this.clean1},{t:this.clean2},{t:this.Icon1},{t:this.Icon2},{t:this.Icon3},{t:this.Icon4},{t:this.Logo}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(219,191,1398.5,989.1);
// library properties:
lib.properties = {
	id: 'A3491CD8BCC0B24B995F10706CFAA78C',
	width: 960,
	height: 700,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/theDogForMe_atlas_.png", id:"theDogForMe_atlas_"},
		{src:"sounds/AudioAmstaff.mp3", id:"AudioAmstaff"},
		{src:"sounds/AudioBishon.mp3", id:"AudioBishon"},
		{src:"sounds/AudioBoxer.mp3", id:"AudioBoxer"},
		{src:"sounds/AudioChiwawa.mp3", id:"AudioChiwawa"},
		{src:"sounds/AudioSharpey.mp3", id:"AudioSharpey"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A3491CD8BCC0B24B995F10706CFAA78C'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;