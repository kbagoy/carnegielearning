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
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.plrwing = function(mode,startPosition,loop) {
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


(lib.plLwing = function(mode,startPosition,loop) {
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


(lib.plbody = function(mode,startPosition,loop) {
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


(lib.plflameshadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNEcQgbgMgagPQg9glgqgwQgvg1gUhDQgVg/AHhHQAFg7ATgzQAWg5AkgmIFAABQAVABARAYQAGAIARAjIABACQAiBGAEBQQAEBRgeBGQgZA6gxAwQgtAtg8AgIgeAQQgJAEgIAAQgGAAgHgEg");
	this.shape.setTransform(45.1,37.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.8,8.8,50.7,57.6);


(lib.plflame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F75E34").s().p("AiCBCQg/g2gehCQAPgmAWgfQALgQAIgHIFPABIATAXQAWAfAPAmQgeBCg9A1Qg5AyhMAfQhKggg4gxg");
	this.shape.setTransform(22.5,14.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45,29.5);


(lib.plstartween = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAFQgCgCAAgDQAAgCACgCQADgDACAAQAIAAAAAHQAAAIgIAAQgCAAgDgDg");
	this.shape.setTransform(556.2,152.5,1.951,1.951,0,0,0,11.2,44.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFAFQgCgCAAgDQAAgCACgCQADgDACAAQAIAAAAAHQAAAIgIAAQgCAAgDgDg");
	this.shape_1.setTransform(480.5,43.7,1.951,1.951,0,0,0,11.8,44.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSASQgHgHgBgLQABgJAHgIQAJgIAJAAQALAAAHAIQAIAIAAAJQAAALgIAHQgHAIgLAAQgJAAgJgIg");
	this.shape_2.setTransform(370.5,8,1.951,1.951);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRASQgIgHAAgLQAAgJAIgIQAIgIAJAAQALAAAHAIQAIAIAAAJQAAALgIAHQgHAIgLAAQgJAAgIgIg");
	this.shape_3.setTransform(705.6,267.6,1.951,1.951);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag6A6QgYgYAAgiQAAghAYgZQAZgYAhAAQAiAAAZAYQAYAZAAAhQAAAigYAYQgZAZgiAAQghAAgZgZg");
	this.shape_4.setTransform(256.4,332.5,1.951,1.951);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHAAQAAgHAHAAQADAAACADQADACAAACQAAADgDACQgCADgDAAQgHAAAAgIg");
	this.shape_5.setTransform(462.2,227,1.951,1.951);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRASQgIgHAAgLQAAgJAIgIQAHgIAKAAQALAAAHAIQAIAIAAAJQAAALgIAHQgIAIgKAAQgKAAgHgIg");
	this.shape_6.setTransform(-132.3,123.3,1.951,1.951);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgEAFQgDgCAAgDQAAgCADgDQACgCACAAQADAAACACQADADAAACQAAADgDACQgCADgDAAQgCAAgCgDg");
	this.shape_7.setTransform(118.5,125.9,1.951,1.951);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRASQgJgHABgLQgBgKAJgHQAHgIAKAAQALAAAHAIQAJAHgBAKQABALgJAHQgHAIgLAAQgKAAgHgIg");
	this.shape_8.setTransform(-29.8,251.4,1.951,1.951);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRASQgIgHAAgLQAAgJAIgIQAHgIAKAAQALAAAHAIQAIAIAAAJQAAALgIAHQgIAIgKAAQgKAAgHgIg");
	this.shape_9.setTransform(-695.4,72.8,1.951,1.951);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgFAFQgCgCAAgDQAAgCACgCQADgDACAAQAIAAAAAHQAAAIgIAAQgCAAgDgDg");
	this.shape_10.setTransform(-560.7,103.3,1.951,1.951);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgSASQgIgHAAgLQAAgKAIgHQAJgIAJAAQALAAAHAIQAJAHgBAKQABALgJAHQgHAIgLAAQgJAAgJgIg");
	this.shape_11.setTransform(-436.2,154.6,1.951,1.951);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRASQgIgHAAgLQAAgJAIgIQAHgIAKAAQALAAAIAIQAHAIABAJQgBALgHAHQgJAIgKAAQgKAAgHgIg");
	this.shape_12.setTransform(-604.3,204.2,1.951,1.951);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AjBDAQhQhPAAhxQAAhvBQhQQBRhQBwAAQBxAABRBQQBQBQAABvQAABxhQBPQhRBQhxAAQhwAAhRhQg");
	this.shape_13.setTransform(-414.4,289.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhiBiQgpgpAAg5QAAg4ApgpQApgpA5AAQA6AAApApQApApAAA4QAAA5gpApQgpApg6AAQg5AAgpgpg");
	this.shape_14.setTransform(260.6,122.1,1.951,1.951);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag6A7QgYgZAAgiQAAghAYgYQAZgZAhAAQAiAAAZAZQAYAYAAAhQAAAigYAZQgZAYgiAAQghAAgZgYg");
	this.shape_15.setTransform(48,-3.5,1.951,1.951);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhiBiQgpgpAAg5QAAg4ApgpQApgpA5AAQA6AAApApQApApAAA4QAAA5gpApQgpApg6AAQg5AAgpgpg");
	this.shape_16.setTransform(-279.4,40.1,1.951,1.951);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgHAAQAAgHAHAAQADAAACADQADACAAACQAAADgDACQgCADgDAAQgHAAAAgIg");
	this.shape_17.setTransform(192.3,-347.1,1.951,1.951);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgEAFQgDgCAAgDQAAgCADgDQACgCACAAQADAAACACQADADAAACQAAADgDACQgCADgDAAQgCAAgCgDg");
	this.shape_18.setTransform(-385.1,-310.9,1.951,1.951);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgHAAQAAgCADgCQACgDACAAQADAAACADQADACAAACQAAADgDADQgCACgDAAQgHAAAAgIg");
	this.shape_19.setTransform(346.8,-278.3,1.951,1.951);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgEAFQgDgCAAgDQAAgHAHAAQAIAAAAAHQAAADgDACQgCADgDAAQgCAAgCgDg");
	this.shape_20.setTransform(-658.9,-309.3,1.951,1.951);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgHAAQAAgCADgCQACgDACAAQADAAACADQADACAAACQAAAIgIAAQgHAAAAgIg");
	this.shape_21.setTransform(-148.1,-264,1.951,1.951);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgFAFQgCgCAAgDQAAgCACgCQADgDACAAQAIAAAAAHQAAAIgIAAQgCAAgDgDg");
	this.shape_22.setTransform(-346.1,-131.1,1.951,1.951);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgRASQgIgHAAgLQAAgJAIgIQAHgIAKAAQALAAAIAIQAHAIABAJQgBALgHAHQgJAIgKAAQgKAAgHgIg");
	this.shape_23.setTransform(-311.2,-310.6,1.951,1.951);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgRASQgJgHABgLQgBgKAJgHQAHgIAKAAQALAAAHAIQAJAHgBAKQABALgJAHQgHAIgLAAQgKAAgHgIg");
	this.shape_24.setTransform(-705.6,-341.9,1.951,1.951);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhiBiQgpgpAAg5QAAg4ApgpQApgpA5AAQA6AAApApQApApAAA4QAAA5gpApQgpApg6AAQg5AAgpgpg");
	this.shape_25.setTransform(280.6,-145.1,1.951,1.951);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhiBiQgpgpAAg5QAAg4ApgpQApgpA5AAQA5AAAqApQApApAAA4QAAA5gpApQgqApg5AAQg5AAgpgpg");
	this.shape_26.setTransform(664.2,-14,1.951,1.951);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhiBiQgpgpAAg5QAAg4ApgpQApgpA5AAQA6AAApApQApApAAA4QAAA5gpApQgpApg6AAQg5AAgpgpg");
	this.shape_27.setTransform(-508.3,-230.6,1.951,1.951);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Ag6A6QgYgYAAgiQAAghAYgZQAZgYAhAAQAiAAAZAYQAYAZAAAhQAAAigYAYQgZAZgiAAQghAAgZgZg");
	this.shape_28.setTransform(-545.5,-22.6,1.951,1.951);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ag6A7QgYgZAAgiQAAghAYgYQAZgZAhAAQAiAAAZAZQAYAYAAAhQAAAigYAZQgZAYgiAAQghAAgZgYg");
	this.shape_29.setTransform(458.4,-326.8,1.951,1.951);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgSASQgIgHAAgLQAAgKAIgHQAJgIAJAAQALAAAHAIQAJAHgBAKQABALgJAHQgHAIgLAAQgJAAgJgIg");
	this.shape_30.setTransform(-627.3,-118.2,1.951,1.951);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgRASQgIgHAAgLQAAgJAIgIQAIgIAJAAQALAAAHAIQAIAIAAAJQAAALgIAHQgHAIgLAAQgJAAgIgIg");
	this.shape_31.setTransform(454.9,-188.1,1.951,1.951);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgRASQgIgHAAgLQAAgJAIgIQAHgIAKAAQALAAAHAIQAIAIAAAJQAAALgIAHQgIAIgKAAQgKAAgHgIg");
	this.shape_32.setTransform(87.1,-229.8,1.951,1.951);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgSASQgHgHgBgLQABgJAHgIQAJgIAJAAQALAAAHAIQAIAIAAAJQAAALgIAHQgHAIgLAAQgJAAgJgIg");
	this.shape_33.setTransform(-181,-119.4,1.951,1.951);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-710.9,-348.7,1421.7,697.6);


(lib.plstargold = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFB95E").s().p("AgKA2Ig+AWIAUg/IgogyIBCAAIAjg3IAVA/IA/ATIg1AlIACBCg");
	this.shape.setTransform(9.4,9.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.8,18.7);


(lib.plstar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag9A+QgagZAAglQAAgjAagaQAZgaAkAAQAkAAAaAaQAaAaAAAjQAAAlgaAZQgaAagkAAQgjAAgagag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.8,-8.8,17.8,17.8);


(lib.plsmoke = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AGlKcQhkg2hChdQgVAigiAUQgjAVgpgBQg7AAgsgnQgpgogGg5Qg6ARg6AAQhDAAg+gXQgnB2hlBIQhlBLh/AAQihAAhxhxQhyhyABihIAAgIQg1AlhBABQg4AAgvgcQgugbgbguQggAQglAAQg/AAgtgtQgtgsAAhAQAAhAAtgsQAtgrA/AAIAFAAQAKgtAkghQgYgWgMgdQgPgeAAghQAAhAAtgtQAtgsA/gBQAxABAnAbQARhRBBg1QBCg1BUgBQBCAAA4AiQA3AhAeA4IAEABQAbiGBqhZQBshZCMAAQB1AABiBBQBeA/AsBoQAhglAugWQAwgWA0AAQBiAABFBGQBFBFAABiIAAAHQAXgHAZAAQA0AAAqAgQApAgANAyIADAAQBZgBBSAhQATgmAlgWQAkgYAsAAQA7AAAsApQArAoAGA7QAmgOAoAAQA2ABAxAXQAuAXAiAoQAOgDAMAAQBAAAAsAtQAuAqgBBAQABBAguAsQgsAthAAAQgMAAgOgDQghApgvAWQgxAYg2AAQgiAAghgKQgZCuiEB1QiGB2izAAQh2AAhog4g");
	this.shape.setTransform(174.1,81.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.8,8.8,308.6,144.9);


(lib.plplanentring = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#008A94").s().p("AjFCCQgDgQAQgjQANgaAMgQQgQAlATARQAQARAogCQBYgGBDhAQBfhWAZgzQAfhDheABIAVgBQAqADARATQATAWggA+QgiBAhFA9QhPBGhZAbQgfAJgWAAQgtAAgHgng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-16.9,39.8,33.8);


(lib.plgreenP2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6DA54F").s().p("AhCBDQgcgbAAgoQAAgmAcgcQAcgcAmAAQAoAAAbAcQAcAcAAAmQAAAogcAbQgbAcgoAAQgmAAgcgcg");
	this.shape.setTransform(9.6,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-9.5,19.1,19.1);


(lib.plgreenP1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#37703C").s().p("AhCBDQgcgcAAgnQAAgmAcgcQAcgcAmAAQAnAAAcAcQAcAcAAAmQAAAngcAcQgcAcgnAAQgmAAgcgcg");
	this.shape.setTransform(9.6,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-9.5,19.1,19.1);


(lib.plgiantblueplanet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32C7D8").s().p("EgDiBB1Q8YgR4YkoQ5fk01HpkUgqpgTSAAAgbSUAAAgbRAqpgTSUApXgSuA5/gAjIDigBUA7NAAAAqLASnIBhArUAqoATSAAAAbRUAAAAbSgqoATSUgqoATSg8RAAAIjigBg");
	this.shape.setTransform(22.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F8A94").s().p("EAOrA88Q5ck01JpkUgqogTSAAAgbSUAAAgbRAqogTSUAqngTSA8RAAAIDlABUg6AAAjgpVASuUgqoATSAAAAbRUAAAAbSAqoATSQVIJkZcE0QYYEocZARIjlABQ+ZAA56k6g");
	this.shape_1.setTransform(-477,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-954.1,-421.5,1908.4,843);


(lib.plbluebody = function(mode,startPosition,loop) {
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


(lib.Path_32_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AAAAOIAAgZIAAgCIAAAbg");
	this.shape.setTransform(0.1,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.2,2.9);


(lib.Path_32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AguAIIgIgIIgFgHIB3AAIgNAPg");
	this.shape.setTransform(6.1,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12.2,1.6);


(lib.Path_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AAMDRQgIAAgGgDQgJgEgIgKIgEgHQgDgJAAgHIAAlRQAAgIADgIIAEgHIAIgIIAJgGQAGgDAIAAIAPAAQgQAAgLAMQgKALAAARIAAFRQAAARAKAMQALALAQAAg");
	this.shape.setTransform(2.8,21);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.6,42);


(lib.Path_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AguAIIgOgPIB5AAIgOAPg");
	this.shape.setTransform(6.1,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12.2,1.6);


(lib.Path_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AgVBSIgDgDIAAgBIgCgEIAAgBIgBgGIAAiAQAAgKAHgHQAIgHAJAAIAfAAIgNAQIgLAAQgHAAgIAHQgHAHAAAKIAACBIABACg");
	this.shape.setTransform(2.8,8.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.7,17.4);


(lib.Path_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AANgtQAAgKgGgHQgHgGgHgBIgOgQIAVAAQAIAAAHAHQAHAHAAAKIAACAIgBAGIAAABIgBAEIgBABIgCADIgEAEg");
	this.shape.setTransform(2.3,8.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.5,17.4);


(lib.Path_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AAQAfQgOAAgIgJQgKgKAAgMQAAgLAKgKQAIgJAOAAIABAAQgMABgHAJQgJAJAAALQAAAMAJAJQAHAJAMABg");
	this.shape.setTransform(1.8,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.6,6.3);


(lib.Path_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AACBVQgGAAgKgDQgKgDgOgIIgLgIIgKgKQgGgIgEgIQgFgJgCgHQgEgOAAgLIABgRQAEgXAPgSQAFgHAIgGIAAgBIAOgJQgVAaAAAhQAAAfAVAaQAWAZAfAGQAhAGAcgQIgMAMQgaAWghAAIgIgBg");
	this.shape.setTransform(8.2,8.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.4,17.3);


(lib.Path_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AgGAVQgJgJAAgMQAAgLAJgJQAHgJAMgBIADABQgMABgHAJQgIAJAAAKQAAALAIAJQAHAJAMABIgDABQgMgBgHgJg");
	this.shape.setTransform(1.7,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.3,6.3);


(lib.Path_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AAaBAQgaAAgSgTQgTgTAAgaQAAgSALgRQANgTAUgHQAKgCAJAAIAGAAIAGABQgXAEgOASQgOASAAAWQAAAXAOASQAOASAXAEIgGABg");
	this.shape.setTransform(3.9,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.7,13);


(lib.Path_13_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_13_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AAQAfQgOAAgIgJQgKgKAAgMQAAgLAKgKQAIgJAOAAIABAAQgMABgHAJQgJAJAAALQAAAMAJAJQAHAJAMABg");
	this.shape.setTransform(1.8,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.6,6.2);


(lib.Path_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_11_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AACBVQgMgBgMgFQgHgCgJgGQgLgIgKgKQgSgWgDgcIAAgQIADgRIAHgQQAHgPAQgOIABgBIANgJQgVAaAAAhQAAAfAWAaQAVAZAfAGQAhAGAcgQIgFAGIgOAMQgHAFgJAEQgSAHgSAAIgIgBg");
	this.shape.setTransform(8.2,8.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.4,17.3);


(lib.Path_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AANAfQgMgBgHgJQgJgJAAgMQAAgLAJgJQAHgJAMgBIADABQgMACgHAIQgIAJAAAKQAAALAIAKQAHAIAMACg");
	this.shape.setTransform(1.7,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.3,6.2);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AAEBeIAAiEIgEgCIgHgHIgDgGIgCgGIgBgGQAAgHAFgIQABgDAEgCQAFgIALAAIABAAIgBABQgBAAABAAQgJADgEAHQgFAIAAAJQAAAKAFAHQAEAIAJACIgCABIAACDg");
	this.shape.setTransform(1.5,9.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2.9,18.8);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AAQAfQgOAAgIgJQgKgKAAgMQAAgLAKgKQAIgJAOAAIABAAQgMABgHAJQgJAJAAALQAAAMAJAJQAHAJAMABg");
	this.shape.setTransform(1.8,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.6,6.3);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AgGAVQgJgJAAgMQAAgLAJgJQAHgJAMgBIADABQgMABgHAJQgIAJAAAKQAAALAIAJQAHAJAMABIgDABQgMgBgHgJg");
	this.shape.setTransform(1.7,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.3,6.3);


(lib.Path_6_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AANA/QgPgEgMgJQgXgUAAgeQAAgSALgRQAKgOANgGQADgDAEgCIAEgBQAHgCALAAIAGAAIAGABQgXAEgOASQgOASAAAWQAAAXAOASQAOASAXAEIgGABg");
	this.shape.setTransform(3.9,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.7,13);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AAAgXIAAAAIAAAtIAAACg");
	this.shape.setTransform(0.1,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.2,4.9);


(lib.Path_5_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AACBVIgPgDQgMgDgNgIIgLgIIgJgKQgHgIgEgIQgFgJgCgHQgDgKgBgPQAAgJACgIQAEgXAOgSIANgNIABgBIANgJQgVAaAAAhQAAAfAWAaQAVAZAfAGQAhAGAcgQIgFAGIgHAGQgaAWghAAIgIgBg");
	this.shape.setTransform(8.2,8.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.4,17.3);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AiXAIQgFgBgEgDQgDgDAAgEIABgEIABACIABACIABACIACABIAGAAIEvAAIAEAAIACAAIACgBIABgCIABgCIABgCIABAEQAAAEgDADQgEADgFABg");
	this.shape.setTransform(16.5,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33,1.6);


(lib.Path_4_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAVAWQgGgQgNgJQgMgLgQgDQgBAAAAAAQgBAAABgBQAAgBAAAAQABgBABgBQAFgEADABQAQADALALQAMAKAGANQACAFgEAFQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAgBg");
	this.shape.setTransform(2.9,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,5.8,5.2);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AgKAlIAAhKIAUAAIAABKg");
	this.shape.setTransform(1.1,3.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2.2,7.6);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AiXAIQgFgBgEgDQgDgDAAgEIABgEIABACIABACIABACIACABIAGAAIEvAAIAEAAIACAAIACgBIABgCIABgCIABgCIABAEQAAAEgDADQgEADgFABg");
	this.shape.setTransform(16.5,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33,1.6);


(lib.Path_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAUAWQgGgQgNgJQgLgLgRgDQAAAAgBAAQAAAAAAgBQABgBAAAAQABgBABgBQAFgEADABQAQADAKALQANAKAGANQACAFgEAFQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBgBgBg");
	this.shape.setTransform(2.9,2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,5.8,5.2);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AiXAIQgFgBgEgDQgDgDAAgEIABgEIAAABIABABIABACIADADIAGAAIEvAAIAEAAIACAAIACgBIABgCIACgDIAAgBIABAEQAAAEgDADQgEADgFABg");
	this.shape.setTransform(16.5,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33,1.6);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AkcChQgIAAgIgDQgLgEgGgKIgDgFQgDgFgBgHIAAgGIAAjyIAAgIIAEgKIACgDIAEgGIADgDIAFgEIABAAIAFgDIABAAIAFgCIABAAQgPAMAAATIAADyQAAARAMAMQALALARAAIJJAAIAIgBIgFAEIAAAAIgFADIgDAAIgEACIgIAAg");
	this.shape.setTransform(32.6,16.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65.2,32.4);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AgJAeIAEg7IAOAAIgDA7g");
	this.shape.setTransform(1,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2,6.1);


(lib.Path_12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#010202").s().p("AgsA5QAIgBAKgDIABAAIARgIIAJgJQALgKAHgMIAFgNQAEgLABgQIAAgPIgDgPIAJAIIACACIAIAKQACAZgKAUQgKAXgVANQgRAMgZAAIgIAAg");
	this.shape_1.setTransform(4.6,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9.2,11.5);


(lib.Path_8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_6_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#010202").s().p("AgcANIAHgBIASgFIAKgFIAJgEIANgKIgEAMQgXANgWAAIgIAAg");
	this.shape_1.setTransform(3,1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.9,2.8);


(lib.Path_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#010202").s().p("AAQAmIgCgBIgMgFIAAgBIgJgHIgCgBIgLgJIgJgJIgLgMIgJgRIgFgSIAUANQAFANAGAJQAOAVAUANQAVANAXACIgOABQgOgBgLgEg");
	this.shape_1.setTransform(5.6,4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11.1,8.7);


(lib.Path_2_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_0_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#010202").s().p("AhACNIBAixIgEgFIgBgBIgEgFIAAgCIgEgFIAAgBQgEgJgDgKIgCgLIgBgOIAAgJIACgLIAFgTIACgGIALgUQAHgNAKgIQgCAGAAAHIAAAEIAAADIgGAJQgMAagBAdQAAAcAKAWQALATAUAMIAJAEQANAFAJAAIgNABIgLgCIAAAAQgMgCgLgGIgIgFIhKDTg");
	this.shape_1.setTransform(6.5,18.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.1,37.4);


(lib.Path_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#010202").s().p("AgyhkIAPgFIBVCzIAAAgg");
	this.shape_1.setTransform(5.1,10.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10.2,21.3);


(lib.plFlame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.plflame();
	this.instance.setTransform(25.3,-14.1,1,1,0,0,0,22.4,14.8);
	this.instance.alpha = 0.48;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FC9837").s().p("AivCiQhMhbAAhyQAAhnAqhRQANgZAQgVQAIgKAFgFIFPABIANAPQAQAVANAZQAqBRABBmQAAByhLBbQhDBShvAtQhsguhDhRg");
	this.shape.setTransform(25.3,0);

	this.instance_1 = new lib.plflameshadow();
	this.instance_1.setTransform(25.4,-0.1,1,1,0,0,0,45.1,37.6);
	this.instance_1.shadow = new cjs.Shadow("rgba(56,56,56,0.498)",0,11,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.9,-39.9,95,102);


(lib.robotrarm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_0_1();
	this.instance.setTransform(-4.8,-0.1,1,1,0,0,0,6.5,18.7);
	this.instance.alpha = 0.199;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#86888B").s().p("AhACNIBAixIgEgFIgBgBIgEgFIAAgCIgEgFIAAgBQgEgJgDgKIgBgCIgCgOIAAgSIACgLIAFgTIACgGIALgUQAHgNAKgIQgCAGAAAHIAAAEIAAADIgGAJQgMAagBAdQAAAcAKAWQALATAUAMIAJAEQANAFAJAAIgLABIgCAAIgLgCIAAAAQgMgCgLgGIgIgFIhKDTg");
	this.shape.setTransform(-4.8,-0.1);

	this.instance_1 = new lib.Path_2_0_1();
	this.instance_1.setTransform(-0.6,-1.4);
	this.instance_1.alpha = 0.199;

	this.instance_2 = new lib.Path_4_1();
	this.instance_2.setTransform(8.5,-9.2,1,1,0,0,0,3,1.4);
	this.instance_2.alpha = 0.199;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#86888B").s().p("AgcANIAHgBIAKgCIANgGIAOgGIANgKIgEAMQgXANgWAAIgIAAg");
	this.shape_1.setTransform(8.4,-9.2);

	this.instance_3 = new lib.Path_6_0_1();
	this.instance_3.setTransform(11,-9.1);
	this.instance_3.alpha = 0.199;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#86888B").s().p("Ag0BpIBKjUIAIAGQALAFAMADIhpDIg");
	this.shape_2.setTransform(-6,8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#86888B").s().p("AgdBIIgKgFQgUgMgKgTQgNgWABgaQAAgdAPgaIAFgJQAAAZAKAUQAMAWAVAKQATANAagDQAdADAagOQgDAJgGALQgOAYgWAQQgWAOgXACQgJAAgMgEg");
	this.shape_3.setTransform(2.7,-9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.instance_3},{t:this.shape_1},{t:this.instance_2},{t:this.instance_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.3,-18.8,22.7,37.6);


(lib.robotlarm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_18();
	this.instance.setTransform(6.2,8.6,1,1,0,0,0,5.1,10.7);
	this.instance.alpha = 0.199;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#86888B").s().p("AgyhkIAOgFIBXCyIAAAhg");
	this.shape.setTransform(6.2,8.6);

	this.instance_1 = new lib.Path_2_1();
	this.instance_1.setTransform(1.1,-1.6);
	this.instance_1.alpha = 0.199;

	this.instance_2 = new lib.Path_3_1();
	this.instance_2.setTransform(-5.7,-5.7,1,1,0,0,0,5.5,4.4);
	this.instance_2.alpha = 0.199;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#86888B").s().p("AAQAlIgCAAIgLgFIgBgBIgJgHIgCgBIgLgIIgJgKIgKgMIgJgRIgGgSIAUANQAFANAGAJQAOAUAUAOQAVANAXADIgOAAQgOgCgLgEg");
	this.shape_1.setTransform(-5.7,-5.7);

	this.instance_3 = new lib.Path_5_1();
	this.instance_3.setTransform(-10.2,-9.3);
	this.instance_3.alpha = 0.199;

	this.instance_4 = new lib.Path_6_1();
	this.instance_4.setTransform(-0.1,-1.4);
	this.instance_4.alpha = 0.199;

	this.instance_5 = new lib.Path_7_1();
	this.instance_5.setTransform(-10.7,-8.3);
	this.instance_5.alpha = 0.199;

	this.instance_6 = new lib.Path_8_1();
	this.instance_6.setTransform(-11.2,-10.1);
	this.instance_6.alpha = 0.199;

	this.instance_7 = new lib.Path_9_1();
	this.instance_7.setTransform(0.4,-13.4,1,1,0,0,0,4.5,5.8);
	this.instance_7.alpha = 0.199;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#86888B").s().p("AgsA5QAIgBAKgDIABAAIARgIIAJgJQALgKAHgMIAFgNQAEgLABgQIAAgPIgDgPIAJAIIACACIAIAKQACAZgKAUQgKAXgVANQgRAMgZAAIgIAAg");
	this.shape_2.setTransform(0.5,-13.5);

	this.instance_8 = new lib.Path_11_1();
	this.instance_8.setTransform(3.1,-19.2);
	this.instance_8.alpha = 0.199;

	this.instance_9 = new lib.Path_12_1();
	this.instance_9.setTransform(-4.1,-8.1);
	this.instance_9.alpha = 0.199;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#86888B").s().p("AAOgNIgOAFIgKACQgXgDgVgNQgWgOgOgWQgGgJgFgNQAZANAagDQAeADAVgOQAVgNAJgXQAKgWgBgaIAGAJQAUAegCAjQgBAhgUAYIA7C6IAAANg");
	this.shape_3.setTransform(1,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.instance_9},{t:this.instance_8},{t:this.shape_2},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.shape_1},{t:this.instance_2},{t:this.instance_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.2,-19.2,22.5,38.4);


(lib.robot = function(mode,startPosition,loop) {
if (loop == null) { loop = true; }	this.initialize(mode,startPosition,loop,{});

	// r-body
	this.instance = new lib.Path_16();
	this.instance.setTransform(-31.4,51.7,1,1,0,0,0,8.2,8.6);
	this.instance.alpha = 0.199;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464648").s().p("AACBVQgGAAgKgDQgKgDgOgIIgLgIIgKgKQgGgIgEgIQgFgJgCgHQgEgOAAgLIABgRQAEgXAPgSQAFgHAIgGIAAgBIAOgJQgVAaAAAhQAAAfAVAaQAWAZAfAGQAhAGAcgQIgMAMQgaAWghAAIgIgBg");
	this.shape.setTransform(-31.4,51.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#464648").s().p("AgCBPQghgGgVgZQgWgaAAgfQAAghAVgaQAbgPAeAEQAiAFAXAbQAVAaAAAfQABAhgVAaQgVAMgXAAQgJAAgHgCg");
	this.shape_1.setTransform(-29.1,50);

	this.instance_1 = new lib.Path_5_0();
	this.instance_1.setTransform(-0.5,51.7,1,1,0,0,0,8.2,8.6);
	this.instance_1.alpha = 0.199;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#464648").s().p("AACBVIgPgDQgMgDgNgIIgLgIIgJgKQgHgIgEgIQgFgJgCgHQgDgKgBgPQAAgJACgIQAEgXAOgSIANgNIABgBIANgJQgVAaAAAhQAAAfAWAaQAVAZAfAGQAhAGAcgQIgFAGIgHAGQgaAWghAAIgIgBg");
	this.shape_2.setTransform(-0.5,51.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#464648").s().p("AgCBPQghgGgVgZQgWgaAAgfQAAghAVgaIgHAFQAdgVAjAFQAiAFAXAbQAXAcgCAiQgBAfgUAXQgUAMgYAAQgIAAgHgCg");
	this.shape_3.setTransform(1.9,50);

	this.instance_2 = new lib.Path_11_0();
	this.instance_2.setTransform(30.5,51.7,1,1,0,0,0,8.2,8.6);
	this.instance_2.alpha = 0.199;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#464648").s().p("AACBVQgMgBgMgFQgHgCgJgGQgLgIgKgKQgSgWgDgcIAAgQIADgRIAHgQQAHgPAQgOIABgBIANgJQgVAaAAAhQAAAfAWAaQAVAZAfAGQAhAGAcgQIgFAGIgOAMQgHAFgJAEQgSAHgSAAIgIgBg");
	this.shape_4.setTransform(30.4,51.7);

	this.instance_3 = new lib.Path_13_1();
	this.instance_3.setTransform(35.1,58.7);
	this.instance_3.alpha = 0.199;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#464648").s().p("AgCBPQghgGgVgZQgWgaAAgfQAAghAVgaQAagPAfAEQAiAFAXAbQAXAcgCAiQgBAjgZAZIAFgGQgVAMgXAAIgPgCg");
	this.shape_5.setTransform(32.8,50);

	this.instance_4 = new lib.Path_20();
	this.instance_4.setTransform(43.1,50.8,1,1,0,0,0,2.2,8.7);
	this.instance_4.alpha = 0.199;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#737577").s().p("AANgtQAAgKgGgHQgHgGgHgBIgOgQIAVAAQAIAAAHAHQAHAHAAAKIAACAIgBAGIAAABIgBAEIgBABIgCADIgEAEg");
	this.shape_6.setTransform(43.1,50.8);

	this.instance_5 = new lib.Path_22();
	this.instance_5.setTransform(-42.6,50.8,1,1,0,0,0,2.8,8.7);
	this.instance_5.alpha = 0.199;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#737577").s().p("AgVBSIgDgDIAAgBIgCgEIAAgBIgBgGIAAiAQAAgKAHgHQAIgHAJAAIAfAAIgNAQIgLAAQgHAAgIAHQgHAHAAAKIAACBIABACg");
	this.shape_7.setTransform(-42.6,50.8);

	this.instance_6 = new lib.Path_24();
	this.instance_6.setTransform(16,42.9,1,1,0,0,0,6.1,0.8);
	this.instance_6.alpha = 0.199;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#737577").s().p("AguAHIgNgNIB3AAIgNANg");
	this.shape_8.setTransform(16,42.9);

	this.instance_7 = new lib.Path_26();
	this.instance_7.setTransform(-15,42.9,1,1,0,0,0,6,0.8);
	this.instance_7.alpha = 0.199;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#737577").s().p("AguAHIgIgHIgFgGIB3AAIgNANg");
	this.shape_9.setTransform(-14.9,42.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#737577").s().p("AgQBRQAdgiAEgtIAABJQgGAGgJAAgAgDhPQAHAAAHAHQAGAGAAAKIAAAnQgDgigRgcg");
	this.shape_10.setTransform(42.7,51.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#737577").s().p("AgFBRQgMAAgGgJIADAEIAAgDIAAiBQgBgJAIgIQAHgHAIAAIAKAAQgXAkACArQACArAbAiIAEAFg");
	this.shape_11.setTransform(-42.3,51.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#737577").s().p("Ag7BRQAfghAEguQAEgsgagmIBdAAQgYAkABArQACArAcAiIAGAFg");
	this.shape_12.setTransform(16,51.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#737577").s().p("Ag7BRQAgghADguQAEgsgagmIBdAAQgYAkABArQACArAdAiIAFAFg");
	this.shape_13.setTransform(-14.9,51.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#86888B").s().p("AnFCBQgQAAgMgMQgMgMAAgQIAAixQAAgXAVgMQAKgFAJAAIOKAAQALAAAJAFQAVAMAAAXIAACxQAAAQgMAMQgMAMgRAAgAEGhKIgGAEIgBABQgPAOgIAPIgGAQIgDARIAAAQQADAdASAVQAJAKAMAJQAJAFAHADQAMAEANABQAWADAWgJQAJgEAHgFIAOgMQAZgYACgkQABgigXgcQgXgbgjgEIgOgBQgbAAgYAQgAgthKIgGAEIgBABIgNAOQgOARgEAXQgCAIAAAHQABARADAKQACAHAFAKQAEAHAHAIIAJAKIALAJQANAHAMAEIARACQAkADAdgXIAHgHQAZgZABgjQACgigXgcQgXgbgkgEIgNgBQgaAAgXAQgAlihKIgHAEIAAABQgIAGgFAIQgPARgEAXIgBAPQAAAOAEANQACAHAFAKQAEAHAGAIIAKAKIALAJQAOAHAKAEQAKACAIAAQAmADAdgXIAMgNQAVgaAAggQAAgggWgaQgXgbgjgEIgNgBQgcAAgXAQgAGmhHQAaAlgEAsQgEAtgfAiIAUAAQAMAAAHgJIAAAAIADgEIAAgBIABgEIABgBIAAgGIAAiAQAAgKgHgHQgHgHgKAAIgVAAgADcBZIgFgGQgcgigCgsQgCgpAZgkIANgQIh6AAIANAQQAaAmgDArQgEAvgfAhIB4AAgAhXBZIgFgGQgdgigCgsQgBgpAYgkIANgQIh5AAIAFAHIAIAJQAaAmgEArQgDAvggAhIB5AAgAmNBZIgFgGQgcgigCgsQgCgpAZgkIANgQIghAAQgJAAgIAHQgHAIAAAJIAACAIABAGIAAABIACAEIAAABIADAEIAAAAQAGAJAMAAIAgAAg");
	this.shape_14.setTransform(0,51.1);

	this.instance_8 = new lib.Path_32_0();
	this.instance_8.setTransform(-5.1,36.6,1,1,0,0,0,0.1,1.4);
	this.instance_8.alpha = 0.199;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#737577").s().p("AAAAOIAAgZIAAgCIAAAbg");
	this.shape_15.setTransform(-5.1,36.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#737577").s().p("AGhCpIgPgQIgQAQQgGAFgHABQgHgBgFgFIgQgQIgRAQQgEAFgIABQgGgBgFgFIgRgRIgRARQgFAFgHABQgHgBgFgFIgRgRIgRARQgFAFgHABQgHgBgEgFIgSgRIgRARQgEAFgHABQgHgBgFgFIgRgRIgRARQgFAFgHABQgHgBgFgFIgRgRIgRARQgFAFgHABQgGgBgFgFIgRgRIgQARQgEAFgHABQgHgBgFgFIgRgRIgRARQgFAFgHABQgHgBgFgFIgRgRIgRARQgFAFgGABQgIgBgEgFIgRgRIgRARQgGAFgGABQgHgBgFgFIgRgRIgRARQgFAFgHABQgHgBgFgFIgRgRIgRARQgEAFgHABQgHgBgGgFIgQgQIgQAQQgGAFgHABQgHgBgFgFIgQgQIgQAQQgEAFgIABQgGgBgFgFIgQgQIgbAHQgGADgGgEQgGgDgCgHIgIgZIgMgGQgHgDgCgHQgDgGAEgGIAMgZIgQgPQgFgFAAgHQAAgHAFgFIAQgQIgQgQQgFgCAAgIQAAgHAEgEIAQgPIgPgQQgFgFAAgGQAAgHAFgFIAKgKIgGgOQgEgGADgHQACgGAGgDIANgHIAIgZQACgGAGgEQAGgDAGACIAeAJIANgOQAFgEAGAAQAIAAAEAEIARAQIAPgQQAFgEAHAAQAHAAAGAEIAQARIAQgRQAGgEAHAAQAHAAAEAEIARARIARgRQAFgEAHAAQAHAAAFAEIARARIARgRQAFgEAHAAQAGAAAGAEIARARIARgRQAEgEAIAAQAGAAAFAEIARARIARgRQAFgEAHAAQAHAAAFAEIARARIAFgFIAAAbImSAAQgKAAgKAFQgUAMAAAXIAACxQAAAQAMAMQAMAMAQAAIOKAAQARAAALgMQAMgMABgQIAAixQAAgXgWgMQgIgFgLAAImUAAIAAgeIAIAIIARgRQAFgEAHAAQAHAAAFAEIARARIARgRQAFgEAHAAQAHAAAEAEIARARIASgRQAEgEAHAAQAHAAAFAEIARARIARgRQAFgEAHAAQAHAAAFAEIARARIARgRQAFgEAGAAQAIAAAEAEIARARIAQgRQAFgEAHAAQAHAAAGAEIAPAQIAQgQQAGgEAHAAQAHAAAFAEIAMAOIAegJQAGgCAGADQAGAEACAGIAIAZIANAHQAGADACAGQACAHgDAGIgHAOIALAKQAFAFAAAHQAAAGgFAFIgOAQIAPAPQAFAEgBAHQAAAIgFACIgQAQIARAQQAFAFgBAHQAAAHgFAFIgPAPIALAZQADAGgCAGQgCAHgHADIgMAGIgIAZQgCAHgGADQgGAEgGgDIgagHIgQAQQgFAFgHABQgHgBgGgFg");
	this.shape_16.setTransform(0,51.3);

	this.instance_9 = new lib.Path_0();
	this.instance_9.setTransform(0.1,-33.8,1,1,0,0,0,32.5,16.1);
	this.instance_9.alpha = 0.199;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999B9E").s().p("AkcChQgIAAgIgDQgLgEgGgKIgDgFQgDgFgBgHIAAgGIAAjyIAAgIIAEgKIACgDIAEgGIADgDIAFgEIABAAIAFgDIABAAIAFgCIABAAQgPAMAAATIAADyQAAARAMAMQALALARAAIJJAAIAIgBIgFAEIAAAAIgFADIgDAAIgEACIgIAAg");
	this.shape_17.setTransform(0.2,-33.7);

	this.instance_10 = new lib.Path_2_0();
	this.instance_10.setTransform(16,-36.7,1,1,0,0,0,2.9,2.6);
	this.instance_10.alpha = 0.801;

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#464648").s().p("AAUAWQgGgQgNgJQgLgLgRgDQAAAAgBAAQAAAAAAgBQABgBAAAAQABgBABgBQAFgEADABQAQADAKALQANAKAGANQACAFgEAFQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAgBgBgBg");
	this.shape_18.setTransform(16,-36.7);

	this.instance_11 = new lib.Path_4_0();
	this.instance_11.setTransform(-11.6,-36.7,1,1,0,0,0,2.9,2.6);
	this.instance_11.alpha = 0.801;

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#464648").s().p("AAVAWQgGgQgNgJQgMgLgQgDQgBAAAAAAQgBAAABgBQAAgBAAAAQABgBABgBQAFgEADABQAQADALALQAMAKAGANQACAFgEAFQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAgBg");
	this.shape_19.setTransform(-11.6,-36.7);

	this.instance_12 = new lib.Path_6_0();
	this.instance_12.setTransform(10.9,-33.7,1,1,0,0,0,3.9,6.5);
	this.instance_12.alpha = 0.199;

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#464648").s().p("AANA/QgPgEgMgJQgXgUAAgeQAAgSALgRQAKgOANgGQADgDAEgCIAEgBQAHgCALAAIAGAAIAGABQgXAEgPASQgNASAAAWQAAAXANASQAPASAXAEIgGABg");
	this.shape_20.setTransform(10.8,-33.8);

	this.instance_13 = new lib.Path_8();
	this.instance_13.setTransform(12.2,-27.4);
	this.instance_13.alpha = 0.199;

	this.instance_14 = new lib.Path_10();
	this.instance_14.setTransform(-1.4,-59.3,1,1,0,0,0,1.4,9.4);
	this.instance_14.alpha = 0.199;

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999B9E").s().p("AAEBdIAAiDIgEgCIgHgGIgEgGIgBgIIgBgEQAAgIAFgIQACgEADgCQAGgGAKgBIABAAIgBABQgBAAABABQgIACgFAIQgFAHAAAKQAAAJAFAHQAEAIAJADIgBAAIAACCg");
	this.shape_21.setTransform(-1.4,-59.3);

	this.instance_15 = new lib.Path_12();
	this.instance_15.setTransform(-1.9,-68.7);
	this.instance_15.alpha = 0.199;

	this.instance_16 = new lib.Path_13_0();
	this.instance_16.setTransform(-1,-63.2);
	this.instance_16.alpha = 0.199;

	this.instance_17 = new lib.Path_14();
	this.instance_17.setTransform(-16.6,-33.7,1,1,0,0,0,3.9,6.5);
	this.instance_17.alpha = 0.199;

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#464648").s().p("AAaBAQgaAAgSgTQgTgTAAgaQAAgSALgRQANgTAUgHQAKgCAJAAIAGAAIAGABQgXAEgPASQgNASAAAWQAAAXANASQAPASAXAEIgGABg");
	this.shape_22.setTransform(-16.6,-33.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#464648").s().p("AAAA/QgVgEgPgSQgPgSAAgXQAAgWAPgSQAPgSAVgEIgFgBQAXACASATQARASAAAYQAAAZgRASQgSATgXACgAgMgzQgBABgBABQAAABAAAAQgBABABAAQAAABAAAAQAPADANALQANALAGAQQADAFADgFQAEgEgCgGQgGgOgNgLQgMgKgOgEIgBAAQgDAAgEADg");
	this.shape_23.setTransform(14.7,-33.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#464648").s().p("AAAA/QgVgEgPgSQgPgSAAgXQAAgWAPgSQAPgSAVgEIgEgBQAWACASATQARASAAAYQAAAZgRASQgSATgWACgAgNgzQgBABgBABQAAABgBAAQAAABAAAAQABABABAAQAOADANALQAOALAFAQQACAFAEgFQAEgEgDgGQgFgOgNgLQgMgKgOgEIgBAAQgDAAgEADg");
	this.shape_24.setTransform(-12.8,-33.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C0C2C4").s().p("AA+AaIAAgbQAAgJgGgFQgGgGgIAAIhrAAQgEAAAAgEQAAgEAEAAIBrAAQALAAAIAIQAJAIAAAMIAAAbQAAAEgEAAQgEAAAAgEg");
	this.shape_25.setTransform(26.1,-45.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999B9E").s().p("AkcD7QgQAAgMgLQgMgMAAgRIAAjyQAAgTAPgMIAJgBIESAAIAAABIAIAAIAAiFIABAAQgIgDgGgHQgFgIgBgJQABgKAFgHQAGgIAIgCQgBgBABAAIABAAQAMAAAGAIQAIAJAAALQAAAJgFAHQgFAHgHADIAACFIEkAAQAQAAAMAMQAMALAAARIAADyQAAATgPAMIgJABgABiAjIgDABQgFABgEADQgNAGgLAPQgKAQgBAUQAAAfAYATQAMAKARAEIASABQAZgDASgSQARgTAAgZQAAgZgRgTQgSgSgZgDIgGAAQgKAAgIADgAivAjQgWAGgNAUQgLAQAAAUQAAAbATATQATATAbAAIAGAAQAZgDARgSQARgTAAgZQAAgZgRgTQgRgSgZgDIgGAAQgJAAgKADgACsgvQAAAEAEAAIBtAAQAIAAAGAGQAGAFAAAJIAAAbQAAAEAEAAQAEAAAAgEIAAgbQAAgMgJgIQgIgIgLAAIhtAAQgEAAAAAEg");
	this.shape_26.setTransform(1.8,-43.5);

	this.instance_18 = new lib.Path();
	this.instance_18.setTransform(-1.4,-14.4,1,1,0,0,0,1,3.1);
	this.instance_18.alpha = 0.199;

	this.instance_19 = new lib.Path_2();
	this.instance_19.setTransform(-2.4,-17.5);
	this.instance_19.alpha = 0.199;

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999B9E").s().p("AAiAaIAAgbQAAgJgGgFQgGgGgJAAIgyAAQgEAAAAgEQAAgEAEAAIAyAAQAMAAAIAIQAJAJAAALIAAAbQAAAEgEAAQgEAAAAgEg");
	this.shape_27.setTransform(28.1,-7.6);

	this.instance_20 = new lib.Path_1();
	this.instance_20.setTransform(-6,17.2,1,1,0,0,0,16.4,0.8);
	this.instance_20.alpha = 0.199;

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#86888B").s().p("AiXAIQgFgBgEgDQgDgDAAgEIABgEIAAABIABABIABACIADADIAGAAIEvAAIAEAAIACAAIACgBIABgCIACgDIAAgBIABAEQAAAEgDADQgEADgFABg");
	this.shape_28.setTransform(-5.9,17.2);

	this.instance_21 = new lib.Path_3();
	this.instance_21.setTransform(-6,9.6,1,1,0,0,0,16.4,0.8);
	this.instance_21.alpha = 0.199;

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#86888B").s().p("AiXAIQgFgBgEgDQgDgDAAgEIABgEIABACIABACIABACIACABIAGAAIEvAAIAEAAIACAAIACgBIABgCIABgCIABgCIABAEQAAAEgDADQgEADgFABg");
	this.shape_29.setTransform(-5.9,9.6);

	this.instance_22 = new lib.Path_5();
	this.instance_22.setTransform(-6,1.9,1,1,0,0,0,16.4,0.8);
	this.instance_22.alpha = 0.199;

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#86888B").s().p("AiXAIQgFgBgEgDQgDgDAAgEIABgEIABACIABACIABACIACABIAGAAIEvAAIAEAAIACAAIACgBIABgCIABgCIABgCIABAEQAAAEgDADQgEADgFABg");
	this.shape_30.setTransform(-5.9,1.9);

	this.instance_23 = new lib.Path_7();
	this.instance_23.setTransform(17.8,16.3,1,1,0,0,0,1.7,3.1);
	this.instance_23.alpha = 0.199;

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#91C659").s().p("AgGAVQgJgJAAgMQAAgLAJgJQAGgJANgBIADABQgMABgHAJQgJAJABAKQgBALAJAJQAHAJAMABIgDABQgNgBgGgJg");
	this.shape_31.setTransform(17.8,16.3);

	this.instance_24 = new lib.Path_9();
	this.instance_24.setTransform(17.4,16.3,1,1,0,0,0,1.8,3.1);
	this.instance_24.alpha = 0.199;

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#86888B").s().p("AAQAfQgOAAgIgJQgKgKAAgMQAAgLAKgKQAIgJAOAAIABAAQgMABgHAJQgJAJAAALQAAAMAJAJQAHAJAMABg");
	this.shape_32.setTransform(17.3,16.3);

	this.instance_25 = new lib.Path_11();
	this.instance_25.setTransform(17.8,8.5,1,1,0,0,0,1.7,3.1);
	this.instance_25.alpha = 0.199;

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFB95E").s().p("AANAfQgNgBgGgJQgJgJAAgMQAAgLAJgJQAGgJANAAIADAAQgMABgHAJQgJAIABALQgBALAJAKQAHAIAMACg");
	this.shape_33.setTransform(17.8,8.5);

	this.instance_26 = new lib.Path_13();
	this.instance_26.setTransform(17.4,8.5,1,1,0,0,0,1.8,3.1);
	this.instance_26.alpha = 0.199;

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#86888B").s().p("AAQAfQgOgBgIgIQgKgKAAgMQAAgLAKgJQAIgKAOABIABAAQgMAAgHAJQgJAJAAALQAAAMAJAJQAHAJAMABg");
	this.shape_34.setTransform(17.3,8.5);

	this.instance_27 = new lib.Path_15();
	this.instance_27.setTransform(17.8,0.7,1,1,0,0,0,1.7,3.1);
	this.instance_27.alpha = 0.199;

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#911356").s().p("AgGAVQgJgJAAgMQAAgLAJgJQAGgJANgBIADABQgMABgHAJQgJAJABAKQgBALAJAJQAHAJAMABIgDABQgNgBgGgJg");
	this.shape_35.setTransform(17.8,0.7);

	this.instance_28 = new lib.Path_17();
	this.instance_28.setTransform(17.4,0.7,1,1,0,0,0,1.8,3.1);
	this.instance_28.alpha = 0.199;

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#86888B").s().p("AAQAfQgOAAgIgJQgKgKAAgMQAAgLAKgKQAIgJAOAAIABAAQgMABgHAJQgJAJAAALQAAAMAJAJQAHAJAMABg");
	this.shape_36.setTransform(17.3,0.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#5E5F61").s().p("AiXAMIgGgCIgDgDIgBgCIgBgBIgBgEQAAgEADgDQAEgDAFgBIEvAAQAFABAEADQADADAAAEIgBAEIgCADIgBACIgCABIgCABIgEABg");
	this.shape_37.setTransform(-5.9,16);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#5E5F61").s().p("AiXAMIgGgCIgCgBIgBgCIgBgCIgBgCIgBgDQAAgEADgDQAEgDAFgBIEvAAQAFABAEADQADADAAAEIgBADIgBACIgBACIgBACIgCABIgCABIgEABg");
	this.shape_38.setTransform(-5.9,8.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#5E5F61").s().p("AiXAMIgGgCIgCgBIgBgCIgBgCIgBgBIgBgEQAAgDADgEQAEgEAFAAIEvAAQAFAAAEAEQADAEAAADIgBAEIgBABIgBACIgBACIgCABIgCABIgEABg");
	this.shape_39.setTransform(-5.9,0.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#91C659").s().p("AgBAfIABgBQgLgBgIgJQgJgJAAgLQAAgKAJgJQAIgJALgBIgBgBIABAAQALAAAJAJQAJAKAAALQAAANgJAJQgJAJgLAAg");
	this.shape_40.setTransform(19.4,16.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFB95E").s().p("AgTAVQgJgKAAgLQAAgLAJgIQAIgJALgBIgBAAIABAAQALgBAJAKQAJAIAAAMQAAAMgJAKQgJAIgLABQgLgCgIgIg");
	this.shape_41.setTransform(19.4,8.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#911356").s().p("AgBAfIABgBQgLgBgIgJQgJgJAAgLQAAgKAJgJQAIgJALgBIgBgBIABAAQALAAAJAJQAJAKAAALQAAANgJAJQgJAJgLAAg");
	this.shape_42.setTransform(19.4,0.7);

	this.instance_29 = new lib.Path_25();
	this.instance_29.setTransform(-30.6,9.5,1,1,0,0,0,2.8,20.9);
	this.instance_29.alpha = 0.199;

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#86888B").s().p("AAMDRQgIAAgGgDQgJgEgIgKIgEgHQgDgJAAgHIAAlRQAAgIADgIIAEgHIAIgIIAJgGQAGgDAIAAIAPAAQgQAAgLAMQgKALAAARIAAFRQAAARAKAMQALALAQAAg");
	this.shape_43.setTransform(-30.6,9.5);

	this.instance_30 = new lib.Path_27();
	this.instance_30.setTransform(-33.4,4.1);
	this.instance_30.alpha = 0.199;

	this.instance_31 = new lib.Path_28();
	this.instance_31.setTransform(-33.4,4.1);
	this.instance_31.alpha = 0.199;

	this.instance_32 = new lib.Path_30();
	this.instance_32.setTransform(-33.4,-9);
	this.instance_32.alpha = 0.199;

	this.instance_33 = new lib.Path_31();
	this.instance_33.setTransform(-30.9,-11.4);
	this.instance_33.alpha = 0.199;

	this.instance_34 = new lib.Path_32();
	this.instance_34.setTransform(-33.4,7.4);
	this.instance_34.alpha = 0.199;

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#86888B").s().p("AkcDRQgQAAgMgLQgMgMAAgRIAAlRQAAgRAMgLQAMgMAQAAII5AAQAQAAAMAMQAMALAAARIAAFRQAAARgMAMQgMALgQAAgACdAtQgKAKAAANQAAAMAKAKQAKAJAOAAIADAAQANAAAJgJQAJgJAAgNQAAgNgJgKQgJgJgNAAIgDAAQgOAAgKAJgAjjA4QgDADAAAFIABAFIgBADQAAAFADAEQAEADAFAAIEvAAQAFAAAEgDQADgEAAgFIgBgDIABgFQAAgFgDgDQgEgEgFAAIkvAAQgFAAgEAEgACdgfQgKAKAAAMQAAALAKAJQAKAJAOAAIADAAQANAAAJgJQAJgJAAgLQAAgNgJgJQgJgJgNAAIgDAAQgOAAgKAJgAjjgTQgDAEAAAFIABAEIgBAEQAAADADADQAEAEAFAAIEvAAQAFAAAEgEQADgDAAgDIgBgEIABgEQAAgFgDgEQgEgDgFAAIkvAAQgFAAgEADgACdhtQgKAJAAANQAAANAKAJQAKAJAOAAIADAAQANAAAJgJQAJgJAAgNQAAgNgJgJQgJgJgNAAIgDAAQgOAAgKAJgAjjhgQgDAEAAAFIABAEIgBAEQAAAFADAEQAEADAFAAIEvAAQAFAAAEgDQADgEAAgFIgBgEIABgEQAAgFgDgEQgEgDgFAAIkvAAQgFAAgEADgADmjEQAAAEAEAAIA0AAQAJAAAGAGQAGAFAAAJIAAAdQAAAEAEAAQAEAAAAgEIAAgdQAAgMgJgIQgIgIgMAAIg0AAQgEAAAAAEg");
	this.shape_44.setTransform(0.8,9.5);

	this.instance_35 = new lib.Path_4();
	this.instance_35.setTransform(-3.9,34.3,1,1,0,0,0,1.1,3.8);
	this.instance_35.alpha = 0.199;

	this.instance_36 = new lib.Path_6();
	this.instance_36.setTransform(-5.1,33,1,1,0,0,0,0.1,2.5);
	this.instance_36.alpha = 0.199;

	this.instance_37 = new lib.Path_3_0();
	this.instance_37.setTransform(33.3,-15.8);
	this.instance_37.alpha = 0.199;

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#86888B").s().p("AgwAlIAAhJIBhAAIAABJg");
	this.shape_45.setTransform(0,34.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#737577").s().p("AgWAeIADg7IAmAAIAEA7g");
	this.shape_46.setTransform(0,-14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.shape_44},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.shape_43},{t:this.instance_29},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.instance_28},{t:this.shape_35},{t:this.instance_27},{t:this.shape_34},{t:this.instance_26},{t:this.shape_33},{t:this.instance_25},{t:this.shape_32},{t:this.instance_24},{t:this.shape_31},{t:this.instance_23},{t:this.shape_30},{t:this.instance_22},{t:this.shape_29},{t:this.instance_21},{t:this.shape_28},{t:this.instance_20},{t:this.shape_27},{t:this.instance_19},{t:this.instance_18},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.shape_21},{t:this.instance_14},{t:this.instance_13},{t:this.shape_20},{t:this.instance_12},{t:this.shape_19},{t:this.instance_11},{t:this.shape_18},{t:this.instance_10},{t:this.shape_17},{t:this.instance_9},{t:this.shape_16},{t:this.shape_15},{t:this.instance_8},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.instance_7},{t:this.shape_8},{t:this.instance_6},{t:this.shape_7},{t:this.instance_5},{t:this.shape_6},{t:this.instance_4},{t:this.shape_5},{t:this.instance_3},{t:this.shape_4},{t:this.instance_2},{t:this.shape_3},{t:this.shape_2},{t:this.instance_1},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(20));

	// r-l-arm
	this.instance_38 = new lib.robotlarm();
	this.instance_38.setTransform(-44.6,-11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(20));

	// r-r-arm
	this.instance_39 = new lib.robotrarm();
	this.instance_39.setTransform(30.8,7.8,0.999,0.999,29.8,0,0,-11.3,18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:28.1,x:49.5,y:-3.2},0).wait(1).to({rotation:26.4,x:49.1,y:-3.7},0).wait(1).to({rotation:24.8,x:48.8,y:-4.2},0).wait(1).to({rotation:23.1,x:48.4,y:-4.8},0).wait(1).to({rotation:21.5,x:48.1,y:-5.3},0).wait(1).to({rotation:19.8,x:47.7,y:-5.8},0).wait(1).to({rotation:18.1,x:47.3,y:-6.2},0).wait(1).to({rotation:16.5,x:46.9,y:-6.7},0).wait(1).to({rotation:14.8,x:46.4,y:-7.2},0).wait(1).to({rotation:16.3,x:46.8,y:-6.8},0).wait(1).to({rotation:17.8,x:47.2,y:-6.3},0).wait(1).to({rotation:19.3,x:47.6,y:-5.9},0).wait(1).to({rotation:20.8,x:47.9,y:-5.5},0).wait(1).to({rotation:22.3,x:48.3,y:-5},0).wait(1).to({rotation:23.8,x:48.6,y:-4.5},0).wait(1).to({rotation:25.3,x:48.9,y:-4.1},0).wait(1).to({rotation:26.8,x:49.2,y:-3.6},0).wait(1).to({rotation:28.3,x:49.5,y:-3.1},0).wait(1).to({rotation:29.8,x:49.8,y:-2.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.9,-68.7,123.5,137.5);


(lib.pltinystars = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.plstar();
	this.instance.setTransform(218,458,0.293,0.293,0,0,0,5.7,4.8);
	this.instance.alpha = 0.699;

	this.circle = new lib.plstar();
	this.circle.setTransform(878.2,532.2,0.293,0.293);
	this.circle.alpha = 0.699;

	this.instance_1 = new lib.plstar();
	this.instance_1.setTransform(945.1,486.7,0.293,0.293,0,0,0,4.5,3.8);
	this.instance_1.alpha = 0.699;

	this.instance_2 = new lib.plstar();
	this.instance_2.setTransform(756,513.2,0.293,0.293,0,0,0,3.9,3.8);
	this.instance_2.alpha = 0.699;

	this.instance_3 = new lib.plstar();
	this.instance_3.setTransform(756,444.7,0.293,0.293,0,0,0,3.9,6.5);
	this.instance_3.alpha = 0.699;

	this.circle_1 = new lib.plstar();
	this.circle_1.setTransform(785.5,532.2,0.293,0.293);
	this.circle_1.alpha = 0.699;

	this.instance_4 = new lib.plstar();
	this.instance_4.setTransform(843.2,520.2,0.293,0.293,0,0,0,3.8,8);
	this.instance_4.alpha = 0.699;

	this.instance_5 = new lib.plstar();
	this.instance_5.setTransform(872.2,422,0.293,0.293,0,0,0,3.8,8.3);
	this.instance_5.alpha = 0.699;

	this.circle_2 = new lib.plstar();
	this.circle_2.setTransform(909.4,448.3,0.293,0.293);
	this.circle_2.alpha = 0.699;

	this.instance_6 = new lib.plstar();
	this.instance_6.setTransform(884.9,487.8,0.293,0.293,0,0,0,4.6,7.5);
	this.instance_6.alpha = 0.699;

	this.circle_3 = new lib.plstar();
	this.circle_3.setTransform(855.9,462.4,0.293,0.293);
	this.circle_3.alpha = 0.699;

	this.circle_4 = new lib.plstar();
	this.circle_4.setTransform(78.6,538.9,0.293,0.293);
	this.circle_4.alpha = 0.699;

	this.instance_7 = new lib.plstar();
	this.instance_7.setTransform(47.2,517.3,0.293,0.293,0,0,0,5.5,6.7);
	this.instance_7.alpha = 0.699;

	this.instance_8 = new lib.plstar();
	this.instance_8.setTransform(108.1,510.5,0.293,0.293,0,0,0,5.7,3.6);
	this.instance_8.alpha = 0.699;

	this.instance_9 = new lib.plstar();
	this.instance_9.setTransform(187.4,458,0.293,0.293,0,0,0,6.3,4.8);
	this.instance_9.alpha = 0.699;

	this.circle_5 = new lib.plstar();
	this.circle_5.setTransform(609,523.7,0.293,0.293);
	this.circle_5.alpha = 0.699;

	this.instance_10 = new lib.plstar();
	this.instance_10.setTransform(652.4,511.3,0.293,0.293,0,0,0,5.8,2.8);
	this.instance_10.alpha = 0.699;

	this.circle_6 = new lib.plstar();
	this.circle_6.setTransform(719,517.9,0.293,0.293);
	this.circle_6.alpha = 0.699;

	this.circle_7 = new lib.plstar();
	this.circle_7.setTransform(754.8,474.8,0.293,0.293);
	this.circle_7.alpha = 0.699;

	this.instance_11 = new lib.plstar();
	this.instance_11.setTransform(807.3,490.8,0.293,0.293,0,0,0,6.3,7.7);
	this.instance_11.alpha = 0.699;

	this.instance_12 = new lib.plstar();
	this.instance_12.setTransform(720.6,434,0.293,0.293,0,0,0,5.5,6.7);
	this.instance_12.alpha = 0.699;

	this.instance_13 = new lib.plstar();
	this.instance_13.setTransform(685.8,372.7,0.293,0.293,0,0,0,7.4,6);
	this.instance_13.alpha = 0.699;

	this.instance_14 = new lib.plstar();
	this.instance_14.setTransform(843.2,136.5,0.293,0.293,0,0,0,3.8,5.7);
	this.instance_14.alpha = 0.699;

	this.circle_8 = new lib.plstar();
	this.circle_8.setTransform(883.5,162.5,0.293,0.293);
	this.circle_8.alpha = 0.699;

	this.instance_15 = new lib.plstar();
	this.instance_15.setTransform(953.4,168,0.293,0.293,0,0,0,3.8,6.5);
	this.instance_15.alpha = 0.699;

	this.circle_9 = new lib.plstar();
	this.circle_9.setTransform(940.7,282.1,0.293,0.293);
	this.circle_9.alpha = 0.699;

	this.instance_16 = new lib.plstar();
	this.instance_16.setTransform(859.2,337.6,0.293,0.293,0,0,0,5.7,2.8);
	this.instance_16.alpha = 0.699;

	this.instance_17 = new lib.plstar();
	this.instance_17.setTransform(902.9,296.4,0.293,0.293,0,0,0,5,4.5);
	this.instance_17.alpha = 0.699;

	this.circle_10 = new lib.plstar();
	this.circle_10.setTransform(909.4,199.6,0.293,0.293);
	this.circle_10.alpha = 0.699;

	this.instance_18 = new lib.plstar();
	this.instance_18.setTransform(807.3,42.2,0.293,0.293,0,0,0,6.3,6.9);
	this.instance_18.alpha = 0.699;

	this.instance_19 = new lib.plstar();
	this.instance_19.setTransform(747.3,59.2,0.293,0.293,0,0,0,5.3,4.8);
	this.instance_19.alpha = 0.699;

	this.instance_20 = new lib.plstar();
	this.instance_20.setTransform(747.3,115.4,0.293,0.293,0,0,0,5.3,4.1);
	this.instance_20.alpha = 0.699;

	this.instance_21 = new lib.plstar();
	this.instance_21.setTransform(711.8,178.5,0.293,0.293,0,0,0,5.7,6.7);
	this.instance_21.alpha = 0.699;

	this.instance_22 = new lib.plstar();
	this.instance_22.setTransform(905.1,138.2,0.293,0.293,0,0,0,3.9,5.7);
	this.instance_22.alpha = 0.699;

	this.instance_23 = new lib.plstar();
	this.instance_23.setTransform(856.5,195.1,0.293,0.293,0,0,0,3.2,4.8);
	this.instance_23.alpha = 0.699;

	this.circle_11 = new lib.plstar();
	this.circle_11.setTransform(827,230.1,0.293,0.293);
	this.circle_11.alpha = 0.699;

	this.instance_24 = new lib.plstar();
	this.instance_24.setTransform(807.3,287,0.293,0.293,0,0,0,6.3,4.8);
	this.instance_24.alpha = 0.699;

	this.circle_12 = new lib.plstar();
	this.circle_12.setTransform(857.8,300.6,0.293,0.293);
	this.circle_12.alpha = 0.699;

	this.instance_25 = new lib.plstar();
	this.instance_25.setTransform(707.9,281.6,0.293,0.293,0,0,0,4.1,5.7);
	this.instance_25.alpha = 0.699;

	this.instance_26 = new lib.plstar();
	this.instance_26.setTransform(659.4,87,0.293,0.293,0,0,0,4.1,4.2);
	this.instance_26.alpha = 0.699;

	this.instance_27 = new lib.plstar();
	this.instance_27.setTransform(569.9,122.5,0.293,0.293,0,0,0,4.2,3.8);
	this.instance_27.alpha = 0.699;

	this.circle_13 = new lib.plstar();
	this.circle_13.setTransform(661.5,124.4,0.293,0.293);
	this.circle_13.alpha = 0.699;

	this.circle_14 = new lib.plstar();
	this.circle_14.setTransform(775,76.4,0.293,0.293);
	this.circle_14.alpha = 0.699;

	this.circle_15 = new lib.plstar();
	this.circle_15.setTransform(700.2,140.1,0.293,0.293);
	this.circle_15.alpha = 0.699;

	this.instance_28 = new lib.plstar();
	this.instance_28.setTransform(335.7,106.5,0.293,0.293,0,0,0,8.3,4.6);
	this.instance_28.alpha = 0.699;

	this.instance_29 = new lib.plstar();
	this.instance_29.setTransform(335.7,160.9,0.293,0.293,0,0,0,3.6,6.5);
	this.instance_29.alpha = 0.699;

	this.circle_16 = new lib.plstar();
	this.circle_16.setTransform(379,137.4,0.293,0.293);
	this.circle_16.alpha = 0.699;

	this.circle_17 = new lib.plstar();
	this.circle_17.setTransform(17.3,219.1,0.293,0.293);
	this.circle_17.alpha = 0.699;

	this.instance_30 = new lib.plstar();
	this.instance_30.setTransform(90.2,218.3,0.293,0.293,0,0,0,2.9,3.6);
	this.instance_30.alpha = 0.699;

	this.instance_31 = new lib.plstar();
	this.instance_31.setTransform(44,195.9,0.293,0.293,0,0,0,5.7,7.5);
	this.instance_31.alpha = 0.699;

	this.circle_18 = new lib.plstar();
	this.circle_18.setTransform(49,230.1,0.293,0.293);
	this.circle_18.alpha = 0.699;

	this.circle_19 = new lib.plstar();
	this.circle_19.setTransform(231.4,186,0.293,0.293);
	this.circle_19.alpha = 0.699;

	this.circle_20 = new lib.plstar();
	this.circle_20.setTransform(805.7,387.9,0.293,0.293);
	this.circle_20.alpha = 0.699;

	this.circle_21 = new lib.plstar();
	this.circle_21.setTransform(839.3,413.1,0.293,0.293);
	this.circle_21.alpha = 0.699;

	this.circle_22 = new lib.plstar();
	this.circle_22.setTransform(782.7,187.6,0.293,0.293);
	this.circle_22.alpha = 0.699;

	this.instance_32 = new lib.plstar();
	this.instance_32.setTransform(255.6,106.5,0.293,0.293,0,0,0,5,4.6);
	this.instance_32.alpha = 0.699;

	this.circle_23 = new lib.plstar();
	this.circle_23.setTransform(80.2,178.5,0.293,0.293);
	this.circle_23.alpha = 0.699;

	this.circle_24 = new lib.plstar();
	this.circle_24.setTransform(84.8,107.6,0.293,0.293);
	this.circle_24.alpha = 0.699;

	this.circle_25 = new lib.plstar();
	this.circle_25.setTransform(58.5,140.1,0.293,0.293);
	this.circle_25.alpha = 0.699;

	this.instance_33 = new lib.plstar();
	this.instance_33.setTransform(255.6,160.9,0.293,0.293,0,0,0,5,6.5);
	this.instance_33.alpha = 0.699;

	this.circle_26 = new lib.plstar();
	this.circle_26.setTransform(275.5,194.2,0.293,0.293);
	this.circle_26.alpha = 0.699;

	this.circle_27 = new lib.plstar();
	this.circle_27.setTransform(289.8,131.6,0.293,0.293);
	this.circle_27.alpha = 0.699;

	this.circle_28 = new lib.plstar();
	this.circle_28.setTransform(205,121.4,0.293,0.293);
	this.circle_28.alpha = 0.699;

	this.circle_29 = new lib.plstar();
	this.circle_29.setTransform(224.4,154.2,0.293,0.293);
	this.circle_29.alpha = 0.699;

	this.circle_30 = new lib.plstar();
	this.circle_30.setTransform(244.2,222.6,0.293,0.293);
	this.circle_30.alpha = 0.699;

	this.circle_31 = new lib.plstar();
	this.circle_31.setTransform(160.3,79.7,0.293,0.293);
	this.circle_31.alpha = 0.699;

	this.circle_32 = new lib.plstar();
	this.circle_32.setTransform(179,145.7,0.293,0.293);
	this.circle_32.alpha = 0.699;

	this.circle_33 = new lib.plstar();
	this.circle_33.setTransform(130.5,107.6,0.293,0.293);
	this.circle_33.alpha = 0.699;

	this.circle_34 = new lib.plstar();
	this.circle_34.setTransform(140.2,178.5,0.293,0.293);
	this.circle_34.alpha = 0.699;

	this.circle_35 = new lib.plstar();
	this.circle_35.setTransform(188,201.2,0.293,0.293);
	this.circle_35.alpha = 0.699;

	this.circle_36 = new lib.plstar();
	this.circle_36.setTransform(166.8,233.2,0.293,0.293);
	this.circle_36.alpha = 0.699;

	this.circle_37 = new lib.plstar();
	this.circle_37.setTransform(166.8,172.2,0.293,0.293);
	this.circle_37.alpha = 0.699;

	this.circle_38 = new lib.plstar();
	this.circle_38.setTransform(63.1,63.7,0.293,0.293);
	this.circle_38.alpha = 0.699;

	this.circle_39 = new lib.plstar();
	this.circle_39.setTransform(94.3,81.3,0.293,0.293);
	this.circle_39.alpha = 0.699;

	this.circle_40 = new lib.plstar();
	this.circle_40.setTransform(17.3,105.9,0.293,0.293);
	this.circle_40.alpha = 0.699;

	this.instance_34 = new lib.plstar();
	this.instance_34.setTransform(29.4,2.3,0.293,0.293,0,0,0,4.8,7.5);
	this.instance_34.alpha = 0.699;

	this.circle_41 = new lib.plstar();
	this.circle_41.setTransform(49,35.2,0.293,0.293);
	this.circle_41.alpha = 0.699;

	this.circle_42 = new lib.plstar();
	this.circle_42.setTransform(765.6,256.9,0.293,0.293);
	this.circle_42.alpha = 0.699;

	this.circle_43 = new lib.plstar();
	this.circle_43.setTransform(2.6,139.8,0.293,0.293);
	this.circle_43.alpha = 0.699;

	this.instance_35 = new lib.plstar();
	this.instance_35.setTransform(413.8,103.5,0.293,0.293,0,0,0,4.8,6.5);
	this.instance_35.alpha = 0.699;

	this.circle_44 = new lib.plstar();
	this.circle_44.setTransform(684.7,426.9,0.293,0.293);
	this.circle_44.alpha = 0.699;

	this.circle_45 = new lib.plstar();
	this.circle_45.setTransform(9.8,177.1,0.293,0.293);
	this.circle_45.alpha = 0.699;

	this.circle_46 = new lib.plstar();
	this.circle_46.setTransform(725.6,249.6,0.293,0.293);
	this.circle_46.alpha = 0.699;

	this.circle_47 = new lib.plstar();
	this.circle_47.setTransform(707,312.5,0.293,0.293);
	this.circle_47.alpha = 0.699;

	this.instance_36 = new lib.plstar();
	this.instance_36.setTransform(942.6,62.2,0.293,0.293,0,0,0,6.3,5.7);
	this.instance_36.alpha = 0.699;

	this.circle_48 = new lib.plstar();
	this.circle_48.setTransform(104.3,142.3,0.293,0.293);
	this.circle_48.alpha = 0.699;

	this.circle_49 = new lib.plstar();
	this.circle_49.setTransform(827,102,0.293,0.293);
	this.circle_49.alpha = 0.699;

	this.circle_50 = new lib.plstar();
	this.circle_50.setTransform(805.7,337.6,0.293,0.293);
	this.circle_50.alpha = 0.699;

	this.circle_51 = new lib.plstar();
	this.circle_51.setTransform(957.8,327.4,0.293,0.293);
	this.circle_51.alpha = 0.699;

	this.instance_37 = new lib.plstar();
	this.instance_37.setTransform(798.7,430.9,0.293,0.293,0,0,0,6.5,4.6);
	this.instance_37.alpha = 0.699;

	this.circle_52 = new lib.plstar();
	this.circle_52.setTransform(754.8,413.1,0.293,0.293);
	this.circle_52.alpha = 0.699;

	this.circle_53 = new lib.plstar();
	this.circle_53.setTransform(17.3,63.7,0.293,0.293);
	this.circle_53.alpha = 0.699;

	this.circle_54 = new lib.plstar();
	this.circle_54.setTransform(693.8,470.2,0.293,0.293);
	this.circle_54.alpha = 0.699;

	this.circle_55 = new lib.plstar();
	this.circle_55.setTransform(2.6,29.9,0.293,0.293);
	this.circle_55.alpha = 0.699;

	this.circle_56 = new lib.plstar();
	this.circle_56.setTransform(938.3,119.5,0.293,0.293);
	this.circle_56.alpha = 0.699;

	this.circle_57 = new lib.plstar();
	this.circle_57.setTransform(766.7,360.6,0.293,0.293);
	this.circle_57.alpha = 0.699;

	this.circle_58 = new lib.plstar();
	this.circle_58.setTransform(743.1,306.2,0.293,0.293);
	this.circle_58.alpha = 0.699;

	this.circle_59 = new lib.plstar();
	this.circle_59.setTransform(852.8,62.8,0.293,0.293);
	this.circle_59.alpha = 0.699;

	this.circle_60 = new lib.plstar();
	this.circle_60.setTransform(881.4,376,0.293,0.293);
	this.circle_60.alpha = 0.699;

	this.circle_61 = new lib.plstar();
	this.circle_61.setTransform(875.5,119.5,0.293,0.293);
	this.circle_61.alpha = 0.699;

	this.instance_38 = new lib.plstar();
	this.instance_38.setTransform(597.9,481.8,0.293,0.293,0,0,0,2.8,5.7);
	this.instance_38.alpha = 0.699;

	this.circle_62 = new lib.plstar();
	this.circle_62.setTransform(898.4,72.2,0.293,0.293);
	this.circle_62.alpha = 0.699;

	this.circle_63 = new lib.plstar();
	this.circle_63.setTransform(832.7,362.8,0.293,0.293);
	this.circle_63.alpha = 0.699;

	this.circle_64 = new lib.plstar();
	this.circle_64.setTransform(664,454.9,0.293,0.293);
	this.circle_64.alpha = 0.699;

	this.circle_65 = new lib.plstar();
	this.circle_65.setTransform(942.6,422,0.293,0.293);
	this.circle_65.alpha = 0.699;

	this.circle_66 = new lib.plstar();
	this.circle_66.setTransform(627.8,476.4,0.293,0.293);
	this.circle_66.alpha = 0.699;

	this.circle_67 = new lib.plstar();
	this.circle_67.setTransform(627.8,178.5,0.293,0.293);
	this.circle_67.alpha = 0.699;

	this.circle_68 = new lib.plstar();
	this.circle_68.setTransform(897.1,331.7,0.293,0.293);
	this.circle_68.alpha = 0.699;

	this.circle_69 = new lib.plstar();
	this.circle_69.setTransform(770.5,299.7,0.293,0.293);
	this.circle_69.alpha = 0.699;

	this.circle_70 = new lib.plstar();
	this.circle_70.setTransform(49,95.4,0.293,0.293);
	this.circle_70.alpha = 0.699;

	this.circle_71 = new lib.plstar();
	this.circle_71.setTransform(641.6,156.4,0.293,0.293);
	this.circle_71.alpha = 0.699;

	this.circle_72 = new lib.plstar();
	this.circle_72.setTransform(661.5,186,0.293,0.293);
	this.circle_72.alpha = 0.699;

	this.circle_73 = new lib.plstar();
	this.circle_73.setTransform(937.7,373.3,0.293,0.293);
	this.circle_73.alpha = 0.699;

	this.circle_74 = new lib.plstar();
	this.circle_74.setTransform(888.8,7.8,0.293,0.293);
	this.circle_74.alpha = 0.699;

	this.circle_75 = new lib.plstar();
	this.circle_75.setTransform(356.7,11.8,0.293,0.293);
	this.circle_75.alpha = 0.699;

	this.instance_39 = new lib.plstar();
	this.instance_39.setTransform(687.7,62.2,0.293,0.293,0,0,0,6.5,5.7);
	this.instance_39.alpha = 0.699;

	this.circle_76 = new lib.plstar();
	this.circle_76.setTransform(707,96.6,0.293,0.293);
	this.circle_76.alpha = 0.699;

	this.circle_77 = new lib.plstar();
	this.circle_77.setTransform(721.8,33.2,0.293,0.293);
	this.circle_77.alpha = 0.699;

	this.circle_78 = new lib.plstar();
	this.circle_78.setTransform(341.4,46.1,0.293,0.293);
	this.circle_78.alpha = 0.699;

	this.circle_79 = new lib.plstar();
	this.circle_79.setTransform(635.8,22.7,0.293,0.293);
	this.circle_79.alpha = 0.699;

	this.circle_80 = new lib.plstar();
	this.circle_80.setTransform(656,55.6,0.293,0.293);
	this.circle_80.alpha = 0.699;

	this.instance_40 = new lib.plstar();
	this.instance_40.setTransform(923.8,248.4,0.293,0.293,0,0,0,3.8,4.6);
	this.instance_40.alpha = 0.699;

	this.circle_81 = new lib.plstar();
	this.circle_81.setTransform(495.8,91.3,0.293,0.293);
	this.circle_81.alpha = 0.699;

	this.circle_82 = new lib.plstar();
	this.circle_82.setTransform(347.9,83,0.293,0.293);
	this.circle_82.alpha = 0.699;

	this.circle_83 = new lib.plstar();
	this.circle_83.setTransform(454.4,79.7,0.293,0.293);
	this.circle_83.alpha = 0.699;

	this.circle_84 = new lib.plstar();
	this.circle_84.setTransform(515.5,129.2,0.293,0.293);
	this.circle_84.alpha = 0.699;

	this.circle_85 = new lib.plstar();
	this.circle_85.setTransform(443.3,48.8,0.293,0.293);
	this.circle_85.alpha = 0.699;

	this.circle_86 = new lib.plstar();
	this.circle_86.setTransform(827,162.5,0.293,0.293);
	this.circle_86.alpha = 0.699;

	this.circle_87 = new lib.plstar();
	this.circle_87.setTransform(793.8,140.1,0.293,0.293);
	this.circle_87.alpha = 0.699;

	this.circle_88 = new lib.plstar();
	this.circle_88.setTransform(216.4,2.6,0.293,0.293);
	this.circle_88.alpha = 0.699;

	this.instance_41 = new lib.plstar();
	this.instance_41.setTransform(787.1,233.2,0.293,0.293,0,0,0,6.7,3.9);
	this.instance_41.alpha = 0.699;

	this.circle_89 = new lib.plstar();
	this.circle_89.setTransform(741.8,215.3,0.293,0.293);
	this.circle_89.alpha = 0.699;

	this.circle_90 = new lib.plstar();
	this.circle_90.setTransform(888.8,264.5,0.293,0.293);
	this.circle_90.alpha = 0.699;

	this.circle_91 = new lib.plstar();
	this.circle_91.setTransform(611.5,47.5,0.293,0.293);
	this.circle_91.alpha = 0.699;

	this.circle_92 = new lib.plstar();
	this.circle_92.setTransform(587.8,22.7,0.293,0.293);
	this.circle_92.alpha = 0.699;

	this.circle_93 = new lib.plstar();
	this.circle_93.setTransform(554.9,50.2,0.293,0.293);
	this.circle_93.alpha = 0.699;

	this.circle_94 = new lib.plstar();
	this.circle_94.setTransform(754.8,162.5,0.293,0.293);
	this.circle_94.alpha = 0.699;

	this.circle_95 = new lib.plstar();
	this.circle_95.setTransform(265.3,64.5,0.293,0.293);
	this.circle_95.alpha = 0.699;

	this.circle_96 = new lib.plstar();
	this.circle_96.setTransform(545.6,95.4,0.293,0.293);
	this.circle_96.alpha = 0.699;

	this.circle_97 = new lib.plstar();
	this.circle_97.setTransform(140.2,51.3,0.293,0.293);
	this.circle_97.alpha = 0.699;

	this.circle_98 = new lib.plstar();
	this.circle_98.setTransform(292,83,0.293,0.293);
	this.circle_98.alpha = 0.699;

	this.circle_99 = new lib.plstar();
	this.circle_99.setTransform(620.1,102.5,0.293,0.293);
	this.circle_99.alpha = 0.699;

	this.circle_100 = new lib.plstar();
	this.circle_100.setTransform(493.3,50.2,0.293,0.293);
	this.circle_100.alpha = 0.699;

	this.circle_101 = new lib.plstar();
	this.circle_101.setTransform(238.8,59.5,0.293,0.293);
	this.circle_101.alpha = 0.699;

	this.circle_102 = new lib.plstar();
	this.circle_102.setTransform(515.5,3.2,0.293,0.293);
	this.circle_102.alpha = 0.699;

	this.circle_103 = new lib.plstar();
	this.circle_103.setTransform(91.6,29.9,0.293,0.293);
	this.circle_103.alpha = 0.699;

	this.circle_104 = new lib.plstar();
	this.circle_104.setTransform(857.8,248.4,0.293,0.293);
	this.circle_104.alpha = 0.699;

	this.circle_105 = new lib.plstar();
	this.circle_105.setTransform(201.5,97.3,0.293,0.293);
	this.circle_105.alpha = 0.699;

	this.circle_106 = new lib.plstar();
	this.circle_106.setTransform(278.8,29.9,0.293,0.293);
	this.circle_106.alpha = 0.699;

	this.circle_107 = new lib.plstar();
	this.circle_107.setTransform(155.4,6.7,0.293,0.293);
	this.circle_107.alpha = 0.699;

	this.circle_108 = new lib.plstar();
	this.circle_108.setTransform(587.2,74.1,0.293,0.293);
	this.circle_108.alpha = 0.699;

	this.circle_109 = new lib.plstar();
	this.circle_109.setTransform(293.1,8.2,0.293,0.293);
	this.circle_109.alpha = 0.699;

	this.circle_110 = new lib.plstar();
	this.circle_110.setTransform(311.9,38,0.293,0.293);
	this.circle_110.alpha = 0.699;

	this.circle_111 = new lib.plstar();
	this.circle_111.setTransform(196.6,48.8,0.293,0.293);
	this.circle_111.alpha = 0.699;

	this.circle_112 = new lib.plstar();
	this.circle_112.setTransform(35.2,332.8,0.293,0.293);
	this.circle_112.alpha = 0.699;

	this.circle_113 = new lib.plstar();
	this.circle_113.setTransform(68.8,357.7,0.293,0.293);
	this.circle_113.alpha = 0.699;

	this.circle_114 = new lib.plstar();
	this.circle_114.setTransform(362.7,235.8,0.293,0.293);
	this.circle_114.alpha = 0.699;

	this.instance_42 = new lib.plstar();
	this.instance_42.setTransform(539.2,438.8,0.293,0.293,0,0,0,6.5,6.2);
	this.instance_42.alpha = 0.699;

	this.circle_115 = new lib.plstar();
	this.circle_115.setTransform(362.7,510.5,0.293,0.293);
	this.circle_115.alpha = 0.699;

	this.circle_116 = new lib.plstar();
	this.circle_116.setTransform(367.1,439.9,0.293,0.293);
	this.circle_116.alpha = 0.699;

	this.circle_117 = new lib.plstar();
	this.circle_117.setTransform(340.3,472.6,0.293,0.293);
	this.circle_117.alpha = 0.699;

	this.instance_43 = new lib.plstar();
	this.instance_43.setTransform(539.2,493.7,0.293,0.293,0,0,0,6.5,7);
	this.instance_43.alpha = 0.699;

	this.circle_118 = new lib.plstar();
	this.circle_118.setTransform(557.6,526.8,0.293,0.293);
	this.circle_118.alpha = 0.699;

	this.circle_119 = new lib.plstar();
	this.circle_119.setTransform(572.1,463.7,0.293,0.293);
	this.circle_119.alpha = 0.699;

	this.circle_120 = new lib.plstar();
	this.circle_120.setTransform(488.1,453.5,0.293,0.293);
	this.circle_120.alpha = 0.699;

	this.circle_121 = new lib.plstar();
	this.circle_121.setTransform(506.3,485.9,0.293,0.293);
	this.circle_121.alpha = 0.699;

	this.circle_122 = new lib.plstar();
	this.circle_122.setTransform(515.5,526.8,0.293,0.293);
	this.circle_122.alpha = 0.699;

	this.circle_123 = new lib.plstar();
	this.circle_123.setTransform(443.3,412.1,0.293,0.293);
	this.circle_123.alpha = 0.699;

	this.circle_124 = new lib.plstar();
	this.circle_124.setTransform(461.8,477.8,0.293,0.293);
	this.circle_124.alpha = 0.699;

	this.circle_125 = new lib.plstar();
	this.circle_125.setTransform(412.4,439.9,0.293,0.293);
	this.circle_125.alpha = 0.699;

	this.circle_126 = new lib.plstar();
	this.circle_126.setTransform(422.3,510.5,0.293,0.293);
	this.circle_126.alpha = 0.699;

	this.circle_127 = new lib.plstar();
	this.circle_127.setTransform(470.7,533.9,0.293,0.293);
	this.circle_127.alpha = 0.699;

	this.circle_128 = new lib.plstar();
	this.circle_128.setTransform(683.7,533.9,0.293,0.293);
	this.circle_128.alpha = 0.699;

	this.circle_129 = new lib.plstar();
	this.circle_129.setTransform(449.1,504.1,0.293,0.293);
	this.circle_129.alpha = 0.699;

	this.circle_130 = new lib.plstar();
	this.circle_130.setTransform(345.6,395.6,0.293,0.293);
	this.circle_130.alpha = 0.699;

	this.circle_131 = new lib.plstar();
	this.circle_131.setTransform(376.8,413.7,0.293,0.293);
	this.circle_131.alpha = 0.699;

	this.circle_132 = new lib.plstar();
	this.circle_132.setTransform(300,438.1,0.293,0.293);
	this.circle_132.alpha = 0.699;

	this.instance_44 = new lib.plstar();
	this.instance_44.setTransform(312.2,333.8,0.293,0.293,0,0,0,4.8,3.2);
	this.instance_44.alpha = 0.699;

	this.circle_133 = new lib.plstar();
	this.circle_133.setTransform(331.6,367.9,0.293,0.293);
	this.circle_133.alpha = 0.699;

	this.circle_134 = new lib.plstar();
	this.circle_134.setTransform(345.6,305.2,0.293,0.293);
	this.circle_134.alpha = 0.699;

	this.circle_135 = new lib.plstar();
	this.circle_135.setTransform(285.4,472.3,0.293,0.293);
	this.circle_135.alpha = 0.699;

	this.circle_136 = new lib.plstar();
	this.circle_136.setTransform(260.5,295.1,0.293,0.293);
	this.circle_136.alpha = 0.699;

	this.circle_137 = new lib.plstar();
	this.circle_137.setTransform(280.2,327.1,0.293,0.293);
	this.circle_137.alpha = 0.699;

	this.instance_45 = new lib.plstar();
	this.instance_45.setTransform(165.8,391.2,0.293,0.293,0,0,0,6,5.7);
	this.instance_45.alpha = 0.699;

	this.circle_138 = new lib.plstar();
	this.circle_138.setTransform(120.6,362.5,0.293,0.293);
	this.circle_138.alpha = 0.699;

	this.circle_139 = new lib.plstar();
	this.circle_139.setTransform(270.1,247.5,0.293,0.293);
	this.circle_139.alpha = 0.699;

	this.circle_140 = new lib.plstar();
	this.circle_140.setTransform(292,509.7,0.293,0.293);
	this.circle_140.alpha = 0.699;

	this.circle_141 = new lib.plstar();
	this.circle_141.setTransform(305.6,297.5,0.293,0.293);
	this.circle_141.alpha = 0.699;

	this.circle_142 = new lib.plstar();
	this.circle_142.setTransform(159.8,357.7,0.293,0.293);
	this.circle_142.alpha = 0.699;

	this.instance_46 = new lib.plstar();
	this.instance_46.setTransform(183.5,265.2,0.293,0.293,0,0,0,4.5,3.8);
	this.instance_46.alpha = 0.699;

	this.circle_143 = new lib.plstar();
	this.circle_143.setTransform(387,474.8,0.293,0.293);
	this.circle_143.alpha = 0.699;

	this.circle_144 = new lib.plstar();
	this.circle_144.setTransform(272,419.3,0.293,0.293);
	this.circle_144.alpha = 0.699;

	this.circle_145 = new lib.plstar();
	this.circle_145.setTransform(68.8,305.2,0.293,0.293);
	this.circle_145.alpha = 0.699;

	this.circle_146 = new lib.plstar();
	this.circle_146.setTransform(35.2,282.7,0.293,0.293);
	this.circle_146.alpha = 0.699;

	this.circle_147 = new lib.plstar();
	this.circle_147.setTransform(159.8,429.6,0.293,0.293);
	this.circle_147.alpha = 0.699;

	this.instance_47 = new lib.plstar();
	this.instance_47.setTransform(28,375.5,0.293,0.293,0,0,0,4.6,4.8);
	this.instance_47.alpha = 0.699;

	this.circle_148 = new lib.plstar();
	this.circle_148.setTransform(300,395.6,0.293,0.293);
	this.circle_148.alpha = 0.699;

	this.circle_149 = new lib.plstar();
	this.circle_149.setTransform(216.6,252.9,0.293,0.293);
	this.circle_149.alpha = 0.699;

	this.circle_150 = new lib.plstar();
	this.circle_150.setTransform(130.5,406.6,0.293,0.293);
	this.circle_150.alpha = 0.699;

	this.circle_151 = new lib.plstar();
	this.circle_151.setTransform(285.4,362.5,0.293,0.293);
	this.circle_151.alpha = 0.699;

	this.circle_152 = new lib.plstar();
	this.circle_152.setTransform(212.3,295.1,0.293,0.293);
	this.circle_152.alpha = 0.699;

	this.circle_153 = new lib.plstar();
	this.circle_153.setTransform(179,322.4,0.293,0.293);
	this.circle_153.alpha = 0.699;

	this.circle_154 = new lib.plstar();
	this.circle_154.setTransform(208.7,490.8,0.293,0.293);
	this.circle_154.alpha = 0.699;

	this.circle_155 = new lib.plstar();
	this.circle_155.setTransform(195.8,351.1,0.293,0.293);
	this.circle_155.alpha = 0.699;

	this.circle_156 = new lib.plstar();
	this.circle_156.setTransform(94.3,266.1,0.293,0.293);
	this.circle_156.alpha = 0.699;

	this.circle_157 = new lib.plstar();
	this.circle_157.setTransform(83.8,477.3,0.293,0.293);
	this.circle_157.alpha = 0.699;

	this.circle_158 = new lib.plstar();
	this.circle_158.setTransform(235.7,509.7,0.293,0.293);
	this.circle_158.alpha = 0.699;

	this.circle_159 = new lib.plstar();
	this.circle_159.setTransform(198.4,416,0.293,0.293);
	this.circle_159.alpha = 0.699;

	this.circle_160 = new lib.plstar();
	this.circle_160.setTransform(244.5,374.1,0.293,0.293);
	this.circle_160.alpha = 0.699;

	this.circle_161 = new lib.plstar();
	this.circle_161.setTransform(117.6,322.4,0.293,0.293);
	this.circle_161.alpha = 0.699;

	this.instance_48 = new lib.plstar();
	this.instance_48.setTransform(34.1,417.9,0.293,0.293,0,0,0,5.7,6.5);
	this.instance_48.alpha = 0.699;

	this.circle_162 = new lib.plstar();
	this.circle_162.setTransform(222.7,406.6,0.293,0.293);
	this.circle_162.alpha = 0.699;

	this.circle_163 = new lib.plstar();
	this.circle_163.setTransform(182.2,485.6,0.293,0.293);
	this.circle_163.alpha = 0.699;

	this.circle_164 = new lib.plstar();
	this.circle_164.setTransform(140.2,274.9,0.293,0.293);
	this.circle_164.alpha = 0.699;

	this.circle_165 = new lib.plstar();
	this.circle_165.setTransform(35.2,464,0.293,0.293);
	this.circle_165.alpha = 0.699;

	this.circle_166 = new lib.plstar();
	this.circle_166.setTransform(99.5,391.2,0.293,0.293);
	this.circle_166.alpha = 0.699;

	this.circle_167 = new lib.plstar();
	this.circle_167.setTransform(145.7,523.7,0.293,0.293);
	this.circle_167.alpha = 0.699;

	this.circle_168 = new lib.plstar();
	this.circle_168.setTransform(63.4,412.1,0.293,0.293);
	this.circle_168.alpha = 0.699;

	this.circle_169 = new lib.plstar();
	this.circle_169.setTransform(206.1,538.9,0.293,0.293);
	this.circle_169.alpha = 0.699;

	this.circle_170 = new lib.plstar();
	this.circle_170.setTransform(99.5,433.1,0.293,0.293);
	this.circle_170.alpha = 0.699;

	this.circle_171 = new lib.plstar();
	this.circle_171.setTransform(222.7,345.5,0.293,0.293);
	this.circle_171.alpha = 0.699;

	this.circle_172 = new lib.plstar();
	this.circle_172.setTransform(331.6,428,0.293,0.293);
	this.circle_172.alpha = 0.699;

	this.circle_173 = new lib.plstar();
	this.circle_173.setTransform(236.6,434,0.293,0.293);
	this.circle_173.alpha = 0.699;

	this.circle_174 = new lib.plstar();
	this.circle_174.setTransform(255.3,464,0.293,0.293);
	this.circle_174.alpha = 0.699;

	this.circle_175 = new lib.plstar();
	this.circle_175.setTransform(140.2,474.8,0.293,0.293);
	this.circle_175.alpha = 0.699;

	this.circle_176 = new lib.plstar();
	this.circle_176.setTransform(130.2,211.2,0.293,0.293);
	this.circle_176.alpha = 0.699;

	this.circle_177 = new lib.plstar();
	this.circle_177.setTransform(638.5,344.2,0.293,0.293);
	this.circle_177.alpha = 0.699;

	this.instance_49 = new lib.plstar();
	this.instance_49.setTransform(650.7,240.1,0.293,0.293,0,0,0,4.8,5.5);
	this.instance_49.alpha = 0.699;

	this.circle_178 = new lib.plstar();
	this.circle_178.setTransform(669.8,272.9,0.293,0.293);
	this.circle_178.alpha = 0.699;

	this.circle_179 = new lib.plstar();
	this.circle_179.setTransform(683.7,211.2,0.293,0.293);
	this.circle_179.alpha = 0.699;

	this.circle_180 = new lib.plstar();
	this.circle_180.setTransform(623.9,377.9,0.293,0.293);
	this.circle_180.alpha = 0.699;

	this.circle_181 = new lib.plstar();
	this.circle_181.setTransform(599.7,200.6,0.293,0.293);
	this.circle_181.alpha = 0.699;

	this.circle_182 = new lib.plstar();
	this.circle_182.setTransform(619.2,233.2,0.293,0.293);
	this.circle_182.alpha = 0.699;

	this.instance_50 = new lib.plstar();
	this.instance_50.setTransform(504.4,296.4,0.293,0.293,0,0,0,6,4.5);
	this.instance_50.alpha = 0.699;

	this.circle_183 = new lib.plstar();
	this.circle_183.setTransform(458.9,269.1,0.293,0.293);
	this.circle_183.alpha = 0.699;

	this.circle_184 = new lib.plstar();
	this.circle_184.setTransform(609,153.1,0.293,0.293);
	this.circle_184.alpha = 0.699;

	this.circle_185 = new lib.plstar();
	this.circle_185.setTransform(630.8,415.2,0.293,0.293);
	this.circle_185.alpha = 0.699;

	this.circle_186 = new lib.plstar();
	this.circle_186.setTransform(417.1,257.2,0.293,0.293);
	this.circle_186.alpha = 0.699;

	this.circle_187 = new lib.plstar();
	this.circle_187.setTransform(498.3,263.3,0.293,0.293);
	this.circle_187.alpha = 0.699;

	this.instance_51 = new lib.plstar();
	this.instance_51.setTransform(522.1,171.1,0.293,0.293,0,0,0,4.6,5.1);
	this.instance_51.alpha = 0.699;

	this.circle_188 = new lib.plstar();
	this.circle_188.setTransform(725.6,380.9,0.293,0.293);
	this.circle_188.alpha = 0.699;

	this.circle_189 = new lib.plstar();
	this.circle_189.setTransform(610.9,324.9,0.293,0.293);
	this.circle_189.alpha = 0.699;

	this.circle_190 = new lib.plstar();
	this.circle_190.setTransform(407,211.2,0.293,0.293);
	this.circle_190.alpha = 0.699;

	this.circle_191 = new lib.plstar();
	this.circle_191.setTransform(373.8,189,0.293,0.293);
	this.circle_191.alpha = 0.699;

	this.circle_192 = new lib.plstar();
	this.circle_192.setTransform(498.3,334.9,0.293,0.293);
	this.circle_192.alpha = 0.699;

	this.instance_52 = new lib.plstar();
	this.instance_52.setTransform(366.7,281.6,0.293,0.293,0,0,0,6,7);
	this.instance_52.alpha = 0.699;

	this.circle_193 = new lib.plstar();
	this.circle_193.setTransform(322.4,263.3,0.293,0.293);
	this.circle_193.alpha = 0.699;

	this.circle_194 = new lib.plstar();
	this.circle_194.setTransform(638.5,301.7,0.293,0.293);
	this.circle_194.alpha = 0.699;

	this.circle_195 = new lib.plstar();
	this.circle_195.setTransform(554.9,159,0.293,0.293);
	this.circle_195.alpha = 0.699;

	this.circle_196 = new lib.plstar();
	this.circle_196.setTransform(468.2,312.5,0.293,0.293);
	this.circle_196.alpha = 0.699;

	this.circle_197 = new lib.plstar();
	this.circle_197.setTransform(574,224.6,0.293,0.293);
	this.circle_197.alpha = 0.699;

	this.circle_198 = new lib.plstar();
	this.circle_198.setTransform(550.8,200.6,0.293,0.293);
	this.circle_198.alpha = 0.699;

	this.circle_199 = new lib.plstar();
	this.circle_199.setTransform(518.2,228,0.293,0.293);
	this.circle_199.alpha = 0.699;

	this.circle_200 = new lib.plstar();
	this.circle_200.setTransform(334.6,211.2,0.293,0.293);
	this.circle_200.alpha = 0.699;

	this.circle_201 = new lib.plstar();
	this.circle_201.setTransform(547.2,396.9,0.293,0.293);
	this.circle_201.alpha = 0.699;

	this.circle_202 = new lib.plstar();
	this.circle_202.setTransform(534.8,257.2,0.293,0.293);
	this.circle_202.alpha = 0.699;

	this.circle_203 = new lib.plstar();
	this.circle_203.setTransform(432.8,172.2,0.293,0.293);
	this.circle_203.alpha = 0.699;

	this.circle_204 = new lib.plstar();
	this.circle_204.setTransform(422.3,383.1,0.293,0.293);
	this.circle_204.alpha = 0.699;

	this.circle_205 = new lib.plstar();
	this.circle_205.setTransform(574,415.2,0.293,0.293);
	this.circle_205.alpha = 0.699;

	this.circle_206 = new lib.plstar();
	this.circle_206.setTransform(537.3,322.4,0.293,0.293);
	this.circle_206.alpha = 0.699;

	this.circle_207 = new lib.plstar();
	this.circle_207.setTransform(582.8,280.5,0.293,0.293);
	this.circle_207.alpha = 0.699;

	this.circle_208 = new lib.plstar();
	this.circle_208.setTransform(456.1,228,0.293,0.293);
	this.circle_208.alpha = 0.699;

	this.instance_53 = new lib.plstar();
	this.instance_53.setTransform(372.9,323.8,0.293,0.293,0,0,0,6.5,4.6);
	this.instance_53.alpha = 0.699;

	this.circle_209 = new lib.plstar();
	this.circle_209.setTransform(562.2,312.5,0.293,0.293);
	this.circle_209.alpha = 0.699;

	this.circle_210 = new lib.plstar();
	this.circle_210.setTransform(521,392.2,0.293,0.293);
	this.circle_210.alpha = 0.699;

	this.circle_211 = new lib.plstar();
	this.circle_211.setTransform(479,180.7,0.293,0.293);
	this.circle_211.alpha = 0.699;

	this.circle_212 = new lib.plstar();
	this.circle_212.setTransform(373.8,362.5,0.293,0.293);
	this.circle_212.alpha = 0.699;

	this.circle_213 = new lib.plstar();
	this.circle_213.setTransform(438.4,296.4,0.293,0.293);
	this.circle_213.alpha = 0.699;

	this.circle_214 = new lib.plstar();
	this.circle_214.setTransform(483.9,429.6,0.293,0.293);
	this.circle_214.alpha = 0.699;

	this.circle_215 = new lib.plstar();
	this.circle_215.setTransform(401.7,317.7,0.293,0.293);
	this.circle_215.alpha = 0.699;

	this.circle_216 = new lib.plstar();
	this.circle_216.setTransform(561,362.5,0.293,0.293);
	this.circle_216.alpha = 0.699;

	this.circle_217 = new lib.plstar();
	this.circle_217.setTransform(438.4,338.4,0.293,0.293);
	this.circle_217.alpha = 0.699;

	this.circle_218 = new lib.plstar();
	this.circle_218.setTransform(562.2,251.4,0.293,0.293);
	this.circle_218.alpha = 0.699;

	this.circle_219 = new lib.plstar();
	this.circle_219.setTransform(669.8,333.4,0.293,0.293);
	this.circle_219.alpha = 0.699;

	this.circle_220 = new lib.plstar();
	this.circle_220.setTransform(575.3,340.1,0.293,0.293);
	this.circle_220.alpha = 0.699;

	this.circle_221 = new lib.plstar();
	this.circle_221.setTransform(594.7,370.1,0.293,0.293);
	this.circle_221.alpha = 0.699;

	this.circle_222 = new lib.plstar();
	this.circle_222.setTransform(479,380.9,0.293,0.293);
	this.circle_222.alpha = 0.699;

	this.circle_223 = new lib.plstar();
	this.circle_223.setTransform(468.2,116.6,0.293,0.293);
	this.circle_223.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.circle_223},{t:this.circle_222},{t:this.circle_221},{t:this.circle_220},{t:this.circle_219},{t:this.circle_218},{t:this.circle_217},{t:this.circle_216},{t:this.circle_215},{t:this.circle_214},{t:this.circle_213},{t:this.circle_212},{t:this.circle_211},{t:this.circle_210},{t:this.circle_209},{t:this.instance_53},{t:this.circle_208},{t:this.circle_207},{t:this.circle_206},{t:this.circle_205},{t:this.circle_204},{t:this.circle_203},{t:this.circle_202},{t:this.circle_201},{t:this.circle_200},{t:this.circle_199},{t:this.circle_198},{t:this.circle_197},{t:this.circle_196},{t:this.circle_195},{t:this.circle_194},{t:this.circle_193},{t:this.instance_52},{t:this.circle_192},{t:this.circle_191},{t:this.circle_190},{t:this.circle_189},{t:this.circle_188},{t:this.instance_51},{t:this.circle_187},{t:this.circle_186},{t:this.circle_185},{t:this.circle_184},{t:this.circle_183},{t:this.instance_50},{t:this.circle_182},{t:this.circle_181},{t:this.circle_180},{t:this.circle_179},{t:this.circle_178},{t:this.instance_49},{t:this.circle_177},{t:this.circle_176},{t:this.circle_175},{t:this.circle_174},{t:this.circle_173},{t:this.circle_172},{t:this.circle_171},{t:this.circle_170},{t:this.circle_169},{t:this.circle_168},{t:this.circle_167},{t:this.circle_166},{t:this.circle_165},{t:this.circle_164},{t:this.circle_163},{t:this.circle_162},{t:this.instance_48},{t:this.circle_161},{t:this.circle_160},{t:this.circle_159},{t:this.circle_158},{t:this.circle_157},{t:this.circle_156},{t:this.circle_155},{t:this.circle_154},{t:this.circle_153},{t:this.circle_152},{t:this.circle_151},{t:this.circle_150},{t:this.circle_149},{t:this.circle_148},{t:this.instance_47},{t:this.circle_147},{t:this.circle_146},{t:this.circle_145},{t:this.circle_144},{t:this.circle_143},{t:this.instance_46},{t:this.circle_142},{t:this.circle_141},{t:this.circle_140},{t:this.circle_139},{t:this.circle_138},{t:this.instance_45},{t:this.circle_137},{t:this.circle_136},{t:this.circle_135},{t:this.circle_134},{t:this.circle_133},{t:this.instance_44},{t:this.circle_132},{t:this.circle_131},{t:this.circle_130},{t:this.circle_129},{t:this.circle_128},{t:this.circle_127},{t:this.circle_126},{t:this.circle_125},{t:this.circle_124},{t:this.circle_123},{t:this.circle_122},{t:this.circle_121},{t:this.circle_120},{t:this.circle_119},{t:this.circle_118},{t:this.instance_43},{t:this.circle_117},{t:this.circle_116},{t:this.circle_115},{t:this.instance_42},{t:this.circle_114},{t:this.circle_113},{t:this.circle_112},{t:this.circle_111},{t:this.circle_110},{t:this.circle_109},{t:this.circle_108},{t:this.circle_107},{t:this.circle_106},{t:this.circle_105},{t:this.circle_104},{t:this.circle_103},{t:this.circle_102},{t:this.circle_101},{t:this.circle_100},{t:this.circle_99},{t:this.circle_98},{t:this.circle_97},{t:this.circle_96},{t:this.circle_95},{t:this.circle_94},{t:this.circle_93},{t:this.circle_92},{t:this.circle_91},{t:this.circle_90},{t:this.circle_89},{t:this.instance_41},{t:this.circle_88},{t:this.circle_87},{t:this.circle_86},{t:this.circle_85},{t:this.circle_84},{t:this.circle_83},{t:this.circle_82},{t:this.circle_81},{t:this.instance_40},{t:this.circle_80},{t:this.circle_79},{t:this.circle_78},{t:this.circle_77},{t:this.circle_76},{t:this.instance_39},{t:this.circle_75},{t:this.circle_74},{t:this.circle_73},{t:this.circle_72},{t:this.circle_71},{t:this.circle_70},{t:this.circle_69},{t:this.circle_68},{t:this.circle_67},{t:this.circle_66},{t:this.circle_65},{t:this.circle_64},{t:this.circle_63},{t:this.circle_62},{t:this.instance_38},{t:this.circle_61},{t:this.circle_60},{t:this.circle_59},{t:this.circle_58},{t:this.circle_57},{t:this.circle_56},{t:this.circle_55},{t:this.circle_54},{t:this.circle_53},{t:this.circle_52},{t:this.instance_37},{t:this.circle_51},{t:this.circle_50},{t:this.circle_49},{t:this.circle_48},{t:this.instance_36},{t:this.circle_47},{t:this.circle_46},{t:this.circle_45},{t:this.circle_44},{t:this.instance_35},{t:this.circle_43},{t:this.circle_42},{t:this.circle_41},{t:this.instance_34},{t:this.circle_40},{t:this.circle_39},{t:this.circle_38},{t:this.circle_37},{t:this.circle_36},{t:this.circle_35},{t:this.circle_34},{t:this.circle_33},{t:this.circle_32},{t:this.circle_31},{t:this.circle_30},{t:this.circle_29},{t:this.circle_28},{t:this.circle_27},{t:this.circle_26},{t:this.instance_33},{t:this.circle_25},{t:this.circle_24},{t:this.circle_23},{t:this.instance_32},{t:this.circle_22},{t:this.circle_21},{t:this.circle_20},{t:this.circle_19},{t:this.circle_18},{t:this.instance_31},{t:this.instance_30},{t:this.circle_17},{t:this.circle_16},{t:this.instance_29},{t:this.instance_28},{t:this.circle_15},{t:this.circle_14},{t:this.circle_13},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.circle_12},{t:this.instance_24},{t:this.circle_11},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.circle_10},{t:this.instance_17},{t:this.instance_16},{t:this.circle_9},{t:this.instance_15},{t:this.circle_8},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.circle_7},{t:this.circle_6},{t:this.instance_10},{t:this.circle_5},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.circle_4},{t:this.circle_3},{t:this.instance_6},{t:this.circle_2},{t:this.instance_5},{t:this.instance_4},{t:this.circle_1},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.circle},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2.5,960.4,544);


(lib.plgreenplanet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// P2
	this.instance = new lib.plgreenP2();
	this.instance.setTransform(89.6,-72.5,1,1,0,0,0,9.6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:74.2,y:-71.8},0).wait(1).to({x:57,y:-70.6},0).wait(1).to({x:40.5,y:-68.7},0).wait(1).to({x:24,y:-65.7},0).wait(1).to({x:7.9,y:-60},0).wait(1).to({x:1.6,y:-50},0).wait(1).to({x:7.4,y:-35.4},0).wait(1).to({x:21.2,y:-22.4},0).wait(1).to({x:34.1,y:-13.6},0).wait(1).to({x:49.3,y:-5.2},0).wait(1).to({x:64.1,y:2.4},0).wait(1).to({x:77.6,y:8.7},0).wait(1).to({x:94.4,y:13.7},0).wait(1).to({x:110.4,y:18.1},0).wait(1).to({x:126.5,y:22.6},0).wait(1).to({x:143.4,y:27.3},0).wait(1).to({x:157.6,y:31.2},0).wait(1).to({x:174.2,y:35},0).wait(1).to({x:191.1,y:38.3},0).wait(1).to({x:206.5,y:40.9},0).wait(1).to({x:222.8,y:43.3},0).wait(1).to({x:239.1,y:45.5},0).wait(1).to({x:255.7,y:47.6},0).wait(1).to({x:271.6,y:49.1},0).wait(1));

	// P1
	this.instance_1 = new lib.plgreenP1();
	this.instance_1.setTransform(128.6,26,1,1,0,0,0,9.6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:141.4,y:28.9},0).wait(1).to({x:155.1,y:31.7},0).wait(1).to({x:168.7,y:34.3},0).wait(1).to({x:182.3,y:36.8},0).wait(1).to({x:195.9,y:39.2},0).wait(1).to({x:209.6,y:41.4},0).wait(1).to({x:223.2,y:43.5},0).wait(1).to({x:236.7,y:45.3},0).wait(1).to({x:250.5,y:46.6},0).wait(1).to({x:264.3,y:47.6},0).wait(1).to({x:278.3,y:48},0).wait(1).to({x:293.7,y:47.6},0).wait(1).to({x:304.1,y:46.5},0).wait(1).to({x:318.7,y:44.4},0).wait(1).to({x:332.6,y:41.6},0).wait(1).to({x:347.5,y:35.7},0).wait(1).to({x:353.2,y:24.2},0).wait(1).to({x:351,y:13.8},0).wait(1).to({x:342.1,y:2.2},0).wait(1).to({x:332.6,y:-4.7},0).wait(1).to({x:319.9,y:-13},0).wait(1).to({x:308.1,y:-20.3},0).wait(1).to({x:294.2,y:-28.2},0).wait(1).to({x:284,y:-33.5},0).wait(1));

	// Ring
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AHuJLQkighkyhCQlihLk7hoQk7hojsh3Qjyh5h2h3Qh2h4AWhmQAfiSExg9QEqg7HZAnQgYAVgSATQiogMiKAAQk5AAi9A0QjDA3gVBlQgSBVBxBtQByBtDhBwQDpB3E5BnQE4BnFfBLQLBCVIggXQEAgLCXg0QCdg1AThZQAah5jgidQjZiXmEiRIgTg1QGnCaDoCmQDuCtgeCOQgZB2jPA/QjHA+lOAAQjwAAkYghg");
	this.shape.setTransform(178.3,-12.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(25));

	// Top
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.298)").s().p("AjYN2Qi1hbiCiZQh9iUg9i5Qg9i5ANjAQAOjIBbi1QB5jvDfiRQDZiNEBgSQhwBHhXBhQhcBkg+B6QhbC1gNDIQgNDCA9C3QA8C5B+CTQCACaC0BbQB6A+CGAaQCBAYCEgJQjaCLkCAQQgfACgfAAQjnAAjThrg");
	this.shape_1.setTransform(155.2,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#91C659").s().p("AhCPgQjIgNi1hbQi1hbiCiaQh9iTg9i5Qg9i5ANjAQAOjIBbi1QBbi1CZiCQCUh9C5g9QC5g9DAANQDIAOC1BbQC0BbCCCZQB+CUA9C5QA8C5gNDAQgNDIhbC1QhbC0iaCCQiTB+i5A9QiYAyifAAQggAAgigDg");
	this.shape_2.setTransform(178.3,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.298)").s().p("AjKDgQhUg9AAhWQAAhUBUg9QBUg8B2AAQB3AABUA8QBUA9AABUQAABWhUA9QhUA9h3AAQh2AAhUg9gAhbjgQhBgKAAgPQAAgOBBgLQBBgKBaAAQBdAABBAKQBBALAAAPQAAAOhBAKQhBALhdAAQhaAAhBgLg");
	this.shape_3.setTransform(195.9,-52.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-99.5,356.6,199.1);


(lib.plblueplanet = function(mode,startPosition,loop) {
if (loop == null) { loop = true; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.plplanentring();
	this.instance.setTransform(0.1,1.2,0.999,0.999,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1,rotation:21.2,x:0,y:1},0).wait(1).to({rotation:27.5,y:0.7},0).wait(1).to({rotation:33.7,y:0.5},0).wait(1).to({rotation:40,y:0.2},0).wait(1).to({rotation:46.2,y:0},0).wait(1).to({rotation:52.5,y:-0.3},0).wait(1).to({rotation:58.7,x:-0.1,y:-0.5},0).wait(1).to({rotation:65,y:-0.8},0).wait(1).to({rotation:71.2,y:-1},0).wait(1).to({rotation:77.5,y:-1.3},0).wait(1).to({rotation:83.7,y:-1.5},0).wait(1).to({rotation:90,y:-1.8},0).wait(1).to({rotation:82.5,y:-1.5},0).wait(1).to({rotation:75,y:-1.3},0).wait(1).to({rotation:67.5,y:-1},0).wait(1).to({rotation:60,y:-0.8},0).wait(1).to({rotation:52.5,y:-0.5},0).wait(1).to({rotation:45,x:0,y:-0.3},0).wait(1).to({rotation:37.5,y:0},0).wait(1).to({rotation:30,y:0.2},0).wait(1).to({rotation:22.5,y:0.5},0).wait(1).to({rotation:15,y:0.7},0).wait(1).to({rotation:7.5,y:1},0).wait(1).to({rotation:0,x:0.1,y:1.2},0).wait(1));

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,178,196,0.8)").s().p("AhDB5QgygyAAhHQAAhGAygyQAzgzBFAAQAOAAAMACQAnBNAABcQAABdgnBNIgaACQhFAAgzgzg");
	this.shape.setTransform(-4.7,1,1,1,-22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(25));

	// bluebody
	this.instance_1 = new lib.plbluebody();
	this.instance_1.setTransform(0.2,-0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.4,-20.2,47.1,42.8);


(lib.plRocketship = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.plbody();
	this.instance.setTransform(87.4,-91.5,1,1,0,0,0,43.9,-114);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:0,y:22.5},0).wait(1).to({x:87.9,y:22.4},0).wait(1).to({x:88.3},0).wait(1).to({x:88.6,y:22.3},0).wait(1).to({x:88.1},0).wait(1).to({x:88.5},0).wait(1).to({x:88.3,y:22.2},0).wait(2).to({x:88.4,y:22.1},0).wait(1).to({x:88.3},0).wait(1).to({x:88.4},0).wait(1).to({y:22},0).wait(1).to({x:88.3},0).wait(1).to({x:88.4},0).wait(1));

	// Flames
	this.instance_1 = new lib.plFlame();
	this.instance_1.setTransform(87.7,135.2,1,1.461,0,0,0,25.4,-28.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:5.3,scaleX:0.97,scaleY:1.45,x:87.6,y:184.5},0).wait(1).to({scaleX:0.95,scaleY:1.43,y:183.9},0).wait(1).to({scaleX:0.92,scaleY:1.42,x:87.7,y:183.2},0).wait(1).to({scaleX:0.9,scaleY:1.4,y:182.6},0).wait(1).to({scaleX:0.86,scaleY:1.39,y:181.9},0).wait(1).to({scaleX:0.83,scaleY:1.34,y:180.1},0).wait(1).to({scaleX:0.8,scaleY:1.29,y:178.3},0).wait(1).to({scaleX:0.77,scaleY:1.24,x:87.6,y:176.5},0).wait(1).to({scaleX:0.75,scaleY:1.2,y:174.7},0).wait(1).to({scaleX:0.73,scaleY:1.15,y:172.9},0).wait(1).to({scaleX:0.7,scaleY:1.1,y:171},0).wait(1).to({scaleX:0.68,scaleY:1.05,x:87.7,y:169.2},0).wait(1).to({scaleX:0.67,scaleY:1,x:87.6,y:167.4},0).wait(1).to({scaleX:0.65,scaleY:0.95,y:165.6},0).wait(1));

	// r-wing
	this.instance_2 = new lib.plrwing();
	this.instance_2.setTransform(128.6,111.2,1,1,0,0,0,47.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:111},0).wait(1).to({y:110.9},0).wait(1).to({y:110.8},0).wait(1).to({y:110.7},0).wait(1).to({y:110.6},0).wait(1).to({y:110.4},0).wait(1).to({y:110.3},0).wait(1).to({y:110.5},0).wait(1).to({y:110.7},0).wait(1).to({y:110.9},0).wait(1).to({y:111.1},0).wait(1).to({y:111.3},0).wait(1).to({y:111.5},0).wait(1).to({y:111.7},0).wait(1));

	// L-wing
	this.instance_3 = new lib.plLwing();
	this.instance_3.setTransform(47.2,111.2,1,1,0,0,0,47.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({y:111},0).wait(1).to({y:110.9},0).wait(1).to({y:110.8},0).wait(1).to({y:110.7},0).wait(1).to({y:110.6},0).wait(1).to({y:110.4},0).wait(1).to({y:110.3},0).wait(1).to({y:110.5},0).wait(1).to({y:110.7},0).wait(1).to({y:110.9},0).wait(1).to({y:111.1},0).wait(1).to({y:111.3},0).wait(1).to({y:111.5},0).wait(1).to({y:111.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-91.5,175.8,345.7);


(lib.plplanetfield = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.b1 = new lib.plblueplanet();
	this.b1.setTransform(-315.6,-111.4);

	this.instance = new lib.plgreenplanet();
	this.instance.setTransform(282.6,-42,0.202,0.202,0,0,0,178.3,0);

	this.instance_1 = new lib.plstargold();
	this.instance_1.setTransform(353.8,-184.1,1,1,0,0,0,9.3,9.3);
	this.instance_1.alpha = 0.699;

	this.instance_2 = new lib.plstargold();
	this.instance_2.setTransform(352.9,42.3,1,1,0,0,0,3.9,3.9);
	this.instance_2.alpha = 0.699;

	this.instance_3 = new lib.plstargold();
	this.instance_3.setTransform(-23.1,-132.4,1,1,0,0,0,9.3,9.3);
	this.instance_3.alpha = 0.699;

	this.instance_4 = new lib.plstargold();
	this.instance_4.setTransform(-287.2,-25.1,1,1,0,0,0,9.4,9.3);
	this.instance_4.alpha = 0.699;

	this.instance_5 = new lib.plstargold();
	this.instance_5.setTransform(-239.1,-168.9,1,1,0,0,0,9.4,9.3);
	this.instance_5.alpha = 0.699;

	this.instance_6 = new lib.plstargold();
	this.instance_6.setTransform(278,60,1,1,0,0,0,9.3,9.2);
	this.instance_6.alpha = 0.699;

	this.instance_7 = new lib.plstargold();
	this.instance_7.setTransform(-118.7,103.9,1,1,0,0,0,5.5,5.5);
	this.instance_7.alpha = 0.699;

	this.instance_8 = new lib.plstargold();
	this.instance_8.setTransform(-258.9,182.8,1,1,0,0,0,8.1,8);
	this.instance_8.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.b1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-339.1,-193.4,706.8,386.9);


// stage content:



(lib.problemloading = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Robot
	this.instance = new lib.robot();
	this.instance.setTransform(113.3,329.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:6.5,x:119.8,y:331.4},0).wait(1).to({y:333.2},0).wait(1).to({y:334.9},0).wait(1).to({y:336.7},0).wait(1).to({y:338.4},0).wait(1).to({y:340.2},0).wait(1).to({y:341.9},0).wait(1).to({y:343.7},0).wait(1).to({y:345.4},0).wait(1).to({y:347.2},0).wait(1).to({y:348.9},0).wait(1).to({y:350.7},0).wait(1).to({y:352.4},0).wait(1).to({y:354.2},0).wait(1).to({y:355.9},0).wait(1).to({y:357.7},0).wait(1).to({y:359.4},0).wait(1).to({y:361.2},0).wait(1).to({y:362.9},0).wait(1).to({y:364.7},0).wait(1).to({x:112.6,y:369},0).wait(1).to({x:105.3,y:373.3},0).wait(1).to({x:98.1,y:377.6},0).wait(1).to({x:90.9,y:381.9},0).wait(1).to({x:83.6,y:386.2},0).wait(1).to({x:76.4,y:390.5},0).wait(1).to({x:69.2,y:394.8},0).wait(1).to({x:61.9,y:399.1},0).wait(1).to({x:54.7,y:403.4},0).wait(1).to({x:47.5,y:407.7},0).wait(1).to({x:40.2,y:412},0).wait(1).to({x:33,y:416.3},0).wait(1).to({x:25.8,y:420.7},0).wait(1).to({x:15.4,y:424.4},0).wait(1).to({x:5,y:428.1},0).wait(1).to({x:-5.3,y:431.8},0).wait(1).to({x:-15.7,y:435.5},0).wait(1).to({x:-26.1,y:439.2},0).wait(1).to({x:-36.5,y:443},0).wait(1).to({x:-46.8,y:446.7},0).wait(1).to({x:-57.2,y:450.4},0).wait(1).to({x:-67.6,y:454.1},0).wait(1).to({x:-78,y:457.8},0).wait(1).to({x:-88.4,y:461.6},0).wait(1));

	// Loading...
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(139,195,74,0.898)").s().p("AgQAOIAAgcIAhAAIAAAcg");
	this.shape.setTransform(196.6,33.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(139,195,74,0.898)").s().p("AgPAOIAAgcIAgAAIAAAcg");
	this.shape_1.setTransform(189.6,33.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(139,195,74,0.898)").s().p("AgPAOIAAgcIAfAAIAAAcg");
	this.shape_2.setTransform(182.7,33.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(139,195,74,0.898)").s().p("AgnBJQgRgNABgXIAAAAIAhgCQAAAMAGAGQAHAHAJAAQALAAAGgJQAFgIAAgOQAAgPgGgIQgGgIgKABQgKgBgFACQgFADgCAHIgegCIAKhdIBdAAIAAAcIhBAAIgFAnQAFgEAGgCQAHgCAGgBQAZAAANAQQAOANAAAbQAAAZgPAQQgPAQgbAAQgWAAgRgNg");
	this.shape_3.setTransform(166.5,26.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(139,195,74,0.898)").s().p("AAUBAIAAhOQAAgMgFgGQgFgFgKAAQgFAAgFADQgGADgDAFIAABaIgjAAIAAh9IAgAAIACATQAGgKAJgGQAIgFALAAQATAAALAMQALAMAAAaIAABNg");
	this.shape_4.setTransform(146.9,28.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(139,195,74,0.898)").s().p("AgQBbIAAh9IAgAAIAAB9gAgQhAIAAgaIAgAAIAAAag");
	this.shape_5.setTransform(136.9,25.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(139,195,74,0.898)").s().p("AgXBXQgLgDgJgEIAGgaIAQAGQAIACAKAAQAMAAAHgGQAGgGAAgMIAAgMQgFAIgIADQgIAEgHAAQgYAAgNgRQgNgRAAgaIAAgDQAAgeANgSQANgTAYAAQAIABAJAEQAIAFAFAJIADgRIAeAAIAAB9QAAAZgRANQgQANgbAAQgJABgLgDgAgQgzQgGALAAASIAAADQAAARAGAHQAGAKAKAAQAIAAAGgEQAFgCADgGIAAg1QgDgGgFgDQgGgDgIgBQgKAAgGAMg");
	this.shape_6.setTransform(120.8,30.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(139,195,74,0.898)").s().p("AAUBAIAAhOQAAgMgFgGQgFgFgKAAQgFAAgFADQgGADgDAFIAABaIgjAAIAAh9IAgAAIACATQAGgKAJgGQAIgFALAAQATAAALAMQALAMAAAaIAABNg");
	this.shape_7.setTransform(107.5,28.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(139,195,74,0.898)").s().p("AgQBbIAAh9IAhAAIAAB9gAgQhAIAAgaIAhAAIAAAag");
	this.shape_8.setTransform(97.6,25.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(139,195,74,0.898)").s().p("AAUBbIAAhLQAAgQgFgEQgFgGgKAAQgFAAgGADQgFADgEAEIAABbIgiAAIAAi1IAiAAIAABJQAGgKAJgEQAHgFAKAAQAUAAALANQAMANAAAaIAABLg");
	this.shape_9.setTransform(87.6,25.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(139,195,74,0.898)").s().p("AgnAvQgPgSAAgcIAAgBQAAgcAPgSQAQgSAaAAQAXAAAPANQAOANAAAWIgBABIgfAAQAAgKgFgGQgGgHgJAAQgMAAgFALQgGAKAAARIAAABQAAARAGALQAFAKAMAAQAJAAAGgFQAFgGAAgJIAfAAIABABQAAATgPANQgPANgWAAQgaAAgQgSg");
	this.shape_10.setTransform(74.7,28.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(139,195,74,0.898)").s().p("AAUBAIAAhOQAAgMgFgGQgFgFgKAAQgFAAgFADQgGADgDAFIAABaIgjAAIAAh9IAgAAIACATQAGgKAJgGQAIgFALAAQATAAALAMQALAMAAAaIAABNg");
	this.shape_11.setTransform(61.7,28.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(139,195,74,0.898)").s().p("AgrAzQgLgMAAgcIAAhKIAiAAIAABLQAAAOAFAGQAFAGAJAAQAGAAAGgDQAGgCADgGIAAhaIAjAAIAAB9IgeAAIgDgTQgGAKgJAGQgHAFgLAAQgUAAgMgNg");
	this.shape_12.setTransform(48.2,28.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(139,195,74,0.898)").s().p("AguA3QgKgKAAgSQAAgTAOgIQAOgKAcAAIARAAIAAgKQAAgJgFgFQgFgFgHAAQgIAAgFAEQgEAEAAAHIghAAIAAgBQgBgQAPgMQAOgLAWAAQAXAAAOALQAOAMAAAVIAAAyQAAAJACAIQABAIADAIIgiAAIgDgJIgCgKQgGAJgIAGQgHAGgMAAQgUAAgLgKgAgRANQgFAFAAAIQAAAGAEAEQAEAEAIAAQAHAAAHgFQAHgEACgGIAAgSIgRAAQgLAAgGAGg");
	this.shape_13.setTransform(35,28.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(139,195,74,0.898)").s().p("Ag1BVIAAipIAhAAIAACOIBLAAIAAAbg");
	this.shape_14.setTransform(22.8,26.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(139,195,74,0.898)").s().p("AAIBVIAAglIhDAAIgCgVIBFhvIAiAAIAABpIAUAAIAAAbIgUAAIAAAlgAAFgiIgiA3IAlAAIAAg7IgBAAg");
	this.shape_15.setTransform(166.5,26.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(139,195,74,0.898)").s().p("AgpBLQgRgNABgXIAAgBIAhAAQAAAKAHAHQAHAGAKAAQALAAAHgHQAHgGAAgMQAAgNgHgGQgHgGgLAAIgTAAIAAgYIATAAQAKAAAGgGQAGgHAAgLQAAgLgGgGQgGgGgKAAQgIAAgHAGQgHAFAAAJIghAAIAAAAQgBgUAQgNQAQgNAYAAQAZAAAQAMQAPANAAAXQAAAMgHAKQgHAKgMAFQAOADAIALQAHAKAAAOQAAAXgRAOQgRANgZAAQgYAAgRgMg");
	this.shape_16.setTransform(166.2,26.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(139,195,74,0.898)").s().p("Ag3BWIAAgXIA3g6QAKgMAFgKQAFgJAAgIQAAgLgGgHQgGgHgIABQgMAAgGAIQgGAHAAAOIgiAAIAAgBQAAgXAPgQQAQgQAbAAQAYAAAPANQAPAOAAAXQAAAPgIAOQgJALgTAVIgdAhIABABIBFAAIAAAag");
	this.shape_17.setTransform(166.4,26);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(139,195,74,0.898)").s().p("AAABVIAAiLIghAAIAAgYIBDgGIAACpg");
	this.shape_18.setTransform(165,26.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_15},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_15},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_16},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_16},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_17},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_17},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_18},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},3).wait(19));

	// Rocket
	this.instance_1 = new lib.plRocketship();
	this.instance_1.setTransform(385,182.6,1,1,0,0,0,87.9,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:82.5,y:266.4},0).wait(1).to({y:267.7},0).wait(1).to({y:269},0).wait(1).to({y:270.3},0).wait(1).to({y:271.6},0).wait(1).to({y:272.9},0).wait(1).to({y:274.2},0).wait(1).to({y:275.5},0).wait(1).to({y:276.8},0).wait(1).to({y:278.1},0).wait(1).to({y:279.4},0).wait(1).to({y:280.7},0).wait(1).to({y:282},0).wait(1).to({y:283.3},0).wait(1).to({y:284.6},0).wait(1).to({y:285.9},0).wait(1).to({y:287.2},0).wait(1).to({y:288.5},0).wait(1).to({y:289.8},0).wait(1).to({y:291.1},0).wait(3).to({regY:0,y:188.6},0).wait(1).to({regY:82.5,scaleX:0.91,scaleY:0.95,x:384.9,y:266.8},0).wait(1).to({scaleX:0.82,scaleY:0.9,y:262.6},0).wait(1).to({scaleX:0.75,scaleY:0.85,y:258.4},0).wait(1).to({scaleX:0.69,scaleY:0.8,rotation:4.2,x:412.6,y:217.1},0).wait(1).to({scaleX:0.64,scaleY:0.75,rotation:8.4,x:442.6,y:177},0).wait(1).to({scaleX:0.6,scaleY:0.69,rotation:12.6,x:474.7,y:138.2},0).wait(1).to({scaleX:0.56,scaleY:0.64,rotation:16.8,x:509.1,y:100.9},0).wait(1).to({scaleX:0.53,scaleY:0.59,rotation:21,x:545.6,y:65.4},0).wait(1).to({scaleX:0.5,scaleY:0.54,rotation:25.1,x:584.2,y:31.8},0).wait(1).to({scaleX:0.48,scaleY:0.49,rotation:29.3,x:624.9,y:0.3},0).wait(1).to({scaleX:0.45,scaleY:0.44,rotation:33.5,x:667.5,y:-29},0).wait(1).to({scaleX:0.43,scaleY:0.39,rotation:37.7,x:711.8,y:-56.1},0).wait(1).to({scaleX:0.4,y:-56},0).wait(1).to({scaleX:0.39},0).wait(8));

	// Smoke
	this.instance_2 = new lib.plsmoke();
	this.instance_2.setTransform(395.6,365.4,0.697,0.697,0,0,0,174,81.2);
	this.instance_2.shadow = new cjs.Shadow("rgba(56,56,56,0.498)",0,11,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:174.1,regY:86.7,y:371.4},0).wait(1).to({y:373.5},0).wait(1).to({y:375.7},0).wait(1).to({y:377.8},0).wait(1).to({y:380},0).wait(1).to({y:382.1},0).wait(1).to({y:384.3},0).wait(1).to({y:386.4},0).wait(1).to({y:388.6},0).wait(1).to({y:390.7},0).wait(1).to({y:392.9},0).wait(1).to({y:395},0).wait(1).to({y:397.2},0).wait(1).to({y:399.3},0).wait(1).to({y:401.5},0).wait(1).to({y:403.6},0).wait(1).to({y:405.8},0).wait(1).to({y:407.9},0).wait(1).to({y:410.1},0).wait(1).to({y:412.2},0).wait(1).to({regX:174,regY:81.2,y:391.4},0).wait(1).to({regX:174.1,regY:86.7,scaleX:0.8,scaleY:0.8,x:395.7,y:395.8},0).wait(1).to({scaleX:0.9,scaleY:0.9,y:396.4},0).wait(1).to({scaleX:1,scaleY:1,y:396.9},0).wait(1).to({x:382.4,y:408},0).wait(1).to({x:369,y:419.1},0).wait(1).to({x:355.7,y:430.3},0).wait(1).to({x:342.4,y:441.4},0).wait(1).to({x:329,y:452.5},0).wait(1).to({x:315.7,y:463.6},0).wait(1).to({x:302.4,y:474.7},0).wait(1).to({x:289,y:485.8},0).wait(1).to({x:275.7,y:496.9},0).wait(9).to({_off:true},1).wait(2));

	// Planet
	this.instance_3 = new lib.plgiantblueplanet();
	this.instance_3.setTransform(365.4,692.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({scaleX:0.99,scaleY:0.99,y:693.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:694.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:695.9},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:696.9},0).wait(1).to({scaleX:0.96,scaleY:0.96,y:697.9},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:698.9},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:699.9},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:700.9},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:701.9},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:702.9},0).wait(1).to({scaleX:0.91,scaleY:0.91,y:703.9},0).wait(1).to({scaleX:0.9,scaleY:0.9,y:704.9},0).wait(1).to({scaleX:0.89,scaleY:0.89,y:705.9},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:706.9},0).wait(1).to({scaleX:0.88,scaleY:0.88,y:707.9},0).wait(1).to({scaleX:0.87,scaleY:0.87,y:708.9},0).wait(1).to({scaleX:0.86,scaleY:0.86,y:709.9},0).wait(1).to({scaleX:0.85,scaleY:0.85,y:710.9},0).wait(1).to({scaleX:0.84,scaleY:0.84,y:711.9},0).wait(1).to({scaleX:0.83,scaleY:0.83,y:712.9},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:350,y:714},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:334.6,y:715.1},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:319.1,y:716.1},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:303.7,y:717.2},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:288.3,y:718.3},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:272.9,y:719.4},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:257.5,y:720.5},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:242,y:721.6},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:226.6,y:722.6},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:211.2,y:723.7},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:195.8,y:724.8},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:180.4,y:725.9},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:164.9,y:727},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:149.5,y:728.1},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:134.1,y:729.1},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:118.7,y:730.2},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:103.2,y:731.3},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:87.8,y:732.4},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:72.4,y:733.5},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:57,y:734.6},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:41.6,y:735.6},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:26.1,y:736.7},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:10.7,y:737.8},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:-4.7,y:738.9},0).wait(1));

	// planets
	this.instance_4 = new lib.plplanetfield();
	this.instance_4.setTransform(385.2,68);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:13,x:398.2,y:76.4},0).wait(1).to({y:84.8},0).wait(1).to({y:93.2},0).wait(1).to({y:101.6},0).wait(1).to({y:110},0).wait(1).to({y:118.4},0).wait(1).to({y:126.8},0).wait(1).to({y:135.2},0).wait(1).to({y:143.6},0).wait(1).to({y:152},0).wait(1).to({y:160.4},0).wait(1).to({y:168.8},0).wait(1).to({y:177.2},0).wait(1).to({y:185.6},0).wait(1).to({y:194},0).wait(1).to({y:202.4},0).wait(1).to({y:210.8},0).wait(1).to({y:219.2},0).wait(1).to({y:227.6},0).wait(1).to({y:236},0).wait(1).to({regX:0,x:385.2,y:216},0).wait(1).to({regX:13,x:398.2,y:216.8},0).wait(1).to({y:217.7},0).wait(1).to({y:218.6},0).wait(1).to({y:219.4},0).wait(1).to({y:220.3},0).wait(1).to({y:221.2},0).wait(1).to({y:222},0).wait(1).to({y:222.9},0).wait(1).to({y:223.8},0).wait(1).to({y:224.6},0).wait(1).to({y:225.5},0).wait(1).to({y:226.4},0).wait(1).to({y:227.3},0).wait(1).to({y:228.1},0).wait(1).to({y:229},0).wait(1).to({y:229.9},0).wait(1).to({y:230.7},0).wait(1).to({y:231.6},0).wait(1).to({y:232.5},0).wait(1).to({y:233.3},0).wait(1).to({y:234.2},0).wait(1).to({y:235.1},0).wait(1).to({y:236},0).wait(1));

	// Stars
	this.instance_5 = new lib.plstartween("synched",0);
	this.instance_5.setTransform(386,76.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:202.4},21).to({scaleX:0.55,scaleY:0.55},23).wait(1));

	// tinystars
	this.instance_6 = new lib.pltinystars();
	this.instance_6.setTransform(382.2,130.4,1.142,1.142,0,0,0,480.2,270.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regY:269.5,y:132.9},0).wait(1).to({y:136.9},0).wait(1).to({y:140.9},0).wait(1).to({y:144.9},0).wait(1).to({y:148.9},0).wait(1).to({y:152.9},0).wait(1).to({y:156.9},0).wait(1).to({y:160.9},0).wait(1).to({y:164.9},0).wait(1).to({y:168.9},0).wait(1).to({y:172.9},0).wait(1).to({y:176.9},0).wait(1).to({y:180.9},0).wait(1).to({y:184.9},0).wait(1).to({y:188.9},0).wait(1).to({y:192.9},0).wait(1).to({y:196.9},0).wait(1).to({y:200.9},0).wait(1).to({y:204.9},0).wait(1).to({y:208.9},0).wait(1).to({regY:270.7,scaleX:1,scaleY:1,y:196.4},0).wait(1).to({regY:269.5,scaleX:0.99,scaleY:0.99,x:382.3,y:195.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:382.4,y:195.1},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:382.5},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:382.6},0).wait(1).to({scaleX:0.96,scaleY:0.96,y:195},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:382.7},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:382.8},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:382.9,y:194.9},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:383},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:383.1,y:194.8},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:383.2},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:383.3,y:194.7},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:383.4},0).wait(1).to({scaleX:0.88,scaleY:0.88},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:383.5},0).wait(1).to({scaleX:0.87,scaleY:0.87,y:194.6},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:383.6},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:383.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198.7,-62.4,1908.4,1386.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;