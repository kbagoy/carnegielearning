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



(lib.Tween4 = function(mode,startPosition,loop) {
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
	this.shape_14.setTransform(280.6,132.1,1.951,1.951);

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


(lib.Moon = function(mode,startPosition,loop) {
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


(lib.LoadingBar = function(mode,startPosition,loop) {
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

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#91C659").s().p("AseBUIAAinIY9AAIAACng");
	this.shape_25.setTransform(80,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#91C659").s().p("As5BUIAAinIZzAAIAACng");
	this.shape_26.setTransform(82.7,0);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#91C659").s().p("AtUBUIAAinIapAAIAACng");
	this.shape_27.setTransform(85.4,0);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#91C659").s().p("AtuBUIAAinIbdAAIAACng");
	this.shape_28.setTransform(88,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleX:0.094,x:2}}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape,p:{scaleX:4.314,x:90.6}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-8.5,4,17);


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
	this.shape_1.graphics.f("#FFFFFF").s().p("AuIBVIAAipIcQAAIAACpg");
	this.shape_1.setTransform(90.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,181,17);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path();
	this.instance.setTransform(36.1,9.4,1,1,0,0,0,35.9,9.4);
	this.instance.alpha = 0.102;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.2,0,71.8,18.9);


(lib.Flag = function(mode,startPosition,loop) {
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


(lib.Astronaut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F79736").s().p("AgFAaIgFgCIACgGIAEACIAEABQAEAAADgDQACgCAAgFIAAgEQgBACgEACIgEABQgGAAgFgFQgEgGAAgFIAAgBQAAgJAEgGQAEgFAHAAQADAAACABQACABADADIAAgFIAGAAIAAAkQAAAHgEAFQgEADgIAAgAgFgQQgDAFAAAGIAAABQAAAEADADQACADADAAQAEAAABgBQADgCABgCIAAgQIgEgDQgBgCgEAAQgDAAgCAEg");
	this.shape.setTransform(76.7,166.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F79736").s().p("AAIATIAAgWQAAgFgCgCQgCgCgEAAIgDABIgEAEIAAAaIgHAAIAAgkIAHAAIAAAFQABgDAEgBQACgCACAAQAGAAADAEQAEADAAAIIAAAWg");
	this.shape_1.setTransform(72.7,165.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F79736").s().p("AgCAbIAAgkIAFAAIAAAkgAgCgTIAAgHIAFAAIAAAHg");
	this.shape_2.setTransform(69.7,164.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F79736").s().p("AAIATIAAgWQAAgEgCgDQgCgCgEAAQgBAAgCABQgDACgBACIAAAaIgHAAIAAgkIAGAAIAAAFIAGgEQACgCACAAQAGAAAEAEQADAEAAAHIAAAWg");
	this.shape_3.setTransform(66.8,165.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F79736").s().p("AgIATIAAgkIAHAAIAAAFIACgEQADgCADAAIACAAIgBAHIgDAAIgFABIgBAEIAAAZg");
	this.shape_4.setTransform(63.7,165.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F79736").s().p("AgMAQQgCgDAAgFQAAgGAEgCQAEgCAGAAIAIAAIAAgEQgBgDgCgCQgDgCgCAAQgBAAgDACQAAAAgBABQAAAAgBABQAAABAAAAQAAABAAAAIgHAAQAAgFAFgDQAEgDAEAAQAHAAAEADQADAEAAAFIAAAVIABADIgGAAIgBgFIgGAEQgCACgDAAQgGAAgDgDgAgFADQgCACAAADQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAQABACAEAAIAEgDQAEgCABgCIAAgGIgIAAQgDAAgCACg");
	this.shape_5.setTransform(60.2,165.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F79736").s().p("AgJAOQgGgFAAgJIAAAAQAAgIAGgFQAEgFAFAAQAIAAADAEQAEAGABAHIAAACIgXAAQAAAGACADQACAEAEAAIAGgBIAFgDIADAFIgGADIgIABQgGAAgEgFgAgEgKIgDAIIAQAAIAAgBQAAgEgCgDQgDgDgEAAQgCAAgCADg");
	this.shape_6.setTransform(56.4,165.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F79736").s().p("AgOAZIAAgxIAHAAIAAArIAWAAIAAAGg");
	this.shape_7.setTransform(52.7,164.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F79736").s().p("AgKAOQgFgFABgJIAAAAQgBgHAFgGQAFgFAFAAQAIAAAEAEQADAGAAAHIAAACIgXAAQAAAGAEADQACAEADAAIAGgBQACgBADgCIADAFIgGADIgIABQgHAAgEgFgAgEgKQgDADgBAFIAQAAIAAgBQAAgDgCgEQgCgDgEAAQgCAAgCADg");
	this.shape_8.setTransform(46.9,165.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F79736").s().p("AgCAbIAAgkIAFAAIAAAkgAgCgTIAAgHIAFAAIAAAHg");
	this.shape_9.setTransform(44,164.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F79736").s().p("AgFAaIgFgCIACgGIAEACIAEABQAEAAADgDQACgCAAgFIAAgEQgBACgEACIgEABQgGAAgFgFQgEgGAAgFIAAgBQAAgJAEgGQAEgFAHAAQADAAACABQACABADADIAAgFIAGAAIAAAkQAAAHgEAFQgEADgIAAgAgFgQQgDAFAAAGIAAABQAAAEADADQACADADAAQAEAAABgBQADgCABgCIAAgQIgEgDQgBgCgEAAQgDAAgCAEg");
	this.shape_10.setTransform(40.9,166.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F79736").s().p("AgKAOQgEgFgBgJIAAAAQAAgIAGgFQAEgFAFAAQAIAAADAEQAFAGAAAHIAAACIgYAAQAAAGADADQACAEAEAAIAGgBQADgBABgCIAEAFIgGADIgIABQgGAAgFgFgAgEgKQgCADgCAFIAQAAIAAgBQAAgDgCgEQgCgDgEAAQgBAAgDADg");
	this.shape_11.setTransform(37.1,165.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F79736").s().p("AAIATIAAgWQAAgEgCgDQgCgCgEAAQgBAAgCABIgEAEIAAAaIgHAAIAAgkIAGAAIABAFIAEgEQADgCACAAQAGAAAEAEQADAEAAAHIAAAWg");
	this.shape_12.setTransform(33.1,165.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F79736").s().p("AgIATIAAgkIAHAAIAAAFIACgEQADgCADAAIACAAIgBAHIgDAAIgFABIgBAEIAAAZg");
	this.shape_13.setTransform(30,165.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F79736").s().p("AgMAQQgDgDAAgFQABgGAEgCQAEgCAGAAIAIAAIAAgEQAAgDgDgCQgDgCgCAAQgBAAgDACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABIgHAAQAAgFAFgDQAEgDAEAAQAHAAADADQAEAEAAAFIAAAVIACADIgHAAIgBgFIgGAEQgCACgCAAQgGAAgEgDgAgFADQgDACABADQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAQACACADAAIAEgDQAEgCABgCIAAgGIgIAAQgDAAgCACg");
	this.shape_14.setTransform(26.6,165.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F79736").s().p("AgMAUQgGgHAAgJIAAgHQAAgJAGgGQAFgHAHAAQAJAAAFAFQAFAFAAAHIgHAAQAAgEgDgEQgDgDgGAAQgEAAgEAFQgDAFAAAGIAAAHQAAAHADAFQAEAEAEAAQAGAAADgDQADgDAAgFIAGAAIABAAQAAAHgFAFQgGAFgIAAQgHAAgFgGg");
	this.shape_15.setTransform(22.4,164.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F79736").s().p("AgLAaIgCgBIABgFIABABIACAAQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAIAEgJIgPgjIAIAAIAIAYIAAADIAAAAIAJgbIAIAAIgQApIgCAHQgDADgFAAg");
	this.shape_16.setTransform(16.4,166.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F79736").s().p("AgDAZIgFgDIgBAEIgGAAIAAg0IAHAAIAAAVIAFgEIAEgBQAHAAAEAGQAEAEAAAIIAAABQAAAJgEAEQgEAFgHAAQgCAAgCgCgAgEgDIgEADIAAAQQACADACABQACACACAAQAFAAACgEQACgDAAgGIAAgBQAAgGgCgCQgDgEgEAAQgCAAgCABg");
	this.shape_17.setTransform(12.6,164.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F79736").s().p("AAaA9IgaguIgZAuIgZAAIAng9Igmg8IAYAAIAZAuIAZguIAYAAIgmA8IAoA9g");
	this.shape_18.setTransform(79.7,154.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F79736").s().p("AgfAnQgIgHAAgNQAAgNALgGQAKgHASAAIAPAAIAAgIQAAgHgEgEQgEgEgHAAQgFAAgFADQgEAEAAAFIgUAAIAAAAQgBgLALgJQAJgIAQAAQAPAAALAIQAJAIAAAPIAAAnIABALIACAKIgUAAIgCgHIgCgHQgCAGgJAFQgEAFgJAAQgPAAgHgIgAgNAIQgFAFAAAGQAAAFAEADQADADAGAAQAGAAAGgEQAGgDACgGIAAgNIgPAAQgIAAgFAEg");
	this.shape_19.setTransform(64.3,155.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F79736").s().p("AgJBBIAAhZIATAAIAABZgAgJguIAAgSIATAAIAAASg");
	this.shape_20.setTransform(56.9,153.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F79736").s().p("AAbA9IAAg0Ig1AAIAAA0IgVAAIAAh5IAVAAIAAA2IA1AAIAAg2IAVAAIAAB5g");
	this.shape_21.setTransform(48,154.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F79736").s().p("AgJA9IAAhoIglAAIAAgRIBdAAIAAARIglAAIAABog");
	this.shape_22.setTransform(36.4,154.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F79736").s().p("AAiA9IgKgdIguAAIgKAdIgVAAIAth5IASAAIAsB5gAgRAPIAjAAIgSgyIAAAAg");
	this.shape_23.setTransform(25.4,154.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F79736").s().p("AApA9IAChdIAAAAIglBdIgLAAIglhdIgBAAIADBdIgVAAIAAh5IAaAAIAjBcIAAAAIAjhcIAbAAIAAB5g");
	this.shape_24.setTransform(11.8,154.3);

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

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("ABiB6QgJAAgHgGQgHgFgDgJQgQhAgxgsQguguhBgPQgLgCgGgJQgGgKACgLIAAAAQACgLAKgGQAKgGALACQBQASA6A5QA7A3AVBPQADAMgIALQgJAKgNAAg");
	this.shape_25.setTransform(59.8,32.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00B2C4").s().p("ApOAtQgTAAgOgOQgNgNAAgSQAAgSANgNQAOgNATAAISeAAQATAAANANQANANAAASQAAASgNANQgNAOgTAAg");
	this.shape_26.setTransform(43.6,182.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00B2C4").s().p("AjSAeQgMAAgIgJQgKgJAAgMQAAgLAKgJQAIgIAMgBIGkAAQANABAJAIQAIAJABALQgBAMgIAJQgJAJgNAAg");
	this.shape_27.setTransform(17.6,228.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00B2C4").s().p("AjRAeQgNAAgJgJQgIgJgBgMQABgLAIgJQAJgIANgBIGjAAQAMABAJAIQAKAJAAALQAAAMgKAJQgJAJgMAAg");
	this.shape_28.setTransform(71.5,228.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00B2C4").s().p("Ai3AbQgLAAgIgIQgIgIAAgLQAAgJAIgJQAIgIALAAIFvAAQALAAAIAIQAIAJAAAJQAAALgIAIQgIAIgLAAg");
	this.shape_29.setTransform(120,162);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#6D6D6E").s().p("AitAbQgMAAgHgIQgJgIABgLQgBgJAJgJQAIgIALAAIFbAAQALAAAJAIQAIAJAAAJQAAALgIAIQgJAIgLAAg");
	this.shape_30.setTransform(51.5,122.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#6D6D6E").s().p("AitAbQgLAAgIgIQgJgIABgLQgBgKAJgIQAIgIALAAIFbAAQALAAAJAIQAIAIAAAKQAAALgIAIQgJAIgLAAg");
	this.shape_31.setTransform(51.5,108.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#911356").s().p("AgiAjQgPgPAAgUQAAgTAPgPQAOgPAUAAQAUAAAQAPQAOAPAAATQAAAUgOAPQgQAPgUAAQgUAAgOgPg");
	this.shape_32.setTransform(22.8,122.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#00B2C4").s().p("AgiAjQgPgPAAgUQAAgTAPgPQAPgPATAAQAUAAAPAPQAPAPAAATQAAAUgPAPQgPAPgUAAQgTAAgPgPg");
	this.shape_33.setTransform(23.7,108.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#00B2C4").s().p("AlQDRQgZAAgQgSQgQgSACgYIAik0QADgVAPgOQAQgOAVAAIJXAGQAVAAAQAOQAPAOADAUIAnEuQADAYgQATQgQASgaAAgAFQCbIgnkuIpXgGIgiE0IKgAAg");
	this.shape_34.setTransform(43.5,116.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AlPCbIAhk1IJXAGIAoEvgAjyAVQgPAPAAAVQAAAUAPAQQAPAOAVAAQAVAAAPgOQAPgQAAgUQAAgVgPgPQgPgPgVAAQgVAAgPAPgAhxAsQgIAJAAALQAAALAIAIQAIAIAMAAIFaAAQAMAAAIgIQAIgIAAgLQAAgLgIgJQgIgIgMAAIlaAAQgLAAgJAIgAjohuQgPAPAAAVQAAAVAPAPQAPAPAUAAQAWAAAOgPQAPgPABgVQgBgVgPgPQgOgOgWAAQgUAAgPAOgAhxheQgIAIAAALQAAAMAIAIQAJAIALAAIFaAAQAMAAAIgIQAIgIAAgMQAAgLgIgIQgIgIgMAAIlaAAQgLAAgJAIg");
	this.shape_35.setTransform(43.5,116.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#00B2C4").s().p("AgUCgIg2ktQgBgFADgFQACgEAFgCIAFgBIB5AAQADAAAEACQAIAFgBAKIhVEsIAAABg");
	this.shape_36.setTransform(99.8,109.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00B2C4").s().p("AADC0IhMlWIAAgGQABgFADgDQAEgDAFAAIB5AAQADAAACACQAKAEgBALIg/FWIAAAAg");
	this.shape_37.setTransform(-12,111.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#00B2C4").s().p("AgrDAIgIgDQgFgDgDgFQgEgHAAgIIAelWQAAgJAJgEQAEgCADAAIAFAAQADgBAGADQAFAEABAIIA9FUQABAFgCAEQgCAJgHAFQgGAFgJABIhLABg");
	this.shape_38.setTransform(-37.8,131.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#00B2C4").s().p("AiCBhQgQAAgCgEQgBgDAAgLIgBgIQAAgGAEgDIDxieQAMgIAJAKQADAEACAGIAdCmQABAHgFAGQgFAGgHAAg");
	this.shape_39.setTransform(120,124.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F3F8EB").s().p("AihCCIBXktQABgJgIgFIAAgBIDzDUQgHgFgKAGIjxCgg");
	this.shape_40.setTransform(114.9,112.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F3F8EB").s().p("AiTB9IAAj5QADAFAPgBIEIAEQAIAAAFgGIAAD3g");
	this.shape_41.setTransform(119.8,146.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F3F8EB").s().p("Ag/EHIg9lUQAAgHgHgEIC5i4IAAAGIBOFXIjDDEQABgEgBgGg");
	this.shape_42.setTransform(-24.9,121.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#00B2C4").s().p("AiLCFQgIgIAAgLQABgMAIgIIDvjjQAIgIALABQAMAAAIAIQAIAIgBALQAAAMgIAIIjvDjQgIAHgLAAQgNAAgHgIg");
	this.shape_43.setTransform(-66.2,107.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F3F8EB").s().p("Airg2IDPjGICICHQgIAFAAAIIgeFXQgBAIAFAGg");
	this.shape_44.setTransform(-57.6,124.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F3F8EB").s().p("AodN6IAAnmIA/lYQACgLgKgEIAAAAIAAnHQACjHCQiMQCQiMDJAAQDKAACQCMQCPCMACDHIAAHHQgFABgCAFQgCAEAAAFIA2EvIABAAIAAIPgAlTBNQgPAOgDAVIghE2QgDAZAQASQAQASAaAAIKgAAQAZAAAQgTQARgTgDgYIgokwQgCgUgQgOQgQgNgVAAIpXgHQgUAAgRAOgAlXhuIK5AAIAAknIgBAAIAAAAQAAiOhmhlQhmhliRAAIgBAAQiQgBhlBlQhkBkAACQIAAAAIgBAAg");
	this.shape_45.setTransform(43.5,89.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#338AC6").s().p("AitE/IAAknIABAAIAAAAQAAiOBkhkQBkhlCSABQg8C4AYD0QAMB7AYBWg");
	this.shape_46.setTransform(26.4,46);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1BABDD").s().p("AiZE/QgYhWgMh7QgYj0A8i4IABAAQCRAABkBlQBmBlAACMIAAAAIABAAIAAEng");
	this.shape_47.setTransform(59.3,46);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F3F8EB").s().p("AjFC8IAAl4IGLAAIAAF4g");
	this.shape_48.setTransform(17.1,206.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F3F8EB").s().p("Ah+DYQhJAAg0gyQg0gxAAhHQAAhEAzgyQAzgyBIgBIBXAAIAAhcIFYAAIAADsQACAKAAAPQAABFgyAyQgxAxhIACg");
	this.shape_49.setTransform(3.9,252.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F3F8EB").s().p("Ah/DYQhJAAgzgyQg0gxAAhHIABgIIAAj9IFXAAIAABcIBXAAQBJAAAzAyQA0AyAABFQAABFgyAyQgyAxhHACg");
	this.shape_50.setTransform(83.8,252.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F3F8EB").s().p("AjFC8IAAl4IGLAAIAAF4g");
	this.shape_51.setTransform(70.7,206.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F3F8EB").s().p("Ag6B2QgwgqgHg/QgiAEgagUQgYgVgDgfQgDggAUgXQALgMAOgHIAAgIIB9gBQAhgRAlgBQAnAAAjASIAdgBIAAATIAFAEQAyArAGBBQAGA/grAwQgqAxhBAFIgLAAQg5AAgvgng");
	this.shape_52.setTransform(121.1,176.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F3F8EB").s().p("AifAtICoiSQAIgWAUgPQAVgOAZAAQAfAAAYAWQAXAXgBAfQABAPgHAPIAFAGIjgDBg");
	this.shape_53.setTransform(-72.6,99.8);

	this.instance_7 = new lib.Path_4();
	this.instance_7.setTransform(-87.4,98.3,1,1,0,0,0,9.8,15.6);
	this.instance_7.alpha = 0.102;

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F3F8EB").s().p("AhwBtQgvgtAAhAQAAg/AvgtQAvguBBAAQBCAAAvAuQAvAtAAA/QAABAgvAtQgvAuhCAAQhBAAgvgug");
	this.shape_54.setTransform(-81.1,98.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.instance_7},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(30));

	// Layer 1
	this.instance_8 = new lib.Flag();
	this.instance_8.setTransform(-80.1,97.1,0.999,0.999,9.8,0,0,17.8,97);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:0,regY:85.4,scaleX:1,scaleY:1,rotation:9.3,x:-95.8,y:82.8},0).wait(1).to({rotation:8.6,x:-96,y:82.9},0).wait(1).to({rotation:8,x:-96.2,y:83.1},0).wait(1).to({rotation:7.3,x:-96.3,y:83.3},0).wait(1).to({rotation:6.7,x:-96.5,y:83.4},0).wait(1).to({rotation:6,x:-96.6,y:83.7},0).wait(1).to({rotation:5.4,x:-96.7,y:83.8},0).wait(1).to({rotation:4.7,x:-96.9,y:84},0).wait(1).to({rotation:4.1,x:-97.1,y:84.2},0).wait(1).to({rotation:3.4,x:-97.2,y:84.4},0).wait(1).to({rotation:2.8,x:-97.3,y:84.6},0).wait(1).to({rotation:2.1,x:-97.5,y:84.8},0).wait(1).to({rotation:1.5,x:-97.6,y:85},0).wait(1).to({rotation:0.8,x:-97.7,y:85.2},0).wait(1).to({rotation:0.2,x:-97.9,y:85.4},0).wait(1).to({rotation:-0.5,x:-98,y:85.6},0).wait(1).to({rotation:-1.1,x:-98.1,y:85.8},0).wait(1).to({rotation:-1.8,x:-98.3,y:86},0).wait(1).to({rotation:-2.4,x:-98.4,y:86.1},0).wait(1).to({rotation:-3.1,x:-98.5,y:86.4},0).wait(1).to({rotation:-3.7,x:-98.6,y:86.6},0).wait(1).to({rotation:-4.4,x:-98.7,y:86.8},0).wait(1).to({rotation:-5,x:-98.9,y:87},0).wait(1).to({rotation:-5.7,x:-99,y:87.2},0).wait(1).to({rotation:-6.4,x:-99.1,y:87.4},0).wait(1).to({rotation:-7,x:-99.2,y:87.6},0).wait(1).to({rotation:-7.7,x:-99.3,y:87.9},0).wait(1).to({rotation:-8.3,x:-99.4,y:88.1},0).wait(1).to({rotation:-9,x:-99.5,y:88.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.5,-8.9,274.8,283.3);


// stage content:



(lib.splash2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Loading
	this.instance = new lib.LoadingBar("synched",0);
	this.instance.setTransform(302,371.6,1,1,0,0,0,21,0);

	this.instance_1 = new lib.Path_1_1();
	this.instance_1.setTransform(371.5,371.6,1,1,0,0,0,90.5,8.5);
	this.instance_1.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance}]},30).wait(1));

	// Loading Text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004554").s().p("AgPAOIAAgbIAfAAIAAAbg");
	this.shape.setTransform(414.9,347.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004554").s().p("AgPAOIAAgbIAfAAIAAAbg");
	this.shape_1.setTransform(408.1,347.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004554").s().p("AgPAOIAAgbIAfAAIAAAbg");
	this.shape_2.setTransform(401.4,347.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004554").s().p("AgWBUQgLgCgJgFIAGgYIAQAFQAIACAJAAQAMAAAGgFQAHgGAAgMIAAgMQgGAIgHADQgIAEgHAAQgXAAgMgRQgNgRAAgZIAAgCQAAgdANgSQAMgSAXAAQAIAAAIAFQAIAFAGAIIACgQIAdAAIAAB5QAAAYgQANQgPANgbAAQgJAAgKgDgAgPgxQgGAKAAASIAAACQAAARAGAHQAFAJAKAAQAIAAAFgCQAGgEADgEIAAg1QgDgFgGgDQgFgEgHABQgLAAgFALg");
	this.shape_3.setTransform(391.2,345.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004554").s().p("AAUA+IAAhLQAAgMgFgFQgFgGgKAAQgFAAgFADQgFADgEAFIAABXIghAAIAAh5IAfAAIABASQAGgKAJgFQAHgFAMAAQASAAALAMQAKALAAAZIAABLg");
	this.shape_4.setTransform(378.3,342.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004554").s().p("AgPBYIAAh5IAfAAIAAB5gAgPg+IAAgZIAfAAIAAAZg");
	this.shape_5.setTransform(368.7,340.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004554").s().p("AgpBJQgNgRAAgbIAAgCQAAgcANgSQANgSAWAAQAHAAAIAFQAHADAFAIIAAhDIAiAAIAACvIgcAAIgDgPQgGAIgIAFQgIAFgIAAQgWgBgNgQgAgPAAQgGAJAAASIAAACQAAAQAGAKQAFAJALAAQAGAAAGgDQAGgDACgGIAAg0QgCgFgGgCQgGgEgGAAQgKAAgGALg");
	this.shape_6.setTransform(358.7,340.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004554").s().p("AgsA1QgKgJAAgSQAAgSAOgIQANgJAbgBIARAAIAAgKQAAgJgFgEQgFgFgHAAQgIAAgEAEQgFADAAAIIggAAIAAgBQgBgPAPgMQAOgMAVAAQAWAAAOAMQAOALAAAUIAAAyQAAAIABAIIAEAPIghAAIgDgJIgCgKQgFAJgIAHQgHAFgLABQgUAAgKgLgAgQANQgFAEAAAIQAAAGAEAEQAEAEAHAAQAHAAAGgFQAHgEADgGIAAgRIgRAAQgKAAgGAGg");
	this.shape_7.setTransform(346.1,342.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004554").s().p("AgpAuQgQgRAAgcIAAgBQAAgbAQgSQAPgSAaAAQAbAAAPASQAQARAAAcIAAABQAAAcgQARQgPARgbABQgagBgPgRgAgRgbQgHALAAAQIAAABQAAARAGAKQAGAKAMAAQAMAAAGgKQAGgKAAgRIAAgBQAAgQgGgLQgGgKgMAAQgMAAgFAKg");
	this.shape_8.setTransform(333.3,342.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004554").s().p("Ag0BSIAAijIAhAAIAACKIBIAAIAAAZg");
	this.shape_9.setTransform(321.1,340.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},30).wait(1));

	// Astronaut
	this.instance_2 = new lib.Astronaut();
	this.instance_2.setTransform(369.7,219.1,0.034,0.034,0,0,0,0,138);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:137.2,scaleX:1,scaleY:1,x:330.7,y:158.1},30).wait(1));

	// Moon
	this.instance_3 = new lib.Moon();
	this.instance_3.setTransform(371.1,244.4,0.038,0.038,0,0,0,0,612.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:611.6,scaleX:1.1,scaleY:1.1,y:891.5},30).wait(1));

	// Stars
	this.instance_4 = new lib.Tween4("synched",0);
	this.instance_4.setTransform(386,202.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:0.55,scaleY:0.55},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(65.1,63.7,1421.7,697.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;