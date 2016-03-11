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
		{src:"images/mdflag.png", id:"mdflag"},
		{src:"images/mdmonkey.png", id:"mdmonkey"},
		{src:"sounds/flyingsaucerwav.mp3", id:"flyingsaucerwav"}
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



(lib.mdflag = function() {
	this.initialize(img.mdflag);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,316);


(lib.mdmonkey = function() {
	this.initialize(img.mdmonkey);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,288);


(lib.monkey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mdmonkey();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,145,288);


(lib.mdstargold = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFB95E").s().p("AgKA2Ig+AWIAUg/IgogyIBCAAIAjg3IAVA/IA/ATIg1AlIACBCg");
	this.shape.setTransform(9.4,9.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.8,18.7);


(lib.mdstar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag9A+QgagZAAglQAAgjAagaQAZgaAkAAQAkAAAaAaQAaAaAAAjQAAAlgaAZQgaAagkAAQgjAAgagag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.8,-8.8,17.8,17.8);


(lib.mdplanentring = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#008A94").s().p("AjFCCQgDgQAQgjQANgaAMgQQgQAlATARQAQARAogCQBYgGBDhAQBfhWAZgzQAfhDheABIAVgBQAqADARATQATAWggA+QgiBAhFA9QhPBGhZAbQgfAJgWAAQgtAAgHgng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-16.9,39.8,33.8);


(lib.mdmoonlg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9E9E9E").s().p("Ehc3AD+UAo4gMWAspgDCUAuMgDJAtfAHPQEhAuECAvUgwYgGogwkAE/UgvAAE0gpzAPDg");
	this.shape.setTransform(-142.1,-215.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9E9E9E").s().p("AjHCqQhThGAAhkQAAhiBThHQBThGB0AAQB1AABTBGQBSBHAABiQAABkhSBGQhTBGh1AAQh0AAhThGg");
	this.shape_1.setTransform(311.4,-79.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9E9E9E").s().p("AjHCqQhShGAAhkQAAhiBShHQBThHB0AAQB1AABTBHQBTBHAABiQAABkhTBGQhTBHh1AAQh0AAhThHg");
	this.shape_2.setTransform(394.5,-155.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9E9E9E").s().p("AoAG1QjVi1AAkAQABh8A5hzQA2hvBlhWQDVi1ErAAQEsAADVC1QBkBWA3BvQA6BzAAB8QAAB9g6BzQg3BvhkBWQjVC1ksAAQkrAAjVi1g");
	this.shape_3.setTransform(495,-4.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9E9E9E").s().p("AoAG1QhkhWg3hvQg5hzAAh9QAAh9A5hyQA3hvBkhWQDVi1ErAAQEsAADVC1QBkBWA3BvQA5ByAAB9QAAB9g5BzQg3BvhkBWQjVC1ksAAQkrAAjVi1g");
	this.shape_4.setTransform(-411.6,-56.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E8E8E7").s().p("EhzEAt7MAAAhLFQaloMcnkOQdYkWebAAQebAAddEYQcpEPapINMAAABLBg");
	this.shape_5.setTransform(0,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-736.5,-294.5,1473.1,589);


(lib.mdgreenP2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6DA54F").s().p("AhCBDQgcgbAAgoQAAgmAcgcQAcgcAmAAQAoAAAbAcQAcAcAAAmQAAAogcAbQgbAcgoAAQgmAAgcgcg");
	this.shape.setTransform(9.6,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-9.5,19.1,19.1);


(lib.mdgreenP1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#37703C").s().p("AhCBDQgcgcAAgnQAAgmAcgcQAcgcAmAAQAnAAAcAcQAcAcAAAmQAAAngcAcQgcAcgnAAQgmAAgcgcg");
	this.shape.setTransform(9.6,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-9.5,19.1,19.1);


(lib.mdflag2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mdflag();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,316);


(lib.mdCongrats = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66CC02").s().p("AghCqIAAg8IBDAAIAAA8gAghA1IAAjeIBDAAIAADeg");
	this.shape.setTransform(170.5,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66CC02").s().p("AhOBqQgdgaABghIABgBIA+AAQABAUANAJQAMAJATAAQATAAAKgHQAKgIAAgNQAAgLgLgIQgLgIgcgHQgtgJgWgQQgXgSAAgfQAAggAbgXQAcgXAsAAQAwAAAdAXQAdAWgBAjIgBACIhCAAQAAgQgKgJQgJgKgTAAQgPAAgJAIQgKAIAAAMQAAAMAKAIQAKAHAdAGQAuAJAXARQAXASAAAgQAAAigdAWQgeAVgwAAQgwAAgegZg");
	this.shape_1.setTransform(151.4,6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66CC02").s().p("AApCBIAAidQAAgZgKgLQgKgLgVAAQgLAAgMAGQgKAFgIAKIAAC3IhEAAIAAj8IBAAAIADAkQAMgTATgLQAQgLAYAAQAmAAAWAZQAVAYAAAzIAACdg");
	this.shape_2.setTransform(125.7,5.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66CC02").s().p("AhWBfQgggkAAg5IAAgDQAAg5AggkQAfgkA3AAQA4AAAfAkQAgAkAAA5IAAADQAAA5gfAkQggAkg4AAQg3AAgfgkgAglg4QgNAWAAAhIAAADQAAAiAMAWQANAUAZAAQAaAAANgVQAMgVAAgiIAAgDQAAgigNgVQgMgVgaAAQgZAAgMAVg");
	this.shape_3.setTransform(98.6,6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66CC02").s().p("AggC2IAAj7IBBAAIAAD7gAggiCIAAgzIBBAAIAAAzg");
	this.shape_4.setTransform(78.7,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66CC02").s().p("AgSCMQgTgTAAgqIAAiAIgmAAIAAgwIAmAAIAAg+IBCAAIAAA+IArAAIAAAwIgrAAIAAB/QAAAPAGAGQAHAHAKAAIAJgBIAJgCIAFAyIgUAFIgVACQgiAAgSgUg");
	this.shape_5.setTransform(63.4,3.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#66CC02").s().p("AhcBvQgWgVAAgjQAAglAdgTQAdgVA3AAIAkAAIAAgUQAAgSgKgKQgJgKgRAAQgRAAgJAIQgJAIAAAOIhCAAIAAgBQgCggAegYQAdgXAuAAQAuAAAcAXQAdAXAAArIAABnQAAARACAQQADAQAGAPIhFAAIgGgSIgEgUQgLATgRAMQgPAMgYAAQgoAAgVgUgAgiAaQgMALAAAPQAAANAJAIQAIAIAPAAQAQAAAOgJQAOgJAFgMIAAgkIgkAAQgWAAgLALg");
	this.shape_6.setTransform(42.6,6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#66CC02").s().p("AghC2IAAlrIBDAAIAAFrg");
	this.shape_7.setTransform(23.4,0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#66CC02").s().p("AhWBnQgXgaAAg2IAAiXIBFAAIAACYQAAAcAJAMQAJAMATAAQAOAAAMgFQALgGAIgKIAAi3IBEAAIAAD8Ig6AAIgHglQgLAUgSALQgQALgXAAQgoAAgXgag");
	this.shape_8.setTransform(3.5,6.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#66CC02").s().p("AgSCMQgTgTAAgqIAAiAIgmAAIAAgwIAmAAIAAg+IBCAAIAAA+IArAAIAAAwIgrAAIAAB/QAAAPAGAGQAHAHAKAAIAJgBIAJgCIAFAyIgUAFIgVACQgiAAgSgUg");
	this.shape_9.setTransform(-19,3.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#66CC02").s().p("AhcBvQgWgVAAgjQAAglAdgTQAdgVA3AAIAkAAIAAgUQAAgSgKgKQgJgKgRAAQgRAAgJAIQgJAIAAAOIhCAAIAAgBQgCggAegYQAdgXAuAAQAuAAAcAXQAdAXAAArIAABnQAAARACAQQADAQAGAPIhFAAIgGgSIgEgUQgLATgRAMQgPAMgYAAQgoAAgVgUgAgiAaQgMALAAAPQAAANAJAIQAIAIAPAAQAQAAAOgJQAOgJAFgMIAAgkIgkAAQgWAAgLALg");
	this.shape_10.setTransform(-39.7,6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#66CC02").s().p("AhFCBIAAj8IBAAAIADAmQAGgUAPgLQAOgMASAAIAKABIAJACIgIA9IgZgBQgPAAgKAHQgKAGgDALIAACqg");
	this.shape_11.setTransform(-59.7,5.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#66CC02").s().p("AgvCvQgWgFgSgKIANgzQAPAIAQADQARAEATAAQAaAAANgMQANgLAAgZIAAgXQgKAPgQAHQgPAIgSAAQgvAAgZgjQgbgiAAg2IAAgFQAAg8AbglQAZglAwAAQATAAAQAKQARAJALATIAFghIA7AAIAAD6QAAAyggAbQggAbg5AAQgTAAgVgFgAgghnQgMAWgBAkIAAAFQAAAhAMASQALASAYABQAPgBALgFQALgGAGgLIAAhtQgGgLgLgHQgLgGgPAAQgXAAgLAXg");
	this.shape_12.setTransform(-83.4,10.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#66CC02").s().p("AAqCBIAAidQAAgZgLgLQgKgLgVAAQgMAAgLAGQgKAFgIAKIAAC3IhEAAIAAj8IBAAAIADAkQAMgTATgLQAQgLAXAAQAnAAAWAZQAVAYAAAzIAACdg");
	this.shape_13.setTransform(-109.9,5.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#66CC02").s().p("AhWBfQgggkAAg5IAAgDQAAg5AggkQAfgkA3AAQA4AAAfAkQAgAkAAA5IAAADQAAA5gfAkQggAkg4AAQg3AAgfgkgAglg4QgNAWAAAhIAAADQAAAiAMAWQANAUAZAAQAaAAANgVQAMgVAAgiIAAgDQAAgigNgVQgMgVgaAAQgZAAgMAVg");
	this.shape_14.setTransform(-137,6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#66CC02").s().p("AhfCIQgmgpAAg9IAAhDQAAg+AmgnQAlgoA6AAQA/AAAkAhQAkAggBA4IgBABIhCAAQAAgigRgSQgQgRgigBQgdAAgSAaQgSAZAAAmIAABCQAAAoATAZQATAYAfAAQAgAAAPgRQAPgRAAgiIBDAAIAAABQABA3giAhQgjAgg9AAQg8AAgngng");
	this.shape_15.setTransform(-165.5,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183.1,-33.6,366.3,67.3);


(lib.mdcompleteTween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66CC02").s().p("AghCqIAAg8IBDAAIAAA8gAghA0IAAjdIBDAAIAADdg");
	this.shape.setTransform(67.8,31.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66CC02").s().p("AhNBgQghgjAAg2IAAgIQAAg4AfglQAfgkAzAAQAzAAAcAfQAdAfAAA1IAAAjIiWAAIAAABQACAZAPAQQAOAQAYAAQAXAAAPgEQAPgFASgKIASArQgPANgZAIQgaAIgeAAQg1AAghgjgAgZg/QgLAPgDAXIABACIBSAAIAAgGQAAgWgKgNQgLgNgUAAQgRAAgLAOg");
	this.shape_1.setTransform(48.7,35.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66CC02").s().p("AggC2IAAlrIBBAAIAAFrg");
	this.shape_2.setTransform(29.4,30);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66CC02").s().p("AhWBnQgXgaAAg2IAAiXIBEAAIAACYQABAcAIAMQAKAMASAAQAPAAAMgFQALgGAIgKIAAi3IBEAAIAAD8Ig6AAIgHglQgLAUgSALQgQALgYAAQgoAAgWgag");
	this.shape_3.setTransform(9.5,35.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66CC02").s().p("AhXCWQgagiAAg4IAAgFQAAg6AaglQAaglAvAAQARAAAQAJQAPAIALAPIAAiLIBFAAIAAFsIg7AAIgFgfQgMARgRAKQgQAJgTAAQgvAAgagjgAghgBQgLAUAAAkIAAAFQAAAiALATQALATAXAAQAPAAALgGQALgGAHgMIAAhsQgHgKgLgHQgLgHgOAAQgXAAgMAXg");
	this.shape_4.setTransform(-18.1,30.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66CC02").s().p("AhWBfQgggkAAg5IAAgDQAAg5AggkQAfgkA3AAQA4AAAfAkQAgAkAAA5IAAADQAAA5gfAkQggAkg4AAQg3AAgfgkgAglg4QgNAWAAAhIAAADQAAAiAMAWQANAUAZAAQAaAAANgVQAMgVAAgiIAAgDQAAgigNgVQgMgVgaAAQgZAAgMAVg");
	this.shape_5.setTransform(-44.6,35.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#66CC02").s().p("ABtCqIAAhlIAGiWIgBAAIhcD7IgsAAIhbj6IgBAAIAHCVIAABlIhFAAIAAlTIBZAAIBXD5IAAAAIBXj5IBaAAIAAFTg");
	this.shape_6.setTransform(-79.1,31.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#66CC02").s().p("AhNBgQghgjAAg2IAAgIQAAg4AfglQAfgkAzAAQAzAAAcAfQAdAfAAA1IAAAjIiWAAIAAABQACAZAPAQQAOAQAYAAQAXAAAPgEQAPgFASgKIASArQgPANgZAIQgaAIgeAAQg1AAghgjgAgZg/QgLAPgDAXIABACIBSAAIAAgGQAAgWgKgNQgLgNgUAAQgRAAgLAOg");
	this.shape_7.setTransform(-124.4,35.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#66CC02").s().p("AApC2IAAiXQABgegKgKQgLgMgVAAQgMAAgKAFQgMAFgGAJIAAC4IhFAAIAAlrIBFAAIAACQQAMgSARgJQAPgKAVAAQAoAAAWAaQAXAbAAA1IAACWg");
	this.shape_8.setTransform(-150.9,30);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#66CC02").s().p("AgSCMQgTgTAAgqIAAiAIgmAAIAAgwIAmAAIAAg+IBCAAIAAA+IArAAIAAAwIgrAAIAAB/QAAAPAGAGQAHAHAKAAIAJgBIAJgCIAFAyIgUAFIgVACQgiAAgSgUg");
	this.shape_9.setTransform(-173.3,32.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#66CC02").s().p("AhXCWQgagiAAg4IAAgFQAAg6AaglQAaglAvAAQARAAAQAJQAPAIALAPIAAiLIBFAAIAAFsIg7AAIgFgfQgMARgRAKQgQAJgTAAQgvAAgagjgAghgBQgLAUAAAkIAAAFQAAAiALATQALATAXAAQAPAAALgGQALgGAHgMIAAhsQgHgKgLgHQgLgHgOAAQgXAAgMAXg");
	this.shape_10.setTransform(134.7,-29);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#66CC02").s().p("AhNBgQghgjAAg2IAAgIQAAg4AfglQAfgkAzAAQAzAAAcAfQAdAfAAA1IAAAjIiWAAIAAABQACAZAPAQQAOAQAYAAQAXAAAPgEQAPgFASgKIASArQgPANgZAIQgaAIgeAAQg1AAghgjgAgZg/QgLAPgDAXIABACIBSAAIAAgGQAAgWgKgNQgLgNgUAAQgRAAgLAOg");
	this.shape_11.setTransform(109.3,-23.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#66CC02").s().p("AgSCMQgTgTAAgqIAAiAIglAAIAAgwIAlAAIAAg+IBCAAIAAA+IAqAAIAAAwIgqAAIAAB/QAAAPAGAGQAGAHALAAIAJgBIAJgCIAGAyIgVAFIgVACQgiAAgSgUg");
	this.shape_12.setTransform(87.4,-26.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#66CC02").s().p("AhNBgQghgjAAg2IAAgIQAAg4AfglQAfgkAzAAQAzAAAcAfQAdAfAAA1IAAAjIiWAAIAAABQACAZAPAQQAOAQAYAAQAXAAAPgEQAPgFASgKIASArQgPANgZAIQgaAIgeAAQg1AAghgjgAgZg/QgLAPgDAXIABACIBSAAIAAgGQAAgWgKgNQgLgNgUAAQgRAAgLAOg");
	this.shape_13.setTransform(67.1,-23.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#66CC02").s().p("AghC2IAAlrIBDAAIAAFrg");
	this.shape_14.setTransform(47.8,-29.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#66CC02").s().p("AhxCxIAAldIA+AAIAEAeQALgQAQgJQAQgKATABQAvAAAaAlQAaAkAAA8IAAAFQAAA3gaAhQgaAjgvAAQgSAAgPgIQgQgHgLgOIAAB5gAgbh1QgLAGgHAMIAABtQAHALALAFQAKAGAQAAQAXAAAMgTQALgSAAghIAAgFQAAgkgMgWQgMgXgWAAQgQAAgKAHg");
	this.shape_15.setTransform(28.4,-19);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#66CC02").s().p("ABwCBIAAiYQAAgdgJgMQgJgLgTAAQgOAAgLAHQgLAGgGAMIAAAHIAAAHIAAClIhCAAIAAiYQAAgdgJgLQgKgMgSAAQgOAAgKAGQgLAFgHAJIAAC4IhEAAIAAj8IBAAAIACAiQANgTASgJQASgLAYAAQAZAAAQALQARALAIAWQAMgVATgLQATgMAZAAQAlAAAWAaQAWAaAAA1IAACYg");
	this.shape_16.setTransform(-6.4,-23.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#66CC02").s().p("AhWBfQgggkAAg5IAAgDQAAg5AggkQAfgkA3AAQA4AAAfAkQAgAkAAA5IAAADQAAA5gfAkQggAkg4AAQg3AAgfgkgAglg4QgNAWAAAhIAAADQAAAiAMAWQANAUAZAAQAaAAANgVQAMgVAAgiIAAgDQAAgigNgVQgMgVgaAAQgZAAgMAVg");
	this.shape_17.setTransform(-40.7,-23.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#66CC02").s().p("AhfCHQgmgoAAg+IAAhBQAAg/AmgoQAlgnA6AAQA/AAAkAgQAkAhgBA4IgBABIhCAAQAAgigRgRQgQgTgiABQgdAAgSAYQgSAZAAAnIAABCQAAAnATAZQATAZAfAAQAgAAAPgRQAPgSAAghIBDAAIAAABQABA3giAgQgjAhg9AAQg8AAgngog");
	this.shape_18.setTransform(-69.2,-28);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#66CC02").s().p("AhWBnQgXgaAAg2IAAiXIBEAAIAACYQABAcAIAMQAKAMASAAQAPAAALgFQAMgGAIgKIAAi3IBEAAIAAD8Ig6AAIgHglQgLAUgSALQgQALgYAAQgoAAgWgag");
	this.shape_19.setTransform(-110.3,-23.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#66CC02").s().p("AhWBfQgggkAAg5IAAgDQAAg5AggkQAfgkA3AAQA4AAAfAkQAgAkAAA5IAAADQAAA5gfAkQggAkg4AAQg3AAgfgkgAglg4QgNAWAAAhIAAADQAAAiAMAWQANAUAZAAQAaAAANgVQAMgVAAgiIAAgDQAAgigNgVQgMgVgaAAQgZAAgMAVg");
	this.shape_20.setTransform(-137.4,-23.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#66CC02").s().p("AghCqIAAh7Ih0jYIBLAAIBKCdIAAAAIBLidIBLAAIh1DbIAAB4g");
	this.shape_21.setTransform(-166,-28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183.1,-63.3,366.3,126.6);


(lib.mdbluebody = function(mode,startPosition,loop) {
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


(lib.Path_17_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AgFANQgFgDAAgGQgBgFAEgGIAFgGIgDADQgEAHABAEQABAHAFACQAFAEAIgGQgGAGgFAAQgCAAgDgBg");
	this.shape.setTransform(1.2,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2.4,3);


(lib.Path_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHgCQhhiBARAGQBXAeAwBNQArBAAABQQg0hBgug/g");
	this.shape.setTransform(9.1,12.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.3,25.4);


(lib.Path_16_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AAAAPIAAgdIABAAIAAAdg");
	this.shape.setTransform(0.1,1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.3,3.1);


(lib.Path_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AhUAPIA8gmQBEAEApACIgdAoQhRgDg7gFg");
	this.shape.setTransform(8.6,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17.1,4.8);


(lib.Path_15_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AAAAPIAAgdIABAAIAAAdg");
	this.shape.setTransform(0.1,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0.3,3.1);


(lib.Path_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("Ag/AUIAdgpIBiABIAAAqQhHAAg4gCg");
	this.shape.setTransform(6.5,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13,4.6);


(lib.Path_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AhIgUIB4gCIAZAqQgvABhiABg");
	this.shape.setTransform(7.4,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.8,4.6);


(lib.Path_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AhugFQBsgKBEgPQAtAPAAAQQg6ARhoANg");
	this.shape.setTransform(11.1,3.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22.2,6.3);


(lib.Path_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AhcgRQAxgBBLgFIA9AlQhPAHhPADg");
	this.shape.setTransform(9.3,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.6,5);


(lib.Path_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AhvACIAAAAQAAgQAsgQQBGAPBtAJIg6AlQhrgMg6gRg");
	this.shape.setTransform(11.2,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22.5,6.2);


(lib.Path_10_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AgbAIQAAgIAJgIQAJgKAJAAQALAAAIAKQAJAIgBAIQAAALgbAAQgbAAAAgLg");
	this.shape.setTransform(2.8,2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.6,4);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFB95E").s().p("AhUAPIA8gmQBEAEApACIgdAoQhRgDg7gFg");
	this.shape.setTransform(8.6,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17.1,4.8);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/AUIAdgpIBiABIAAAqQhHAAg4gCg");
	this.shape.setTransform(6.5,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13,4.6);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CF4439").s().p("AhIgUIB4gCIAZAqQgvABhiABg");
	this.shape.setTransform(7.4,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.8,4.6);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhugFQBsgKBEgPQAtAPAAAQQg6ARhoANg");
	this.shape.setTransform(11.1,3.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22.2,6.3);


(lib.Path_6_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AgeAVQAbghAigIQgeALgVAeg");
	this.shape.setTransform(3.2,2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6.4,4.3);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFB95E").s().p("AhcgRQAxgBBLgFIA9AlQhPAHhPADg");
	this.shape.setTransform(9.3,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.6,5);


(lib.Path_5_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AglA6QgbgaAAgiQAAgbAPgVQANgWAYgLQgVAMgNAVQgMAUAAAZQAAAjAZAZQAaAaAiAAQAVAAAQgJQgTAMgWAAQgjAAgZgag");
	this.shape.setTransform(6.5,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13,16.8);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CF4439").s().p("AhvACIAAAAQAAgQAsgQQBGAPBtAJIg6AlQhrgMg6gRg");
	this.shape.setTransform(11.2,3.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22.5,6.2);


(lib.Path_4_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AgSAcQgMgMAAgQQAAgNAHgKQAHgLAMgFQgVAMAAAYQAAAQAMAMQANAMAPAAQAIAAAIgDQgKAFgLABQgPgBgNgLg");
	this.shape.setTransform(3.1,4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6.3,8);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AjEAdQhigXgEgbQgDgaBCgDIAAAMQABAaBPAUQBUAYBngCQBmgCBRgYQBMgVAHgaIABAKIAAACQABAchTAYQhYAchxACIgQAAQhoAAhcgWg");
	this.shape.setTransform(30,5.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60,10.3);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#272021").s().p("AgFAEIAAgOIADAAIAAAMQAAAGAEABIADgBQgBADgEAAQgEAAgBgHg");
	this.shape.setTransform(0.6,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.2,2.3);


(lib.Path_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AgFgHQAFACADAFIADAIQgFgIgGgHg");
	this.shape.setTransform(0.7,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.4,1.8);


(lib.Path_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#272021").s().p("AACALQgDAAgBgEIgEgQIAAgBIADAAIADAOQAAAEAEAAIACAAIABAAQAAAAgBABQAAAAAAABQgBAAAAAAQgBABgBAAg");
	this.shape.setTransform(0.7,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.5,2.3);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#272021").s().p("AgIAYQgLgKAAgOQAAgNALgKQAIgLAPAAIAFABQgNACgHAJQgJAKAAAMQAAANAJAKQAHAJANACIgFABQgPAAgIgLg");
	this.shape.setTransform(2,3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.1,7.1);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AlRAoQi+hHgQhUQAHARArANQA7BNCuA2QC+A9DbgBQDTAAC4g6QjDBEjmAAIgHAAQj3AAjKhMg");
	this.shape.setTransform(54.4,11.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,108.9,23.4);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#272021").s().p("AgIAZQgLgKAAgPQAAgNALgKQAIgLAPAAIAFABQgNABgHALQgJAJAAAMQAAANAJAKQAHAKANABIgFABQgPAAgIgKg");
	this.shape.setTransform(2,3.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.1,7.1);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.mdtinystars = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mdstar();
	this.instance.setTransform(218,458,0.293,0.293,0,0,0,5.7,4.8);
	this.instance.alpha = 0.699;

	this.circle = new lib.mdstar();
	this.circle.setTransform(878.2,532.2,0.293,0.293);
	this.circle.alpha = 0.699;

	this.instance_1 = new lib.mdstar();
	this.instance_1.setTransform(945.1,486.7,0.293,0.293,0,0,0,4.5,3.8);
	this.instance_1.alpha = 0.699;

	this.instance_2 = new lib.mdstar();
	this.instance_2.setTransform(756,513.2,0.293,0.293,0,0,0,3.9,3.8);
	this.instance_2.alpha = 0.699;

	this.instance_3 = new lib.mdstar();
	this.instance_3.setTransform(756,444.7,0.293,0.293,0,0,0,3.9,6.5);
	this.instance_3.alpha = 0.699;

	this.circle_1 = new lib.mdstar();
	this.circle_1.setTransform(785.5,532.2,0.293,0.293);
	this.circle_1.alpha = 0.699;

	this.instance_4 = new lib.mdstar();
	this.instance_4.setTransform(843.2,520.2,0.293,0.293,0,0,0,3.8,8);
	this.instance_4.alpha = 0.699;

	this.instance_5 = new lib.mdstar();
	this.instance_5.setTransform(872.2,422,0.293,0.293,0,0,0,3.8,8.3);
	this.instance_5.alpha = 0.699;

	this.circle_2 = new lib.mdstar();
	this.circle_2.setTransform(909.4,448.3,0.293,0.293);
	this.circle_2.alpha = 0.699;

	this.instance_6 = new lib.mdstar();
	this.instance_6.setTransform(884.9,487.8,0.293,0.293,0,0,0,4.6,7.5);
	this.instance_6.alpha = 0.699;

	this.circle_3 = new lib.mdstar();
	this.circle_3.setTransform(855.9,462.4,0.293,0.293);
	this.circle_3.alpha = 0.699;

	this.circle_4 = new lib.mdstar();
	this.circle_4.setTransform(78.6,538.9,0.293,0.293);
	this.circle_4.alpha = 0.699;

	this.instance_7 = new lib.mdstar();
	this.instance_7.setTransform(47.2,517.3,0.293,0.293,0,0,0,5.5,6.7);
	this.instance_7.alpha = 0.699;

	this.instance_8 = new lib.mdstar();
	this.instance_8.setTransform(108.1,510.5,0.293,0.293,0,0,0,5.7,3.6);
	this.instance_8.alpha = 0.699;

	this.instance_9 = new lib.mdstar();
	this.instance_9.setTransform(187.4,458,0.293,0.293,0,0,0,6.3,4.8);
	this.instance_9.alpha = 0.699;

	this.circle_5 = new lib.mdstar();
	this.circle_5.setTransform(609,523.7,0.293,0.293);
	this.circle_5.alpha = 0.699;

	this.instance_10 = new lib.mdstar();
	this.instance_10.setTransform(652.4,511.3,0.293,0.293,0,0,0,5.8,2.8);
	this.instance_10.alpha = 0.699;

	this.circle_6 = new lib.mdstar();
	this.circle_6.setTransform(719,517.9,0.293,0.293);
	this.circle_6.alpha = 0.699;

	this.circle_7 = new lib.mdstar();
	this.circle_7.setTransform(754.8,474.8,0.293,0.293);
	this.circle_7.alpha = 0.699;

	this.instance_11 = new lib.mdstar();
	this.instance_11.setTransform(807.3,490.8,0.293,0.293,0,0,0,6.3,7.7);
	this.instance_11.alpha = 0.699;

	this.instance_12 = new lib.mdstar();
	this.instance_12.setTransform(720.6,434,0.293,0.293,0,0,0,5.5,6.7);
	this.instance_12.alpha = 0.699;

	this.instance_13 = new lib.mdstar();
	this.instance_13.setTransform(685.8,372.7,0.293,0.293,0,0,0,7.4,6);
	this.instance_13.alpha = 0.699;

	this.instance_14 = new lib.mdstar();
	this.instance_14.setTransform(843.2,136.5,0.293,0.293,0,0,0,3.8,5.7);
	this.instance_14.alpha = 0.699;

	this.circle_8 = new lib.mdstar();
	this.circle_8.setTransform(883.5,162.5,0.293,0.293);
	this.circle_8.alpha = 0.699;

	this.instance_15 = new lib.mdstar();
	this.instance_15.setTransform(953.4,168,0.293,0.293,0,0,0,3.8,6.5);
	this.instance_15.alpha = 0.699;

	this.circle_9 = new lib.mdstar();
	this.circle_9.setTransform(940.7,282.1,0.293,0.293);
	this.circle_9.alpha = 0.699;

	this.instance_16 = new lib.mdstar();
	this.instance_16.setTransform(859.2,337.6,0.293,0.293,0,0,0,5.7,2.8);
	this.instance_16.alpha = 0.699;

	this.instance_17 = new lib.mdstar();
	this.instance_17.setTransform(902.9,296.4,0.293,0.293,0,0,0,5,4.5);
	this.instance_17.alpha = 0.699;

	this.circle_10 = new lib.mdstar();
	this.circle_10.setTransform(909.4,199.6,0.293,0.293);
	this.circle_10.alpha = 0.699;

	this.instance_18 = new lib.mdstar();
	this.instance_18.setTransform(807.3,42.2,0.293,0.293,0,0,0,6.3,6.9);
	this.instance_18.alpha = 0.699;

	this.instance_19 = new lib.mdstar();
	this.instance_19.setTransform(747.3,59.2,0.293,0.293,0,0,0,5.3,4.8);
	this.instance_19.alpha = 0.699;

	this.instance_20 = new lib.mdstar();
	this.instance_20.setTransform(747.3,115.4,0.293,0.293,0,0,0,5.3,4.1);
	this.instance_20.alpha = 0.699;

	this.instance_21 = new lib.mdstar();
	this.instance_21.setTransform(711.8,178.5,0.293,0.293,0,0,0,5.7,6.7);
	this.instance_21.alpha = 0.699;

	this.instance_22 = new lib.mdstar();
	this.instance_22.setTransform(905.1,138.2,0.293,0.293,0,0,0,3.9,5.7);
	this.instance_22.alpha = 0.699;

	this.instance_23 = new lib.mdstar();
	this.instance_23.setTransform(856.5,195.1,0.293,0.293,0,0,0,3.2,4.8);
	this.instance_23.alpha = 0.699;

	this.circle_11 = new lib.mdstar();
	this.circle_11.setTransform(827,230.1,0.293,0.293);
	this.circle_11.alpha = 0.699;

	this.instance_24 = new lib.mdstar();
	this.instance_24.setTransform(807.3,287,0.293,0.293,0,0,0,6.3,4.8);
	this.instance_24.alpha = 0.699;

	this.circle_12 = new lib.mdstar();
	this.circle_12.setTransform(857.8,300.6,0.293,0.293);
	this.circle_12.alpha = 0.699;

	this.instance_25 = new lib.mdstar();
	this.instance_25.setTransform(707.9,281.6,0.293,0.293,0,0,0,4.1,5.7);
	this.instance_25.alpha = 0.699;

	this.instance_26 = new lib.mdstar();
	this.instance_26.setTransform(659.4,87,0.293,0.293,0,0,0,4.1,4.2);
	this.instance_26.alpha = 0.699;

	this.instance_27 = new lib.mdstar();
	this.instance_27.setTransform(569.9,122.5,0.293,0.293,0,0,0,4.2,3.8);
	this.instance_27.alpha = 0.699;

	this.circle_13 = new lib.mdstar();
	this.circle_13.setTransform(661.5,124.4,0.293,0.293);
	this.circle_13.alpha = 0.699;

	this.circle_14 = new lib.mdstar();
	this.circle_14.setTransform(775,76.4,0.293,0.293);
	this.circle_14.alpha = 0.699;

	this.circle_15 = new lib.mdstar();
	this.circle_15.setTransform(700.2,140.1,0.293,0.293);
	this.circle_15.alpha = 0.699;

	this.instance_28 = new lib.mdstar();
	this.instance_28.setTransform(335.7,106.5,0.293,0.293,0,0,0,8.3,4.6);
	this.instance_28.alpha = 0.699;

	this.instance_29 = new lib.mdstar();
	this.instance_29.setTransform(335.7,160.9,0.293,0.293,0,0,0,3.6,6.5);
	this.instance_29.alpha = 0.699;

	this.circle_16 = new lib.mdstar();
	this.circle_16.setTransform(379,137.4,0.293,0.293);
	this.circle_16.alpha = 0.699;

	this.circle_17 = new lib.mdstar();
	this.circle_17.setTransform(17.3,219.1,0.293,0.293);
	this.circle_17.alpha = 0.699;

	this.instance_30 = new lib.mdstar();
	this.instance_30.setTransform(90.2,218.3,0.293,0.293,0,0,0,2.9,3.6);
	this.instance_30.alpha = 0.699;

	this.instance_31 = new lib.mdstar();
	this.instance_31.setTransform(44,195.9,0.293,0.293,0,0,0,5.7,7.5);
	this.instance_31.alpha = 0.699;

	this.circle_18 = new lib.mdstar();
	this.circle_18.setTransform(49,230.1,0.293,0.293);
	this.circle_18.alpha = 0.699;

	this.circle_19 = new lib.mdstar();
	this.circle_19.setTransform(231.4,186,0.293,0.293);
	this.circle_19.alpha = 0.699;

	this.circle_20 = new lib.mdstar();
	this.circle_20.setTransform(805.7,387.9,0.293,0.293);
	this.circle_20.alpha = 0.699;

	this.circle_21 = new lib.mdstar();
	this.circle_21.setTransform(839.3,413.1,0.293,0.293);
	this.circle_21.alpha = 0.699;

	this.circle_22 = new lib.mdstar();
	this.circle_22.setTransform(782.7,187.6,0.293,0.293);
	this.circle_22.alpha = 0.699;

	this.instance_32 = new lib.mdstar();
	this.instance_32.setTransform(255.6,106.5,0.293,0.293,0,0,0,5,4.6);
	this.instance_32.alpha = 0.699;

	this.circle_23 = new lib.mdstar();
	this.circle_23.setTransform(80.2,178.5,0.293,0.293);
	this.circle_23.alpha = 0.699;

	this.circle_24 = new lib.mdstar();
	this.circle_24.setTransform(84.8,107.6,0.293,0.293);
	this.circle_24.alpha = 0.699;

	this.circle_25 = new lib.mdstar();
	this.circle_25.setTransform(58.5,140.1,0.293,0.293);
	this.circle_25.alpha = 0.699;

	this.instance_33 = new lib.mdstar();
	this.instance_33.setTransform(255.6,160.9,0.293,0.293,0,0,0,5,6.5);
	this.instance_33.alpha = 0.699;

	this.circle_26 = new lib.mdstar();
	this.circle_26.setTransform(275.5,194.2,0.293,0.293);
	this.circle_26.alpha = 0.699;

	this.circle_27 = new lib.mdstar();
	this.circle_27.setTransform(289.8,131.6,0.293,0.293);
	this.circle_27.alpha = 0.699;

	this.circle_28 = new lib.mdstar();
	this.circle_28.setTransform(205,121.4,0.293,0.293);
	this.circle_28.alpha = 0.699;

	this.circle_29 = new lib.mdstar();
	this.circle_29.setTransform(224.4,154.2,0.293,0.293);
	this.circle_29.alpha = 0.699;

	this.circle_30 = new lib.mdstar();
	this.circle_30.setTransform(244.2,222.6,0.293,0.293);
	this.circle_30.alpha = 0.699;

	this.circle_31 = new lib.mdstar();
	this.circle_31.setTransform(160.3,79.7,0.293,0.293);
	this.circle_31.alpha = 0.699;

	this.circle_32 = new lib.mdstar();
	this.circle_32.setTransform(179,145.7,0.293,0.293);
	this.circle_32.alpha = 0.699;

	this.circle_33 = new lib.mdstar();
	this.circle_33.setTransform(130.5,107.6,0.293,0.293);
	this.circle_33.alpha = 0.699;

	this.circle_34 = new lib.mdstar();
	this.circle_34.setTransform(140.2,178.5,0.293,0.293);
	this.circle_34.alpha = 0.699;

	this.circle_35 = new lib.mdstar();
	this.circle_35.setTransform(188,201.2,0.293,0.293);
	this.circle_35.alpha = 0.699;

	this.circle_36 = new lib.mdstar();
	this.circle_36.setTransform(166.8,233.2,0.293,0.293);
	this.circle_36.alpha = 0.699;

	this.circle_37 = new lib.mdstar();
	this.circle_37.setTransform(166.8,172.2,0.293,0.293);
	this.circle_37.alpha = 0.699;

	this.circle_38 = new lib.mdstar();
	this.circle_38.setTransform(63.1,63.7,0.293,0.293);
	this.circle_38.alpha = 0.699;

	this.circle_39 = new lib.mdstar();
	this.circle_39.setTransform(94.3,81.3,0.293,0.293);
	this.circle_39.alpha = 0.699;

	this.circle_40 = new lib.mdstar();
	this.circle_40.setTransform(17.3,105.9,0.293,0.293);
	this.circle_40.alpha = 0.699;

	this.instance_34 = new lib.mdstar();
	this.instance_34.setTransform(29.4,2.3,0.293,0.293,0,0,0,4.8,7.5);
	this.instance_34.alpha = 0.699;

	this.circle_41 = new lib.mdstar();
	this.circle_41.setTransform(49,35.2,0.293,0.293);
	this.circle_41.alpha = 0.699;

	this.circle_42 = new lib.mdstar();
	this.circle_42.setTransform(765.6,256.9,0.293,0.293);
	this.circle_42.alpha = 0.699;

	this.circle_43 = new lib.mdstar();
	this.circle_43.setTransform(2.6,139.8,0.293,0.293);
	this.circle_43.alpha = 0.699;

	this.instance_35 = new lib.mdstar();
	this.instance_35.setTransform(413.8,103.5,0.293,0.293,0,0,0,4.8,6.5);
	this.instance_35.alpha = 0.699;

	this.circle_44 = new lib.mdstar();
	this.circle_44.setTransform(684.7,426.9,0.293,0.293);
	this.circle_44.alpha = 0.699;

	this.circle_45 = new lib.mdstar();
	this.circle_45.setTransform(9.8,177.1,0.293,0.293);
	this.circle_45.alpha = 0.699;

	this.circle_46 = new lib.mdstar();
	this.circle_46.setTransform(725.6,249.6,0.293,0.293);
	this.circle_46.alpha = 0.699;

	this.circle_47 = new lib.mdstar();
	this.circle_47.setTransform(707,312.5,0.293,0.293);
	this.circle_47.alpha = 0.699;

	this.instance_36 = new lib.mdstar();
	this.instance_36.setTransform(942.6,62.2,0.293,0.293,0,0,0,6.3,5.7);
	this.instance_36.alpha = 0.699;

	this.circle_48 = new lib.mdstar();
	this.circle_48.setTransform(104.3,142.3,0.293,0.293);
	this.circle_48.alpha = 0.699;

	this.circle_49 = new lib.mdstar();
	this.circle_49.setTransform(827,102,0.293,0.293);
	this.circle_49.alpha = 0.699;

	this.circle_50 = new lib.mdstar();
	this.circle_50.setTransform(805.7,337.6,0.293,0.293);
	this.circle_50.alpha = 0.699;

	this.circle_51 = new lib.mdstar();
	this.circle_51.setTransform(957.8,327.4,0.293,0.293);
	this.circle_51.alpha = 0.699;

	this.instance_37 = new lib.mdstar();
	this.instance_37.setTransform(798.7,430.9,0.293,0.293,0,0,0,6.5,4.6);
	this.instance_37.alpha = 0.699;

	this.circle_52 = new lib.mdstar();
	this.circle_52.setTransform(754.8,413.1,0.293,0.293);
	this.circle_52.alpha = 0.699;

	this.circle_53 = new lib.mdstar();
	this.circle_53.setTransform(17.3,63.7,0.293,0.293);
	this.circle_53.alpha = 0.699;

	this.circle_54 = new lib.mdstar();
	this.circle_54.setTransform(693.8,470.2,0.293,0.293);
	this.circle_54.alpha = 0.699;

	this.circle_55 = new lib.mdstar();
	this.circle_55.setTransform(2.6,29.9,0.293,0.293);
	this.circle_55.alpha = 0.699;

	this.circle_56 = new lib.mdstar();
	this.circle_56.setTransform(938.3,119.5,0.293,0.293);
	this.circle_56.alpha = 0.699;

	this.circle_57 = new lib.mdstar();
	this.circle_57.setTransform(766.7,360.6,0.293,0.293);
	this.circle_57.alpha = 0.699;

	this.circle_58 = new lib.mdstar();
	this.circle_58.setTransform(743.1,306.2,0.293,0.293);
	this.circle_58.alpha = 0.699;

	this.circle_59 = new lib.mdstar();
	this.circle_59.setTransform(852.8,62.8,0.293,0.293);
	this.circle_59.alpha = 0.699;

	this.circle_60 = new lib.mdstar();
	this.circle_60.setTransform(881.4,376,0.293,0.293);
	this.circle_60.alpha = 0.699;

	this.circle_61 = new lib.mdstar();
	this.circle_61.setTransform(875.5,119.5,0.293,0.293);
	this.circle_61.alpha = 0.699;

	this.instance_38 = new lib.mdstar();
	this.instance_38.setTransform(597.9,481.8,0.293,0.293,0,0,0,2.8,5.7);
	this.instance_38.alpha = 0.699;

	this.circle_62 = new lib.mdstar();
	this.circle_62.setTransform(898.4,72.2,0.293,0.293);
	this.circle_62.alpha = 0.699;

	this.circle_63 = new lib.mdstar();
	this.circle_63.setTransform(832.7,362.8,0.293,0.293);
	this.circle_63.alpha = 0.699;

	this.circle_64 = new lib.mdstar();
	this.circle_64.setTransform(664,454.9,0.293,0.293);
	this.circle_64.alpha = 0.699;

	this.circle_65 = new lib.mdstar();
	this.circle_65.setTransform(942.6,422,0.293,0.293);
	this.circle_65.alpha = 0.699;

	this.circle_66 = new lib.mdstar();
	this.circle_66.setTransform(627.8,476.4,0.293,0.293);
	this.circle_66.alpha = 0.699;

	this.circle_67 = new lib.mdstar();
	this.circle_67.setTransform(627.8,178.5,0.293,0.293);
	this.circle_67.alpha = 0.699;

	this.circle_68 = new lib.mdstar();
	this.circle_68.setTransform(897.1,331.7,0.293,0.293);
	this.circle_68.alpha = 0.699;

	this.circle_69 = new lib.mdstar();
	this.circle_69.setTransform(770.5,299.7,0.293,0.293);
	this.circle_69.alpha = 0.699;

	this.circle_70 = new lib.mdstar();
	this.circle_70.setTransform(49,95.4,0.293,0.293);
	this.circle_70.alpha = 0.699;

	this.circle_71 = new lib.mdstar();
	this.circle_71.setTransform(641.6,156.4,0.293,0.293);
	this.circle_71.alpha = 0.699;

	this.circle_72 = new lib.mdstar();
	this.circle_72.setTransform(661.5,186,0.293,0.293);
	this.circle_72.alpha = 0.699;

	this.circle_73 = new lib.mdstar();
	this.circle_73.setTransform(937.7,373.3,0.293,0.293);
	this.circle_73.alpha = 0.699;

	this.circle_74 = new lib.mdstar();
	this.circle_74.setTransform(888.8,7.8,0.293,0.293);
	this.circle_74.alpha = 0.699;

	this.circle_75 = new lib.mdstar();
	this.circle_75.setTransform(356.7,11.8,0.293,0.293);
	this.circle_75.alpha = 0.699;

	this.instance_39 = new lib.mdstar();
	this.instance_39.setTransform(687.7,62.2,0.293,0.293,0,0,0,6.5,5.7);
	this.instance_39.alpha = 0.699;

	this.circle_76 = new lib.mdstar();
	this.circle_76.setTransform(707,96.6,0.293,0.293);
	this.circle_76.alpha = 0.699;

	this.circle_77 = new lib.mdstar();
	this.circle_77.setTransform(721.8,33.2,0.293,0.293);
	this.circle_77.alpha = 0.699;

	this.circle_78 = new lib.mdstar();
	this.circle_78.setTransform(341.4,46.1,0.293,0.293);
	this.circle_78.alpha = 0.699;

	this.circle_79 = new lib.mdstar();
	this.circle_79.setTransform(635.8,22.7,0.293,0.293);
	this.circle_79.alpha = 0.699;

	this.circle_80 = new lib.mdstar();
	this.circle_80.setTransform(656,55.6,0.293,0.293);
	this.circle_80.alpha = 0.699;

	this.instance_40 = new lib.mdstar();
	this.instance_40.setTransform(923.8,248.4,0.293,0.293,0,0,0,3.8,4.6);
	this.instance_40.alpha = 0.699;

	this.circle_81 = new lib.mdstar();
	this.circle_81.setTransform(495.8,91.3,0.293,0.293);
	this.circle_81.alpha = 0.699;

	this.circle_82 = new lib.mdstar();
	this.circle_82.setTransform(347.9,83,0.293,0.293);
	this.circle_82.alpha = 0.699;

	this.circle_83 = new lib.mdstar();
	this.circle_83.setTransform(454.4,79.7,0.293,0.293);
	this.circle_83.alpha = 0.699;

	this.circle_84 = new lib.mdstar();
	this.circle_84.setTransform(515.5,129.2,0.293,0.293);
	this.circle_84.alpha = 0.699;

	this.circle_85 = new lib.mdstar();
	this.circle_85.setTransform(443.3,48.8,0.293,0.293);
	this.circle_85.alpha = 0.699;

	this.circle_86 = new lib.mdstar();
	this.circle_86.setTransform(827,162.5,0.293,0.293);
	this.circle_86.alpha = 0.699;

	this.circle_87 = new lib.mdstar();
	this.circle_87.setTransform(793.8,140.1,0.293,0.293);
	this.circle_87.alpha = 0.699;

	this.circle_88 = new lib.mdstar();
	this.circle_88.setTransform(216.4,2.6,0.293,0.293);
	this.circle_88.alpha = 0.699;

	this.instance_41 = new lib.mdstar();
	this.instance_41.setTransform(787.1,233.2,0.293,0.293,0,0,0,6.7,3.9);
	this.instance_41.alpha = 0.699;

	this.circle_89 = new lib.mdstar();
	this.circle_89.setTransform(741.8,215.3,0.293,0.293);
	this.circle_89.alpha = 0.699;

	this.circle_90 = new lib.mdstar();
	this.circle_90.setTransform(888.8,264.5,0.293,0.293);
	this.circle_90.alpha = 0.699;

	this.circle_91 = new lib.mdstar();
	this.circle_91.setTransform(611.5,47.5,0.293,0.293);
	this.circle_91.alpha = 0.699;

	this.circle_92 = new lib.mdstar();
	this.circle_92.setTransform(587.8,22.7,0.293,0.293);
	this.circle_92.alpha = 0.699;

	this.circle_93 = new lib.mdstar();
	this.circle_93.setTransform(554.9,50.2,0.293,0.293);
	this.circle_93.alpha = 0.699;

	this.circle_94 = new lib.mdstar();
	this.circle_94.setTransform(754.8,162.5,0.293,0.293);
	this.circle_94.alpha = 0.699;

	this.circle_95 = new lib.mdstar();
	this.circle_95.setTransform(265.3,64.5,0.293,0.293);
	this.circle_95.alpha = 0.699;

	this.circle_96 = new lib.mdstar();
	this.circle_96.setTransform(545.6,95.4,0.293,0.293);
	this.circle_96.alpha = 0.699;

	this.circle_97 = new lib.mdstar();
	this.circle_97.setTransform(140.2,51.3,0.293,0.293);
	this.circle_97.alpha = 0.699;

	this.circle_98 = new lib.mdstar();
	this.circle_98.setTransform(292,83,0.293,0.293);
	this.circle_98.alpha = 0.699;

	this.circle_99 = new lib.mdstar();
	this.circle_99.setTransform(620.1,102.5,0.293,0.293);
	this.circle_99.alpha = 0.699;

	this.circle_100 = new lib.mdstar();
	this.circle_100.setTransform(493.3,50.2,0.293,0.293);
	this.circle_100.alpha = 0.699;

	this.circle_101 = new lib.mdstar();
	this.circle_101.setTransform(238.8,59.5,0.293,0.293);
	this.circle_101.alpha = 0.699;

	this.circle_102 = new lib.mdstar();
	this.circle_102.setTransform(515.5,3.2,0.293,0.293);
	this.circle_102.alpha = 0.699;

	this.circle_103 = new lib.mdstar();
	this.circle_103.setTransform(91.6,29.9,0.293,0.293);
	this.circle_103.alpha = 0.699;

	this.circle_104 = new lib.mdstar();
	this.circle_104.setTransform(857.8,248.4,0.293,0.293);
	this.circle_104.alpha = 0.699;

	this.circle_105 = new lib.mdstar();
	this.circle_105.setTransform(201.5,97.3,0.293,0.293);
	this.circle_105.alpha = 0.699;

	this.circle_106 = new lib.mdstar();
	this.circle_106.setTransform(278.8,29.9,0.293,0.293);
	this.circle_106.alpha = 0.699;

	this.circle_107 = new lib.mdstar();
	this.circle_107.setTransform(155.4,6.7,0.293,0.293);
	this.circle_107.alpha = 0.699;

	this.circle_108 = new lib.mdstar();
	this.circle_108.setTransform(587.2,74.1,0.293,0.293);
	this.circle_108.alpha = 0.699;

	this.circle_109 = new lib.mdstar();
	this.circle_109.setTransform(293.1,8.2,0.293,0.293);
	this.circle_109.alpha = 0.699;

	this.circle_110 = new lib.mdstar();
	this.circle_110.setTransform(311.9,38,0.293,0.293);
	this.circle_110.alpha = 0.699;

	this.circle_111 = new lib.mdstar();
	this.circle_111.setTransform(196.6,48.8,0.293,0.293);
	this.circle_111.alpha = 0.699;

	this.circle_112 = new lib.mdstar();
	this.circle_112.setTransform(35.2,332.8,0.293,0.293);
	this.circle_112.alpha = 0.699;

	this.circle_113 = new lib.mdstar();
	this.circle_113.setTransform(68.8,357.7,0.293,0.293);
	this.circle_113.alpha = 0.699;

	this.circle_114 = new lib.mdstar();
	this.circle_114.setTransform(362.7,235.8,0.293,0.293);
	this.circle_114.alpha = 0.699;

	this.instance_42 = new lib.mdstar();
	this.instance_42.setTransform(539.2,438.8,0.293,0.293,0,0,0,6.5,6.2);
	this.instance_42.alpha = 0.699;

	this.circle_115 = new lib.mdstar();
	this.circle_115.setTransform(362.7,510.5,0.293,0.293);
	this.circle_115.alpha = 0.699;

	this.circle_116 = new lib.mdstar();
	this.circle_116.setTransform(367.1,439.9,0.293,0.293);
	this.circle_116.alpha = 0.699;

	this.circle_117 = new lib.mdstar();
	this.circle_117.setTransform(340.3,472.6,0.293,0.293);
	this.circle_117.alpha = 0.699;

	this.instance_43 = new lib.mdstar();
	this.instance_43.setTransform(539.2,493.7,0.293,0.293,0,0,0,6.5,7);
	this.instance_43.alpha = 0.699;

	this.circle_118 = new lib.mdstar();
	this.circle_118.setTransform(557.6,526.8,0.293,0.293);
	this.circle_118.alpha = 0.699;

	this.circle_119 = new lib.mdstar();
	this.circle_119.setTransform(572.1,463.7,0.293,0.293);
	this.circle_119.alpha = 0.699;

	this.circle_120 = new lib.mdstar();
	this.circle_120.setTransform(488.1,453.5,0.293,0.293);
	this.circle_120.alpha = 0.699;

	this.circle_121 = new lib.mdstar();
	this.circle_121.setTransform(506.3,485.9,0.293,0.293);
	this.circle_121.alpha = 0.699;

	this.circle_122 = new lib.mdstar();
	this.circle_122.setTransform(515.5,526.8,0.293,0.293);
	this.circle_122.alpha = 0.699;

	this.circle_123 = new lib.mdstar();
	this.circle_123.setTransform(443.3,412.1,0.293,0.293);
	this.circle_123.alpha = 0.699;

	this.circle_124 = new lib.mdstar();
	this.circle_124.setTransform(461.8,477.8,0.293,0.293);
	this.circle_124.alpha = 0.699;

	this.circle_125 = new lib.mdstar();
	this.circle_125.setTransform(412.4,439.9,0.293,0.293);
	this.circle_125.alpha = 0.699;

	this.circle_126 = new lib.mdstar();
	this.circle_126.setTransform(422.3,510.5,0.293,0.293);
	this.circle_126.alpha = 0.699;

	this.circle_127 = new lib.mdstar();
	this.circle_127.setTransform(470.7,533.9,0.293,0.293);
	this.circle_127.alpha = 0.699;

	this.circle_128 = new lib.mdstar();
	this.circle_128.setTransform(683.7,533.9,0.293,0.293);
	this.circle_128.alpha = 0.699;

	this.circle_129 = new lib.mdstar();
	this.circle_129.setTransform(449.1,504.1,0.293,0.293);
	this.circle_129.alpha = 0.699;

	this.circle_130 = new lib.mdstar();
	this.circle_130.setTransform(345.6,395.6,0.293,0.293);
	this.circle_130.alpha = 0.699;

	this.circle_131 = new lib.mdstar();
	this.circle_131.setTransform(376.8,413.7,0.293,0.293);
	this.circle_131.alpha = 0.699;

	this.circle_132 = new lib.mdstar();
	this.circle_132.setTransform(300,438.1,0.293,0.293);
	this.circle_132.alpha = 0.699;

	this.instance_44 = new lib.mdstar();
	this.instance_44.setTransform(312.2,333.8,0.293,0.293,0,0,0,4.8,3.2);
	this.instance_44.alpha = 0.699;

	this.circle_133 = new lib.mdstar();
	this.circle_133.setTransform(331.6,367.9,0.293,0.293);
	this.circle_133.alpha = 0.699;

	this.circle_134 = new lib.mdstar();
	this.circle_134.setTransform(345.6,305.2,0.293,0.293);
	this.circle_134.alpha = 0.699;

	this.circle_135 = new lib.mdstar();
	this.circle_135.setTransform(285.4,472.3,0.293,0.293);
	this.circle_135.alpha = 0.699;

	this.circle_136 = new lib.mdstar();
	this.circle_136.setTransform(260.5,295.1,0.293,0.293);
	this.circle_136.alpha = 0.699;

	this.circle_137 = new lib.mdstar();
	this.circle_137.setTransform(280.2,327.1,0.293,0.293);
	this.circle_137.alpha = 0.699;

	this.instance_45 = new lib.mdstar();
	this.instance_45.setTransform(165.8,391.2,0.293,0.293,0,0,0,6,5.7);
	this.instance_45.alpha = 0.699;

	this.circle_138 = new lib.mdstar();
	this.circle_138.setTransform(120.6,362.5,0.293,0.293);
	this.circle_138.alpha = 0.699;

	this.circle_139 = new lib.mdstar();
	this.circle_139.setTransform(270.1,247.5,0.293,0.293);
	this.circle_139.alpha = 0.699;

	this.circle_140 = new lib.mdstar();
	this.circle_140.setTransform(292,509.7,0.293,0.293);
	this.circle_140.alpha = 0.699;

	this.circle_141 = new lib.mdstar();
	this.circle_141.setTransform(305.6,297.5,0.293,0.293);
	this.circle_141.alpha = 0.699;

	this.circle_142 = new lib.mdstar();
	this.circle_142.setTransform(159.8,357.7,0.293,0.293);
	this.circle_142.alpha = 0.699;

	this.instance_46 = new lib.mdstar();
	this.instance_46.setTransform(183.5,265.2,0.293,0.293,0,0,0,4.5,3.8);
	this.instance_46.alpha = 0.699;

	this.circle_143 = new lib.mdstar();
	this.circle_143.setTransform(387,474.8,0.293,0.293);
	this.circle_143.alpha = 0.699;

	this.circle_144 = new lib.mdstar();
	this.circle_144.setTransform(272,419.3,0.293,0.293);
	this.circle_144.alpha = 0.699;

	this.circle_145 = new lib.mdstar();
	this.circle_145.setTransform(68.8,305.2,0.293,0.293);
	this.circle_145.alpha = 0.699;

	this.circle_146 = new lib.mdstar();
	this.circle_146.setTransform(35.2,282.7,0.293,0.293);
	this.circle_146.alpha = 0.699;

	this.circle_147 = new lib.mdstar();
	this.circle_147.setTransform(159.8,429.6,0.293,0.293);
	this.circle_147.alpha = 0.699;

	this.instance_47 = new lib.mdstar();
	this.instance_47.setTransform(28,375.5,0.293,0.293,0,0,0,4.6,4.8);
	this.instance_47.alpha = 0.699;

	this.circle_148 = new lib.mdstar();
	this.circle_148.setTransform(300,395.6,0.293,0.293);
	this.circle_148.alpha = 0.699;

	this.circle_149 = new lib.mdstar();
	this.circle_149.setTransform(216.6,252.9,0.293,0.293);
	this.circle_149.alpha = 0.699;

	this.circle_150 = new lib.mdstar();
	this.circle_150.setTransform(130.5,406.6,0.293,0.293);
	this.circle_150.alpha = 0.699;

	this.circle_151 = new lib.mdstar();
	this.circle_151.setTransform(285.4,362.5,0.293,0.293);
	this.circle_151.alpha = 0.699;

	this.circle_152 = new lib.mdstar();
	this.circle_152.setTransform(212.3,295.1,0.293,0.293);
	this.circle_152.alpha = 0.699;

	this.circle_153 = new lib.mdstar();
	this.circle_153.setTransform(179,322.4,0.293,0.293);
	this.circle_153.alpha = 0.699;

	this.circle_154 = new lib.mdstar();
	this.circle_154.setTransform(208.7,490.8,0.293,0.293);
	this.circle_154.alpha = 0.699;

	this.circle_155 = new lib.mdstar();
	this.circle_155.setTransform(195.8,351.1,0.293,0.293);
	this.circle_155.alpha = 0.699;

	this.circle_156 = new lib.mdstar();
	this.circle_156.setTransform(94.3,266.1,0.293,0.293);
	this.circle_156.alpha = 0.699;

	this.circle_157 = new lib.mdstar();
	this.circle_157.setTransform(83.8,477.3,0.293,0.293);
	this.circle_157.alpha = 0.699;

	this.circle_158 = new lib.mdstar();
	this.circle_158.setTransform(235.7,509.7,0.293,0.293);
	this.circle_158.alpha = 0.699;

	this.circle_159 = new lib.mdstar();
	this.circle_159.setTransform(198.4,416,0.293,0.293);
	this.circle_159.alpha = 0.699;

	this.circle_160 = new lib.mdstar();
	this.circle_160.setTransform(244.5,374.1,0.293,0.293);
	this.circle_160.alpha = 0.699;

	this.circle_161 = new lib.mdstar();
	this.circle_161.setTransform(117.6,322.4,0.293,0.293);
	this.circle_161.alpha = 0.699;

	this.instance_48 = new lib.mdstar();
	this.instance_48.setTransform(34.1,417.9,0.293,0.293,0,0,0,5.7,6.5);
	this.instance_48.alpha = 0.699;

	this.circle_162 = new lib.mdstar();
	this.circle_162.setTransform(222.7,406.6,0.293,0.293);
	this.circle_162.alpha = 0.699;

	this.circle_163 = new lib.mdstar();
	this.circle_163.setTransform(182.2,485.6,0.293,0.293);
	this.circle_163.alpha = 0.699;

	this.circle_164 = new lib.mdstar();
	this.circle_164.setTransform(140.2,274.9,0.293,0.293);
	this.circle_164.alpha = 0.699;

	this.circle_165 = new lib.mdstar();
	this.circle_165.setTransform(35.2,464,0.293,0.293);
	this.circle_165.alpha = 0.699;

	this.circle_166 = new lib.mdstar();
	this.circle_166.setTransform(99.5,391.2,0.293,0.293);
	this.circle_166.alpha = 0.699;

	this.circle_167 = new lib.mdstar();
	this.circle_167.setTransform(145.7,523.7,0.293,0.293);
	this.circle_167.alpha = 0.699;

	this.circle_168 = new lib.mdstar();
	this.circle_168.setTransform(63.4,412.1,0.293,0.293);
	this.circle_168.alpha = 0.699;

	this.circle_169 = new lib.mdstar();
	this.circle_169.setTransform(206.1,538.9,0.293,0.293);
	this.circle_169.alpha = 0.699;

	this.circle_170 = new lib.mdstar();
	this.circle_170.setTransform(99.5,433.1,0.293,0.293);
	this.circle_170.alpha = 0.699;

	this.circle_171 = new lib.mdstar();
	this.circle_171.setTransform(222.7,345.5,0.293,0.293);
	this.circle_171.alpha = 0.699;

	this.circle_172 = new lib.mdstar();
	this.circle_172.setTransform(331.6,428,0.293,0.293);
	this.circle_172.alpha = 0.699;

	this.circle_173 = new lib.mdstar();
	this.circle_173.setTransform(236.6,434,0.293,0.293);
	this.circle_173.alpha = 0.699;

	this.circle_174 = new lib.mdstar();
	this.circle_174.setTransform(255.3,464,0.293,0.293);
	this.circle_174.alpha = 0.699;

	this.circle_175 = new lib.mdstar();
	this.circle_175.setTransform(140.2,474.8,0.293,0.293);
	this.circle_175.alpha = 0.699;

	this.circle_176 = new lib.mdstar();
	this.circle_176.setTransform(130.2,211.2,0.293,0.293);
	this.circle_176.alpha = 0.699;

	this.circle_177 = new lib.mdstar();
	this.circle_177.setTransform(638.5,344.2,0.293,0.293);
	this.circle_177.alpha = 0.699;

	this.instance_49 = new lib.mdstar();
	this.instance_49.setTransform(650.7,240.1,0.293,0.293,0,0,0,4.8,5.5);
	this.instance_49.alpha = 0.699;

	this.circle_178 = new lib.mdstar();
	this.circle_178.setTransform(669.8,272.9,0.293,0.293);
	this.circle_178.alpha = 0.699;

	this.circle_179 = new lib.mdstar();
	this.circle_179.setTransform(683.7,211.2,0.293,0.293);
	this.circle_179.alpha = 0.699;

	this.circle_180 = new lib.mdstar();
	this.circle_180.setTransform(623.9,377.9,0.293,0.293);
	this.circle_180.alpha = 0.699;

	this.circle_181 = new lib.mdstar();
	this.circle_181.setTransform(599.7,200.6,0.293,0.293);
	this.circle_181.alpha = 0.699;

	this.circle_182 = new lib.mdstar();
	this.circle_182.setTransform(619.2,233.2,0.293,0.293);
	this.circle_182.alpha = 0.699;

	this.instance_50 = new lib.mdstar();
	this.instance_50.setTransform(504.4,296.4,0.293,0.293,0,0,0,6,4.5);
	this.instance_50.alpha = 0.699;

	this.circle_183 = new lib.mdstar();
	this.circle_183.setTransform(458.9,269.1,0.293,0.293);
	this.circle_183.alpha = 0.699;

	this.circle_184 = new lib.mdstar();
	this.circle_184.setTransform(609,153.1,0.293,0.293);
	this.circle_184.alpha = 0.699;

	this.circle_185 = new lib.mdstar();
	this.circle_185.setTransform(630.8,415.2,0.293,0.293);
	this.circle_185.alpha = 0.699;

	this.circle_186 = new lib.mdstar();
	this.circle_186.setTransform(417.1,257.2,0.293,0.293);
	this.circle_186.alpha = 0.699;

	this.circle_187 = new lib.mdstar();
	this.circle_187.setTransform(498.3,263.3,0.293,0.293);
	this.circle_187.alpha = 0.699;

	this.instance_51 = new lib.mdstar();
	this.instance_51.setTransform(522.1,171.1,0.293,0.293,0,0,0,4.6,5.1);
	this.instance_51.alpha = 0.699;

	this.circle_188 = new lib.mdstar();
	this.circle_188.setTransform(725.6,380.9,0.293,0.293);
	this.circle_188.alpha = 0.699;

	this.circle_189 = new lib.mdstar();
	this.circle_189.setTransform(610.9,324.9,0.293,0.293);
	this.circle_189.alpha = 0.699;

	this.circle_190 = new lib.mdstar();
	this.circle_190.setTransform(407,211.2,0.293,0.293);
	this.circle_190.alpha = 0.699;

	this.circle_191 = new lib.mdstar();
	this.circle_191.setTransform(373.8,189,0.293,0.293);
	this.circle_191.alpha = 0.699;

	this.circle_192 = new lib.mdstar();
	this.circle_192.setTransform(498.3,334.9,0.293,0.293);
	this.circle_192.alpha = 0.699;

	this.instance_52 = new lib.mdstar();
	this.instance_52.setTransform(366.7,281.6,0.293,0.293,0,0,0,6,7);
	this.instance_52.alpha = 0.699;

	this.circle_193 = new lib.mdstar();
	this.circle_193.setTransform(322.4,263.3,0.293,0.293);
	this.circle_193.alpha = 0.699;

	this.circle_194 = new lib.mdstar();
	this.circle_194.setTransform(638.5,301.7,0.293,0.293);
	this.circle_194.alpha = 0.699;

	this.circle_195 = new lib.mdstar();
	this.circle_195.setTransform(554.9,159,0.293,0.293);
	this.circle_195.alpha = 0.699;

	this.circle_196 = new lib.mdstar();
	this.circle_196.setTransform(468.2,312.5,0.293,0.293);
	this.circle_196.alpha = 0.699;

	this.circle_197 = new lib.mdstar();
	this.circle_197.setTransform(574,224.6,0.293,0.293);
	this.circle_197.alpha = 0.699;

	this.circle_198 = new lib.mdstar();
	this.circle_198.setTransform(550.8,200.6,0.293,0.293);
	this.circle_198.alpha = 0.699;

	this.circle_199 = new lib.mdstar();
	this.circle_199.setTransform(518.2,228,0.293,0.293);
	this.circle_199.alpha = 0.699;

	this.circle_200 = new lib.mdstar();
	this.circle_200.setTransform(334.6,211.2,0.293,0.293);
	this.circle_200.alpha = 0.699;

	this.circle_201 = new lib.mdstar();
	this.circle_201.setTransform(547.2,396.9,0.293,0.293);
	this.circle_201.alpha = 0.699;

	this.circle_202 = new lib.mdstar();
	this.circle_202.setTransform(534.8,257.2,0.293,0.293);
	this.circle_202.alpha = 0.699;

	this.circle_203 = new lib.mdstar();
	this.circle_203.setTransform(432.8,172.2,0.293,0.293);
	this.circle_203.alpha = 0.699;

	this.circle_204 = new lib.mdstar();
	this.circle_204.setTransform(422.3,383.1,0.293,0.293);
	this.circle_204.alpha = 0.699;

	this.circle_205 = new lib.mdstar();
	this.circle_205.setTransform(574,415.2,0.293,0.293);
	this.circle_205.alpha = 0.699;

	this.circle_206 = new lib.mdstar();
	this.circle_206.setTransform(537.3,322.4,0.293,0.293);
	this.circle_206.alpha = 0.699;

	this.circle_207 = new lib.mdstar();
	this.circle_207.setTransform(582.8,280.5,0.293,0.293);
	this.circle_207.alpha = 0.699;

	this.circle_208 = new lib.mdstar();
	this.circle_208.setTransform(456.1,228,0.293,0.293);
	this.circle_208.alpha = 0.699;

	this.instance_53 = new lib.mdstar();
	this.instance_53.setTransform(372.9,323.8,0.293,0.293,0,0,0,6.5,4.6);
	this.instance_53.alpha = 0.699;

	this.circle_209 = new lib.mdstar();
	this.circle_209.setTransform(562.2,312.5,0.293,0.293);
	this.circle_209.alpha = 0.699;

	this.circle_210 = new lib.mdstar();
	this.circle_210.setTransform(521,392.2,0.293,0.293);
	this.circle_210.alpha = 0.699;

	this.circle_211 = new lib.mdstar();
	this.circle_211.setTransform(479,180.7,0.293,0.293);
	this.circle_211.alpha = 0.699;

	this.circle_212 = new lib.mdstar();
	this.circle_212.setTransform(373.8,362.5,0.293,0.293);
	this.circle_212.alpha = 0.699;

	this.circle_213 = new lib.mdstar();
	this.circle_213.setTransform(438.4,296.4,0.293,0.293);
	this.circle_213.alpha = 0.699;

	this.circle_214 = new lib.mdstar();
	this.circle_214.setTransform(483.9,429.6,0.293,0.293);
	this.circle_214.alpha = 0.699;

	this.circle_215 = new lib.mdstar();
	this.circle_215.setTransform(401.7,317.7,0.293,0.293);
	this.circle_215.alpha = 0.699;

	this.circle_216 = new lib.mdstar();
	this.circle_216.setTransform(561,362.5,0.293,0.293);
	this.circle_216.alpha = 0.699;

	this.circle_217 = new lib.mdstar();
	this.circle_217.setTransform(438.4,338.4,0.293,0.293);
	this.circle_217.alpha = 0.699;

	this.circle_218 = new lib.mdstar();
	this.circle_218.setTransform(562.2,251.4,0.293,0.293);
	this.circle_218.alpha = 0.699;

	this.circle_219 = new lib.mdstar();
	this.circle_219.setTransform(669.8,333.4,0.293,0.293);
	this.circle_219.alpha = 0.699;

	this.circle_220 = new lib.mdstar();
	this.circle_220.setTransform(575.3,340.1,0.293,0.293);
	this.circle_220.alpha = 0.699;

	this.circle_221 = new lib.mdstar();
	this.circle_221.setTransform(594.7,370.1,0.293,0.293);
	this.circle_221.alpha = 0.699;

	this.circle_222 = new lib.mdstar();
	this.circle_222.setTransform(479,380.9,0.293,0.293);
	this.circle_222.alpha = 0.699;

	this.circle_223 = new lib.mdstar();
	this.circle_223.setTransform(468.2,116.6,0.293,0.293);
	this.circle_223.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.circle_223},{t:this.circle_222},{t:this.circle_221},{t:this.circle_220},{t:this.circle_219},{t:this.circle_218},{t:this.circle_217},{t:this.circle_216},{t:this.circle_215},{t:this.circle_214},{t:this.circle_213},{t:this.circle_212},{t:this.circle_211},{t:this.circle_210},{t:this.circle_209},{t:this.instance_53},{t:this.circle_208},{t:this.circle_207},{t:this.circle_206},{t:this.circle_205},{t:this.circle_204},{t:this.circle_203},{t:this.circle_202},{t:this.circle_201},{t:this.circle_200},{t:this.circle_199},{t:this.circle_198},{t:this.circle_197},{t:this.circle_196},{t:this.circle_195},{t:this.circle_194},{t:this.circle_193},{t:this.instance_52},{t:this.circle_192},{t:this.circle_191},{t:this.circle_190},{t:this.circle_189},{t:this.circle_188},{t:this.instance_51},{t:this.circle_187},{t:this.circle_186},{t:this.circle_185},{t:this.circle_184},{t:this.circle_183},{t:this.instance_50},{t:this.circle_182},{t:this.circle_181},{t:this.circle_180},{t:this.circle_179},{t:this.circle_178},{t:this.instance_49},{t:this.circle_177},{t:this.circle_176},{t:this.circle_175},{t:this.circle_174},{t:this.circle_173},{t:this.circle_172},{t:this.circle_171},{t:this.circle_170},{t:this.circle_169},{t:this.circle_168},{t:this.circle_167},{t:this.circle_166},{t:this.circle_165},{t:this.circle_164},{t:this.circle_163},{t:this.circle_162},{t:this.instance_48},{t:this.circle_161},{t:this.circle_160},{t:this.circle_159},{t:this.circle_158},{t:this.circle_157},{t:this.circle_156},{t:this.circle_155},{t:this.circle_154},{t:this.circle_153},{t:this.circle_152},{t:this.circle_151},{t:this.circle_150},{t:this.circle_149},{t:this.circle_148},{t:this.instance_47},{t:this.circle_147},{t:this.circle_146},{t:this.circle_145},{t:this.circle_144},{t:this.circle_143},{t:this.instance_46},{t:this.circle_142},{t:this.circle_141},{t:this.circle_140},{t:this.circle_139},{t:this.circle_138},{t:this.instance_45},{t:this.circle_137},{t:this.circle_136},{t:this.circle_135},{t:this.circle_134},{t:this.circle_133},{t:this.instance_44},{t:this.circle_132},{t:this.circle_131},{t:this.circle_130},{t:this.circle_129},{t:this.circle_128},{t:this.circle_127},{t:this.circle_126},{t:this.circle_125},{t:this.circle_124},{t:this.circle_123},{t:this.circle_122},{t:this.circle_121},{t:this.circle_120},{t:this.circle_119},{t:this.circle_118},{t:this.instance_43},{t:this.circle_117},{t:this.circle_116},{t:this.circle_115},{t:this.instance_42},{t:this.circle_114},{t:this.circle_113},{t:this.circle_112},{t:this.circle_111},{t:this.circle_110},{t:this.circle_109},{t:this.circle_108},{t:this.circle_107},{t:this.circle_106},{t:this.circle_105},{t:this.circle_104},{t:this.circle_103},{t:this.circle_102},{t:this.circle_101},{t:this.circle_100},{t:this.circle_99},{t:this.circle_98},{t:this.circle_97},{t:this.circle_96},{t:this.circle_95},{t:this.circle_94},{t:this.circle_93},{t:this.circle_92},{t:this.circle_91},{t:this.circle_90},{t:this.circle_89},{t:this.instance_41},{t:this.circle_88},{t:this.circle_87},{t:this.circle_86},{t:this.circle_85},{t:this.circle_84},{t:this.circle_83},{t:this.circle_82},{t:this.circle_81},{t:this.instance_40},{t:this.circle_80},{t:this.circle_79},{t:this.circle_78},{t:this.circle_77},{t:this.circle_76},{t:this.instance_39},{t:this.circle_75},{t:this.circle_74},{t:this.circle_73},{t:this.circle_72},{t:this.circle_71},{t:this.circle_70},{t:this.circle_69},{t:this.circle_68},{t:this.circle_67},{t:this.circle_66},{t:this.circle_65},{t:this.circle_64},{t:this.circle_63},{t:this.circle_62},{t:this.instance_38},{t:this.circle_61},{t:this.circle_60},{t:this.circle_59},{t:this.circle_58},{t:this.circle_57},{t:this.circle_56},{t:this.circle_55},{t:this.circle_54},{t:this.circle_53},{t:this.circle_52},{t:this.instance_37},{t:this.circle_51},{t:this.circle_50},{t:this.circle_49},{t:this.circle_48},{t:this.instance_36},{t:this.circle_47},{t:this.circle_46},{t:this.circle_45},{t:this.circle_44},{t:this.instance_35},{t:this.circle_43},{t:this.circle_42},{t:this.circle_41},{t:this.instance_34},{t:this.circle_40},{t:this.circle_39},{t:this.circle_38},{t:this.circle_37},{t:this.circle_36},{t:this.circle_35},{t:this.circle_34},{t:this.circle_33},{t:this.circle_32},{t:this.circle_31},{t:this.circle_30},{t:this.circle_29},{t:this.circle_28},{t:this.circle_27},{t:this.circle_26},{t:this.instance_33},{t:this.circle_25},{t:this.circle_24},{t:this.circle_23},{t:this.instance_32},{t:this.circle_22},{t:this.circle_21},{t:this.circle_20},{t:this.circle_19},{t:this.circle_18},{t:this.instance_31},{t:this.instance_30},{t:this.circle_17},{t:this.circle_16},{t:this.instance_29},{t:this.instance_28},{t:this.circle_15},{t:this.circle_14},{t:this.circle_13},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.circle_12},{t:this.instance_24},{t:this.circle_11},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.circle_10},{t:this.instance_17},{t:this.instance_16},{t:this.circle_9},{t:this.instance_15},{t:this.circle_8},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.circle_7},{t:this.circle_6},{t:this.instance_10},{t:this.circle_5},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.circle_4},{t:this.circle_3},{t:this.instance_6},{t:this.circle_2},{t:this.instance_5},{t:this.instance_4},{t:this.circle_1},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.circle},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2.5,960.4,544);


(lib.mdgreenplanet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// P2
	this.instance = new lib.mdgreenP2();
	this.instance.setTransform(89.6,-72.5,1,1,0,0,0,9.6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:74.2,y:-71.8},0).wait(1).to({x:57,y:-70.6},0).wait(1).to({x:40.5,y:-68.7},0).wait(1).to({x:24,y:-65.7},0).wait(1).to({x:7.9,y:-60},0).wait(1).to({x:1.6,y:-50},0).wait(1).to({x:7.4,y:-35.4},0).wait(1).to({x:21.2,y:-22.4},0).wait(1).to({x:34.1,y:-13.6},0).wait(1).to({x:49.3,y:-5.2},0).wait(1).to({x:64.1,y:2.4},0).wait(1).to({x:77.6,y:8.7},0).wait(1).to({x:94.4,y:13.7},0).wait(1).to({x:110.4,y:18.1},0).wait(1).to({x:126.5,y:22.6},0).wait(1).to({x:143.4,y:27.3},0).wait(1).to({x:157.6,y:31.2},0).wait(1).to({x:174.2,y:35},0).wait(1).to({x:191.1,y:38.3},0).wait(1).to({x:206.5,y:40.9},0).wait(1).to({x:222.8,y:43.3},0).wait(1).to({x:239.1,y:45.5},0).wait(1).to({x:255.7,y:47.6},0).wait(1).to({x:271.6,y:49.1},0).wait(1));

	// P1
	this.instance_1 = new lib.mdgreenP1();
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


(lib.mdblueplanet = function(mode,startPosition,loop) {
if (loop == null) { loop = true; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.mdplanentring();
	this.instance.setTransform(0.1,1.2,0.999,0.999,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1,rotation:21.2,x:0,y:1},0).wait(1).to({rotation:27.5,y:0.7},0).wait(1).to({rotation:33.7,y:0.5},0).wait(1).to({rotation:40,y:0.2},0).wait(1).to({rotation:46.2,y:0},0).wait(1).to({rotation:52.5,y:-0.3},0).wait(1).to({rotation:58.7,x:-0.1,y:-0.5},0).wait(1).to({rotation:65,y:-0.8},0).wait(1).to({rotation:71.2,y:-1},0).wait(1).to({rotation:77.5,y:-1.3},0).wait(1).to({rotation:83.7,y:-1.5},0).wait(1).to({rotation:90,y:-1.8},0).wait(1).to({rotation:82.5,y:-1.5},0).wait(1).to({rotation:75,y:-1.3},0).wait(1).to({rotation:67.5,y:-1},0).wait(1).to({rotation:60,y:-0.8},0).wait(1).to({rotation:52.5,y:-0.5},0).wait(1).to({rotation:45,x:0,y:-0.3},0).wait(1).to({rotation:37.5,y:0},0).wait(1).to({rotation:30,y:0.2},0).wait(1).to({rotation:22.5,y:0.5},0).wait(1).to({rotation:15,y:0.7},0).wait(1).to({rotation:7.5,y:1},0).wait(1).to({rotation:0,x:0.1,y:1.2},0).wait(1));

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,178,196,0.8)").s().p("AhDB5QgygyAAhHQAAhGAygyQAzgzBFAAQAOAAAMACQAnBNAABcQAABdgnBNIgaACQhFAAgzgzg");
	this.shape.setTransform(-4.7,1,1,1,-22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(25));

	// bluebody
	this.instance_1 = new lib.mdbluebody();
	this.instance_1.setTransform(0.2,-0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.4,-20.2,47.1,42.8);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ai7CXQhOgXgBgaQAAhuBOhSQBPhUBtAAQBsgBBPBTQBPBSAABuIABAAQAAAahOAXQhTAZhqABIgCAAQhnAAhSgYg");
	mask.setTransform(26.7,17.6);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#464648").s().p("AgDAEIAAgKQAAgBABAAQAAAAAAgBQABAAABAAQAAgBAAAAQAAAAABAAQABAAAAAAQAAAAABABQAAAAAAAAIAAAPQADABgHACQgCgBAAgFg");
	this.shape.setTransform(27.3,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#464648").s().p("AgCAJQgBAAAAgHIAAgJQAAAAABAAQAAgBAAAAQABAAABAAQAAAAAAgBQAAAAABAAQABAAAAAAQABAAAAABQAAAAAAAAIAAAIIAAAHQgDADAAAAIgCgBg");
	this.shape_1.setTransform(26.2,17.4);

	this.instance = new lib.Path_2_1();
	this.instance.setTransform(33.7,15.3,1,1,0,0,0,0.7,0.8);
	this.instance.alpha = 0.199;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#91C659").s().p("AAAAPQgGgCgEgHQgEgGABgFQABgHAFgCQAEgDAEADQAGACAEAHQAEAFgBAGQgBAGgEADQgDABgDAAIgDgBg");
	this.shape_2.setTransform(33.4,15.6);

	this.instance_1 = new lib.Path_4_0();
	this.instance_1.setTransform(25.7,6,1,1,0,0,0,3.1,4);
	this.instance_1.alpha = 0.199;

	this.instance_2 = new lib.Path_5_0();
	this.instance_2.setTransform(24.4,21,1,1,0,0,0,6.5,8.4);
	this.instance_2.alpha = 0.199;

	this.instance_3 = new lib.Path_6_0();
	this.instance_3.setTransform(21.4,33.2,1,1,0,0,0,3.1,2.1);
	this.instance_3.alpha = 0.199;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#91C659").s().p("AhTAWQAjgrAwAAQAxAAAjArg");
	this.shape_3.setTransform(26.7,33.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_4.setTransform(28.2,3.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#383838").s().p("AgJAKQgEgFAAgFQAAgEAEgFQAEgEAFAAQAFAAAFAEQAEAFAAAEQAAAFgEAFQgFAEgFAAQgFAAgEgEg");
	this.shape_5.setTransform(27.6,4.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaAIQAAgIAHgIQAKgKAJAAQAKAAAKAKQAHAIABAIQAAALgcAAQgaAAAAgLg");
	this.shape_6.setTransform(26.7,4.5);

	this.instance_4 = new lib.Path_10_0();
	this.instance_4.setTransform(26.5,4.7,1,1,0,0,0,2.8,1.9);
	this.instance_4.alpha = 0.199;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#91C659").s().p("AgcAdQgMgMAAgRQAAgPAMgNQAMgMAQAAQARAAAMAMQAMANAAAPQAAARgMAMQgMAMgRAAQgQAAgMgMg");
	this.shape_7.setTransform(26.7,5.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AABALQgCAAgCgFIgDgNIAJgDIADAOQACAEgFACIgBABg");
	this.shape_8.setTransform(30,21.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgFADIAAgMIALAAIAAAMQAAAEgEACIgCABQgFAAAAgHg");
	this.shape_9.setTransform(26.7,22);

	this.instance_5 = new lib.Path_2_0();
	this.instance_5.setTransform(29.7,22,1,1,0,0,0,0.7,1.1);
	this.instance_5.alpha = 0.199;

	this.instance_6 = new lib.Path_3();
	this.instance_6.setTransform(26.4,22.2,1,1,0,0,0,0.6,1.2);
	this.instance_6.alpha = 0.199;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5E5F61").s().p("AgnATQgTgTAAgaIAAgEQAWANAngCQApgCAMgQQADAKAAALQAAAZgTATQgQAKgTAAQgYAAgUgTg");
	this.shape_10.setTransform(27.3,23.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#464648").s().p("AgsAXQgUgTAAgZQABgKADgKQANARAvAAQAwAAAOgRQADAKAAAKQgBAZgSATQgUATgaAAQgZAAgTgTg");
	this.shape_11.setTransform(26.7,23.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#91C659").s().p("Ag8A+QgagaAAgkQAAgjAagaQAZgaAjAAQAkAAAaAaQAZAaAAAjQAAAkgZAaQgaAagkAAQgjAAgZgag");
	this.shape_12.setTransform(26.7,20.6);

	this.instance_7 = new lib.Path_15_0();
	this.instance_7.setTransform(26.2,11,1,1,0,0,0,0.1,1.5);
	this.instance_7.alpha = 0.199;

	this.instance_8 = new lib.Path_16_0();
	this.instance_8.setTransform(24.7,30.4,1,1,0,0,0,0.1,1.6);
	this.instance_8.alpha = 0.199;

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#91C659").s().p("AgGAPIAAgdIANAAIAAAdg");
	this.shape_13.setTransform(26.8,11);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#91C659").s().p("AgUAPIAAgdIApAAIAAAdg");
	this.shape_14.setTransform(26.7,30.3);

	this.instance_9 = new lib.Path_17_0();
	this.instance_9.setTransform(19.3,15.9,1,1,0,0,0,1.2,1.5);
	this.instance_9.alpha = 0.199;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#91C659").s().p("AgIAPQgEgDgBgGQgBgGAEgFQAEgHAGgCQADgDAFADQAGACAAAHQABAFgEAGQgDAHgHACIgDABQgDAAgDgBg");
	this.shape_15.setTransform(19.6,15.6);

	this.shape.mask = this.shape_1.mask = this.instance.mask = this.shape_2.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.instance_4.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.instance_5.mask = this.instance_6.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.instance_7.mask = this.instance_8.mask = this.shape_13.mask = this.shape_14.mask = this.instance_9.mask = this.shape_15.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.instance_9},{t:this.shape_14},{t:this.shape_13},{t:this.instance_8},{t:this.instance_7},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance_6},{t:this.instance_5},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.instance_4},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape_2},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.9,1.7,17.6,33.4);


(lib.mdplanetfield = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mdstargold();
	this.instance.setTransform(133.3,-224.9,1,1,0,0,0,8.1,8);
	this.instance.alpha = 0.699;

	this.b1 = new lib.mdblueplanet();
	this.b1.setTransform(-315.6,-111.4);

	this.instance_1 = new lib.mdgreenplanet();
	this.instance_1.setTransform(282.6,-42,0.202,0.202,0,0,0,178.3,0);

	this.instance_2 = new lib.mdstargold();
	this.instance_2.setTransform(237.1,-168.9,1,1,0,0,0,9.3,9.3);
	this.instance_2.alpha = 0.699;

	this.instance_3 = new lib.mdstargold();
	this.instance_3.setTransform(352.9,42.3,1,1,0,0,0,3.9,3.9);
	this.instance_3.alpha = 0.699;

	this.instance_4 = new lib.mdstargold();
	this.instance_4.setTransform(-23.1,-132.4,1,1,0,0,0,9.3,9.3);
	this.instance_4.alpha = 0.699;

	this.instance_5 = new lib.mdstargold();
	this.instance_5.setTransform(-287.2,-25.1,1,1,0,0,0,9.4,9.3);
	this.instance_5.alpha = 0.699;

	this.instance_6 = new lib.mdstargold();
	this.instance_6.setTransform(-239.1,-168.9,1,1,0,0,0,9.4,9.3);
	this.instance_6.alpha = 0.699;

	this.instance_7 = new lib.mdstargold();
	this.instance_7.setTransform(179.5,99.1,1,1,0,0,0,9.3,9.2);
	this.instance_7.alpha = 0.699;

	this.instance_8 = new lib.mdstargold();
	this.instance_8.setTransform(-20.2,56.3,1,1,0,0,0,5.5,5.5);
	this.instance_8.alpha = 0.699;

	this.instance_9 = new lib.mdstargold();
	this.instance_9.setTransform(-221.6,86.2,1,1,0,0,0,8.1,8);
	this.instance_9.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.b1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-339.1,-232.9,706.8,341.5);


(lib.flyingsaucer = function(mode,startPosition,loop) {
if (loop == null) { loop = true; }	this.initialize(mode,startPosition,loop,{});

	// red1
	this.instance = new lib.Path_5();
	this.instance.setTransform(-49,7.2,1,1,0,0,0,11.2,3.1);
	this.instance.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.775},0).wait(1).to({alpha:0.85},0).wait(1).to({alpha:0.925},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.94},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:0.82},0).wait(1).to({alpha:0.76},0).wait(1).to({alpha:0.7},0).wait(51));

	// yellow1
	this.instance_1 = new lib.Path_10();
	this.instance_1.setTransform(-27.7,9.4,1,1,0,0,0,8.6,2.4);
	this.instance_1.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({alpha:0.7},0).wait(9).to({alpha:0.76},0).wait(1).to({alpha:0.82},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:0.94},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.94},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:0.82},0).wait(1).to({alpha:0.76},0).wait(1).to({alpha:0.7},0).wait(41));

	// white1
	this.instance_2 = new lib.Path_9();
	this.instance_2.setTransform(-10.2,9.9,1,1,0,0,0,6.5,2.2);
	this.instance_2.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regY:2.3,y:10,alpha:0.7},0).wait(19).to({alpha:0.76},0).wait(1).to({alpha:0.82},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:0.94},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.96},0).wait(1).to({alpha:0.92},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:0.84},0).wait(1).to({alpha:0.8},0).wait(31));

	// red2
	this.instance_3 = new lib.Path_8();
	this.instance_3.setTransform(8.2,9.9,1,1,0,0,0,7.4,2.3);
	this.instance_3.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({alpha:0.7},0).wait(29).to({alpha:0.76},0).wait(1).to({alpha:0.82},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:0.94},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.96},0).wait(1).to({alpha:0.92},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:0.84},0).wait(1).to({alpha:0.8},0).wait(21));

	// yellow2
	this.instance_4 = new lib.Path_6();
	this.instance_4.setTransform(27.5,9.3,1,1,0,0,0,9.3,2.5);
	this.instance_4.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({alpha:0.7},0).wait(39).to({alpha:0.76},0).wait(1).to({alpha:0.82},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:0.94},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.96},0).wait(1).to({alpha:0.92},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:0.84},0).wait(1).to({alpha:0.8},0).wait(11));

	// white2
	this.instance_5 = new lib.Path_7();
	this.instance_5.setTransform(49.3,6.8,1,1,0,0,0,11.1,3.1);
	this.instance_5.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({alpha:0.7},0).wait(49).to({alpha:0.76},0).wait(1).to({alpha:0.82},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:0.94},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.96},0).wait(1).to({alpha:0.92},0).wait(1).to({alpha:0.88},0).wait(1).to({alpha:0.84},0).wait(1).to({alpha:0.8},0).wait(1));

	// alien
	this.instance_6 = new lib.ClipGroup();
	this.instance_6.setTransform(0,-12,1,1,0,0,0,26.7,17.7);

	this.instance_7 = new lib.Path_0();
	this.instance_7.setTransform(27.2,20.2,1,1,0,0,0,2,3.6);
	this.instance_7.alpha = 0.199;

	this.instance_8 = new lib.Path_2();
	this.instance_8.setTransform(-29.1,20.6,1,1,0,0,0,2,3.6);
	this.instance_8.alpha = 0.199;

	this.instance_9 = new lib.Path();
	this.instance_9.setTransform(-66.3,5.4);
	this.instance_9.alpha = 0.199;

	this.instance_10 = new lib.Path_1();
	this.instance_10.setTransform(-11.8,18.2,1,1,0,0,0,54.4,11.7);
	this.instance_10.alpha = 0.199;

	this.instance_11 = new lib.Path_4();
	this.instance_11.setTransform(-3.3,2,1,1,0,0,0,29.9,5.1);
	this.instance_11.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]}).wait(60));

	// ship
	this.instance_12 = new lib.Path_11();
	this.instance_12.setTransform(-50,8.2,1,1,0,0,0,11.2,3.1);
	this.instance_12.alpha = 0.199;

	this.instance_13 = new lib.Path_12();
	this.instance_13.setTransform(26.5,10.3,1,1,0,0,0,9.3,2.5);
	this.instance_13.alpha = 0.199;

	this.instance_14 = new lib.Path_13();
	this.instance_14.setTransform(48.3,7.8,1,1,0,0,0,11.1,3.1);
	this.instance_14.alpha = 0.199;

	this.instance_15 = new lib.Path_14();
	this.instance_15.setTransform(7.2,10.9,1,1,0,0,0,7.4,2.3);
	this.instance_15.alpha = 0.199;

	this.instance_16 = new lib.Path_15();
	this.instance_16.setTransform(-11.2,10.9,1,1,0,0,0,6.5,2.2);
	this.instance_16.alpha = 0.199;

	this.instance_17 = new lib.Path_16();
	this.instance_17.setTransform(-28.7,10.4,1,1,0,0,0,8.6,2.4);
	this.instance_17.alpha = 0.199;

	this.instance_18 = new lib.Path_17();
	this.instance_18.setTransform(15.5,-13.8,1,1,0,0,0,9.1,12.7);
	this.instance_18.alpha = 0.5;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#86888B").s().p("Ai7AZQhPgXAAgYQAAgYEKgBQEKgBABAYQAAAYhOAXQhTAZhqABIgCAAQhoAAhRgYg");
	this.shape.setTransform(0,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B8E5EC").s().p("Ai8g2QBPhTBtgBQBsAABPBTQBPBQABBwIoUACQgBhwBOhRg");
	this.shape_1.setTransform(0,-15.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F79736").s().p("AkxAbQgKgLAAgOQAAgNAKgKQAKgLAPAAQAOAAALALQALAKAAANQAAAOgLALQgLAKgOAAQgPAAgKgKgAEAAXQgLgLAAgNQAAgOALgLQALgKAOAAQAOAAALAKQAKALAAAOQAAANgKALQgLAKgOAAQgOAAgLgKg");
	this.shape_2.setTransform(0.6,20.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#53CCDB").s().p("AnTBFQi1gWgNgkIgBgFIAAgCIABgEQANgiC0gbQDCgeESgBQESAADCAbQC0AaANAkIABADIABABIgCAGQgNAjizAYQi9AZkYABIgUABQkKAAi1gYg");
	this.shape_3.setTransform(0,5.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00B2C4").s().p("AnTArQhagkg0gpQgugmgGgjQANAjC1AXQC9AYEWgBQEYgBC9gZQCzgYANgjQgGAigsAmQg0AphaAlQjOBVkGAAIgFAAQkCAAjNhRgAksAHQgKAKAAAPQAAAOAKALQALAKAOAAQAPAAAKgKQALgLAAgOQAAgPgLgKQgKgJgPAAQgOAAgLAJgAEFACQgKALAAAOQAAAPAKALQALAKAOAAQAPAAAKgKQALgLAAgPQAAgOgLgLQgKgIgPAAQgOAAgLAIgAqWh2IABAAIgBAEIAAgEgAKVh7IACAAIgBAEIgBgEg");
	this.shape_4.setTransform(0,17.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]}).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.3,-29.7,132.6,59.6);


// stage content:



(lib.moduleend = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("flyingsaucerwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(73));

	// flying-saucer
	this.instance = new lib.flyingsaucer();
	this.instance.setTransform(864,8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).wait(1).to({x:834.6,y:16.3},0).wait(1).to({x:805.1,y:24.3},0).wait(1).to({x:775.6,y:32.1},0).wait(1).to({x:746,y:39.6},0).wait(1).to({x:716.4,y:46.8},0).wait(1).to({x:686.6,y:53.6},0).wait(1).to({x:656.8,y:60},0).wait(1).to({x:626.8,y:65.9},0).wait(1).to({x:596.7,y:71},0).wait(1).to({x:566.4,y:74.9},0).wait(1).to({x:536,y:76.6},0).wait(1).to({x:438.3,y:74.7},0).wait(1).to({x:331,y:68.7},0).wait(1).to({x:224,y:58.7},0).wait(1).to({x:126.5,y:43.3},0).wait(1).to({x:13.3,y:27},0).wait(1).to({x:-72.9,y:10.1},0).wait(1).to({x:-75.9,y:11.4},0).wait(1).to({x:-78.8,y:12.7},0).wait(2).to({x:-75.9,y:11.4},0).wait(1).to({x:-72.9,y:10.1},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:-16.5,y:17.5},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:40,y:24.8},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:96.5,y:32.1},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:153,y:39.3},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:209.5,y:46.5},0).wait(1).to({scaleX:1.36,scaleY:1.36,x:266,y:53.6},0).wait(1).to({scaleX:1.42,scaleY:1.42,x:322.6,y:60.5},0).wait(1).to({scaleX:1.48,scaleY:1.48,x:379.1,y:67.4},0).wait(1).to({scaleX:1.54,scaleY:1.54,x:435.6,y:74.1},0).wait(1).to({scaleX:1.6,scaleY:1.6,x:492.2,y:80.6},0).wait(1).to({scaleX:1.66,scaleY:1.66,x:548.9,y:86.5},0).wait(1).to({scaleX:1.72,scaleY:1.72,x:605.7,y:89.8},0).wait(22));

	// Text
	this.instance_1 = new lib.mdCongrats("synched",0);
	this.instance_1.setTransform(229,260);

	this.instance_2 = new lib.mdcompleteTween2("synched",0);
	this.instance_2.setTransform(229,289.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66CC02").s().p("AgOBKIAAgaIAdAAIAAAagAgOAXIAAhgIAdAAIAABgg");
	this.shape.setTransform(611.2,250.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66CC02").s().p("AgOBKIAAgaIAcAAIAAAagAgOAXIAAhgIAcAAIAABgg");
	this.shape_1.setTransform(605.5,250.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66CC02").s().p("AggAqQgPgPAAgZIAAgCQAAgYAOgQQANgQAVAAQAXAAAMANQAMAOAAAXIAAAPIhAAAIAAAAQAAALAHAHQAGAHAKAAQAKAAAGgCIAPgGIAIASQgHAGgLAEQgLADgOAAQgWAAgNgPgAgKgaQgFAGgBAKIAAABIAjAAIAAgDQAAgJgFgGQgEgGgJAAQgGAAgFAHg");
	this.shape_2.setTransform(597.2,252.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66CC02").s().p("AgdA4IAAhtIAcAAIABARQACgKAGgEQAGgFAIAAIAEABIAEAAIgDAbIgLAAQgHAAgEADQgEACgBAFIAABJg");
	this.shape_3.setTransform(588.4,252.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66CC02").s().p("AglAtQgKgMAAgXIAAhBIAeAAIAABBQAAAMAEAGQAEAFAIAAQAFAAAFgDQAFgBAEgFIAAhPIAeAAIAABtIgaAAIgCgQQgGAIgIAGQgGAEgKAAQgRAAgKgLg");
	this.shape_4.setTransform(578.3,252.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66CC02").s().p("AgHA9QgJgIAAgTIAAg2IgQAAIAAgWIAQAAIAAgbIAcAAIAAAbIATAAIAAAWIgTAAIAAA2QAAAHADADQADACAEAAIAEAAIAEgBIADAVIgJADIgJABQgPAAgHgJg");
	this.shape_5.setTransform(568.5,251.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#66CC02").s().p("AASA4IAAhEQAAgKgFgFQgEgFgJAAQgEAAgFACQgFADgDAEIAABPIgeAAIAAhtIAcAAIABAQQAGgJAIgEQAGgFAKAAQARAAAJALQAKAKAAAWIAABEg");
	this.shape_6.setTransform(559.1,252.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#66CC02").s().p("AghAqQgOgPAAgZIAAgCQAAgYANgQQAOgQAVAAQAWAAANANQAMAOAAAXIAAAPIhAAAIAAAAQABALAGAHQAHAHAJAAQAJAAAIgCIANgGIAIASQgGAGgLAEQgLADgNAAQgXAAgOgPgAgKgaQgFAGgBAKIAAABIAjAAIAAgDQAAgJgEgGQgFgGgJAAQgGAAgFAHg");
	this.shape_7.setTransform(547.8,252.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#66CC02").s().p("AgNA3IgmhtIAgAAIATBDIAAALIAAAAIACgLIAShDIAgAAIgmBtg");
	this.shape_8.setTransform(536.8,252.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#66CC02").s().p("AglBBQgMgOABgZIAAgCQgBgZAMgPQALgQAUgBQAHABAGADQAHADAFAIIAAg9IAfAAIAACeIgaAAIgDgOQgFAHgHAEQgIAFgHAAQgUgBgLgPgAgOAAQgFAIAAAQIAAACQAAAPAFAIQAFAIAJAAQAGABAFgDQAFgDADgFIAAgvQgDgDgFgDQgEgDgHAAQgJAAgFAJg");
	this.shape_9.setTransform(525.3,250);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#66CC02").s().p("AgoAwQgJgJAAgPQAAgRANgHQAMgJAYABIAPAAIAAgJQAAgIgEgFQgFgEgGAAQgHAAgDADQgFAEAAAGIgdAAIAAgBQgBgOANgJQAOgLASAAQAVAAAMAKQAMAKAAATIAAAsQAAAHABAIIAEANIgeAAIgCgIIgCgJQgFAJgIAFQgFAFgLAAQgRAAgKgJgAgOALQgFAFAAAGQAAAGADADQAEAEAGAAQAHAAAGgEQAGgEACgFIAAgPIgPAAQgJgBgFAFg");
	this.shape_10.setTransform(513.9,252.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#66CC02").s().p("AAUA3IgUhAIAAAAIgTBAIgZAAIgchtIAcAAIAOBFIABAAIAVhFIASAAIAUBGIABAAIAOhGIAcAAIgcBtg");
	this.shape_11.setTransform(495.4,252.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#66CC02").s().p("AghAqQgOgPAAgZIAAgCQAAgYAOgQQANgQAVAAQAWAAANANQAMAOAAAXIAAAPIhAAAIAAAAQABALAGAHQAHAHAJAAQAKAAAGgCIAOgGIAJASQgHAGgLAEQgLADgOAAQgWAAgOgPgAgKgaQgFAGgBAKIAAABIAjAAIAAgDQAAgJgFgGQgEgGgJAAQgGAAgFAHg");
	this.shape_12.setTransform(482.2,252.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#66CC02").s().p("AASA4IAAhEQAAgKgFgFQgEgFgJAAQgEAAgFACQgFADgDAEIAABPIgeAAIAAhtIAcAAIABAQQAGgJAIgEQAGgFAKAAQARAAAJALQAKAKAAAWIAABEg");
	this.shape_13.setTransform(470.6,252.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#66CC02").s().p("AgnAwQgKgJAAgQQAAgPANgIQANgIAXgBIAPAAIAAgJQAAgIgEgEQgEgEgHAAQgHAAgEADQgDAEAAAGIgdAAIAAgBQgCgNAOgLQAMgKAUAAQATAAAMAKQANAKAAATIAAAsQAAAIACAGIADAOIgeAAIgCgIIgDgIQgEAHgHAGQgGAFgKAAQgSAAgJgJgAgOALQgFAFAAAGQAAAGAEADQADAEAHAAQAFAAAHgEQAGgEACgFIAAgQIgPAAQgJAAgFAFg");
	this.shape_14.setTransform(582.4,228.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#66CC02").s().p("AgdA4IAAhtIAcAAIABAQQACgIAGgFQAGgFAIAAIAEAAIAEABIgDAbIgLgBQgHAAgEAEQgEACgBAFIAABJg");
	this.shape_15.setTransform(568.4,228.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#66CC02").s().p("AglApQgOgPAAgZIAAgBQAAgYAOgQQAOgQAXAAQAYAAAOAQQAOAQAAAYIAAABQAAAZgOAPQgOAQgYAAQgXAAgOgQgAgQgXQgFAJAAAOIAAABQAAAOAFAKQAGAJAKAAQALAAAGgJQAFgKAAgOIAAgBQAAgPgGgIQgFgKgLAAQgKAAgGAKg");
	this.shape_16.setTransform(558.3,228.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#66CC02").s().p("AgTBQIAAhYIgQAAIAAgUIAQAAIAAgNQAAgSALgLQAJgJATgBIAIABIAIABIgCAXIgFgBIgFAAQgIAAgDAEQgEAEAAAHIAAANIAWAAIAAAUIgWAAIAABYg");
	this.shape_17.setTransform(548.8,226.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#66CC02").s().p("AggAqQgPgPAAgYIAAgDQAAgYAOgQQANgQAVAAQAXAAAMAOQAMANAAAXIAAAPIhAAAIAAAAQAAALAHAHQAGAHAKAAQAKAAAGgCIAPgGIAIASQgHAGgLAEQgLADgOAAQgWAAgNgPgAgKgbQgFAHgBAKIAAAAIAjAAIAAgCQAAgKgFgFQgEgGgJAAQgGAAgFAGg");
	this.shape_18.setTransform(534.2,228.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#66CC02").s().p("AAxA4IAAhCQAAgMgEgFQgEgFgIAAQgHAAgEADQgFADgDAFIAAADIAAADIAABHIgbAAIAAhCQAAgMgEgFQgFgFgIAAQgGAAgEACQgFADgDAEIAABPIgeAAIAAhtIAcAAIABAPQAGgJAIgDQAIgFAKAAQALAAAGAFQAHAEAEAKQAFgJAIgFQAJgFALAAQAQAAAKALQAJALAAAYIAABBg");
	this.shape_19.setTransform(519.5,228.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#66CC02").s().p("AgOBPIAAhsIAdAAIAABsgAgOg4IAAgXIAdAAIAAAXg");
	this.shape_20.setTransform(507.6,226.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#66CC02").s().p("AgHA9QgJgJAAgSIAAg3IgQAAIAAgUIAQAAIAAgbIAcAAIAAAbIATAAIAAAUIgTAAIAAA3QAAAGADAEQADACAEAAIAEAAIAEgBIADAVIgJADIgJAAQgPABgHgJg");
	this.shape_21.setTransform(500.9,227.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#66CC02").s().p("AghAuQgNgMABgNIAAgBIAbAAQABAIAFAEQAGAFAHAAQAIAAAEgEQAFgDAAgGQAAgFgFgDQgFgDgLgDQgTgFgKgFQgKgIAAgOQAAgOAMgKQAMgKASAAQAVAAANAKQAMAKAAAPIAAAAIgdAAQAAgGgFgEQgEgFgIAAQgFAAgFAEQgEAEAAAFQAAAFAFAEQAEACALADQAVAFAKAGQAKAHAAAOQAAAPgNAKQgNAJgVAAQgUAAgNgLg");
	this.shape_22.setTransform(486.8,228.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#66CC02").s().p("AgKAcIAAg3IAVAAIAAAbIgKAcg");
	this.shape_23.setTransform(479.8,221);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#66CC02").s().p("AgHA9QgJgJAAgSIAAg3IgQAAIAAgUIAQAAIAAgbIAcAAIAAAbIATAAIAAAUIgTAAIAAA3QAAAGADAEQADACAEAAIAEAAIAEgBIADAVIgJADIgJAAQgPABgHgJg");
	this.shape_24.setTransform(474.3,227.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#66CC02").s().p("AgNBKIAAiTIAbAAIAACTg");
	this.shape_25.setTransform(467.8,226.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AogFPQgLAAgKgKQgKgLAAgKIAAjdIg0g1QgFgFAAgGQABgHAFgFIAzgzIAAkLQAAgKAKgHQAJgFAMAAISEAAQAVgBAAAXIAAJnQAAAMgFAJQgGAKgKAAg");
	this.shape_26.setTransform(535.6,240.2,1.387,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},16).to({state:[]},28).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},9).wait(22));

	// md-monkey
	this.instance_3 = new lib.monkey();
	this.instance_3.setTransform(847.5,632.1,1,1,0,0,0,72.5,144);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(37).to({_off:false},0).wait(1).to({x:828.6,y:625.9},0).wait(1).to({x:809.8,y:619.7},0).wait(1).to({x:790.9,y:613.4},0).wait(1).to({x:772.1,y:607.2},0).wait(1).to({x:740,y:582.3},0).wait(1).to({x:707.9,y:557.4},0).wait(1).to({x:675.9,y:532.6},0).wait(1).to({x:643.8,y:507.7},0).wait(1).to({x:611.8,y:482.8},0).wait(1).to({x:579.7,y:457.9},0).wait(1).to({x:547.6,y:433},0).wait(1).to({x:515.6,y:408.1},0).wait(1).to({x:483.5,y:383.3},0).wait(1).to({x:451.5,y:358.4},0).wait(1).to({x:419.4,y:333.5},0).wait(1).to({x:387.4,y:308.6},0).wait(22));

	// md-flag
	this.instance_4 = new lib.mdflag2();
	this.instance_4.setTransform(676.8,622.7,1,1,0,0,0,70,158);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(37).to({_off:false},0).wait(1).to({x:658,y:616.5},0).wait(1).to({x:639.1,y:610.3},0).wait(1).to({x:620.3,y:604},0).wait(1).to({x:601.4,y:597.8},0).wait(1).to({x:569.3,y:572.9},0).wait(1).to({x:537.3,y:548},0).wait(1).to({x:505.2,y:523.2},0).wait(1).to({x:473.2,y:498.3},0).wait(1).to({x:441.1,y:473.4},0).wait(1).to({x:409.1,y:448.5},0).wait(1).to({x:377,y:423.6},0).wait(1).to({x:344.9,y:398.7},0).wait(1).to({x:312.9,y:373.9},0).wait(1).to({x:280.8,y:349},0).wait(1).to({x:248.8,y:324.1},0).wait(1).to({x:216.7,y:299.2},0).wait(22));

	// moon
	this.instance_5 = new lib.mdmoonlg();
	this.instance_5.setTransform(819,909.2,0.838,0.838);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(37).to({_off:false},0).wait(1).to({x:792.7,y:889},0).wait(1).to({x:766.5,y:868.8},0).wait(1).to({x:740.2,y:848.5},0).wait(1).to({x:714,y:828.3},0).wait(1).to({x:687.7,y:808.1},0).wait(1).to({x:661.5,y:787.9},0).wait(1).to({x:635.2,y:767.7},0).wait(1).to({x:609,y:747.5},0).wait(1).to({x:582.7,y:727.2},0).wait(1).to({x:556.4,y:707},0).wait(1).to({x:530.2,y:686.8},0).wait(1).to({x:503.9,y:666.6},0).wait(1).to({x:477.7,y:646.4},0).wait(1).to({x:451.4,y:626.2},0).wait(1).to({x:425.2,y:605.9},0).wait(1).to({x:398.9,y:585.7},0).wait(22));

	// planetfield
	this.instance_6 = new lib.mdplanetfield();
	this.instance_6.setTransform(385.2,236);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(42).to({regX:13,regY:-62.1,x:401.5,y:177.2},0).wait(1).to({x:404.8,y:180.5},0).wait(1).to({x:408.2,y:183.9},0).wait(1).to({x:411.5,y:187.2},0).wait(1).to({x:414.8,y:190.5},0).wait(1).to({x:418.2,y:193.9},0).wait(1).to({x:421.5,y:197.2},0).wait(1).to({x:424.8,y:200.5},0).wait(1).to({x:428.2,y:203.9},0).wait(1).to({x:431.5,y:207.2},0).wait(1).to({x:434.8,y:210.5},0).wait(1).to({x:438.2,y:213.9},0).wait(22));

	// tiny-stars
	this.instance_7 = new lib.mdtinystars();
	this.instance_7.setTransform(307.6,211.4,1.007,1.007,0,0,0,480.2,270.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(42).to({regY:269.5,x:310.9,y:213.6},0).wait(1).to({x:314.3,y:217},0).wait(1).to({x:317.6,y:220.3},0).wait(1).to({x:320.9,y:223.6},0).wait(1).to({x:324.3,y:227},0).wait(1).to({x:327.6,y:230.3},0).wait(1).to({x:330.9,y:233.6},0).wait(1).to({x:334.3,y:237},0).wait(1).to({x:337.6,y:240.3},0).wait(1).to({x:340.9,y:243.6},0).wait(1).to({x:344.3,y:247},0).wait(1).to({x:347.6,y:250.3},0).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(213.9,146.3,967.3,547.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;