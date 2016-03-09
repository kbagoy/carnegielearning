(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 780,
	height: 420,
	fps: 12,
	color: "#032F3B",
	webfonts: {},
	manifest: [
		{src:"sounds/serockettakeoffwav.mp3", id:"serockettakeoffwav"},
		{src:"sounds/seRocketThrust.mp3", id:"seRocketThrust"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.seyellowstar2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,185,94,0.698)").s().p("AgKA2Ig+AWIAUg/IgogyIBCAAIAjg3IAVA/IA/ATIg1AlIACBCg");
	this.shape.setTransform(0,9.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,185,94,0.298)").s().p("AgKA2Ig+AWIAUg/IgogyIBCAAIAjg3IAVA/IA/ATIg1AlIACBCg");
	this.shape_1.setTransform(0,9.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,185,94,0.898)").s().p("AgKA2Ig+AWIAUg/IgogyIBCAAIAjg3IAVA/IA/ATIg1AlIACBCg");
	this.shape_2.setTransform(0,9.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},13).to({state:[{t:this.shape_2}]},17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.3,0,18.8,18.7);


(lib.sestar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag9A+QgagZAAglQAAgjAagaQAZgaAkAAQAkAAAaAaQAaAaAAAjQAAAlgaAZQgaAagkAAQgjAAgagag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.8,-8.8,17.8,17.8);


(lib.sesmoke = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3F8EB").s().p("AGlKcQhkg2hChdQgVAigiAUQgjAVgpgBQg7AAgsgnQgpgogGg5Qg6ARg6AAQhDAAg+gXQgnB2hlBIQhlBLh/AAQihAAhxhxQhyhyABihIAAgIQg1AlhBABQg4AAgvgcQgugbgbguQggAQglAAQg/AAgtgtQgtgsAAhAQAAhAAtgsQAtgrA/AAIAFAAQAKgtAkghQgYgWgMgdQgPgeAAghQAAhAAtgtQAtgsA/gBQAxABAnAbQARhRBBg1QBCg1BUgBQBCAAA4AiQA3AhAeA4IAEABQAbiGBqhZQBshZCMAAQB1AABiBBQBeA/AsBoQAhglAugWQAwgWA0AAQBiAABFBGQBFBFAABiIAAAHQAXgHAZAAQA0AAAqAgQApAgANAyIADAAQBZgBBSAhQATgmAlgWQAkgYAsAAQA7AAAsApQArAoAGA7QAmgOAoAAQA2ABAxAXQAuAXAiAoQAOgDAMAAQBAAAAsAtQAuAqgBBAQABBAguAsQgsAthAAAQgMAAgOgDQghApgvAWQgxAYg2AAQgiAAghgKQgZCuiEB1QiGB2izAAQh2AAhog4g");
	this.shape.setTransform(174.1,81.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.8,8.8,308.6,144.9);


(lib.seshadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.298)").s().p("AkWBkQhzgqgBg6QABg6BzgpQB0gqCiAAQCjAAB0AqQBzApABA6QgBA6hzAqQh0AqijAAQiiAAh0gqg");
	this.shape.setTransform(39.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-14.2,79,28.5);


(lib.semoon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9E9E9E").s().p("AgvAwQgVgUAAgcQAAgbAVgUQAUgUAbAAQAcAAAVAUQAUAUAAAbQAAAcgUAUQgVAUgcAAQgbAAgUgUg");
	this.shape.setTransform(393.5,-257.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9E9E9E").s().p("AgvAwQgUgUAAgcQAAgbAUgUQAUgUAbAAQAcAAAVAUQATAUABAbQgBAcgTAUQgVAUgcAAQgbAAgUgUg");
	this.shape_1.setTransform(413.8,-278.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9E9E9E").s().p("Ah8B8Qg0gzAAhJQAAhHA0g0QA0gzBIAAQBJAAA0AzQA0A0AABHQAABJg0AzQg0A0hJAAQhIAAg0g0g");
	this.shape_2.setTransform(438.3,-235.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9E9E9E").s().p("Ah8B8Qg0g0AAhIQAAhIA0gzQA0g0BIAAQBJAAA0A0QA0AzAABIQAABIg0A0Qg0A0hJgBQhIABg0g0g");
	this.shape_3.setTransform(217,-250.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E8E8E7").s().p("EgLwAvvIhlgaQpYipnol/QnYlzkwoIQkwoKhapSQhdplCWphQCXpiFwn1QFknkIAlAQH/lAJOhsQJghwJiCBIBlAYQJuCZH8F8QHrFvE/IQQE/IPBgJdQBlJxiaJuQiZJul8H8QlwHroPE/QoPE/peBgQj4Aoj2AAQl5AAl3hdg");
	this.shape_4.setTransform(335.2,2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9E9E9E").s().p("EAGJAwSQpsian8l8Qnrlvk/oPQk/oQhgpdQhkpxCZpuQCaptF8n9QFvnrIPk/QINk+JehhQJzhkJtCZIBlAbQpiiCpiBwQpPBtn9E/Qn/FBlkHkQlxH1iWJhQiXJhBeJmQBaJSEwIJQEwIJHYFyQHnF/JXCpIhlgXg");
	this.shape_5.setTransform(200.3,-6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E8E8E7").s().p("EgTHAtTQo1jvm0mzQmzm0jvo1Qj4pIAAqAQAAp/D4pJQDvo0Gzm0QG0m0I1juQJIj4J/AAQKAAAJID4QI1DuG0G0QGzG0DvI0QD4JJAAJ/QAAKAj4JIQjuI1m0G0Qm0Gzo1DvQpID4qAAAQp/AApIj4g");
	this.shape_6.setTransform(314.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-317.3,650.1,634.7);


(lib.serocketbody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhQBSQgjgjABgvQgBguAjgjQAhghAvAAQAvAAAjAhQAhAjABAuQgBAvghAjQgjAhgvAAQgvAAghghg");
	this.shape.setTransform(43.9,3.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#911356").s().p("Ah+B/Qg1g1AAhKQAAhJA1g1QA1g1BJAAQBKAAA1A1QA1A1AABJQAABKg1A1Qg1A1hKAAQhJAAg1g1g");
	this.shape_1.setTransform(43.9,3.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhQBRQgjghABgwQgBguAjgjQAhghAvgBQAvABAjAhQAhAjABAuQgBAwghAhQgjAjgvgBQgvABghgjg");
	this.shape_2.setTransform(43.9,-38.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#911356").s().p("Ah+B/Qg1g1AAhKQAAhJA1g1QA1g1BJAAQBKAAA1A1QA1A1AABJQAABKg1A1Qg1A1hKAAQhJAAg1g1g");
	this.shape_3.setTransform(43.9,-38.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#911356").s().p("AkjBXIgsitIKfAAIgtCtg");
	this.shape_4.setTransform(44,105.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B6165E").s().p("AjaRZQgkhTglilQhKlLAAmhQABnMCAk/QBpkCDMjFQAuAvAkAqQikC+hWD6QhlEpAAGYQAAGhBJFLQAlClAkBTIGfAEIAAABg");
	this.shape_5.setTransform(36.6,-2.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CA1362").s().p("AkjRZQgkhTglilQhKlLAAmhQABnMCAk/QBpkCDMjFQDLDKBnD7QCFFDAAHLQAAGjhKFMQglCngkBSg");
	this.shape_6.setTransform(43.9,-2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-114,87.8,228);


(lib.serwing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#911356").s().p("AgoDyQhgg9hBhhQg9hZgKhZQgLhcAxgxQBRhQCKAEQCRAECRBmQgYEhg+DlQh7gEhqhDg");
	this.shape.setTransform(27.6,-21.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CA1362").s().p("AGqIHQgWgRhPh2QhXiBg6g8QhdhfhTgBQh7AAhvhDQhjg5hChiQg+hdgLhaQgMhdAygyQAzgzBQgRQBRgSBeAVQDWAyCtDfQCICwAxECQAdCWgHBtQgEBKgYAAQgHAAgJgHg");
	this.shape_1.setTransform(47.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-52.6,94.4,105.4);


(lib.seLwing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#911356").s().p("AkVjJQCShpCTgFQCMgFBSBRQAxAygLBcQgLBZg9BaQhBBhhiA8QhrBEh8ACQg+jjgZkfg");
	this.shape.setTransform(66.6,-21.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CA1362").s().p("AnVHEQgHhtAdiWQAxkCCIiwQCujfDWgyQBdgVBSASQBPARAzAzQAyAygLBdQgLBag/BdQhCBihjA5QhvBDh7AAQhTABhdBfQg6A8hXCBQhOB1gXASQgJAHgIAAQgXAAgEhKg");
	this.shape_1.setTransform(47.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-52.7,94.4,105.4);


(lib.seflmeorange = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F75E34").s().p("AiCBCQg/g2gehCQAPgmAWgfQALgQAIgHIFPABIATAXQAWAfAPAmQgeBCg9A1Qg5AyhMAfQhKggg4gxg");
	this.shape.setTransform(22.5,14.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45,29.5);


(lib.seflameshadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNEcQgbgMgagPQg9glgqgwQgvg1gUhDQgVg/AHhHQAFg7ATgzQAWg5AkgmIFAABQAVABARAYQAGAIARAjIABACQAiBGAEBQQAEBRgeBGQgZA6gxAwQgtAtg8AgIgeAQQgJAEgIAAQgGAAgHgEg");
	this.shape.setTransform(45.1,37.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.8,8.8,50.7,57.6);


(lib.segpP2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6DA54F").s().p("AhCBDQgcgbAAgoQAAgmAcgcQAcgcAmAAQAoAAAbAcQAcAcAAAmQAAAogcAbQgbAcgoAAQgmAAgcgcg");
	this.shape.setTransform(9.6,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-9.5,19.1,19.1);


(lib.segpP1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#37703C").s().p("AhCBDQgcgcAAgnQAAgmAcgcQAcgcAmAAQAnAAAcAcQAcAcAAAmQAAAngcAcQgcAcgnAAQgmAAgcgcg");
	this.shape.setTransform(9.6,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-9.5,19.1,19.1);


(lib.seplanentring = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#008A94").s().p("AjFCCQgDgQAQgjQANgaAMgQQgQAlATARQAQARAogCQBYgGBDhAQBfhWAZgzQAfhDheABIAVgBQAqADARATQATAWggA+QgiBAhFA9QhPBGhZAbQgfAJgWAAQgtAAgHgng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-16.9,39.8,33.8);


(lib.sebluebody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00B2C4").s().p("AgKAUQgJgFgDgKQgCgIAFgIQAFgJAKgDIABAAQAOAOAMAOQgDAOgOAEIgGABQgFAAgFgEg");
	this.shape.setTransform(11.4,-11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00B2C4").s().p("AgJAKQgFgEAAgGQAAgFAFgEQAEgEAFAAQAFAAAFAEQAFAEAAAFQAAAGgFAEQgFAFgFgBQgFABgEgFg");
	this.shape_1.setTransform(9.9,8.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#008A94").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgIALgBQAMABAJAIQAIAJABALQgBAMgIAJQgJAIgMABQgLgBgJgIg");
	this.shape_2.setTransform(-5.4,-4.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0EC7D8").s().p("Ah4B5QgzgyAAhHQAAhGAzgyQAygzBGAAQBHAAAyAzQAzAyAABGQAABHgzAyQgyAzhHAAQhGAAgygzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.2,-17.2,34.5,34.5);


(lib.setinystars = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sestar();
	this.instance.setTransform(218,458,0.293,0.293,0,0,0,5.7,4.8);
	this.instance.alpha = 0.699;

	this.circle = new lib.sestar();
	this.circle.setTransform(878.2,532.2,0.293,0.293);
	this.circle.alpha = 0.699;

	this.instance_1 = new lib.sestar();
	this.instance_1.setTransform(945.1,486.7,0.293,0.293,0,0,0,4.5,3.8);
	this.instance_1.alpha = 0.699;

	this.instance_2 = new lib.sestar();
	this.instance_2.setTransform(756,513.2,0.293,0.293,0,0,0,3.9,3.8);
	this.instance_2.alpha = 0.699;

	this.instance_3 = new lib.sestar();
	this.instance_3.setTransform(756,444.7,0.293,0.293,0,0,0,3.9,6.5);
	this.instance_3.alpha = 0.699;

	this.circle_1 = new lib.sestar();
	this.circle_1.setTransform(785.5,532.2,0.293,0.293);
	this.circle_1.alpha = 0.699;

	this.instance_4 = new lib.sestar();
	this.instance_4.setTransform(843.2,520.2,0.293,0.293,0,0,0,3.8,8);
	this.instance_4.alpha = 0.699;

	this.instance_5 = new lib.sestar();
	this.instance_5.setTransform(872.2,422,0.293,0.293,0,0,0,3.8,8.3);
	this.instance_5.alpha = 0.699;

	this.circle_2 = new lib.sestar();
	this.circle_2.setTransform(909.4,448.3,0.293,0.293);
	this.circle_2.alpha = 0.699;

	this.instance_6 = new lib.sestar();
	this.instance_6.setTransform(884.9,487.8,0.293,0.293,0,0,0,4.6,7.5);
	this.instance_6.alpha = 0.699;

	this.circle_3 = new lib.sestar();
	this.circle_3.setTransform(855.9,462.4,0.293,0.293);
	this.circle_3.alpha = 0.699;

	this.circle_4 = new lib.sestar();
	this.circle_4.setTransform(78.6,538.9,0.293,0.293);
	this.circle_4.alpha = 0.699;

	this.instance_7 = new lib.sestar();
	this.instance_7.setTransform(47.2,517.3,0.293,0.293,0,0,0,5.5,6.7);
	this.instance_7.alpha = 0.699;

	this.instance_8 = new lib.sestar();
	this.instance_8.setTransform(108.1,510.5,0.293,0.293,0,0,0,5.7,3.6);
	this.instance_8.alpha = 0.699;

	this.instance_9 = new lib.sestar();
	this.instance_9.setTransform(187.4,458,0.293,0.293,0,0,0,6.3,4.8);
	this.instance_9.alpha = 0.699;

	this.circle_5 = new lib.sestar();
	this.circle_5.setTransform(609,523.7,0.293,0.293);
	this.circle_5.alpha = 0.699;

	this.instance_10 = new lib.sestar();
	this.instance_10.setTransform(652.4,511.3,0.293,0.293,0,0,0,5.8,2.8);
	this.instance_10.alpha = 0.699;

	this.circle_6 = new lib.sestar();
	this.circle_6.setTransform(719,517.9,0.293,0.293);
	this.circle_6.alpha = 0.699;

	this.circle_7 = new lib.sestar();
	this.circle_7.setTransform(754.8,474.8,0.293,0.293);
	this.circle_7.alpha = 0.699;

	this.instance_11 = new lib.sestar();
	this.instance_11.setTransform(807.3,490.8,0.293,0.293,0,0,0,6.3,7.7);
	this.instance_11.alpha = 0.699;

	this.instance_12 = new lib.sestar();
	this.instance_12.setTransform(720.6,434,0.293,0.293,0,0,0,5.5,6.7);
	this.instance_12.alpha = 0.699;

	this.instance_13 = new lib.sestar();
	this.instance_13.setTransform(685.8,372.7,0.293,0.293,0,0,0,7.4,6);
	this.instance_13.alpha = 0.699;

	this.instance_14 = new lib.sestar();
	this.instance_14.setTransform(843.2,136.5,0.293,0.293,0,0,0,3.8,5.7);
	this.instance_14.alpha = 0.699;

	this.circle_8 = new lib.sestar();
	this.circle_8.setTransform(883.5,162.5,0.293,0.293);
	this.circle_8.alpha = 0.699;

	this.instance_15 = new lib.sestar();
	this.instance_15.setTransform(953.4,168,0.293,0.293,0,0,0,3.8,6.5);
	this.instance_15.alpha = 0.699;

	this.circle_9 = new lib.sestar();
	this.circle_9.setTransform(940.7,282.1,0.293,0.293);
	this.circle_9.alpha = 0.699;

	this.instance_16 = new lib.sestar();
	this.instance_16.setTransform(859.2,337.6,0.293,0.293,0,0,0,5.7,2.8);
	this.instance_16.alpha = 0.699;

	this.instance_17 = new lib.sestar();
	this.instance_17.setTransform(902.9,296.4,0.293,0.293,0,0,0,5,4.5);
	this.instance_17.alpha = 0.699;

	this.circle_10 = new lib.sestar();
	this.circle_10.setTransform(909.4,199.6,0.293,0.293);
	this.circle_10.alpha = 0.699;

	this.instance_18 = new lib.sestar();
	this.instance_18.setTransform(807.3,42.2,0.293,0.293,0,0,0,6.3,6.9);
	this.instance_18.alpha = 0.699;

	this.instance_19 = new lib.sestar();
	this.instance_19.setTransform(747.3,59.2,0.293,0.293,0,0,0,5.3,4.8);
	this.instance_19.alpha = 0.699;

	this.instance_20 = new lib.sestar();
	this.instance_20.setTransform(747.3,115.4,0.293,0.293,0,0,0,5.3,4.1);
	this.instance_20.alpha = 0.699;

	this.instance_21 = new lib.sestar();
	this.instance_21.setTransform(711.8,178.5,0.293,0.293,0,0,0,5.7,6.7);
	this.instance_21.alpha = 0.699;

	this.instance_22 = new lib.sestar();
	this.instance_22.setTransform(905.1,138.2,0.293,0.293,0,0,0,3.9,5.7);
	this.instance_22.alpha = 0.699;

	this.instance_23 = new lib.sestar();
	this.instance_23.setTransform(856.5,195.1,0.293,0.293,0,0,0,3.2,4.8);
	this.instance_23.alpha = 0.699;

	this.circle_11 = new lib.sestar();
	this.circle_11.setTransform(827,230.1,0.293,0.293);
	this.circle_11.alpha = 0.699;

	this.instance_24 = new lib.sestar();
	this.instance_24.setTransform(807.3,287,0.293,0.293,0,0,0,6.3,4.8);
	this.instance_24.alpha = 0.699;

	this.circle_12 = new lib.sestar();
	this.circle_12.setTransform(857.8,300.6,0.293,0.293);
	this.circle_12.alpha = 0.699;

	this.instance_25 = new lib.sestar();
	this.instance_25.setTransform(707.9,281.6,0.293,0.293,0,0,0,4.1,5.7);
	this.instance_25.alpha = 0.699;

	this.instance_26 = new lib.sestar();
	this.instance_26.setTransform(659.4,87,0.293,0.293,0,0,0,4.1,4.2);
	this.instance_26.alpha = 0.699;

	this.instance_27 = new lib.sestar();
	this.instance_27.setTransform(569.9,122.5,0.293,0.293,0,0,0,4.2,3.8);
	this.instance_27.alpha = 0.699;

	this.circle_13 = new lib.sestar();
	this.circle_13.setTransform(661.5,124.4,0.293,0.293);
	this.circle_13.alpha = 0.699;

	this.circle_14 = new lib.sestar();
	this.circle_14.setTransform(775,76.4,0.293,0.293);
	this.circle_14.alpha = 0.699;

	this.circle_15 = new lib.sestar();
	this.circle_15.setTransform(700.2,140.1,0.293,0.293);
	this.circle_15.alpha = 0.699;

	this.instance_28 = new lib.sestar();
	this.instance_28.setTransform(335.7,106.5,0.293,0.293,0,0,0,8.3,4.6);
	this.instance_28.alpha = 0.699;

	this.instance_29 = new lib.sestar();
	this.instance_29.setTransform(335.7,160.9,0.293,0.293,0,0,0,3.6,6.5);
	this.instance_29.alpha = 0.699;

	this.circle_16 = new lib.sestar();
	this.circle_16.setTransform(379,137.4,0.293,0.293);
	this.circle_16.alpha = 0.699;

	this.circle_17 = new lib.sestar();
	this.circle_17.setTransform(17.3,219.1,0.293,0.293);
	this.circle_17.alpha = 0.699;

	this.instance_30 = new lib.sestar();
	this.instance_30.setTransform(90.2,218.3,0.293,0.293,0,0,0,2.9,3.6);
	this.instance_30.alpha = 0.699;

	this.instance_31 = new lib.sestar();
	this.instance_31.setTransform(44,195.9,0.293,0.293,0,0,0,5.7,7.5);
	this.instance_31.alpha = 0.699;

	this.circle_18 = new lib.sestar();
	this.circle_18.setTransform(49,230.1,0.293,0.293);
	this.circle_18.alpha = 0.699;

	this.circle_19 = new lib.sestar();
	this.circle_19.setTransform(231.4,186,0.293,0.293);
	this.circle_19.alpha = 0.699;

	this.circle_20 = new lib.sestar();
	this.circle_20.setTransform(805.7,387.9,0.293,0.293);
	this.circle_20.alpha = 0.699;

	this.circle_21 = new lib.sestar();
	this.circle_21.setTransform(839.3,413.1,0.293,0.293);
	this.circle_21.alpha = 0.699;

	this.circle_22 = new lib.sestar();
	this.circle_22.setTransform(782.7,187.6,0.293,0.293);
	this.circle_22.alpha = 0.699;

	this.instance_32 = new lib.sestar();
	this.instance_32.setTransform(255.6,106.5,0.293,0.293,0,0,0,5,4.6);
	this.instance_32.alpha = 0.699;

	this.circle_23 = new lib.sestar();
	this.circle_23.setTransform(80.2,178.5,0.293,0.293);
	this.circle_23.alpha = 0.699;

	this.circle_24 = new lib.sestar();
	this.circle_24.setTransform(84.8,107.6,0.293,0.293);
	this.circle_24.alpha = 0.699;

	this.circle_25 = new lib.sestar();
	this.circle_25.setTransform(58.5,140.1,0.293,0.293);
	this.circle_25.alpha = 0.699;

	this.instance_33 = new lib.sestar();
	this.instance_33.setTransform(255.6,160.9,0.293,0.293,0,0,0,5,6.5);
	this.instance_33.alpha = 0.699;

	this.circle_26 = new lib.sestar();
	this.circle_26.setTransform(275.5,194.2,0.293,0.293);
	this.circle_26.alpha = 0.699;

	this.circle_27 = new lib.sestar();
	this.circle_27.setTransform(289.8,131.6,0.293,0.293);
	this.circle_27.alpha = 0.699;

	this.circle_28 = new lib.sestar();
	this.circle_28.setTransform(205,121.4,0.293,0.293);
	this.circle_28.alpha = 0.699;

	this.circle_29 = new lib.sestar();
	this.circle_29.setTransform(224.4,154.2,0.293,0.293);
	this.circle_29.alpha = 0.699;

	this.circle_30 = new lib.sestar();
	this.circle_30.setTransform(244.2,222.6,0.293,0.293);
	this.circle_30.alpha = 0.699;

	this.circle_31 = new lib.sestar();
	this.circle_31.setTransform(160.3,79.7,0.293,0.293);
	this.circle_31.alpha = 0.699;

	this.circle_32 = new lib.sestar();
	this.circle_32.setTransform(179,145.7,0.293,0.293);
	this.circle_32.alpha = 0.699;

	this.circle_33 = new lib.sestar();
	this.circle_33.setTransform(130.5,107.6,0.293,0.293);
	this.circle_33.alpha = 0.699;

	this.circle_34 = new lib.sestar();
	this.circle_34.setTransform(140.2,178.5,0.293,0.293);
	this.circle_34.alpha = 0.699;

	this.circle_35 = new lib.sestar();
	this.circle_35.setTransform(188,201.2,0.293,0.293);
	this.circle_35.alpha = 0.699;

	this.circle_36 = new lib.sestar();
	this.circle_36.setTransform(166.8,233.2,0.293,0.293);
	this.circle_36.alpha = 0.699;

	this.circle_37 = new lib.sestar();
	this.circle_37.setTransform(166.8,172.2,0.293,0.293);
	this.circle_37.alpha = 0.699;

	this.circle_38 = new lib.sestar();
	this.circle_38.setTransform(63.1,63.7,0.293,0.293);
	this.circle_38.alpha = 0.699;

	this.circle_39 = new lib.sestar();
	this.circle_39.setTransform(94.3,81.3,0.293,0.293);
	this.circle_39.alpha = 0.699;

	this.circle_40 = new lib.sestar();
	this.circle_40.setTransform(17.3,105.9,0.293,0.293);
	this.circle_40.alpha = 0.699;

	this.instance_34 = new lib.sestar();
	this.instance_34.setTransform(29.4,2.3,0.293,0.293,0,0,0,4.8,7.5);
	this.instance_34.alpha = 0.699;

	this.circle_41 = new lib.sestar();
	this.circle_41.setTransform(49,35.2,0.293,0.293);
	this.circle_41.alpha = 0.699;

	this.circle_42 = new lib.sestar();
	this.circle_42.setTransform(765.6,256.9,0.293,0.293);
	this.circle_42.alpha = 0.699;

	this.circle_43 = new lib.sestar();
	this.circle_43.setTransform(2.6,139.8,0.293,0.293);
	this.circle_43.alpha = 0.699;

	this.instance_35 = new lib.sestar();
	this.instance_35.setTransform(413.8,103.5,0.293,0.293,0,0,0,4.8,6.5);
	this.instance_35.alpha = 0.699;

	this.circle_44 = new lib.sestar();
	this.circle_44.setTransform(684.7,426.9,0.293,0.293);
	this.circle_44.alpha = 0.699;

	this.circle_45 = new lib.sestar();
	this.circle_45.setTransform(9.8,177.1,0.293,0.293);
	this.circle_45.alpha = 0.699;

	this.circle_46 = new lib.sestar();
	this.circle_46.setTransform(725.6,249.6,0.293,0.293);
	this.circle_46.alpha = 0.699;

	this.circle_47 = new lib.sestar();
	this.circle_47.setTransform(707,312.5,0.293,0.293);
	this.circle_47.alpha = 0.699;

	this.instance_36 = new lib.sestar();
	this.instance_36.setTransform(942.6,62.2,0.293,0.293,0,0,0,6.3,5.7);
	this.instance_36.alpha = 0.699;

	this.circle_48 = new lib.sestar();
	this.circle_48.setTransform(104.3,142.3,0.293,0.293);
	this.circle_48.alpha = 0.699;

	this.circle_49 = new lib.sestar();
	this.circle_49.setTransform(827,102,0.293,0.293);
	this.circle_49.alpha = 0.699;

	this.circle_50 = new lib.sestar();
	this.circle_50.setTransform(805.7,337.6,0.293,0.293);
	this.circle_50.alpha = 0.699;

	this.circle_51 = new lib.sestar();
	this.circle_51.setTransform(957.8,327.4,0.293,0.293);
	this.circle_51.alpha = 0.699;

	this.instance_37 = new lib.sestar();
	this.instance_37.setTransform(798.7,430.9,0.293,0.293,0,0,0,6.5,4.6);
	this.instance_37.alpha = 0.699;

	this.circle_52 = new lib.sestar();
	this.circle_52.setTransform(754.8,413.1,0.293,0.293);
	this.circle_52.alpha = 0.699;

	this.circle_53 = new lib.sestar();
	this.circle_53.setTransform(17.3,63.7,0.293,0.293);
	this.circle_53.alpha = 0.699;

	this.circle_54 = new lib.sestar();
	this.circle_54.setTransform(693.8,470.2,0.293,0.293);
	this.circle_54.alpha = 0.699;

	this.circle_55 = new lib.sestar();
	this.circle_55.setTransform(2.6,29.9,0.293,0.293);
	this.circle_55.alpha = 0.699;

	this.circle_56 = new lib.sestar();
	this.circle_56.setTransform(938.3,119.5,0.293,0.293);
	this.circle_56.alpha = 0.699;

	this.circle_57 = new lib.sestar();
	this.circle_57.setTransform(766.7,360.6,0.293,0.293);
	this.circle_57.alpha = 0.699;

	this.circle_58 = new lib.sestar();
	this.circle_58.setTransform(743.1,306.2,0.293,0.293);
	this.circle_58.alpha = 0.699;

	this.circle_59 = new lib.sestar();
	this.circle_59.setTransform(852.8,62.8,0.293,0.293);
	this.circle_59.alpha = 0.699;

	this.circle_60 = new lib.sestar();
	this.circle_60.setTransform(881.4,376,0.293,0.293);
	this.circle_60.alpha = 0.699;

	this.circle_61 = new lib.sestar();
	this.circle_61.setTransform(875.5,119.5,0.293,0.293);
	this.circle_61.alpha = 0.699;

	this.instance_38 = new lib.sestar();
	this.instance_38.setTransform(597.9,481.8,0.293,0.293,0,0,0,2.8,5.7);
	this.instance_38.alpha = 0.699;

	this.circle_62 = new lib.sestar();
	this.circle_62.setTransform(898.4,72.2,0.293,0.293);
	this.circle_62.alpha = 0.699;

	this.circle_63 = new lib.sestar();
	this.circle_63.setTransform(832.7,362.8,0.293,0.293);
	this.circle_63.alpha = 0.699;

	this.circle_64 = new lib.sestar();
	this.circle_64.setTransform(664,454.9,0.293,0.293);
	this.circle_64.alpha = 0.699;

	this.circle_65 = new lib.sestar();
	this.circle_65.setTransform(942.6,422,0.293,0.293);
	this.circle_65.alpha = 0.699;

	this.circle_66 = new lib.sestar();
	this.circle_66.setTransform(627.8,476.4,0.293,0.293);
	this.circle_66.alpha = 0.699;

	this.circle_67 = new lib.sestar();
	this.circle_67.setTransform(627.8,178.5,0.293,0.293);
	this.circle_67.alpha = 0.699;

	this.circle_68 = new lib.sestar();
	this.circle_68.setTransform(897.1,331.7,0.293,0.293);
	this.circle_68.alpha = 0.699;

	this.circle_69 = new lib.sestar();
	this.circle_69.setTransform(770.5,299.7,0.293,0.293);
	this.circle_69.alpha = 0.699;

	this.circle_70 = new lib.sestar();
	this.circle_70.setTransform(49,95.4,0.293,0.293);
	this.circle_70.alpha = 0.699;

	this.circle_71 = new lib.sestar();
	this.circle_71.setTransform(641.6,156.4,0.293,0.293);
	this.circle_71.alpha = 0.699;

	this.circle_72 = new lib.sestar();
	this.circle_72.setTransform(661.5,186,0.293,0.293);
	this.circle_72.alpha = 0.699;

	this.circle_73 = new lib.sestar();
	this.circle_73.setTransform(937.7,373.3,0.293,0.293);
	this.circle_73.alpha = 0.699;

	this.circle_74 = new lib.sestar();
	this.circle_74.setTransform(888.8,7.8,0.293,0.293);
	this.circle_74.alpha = 0.699;

	this.circle_75 = new lib.sestar();
	this.circle_75.setTransform(356.7,11.8,0.293,0.293);
	this.circle_75.alpha = 0.699;

	this.instance_39 = new lib.sestar();
	this.instance_39.setTransform(687.7,62.2,0.293,0.293,0,0,0,6.5,5.7);
	this.instance_39.alpha = 0.699;

	this.circle_76 = new lib.sestar();
	this.circle_76.setTransform(707,96.6,0.293,0.293);
	this.circle_76.alpha = 0.699;

	this.circle_77 = new lib.sestar();
	this.circle_77.setTransform(721.8,33.2,0.293,0.293);
	this.circle_77.alpha = 0.699;

	this.circle_78 = new lib.sestar();
	this.circle_78.setTransform(341.4,46.1,0.293,0.293);
	this.circle_78.alpha = 0.699;

	this.circle_79 = new lib.sestar();
	this.circle_79.setTransform(635.8,22.7,0.293,0.293);
	this.circle_79.alpha = 0.699;

	this.circle_80 = new lib.sestar();
	this.circle_80.setTransform(656,55.6,0.293,0.293);
	this.circle_80.alpha = 0.699;

	this.instance_40 = new lib.sestar();
	this.instance_40.setTransform(923.8,248.4,0.293,0.293,0,0,0,3.8,4.6);
	this.instance_40.alpha = 0.699;

	this.circle_81 = new lib.sestar();
	this.circle_81.setTransform(495.8,91.3,0.293,0.293);
	this.circle_81.alpha = 0.699;

	this.circle_82 = new lib.sestar();
	this.circle_82.setTransform(347.9,83,0.293,0.293);
	this.circle_82.alpha = 0.699;

	this.circle_83 = new lib.sestar();
	this.circle_83.setTransform(454.4,79.7,0.293,0.293);
	this.circle_83.alpha = 0.699;

	this.circle_84 = new lib.sestar();
	this.circle_84.setTransform(515.5,129.2,0.293,0.293);
	this.circle_84.alpha = 0.699;

	this.circle_85 = new lib.sestar();
	this.circle_85.setTransform(443.3,48.8,0.293,0.293);
	this.circle_85.alpha = 0.699;

	this.circle_86 = new lib.sestar();
	this.circle_86.setTransform(827,162.5,0.293,0.293);
	this.circle_86.alpha = 0.699;

	this.circle_87 = new lib.sestar();
	this.circle_87.setTransform(793.8,140.1,0.293,0.293);
	this.circle_87.alpha = 0.699;

	this.circle_88 = new lib.sestar();
	this.circle_88.setTransform(216.4,2.6,0.293,0.293);
	this.circle_88.alpha = 0.699;

	this.instance_41 = new lib.sestar();
	this.instance_41.setTransform(787.1,233.2,0.293,0.293,0,0,0,6.7,3.9);
	this.instance_41.alpha = 0.699;

	this.circle_89 = new lib.sestar();
	this.circle_89.setTransform(741.8,215.3,0.293,0.293);
	this.circle_89.alpha = 0.699;

	this.circle_90 = new lib.sestar();
	this.circle_90.setTransform(888.8,264.5,0.293,0.293);
	this.circle_90.alpha = 0.699;

	this.circle_91 = new lib.sestar();
	this.circle_91.setTransform(611.5,47.5,0.293,0.293);
	this.circle_91.alpha = 0.699;

	this.circle_92 = new lib.sestar();
	this.circle_92.setTransform(587.8,22.7,0.293,0.293);
	this.circle_92.alpha = 0.699;

	this.circle_93 = new lib.sestar();
	this.circle_93.setTransform(554.9,50.2,0.293,0.293);
	this.circle_93.alpha = 0.699;

	this.circle_94 = new lib.sestar();
	this.circle_94.setTransform(754.8,162.5,0.293,0.293);
	this.circle_94.alpha = 0.699;

	this.circle_95 = new lib.sestar();
	this.circle_95.setTransform(265.3,64.5,0.293,0.293);
	this.circle_95.alpha = 0.699;

	this.circle_96 = new lib.sestar();
	this.circle_96.setTransform(545.6,95.4,0.293,0.293);
	this.circle_96.alpha = 0.699;

	this.circle_97 = new lib.sestar();
	this.circle_97.setTransform(140.2,51.3,0.293,0.293);
	this.circle_97.alpha = 0.699;

	this.circle_98 = new lib.sestar();
	this.circle_98.setTransform(292,83,0.293,0.293);
	this.circle_98.alpha = 0.699;

	this.circle_99 = new lib.sestar();
	this.circle_99.setTransform(620.1,102.5,0.293,0.293);
	this.circle_99.alpha = 0.699;

	this.circle_100 = new lib.sestar();
	this.circle_100.setTransform(493.3,50.2,0.293,0.293);
	this.circle_100.alpha = 0.699;

	this.circle_101 = new lib.sestar();
	this.circle_101.setTransform(238.8,59.5,0.293,0.293);
	this.circle_101.alpha = 0.699;

	this.circle_102 = new lib.sestar();
	this.circle_102.setTransform(515.5,3.2,0.293,0.293);
	this.circle_102.alpha = 0.699;

	this.circle_103 = new lib.sestar();
	this.circle_103.setTransform(91.6,29.9,0.293,0.293);
	this.circle_103.alpha = 0.699;

	this.circle_104 = new lib.sestar();
	this.circle_104.setTransform(857.8,248.4,0.293,0.293);
	this.circle_104.alpha = 0.699;

	this.circle_105 = new lib.sestar();
	this.circle_105.setTransform(201.5,97.3,0.293,0.293);
	this.circle_105.alpha = 0.699;

	this.circle_106 = new lib.sestar();
	this.circle_106.setTransform(278.8,29.9,0.293,0.293);
	this.circle_106.alpha = 0.699;

	this.circle_107 = new lib.sestar();
	this.circle_107.setTransform(155.4,6.7,0.293,0.293);
	this.circle_107.alpha = 0.699;

	this.circle_108 = new lib.sestar();
	this.circle_108.setTransform(587.2,74.1,0.293,0.293);
	this.circle_108.alpha = 0.699;

	this.circle_109 = new lib.sestar();
	this.circle_109.setTransform(293.1,8.2,0.293,0.293);
	this.circle_109.alpha = 0.699;

	this.circle_110 = new lib.sestar();
	this.circle_110.setTransform(311.9,38,0.293,0.293);
	this.circle_110.alpha = 0.699;

	this.circle_111 = new lib.sestar();
	this.circle_111.setTransform(196.6,48.8,0.293,0.293);
	this.circle_111.alpha = 0.699;

	this.circle_112 = new lib.sestar();
	this.circle_112.setTransform(35.2,332.8,0.293,0.293);
	this.circle_112.alpha = 0.699;

	this.circle_113 = new lib.sestar();
	this.circle_113.setTransform(68.8,357.7,0.293,0.293);
	this.circle_113.alpha = 0.699;

	this.circle_114 = new lib.sestar();
	this.circle_114.setTransform(362.7,235.8,0.293,0.293);
	this.circle_114.alpha = 0.699;

	this.instance_42 = new lib.sestar();
	this.instance_42.setTransform(539.2,438.8,0.293,0.293,0,0,0,6.5,6.2);
	this.instance_42.alpha = 0.699;

	this.circle_115 = new lib.sestar();
	this.circle_115.setTransform(362.7,510.5,0.293,0.293);
	this.circle_115.alpha = 0.699;

	this.circle_116 = new lib.sestar();
	this.circle_116.setTransform(367.1,439.9,0.293,0.293);
	this.circle_116.alpha = 0.699;

	this.circle_117 = new lib.sestar();
	this.circle_117.setTransform(340.3,472.6,0.293,0.293);
	this.circle_117.alpha = 0.699;

	this.instance_43 = new lib.sestar();
	this.instance_43.setTransform(539.2,493.7,0.293,0.293,0,0,0,6.5,7);
	this.instance_43.alpha = 0.699;

	this.circle_118 = new lib.sestar();
	this.circle_118.setTransform(557.6,526.8,0.293,0.293);
	this.circle_118.alpha = 0.699;

	this.circle_119 = new lib.sestar();
	this.circle_119.setTransform(572.1,463.7,0.293,0.293);
	this.circle_119.alpha = 0.699;

	this.circle_120 = new lib.sestar();
	this.circle_120.setTransform(488.1,453.5,0.293,0.293);
	this.circle_120.alpha = 0.699;

	this.circle_121 = new lib.sestar();
	this.circle_121.setTransform(506.3,485.9,0.293,0.293);
	this.circle_121.alpha = 0.699;

	this.circle_122 = new lib.sestar();
	this.circle_122.setTransform(515.5,526.8,0.293,0.293);
	this.circle_122.alpha = 0.699;

	this.circle_123 = new lib.sestar();
	this.circle_123.setTransform(443.3,412.1,0.293,0.293);
	this.circle_123.alpha = 0.699;

	this.circle_124 = new lib.sestar();
	this.circle_124.setTransform(461.8,477.8,0.293,0.293);
	this.circle_124.alpha = 0.699;

	this.circle_125 = new lib.sestar();
	this.circle_125.setTransform(412.4,439.9,0.293,0.293);
	this.circle_125.alpha = 0.699;

	this.circle_126 = new lib.sestar();
	this.circle_126.setTransform(422.3,510.5,0.293,0.293);
	this.circle_126.alpha = 0.699;

	this.circle_127 = new lib.sestar();
	this.circle_127.setTransform(470.7,533.9,0.293,0.293);
	this.circle_127.alpha = 0.699;

	this.circle_128 = new lib.sestar();
	this.circle_128.setTransform(683.7,533.9,0.293,0.293);
	this.circle_128.alpha = 0.699;

	this.circle_129 = new lib.sestar();
	this.circle_129.setTransform(449.1,504.1,0.293,0.293);
	this.circle_129.alpha = 0.699;

	this.circle_130 = new lib.sestar();
	this.circle_130.setTransform(345.6,395.6,0.293,0.293);
	this.circle_130.alpha = 0.699;

	this.circle_131 = new lib.sestar();
	this.circle_131.setTransform(376.8,413.7,0.293,0.293);
	this.circle_131.alpha = 0.699;

	this.circle_132 = new lib.sestar();
	this.circle_132.setTransform(300,438.1,0.293,0.293);
	this.circle_132.alpha = 0.699;

	this.instance_44 = new lib.sestar();
	this.instance_44.setTransform(312.2,333.8,0.293,0.293,0,0,0,4.8,3.2);
	this.instance_44.alpha = 0.699;

	this.circle_133 = new lib.sestar();
	this.circle_133.setTransform(331.6,367.9,0.293,0.293);
	this.circle_133.alpha = 0.699;

	this.circle_134 = new lib.sestar();
	this.circle_134.setTransform(345.6,305.2,0.293,0.293);
	this.circle_134.alpha = 0.699;

	this.circle_135 = new lib.sestar();
	this.circle_135.setTransform(285.4,472.3,0.293,0.293);
	this.circle_135.alpha = 0.699;

	this.circle_136 = new lib.sestar();
	this.circle_136.setTransform(260.5,295.1,0.293,0.293);
	this.circle_136.alpha = 0.699;

	this.circle_137 = new lib.sestar();
	this.circle_137.setTransform(280.2,327.1,0.293,0.293);
	this.circle_137.alpha = 0.699;

	this.instance_45 = new lib.sestar();
	this.instance_45.setTransform(165.8,391.2,0.293,0.293,0,0,0,6,5.7);
	this.instance_45.alpha = 0.699;

	this.circle_138 = new lib.sestar();
	this.circle_138.setTransform(120.6,362.5,0.293,0.293);
	this.circle_138.alpha = 0.699;

	this.circle_139 = new lib.sestar();
	this.circle_139.setTransform(270.1,247.5,0.293,0.293);
	this.circle_139.alpha = 0.699;

	this.circle_140 = new lib.sestar();
	this.circle_140.setTransform(292,509.7,0.293,0.293);
	this.circle_140.alpha = 0.699;

	this.circle_141 = new lib.sestar();
	this.circle_141.setTransform(305.6,297.5,0.293,0.293);
	this.circle_141.alpha = 0.699;

	this.circle_142 = new lib.sestar();
	this.circle_142.setTransform(159.8,357.7,0.293,0.293);
	this.circle_142.alpha = 0.699;

	this.instance_46 = new lib.sestar();
	this.instance_46.setTransform(183.5,265.2,0.293,0.293,0,0,0,4.5,3.8);
	this.instance_46.alpha = 0.699;

	this.circle_143 = new lib.sestar();
	this.circle_143.setTransform(387,474.8,0.293,0.293);
	this.circle_143.alpha = 0.699;

	this.circle_144 = new lib.sestar();
	this.circle_144.setTransform(272,419.3,0.293,0.293);
	this.circle_144.alpha = 0.699;

	this.circle_145 = new lib.sestar();
	this.circle_145.setTransform(68.8,305.2,0.293,0.293);
	this.circle_145.alpha = 0.699;

	this.circle_146 = new lib.sestar();
	this.circle_146.setTransform(35.2,282.7,0.293,0.293);
	this.circle_146.alpha = 0.699;

	this.circle_147 = new lib.sestar();
	this.circle_147.setTransform(159.8,429.6,0.293,0.293);
	this.circle_147.alpha = 0.699;

	this.instance_47 = new lib.sestar();
	this.instance_47.setTransform(28,375.5,0.293,0.293,0,0,0,4.6,4.8);
	this.instance_47.alpha = 0.699;

	this.circle_148 = new lib.sestar();
	this.circle_148.setTransform(300,395.6,0.293,0.293);
	this.circle_148.alpha = 0.699;

	this.circle_149 = new lib.sestar();
	this.circle_149.setTransform(216.6,252.9,0.293,0.293);
	this.circle_149.alpha = 0.699;

	this.circle_150 = new lib.sestar();
	this.circle_150.setTransform(130.5,406.6,0.293,0.293);
	this.circle_150.alpha = 0.699;

	this.circle_151 = new lib.sestar();
	this.circle_151.setTransform(285.4,362.5,0.293,0.293);
	this.circle_151.alpha = 0.699;

	this.circle_152 = new lib.sestar();
	this.circle_152.setTransform(212.3,295.1,0.293,0.293);
	this.circle_152.alpha = 0.699;

	this.circle_153 = new lib.sestar();
	this.circle_153.setTransform(179,322.4,0.293,0.293);
	this.circle_153.alpha = 0.699;

	this.circle_154 = new lib.sestar();
	this.circle_154.setTransform(208.7,490.8,0.293,0.293);
	this.circle_154.alpha = 0.699;

	this.circle_155 = new lib.sestar();
	this.circle_155.setTransform(195.8,351.1,0.293,0.293);
	this.circle_155.alpha = 0.699;

	this.circle_156 = new lib.sestar();
	this.circle_156.setTransform(94.3,266.1,0.293,0.293);
	this.circle_156.alpha = 0.699;

	this.circle_157 = new lib.sestar();
	this.circle_157.setTransform(83.8,477.3,0.293,0.293);
	this.circle_157.alpha = 0.699;

	this.circle_158 = new lib.sestar();
	this.circle_158.setTransform(235.7,509.7,0.293,0.293);
	this.circle_158.alpha = 0.699;

	this.circle_159 = new lib.sestar();
	this.circle_159.setTransform(198.4,416,0.293,0.293);
	this.circle_159.alpha = 0.699;

	this.circle_160 = new lib.sestar();
	this.circle_160.setTransform(244.5,374.1,0.293,0.293);
	this.circle_160.alpha = 0.699;

	this.circle_161 = new lib.sestar();
	this.circle_161.setTransform(117.6,322.4,0.293,0.293);
	this.circle_161.alpha = 0.699;

	this.instance_48 = new lib.sestar();
	this.instance_48.setTransform(34.1,417.9,0.293,0.293,0,0,0,5.7,6.5);
	this.instance_48.alpha = 0.699;

	this.circle_162 = new lib.sestar();
	this.circle_162.setTransform(222.7,406.6,0.293,0.293);
	this.circle_162.alpha = 0.699;

	this.circle_163 = new lib.sestar();
	this.circle_163.setTransform(182.2,485.6,0.293,0.293);
	this.circle_163.alpha = 0.699;

	this.circle_164 = new lib.sestar();
	this.circle_164.setTransform(140.2,274.9,0.293,0.293);
	this.circle_164.alpha = 0.699;

	this.circle_165 = new lib.sestar();
	this.circle_165.setTransform(35.2,464,0.293,0.293);
	this.circle_165.alpha = 0.699;

	this.circle_166 = new lib.sestar();
	this.circle_166.setTransform(99.5,391.2,0.293,0.293);
	this.circle_166.alpha = 0.699;

	this.circle_167 = new lib.sestar();
	this.circle_167.setTransform(145.7,523.7,0.293,0.293);
	this.circle_167.alpha = 0.699;

	this.circle_168 = new lib.sestar();
	this.circle_168.setTransform(63.4,412.1,0.293,0.293);
	this.circle_168.alpha = 0.699;

	this.circle_169 = new lib.sestar();
	this.circle_169.setTransform(206.1,538.9,0.293,0.293);
	this.circle_169.alpha = 0.699;

	this.circle_170 = new lib.sestar();
	this.circle_170.setTransform(99.5,433.1,0.293,0.293);
	this.circle_170.alpha = 0.699;

	this.circle_171 = new lib.sestar();
	this.circle_171.setTransform(222.7,345.5,0.293,0.293);
	this.circle_171.alpha = 0.699;

	this.circle_172 = new lib.sestar();
	this.circle_172.setTransform(331.6,428,0.293,0.293);
	this.circle_172.alpha = 0.699;

	this.circle_173 = new lib.sestar();
	this.circle_173.setTransform(236.6,434,0.293,0.293);
	this.circle_173.alpha = 0.699;

	this.circle_174 = new lib.sestar();
	this.circle_174.setTransform(255.3,464,0.293,0.293);
	this.circle_174.alpha = 0.699;

	this.circle_175 = new lib.sestar();
	this.circle_175.setTransform(140.2,474.8,0.293,0.293);
	this.circle_175.alpha = 0.699;

	this.circle_176 = new lib.sestar();
	this.circle_176.setTransform(130.2,211.2,0.293,0.293);
	this.circle_176.alpha = 0.699;

	this.circle_177 = new lib.sestar();
	this.circle_177.setTransform(638.5,344.2,0.293,0.293);
	this.circle_177.alpha = 0.699;

	this.instance_49 = new lib.sestar();
	this.instance_49.setTransform(650.7,240.1,0.293,0.293,0,0,0,4.8,5.5);
	this.instance_49.alpha = 0.699;

	this.circle_178 = new lib.sestar();
	this.circle_178.setTransform(669.8,272.9,0.293,0.293);
	this.circle_178.alpha = 0.699;

	this.circle_179 = new lib.sestar();
	this.circle_179.setTransform(683.7,211.2,0.293,0.293);
	this.circle_179.alpha = 0.699;

	this.circle_180 = new lib.sestar();
	this.circle_180.setTransform(623.9,377.9,0.293,0.293);
	this.circle_180.alpha = 0.699;

	this.circle_181 = new lib.sestar();
	this.circle_181.setTransform(599.7,200.6,0.293,0.293);
	this.circle_181.alpha = 0.699;

	this.circle_182 = new lib.sestar();
	this.circle_182.setTransform(619.2,233.2,0.293,0.293);
	this.circle_182.alpha = 0.699;

	this.instance_50 = new lib.sestar();
	this.instance_50.setTransform(504.4,296.4,0.293,0.293,0,0,0,6,4.5);
	this.instance_50.alpha = 0.699;

	this.circle_183 = new lib.sestar();
	this.circle_183.setTransform(458.9,269.1,0.293,0.293);
	this.circle_183.alpha = 0.699;

	this.circle_184 = new lib.sestar();
	this.circle_184.setTransform(609,153.1,0.293,0.293);
	this.circle_184.alpha = 0.699;

	this.circle_185 = new lib.sestar();
	this.circle_185.setTransform(630.8,415.2,0.293,0.293);
	this.circle_185.alpha = 0.699;

	this.circle_186 = new lib.sestar();
	this.circle_186.setTransform(417.1,257.2,0.293,0.293);
	this.circle_186.alpha = 0.699;

	this.circle_187 = new lib.sestar();
	this.circle_187.setTransform(498.3,263.3,0.293,0.293);
	this.circle_187.alpha = 0.699;

	this.instance_51 = new lib.sestar();
	this.instance_51.setTransform(522.1,171.1,0.293,0.293,0,0,0,4.6,5.1);
	this.instance_51.alpha = 0.699;

	this.circle_188 = new lib.sestar();
	this.circle_188.setTransform(725.6,380.9,0.293,0.293);
	this.circle_188.alpha = 0.699;

	this.circle_189 = new lib.sestar();
	this.circle_189.setTransform(610.9,324.9,0.293,0.293);
	this.circle_189.alpha = 0.699;

	this.circle_190 = new lib.sestar();
	this.circle_190.setTransform(407,211.2,0.293,0.293);
	this.circle_190.alpha = 0.699;

	this.circle_191 = new lib.sestar();
	this.circle_191.setTransform(373.8,189,0.293,0.293);
	this.circle_191.alpha = 0.699;

	this.circle_192 = new lib.sestar();
	this.circle_192.setTransform(498.3,334.9,0.293,0.293);
	this.circle_192.alpha = 0.699;

	this.instance_52 = new lib.sestar();
	this.instance_52.setTransform(366.7,281.6,0.293,0.293,0,0,0,6,7);
	this.instance_52.alpha = 0.699;

	this.circle_193 = new lib.sestar();
	this.circle_193.setTransform(322.4,263.3,0.293,0.293);
	this.circle_193.alpha = 0.699;

	this.circle_194 = new lib.sestar();
	this.circle_194.setTransform(638.5,301.7,0.293,0.293);
	this.circle_194.alpha = 0.699;

	this.circle_195 = new lib.sestar();
	this.circle_195.setTransform(554.9,159,0.293,0.293);
	this.circle_195.alpha = 0.699;

	this.circle_196 = new lib.sestar();
	this.circle_196.setTransform(468.2,312.5,0.293,0.293);
	this.circle_196.alpha = 0.699;

	this.circle_197 = new lib.sestar();
	this.circle_197.setTransform(574,224.6,0.293,0.293);
	this.circle_197.alpha = 0.699;

	this.circle_198 = new lib.sestar();
	this.circle_198.setTransform(550.8,200.6,0.293,0.293);
	this.circle_198.alpha = 0.699;

	this.circle_199 = new lib.sestar();
	this.circle_199.setTransform(518.2,228,0.293,0.293);
	this.circle_199.alpha = 0.699;

	this.circle_200 = new lib.sestar();
	this.circle_200.setTransform(334.6,211.2,0.293,0.293);
	this.circle_200.alpha = 0.699;

	this.circle_201 = new lib.sestar();
	this.circle_201.setTransform(547.2,396.9,0.293,0.293);
	this.circle_201.alpha = 0.699;

	this.circle_202 = new lib.sestar();
	this.circle_202.setTransform(534.8,257.2,0.293,0.293);
	this.circle_202.alpha = 0.699;

	this.circle_203 = new lib.sestar();
	this.circle_203.setTransform(432.8,172.2,0.293,0.293);
	this.circle_203.alpha = 0.699;

	this.circle_204 = new lib.sestar();
	this.circle_204.setTransform(422.3,383.1,0.293,0.293);
	this.circle_204.alpha = 0.699;

	this.circle_205 = new lib.sestar();
	this.circle_205.setTransform(574,415.2,0.293,0.293);
	this.circle_205.alpha = 0.699;

	this.circle_206 = new lib.sestar();
	this.circle_206.setTransform(537.3,322.4,0.293,0.293);
	this.circle_206.alpha = 0.699;

	this.circle_207 = new lib.sestar();
	this.circle_207.setTransform(582.8,280.5,0.293,0.293);
	this.circle_207.alpha = 0.699;

	this.circle_208 = new lib.sestar();
	this.circle_208.setTransform(456.1,228,0.293,0.293);
	this.circle_208.alpha = 0.699;

	this.instance_53 = new lib.sestar();
	this.instance_53.setTransform(372.9,323.8,0.293,0.293,0,0,0,6.5,4.6);
	this.instance_53.alpha = 0.699;

	this.circle_209 = new lib.sestar();
	this.circle_209.setTransform(562.2,312.5,0.293,0.293);
	this.circle_209.alpha = 0.699;

	this.circle_210 = new lib.sestar();
	this.circle_210.setTransform(521,392.2,0.293,0.293);
	this.circle_210.alpha = 0.699;

	this.circle_211 = new lib.sestar();
	this.circle_211.setTransform(479,180.7,0.293,0.293);
	this.circle_211.alpha = 0.699;

	this.circle_212 = new lib.sestar();
	this.circle_212.setTransform(373.8,362.5,0.293,0.293);
	this.circle_212.alpha = 0.699;

	this.circle_213 = new lib.sestar();
	this.circle_213.setTransform(438.4,296.4,0.293,0.293);
	this.circle_213.alpha = 0.699;

	this.circle_214 = new lib.sestar();
	this.circle_214.setTransform(483.9,429.6,0.293,0.293);
	this.circle_214.alpha = 0.699;

	this.circle_215 = new lib.sestar();
	this.circle_215.setTransform(401.7,317.7,0.293,0.293);
	this.circle_215.alpha = 0.699;

	this.circle_216 = new lib.sestar();
	this.circle_216.setTransform(561,362.5,0.293,0.293);
	this.circle_216.alpha = 0.699;

	this.circle_217 = new lib.sestar();
	this.circle_217.setTransform(438.4,338.4,0.293,0.293);
	this.circle_217.alpha = 0.699;

	this.circle_218 = new lib.sestar();
	this.circle_218.setTransform(562.2,251.4,0.293,0.293);
	this.circle_218.alpha = 0.699;

	this.circle_219 = new lib.sestar();
	this.circle_219.setTransform(669.8,333.4,0.293,0.293);
	this.circle_219.alpha = 0.699;

	this.circle_220 = new lib.sestar();
	this.circle_220.setTransform(575.3,340.1,0.293,0.293);
	this.circle_220.alpha = 0.699;

	this.circle_221 = new lib.sestar();
	this.circle_221.setTransform(594.7,370.1,0.293,0.293);
	this.circle_221.alpha = 0.699;

	this.circle_222 = new lib.sestar();
	this.circle_222.setTransform(479,380.9,0.293,0.293);
	this.circle_222.alpha = 0.699;

	this.circle_223 = new lib.sestar();
	this.circle_223.setTransform(468.2,116.6,0.293,0.293);
	this.circle_223.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.circle_223},{t:this.circle_222},{t:this.circle_221},{t:this.circle_220},{t:this.circle_219},{t:this.circle_218},{t:this.circle_217},{t:this.circle_216},{t:this.circle_215},{t:this.circle_214},{t:this.circle_213},{t:this.circle_212},{t:this.circle_211},{t:this.circle_210},{t:this.circle_209},{t:this.instance_53},{t:this.circle_208},{t:this.circle_207},{t:this.circle_206},{t:this.circle_205},{t:this.circle_204},{t:this.circle_203},{t:this.circle_202},{t:this.circle_201},{t:this.circle_200},{t:this.circle_199},{t:this.circle_198},{t:this.circle_197},{t:this.circle_196},{t:this.circle_195},{t:this.circle_194},{t:this.circle_193},{t:this.instance_52},{t:this.circle_192},{t:this.circle_191},{t:this.circle_190},{t:this.circle_189},{t:this.circle_188},{t:this.instance_51},{t:this.circle_187},{t:this.circle_186},{t:this.circle_185},{t:this.circle_184},{t:this.circle_183},{t:this.instance_50},{t:this.circle_182},{t:this.circle_181},{t:this.circle_180},{t:this.circle_179},{t:this.circle_178},{t:this.instance_49},{t:this.circle_177},{t:this.circle_176},{t:this.circle_175},{t:this.circle_174},{t:this.circle_173},{t:this.circle_172},{t:this.circle_171},{t:this.circle_170},{t:this.circle_169},{t:this.circle_168},{t:this.circle_167},{t:this.circle_166},{t:this.circle_165},{t:this.circle_164},{t:this.circle_163},{t:this.circle_162},{t:this.instance_48},{t:this.circle_161},{t:this.circle_160},{t:this.circle_159},{t:this.circle_158},{t:this.circle_157},{t:this.circle_156},{t:this.circle_155},{t:this.circle_154},{t:this.circle_153},{t:this.circle_152},{t:this.circle_151},{t:this.circle_150},{t:this.circle_149},{t:this.circle_148},{t:this.instance_47},{t:this.circle_147},{t:this.circle_146},{t:this.circle_145},{t:this.circle_144},{t:this.circle_143},{t:this.instance_46},{t:this.circle_142},{t:this.circle_141},{t:this.circle_140},{t:this.circle_139},{t:this.circle_138},{t:this.instance_45},{t:this.circle_137},{t:this.circle_136},{t:this.circle_135},{t:this.circle_134},{t:this.circle_133},{t:this.instance_44},{t:this.circle_132},{t:this.circle_131},{t:this.circle_130},{t:this.circle_129},{t:this.circle_128},{t:this.circle_127},{t:this.circle_126},{t:this.circle_125},{t:this.circle_124},{t:this.circle_123},{t:this.circle_122},{t:this.circle_121},{t:this.circle_120},{t:this.circle_119},{t:this.circle_118},{t:this.instance_43},{t:this.circle_117},{t:this.circle_116},{t:this.circle_115},{t:this.instance_42},{t:this.circle_114},{t:this.circle_113},{t:this.circle_112},{t:this.circle_111},{t:this.circle_110},{t:this.circle_109},{t:this.circle_108},{t:this.circle_107},{t:this.circle_106},{t:this.circle_105},{t:this.circle_104},{t:this.circle_103},{t:this.circle_102},{t:this.circle_101},{t:this.circle_100},{t:this.circle_99},{t:this.circle_98},{t:this.circle_97},{t:this.circle_96},{t:this.circle_95},{t:this.circle_94},{t:this.circle_93},{t:this.circle_92},{t:this.circle_91},{t:this.circle_90},{t:this.circle_89},{t:this.instance_41},{t:this.circle_88},{t:this.circle_87},{t:this.circle_86},{t:this.circle_85},{t:this.circle_84},{t:this.circle_83},{t:this.circle_82},{t:this.circle_81},{t:this.instance_40},{t:this.circle_80},{t:this.circle_79},{t:this.circle_78},{t:this.circle_77},{t:this.circle_76},{t:this.instance_39},{t:this.circle_75},{t:this.circle_74},{t:this.circle_73},{t:this.circle_72},{t:this.circle_71},{t:this.circle_70},{t:this.circle_69},{t:this.circle_68},{t:this.circle_67},{t:this.circle_66},{t:this.circle_65},{t:this.circle_64},{t:this.circle_63},{t:this.circle_62},{t:this.instance_38},{t:this.circle_61},{t:this.circle_60},{t:this.circle_59},{t:this.circle_58},{t:this.circle_57},{t:this.circle_56},{t:this.circle_55},{t:this.circle_54},{t:this.circle_53},{t:this.circle_52},{t:this.instance_37},{t:this.circle_51},{t:this.circle_50},{t:this.circle_49},{t:this.circle_48},{t:this.instance_36},{t:this.circle_47},{t:this.circle_46},{t:this.circle_45},{t:this.circle_44},{t:this.instance_35},{t:this.circle_43},{t:this.circle_42},{t:this.circle_41},{t:this.instance_34},{t:this.circle_40},{t:this.circle_39},{t:this.circle_38},{t:this.circle_37},{t:this.circle_36},{t:this.circle_35},{t:this.circle_34},{t:this.circle_33},{t:this.circle_32},{t:this.circle_31},{t:this.circle_30},{t:this.circle_29},{t:this.circle_28},{t:this.circle_27},{t:this.circle_26},{t:this.instance_33},{t:this.circle_25},{t:this.circle_24},{t:this.circle_23},{t:this.instance_32},{t:this.circle_22},{t:this.circle_21},{t:this.circle_20},{t:this.circle_19},{t:this.circle_18},{t:this.instance_31},{t:this.instance_30},{t:this.circle_17},{t:this.circle_16},{t:this.instance_29},{t:this.instance_28},{t:this.circle_15},{t:this.circle_14},{t:this.circle_13},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.circle_12},{t:this.instance_24},{t:this.circle_11},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.circle_10},{t:this.instance_17},{t:this.instance_16},{t:this.circle_9},{t:this.instance_15},{t:this.circle_8},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.circle_7},{t:this.circle_6},{t:this.instance_10},{t:this.circle_5},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.circle_4},{t:this.circle_3},{t:this.instance_6},{t:this.circle_2},{t:this.instance_5},{t:this.instance_4},{t:this.circle_1},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.circle},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2.5,960.4,544);


(lib.seFlame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.seflmeorange();
	this.instance.setTransform(25.3,-14.1,1,1,0,0,0,22.4,14.8);
	this.instance.alpha = 0.48;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FC9837").s().p("AivCiQhMhbAAhyQAAhnAqhRQANgZAQgVQAIgKAFgFIFPABIANAPQAQAVANAZQAqBRABBmQAAByhLBbQhDBShvAtQhsguhDhRg");
	this.shape.setTransform(25.3,0);

	this.instance_1 = new lib.seflameshadow();
	this.instance_1.setTransform(25.4,-0.1,1,1,0,0,0,45.1,37.6);
	this.instance_1.shadow = new cjs.Shadow("rgba(56,56,56,0.498)",0,11,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.9,-39.9,95,102);


(lib.segreenplanet2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// P2
	this.instance = new lib.segpP2();
	this.instance.setTransform(89.6,-72.5,1,1,0,0,0,9.6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:74.2,y:-71.8},0).wait(1).to({x:57,y:-70.6},0).wait(1).to({x:40.5,y:-68.7},0).wait(1).to({x:24,y:-65.7},0).wait(1).to({x:7.9,y:-60},0).wait(1).to({x:1.6,y:-50},0).wait(1).to({x:7.4,y:-35.4},0).wait(1).to({x:21.2,y:-22.4},0).wait(1).to({x:34.1,y:-13.6},0).wait(1).to({x:49.3,y:-5.2},0).wait(1).to({x:64.1,y:2.4},0).wait(1).to({x:77.6,y:8.7},0).wait(1).to({x:94.4,y:13.7},0).wait(1).to({x:110.4,y:18.1},0).wait(1).to({x:126.5,y:22.6},0).wait(1).to({x:143.4,y:27.3},0).wait(1).to({x:157.6,y:31.2},0).wait(1).to({x:174.2,y:35},0).wait(1).to({x:191.1,y:38.3},0).wait(1).to({x:206.5,y:40.9},0).wait(1).to({x:222.8,y:43.3},0).wait(1).to({x:239.1,y:45.5},0).wait(1).to({x:255.7,y:47.6},0).wait(1).to({x:271.6,y:49.1},0).wait(1));

	// P1
	this.instance_1 = new lib.segpP1();
	this.instance_1.setTransform(128.6,26,1,1,0,0,0,9.6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:141.4,y:28.9},0).wait(1).to({x:155.1,y:31.7},0).wait(1).to({x:168.7,y:34.3},0).wait(1).to({x:182.3,y:36.8},0).wait(1).to({x:195.9,y:39.2},0).wait(1).to({x:209.6,y:41.4},0).wait(1).to({x:223.2,y:43.5},0).wait(1).to({x:236.7,y:45.3},0).wait(1).to({x:250.5,y:46.6},0).wait(1).to({x:264.3,y:47.6},0).wait(1).to({x:278.3,y:48},0).wait(1).to({x:293.7,y:47.6},0).wait(1).to({x:304.1,y:46.5},0).wait(1).to({x:318.7,y:44.4},0).wait(1).to({x:332.6,y:41.6},0).wait(1).to({x:347.5,y:35.7},0).wait(1).to({x:353.2,y:24.2},0).wait(1).to({x:351,y:13.8},0).wait(1).to({x:342.1,y:2.2},0).wait(1).to({x:332.6,y:-4.7},0).wait(1).to({x:319.9,y:-13},0).wait(1).to({x:308.1,y:-20.3},0).wait(1).to({x:294.2,y:-28.2},0).wait(1).to({x:284,y:-33.5},0).wait(1));

	// Ring
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHuJLQkighkyhCQlihLk7hoQk7hojsh3Qjyh5h2h3Qh2h4AWhmQAfiSExg9QEqg7HZAnQgYAVgSATQiogMiKAAQk5AAi9A0QjDA3gVBlQgSBVBxBtQByBtDhBwQDpB3E5BnQE4BnFfBLQLBCVIggXQEAgLCXg0QCdg1AThZQAah5jgidQjZiXmEiRIgTg1QGnCaDoCmQDuCtgeCOQgZB2jPA/QjHA+lOAAQjwAAkYghg");
	this.shape.setTransform(178.3,-12.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(25));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.098)").s().p("AATERQhuhyAAifQAAieBuhxQByhzCgAAQChAABwBzQByBxAACeQAACfhyByQhwBxihAAQigAAhyhxgAqEhrQgjgkAAgyQAAgyAjgjQAkgkAyAAQAyAAAjAkQAkAjAAAyQAAAygkAkQgjAjgyAAQgyAAgkgjg");
	this.shape_1.setTransform(206.1,-3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(25));

	// Top
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.298)").s().p("AB/OcQiphHiJiCQiSiKhRi2QhZjFAAjhQAAiRAziVQA4ikBriHQEBlFHHg3IgVAMQmOBJjnEnQhrCHg4CkQgzCVAACRQAADhBZDFQBRC2CSCKQCHCCCrBHQCaBACZAFIglABQilAAinhGg");
	this.shape_2.setTransform(128.3,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#91C659").s().p("AhCPgQjIgNi1hbQi1hbiCiaQh9iTg9i5Qg9i5ANjAQAOjIBbi1QBbi1CZiCQCUh9C5g9QC5g9DAANQDIAOC1BbQC0BbCCCZQB+CUA9C5QA8C5gNDAQgNDIhbC1QhbC0iaCCQiTB+i5A9QiYAyifAAQggAAgigDg");
	this.shape_3.setTransform(178.3,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.098)").s().p("Ah3DAQgwgQgpggQhXhDAAheIABgVQAJhRBNg8QAagUAdgOQBFghBUAAQBVAABEAgQAdAPAbAUQBXBDAABgQAAAmgPAiQgJBJg9A2QgdAbgjAPQgxAWg6AAQhbAAhEg3g");
	this.shape_4.setTransform(202.5,-53.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.298)").s().p("AjKDgQhUg9AAhWQAAhIA7g0IgBAVQAABdBWBDQApAgAxARQBCA2BcAAQA7AAAxgWIgLAJQhUA9h3AAQh2AAhUg9gAhbjgQhBgKAAgPQAAgOBBgLQBBgKBaAAQBdAABBAKQBBALAAAPQAAAOhBAKIgDABQhEghhVAAQhUAAhEAhIgFgBg");
	this.shape_5.setTransform(195.9,-52.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-99.6,356.6,199.1);


(lib.seblueplanet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.seplanentring();
	this.instance.setTransform(0.1,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:7.5,x:0,y:1},0).wait(1).to({rotation:15,y:0.7},0).wait(1).to({rotation:22.5,y:0.5},0).wait(1).to({rotation:30,y:0.2},0).wait(1).to({rotation:37.5,y:0},0).wait(1).to({rotation:45,y:-0.3},0).wait(1).to({rotation:52.5,x:-0.1,y:-0.5},0).wait(1).to({rotation:60,y:-0.8},0).wait(1).to({rotation:67.5,y:-1},0).wait(1).to({rotation:75,y:-1.3},0).wait(1).to({rotation:82.5,y:-1.5},0).wait(1).to({rotation:90,y:-1.8},0).wait(1).to({rotation:82.5,y:-1.5},0).wait(1).to({rotation:75,y:-1.3},0).wait(1).to({rotation:67.5,y:-1},0).wait(1).to({rotation:60,y:-0.8},0).wait(1).to({rotation:52.5,y:-0.5},0).wait(1).to({rotation:45,x:0,y:-0.3},0).wait(1).to({rotation:37.5,y:0},0).wait(1).to({rotation:30,y:0.2},0).wait(1).to({rotation:22.5,y:0.5},0).wait(1).to({rotation:15,y:0.7},0).wait(1).to({rotation:7.5,y:1},0).wait(1).to({rotation:0,x:0.1,y:1.2},0).wait(1));

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,178,196,0.8)").s().p("AhDB5QgygyAAhHQAAhGAygyQAzgzBFAAQAOAAAMACQAnBNAABcQAABdgnBNIgaACQhFAAgzgzg");
	this.shape.setTransform(-5.2,-0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(25));

	// bluebody
	this.instance_1 = new lib.sebluebody();
	this.instance_1.setTransform(0.2,-0.9,0.997,0.997,29.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.3,-24.3,46.9,46.9);


(lib.serocketship = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.serocketbody();
	this.instance.setTransform(87.4,-91.5,1,1,0,0,0,43.9,-114);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:0,y:22.5},0).wait(1).to({x:87.9,y:22.4},0).wait(1).to({x:88.3},0).wait(1).to({x:88.6,y:22.3},0).wait(1).to({x:88.1},0).wait(1).to({x:88.5},0).wait(1).to({x:88.3,y:22.2},0).wait(2).to({x:88.4,y:22.1},0).wait(1).to({x:88.3},0).wait(1).to({x:88.4},0).wait(1).to({y:22},0).wait(1).to({x:88.3},0).wait(1).to({x:88.4},0).wait(1));

	// Flames
	this.instance_1 = new lib.seFlame();
	this.instance_1.setTransform(87.7,135.2,1,1.461,0,0,0,25.4,-28.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:5.3,scaleX:0.97,scaleY:1.45,x:87.6,y:184.5},0).wait(1).to({scaleX:0.95,scaleY:1.43,y:183.9},0).wait(1).to({scaleX:0.92,scaleY:1.42,x:87.7,y:183.2},0).wait(1).to({scaleX:0.9,scaleY:1.4,y:182.6},0).wait(1).to({scaleX:0.86,scaleY:1.39,y:181.9},0).wait(1).to({scaleX:0.83,scaleY:1.34,y:180.1},0).wait(1).to({scaleX:0.8,scaleY:1.29,y:178.3},0).wait(1).to({scaleX:0.77,scaleY:1.24,x:87.6,y:176.5},0).wait(1).to({scaleX:0.75,scaleY:1.2,y:174.7},0).wait(1).to({scaleX:0.73,scaleY:1.15,y:172.9},0).wait(1).to({scaleX:0.7,scaleY:1.1,y:171},0).wait(1).to({scaleX:0.68,scaleY:1.05,x:87.7,y:169.2},0).wait(1).to({scaleX:0.67,scaleY:1,x:87.6,y:167.4},0).wait(1).to({scaleX:0.65,scaleY:0.95,y:165.6},0).wait(1));

	// r-wing
	this.instance_2 = new lib.serwing();
	this.instance_2.setTransform(128.6,111.2,1,1,0,0,0,47.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:111},0).wait(1).to({y:110.9},0).wait(1).to({y:110.8},0).wait(1).to({y:110.7},0).wait(1).to({y:110.6},0).wait(1).to({y:110.4},0).wait(1).to({y:110.3},0).wait(1).to({y:110.5},0).wait(1).to({y:110.7},0).wait(1).to({y:110.9},0).wait(1).to({y:111.1},0).wait(1).to({y:111.3},0).wait(1).to({y:111.5},0).wait(1).to({y:111.7},0).wait(1));

	// L-wing
	this.instance_3 = new lib.seLwing();
	this.instance_3.setTransform(47.2,111.2,1,1,0,0,0,47.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({y:111},0).wait(1).to({y:110.9},0).wait(1).to({y:110.8},0).wait(1).to({y:110.7},0).wait(1).to({y:110.6},0).wait(1).to({y:110.4},0).wait(1).to({y:110.3},0).wait(1).to({y:110.5},0).wait(1).to({y:110.7},0).wait(1).to({y:110.9},0).wait(1).to({y:111.1},0).wait(1).to({y:111.3},0).wait(1).to({y:111.5},0).wait(1).to({y:111.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-91.5,175.8,345.7);


// stage content:



(lib.sectionendnoloading = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("seRocketThrust");
	}
	this.frame_10 = function() {
		playSound("serockettakeoffwav");
	}
	this.frame_59 = function() {
		playSound("seRocketThrust");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(49).call(this.frame_59).wait(1));

	// Smoke
	this.instance = new lib.sesmoke();
	this.instance.setTransform(514.5,149.5,0.093,0.093,0,0,0,173.8,81);
	this.instance.alpha = 0.5;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).wait(1).to({regX:174.1,regY:81.2,scaleX:0.11,scaleY:0.11,x:514.8,y:155,alpha:0.556},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:515.2,y:160.6,alpha:0.611},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:515.6,y:166.1,alpha:0.667},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:515.9,y:171.7,alpha:0.722},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:516.3,y:177.2,alpha:0.778},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:516.6,y:182.7,alpha:0.833},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:517,y:188.3,alpha:0.889},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:517.3,y:193.8,alpha:0.944},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:517.7,y:199.4,alpha:1},0).wait(1).to({scaleX:0.31,scaleY:0.31,y:202.7,alpha:0.9},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:517.8,y:206,alpha:0.8},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:517.7,y:209.4,alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).wait(1));

	// Rocket
	this.instance_1 = new lib.serocketship();
	this.instance_1.setTransform(170.2,252.6,0.427,0.427,0,0,0,87.9,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:82.5,y:287.8},0).wait(9).to({regY:0,y:252.6},0).wait(1).to({regY:82.5,rotation:1.9,x:179.1,y:274.8},0).wait(1).to({rotation:3.7,x:188.4,y:262},0).wait(1).to({rotation:5.6,x:198.2,y:249.6},0).wait(1).to({rotation:7.5,x:208.4,y:237.5},0).wait(1).to({rotation:9.4,x:219,y:225.8},0).wait(1).to({rotation:11.2,x:230,y:214.5},0).wait(1).to({rotation:13.1,x:241.4,y:203.5},0).wait(1).to({rotation:15,x:253,y:192.7},0).wait(1).to({rotation:16.9,x:264.9,y:182.4},0).wait(1).to({rotation:18.7,x:277,y:172.2},0).wait(1).to({rotation:20.6,x:289.5,y:162.4},0).wait(1).to({rotation:22.5,x:302.1,y:152.8},0).wait(1).to({rotation:24.4,x:314.9,y:143.5},0).wait(1).to({rotation:26.2,x:327.9,y:134.4},0).wait(1).to({rotation:28.1,x:341.2,y:125.7},0).wait(1).to({rotation:30,x:354.5,y:117.1},0).wait(1).to({rotation:31.9,x:368,y:108.7},0).wait(1).to({rotation:33.7,x:381.7,y:100.4},0).wait(1).to({rotation:35.6,x:395.5,y:92.5},0).wait(1).to({rotation:37.5,x:409.4,y:84.6},0).wait(1).to({rotation:39.4,x:423.5,y:77.1},0).wait(1).to({rotation:41.2,x:437.6,y:69.6},0).wait(1).to({rotation:43.1,x:451.8,y:62.4},0).wait(1).to({rotation:45,x:466.2,y:55.2},0).wait(1).to({rotation:37.5,x:473.7,y:61.8},0).wait(1).to({rotation:30,x:481.3,y:68.1},0).wait(1).to({rotation:22.5,x:489.1,y:73.9},0).wait(1).to({rotation:15,x:497.1,y:79.4},0).wait(1).to({rotation:7.5,x:504.9,y:84.4},0).wait(1).to({rotation:0,x:512.6,y:89},0).wait(1).to({x:515.5,y:93.5},0).wait(1).to({x:518.1,y:98.1},0).wait(1).to({x:520.3,y:103},0).wait(1).to({x:522.2,y:107.9},0).wait(1).to({x:523.6,y:113.1},0).wait(1).to({x:524.5,y:118.3},0).wait(1).to({x:524.9,y:123.6},0).wait(1).to({x:524.8,y:128.9},0).wait(1).to({x:524.1,y:134.2},0).wait(1).to({x:522.9,y:139.4},0).wait(1).to({x:521.3,y:144.5},0).to({_off:true},1).wait(8));

	// Rocket-2
	this.instance_2 = new lib.serocketship();
	this.instance_2.setTransform(521.7,68,0.432,0.432,0,0,0,87.8,-91.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(51).to({_off:false},0).wait(1).to({regX:87.9,regY:82.5,y:154.4},0).wait(1).to({y:165.7},0).wait(1).to({y:177.1},0).wait(6));

	// Shadow
	this.instance_3 = new lib.seshadow();
	this.instance_3.setTransform(523.3,211.8,0.544,0.544,0,0,0,39.5,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(49).to({_off:false},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:523.2},0).wait(1).to({scaleX:0.73,scaleY:0.73},0).wait(1).to({scaleX:0.82,scaleY:0.82},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:1,scaleY:1},0).wait(6));

	// Planet
	this.instance_4 = new lib.segreenplanet2();
	this.instance_4.setTransform(576.7,130.8,1,1,0,0,0,178.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:177.3,x:575.7},0).wait(9).to({regX:178.3,x:576.7},0).wait(1).to({regX:177.3,scaleX:1.05,scaleY:1.05,x:577,y:138.8},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:578.2,y:146.9},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:579.5,y:154.9},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:580.7,y:163},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:582,y:171.1},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:583.2,y:179.1},0).wait(1).to({scaleX:1.37,scaleY:1.37,x:584.5,y:187.2},0).wait(1).to({scaleX:1.42,scaleY:1.42,x:585.8,y:195.2},0).wait(1).to({scaleX:1.47,scaleY:1.47,x:587,y:203.3},0).wait(1).to({scaleX:1.53,scaleY:1.53,x:588.3,y:211.4},0).wait(1).to({scaleX:1.58,scaleY:1.58,x:589.6,y:219.4},0).wait(1).to({scaleX:1.63,scaleY:1.63,x:590.8,y:227.5},0).wait(1).to({scaleX:1.68,scaleY:1.68,x:592.1,y:235.5},0).wait(1).to({scaleX:1.74,scaleY:1.74,x:593.4,y:243.6},0).wait(1).to({scaleX:1.79,scaleY:1.79,x:594.6,y:251.7},0).wait(1).to({scaleX:1.84,scaleY:1.84,x:595.9,y:259.7},0).wait(1).to({scaleX:1.9,scaleY:1.9,x:597.2,y:267.8},0).wait(1).to({scaleX:1.95,scaleY:1.95,x:598.4,y:275.8},0).wait(1).to({scaleX:2,scaleY:2,x:599.7,y:283.9},0).wait(1).to({scaleX:2.05,scaleY:2.05,x:601,y:292},0).wait(1).to({scaleX:2.11,scaleY:2.11,x:602.2,y:300},0).wait(1).to({scaleX:2.16,scaleY:2.16,x:603.5,y:308.1},0).wait(1).to({scaleX:2.21,scaleY:2.21,x:604.7,y:316.1},0).wait(1).to({scaleX:2.26,scaleY:2.26,x:606,y:324.2},0).wait(26));

	// Moon
	this.instance_5 = new lib.semoon();
	this.instance_5.setTransform(139.6,602.2,1,1,0,0,0,325,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11).to({scaleX:0.99,scaleY:0.99,x:136.6,y:601.1},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:133.6,y:599.9},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:130.6,y:598.8},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:127.6,y:597.6},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:124.6,y:596.5},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:121.6,y:595.3},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:118.6,y:594.2},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:115.6,y:593},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:112.6,y:591.9},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:109.6,y:590.7},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:106.6,y:589.6},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:103.6,y:588.4},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:100.6,y:587.3},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:97.6,y:586.1},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:94.6,y:585},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:91.6,y:583.8},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:88.6,y:582.7},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:85.6,y:581.5},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:82.6,y:580.4},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:79.6,y:579.2},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:76.6,y:578.1},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:73.6,y:576.9},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:70.6,y:575.8},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:67.6,y:574.6},0).wait(26));

	// starsplanets
	this.instance_6 = new lib.seyellowstar2();
	this.instance_6.setTransform(104,89.6,1,1,0,0,0,0,9.3);

	this.b1 = new lib.seblueplanet();
	this.b1.setTransform(35.9,166.6);

	this.instance_7 = new lib.seyellowstar2();
	this.instance_7.setTransform(750,21.8,1,1,0,0,0,9.3,9.3);

	this.instance_8 = new lib.seyellowstar2();
	this.instance_8.setTransform(640,258.2,1,1,0,0,0,3.9,3.9);

	this.instance_9 = new lib.seyellowstar2();
	this.instance_9.setTransform(343.3,61.6,1,1,0,0,0,9.3,9.3);

	this.instance_10 = new lib.seyellowstar2();
	this.instance_10.setTransform(154,244.9,1,1,0,0,0,9.4,9.3);

	this.instance_11 = new lib.seyellowstar2();
	this.instance_11.setTransform(566.1,327,1,1,0,0,0,9.3,9.2);

	this.instance_12 = new lib.seyellowstar2();
	this.instance_12.setTransform(339.5,283.9,1,1,0,0,0,5.5,5.5);

	this.instance_13 = new lib.seyellowstar2();
	this.instance_13.setTransform(126.2,376.8,1,1,0,0,0,8.1,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.b1},{t:this.instance_6}]}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.b1},{t:this.instance_6}]},10).wait(50));

	// tinystars
	this.instance_14 = new lib.setinystars();
	this.instance_14.setTransform(382.2,196.4,1,1,0,0,0,480.2,270.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({regY:269.5,y:195.2},0).wait(9).to({regY:270.7,y:196.4},0).wait(1).to({regY:269.5,scaleX:0.99,scaleY:0.99,x:382.3,y:195.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:382.4},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:195.1},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:382.5},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:382.6},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:382.7,y:195},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:382.8},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:382.9,y:194.9},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:383},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:383.1},0).wait(1).to({scaleX:0.91,scaleY:0.91,y:194.8},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:383.2},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:383.3},0).wait(1).to({scaleX:0.89,scaleY:0.89},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:383.4,y:194.7},0).wait(1).to({scaleX:0.88,scaleY:0.88},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:383.5,y:194.6},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:383.6},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:383.7},0).wait(1).to({scaleX:0.85,scaleY:0.85},0).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(204.6,133.2,1047.8,996.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;