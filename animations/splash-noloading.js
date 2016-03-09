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



(lib.spstartween = function(mode,startPosition,loop) {
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
	this.shape_13.graphics.f("#FFFFFF").s().p("AhiBiQgpgpAAg5QAAg4ApgpQApgpA5AAQA5AAAqApQApApAAA4QAAA5gpApQgqApg5AAQg5AAgpgpg");
	this.shape_13.setTransform(-414.4,289.1,1.951,1.951);

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


(lib.spstargold = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFB95E").s().p("AgKA2Ig+AWIAUg/IgogyIBCAAIAjg3IAVA/IA/ATIg1AlIACBCg");
	this.shape.setTransform(9.4,9.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.8,18.7);


(lib.spstar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag9A+QgagZAAglQAAgjAagaQAZgaAkAAQAkAAAaAaQAaAaAAAjQAAAlgaAZQgaAagkAAQgjAAgagag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.8,-8.8,17.8,17.8);


(lib.spplanentring = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#008A94").s().p("AjFCCQgDgQAQgjQANgaAMgQQgQAlATARQAQARAogCQBYgGBDhAQBfhWAZgzQAfhDheABIAVgBQAqADARATQATAWggA+QgiBAhFA9QhPBGhZAbQgfAJgWAAQgtAAgHgng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-16.9,39.8,33.8);


(lib.spmoon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9E9E9E").s().p("AhdBdQgngmAAg3QAAg1AngnQAngnA2AAQA3AAAnAnQAnAnAAA1QAAA3gnAmQgnAng3AAQg2AAgngng");
	this.shape.setTransform(132.1,116);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9E9E9E").s().p("AhdBdQgngmAAg3QAAg1AngnQAngnA2AAQA2AAAoAnQAnAnAAA1QAAA2gnAnQgoAng2AAQg2AAgngng");
	this.shape_1.setTransform(171.2,74.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9E9E9E").s().p("ApwW/Qkhh5jejdQjfjdh6kfQh/koAAlFQAAlDB/kpQB6keDfjdQDejeEhh5QErh9FFAAQFHAAErB9QEgB5DfDeQDeDdB6EeQB/EpAAFDQAAFFh/EoQh6EfjeDdQjfDdkgB5QkrB9lHAAQlFAAkrh9g");
	this.shape_2.setTransform(-240.3,514.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9E9E9E").s().p("AlOMUQibhBh2h2Qh4h3hCiaQhDifAAitQAAisBDigQBCiZB4h3QB2h2CbhBQCghDCuAAQCvAACgBDQCbBBB3B2QB3B3BCCZQBDCgAACsQAACthDCfQhCCah3B3Qh3B2ibBBQigBDivAAQiuAAighDg");
	this.shape_3.setTransform(32.6,897.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9E9E9E").s().p("AjwDvQhkhjAAiMQAAiLBkhjQBkhkCMAAQCNAABkBkQBkBjAACLQAACMhkBjQhkBkiNAAQiMAAhkhkg");
	this.shape_4.setTransform(228.5,600.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9E9E9E").s().p("AjwDvQhkhjAAiMQAAiLBkhjQBkhkCMAAQCNAABkBkQBkBjAACLQAACMhkBjQhkBkiNAAQiMAAhkhkg");
	this.shape_5.setTransform(218.5,157.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9E9E9E").s().p("AjwDvQhkhjAAiMQAAiLBkhkQBkhjCMAAQCNAABkBjQBkBkAACLQAACMhkBjQhkBkiNAAQiMAAhkhkg");
	this.shape_6.setTransform(-208.2,128.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E8E8E7").s().p("EgWsBcBQhhgYhggbQyFlGusriQuOrKpKvrQpKvtiux5QizygEhyWQEiyXLGvGQKvulPappQPZpnRyjSQSVjYSYD6QByAZBRAUQSuEnPULdQOzLEJmP4QJmP4C6SQQDBS2knSuQkoSurdPUQrDOzv5JmQv4JmyPC6QndBNncAAQrXAArVizg");
	this.shape_7.setTransform(19.6,616.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9E9E9E").s().p("EAL1BdEQysknvUrdQuyrEpmv4Qpmv5i6yPQjBy2EnyuQEoyuLdvUQLDuzP4pmQP2pmSQi6QS4jBSuEnQBiAYBgAbQyYj6yYDYQxyDSvWJnQvbJpquOlQrGPGkiSXQkiSWC0SgQCtR5JLPtQJJPrOOLKQOsLiSDFGQhxgZhSgUg");
	this.shape_8.setTransform(-240.3,600.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E8E8E7").s().p("Egk4BXVQxAnMtItIQtHtInNxAQndxnAAzSQAAzRHdxnQHNxANHtIQNItIRAnMQRnndTRAAQTSAARnHdQRAHMNINIQNINIHMRAQHcRnAATRQAATSncRnQnMRAtINIQtINIxAHMQxnHdzSAAQzRAAxnndg");
	this.shape_9.setTransform(-19.8,611.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-626.4,0,1252.9,1223.3);


(lib.sploadingfill = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#91C659").s().p("AjRBUIAAioIGjAAIAACog");
	this.shape.setTransform(2,0,0.094,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#91C659").s().p("Ag1BUIAAinIBrAAIAACng");
	this.shape_1.setTransform(5.5,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#91C659").s().p("AhYBUIAAinICxAAIAACng");
	this.shape_2.setTransform(9,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#91C659").s().p("Ah6BUIAAinID1AAIAACng");
	this.shape_3.setTransform(12.4,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#91C659").s().p("AicBUIAAinIE5AAIAACng");
	this.shape_4.setTransform(15.8,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#91C659").s().p("Ai+BUIAAinIF9AAIAACng");
	this.shape_5.setTransform(19.2,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#91C659").s().p("AjgBUIAAinIHBAAIAACng");
	this.shape_6.setTransform(22.5,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#91C659").s().p("AkBBUIAAinIICAAIAACng");
	this.shape_7.setTransform(25.8,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#91C659").s().p("AkhBUIAAinIJDAAIAACng");
	this.shape_8.setTransform(29.1,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#91C659").s().p("AlCBUIAAinIKFAAIAACng");
	this.shape_9.setTransform(32.3,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#91C659").s().p("AliBUIAAinILFAAIAACng");
	this.shape_10.setTransform(35.6,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#91C659").s().p("AmCBUIAAinIMFAAIAACng");
	this.shape_11.setTransform(38.7,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#91C659").s().p("AmhBUIAAinINDAAIAACng");
	this.shape_12.setTransform(41.9,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#91C659").s().p("AnBBUIAAinIODAAIAACng");
	this.shape_13.setTransform(45,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#91C659").s().p("AnfBUIAAinIO/AAIAACng");
	this.shape_14.setTransform(48.1,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#91C659").s().p("An+BUIAAinIP9AAIAACng");
	this.shape_15.setTransform(51.1,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#91C659").s().p("AocBUIAAinIQ5AAIAACng");
	this.shape_16.setTransform(54.2,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#91C659").s().p("Ao6BUIAAinIR1AAIAACng");
	this.shape_17.setTransform(57.2,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#91C659").s().p("ApYBUIAAinISxAAIAACng");
	this.shape_18.setTransform(60.1,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#91C659").s().p("Ap1BUIAAinITrAAIAACng");
	this.shape_19.setTransform(63.1,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#91C659").s().p("AqSBUIAAinIUlAAIAACng");
	this.shape_20.setTransform(66,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#91C659").s().p("AqvBUIAAinIVfAAIAACng");
	this.shape_21.setTransform(68.8,0);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#91C659").s().p("ArLBUIAAinIWXAAIAACng");
	this.shape_22.setTransform(71.7,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#91C659").s().p("ArnBUIAAinIXPAAIAACng");
	this.shape_23.setTransform(74.5,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#91C659").s().p("AsDBUIAAinIYHAAIAACng");
	this.shape_24.setTransform(77.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[]},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-8.5,4,17);


(lib.sploading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AuIBVIAAipIcQAAIAACpg");
	this.shape.setTransform(90.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,181,17);


(lib.spgreenP2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6DA54F").s().p("AhCBDQgcgbAAgoQAAgmAcgcQAcgcAmAAQAoAAAbAcQAcAcAAAmQAAAogcAbQgbAcgoAAQgmAAgcgcg");
	this.shape.setTransform(9.6,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-9.5,19.1,19.1);


(lib.spgreenP1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#37703C").s().p("AhCBDQgcgcAAgnQAAgmAcgcQAcgcAmAAQAnAAAcAcQAcAcAAAmQAAAngcAcQgcAcgnAAQgmAAgcgcg");
	this.shape.setTransform(9.6,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-9.5,19.1,19.1);


(lib.spbluebody = function(mode,startPosition,loop) {
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


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("ABCCqQhHAAg0gyQg0gxAAhHQAAhEAzgyQAzgyBGgBIAuAAQhGACgwAxQgyAxAABFQAABHAzAxQAwAwBGACg");
	this.shape.setTransform(11,17.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22.1,34.1);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("ACpC/IgIgEQgFgDgDgFIk1kzIgOAOQgIAIgMAAQgMAAgHgJQgIgIAAgLQAAgMAIgHIAnglIATAWIAFABIFcFaQADAFAFADIAIAEIgqAAg");
	this.shape.setTransform(21.9,19.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.8,38.3);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AjWHSIgrAAIAAnHQACjFCQiMQCOiNDKAAIAZABQjCAJiGCLQiICKgCC/IAAAAIAAHJIgGgCg");
	this.shape.setTransform(25.9,46.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.7,93.7);


(lib.Path_4_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("ABKKvIAAhdIggAAQgMAAgJgJQgJgIAAgNQAAgMAJgJQAJgJAMAAIAIAAIAAl6Ih+AAQgTAAgOgNQgNgOAAgSQAAgTANgOQAOgNATAAIAwAAIABnkIAvkLIAALvIBPBbIAAF6IgHAAQgCAAAQAeIARAeIAABdg");
	this.shape.setTransform(12.4,68.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.8,137.5);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AgyBtQgvgtAAhAQAAg/AvgtQAvguBAAAQASAAATAEQg2AMgiAqQgiArAAA1QAAA2AiArQAiAqA2AMQgTAEgSAAQhAAAgvgug");
	this.shape.setTransform(9.9,15.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.8,31.1);


(lib.Path_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("ABZhaIAIAoIiQCNIgSgCIgfACg");
	this.shape.setTransform(9.8,9.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.6,18.3);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AjIMZIGB41IAQAEImBY0g");
	this.shape.setTransform(20.1,79.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40.2,159.4);


(lib.Path_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("ABfGzQhIAAgygyQgzgxAAhHIAAgIIAAj/IgeAAQgMAAgKgHQgJgJAAgMQAAgNAJgIQAKgJAMAAIAEAAIAAl6IAxAAIAAF6IAaA6IAAD/IgBAIQABBHAxAxQAyAxBFABg");
	this.shape.setTransform(14,43.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28,87.2);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AgVAFIAFgSIAmAKIgFARg");
	this.shape.setTransform(2.2,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.4,2.9);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("ABPFGQgjgJgcgYQgugpgHg/QgiAEgagWQgYgVgDggQgDgfAUgYIAEgDIgPAAQgLAAgIgIQgIgIAAgLQAAgLAIgJQAIgIALAAIAjAAIAAj4QgBgDAAgLIgBgIQAAgGAEgDIhBg5IAwAAIBCA5QgEADAAAGIABAIQAAALABADIAAD4IgUA3IgEADQgUAYADAfQADAgAYAVQAaAWAggEQAHA/AxApQAjAeAuAHQgMACgNAAQgWAAgVgGg");
	this.shape.setTransform(14.8,33.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29.6,66.6);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AgVAFIAFgTIAmAKIgFASg");
	this.shape.setTransform(2.2,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.5,3);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("Ahkh8IAgAIICpDoIgTAJg");
	this.shape.setTransform(10.2,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.4,25);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010202").s().p("AllhLIAAgBIAggRIKrCkIgFAXg");
	this.shape.setTransform(35.9,9.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71.8,18.9);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFB349").s().p("AhnAXICchCIAzAWIicBBg");
	this.shape_1.setTransform(10.5,4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21,8.9);


(lib.sptinystars = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.spstar();
	this.instance.setTransform(218,458,0.293,0.293,0,0,0,5.7,4.8);
	this.instance.alpha = 0.699;

	this.circle = new lib.spstar();
	this.circle.setTransform(878.2,532.2,0.293,0.293);
	this.circle.alpha = 0.699;

	this.instance_1 = new lib.spstar();
	this.instance_1.setTransform(945.1,486.7,0.293,0.293,0,0,0,4.5,3.8);
	this.instance_1.alpha = 0.699;

	this.instance_2 = new lib.spstar();
	this.instance_2.setTransform(756,513.2,0.293,0.293,0,0,0,3.9,3.8);
	this.instance_2.alpha = 0.699;

	this.instance_3 = new lib.spstar();
	this.instance_3.setTransform(756,444.7,0.293,0.293,0,0,0,3.9,6.5);
	this.instance_3.alpha = 0.699;

	this.circle_1 = new lib.spstar();
	this.circle_1.setTransform(785.5,532.2,0.293,0.293);
	this.circle_1.alpha = 0.699;

	this.instance_4 = new lib.spstar();
	this.instance_4.setTransform(843.2,520.2,0.293,0.293,0,0,0,3.8,8);
	this.instance_4.alpha = 0.699;

	this.instance_5 = new lib.spstar();
	this.instance_5.setTransform(872.2,422,0.293,0.293,0,0,0,3.8,8.3);
	this.instance_5.alpha = 0.699;

	this.circle_2 = new lib.spstar();
	this.circle_2.setTransform(909.4,448.3,0.293,0.293);
	this.circle_2.alpha = 0.699;

	this.instance_6 = new lib.spstar();
	this.instance_6.setTransform(884.9,487.8,0.293,0.293,0,0,0,4.6,7.5);
	this.instance_6.alpha = 0.699;

	this.circle_3 = new lib.spstar();
	this.circle_3.setTransform(855.9,462.4,0.293,0.293);
	this.circle_3.alpha = 0.699;

	this.circle_4 = new lib.spstar();
	this.circle_4.setTransform(78.6,538.9,0.293,0.293);
	this.circle_4.alpha = 0.699;

	this.instance_7 = new lib.spstar();
	this.instance_7.setTransform(47.2,517.3,0.293,0.293,0,0,0,5.5,6.7);
	this.instance_7.alpha = 0.699;

	this.instance_8 = new lib.spstar();
	this.instance_8.setTransform(108.1,510.5,0.293,0.293,0,0,0,5.7,3.6);
	this.instance_8.alpha = 0.699;

	this.instance_9 = new lib.spstar();
	this.instance_9.setTransform(187.4,458,0.293,0.293,0,0,0,6.3,4.8);
	this.instance_9.alpha = 0.699;

	this.circle_5 = new lib.spstar();
	this.circle_5.setTransform(609,523.7,0.293,0.293);
	this.circle_5.alpha = 0.699;

	this.instance_10 = new lib.spstar();
	this.instance_10.setTransform(652.4,511.3,0.293,0.293,0,0,0,5.8,2.8);
	this.instance_10.alpha = 0.699;

	this.circle_6 = new lib.spstar();
	this.circle_6.setTransform(719,517.9,0.293,0.293);
	this.circle_6.alpha = 0.699;

	this.circle_7 = new lib.spstar();
	this.circle_7.setTransform(754.8,474.8,0.293,0.293);
	this.circle_7.alpha = 0.699;

	this.instance_11 = new lib.spstar();
	this.instance_11.setTransform(807.3,490.8,0.293,0.293,0,0,0,6.3,7.7);
	this.instance_11.alpha = 0.699;

	this.instance_12 = new lib.spstar();
	this.instance_12.setTransform(720.6,434,0.293,0.293,0,0,0,5.5,6.7);
	this.instance_12.alpha = 0.699;

	this.instance_13 = new lib.spstar();
	this.instance_13.setTransform(685.8,372.7,0.293,0.293,0,0,0,7.4,6);
	this.instance_13.alpha = 0.699;

	this.instance_14 = new lib.spstar();
	this.instance_14.setTransform(843.2,136.5,0.293,0.293,0,0,0,3.8,5.7);
	this.instance_14.alpha = 0.699;

	this.circle_8 = new lib.spstar();
	this.circle_8.setTransform(883.5,162.5,0.293,0.293);
	this.circle_8.alpha = 0.699;

	this.instance_15 = new lib.spstar();
	this.instance_15.setTransform(953.4,168,0.293,0.293,0,0,0,3.8,6.5);
	this.instance_15.alpha = 0.699;

	this.circle_9 = new lib.spstar();
	this.circle_9.setTransform(940.7,282.1,0.293,0.293);
	this.circle_9.alpha = 0.699;

	this.instance_16 = new lib.spstar();
	this.instance_16.setTransform(859.2,337.6,0.293,0.293,0,0,0,5.7,2.8);
	this.instance_16.alpha = 0.699;

	this.instance_17 = new lib.spstar();
	this.instance_17.setTransform(902.9,296.4,0.293,0.293,0,0,0,5,4.5);
	this.instance_17.alpha = 0.699;

	this.circle_10 = new lib.spstar();
	this.circle_10.setTransform(909.4,199.6,0.293,0.293);
	this.circle_10.alpha = 0.699;

	this.instance_18 = new lib.spstar();
	this.instance_18.setTransform(807.3,42.2,0.293,0.293,0,0,0,6.3,6.9);
	this.instance_18.alpha = 0.699;

	this.instance_19 = new lib.spstar();
	this.instance_19.setTransform(747.3,59.2,0.293,0.293,0,0,0,5.3,4.8);
	this.instance_19.alpha = 0.699;

	this.instance_20 = new lib.spstar();
	this.instance_20.setTransform(747.3,115.4,0.293,0.293,0,0,0,5.3,4.1);
	this.instance_20.alpha = 0.699;

	this.instance_21 = new lib.spstar();
	this.instance_21.setTransform(711.8,178.5,0.293,0.293,0,0,0,5.7,6.7);
	this.instance_21.alpha = 0.699;

	this.instance_22 = new lib.spstar();
	this.instance_22.setTransform(905.1,138.2,0.293,0.293,0,0,0,3.9,5.7);
	this.instance_22.alpha = 0.699;

	this.instance_23 = new lib.spstar();
	this.instance_23.setTransform(856.5,195.1,0.293,0.293,0,0,0,3.2,4.8);
	this.instance_23.alpha = 0.699;

	this.circle_11 = new lib.spstar();
	this.circle_11.setTransform(827,230.1,0.293,0.293);
	this.circle_11.alpha = 0.699;

	this.instance_24 = new lib.spstar();
	this.instance_24.setTransform(807.3,287,0.293,0.293,0,0,0,6.3,4.8);
	this.instance_24.alpha = 0.699;

	this.circle_12 = new lib.spstar();
	this.circle_12.setTransform(857.8,300.6,0.293,0.293);
	this.circle_12.alpha = 0.699;

	this.instance_25 = new lib.spstar();
	this.instance_25.setTransform(707.9,281.6,0.293,0.293,0,0,0,4.1,5.7);
	this.instance_25.alpha = 0.699;

	this.instance_26 = new lib.spstar();
	this.instance_26.setTransform(659.4,87,0.293,0.293,0,0,0,4.1,4.2);
	this.instance_26.alpha = 0.699;

	this.instance_27 = new lib.spstar();
	this.instance_27.setTransform(569.9,122.5,0.293,0.293,0,0,0,4.2,3.8);
	this.instance_27.alpha = 0.699;

	this.circle_13 = new lib.spstar();
	this.circle_13.setTransform(661.5,124.4,0.293,0.293);
	this.circle_13.alpha = 0.699;

	this.circle_14 = new lib.spstar();
	this.circle_14.setTransform(775,76.4,0.293,0.293);
	this.circle_14.alpha = 0.699;

	this.circle_15 = new lib.spstar();
	this.circle_15.setTransform(700.2,140.1,0.293,0.293);
	this.circle_15.alpha = 0.699;

	this.instance_28 = new lib.spstar();
	this.instance_28.setTransform(335.7,106.5,0.293,0.293,0,0,0,8.3,4.6);
	this.instance_28.alpha = 0.699;

	this.instance_29 = new lib.spstar();
	this.instance_29.setTransform(335.7,160.9,0.293,0.293,0,0,0,3.6,6.5);
	this.instance_29.alpha = 0.699;

	this.circle_16 = new lib.spstar();
	this.circle_16.setTransform(379,137.4,0.293,0.293);
	this.circle_16.alpha = 0.699;

	this.circle_17 = new lib.spstar();
	this.circle_17.setTransform(17.3,219.1,0.293,0.293);
	this.circle_17.alpha = 0.699;

	this.instance_30 = new lib.spstar();
	this.instance_30.setTransform(90.2,218.3,0.293,0.293,0,0,0,2.9,3.6);
	this.instance_30.alpha = 0.699;

	this.instance_31 = new lib.spstar();
	this.instance_31.setTransform(44,195.9,0.293,0.293,0,0,0,5.7,7.5);
	this.instance_31.alpha = 0.699;

	this.circle_18 = new lib.spstar();
	this.circle_18.setTransform(49,230.1,0.293,0.293);
	this.circle_18.alpha = 0.699;

	this.circle_19 = new lib.spstar();
	this.circle_19.setTransform(231.4,186,0.293,0.293);
	this.circle_19.alpha = 0.699;

	this.circle_20 = new lib.spstar();
	this.circle_20.setTransform(805.7,387.9,0.293,0.293);
	this.circle_20.alpha = 0.699;

	this.circle_21 = new lib.spstar();
	this.circle_21.setTransform(839.3,413.1,0.293,0.293);
	this.circle_21.alpha = 0.699;

	this.circle_22 = new lib.spstar();
	this.circle_22.setTransform(782.7,187.6,0.293,0.293);
	this.circle_22.alpha = 0.699;

	this.instance_32 = new lib.spstar();
	this.instance_32.setTransform(255.6,106.5,0.293,0.293,0,0,0,5,4.6);
	this.instance_32.alpha = 0.699;

	this.circle_23 = new lib.spstar();
	this.circle_23.setTransform(80.2,178.5,0.293,0.293);
	this.circle_23.alpha = 0.699;

	this.circle_24 = new lib.spstar();
	this.circle_24.setTransform(84.8,107.6,0.293,0.293);
	this.circle_24.alpha = 0.699;

	this.circle_25 = new lib.spstar();
	this.circle_25.setTransform(58.5,140.1,0.293,0.293);
	this.circle_25.alpha = 0.699;

	this.instance_33 = new lib.spstar();
	this.instance_33.setTransform(255.6,160.9,0.293,0.293,0,0,0,5,6.5);
	this.instance_33.alpha = 0.699;

	this.circle_26 = new lib.spstar();
	this.circle_26.setTransform(275.5,194.2,0.293,0.293);
	this.circle_26.alpha = 0.699;

	this.circle_27 = new lib.spstar();
	this.circle_27.setTransform(289.8,131.6,0.293,0.293);
	this.circle_27.alpha = 0.699;

	this.circle_28 = new lib.spstar();
	this.circle_28.setTransform(205,121.4,0.293,0.293);
	this.circle_28.alpha = 0.699;

	this.circle_29 = new lib.spstar();
	this.circle_29.setTransform(224.4,154.2,0.293,0.293);
	this.circle_29.alpha = 0.699;

	this.circle_30 = new lib.spstar();
	this.circle_30.setTransform(244.2,222.6,0.293,0.293);
	this.circle_30.alpha = 0.699;

	this.circle_31 = new lib.spstar();
	this.circle_31.setTransform(160.3,79.7,0.293,0.293);
	this.circle_31.alpha = 0.699;

	this.circle_32 = new lib.spstar();
	this.circle_32.setTransform(179,145.7,0.293,0.293);
	this.circle_32.alpha = 0.699;

	this.circle_33 = new lib.spstar();
	this.circle_33.setTransform(130.5,107.6,0.293,0.293);
	this.circle_33.alpha = 0.699;

	this.circle_34 = new lib.spstar();
	this.circle_34.setTransform(140.2,178.5,0.293,0.293);
	this.circle_34.alpha = 0.699;

	this.circle_35 = new lib.spstar();
	this.circle_35.setTransform(188,201.2,0.293,0.293);
	this.circle_35.alpha = 0.699;

	this.circle_36 = new lib.spstar();
	this.circle_36.setTransform(166.8,233.2,0.293,0.293);
	this.circle_36.alpha = 0.699;

	this.circle_37 = new lib.spstar();
	this.circle_37.setTransform(166.8,172.2,0.293,0.293);
	this.circle_37.alpha = 0.699;

	this.circle_38 = new lib.spstar();
	this.circle_38.setTransform(63.1,63.7,0.293,0.293);
	this.circle_38.alpha = 0.699;

	this.circle_39 = new lib.spstar();
	this.circle_39.setTransform(94.3,81.3,0.293,0.293);
	this.circle_39.alpha = 0.699;

	this.circle_40 = new lib.spstar();
	this.circle_40.setTransform(17.3,105.9,0.293,0.293);
	this.circle_40.alpha = 0.699;

	this.instance_34 = new lib.spstar();
	this.instance_34.setTransform(29.4,2.3,0.293,0.293,0,0,0,4.8,7.5);
	this.instance_34.alpha = 0.699;

	this.circle_41 = new lib.spstar();
	this.circle_41.setTransform(49,35.2,0.293,0.293);
	this.circle_41.alpha = 0.699;

	this.circle_42 = new lib.spstar();
	this.circle_42.setTransform(765.6,256.9,0.293,0.293);
	this.circle_42.alpha = 0.699;

	this.circle_43 = new lib.spstar();
	this.circle_43.setTransform(2.6,139.8,0.293,0.293);
	this.circle_43.alpha = 0.699;

	this.instance_35 = new lib.spstar();
	this.instance_35.setTransform(413.8,103.5,0.293,0.293,0,0,0,4.8,6.5);
	this.instance_35.alpha = 0.699;

	this.circle_44 = new lib.spstar();
	this.circle_44.setTransform(684.7,426.9,0.293,0.293);
	this.circle_44.alpha = 0.699;

	this.circle_45 = new lib.spstar();
	this.circle_45.setTransform(9.8,177.1,0.293,0.293);
	this.circle_45.alpha = 0.699;

	this.circle_46 = new lib.spstar();
	this.circle_46.setTransform(725.6,249.6,0.293,0.293);
	this.circle_46.alpha = 0.699;

	this.circle_47 = new lib.spstar();
	this.circle_47.setTransform(707,312.5,0.293,0.293);
	this.circle_47.alpha = 0.699;

	this.instance_36 = new lib.spstar();
	this.instance_36.setTransform(942.6,62.2,0.293,0.293,0,0,0,6.3,5.7);
	this.instance_36.alpha = 0.699;

	this.circle_48 = new lib.spstar();
	this.circle_48.setTransform(104.3,142.3,0.293,0.293);
	this.circle_48.alpha = 0.699;

	this.circle_49 = new lib.spstar();
	this.circle_49.setTransform(827,102,0.293,0.293);
	this.circle_49.alpha = 0.699;

	this.circle_50 = new lib.spstar();
	this.circle_50.setTransform(805.7,337.6,0.293,0.293);
	this.circle_50.alpha = 0.699;

	this.circle_51 = new lib.spstar();
	this.circle_51.setTransform(957.8,327.4,0.293,0.293);
	this.circle_51.alpha = 0.699;

	this.instance_37 = new lib.spstar();
	this.instance_37.setTransform(798.7,430.9,0.293,0.293,0,0,0,6.5,4.6);
	this.instance_37.alpha = 0.699;

	this.circle_52 = new lib.spstar();
	this.circle_52.setTransform(754.8,413.1,0.293,0.293);
	this.circle_52.alpha = 0.699;

	this.circle_53 = new lib.spstar();
	this.circle_53.setTransform(17.3,63.7,0.293,0.293);
	this.circle_53.alpha = 0.699;

	this.circle_54 = new lib.spstar();
	this.circle_54.setTransform(693.8,470.2,0.293,0.293);
	this.circle_54.alpha = 0.699;

	this.circle_55 = new lib.spstar();
	this.circle_55.setTransform(2.6,29.9,0.293,0.293);
	this.circle_55.alpha = 0.699;

	this.circle_56 = new lib.spstar();
	this.circle_56.setTransform(938.3,119.5,0.293,0.293);
	this.circle_56.alpha = 0.699;

	this.circle_57 = new lib.spstar();
	this.circle_57.setTransform(766.7,360.6,0.293,0.293);
	this.circle_57.alpha = 0.699;

	this.circle_58 = new lib.spstar();
	this.circle_58.setTransform(743.1,306.2,0.293,0.293);
	this.circle_58.alpha = 0.699;

	this.circle_59 = new lib.spstar();
	this.circle_59.setTransform(852.8,62.8,0.293,0.293);
	this.circle_59.alpha = 0.699;

	this.circle_60 = new lib.spstar();
	this.circle_60.setTransform(881.4,376,0.293,0.293);
	this.circle_60.alpha = 0.699;

	this.circle_61 = new lib.spstar();
	this.circle_61.setTransform(875.5,119.5,0.293,0.293);
	this.circle_61.alpha = 0.699;

	this.instance_38 = new lib.spstar();
	this.instance_38.setTransform(597.9,481.8,0.293,0.293,0,0,0,2.8,5.7);
	this.instance_38.alpha = 0.699;

	this.circle_62 = new lib.spstar();
	this.circle_62.setTransform(898.4,72.2,0.293,0.293);
	this.circle_62.alpha = 0.699;

	this.circle_63 = new lib.spstar();
	this.circle_63.setTransform(832.7,362.8,0.293,0.293);
	this.circle_63.alpha = 0.699;

	this.circle_64 = new lib.spstar();
	this.circle_64.setTransform(664,454.9,0.293,0.293);
	this.circle_64.alpha = 0.699;

	this.circle_65 = new lib.spstar();
	this.circle_65.setTransform(942.6,422,0.293,0.293);
	this.circle_65.alpha = 0.699;

	this.circle_66 = new lib.spstar();
	this.circle_66.setTransform(627.8,476.4,0.293,0.293);
	this.circle_66.alpha = 0.699;

	this.circle_67 = new lib.spstar();
	this.circle_67.setTransform(627.8,178.5,0.293,0.293);
	this.circle_67.alpha = 0.699;

	this.circle_68 = new lib.spstar();
	this.circle_68.setTransform(897.1,331.7,0.293,0.293);
	this.circle_68.alpha = 0.699;

	this.circle_69 = new lib.spstar();
	this.circle_69.setTransform(770.5,299.7,0.293,0.293);
	this.circle_69.alpha = 0.699;

	this.circle_70 = new lib.spstar();
	this.circle_70.setTransform(49,95.4,0.293,0.293);
	this.circle_70.alpha = 0.699;

	this.circle_71 = new lib.spstar();
	this.circle_71.setTransform(641.6,156.4,0.293,0.293);
	this.circle_71.alpha = 0.699;

	this.circle_72 = new lib.spstar();
	this.circle_72.setTransform(661.5,186,0.293,0.293);
	this.circle_72.alpha = 0.699;

	this.circle_73 = new lib.spstar();
	this.circle_73.setTransform(937.7,373.3,0.293,0.293);
	this.circle_73.alpha = 0.699;

	this.circle_74 = new lib.spstar();
	this.circle_74.setTransform(888.8,7.8,0.293,0.293);
	this.circle_74.alpha = 0.699;

	this.circle_75 = new lib.spstar();
	this.circle_75.setTransform(356.7,11.8,0.293,0.293);
	this.circle_75.alpha = 0.699;

	this.instance_39 = new lib.spstar();
	this.instance_39.setTransform(687.7,62.2,0.293,0.293,0,0,0,6.5,5.7);
	this.instance_39.alpha = 0.699;

	this.circle_76 = new lib.spstar();
	this.circle_76.setTransform(707,96.6,0.293,0.293);
	this.circle_76.alpha = 0.699;

	this.circle_77 = new lib.spstar();
	this.circle_77.setTransform(721.8,33.2,0.293,0.293);
	this.circle_77.alpha = 0.699;

	this.circle_78 = new lib.spstar();
	this.circle_78.setTransform(341.4,46.1,0.293,0.293);
	this.circle_78.alpha = 0.699;

	this.circle_79 = new lib.spstar();
	this.circle_79.setTransform(635.8,22.7,0.293,0.293);
	this.circle_79.alpha = 0.699;

	this.circle_80 = new lib.spstar();
	this.circle_80.setTransform(656,55.6,0.293,0.293);
	this.circle_80.alpha = 0.699;

	this.instance_40 = new lib.spstar();
	this.instance_40.setTransform(923.8,248.4,0.293,0.293,0,0,0,3.8,4.6);
	this.instance_40.alpha = 0.699;

	this.circle_81 = new lib.spstar();
	this.circle_81.setTransform(495.8,91.3,0.293,0.293);
	this.circle_81.alpha = 0.699;

	this.circle_82 = new lib.spstar();
	this.circle_82.setTransform(347.9,83,0.293,0.293);
	this.circle_82.alpha = 0.699;

	this.circle_83 = new lib.spstar();
	this.circle_83.setTransform(454.4,79.7,0.293,0.293);
	this.circle_83.alpha = 0.699;

	this.circle_84 = new lib.spstar();
	this.circle_84.setTransform(515.5,129.2,0.293,0.293);
	this.circle_84.alpha = 0.699;

	this.circle_85 = new lib.spstar();
	this.circle_85.setTransform(443.3,48.8,0.293,0.293);
	this.circle_85.alpha = 0.699;

	this.circle_86 = new lib.spstar();
	this.circle_86.setTransform(827,162.5,0.293,0.293);
	this.circle_86.alpha = 0.699;

	this.circle_87 = new lib.spstar();
	this.circle_87.setTransform(793.8,140.1,0.293,0.293);
	this.circle_87.alpha = 0.699;

	this.circle_88 = new lib.spstar();
	this.circle_88.setTransform(216.4,2.6,0.293,0.293);
	this.circle_88.alpha = 0.699;

	this.instance_41 = new lib.spstar();
	this.instance_41.setTransform(787.1,233.2,0.293,0.293,0,0,0,6.7,3.9);
	this.instance_41.alpha = 0.699;

	this.circle_89 = new lib.spstar();
	this.circle_89.setTransform(741.8,215.3,0.293,0.293);
	this.circle_89.alpha = 0.699;

	this.circle_90 = new lib.spstar();
	this.circle_90.setTransform(888.8,264.5,0.293,0.293);
	this.circle_90.alpha = 0.699;

	this.circle_91 = new lib.spstar();
	this.circle_91.setTransform(611.5,47.5,0.293,0.293);
	this.circle_91.alpha = 0.699;

	this.circle_92 = new lib.spstar();
	this.circle_92.setTransform(587.8,22.7,0.293,0.293);
	this.circle_92.alpha = 0.699;

	this.circle_93 = new lib.spstar();
	this.circle_93.setTransform(554.9,50.2,0.293,0.293);
	this.circle_93.alpha = 0.699;

	this.circle_94 = new lib.spstar();
	this.circle_94.setTransform(754.8,162.5,0.293,0.293);
	this.circle_94.alpha = 0.699;

	this.circle_95 = new lib.spstar();
	this.circle_95.setTransform(265.3,64.5,0.293,0.293);
	this.circle_95.alpha = 0.699;

	this.circle_96 = new lib.spstar();
	this.circle_96.setTransform(545.6,95.4,0.293,0.293);
	this.circle_96.alpha = 0.699;

	this.circle_97 = new lib.spstar();
	this.circle_97.setTransform(140.2,51.3,0.293,0.293);
	this.circle_97.alpha = 0.699;

	this.circle_98 = new lib.spstar();
	this.circle_98.setTransform(292,83,0.293,0.293);
	this.circle_98.alpha = 0.699;

	this.circle_99 = new lib.spstar();
	this.circle_99.setTransform(620.1,102.5,0.293,0.293);
	this.circle_99.alpha = 0.699;

	this.circle_100 = new lib.spstar();
	this.circle_100.setTransform(493.3,50.2,0.293,0.293);
	this.circle_100.alpha = 0.699;

	this.circle_101 = new lib.spstar();
	this.circle_101.setTransform(238.8,59.5,0.293,0.293);
	this.circle_101.alpha = 0.699;

	this.circle_102 = new lib.spstar();
	this.circle_102.setTransform(515.5,3.2,0.293,0.293);
	this.circle_102.alpha = 0.699;

	this.circle_103 = new lib.spstar();
	this.circle_103.setTransform(91.6,29.9,0.293,0.293);
	this.circle_103.alpha = 0.699;

	this.circle_104 = new lib.spstar();
	this.circle_104.setTransform(857.8,248.4,0.293,0.293);
	this.circle_104.alpha = 0.699;

	this.circle_105 = new lib.spstar();
	this.circle_105.setTransform(201.5,97.3,0.293,0.293);
	this.circle_105.alpha = 0.699;

	this.circle_106 = new lib.spstar();
	this.circle_106.setTransform(278.8,29.9,0.293,0.293);
	this.circle_106.alpha = 0.699;

	this.circle_107 = new lib.spstar();
	this.circle_107.setTransform(155.4,6.7,0.293,0.293);
	this.circle_107.alpha = 0.699;

	this.circle_108 = new lib.spstar();
	this.circle_108.setTransform(587.2,74.1,0.293,0.293);
	this.circle_108.alpha = 0.699;

	this.circle_109 = new lib.spstar();
	this.circle_109.setTransform(293.1,8.2,0.293,0.293);
	this.circle_109.alpha = 0.699;

	this.circle_110 = new lib.spstar();
	this.circle_110.setTransform(311.9,38,0.293,0.293);
	this.circle_110.alpha = 0.699;

	this.circle_111 = new lib.spstar();
	this.circle_111.setTransform(196.6,48.8,0.293,0.293);
	this.circle_111.alpha = 0.699;

	this.circle_112 = new lib.spstar();
	this.circle_112.setTransform(35.2,332.8,0.293,0.293);
	this.circle_112.alpha = 0.699;

	this.circle_113 = new lib.spstar();
	this.circle_113.setTransform(68.8,357.7,0.293,0.293);
	this.circle_113.alpha = 0.699;

	this.circle_114 = new lib.spstar();
	this.circle_114.setTransform(362.7,235.8,0.293,0.293);
	this.circle_114.alpha = 0.699;

	this.instance_42 = new lib.spstar();
	this.instance_42.setTransform(539.2,438.8,0.293,0.293,0,0,0,6.5,6.2);
	this.instance_42.alpha = 0.699;

	this.circle_115 = new lib.spstar();
	this.circle_115.setTransform(362.7,510.5,0.293,0.293);
	this.circle_115.alpha = 0.699;

	this.circle_116 = new lib.spstar();
	this.circle_116.setTransform(367.1,439.9,0.293,0.293);
	this.circle_116.alpha = 0.699;

	this.circle_117 = new lib.spstar();
	this.circle_117.setTransform(340.3,472.6,0.293,0.293);
	this.circle_117.alpha = 0.699;

	this.instance_43 = new lib.spstar();
	this.instance_43.setTransform(539.2,493.7,0.293,0.293,0,0,0,6.5,7);
	this.instance_43.alpha = 0.699;

	this.circle_118 = new lib.spstar();
	this.circle_118.setTransform(557.6,526.8,0.293,0.293);
	this.circle_118.alpha = 0.699;

	this.circle_119 = new lib.spstar();
	this.circle_119.setTransform(572.1,463.7,0.293,0.293);
	this.circle_119.alpha = 0.699;

	this.circle_120 = new lib.spstar();
	this.circle_120.setTransform(488.1,453.5,0.293,0.293);
	this.circle_120.alpha = 0.699;

	this.circle_121 = new lib.spstar();
	this.circle_121.setTransform(506.3,485.9,0.293,0.293);
	this.circle_121.alpha = 0.699;

	this.circle_122 = new lib.spstar();
	this.circle_122.setTransform(515.5,526.8,0.293,0.293);
	this.circle_122.alpha = 0.699;

	this.circle_123 = new lib.spstar();
	this.circle_123.setTransform(443.3,412.1,0.293,0.293);
	this.circle_123.alpha = 0.699;

	this.circle_124 = new lib.spstar();
	this.circle_124.setTransform(461.8,477.8,0.293,0.293);
	this.circle_124.alpha = 0.699;

	this.circle_125 = new lib.spstar();
	this.circle_125.setTransform(412.4,439.9,0.293,0.293);
	this.circle_125.alpha = 0.699;

	this.circle_126 = new lib.spstar();
	this.circle_126.setTransform(422.3,510.5,0.293,0.293);
	this.circle_126.alpha = 0.699;

	this.circle_127 = new lib.spstar();
	this.circle_127.setTransform(470.7,533.9,0.293,0.293);
	this.circle_127.alpha = 0.699;

	this.circle_128 = new lib.spstar();
	this.circle_128.setTransform(683.7,533.9,0.293,0.293);
	this.circle_128.alpha = 0.699;

	this.circle_129 = new lib.spstar();
	this.circle_129.setTransform(449.1,504.1,0.293,0.293);
	this.circle_129.alpha = 0.699;

	this.circle_130 = new lib.spstar();
	this.circle_130.setTransform(345.6,395.6,0.293,0.293);
	this.circle_130.alpha = 0.699;

	this.circle_131 = new lib.spstar();
	this.circle_131.setTransform(376.8,413.7,0.293,0.293);
	this.circle_131.alpha = 0.699;

	this.circle_132 = new lib.spstar();
	this.circle_132.setTransform(300,438.1,0.293,0.293);
	this.circle_132.alpha = 0.699;

	this.instance_44 = new lib.spstar();
	this.instance_44.setTransform(312.2,333.8,0.293,0.293,0,0,0,4.8,3.2);
	this.instance_44.alpha = 0.699;

	this.circle_133 = new lib.spstar();
	this.circle_133.setTransform(331.6,367.9,0.293,0.293);
	this.circle_133.alpha = 0.699;

	this.circle_134 = new lib.spstar();
	this.circle_134.setTransform(345.6,305.2,0.293,0.293);
	this.circle_134.alpha = 0.699;

	this.circle_135 = new lib.spstar();
	this.circle_135.setTransform(285.4,472.3,0.293,0.293);
	this.circle_135.alpha = 0.699;

	this.circle_136 = new lib.spstar();
	this.circle_136.setTransform(260.5,295.1,0.293,0.293);
	this.circle_136.alpha = 0.699;

	this.circle_137 = new lib.spstar();
	this.circle_137.setTransform(280.2,327.1,0.293,0.293);
	this.circle_137.alpha = 0.699;

	this.instance_45 = new lib.spstar();
	this.instance_45.setTransform(165.8,391.2,0.293,0.293,0,0,0,6,5.7);
	this.instance_45.alpha = 0.699;

	this.circle_138 = new lib.spstar();
	this.circle_138.setTransform(120.6,362.5,0.293,0.293);
	this.circle_138.alpha = 0.699;

	this.circle_139 = new lib.spstar();
	this.circle_139.setTransform(270.1,247.5,0.293,0.293);
	this.circle_139.alpha = 0.699;

	this.circle_140 = new lib.spstar();
	this.circle_140.setTransform(292,509.7,0.293,0.293);
	this.circle_140.alpha = 0.699;

	this.circle_141 = new lib.spstar();
	this.circle_141.setTransform(305.6,297.5,0.293,0.293);
	this.circle_141.alpha = 0.699;

	this.circle_142 = new lib.spstar();
	this.circle_142.setTransform(159.8,357.7,0.293,0.293);
	this.circle_142.alpha = 0.699;

	this.instance_46 = new lib.spstar();
	this.instance_46.setTransform(183.5,265.2,0.293,0.293,0,0,0,4.5,3.8);
	this.instance_46.alpha = 0.699;

	this.circle_143 = new lib.spstar();
	this.circle_143.setTransform(387,474.8,0.293,0.293);
	this.circle_143.alpha = 0.699;

	this.circle_144 = new lib.spstar();
	this.circle_144.setTransform(272,419.3,0.293,0.293);
	this.circle_144.alpha = 0.699;

	this.circle_145 = new lib.spstar();
	this.circle_145.setTransform(68.8,305.2,0.293,0.293);
	this.circle_145.alpha = 0.699;

	this.circle_146 = new lib.spstar();
	this.circle_146.setTransform(35.2,282.7,0.293,0.293);
	this.circle_146.alpha = 0.699;

	this.circle_147 = new lib.spstar();
	this.circle_147.setTransform(159.8,429.6,0.293,0.293);
	this.circle_147.alpha = 0.699;

	this.instance_47 = new lib.spstar();
	this.instance_47.setTransform(28,375.5,0.293,0.293,0,0,0,4.6,4.8);
	this.instance_47.alpha = 0.699;

	this.circle_148 = new lib.spstar();
	this.circle_148.setTransform(300,395.6,0.293,0.293);
	this.circle_148.alpha = 0.699;

	this.circle_149 = new lib.spstar();
	this.circle_149.setTransform(216.6,252.9,0.293,0.293);
	this.circle_149.alpha = 0.699;

	this.circle_150 = new lib.spstar();
	this.circle_150.setTransform(130.5,406.6,0.293,0.293);
	this.circle_150.alpha = 0.699;

	this.circle_151 = new lib.spstar();
	this.circle_151.setTransform(285.4,362.5,0.293,0.293);
	this.circle_151.alpha = 0.699;

	this.circle_152 = new lib.spstar();
	this.circle_152.setTransform(212.3,295.1,0.293,0.293);
	this.circle_152.alpha = 0.699;

	this.circle_153 = new lib.spstar();
	this.circle_153.setTransform(179,322.4,0.293,0.293);
	this.circle_153.alpha = 0.699;

	this.circle_154 = new lib.spstar();
	this.circle_154.setTransform(208.7,490.8,0.293,0.293);
	this.circle_154.alpha = 0.699;

	this.circle_155 = new lib.spstar();
	this.circle_155.setTransform(195.8,351.1,0.293,0.293);
	this.circle_155.alpha = 0.699;

	this.circle_156 = new lib.spstar();
	this.circle_156.setTransform(94.3,266.1,0.293,0.293);
	this.circle_156.alpha = 0.699;

	this.circle_157 = new lib.spstar();
	this.circle_157.setTransform(83.8,477.3,0.293,0.293);
	this.circle_157.alpha = 0.699;

	this.circle_158 = new lib.spstar();
	this.circle_158.setTransform(235.7,509.7,0.293,0.293);
	this.circle_158.alpha = 0.699;

	this.circle_159 = new lib.spstar();
	this.circle_159.setTransform(198.4,416,0.293,0.293);
	this.circle_159.alpha = 0.699;

	this.circle_160 = new lib.spstar();
	this.circle_160.setTransform(244.5,374.1,0.293,0.293);
	this.circle_160.alpha = 0.699;

	this.circle_161 = new lib.spstar();
	this.circle_161.setTransform(117.6,322.4,0.293,0.293);
	this.circle_161.alpha = 0.699;

	this.instance_48 = new lib.spstar();
	this.instance_48.setTransform(34.1,417.9,0.293,0.293,0,0,0,5.7,6.5);
	this.instance_48.alpha = 0.699;

	this.circle_162 = new lib.spstar();
	this.circle_162.setTransform(222.7,406.6,0.293,0.293);
	this.circle_162.alpha = 0.699;

	this.circle_163 = new lib.spstar();
	this.circle_163.setTransform(182.2,485.6,0.293,0.293);
	this.circle_163.alpha = 0.699;

	this.circle_164 = new lib.spstar();
	this.circle_164.setTransform(140.2,274.9,0.293,0.293);
	this.circle_164.alpha = 0.699;

	this.circle_165 = new lib.spstar();
	this.circle_165.setTransform(35.2,464,0.293,0.293);
	this.circle_165.alpha = 0.699;

	this.circle_166 = new lib.spstar();
	this.circle_166.setTransform(99.5,391.2,0.293,0.293);
	this.circle_166.alpha = 0.699;

	this.circle_167 = new lib.spstar();
	this.circle_167.setTransform(145.7,523.7,0.293,0.293);
	this.circle_167.alpha = 0.699;

	this.circle_168 = new lib.spstar();
	this.circle_168.setTransform(63.4,412.1,0.293,0.293);
	this.circle_168.alpha = 0.699;

	this.circle_169 = new lib.spstar();
	this.circle_169.setTransform(206.1,538.9,0.293,0.293);
	this.circle_169.alpha = 0.699;

	this.circle_170 = new lib.spstar();
	this.circle_170.setTransform(99.5,433.1,0.293,0.293);
	this.circle_170.alpha = 0.699;

	this.circle_171 = new lib.spstar();
	this.circle_171.setTransform(222.7,345.5,0.293,0.293);
	this.circle_171.alpha = 0.699;

	this.circle_172 = new lib.spstar();
	this.circle_172.setTransform(331.6,428,0.293,0.293);
	this.circle_172.alpha = 0.699;

	this.circle_173 = new lib.spstar();
	this.circle_173.setTransform(236.6,434,0.293,0.293);
	this.circle_173.alpha = 0.699;

	this.circle_174 = new lib.spstar();
	this.circle_174.setTransform(255.3,464,0.293,0.293);
	this.circle_174.alpha = 0.699;

	this.circle_175 = new lib.spstar();
	this.circle_175.setTransform(140.2,474.8,0.293,0.293);
	this.circle_175.alpha = 0.699;

	this.circle_176 = new lib.spstar();
	this.circle_176.setTransform(130.2,211.2,0.293,0.293);
	this.circle_176.alpha = 0.699;

	this.circle_177 = new lib.spstar();
	this.circle_177.setTransform(638.5,344.2,0.293,0.293);
	this.circle_177.alpha = 0.699;

	this.instance_49 = new lib.spstar();
	this.instance_49.setTransform(650.7,240.1,0.293,0.293,0,0,0,4.8,5.5);
	this.instance_49.alpha = 0.699;

	this.circle_178 = new lib.spstar();
	this.circle_178.setTransform(669.8,272.9,0.293,0.293);
	this.circle_178.alpha = 0.699;

	this.circle_179 = new lib.spstar();
	this.circle_179.setTransform(683.7,211.2,0.293,0.293);
	this.circle_179.alpha = 0.699;

	this.circle_180 = new lib.spstar();
	this.circle_180.setTransform(623.9,377.9,0.293,0.293);
	this.circle_180.alpha = 0.699;

	this.circle_181 = new lib.spstar();
	this.circle_181.setTransform(599.7,200.6,0.293,0.293);
	this.circle_181.alpha = 0.699;

	this.circle_182 = new lib.spstar();
	this.circle_182.setTransform(619.2,233.2,0.293,0.293);
	this.circle_182.alpha = 0.699;

	this.instance_50 = new lib.spstar();
	this.instance_50.setTransform(504.4,296.4,0.293,0.293,0,0,0,6,4.5);
	this.instance_50.alpha = 0.699;

	this.circle_183 = new lib.spstar();
	this.circle_183.setTransform(458.9,269.1,0.293,0.293);
	this.circle_183.alpha = 0.699;

	this.circle_184 = new lib.spstar();
	this.circle_184.setTransform(609,153.1,0.293,0.293);
	this.circle_184.alpha = 0.699;

	this.circle_185 = new lib.spstar();
	this.circle_185.setTransform(630.8,415.2,0.293,0.293);
	this.circle_185.alpha = 0.699;

	this.circle_186 = new lib.spstar();
	this.circle_186.setTransform(417.1,257.2,0.293,0.293);
	this.circle_186.alpha = 0.699;

	this.circle_187 = new lib.spstar();
	this.circle_187.setTransform(498.3,263.3,0.293,0.293);
	this.circle_187.alpha = 0.699;

	this.instance_51 = new lib.spstar();
	this.instance_51.setTransform(522.1,171.1,0.293,0.293,0,0,0,4.6,5.1);
	this.instance_51.alpha = 0.699;

	this.circle_188 = new lib.spstar();
	this.circle_188.setTransform(725.6,380.9,0.293,0.293);
	this.circle_188.alpha = 0.699;

	this.circle_189 = new lib.spstar();
	this.circle_189.setTransform(610.9,324.9,0.293,0.293);
	this.circle_189.alpha = 0.699;

	this.circle_190 = new lib.spstar();
	this.circle_190.setTransform(407,211.2,0.293,0.293);
	this.circle_190.alpha = 0.699;

	this.circle_191 = new lib.spstar();
	this.circle_191.setTransform(373.8,189,0.293,0.293);
	this.circle_191.alpha = 0.699;

	this.circle_192 = new lib.spstar();
	this.circle_192.setTransform(498.3,334.9,0.293,0.293);
	this.circle_192.alpha = 0.699;

	this.instance_52 = new lib.spstar();
	this.instance_52.setTransform(366.7,281.6,0.293,0.293,0,0,0,6,7);
	this.instance_52.alpha = 0.699;

	this.circle_193 = new lib.spstar();
	this.circle_193.setTransform(322.4,263.3,0.293,0.293);
	this.circle_193.alpha = 0.699;

	this.circle_194 = new lib.spstar();
	this.circle_194.setTransform(638.5,301.7,0.293,0.293);
	this.circle_194.alpha = 0.699;

	this.circle_195 = new lib.spstar();
	this.circle_195.setTransform(554.9,159,0.293,0.293);
	this.circle_195.alpha = 0.699;

	this.circle_196 = new lib.spstar();
	this.circle_196.setTransform(468.2,312.5,0.293,0.293);
	this.circle_196.alpha = 0.699;

	this.circle_197 = new lib.spstar();
	this.circle_197.setTransform(574,224.6,0.293,0.293);
	this.circle_197.alpha = 0.699;

	this.circle_198 = new lib.spstar();
	this.circle_198.setTransform(550.8,200.6,0.293,0.293);
	this.circle_198.alpha = 0.699;

	this.circle_199 = new lib.spstar();
	this.circle_199.setTransform(518.2,228,0.293,0.293);
	this.circle_199.alpha = 0.699;

	this.circle_200 = new lib.spstar();
	this.circle_200.setTransform(334.6,211.2,0.293,0.293);
	this.circle_200.alpha = 0.699;

	this.circle_201 = new lib.spstar();
	this.circle_201.setTransform(547.2,396.9,0.293,0.293);
	this.circle_201.alpha = 0.699;

	this.circle_202 = new lib.spstar();
	this.circle_202.setTransform(534.8,257.2,0.293,0.293);
	this.circle_202.alpha = 0.699;

	this.circle_203 = new lib.spstar();
	this.circle_203.setTransform(432.8,172.2,0.293,0.293);
	this.circle_203.alpha = 0.699;

	this.circle_204 = new lib.spstar();
	this.circle_204.setTransform(422.3,383.1,0.293,0.293);
	this.circle_204.alpha = 0.699;

	this.circle_205 = new lib.spstar();
	this.circle_205.setTransform(574,415.2,0.293,0.293);
	this.circle_205.alpha = 0.699;

	this.circle_206 = new lib.spstar();
	this.circle_206.setTransform(537.3,322.4,0.293,0.293);
	this.circle_206.alpha = 0.699;

	this.circle_207 = new lib.spstar();
	this.circle_207.setTransform(582.8,280.5,0.293,0.293);
	this.circle_207.alpha = 0.699;

	this.circle_208 = new lib.spstar();
	this.circle_208.setTransform(456.1,228,0.293,0.293);
	this.circle_208.alpha = 0.699;

	this.instance_53 = new lib.spstar();
	this.instance_53.setTransform(372.9,323.8,0.293,0.293,0,0,0,6.5,4.6);
	this.instance_53.alpha = 0.699;

	this.circle_209 = new lib.spstar();
	this.circle_209.setTransform(562.2,312.5,0.293,0.293);
	this.circle_209.alpha = 0.699;

	this.circle_210 = new lib.spstar();
	this.circle_210.setTransform(521,392.2,0.293,0.293);
	this.circle_210.alpha = 0.699;

	this.circle_211 = new lib.spstar();
	this.circle_211.setTransform(479,180.7,0.293,0.293);
	this.circle_211.alpha = 0.699;

	this.circle_212 = new lib.spstar();
	this.circle_212.setTransform(373.8,362.5,0.293,0.293);
	this.circle_212.alpha = 0.699;

	this.circle_213 = new lib.spstar();
	this.circle_213.setTransform(438.4,296.4,0.293,0.293);
	this.circle_213.alpha = 0.699;

	this.circle_214 = new lib.spstar();
	this.circle_214.setTransform(483.9,429.6,0.293,0.293);
	this.circle_214.alpha = 0.699;

	this.circle_215 = new lib.spstar();
	this.circle_215.setTransform(401.7,317.7,0.293,0.293);
	this.circle_215.alpha = 0.699;

	this.circle_216 = new lib.spstar();
	this.circle_216.setTransform(561,362.5,0.293,0.293);
	this.circle_216.alpha = 0.699;

	this.circle_217 = new lib.spstar();
	this.circle_217.setTransform(438.4,338.4,0.293,0.293);
	this.circle_217.alpha = 0.699;

	this.circle_218 = new lib.spstar();
	this.circle_218.setTransform(562.2,251.4,0.293,0.293);
	this.circle_218.alpha = 0.699;

	this.circle_219 = new lib.spstar();
	this.circle_219.setTransform(669.8,333.4,0.293,0.293);
	this.circle_219.alpha = 0.699;

	this.circle_220 = new lib.spstar();
	this.circle_220.setTransform(575.3,340.1,0.293,0.293);
	this.circle_220.alpha = 0.699;

	this.circle_221 = new lib.spstar();
	this.circle_221.setTransform(594.7,370.1,0.293,0.293);
	this.circle_221.alpha = 0.699;

	this.circle_222 = new lib.spstar();
	this.circle_222.setTransform(479,380.9,0.293,0.293);
	this.circle_222.alpha = 0.699;

	this.circle_223 = new lib.spstar();
	this.circle_223.setTransform(468.2,116.6,0.293,0.293);
	this.circle_223.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.circle_223},{t:this.circle_222},{t:this.circle_221},{t:this.circle_220},{t:this.circle_219},{t:this.circle_218},{t:this.circle_217},{t:this.circle_216},{t:this.circle_215},{t:this.circle_214},{t:this.circle_213},{t:this.circle_212},{t:this.circle_211},{t:this.circle_210},{t:this.circle_209},{t:this.instance_53},{t:this.circle_208},{t:this.circle_207},{t:this.circle_206},{t:this.circle_205},{t:this.circle_204},{t:this.circle_203},{t:this.circle_202},{t:this.circle_201},{t:this.circle_200},{t:this.circle_199},{t:this.circle_198},{t:this.circle_197},{t:this.circle_196},{t:this.circle_195},{t:this.circle_194},{t:this.circle_193},{t:this.instance_52},{t:this.circle_192},{t:this.circle_191},{t:this.circle_190},{t:this.circle_189},{t:this.circle_188},{t:this.instance_51},{t:this.circle_187},{t:this.circle_186},{t:this.circle_185},{t:this.circle_184},{t:this.circle_183},{t:this.instance_50},{t:this.circle_182},{t:this.circle_181},{t:this.circle_180},{t:this.circle_179},{t:this.circle_178},{t:this.instance_49},{t:this.circle_177},{t:this.circle_176},{t:this.circle_175},{t:this.circle_174},{t:this.circle_173},{t:this.circle_172},{t:this.circle_171},{t:this.circle_170},{t:this.circle_169},{t:this.circle_168},{t:this.circle_167},{t:this.circle_166},{t:this.circle_165},{t:this.circle_164},{t:this.circle_163},{t:this.circle_162},{t:this.instance_48},{t:this.circle_161},{t:this.circle_160},{t:this.circle_159},{t:this.circle_158},{t:this.circle_157},{t:this.circle_156},{t:this.circle_155},{t:this.circle_154},{t:this.circle_153},{t:this.circle_152},{t:this.circle_151},{t:this.circle_150},{t:this.circle_149},{t:this.circle_148},{t:this.instance_47},{t:this.circle_147},{t:this.circle_146},{t:this.circle_145},{t:this.circle_144},{t:this.circle_143},{t:this.instance_46},{t:this.circle_142},{t:this.circle_141},{t:this.circle_140},{t:this.circle_139},{t:this.circle_138},{t:this.instance_45},{t:this.circle_137},{t:this.circle_136},{t:this.circle_135},{t:this.circle_134},{t:this.circle_133},{t:this.instance_44},{t:this.circle_132},{t:this.circle_131},{t:this.circle_130},{t:this.circle_129},{t:this.circle_128},{t:this.circle_127},{t:this.circle_126},{t:this.circle_125},{t:this.circle_124},{t:this.circle_123},{t:this.circle_122},{t:this.circle_121},{t:this.circle_120},{t:this.circle_119},{t:this.circle_118},{t:this.instance_43},{t:this.circle_117},{t:this.circle_116},{t:this.circle_115},{t:this.instance_42},{t:this.circle_114},{t:this.circle_113},{t:this.circle_112},{t:this.circle_111},{t:this.circle_110},{t:this.circle_109},{t:this.circle_108},{t:this.circle_107},{t:this.circle_106},{t:this.circle_105},{t:this.circle_104},{t:this.circle_103},{t:this.circle_102},{t:this.circle_101},{t:this.circle_100},{t:this.circle_99},{t:this.circle_98},{t:this.circle_97},{t:this.circle_96},{t:this.circle_95},{t:this.circle_94},{t:this.circle_93},{t:this.circle_92},{t:this.circle_91},{t:this.circle_90},{t:this.circle_89},{t:this.instance_41},{t:this.circle_88},{t:this.circle_87},{t:this.circle_86},{t:this.circle_85},{t:this.circle_84},{t:this.circle_83},{t:this.circle_82},{t:this.circle_81},{t:this.instance_40},{t:this.circle_80},{t:this.circle_79},{t:this.circle_78},{t:this.circle_77},{t:this.circle_76},{t:this.instance_39},{t:this.circle_75},{t:this.circle_74},{t:this.circle_73},{t:this.circle_72},{t:this.circle_71},{t:this.circle_70},{t:this.circle_69},{t:this.circle_68},{t:this.circle_67},{t:this.circle_66},{t:this.circle_65},{t:this.circle_64},{t:this.circle_63},{t:this.circle_62},{t:this.instance_38},{t:this.circle_61},{t:this.circle_60},{t:this.circle_59},{t:this.circle_58},{t:this.circle_57},{t:this.circle_56},{t:this.circle_55},{t:this.circle_54},{t:this.circle_53},{t:this.circle_52},{t:this.instance_37},{t:this.circle_51},{t:this.circle_50},{t:this.circle_49},{t:this.circle_48},{t:this.instance_36},{t:this.circle_47},{t:this.circle_46},{t:this.circle_45},{t:this.circle_44},{t:this.instance_35},{t:this.circle_43},{t:this.circle_42},{t:this.circle_41},{t:this.instance_34},{t:this.circle_40},{t:this.circle_39},{t:this.circle_38},{t:this.circle_37},{t:this.circle_36},{t:this.circle_35},{t:this.circle_34},{t:this.circle_33},{t:this.circle_32},{t:this.circle_31},{t:this.circle_30},{t:this.circle_29},{t:this.circle_28},{t:this.circle_27},{t:this.circle_26},{t:this.instance_33},{t:this.circle_25},{t:this.circle_24},{t:this.circle_23},{t:this.instance_32},{t:this.circle_22},{t:this.circle_21},{t:this.circle_20},{t:this.circle_19},{t:this.circle_18},{t:this.instance_31},{t:this.instance_30},{t:this.circle_17},{t:this.circle_16},{t:this.instance_29},{t:this.instance_28},{t:this.circle_15},{t:this.circle_14},{t:this.circle_13},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.circle_12},{t:this.instance_24},{t:this.circle_11},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.circle_10},{t:this.instance_17},{t:this.instance_16},{t:this.circle_9},{t:this.instance_15},{t:this.circle_8},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.circle_7},{t:this.circle_6},{t:this.instance_10},{t:this.circle_5},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.circle_4},{t:this.circle_3},{t:this.instance_6},{t:this.circle_2},{t:this.instance_5},{t:this.instance_4},{t:this.circle_1},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.circle},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2.5,960.4,544);


(lib.spgreenplanet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// P2
	this.instance = new lib.spgreenP2();
	this.instance.setTransform(89.6,-72.5,1,1,0,0,0,9.6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:74.2,y:-71.8},0).wait(1).to({x:57,y:-70.6},0).wait(1).to({x:40.5,y:-68.7},0).wait(1).to({x:24,y:-65.7},0).wait(1).to({x:7.9,y:-60},0).wait(1).to({x:1.6,y:-50},0).wait(1).to({x:7.4,y:-35.4},0).wait(1).to({x:21.2,y:-22.4},0).wait(1).to({x:34.1,y:-13.6},0).wait(1).to({x:49.3,y:-5.2},0).wait(1).to({x:64.1,y:2.4},0).wait(1).to({x:77.6,y:8.7},0).wait(1).to({x:94.4,y:13.7},0).wait(1).to({x:110.4,y:18.1},0).wait(1).to({x:126.5,y:22.6},0).wait(1).to({x:143.4,y:27.3},0).wait(1).to({x:157.6,y:31.2},0).wait(1).to({x:174.2,y:35},0).wait(1).to({x:191.1,y:38.3},0).wait(1).to({x:206.5,y:40.9},0).wait(1).to({x:222.8,y:43.3},0).wait(1).to({x:239.1,y:45.5},0).wait(1).to({x:255.7,y:47.6},0).wait(1).to({x:271.6,y:49.1},0).wait(1));

	// P1
	this.instance_1 = new lib.spgreenP1();
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


(lib.spblueplanet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.spplanentring();
	this.instance.setTransform(0.1,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:7.5,x:0,y:1},0).wait(1).to({rotation:15,y:0.7},0).wait(1).to({rotation:22.5,y:0.5},0).wait(1).to({rotation:30,y:0.2},0).wait(1).to({rotation:37.5,y:0},0).wait(1).to({rotation:45,y:-0.3},0).wait(1).to({rotation:52.5,x:-0.1,y:-0.5},0).wait(1).to({rotation:60,y:-0.8},0).wait(1).to({rotation:67.5,y:-1},0).wait(1).to({rotation:75,y:-1.3},0).wait(1).to({rotation:82.5,y:-1.5},0).wait(1).to({rotation:90,y:-1.8},0).wait(1).to({rotation:82.5,y:-1.5},0).wait(1).to({rotation:75,y:-1.3},0).wait(1).to({rotation:67.5,y:-1},0).wait(1).to({rotation:60,y:-0.8},0).wait(1).to({rotation:52.5,y:-0.5},0).wait(1).to({rotation:45,x:0,y:-0.3},0).wait(1).to({rotation:37.5,y:0},0).wait(1).to({rotation:30,y:0.2},0).wait(1).to({rotation:22.5,y:0.5},0).wait(1).to({rotation:15,y:0.7},0).wait(1).to({rotation:7.5,y:1},0).wait(1).to({rotation:0,x:0.1,y:1.2},0).wait(1));

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,178,196,0.8)").s().p("AhDB5QgygyAAhHQAAhGAygyQAzgzBFAAQAOAAAMACQAnBNAABcQAABdgnBNIgaACQhFAAgzgzg");
	this.shape.setTransform(-5.2,-0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(25));

	// bluebody
	this.instance_1 = new lib.spbluebody();
	this.instance_1.setTransform(0.2,-0.9,0.997,0.997,29.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.3,-24.3,46.9,46.9);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path();
	this.instance.setTransform(36.1,9.4,1,1,0,0,0,35.9,9.4);
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.2,0,71.8,18.9);


(lib.spflag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_2();
	this.instance.setTransform(36.4,31.7,1,1,0,0,0,2.2,1.4);
	this.instance.alpha = 0.102;

	this.instance_1 = new lib.Path_0();
	this.instance_1.setTransform(-22.6,12.6,1,1,0,0,0,10.2,12.5);
	this.instance_1.alpha = 0.102;

	this.instance_2 = new lib.Group_1();
	this.instance_2.setTransform(-7.3,47.6,1,1,0,0,0,36,9.4);
	this.instance_2.alpha = 0.102;

	this.instance_3 = new lib.Path_1();
	this.instance_3.setTransform(31.1,53.3,1,1,0,0,0,2.2,1.5);
	this.instance_3.alpha = 0.102;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3F8EB").s().p("AAEAzIgGgkIgXAcIgCAAIgcgHIAqgnIgSg2IAdAHIAFAhIAAABIABAAIAWgbIAeAHIgpAnIASA3g");
	this.shape.setTransform(19,30.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3F8EB").s().p("AAfBhIAgh1IgBgBIhEBtIgbgHIgMh+IgBAAIgYB2IgogKIAoioIA1AMIAKB+IAAABIBChsIA0AMIgoCog");
	this.shape_1.setTransform(2.6,30.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#008A94").s().p("AgWAsIAogqIgSg0IAHACIAQAwIgoAnIAaAHIgDAFg");
	this.shape_2.setTransform(15.2,30);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#008A94").s().p("AgJAQIgIggIAFgGIAIAiIAUAFIACAGg");
	this.shape_3.setTransform(20.1,34.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#008A94").s().p("AgKBAIgJhgIAHglIABAAIALB+IAUAFIgFAIg");
	this.shape_4.setTransform(-0.8,33.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#008A94").s().p("AgUA6IAZhkIAPgYIABAAIgeB1IAdAIIgCAIg");
	this.shape_5.setTransform(6.8,35.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#008A94").s().p("AgeAzIgBgJIA5hcIAFABIg8Bkg");
	this.shape_6.setTransform(4.8,28.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#008A94").s().p("AgXBQIAnipIAIACIgkCgIAdAHIgCAJg");
	this.shape_7.setTransform(-7.2,29.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00B2C4").s().p("AmlBxIEhiSIi4j7ILBCqIgSBMIAzAMIgOA3IgzgMIgnCeIAzAMIgOA5IgzgMIgNA1g");
	this.shape_8.setTransform(-1.1,28.5);

	this.instance_4 = new lib.Path_3();
	this.instance_4.setTransform(19.1,90.4,1,1,0,0,0,20.1,79.7);
	this.instance_4.alpha = 0.102;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F79736").s().p("AjeMSIGD4xIA6AOImEYxg");
	this.shape_9.setTransform(21,90.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.instance_4},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.3,0,86.6,170.8);


(lib.spastro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F79736").s().p("AAYBBIgYgvIgZAvIgeAAIAohBIgnhAIAeAAIAYAuIAXguIAfAAIgnBAIApBBg");
	this.shape.setTransform(81.5,157.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F79736").s().p("AgjAqQgIgIAAgOQAAgOALgGQALgIAVAAIANAAIAAgHQAAgHgEgEQgDgEgGAAQgGAAgDADQgEADAAAGIgZAAIAAgBQgBgMALgJQALgJARAAQASAAAKAJQAMAJAAAQIABAzIADAMIgbAAIgCgHIgBgHQgGAHgGAEQgDAFgKAAQgPAAgJgIgAgMAJQgFAFAAAFQAAAGADACQAEADAFABQAFAAAGgEQAEgDADgFIAAgNIgNAAQgHAAgFADg");
	this.shape_1.setTransform(65.1,159);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F79736").s().p("AgLBGIAAhgIAYAAIAABggAgLgxIAAgUIAYAAIAAAUg");
	this.shape_2.setTransform(57.2,156.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F79736").s().p("AAaBBIAAg3IgzAAIAAA3IgbAAIAAiBIAbAAIAAA4IAzAAIAAg4IAbAAIAACBg");
	this.shape_3.setTransform(47.7,157.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F79736").s().p("AgMBBIAAhtIglAAIAAgUIBjAAIAAAUIglAAIAABtg");
	this.shape_4.setTransform(35.4,157.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F79736").s().p("AAfBBIgJgcIgsAAIgJAcIgaAAIAtiBIAZAAIAtCBgAgPAQIAfAAIgQgxIAAAAg");
	this.shape_5.setTransform(23.8,157.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F79736").s().p("AAqBBIAChfIgBAAIgjBfIgQAAIgjhfIAAAAIACBfIgaAAIAAiBIAiAAIAhBeIAAAAIAiheIAiAAIAACBg");
	this.shape_6.setTransform(9.3,157.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(30));

	// Layer 2
	this.instance = new lib.Path_7();
	this.instance.setTransform(-15.5,257.4,1,1,0,0,0,11,17.1);
	this.instance.alpha = 0.102;

	this.instance_1 = new lib.Path_1_0();
	this.instance_1.setTransform(113.5,158.6,1,1,0,0,0,14.8,33.2);
	this.instance_1.alpha = 0.102;

	this.instance_2 = new lib.Path_2_0();
	this.instance_2.setTransform(61.4,230.9,1,1,0,0,0,14,43.6);
	this.instance_2.alpha = 0.102;

	this.instance_3 = new lib.Path_3_0();
	this.instance_3.setTransform(-28.4,103.9,1,1,0,0,0,9.8,9.2);
	this.instance_3.alpha = 0.102;

	this.instance_4 = new lib.Path_4_0();
	this.instance_4.setTransform(-7.9,171.6,1,1,0,0,0,12.3,68.7);
	this.instance_4.alpha = 0.102;

	this.instance_5 = new lib.Path_5();
	this.instance_5.setTransform(20.7,46.8,1,1,0,0,0,25.9,46.8);
	this.instance_5.alpha = 0.102;

	this.instance_6 = new lib.Path_6();
	this.instance_6.setTransform(-59.1,132.2,1,1,0,0,0,21.9,19.2);
	this.instance_6.alpha = 0.102;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABiB6QgJAAgHgGQgHgFgDgJQgQhAgxgsQguguhBgPQgLgCgGgJQgGgKACgLIAAAAQACgLAKgGQAKgGALACQBQASA6A5QA7A3AVBPQADAMgIALQgJAKgNAAg");
	this.shape_7.setTransform(59.8,32.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00B2C4").s().p("ApOAtQgTAAgOgOQgNgNAAgSQAAgSANgNQAOgNATAAISeAAQATAAANANQANANAAASQAAASgNANQgNAOgTAAg");
	this.shape_8.setTransform(43.6,182.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00B2C4").s().p("AjSAeQgMAAgIgJQgKgJAAgMQAAgLAKgJQAIgIAMgBIGkAAQANABAJAIQAIAJABALQgBAMgIAJQgJAJgNAAg");
	this.shape_9.setTransform(17.6,228.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00B2C4").s().p("AjRAeQgNAAgJgJQgIgJgBgMQABgLAIgJQAJgIANgBIGjAAQAMABAJAIQAKAJAAALQAAAMgKAJQgJAJgMAAg");
	this.shape_10.setTransform(71.5,228.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00B2C4").s().p("Ai3AbQgLAAgIgIQgIgIAAgLQAAgJAIgJQAIgIALAAIFvAAQALAAAIAIQAIAJAAAJQAAALgIAIQgIAIgLAAg");
	this.shape_11.setTransform(120,162);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6D6D6E").s().p("AitAbQgMAAgHgIQgJgIABgLQgBgJAJgJQAIgIALAAIFbAAQALAAAJAIQAIAJAAAJQAAALgIAIQgJAIgLAAg");
	this.shape_12.setTransform(51.5,122.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6D6D6E").s().p("AitAbQgLAAgIgIQgJgIABgLQgBgKAJgIQAIgIALAAIFbAAQALAAAJAIQAIAIAAAKQAAALgIAIQgJAIgLAAg");
	this.shape_13.setTransform(51.5,108.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#911356").s().p("AgiAjQgPgPAAgUQAAgTAPgPQAOgPAUAAQAUAAAQAPQAOAPAAATQAAAUgOAPQgQAPgUAAQgUAAgOgPg");
	this.shape_14.setTransform(22.8,122.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00B2C4").s().p("AgiAjQgPgPAAgUQAAgTAPgPQAPgPATAAQAUAAAPAPQAPAPAAATQAAAUgPAPQgPAPgUAAQgTAAgPgPg");
	this.shape_15.setTransform(23.7,108.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00B2C4").s().p("AlQDRQgZAAgQgSQgQgSACgYIAik0QADgVAPgOQAQgOAVAAIJXAGQAVAAAQAOQAPAOADAUIAnEuQADAYgQATQgQASgaAAgAFQCbIgnkuIpXgGIgiE0IKgAAg");
	this.shape_16.setTransform(43.5,116.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AlPCbIAhk1IJXAGIAoEvgAjyAVQgPAPAAAVQAAAUAPAQQAPAOAVAAQAVAAAPgOQAPgQAAgUQAAgVgPgPQgPgPgVAAQgVAAgPAPgAhxAsQgIAJAAALQAAALAIAIQAIAIAMAAIFaAAQAMAAAIgIQAIgIAAgLQAAgLgIgJQgIgIgMAAIlaAAQgLAAgJAIgAjohuQgPAPAAAVQAAAVAPAPQAPAPAUAAQAWAAAOgPQAPgPABgVQgBgVgPgPQgOgOgWAAQgUAAgPAOgAhxheQgIAIAAALQAAAMAIAIQAJAIALAAIFaAAQAMAAAIgIQAIgIAAgMQAAgLgIgIQgIgIgMAAIlaAAQgLAAgJAIg");
	this.shape_17.setTransform(43.5,116.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00B2C4").s().p("AgUCgIg2ktQgBgFADgFQACgEAFgCIAFgBIB5AAQADAAAEACQAIAFgBAKIhVEsIAAABg");
	this.shape_18.setTransform(99.8,109.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00B2C4").s().p("AADC0IhMlWIAAgGQABgFADgDQAEgDAFAAIB5AAQADAAACACQAKAEgBALIg/FWIAAAAg");
	this.shape_19.setTransform(-12,111.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00B2C4").s().p("AgrDAIgIgDQgFgDgDgFQgEgHAAgIIAelWQAAgJAJgEQAEgCADAAIAFAAQADgBAGADQAFAEABAIIA9FUQABAFgCAEQgCAJgHAFQgGAFgJABIhLABg");
	this.shape_20.setTransform(-37.8,131.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00B2C4").s().p("AiCBhQgQAAgCgEQgBgDAAgLIgBgIQAAgGAEgDIDxieQAMgIAJAKQADAEACAGIAdCmQABAHgFAGQgFAGgHAAg");
	this.shape_21.setTransform(120,124.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F3F8EB").s().p("AihCCIBXktQABgJgIgFIAAgBIDzDUQgHgFgKAGIjxCgg");
	this.shape_22.setTransform(114.9,112.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F3F8EB").s().p("AiTB9IAAj5QADAFAPgBIEIAEQAIAAAFgGIAAD3g");
	this.shape_23.setTransform(119.8,146.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F3F8EB").s().p("Ag/EHIg9lUQAAgHgHgEIC5i4IAAAGIBOFXIjDDEQABgEgBgGg");
	this.shape_24.setTransform(-24.9,121.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00B2C4").s().p("AiLCFQgIgIAAgLQABgMAIgIIDvjjQAIgIALABQAMAAAIAIQAIAIgBALQAAAMgIAIIjvDjQgIAHgLAAQgNAAgHgIg");
	this.shape_25.setTransform(-66.2,107.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F3F8EB").s().p("Airg2IDPjGICICHQgIAFAAAIIgeFXQgBAIAFAGg");
	this.shape_26.setTransform(-57.6,124.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F3F8EB").s().p("AodN6IAAnmIA/lYQACgLgKgEIAAAAIAAnHQACjHCQiMQCQiMDJAAQDKAACQCMQCPCMACDHIAAHHQgFABgCAFQgCAEAAAFIA2EvIABAAIAAIPgAlTBNQgPAOgDAVIghE2QgDAZAQASQAQASAaAAIKgAAQAZAAAQgTQARgTgDgYIgokwQgCgUgQgOQgQgNgVAAIpXgHQgUAAgRAOgAlXhuIK5AAIAAknIgBAAIAAAAQAAiOhmhlQhmhliRAAIgBAAQiQgBhlBlQhkBkAACQIAAAAIgBAAg");
	this.shape_27.setTransform(43.5,89.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#338AC6").s().p("AitE/IAAknIABAAIAAAAQAAiOBkhkQBkhlCSABQg8C4AYD0QAMB7AYBWg");
	this.shape_28.setTransform(26.4,46);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1BABDD").s().p("AiZE/QgYhWgMh7QgYj0A8i4IABAAQCRAABkBlQBmBlAACMIAAAAIABAAIAAEng");
	this.shape_29.setTransform(59.3,46);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F3F8EB").s().p("AjFC8IAAl4IGLAAIAAF4g");
	this.shape_30.setTransform(17.1,206.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F3F8EB").s().p("Ah+DYQhJAAg0gyQg0gxAAhHQAAhEAzgyQAzgyBIgBIBXAAIAAhcIFYAAIAADsQACAKAAAPQAABFgyAyQgxAxhIACg");
	this.shape_31.setTransform(3.9,252.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F3F8EB").s().p("Ah/DYQhJAAgzgyQg0gxAAhHIABgIIAAj9IFXAAIAABcIBXAAQBJAAAzAyQA0AyAABFQAABFgyAyQgyAxhHACg");
	this.shape_32.setTransform(83.8,252.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F3F8EB").s().p("AjFC8IAAl4IGLAAIAAF4g");
	this.shape_33.setTransform(70.7,206.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F3F8EB").s().p("Ag6B2QgwgqgHg/QgiAEgagUQgYgVgDgfQgDggAUgXQALgMAOgHIAAgIIB9gBQAhgRAlgBQAnAAAjASIAdgBIAAATIAFAEQAyArAGBBQAGA/grAwQgqAxhBAFIgLAAQg5AAgvgng");
	this.shape_34.setTransform(121.1,176.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F3F8EB").s().p("AifAtICoiSQAIgWAUgPQAVgOAZAAQAfAAAYAWQAXAXgBAfQABAPgHAPIAFAGIjgDBg");
	this.shape_35.setTransform(-72.6,99.8);

	this.instance_7 = new lib.Path_4();
	this.instance_7.setTransform(-87.4,98.3,1,1,0,0,0,9.8,15.6);
	this.instance_7.alpha = 0.102;

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F3F8EB").s().p("AhwBtQgvgtAAhAQAAg/AvgtQAvguBBAAQBCAAAvAuQAvAtAAA/QAABAgvAtQgvAuhCAAQhBAAgvgug");
	this.shape_36.setTransform(-81.1,98.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.instance_7},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(30));

	// Layer 1
	this.flag1 = new lib.spflag();
	this.flag1.setTransform(-80.2,97,0.999,0.999,9.8,0,0,17.8,97);

	this.timeline.addTween(cjs.Tween.get(this.flag1).wait(1).to({regX:0,regY:85.4,rotation:7.4,x:-96.3,y:83.3},0).wait(1).to({rotation:5,x:-96.8,y:83.9},0).wait(1).to({rotation:2.6,x:-97.3,y:84.6},0).wait(1).to({rotation:0.2,x:-97.8,y:85.4},0).wait(1).to({rotation:-2.2,x:-98.3,y:86.1},0).wait(1).to({rotation:-4.5,x:-98.8,y:86.9},0).wait(1).to({rotation:-6.9,x:-99.2,y:87.7},0).wait(1).to({rotation:-9.3,x:-99.5,y:88.4},0).wait(1).to({rotation:-11.7,x:-99.9,y:89.2},0).wait(1).to({rotation:-14.1,x:-100.2,y:90.1},0).wait(1).to({rotation:-16.5,x:-100.5,y:90.9},0).wait(1).to({rotation:-18.9,x:-100.7,y:91.8},0).wait(1).to({rotation:-21.3,x:-100.9,y:92.6},0).wait(1).to({rotation:-23.7,x:-101,y:93.5},0).wait(1).to({rotation:-20.7,x:-100.8,y:92.4},0).wait(1).to({rotation:-17.7,x:-100.6,y:91.3},0).wait(1).to({rotation:-14.7,x:-100.2,y:90.2},0).wait(1).to({rotation:-11.7,x:-99.9,y:89.2},0).wait(1).to({rotation:-8.6,x:-99.4,y:88.2},0).wait(1).to({rotation:-5.6,x:-98.9,y:87.2},0).wait(1).to({rotation:-2.6,x:-98.4,y:86.2},0).wait(1).to({rotation:0.4,x:-97.8,y:85.3},0).wait(1).to({rotation:3.4,x:-97.2,y:84.4},0).wait(1).to({rotation:6.4,x:-96.5,y:83.5},0).wait(1).to({rotation:9.4,x:-95.8,y:82.7},0).wait(1).to({rotation:12.4,x:-95,y:81.9},0).wait(1).to({rotation:15.4,x:-94.2,y:81.2},0).wait(1).to({rotation:18.4,x:-93.3,y:80.5},0).wait(1).to({rotation:21.4,x:-92.5,y:79.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.5,-8.8,274.8,283.3);


// stage content:



(lib.splashnoloading = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// bar
	this.instance = new lib.sploadingfill("synched",0);
	this.instance.setTransform(302,336.8,1,1,0,0,0,21,0);

	this.instance_1 = new lib.sploading();
	this.instance_1.setTransform(371.5,336.8,1,1,0,0,0,90.5,8.5);
	this.instance_1.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[]},25).wait(7));

	// Loading...
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004554").s().p("AgPAOIAAgbIAfAAIAAAbg");
	this.shape.setTransform(414.9,312.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004554").s().p("AgPAOIAAgbIAfAAIAAAbg");
	this.shape_1.setTransform(408.1,312.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004554").s().p("AgPAOIAAgbIAfAAIAAAbg");
	this.shape_2.setTransform(401.4,312.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004554").s().p("AgWBUQgLgCgJgEIAGgZIAQAFQAIADAJAAQAMgBAGgGQAHgFAAgMIAAgLQgGAGgHAEQgIAEgHAAQgXAAgMgQQgNgSAAgYIAAgDQAAgdANgSQAMgSAXAAQAIAAAIAFQAIAFAGAIIACgQIAdAAIAAB5QAAAYgQANQgPANgbAAQgJAAgKgDgAgPgyQgGAMAAARIAAADQAAAPAGAIQAFAKAKAAQAIgBAFgDQAGgCADgGIAAg0QgDgFgGgDQgFgDgHgBQgLAAgFALg");
	this.shape_3.setTransform(391.2,310.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004554").s().p("AAUA+IAAhLQAAgMgFgFQgFgGgKAAQgFAAgFADQgFADgEAFIAABXIghAAIAAh5IAfAAIABASQAGgKAJgFQAHgFAMAAQASAAALAMQAKALAAAZIAABLg");
	this.shape_4.setTransform(378.3,307.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004554").s().p("AgPBYIAAh5IAfAAIAAB5gAgPg+IAAgZIAfAAIAAAZg");
	this.shape_5.setTransform(368.7,305.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004554").s().p("AgpBJQgNgRAAgbIAAgCQAAgbANgSQANgTAWABQAHAAAIADQAHAEAFAIIAAhDIAiAAIAACvIgcAAIgDgPQgGAJgIAEQgIAEgIABQgWAAgNgRgAgPAAQgGAJAAASIAAACQAAAQAGAJQAFAKALAAQAGAAAGgDQAGgDACgFIAAg1QgCgFgGgCQgGgEgGAAQgKAAgGALg");
	this.shape_6.setTransform(358.7,305.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004554").s().p("AgsA2QgKgLAAgQQAAgTAOgIQANgJAbAAIARAAIAAgLQAAgIgFgFQgFgFgHAAQgIAAgEAEQgFAEAAAGIggAAIAAAAQgBgQAPgLQAOgLAVAAQAWAAAOALQAOALAAAUIAAAxQAAAJABAIIAEAPIghAAIgDgJIgCgJQgFAIgIAGQgHAHgLAAQgUAAgKgKgAgQAMQgFAGAAAHQAAAHAEADQAEAEAHAAQAHAAAGgEQAHgFADgFIAAgSIgRAAQgKAAgGAFg");
	this.shape_7.setTransform(346.1,308.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004554").s().p("AgpAuQgQgRAAgcIAAgBQAAgbAQgRQAPgTAaABQAbAAAPARQAQARAAAcIAAABQAAAcgQARQgPASgbAAQgaAAgPgSgAgRgaQgHAKAAAQIAAABQAAAQAGALQAGAKAMAAQAMAAAGgKQAGgLAAgQIAAgBQAAgQgGgKQgGgLgMAAQgMAAgFALg");
	this.shape_8.setTransform(333.3,308.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004554").s().p("Ag0BSIAAijIAhAAIAACKIBIAAIAAAZg");
	this.shape_9.setTransform(321.1,305.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},20).wait(12));

	// logo
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FFD948","#F97432"],[0,1],-52.5,0,26,0).s().p("Ah6AKICchBIA6AXQAhAPgCAOQgBADgEABIh+A3g");
	this.shape_10.setTransform(445.7,378.4,0.326,0.326);

	this.instance_2 = new lib.Path_1_1();
	this.instance_2.setTransform(443.6,377.4,0.326,0.326,0,0,0,10.5,4.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFD948").s().p("AFsDHQgHgLgWgKQoTjeh7g2QghgPgIgPQgHgLAAgjIAAgnQABAfAGALQAIAOAhAPQB7A2IWDjQATAHAGAHQAFAGAAAIIAAAgQAAAJgFAEIgDACQAKgFgGgKg");
	this.shape_11.setTransform(437.8,371.5,0.326,0.326);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#FFD948","#F97432"],[0,1],-42.7,0,60.4,0).s().p("AFrDIQgGgHgTgIQoWjih7g3QghgOgIgPQgHgMAAgjIAAgoILLExQAUAJAAAYIAABXQAAgIgFgFg");
	this.shape_12.setTransform(437.8,370,0.326,0.326);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4C98CE").s().p("AhaCvQgdgSAAgjQAAgoArgXQgWgNgBgZQAAgaAcgQQgtgZAAg0QAAgpAdgaQAdgaAxAAQAYABARAGIBYAAIAAAmIgkAAQANAXAAAZQAAApgcAaQgcAagwAAQgOAAgPgEQgNAIAAAIQAAAKALAEQALAEAXABQA8ADAUAJQArAQAAAyQAAAngmAYQgmAZg3AAQgyAAgcgRgAhCByQAAARAOAKQAPAMAcAAQAfAAAVgNQAUgMAAgTQAAgWgTgHQgKgEgigCQgWgBgRgDQgbARAAAbgAgwiJQgNAOAAAZQAAAZANAOQAPAOAYAAQAXAAAPgOQANgPAAgYQAAgZgNgOQgPgOgXAAQgYAAgPAOg");
	this.shape_13.setTransform(413.9,378,0.326,0.326);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4C98CE").s().p("AAyCBIAAilQAAgtgnAAQgdAAgeAnIAACrIg4AAIAAj7IA3AAIAAAiQAggoAvAAQAnAAATAXQARAVAAAkIAACxg");
	this.shape_14.setTransform(405,375.9,0.326,0.326);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4C98CE").s().p("AAyCBIAAilQAAgWgJgLQgJgMgVAAQggAAgbAnIAACrIg4AAIAAj7IA3AAIAAAiQAggoAvAAQAnAAATAXQARAVAAAkIAACxg");
	this.shape_15.setTransform(391.9,375.9,0.326,0.326);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4C98CE").s().p("AhLCBIAAj7IA4AAIAAAlQAXgrApAAQAVAAAKAGIgOAyQgKgFgOAAQgjAAgWAsIAACig");
	this.shape_16.setTransform(384.6,375.9,0.326,0.326);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4C98CE").s().p("AhRByQgVgUAAgfQAAguAsgWQAkgTA1AAIAKAAIAAgTQAAgVgJgKQgLgMgYAAQgWAAgTAKQgJAFgOAKIgbgjQApgkA2AAQAwAAAXAWQAYAWAAAuIAABlQAAAkAHAfIg3AAQgDgNgBgPQgLANgQAJQgUAMgZABQggAAgVgTgAgvA7QAAAPALAIQAJAIAOgBQAeAAAYgcIAAgzIgKAAQhOAAAAAxg");
	this.shape_17.setTransform(376.8,376.1,0.326,0.326);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4C98CE").s().p("AhPBfQgggkAAg7QAAg6AiglQAhglAyAAQA4ABAcAlQAbAmgGBAIikAAQACAlARAVQASAXAhAAQAjAAAhgUIATAnQgSAKgOAFQgbAKggAAQg6gBgiglgAgzgeIBsAAQgCg7gyAAQguAAgKA7g");
	this.shape_18.setTransform(368.4,376.1,0.326,0.326);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4C98CE").s().p("AhfCuIAAlbIA8AAIAAErICDAAIAAAwg");
	this.shape_19.setTransform(360.9,374.5,0.326,0.326);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4C98CE").s().p("AhPBfQgggkAAg7QAAg6AiglQAhglAzAAQA3ABAcAlQAbAmgGBAIikAAQACAlARAVQATAXAgAAQAjAAAhgUIATAnQgSALgOAEQgbAKggAAQg6gBgiglgAgzgeIBsAAQgBgbgLgOQgNgSgaAAQgvAAgKA7g");
	this.shape_20.setTransform(347.6,376.1,0.326,0.326);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4C98CE").s().p("AgaC1IAAj7IA2AAIAAD7gAgYh4QgLgKAAgPQAAgOALgLQAKgKAOAAQAPAAAKAKQALAKAAAPQAAAPgLAKQgKALgPAAQgOAAgKgLg");
	this.shape_21.setTransform(398.5,374.3,0.326,0.326);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4C98CE").s().p("AgaC1IAAj7IA2AAIAAD7gAgYh4QgLgKAAgPQAAgOALgLQAKgKAOAAQAPAAAKAKQALAKAAAPQAAAPgLAKQgKALgPAAQgOAAgKgLg");
	this.shape_22.setTransform(341.1,374.3,0.326,0.326);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#4C98CE").s().p("AhZCvQgegSAAgjQAAgoArgXQgXgNABgZQgBgaAcgQQgtgZAAg0QAAgpAcgaQAegaAyAAQAWABATAGIBXAAIAAAmIgkAAQANAXABAZQAAApgcAaQgeAagvAAQgPAAgOgEQgNAIAAAIQAAAKAMAEQAKAEAXABQA8ADAUAJQArAQAAAyQAAAngmAYQglAZg4AAQgyAAgbgRgAhCByQAAARAOAKQAPAMAcAAQAgAAAUgNQAUgMAAgTQAAgWgTgHQgKgEgigCQgWgBgRgDQgbARAAAbgAgwiJQgNAOAAAZQAAAZANAOQAOAOAaAAQAWAAAOgOQAPgPAAgYQAAgZgPgOQgOgOgWAAQgaAAgOAOg");
	this.shape_23.setTransform(334.5,378,0.326,0.326);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4C98CE").s().p("AhPBfQgggkAAg7QAAg6AiglQAhglAyAAQA4ABAcAlQAbAmgGBAIikAAQACAlARAVQASAXAhAAQAjAAAhgUIATAnQgSAKgOAFQgbAKggAAQg6gBgiglgAgzgeIBsAAQgCg7gyAAQguAAgKA7g");
	this.shape_24.setTransform(325.6,376.1,0.326,0.326);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4C98CE").s().p("AAyCBIAAilQAAgtgnAAQgSAAgVARQgMAKgIAMIAACrIg4AAIAAj7IA3AAIAAAiQAggoAvAAQAnAAATAXQARAVAAAkIAACxg");
	this.shape_25.setTransform(316.7,375.9,0.326,0.326);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4C98CE").s().p("AhLCBIAAj7IA5AAIAAAlQAWgrApAAQAVAAAJAGIgNAyQgIgFgRAAQgWAAgPASQgMAMgGAOIAACig");
	this.shape_26.setTransform(309.4,375.9,0.326,0.326);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4C98CE").s().p("AhQByQgWgUAAgfQAAguAsgWQAkgTA1AAIAKAAIAAgTQAAgVgJgKQgLgMgXAAQgWAAgUAKIgXAPIgbgjQApgkA2AAQAwAAAYAWQAYAWAAAuIAABlQAAAnAGAcIg3AAQgDgNgBgPQgLANgQAJQgUAMgZABQggAAgUgTgAguA7QAAAQALAHQAJAIANgBQAdAAAZgcIAAgzIgKAAQhNAAAAAxg");
	this.shape_27.setTransform(301.5,376.1,0.326,0.326);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#4C98CE").s().p("AhgB9QgsgzAAhKQAAhKAtgzQAxg2BQAAQA7AAAqAbIgbArQghgVgrAAQgzAAgeAnQgdAjAAA3QAAA2AcAlQAfAoA1AAQAvAAAigbIAaApQgQAPgaAJQggAMgiAAQhQAAgxg3g");
	this.shape_28.setTransform(292.4,374.5,0.326,0.326);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#FFD948","#F97432"],[0,1],-20.2,4.3,89.9,-28).s().p("AksByQAAgkAHgLQAIgPAhgOIG3i+IByAuIpZEDg");
	this.shape_29.setTransform(435.6,383.7,0.326,0.326);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFD948").s().p("AjzBmQAAgjAHgMQAIgOAhgPQBxgxESh1IA0AVQlMCOhrAwQghAPgIAOQgGALgBAeg");
	this.shape_30.setTransform(433.8,382.6,0.326,0.326);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("Al7EaQgBgJAEgKQAHgVAUgHIInjrIobjjQgKgEgKgJQgVgTgBgdIAAh+ILfFAIAMAIQANALAAAOIAACCQACANgNAGIruFHg");
	this.shape_31.setTransform(437.8,375.8,0.326,0.326);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.instance_2},{t:this.shape_10}]}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.instance_2},{t:this.shape_10}]},31).wait(1));

	// Astronaut
	this.astrosplash1 = new lib.spastro();
	this.astrosplash1.setTransform(369.7,148.4,0.034,0.034,0,0,0,0,138.1);

	this.timeline.addTween(cjs.Tween.get(this.astrosplash1).wait(1).to({regX:-16.9,regY:129.4,scaleX:0.07,scaleY:0.07,x:367.2,y:148.5},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:365.3,y:149},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:363.4,y:149.4},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:361.5,y:149.9},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:359.6,y:150.4},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:357.7,y:150.8},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:355.8,y:151.3},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:353.8,y:151.7},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:352,y:152.2},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:350,y:152.7},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:348.2,y:153.2},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:346.2,y:153.7},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:344.3,y:154.1},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:342.4,y:154.6},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:340.5,y:155},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:338.6,y:155.5},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:336.7,y:156},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:334.8,y:156.4},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:332.8,y:156.9},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:331,y:157.4},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:329,y:157.8},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:327.2,y:158.3},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:325.2,y:158.8},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:323.3,y:159.2},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:321.4,y:159.7},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:319.5,y:160.2},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:317.6,y:160.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:315.7,y:161.1},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:313.8,y:161.6},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:311.9,y:162},0).wait(2));

	// Moon
	this.moon1 = new lib.spmoon();
	this.moon1.setTransform(371.1,173.6,0.038,0.038,0,0,0,0,612.6);

	this.timeline.addTween(cjs.Tween.get(this.moon1).wait(1).to({regY:611.6,scaleX:0.08,scaleY:0.08,y:199.3},0).wait(1).to({scaleX:0.11,scaleY:0.11,y:225},0).wait(1).to({scaleX:0.15,scaleY:0.15,y:250.8},0).wait(1).to({scaleX:0.19,scaleY:0.19,y:276.5},0).wait(1).to({scaleX:0.23,scaleY:0.23,y:302.3},0).wait(1).to({scaleX:0.26,scaleY:0.26,y:328},0).wait(1).to({scaleX:0.3,scaleY:0.3,y:353.7},0).wait(1).to({scaleX:0.34,scaleY:0.34,y:379.4},0).wait(1).to({scaleX:0.37,scaleY:0.37,y:405.2},0).wait(1).to({scaleX:0.41,scaleY:0.41,y:430.9},0).wait(1).to({scaleX:0.45,scaleY:0.45,y:456.7},0).wait(1).to({scaleX:0.49,scaleY:0.49,y:482.4},0).wait(1).to({scaleX:0.52,scaleY:0.52,y:508.2},0).wait(1).to({scaleX:0.56,scaleY:0.56,y:533.9},0).wait(1).to({scaleX:0.6,scaleY:0.6,y:559.6},0).wait(1).to({scaleX:0.64,scaleY:0.64,y:585.4},0).wait(1).to({scaleX:0.67,scaleY:0.67,y:611.1},0).wait(1).to({scaleX:0.71,scaleY:0.71,y:636.8},0).wait(1).to({scaleX:0.75,scaleY:0.75,y:662.6},0).wait(1).to({scaleX:0.79,scaleY:0.79,y:688.3},0).wait(1).to({scaleX:0.82,scaleY:0.82,y:714.1},0).wait(1).to({scaleX:0.86,scaleY:0.86,y:739.8},0).wait(1).to({scaleX:0.9,scaleY:0.9,y:765.6},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:791.3},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:817},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:842.8},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:868.5},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:894.2},0).wait(1).to({scaleX:1.12,scaleY:1.12,y:920},0).wait(1).to({scaleX:1.16,scaleY:1.16,y:945.7},0).wait(2));

	// Stars
	this.instance_3 = new lib.spstartween("synched",0);
	this.instance_3.setTransform(386,202.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.55,scaleY:0.55},30).to({startPosition:0},1).wait(1));

	// tinystars
	this.instance_4 = new lib.sptinystars();
	this.instance_4.setTransform(382.2,196.4,1,1,0,0,0,480.2,270.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regY:269.5,scaleX:1,scaleY:1,x:382.3,y:195.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:382.4},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:382.5,y:195.1},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:382.6},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:382.7,y:195},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:382.8},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:382.9,y:194.9},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:383},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:383.1},0).wait(1).to({scaleX:0.91,scaleY:0.91,y:194.8},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:383.2},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:383.3},0).wait(1).to({scaleX:0.89,scaleY:0.89,y:194.7},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:383.4},0).wait(1).to({scaleX:0.88,scaleY:0.88},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:383.5},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:383.6},0).wait(1).to({scaleX:0.86,scaleY:0.86,y:194.6},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:383.7},0).wait(1).to({scaleX:0.85,scaleY:0.85},0).wait(2));

	// planets
	this.b1 = new lib.spblueplanet();
	this.b1.setTransform(707.7,149.6);

	this.instance_5 = new lib.spgreenplanet();
	this.instance_5.setTransform(53.6,59.7,0.202,0.202,0,0,0,178.3,0);

	this.instance_6 = new lib.spstargold();
	this.instance_6.setTransform(739,9.9,1,1,0,0,0,9.3,9.3);
	this.instance_6.alpha = 0.699;

	this.instance_7 = new lib.spstargold();
	this.instance_7.setTransform(738,236.3,1,1,0,0,0,3.9,3.9);
	this.instance_7.alpha = 0.699;

	this.instance_8 = new lib.spstargold();
	this.instance_8.setTransform(362,61.6,1,1,0,0,0,9.3,9.3);
	this.instance_8.alpha = 0.699;

	this.instance_9 = new lib.spstargold();
	this.instance_9.setTransform(98,168.9,1,1,0,0,0,9.4,9.3);
	this.instance_9.alpha = 0.699;

	this.instance_10 = new lib.spstargold();
	this.instance_10.setTransform(146.1,25.1,1,1,0,0,0,9.4,9.3);
	this.instance_10.alpha = 0.699;

	this.instance_11 = new lib.spstargold();
	this.instance_11.setTransform(663.1,254,1,1,0,0,0,9.3,9.2);
	this.instance_11.alpha = 0.699;

	this.instance_12 = new lib.spstargold();
	this.instance_12.setTransform(266.4,297.9,1,1,0,0,0,5.5,5.5);
	this.instance_12.alpha = 0.699;

	this.instance_13 = new lib.spstargold();
	this.instance_13.setTransform(126.2,376.8,1,1,0,0,0,8.1,8);
	this.instance_13.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{regX:178.3,x:53.6}},{t:this.b1}]}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{regX:0,x:17.5}},{t:this.b1}]},31).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(65.1,63.7,1421.7,697.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;