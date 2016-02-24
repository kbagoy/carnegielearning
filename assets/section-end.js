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



(lib.stars2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAAQAAgHAHAAQADAAACADQADACAAACQAAADgDACQgCADgDAAQgHAAAAgIg");
	this.shape.setTransform(720.8,-309.3,1.557,1.557);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEAFQgDgCAAgDQAAgHAHAAQAIAAAAAHQAAADgDACQgCADgDAAQgCAAgCgDg");
	this.shape_1.setTransform(1033.3,-244.6,1.557,1.557);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRASQgIgHAAgLQAAgJAIgIQAHgIAKAAQALAAAIAIQAHAIABAJQgBALgHAHQgJAIgKAAQgKAAgHgIg");
	this.shape_2.setTransform(1092.3,-244.3,1.557,1.557);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEAFQgDgCAAgDQAAgCADgCQACgDACAAQAIAAAAAHQAAADgCACQgDADgDAAQgCAAgCgDg");
	this.shape_3.setTransform(574.7,-77.1,1.557,1.557);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHAAQAAgHAHAAQAIAAAAAHQAAAIgIAAQgHAAAAgIg");
	this.shape_4.setTransform(1128.2,238.1,1.557,1.557);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRASQgJgHAAgLQAAgJAJgIQAIgIAJAAQALAAAHAIQAJAIgBAJQABALgJAHQgHAIgLAAQgJAAgIgIg");
	this.shape_5.setTransform(1090.8,212.1,1.557,1.557);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgEAFQgDgCAAgDQAAgHAHAAQAIAAAAAHQAAAIgIAAQgCAAgCgDg");
	this.shape_6.setTransform(1031.8,33.4,1.557,1.557);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHAAQAAgHAHAAQADAAADACQACADAAACQAAADgCADQgDACgDAAQgHAAAAgIg");
	this.shape_7.setTransform(1063,176.9,1.557,1.557);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRASQgJgHAAgLQAAgJAJgIQAIgIAJAAQALAAAHAIQAJAIgBAJQABALgJAHQgHAIgLAAQgJAAgIgIg");
	this.shape_8.setTransform(1090.8,33.7,1.557,1.557);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhiBiQgpgoAAg6QAAg4ApgpQAqgpA4AAQA6AAApApQApApAAA4QAAA6gpAoQgpApg6AAQg4AAgqgpg");
	this.shape_9.setTransform(933.5,97.4,1.557,1.557);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag6A6QgZgYABgiQgBghAZgYQAYgZAiAAQAiAAAZAZQAYAYAAAhQAAAigYAYQgZAZgiAAQghAAgZgZg");
	this.shape_10.setTransform(903.8,263.5,1.557,1.557);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgFAFQgCgCAAgDQAAgCACgCQADgDACAAQADAAADADQACACAAACQAAADgCACQgDADgDAAQgCAAgDgDg");
	this.shape_11.setTransform(26.8,162.1,1.557,1.557);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgSASQgIgHAAgLQAAgKAIgHQAJgIAJAAQALAAAHAIQAJAHgBAKQABALgJAHQgHAIgLAAQgJAAgJgIg");
	this.shape_12.setTransform(66.7,29.6,1.557,1.557);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgHAAQAAgHAHAAQAIAAAAAHQAAAIgIAAQgHAAAAgIg");
	this.shape_13.setTransform(80.5,97.4,1.557,1.557);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgHAAQAAgCADgCQACgDACAAQADAAACADQADACAAACQAAADgDACQgCADgDAAQgHAAAAgIg");
	this.shape_14.setTransform(275.4,-12.3,1.557,1.557);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgFAFQgCgCAAgDQAAgCACgDQADgCACAAQAIAAAAAHQAAAIgIAAQgCAAgDgDg");
	this.shape_15.setTransform(216.2,75.4,1.557,1.557);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgSASQgHgHgBgLQABgKAHgHQAIgIAKAAQALAAAHAIQAJAHgBAKQABALgJAHQgHAIgLAAQgKAAgIgIg");
	this.shape_16.setTransform(217.5,15.5,1.557,1.557);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgHAAQAAgHAHAAQAIAAAAAHQAAADgDACQgCADgDAAQgHAAAAgIg");
	this.shape_17.setTransform(151,14.2,1.557,1.557);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgFAFQgCgCAAgDQAAgCACgCQADgDACAAQADAAADADQACACAAACQAAADgCACQgDADgDAAQgCAAgDgDg");
	this.shape_18.setTransform(799.4,201.2,1.557,1.557);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgEAGQgDgDAAgDQAAgCADgDQACgCACAAQADAAACACQADADAAACQAAADgDADQgCACgDAAQgCAAgCgCg");
	this.shape_19.setTransform(779.4,148.9,1.557,1.557);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgHAAQAAgHAHAAQAIAAAAAHQAAADgDACQgCADgDAAQgHAAAAgIg");
	this.shape_20.setTransform(842.8,174.3,1.557,1.557);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgFAGQgCgDAAgDQAAgCACgCQADgDACAAQADAAADADQACACAAACQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_21.setTransform(274.1,216.3,1.557,1.557);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgHAAQAAgCACgCQADgDACAAQAIAAAAAHQAAAIgIAAQgHAAAAgIg");
	this.shape_22.setTransform(323.2,238.1,1.557,1.557);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgFAFQgCgCAAgDQAAgHAHAAQAIAAAAAHQAAADgDACQgCADgDAAQgCAAgDgDg");
	this.shape_23.setTransform(349.8,202.4,1.557,1.557);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgEAFQgDgCAAgDQAAgHAHAAQAIAAAAAHQAAADgCACQgDADgDAAQgCAAgCgDg");
	this.shape_24.setTransform(356.3,-75.8,1.557,1.557);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgHAAQAAgHAHAAQAIAAAAAHQAAAIgIAAQgHAAAAgIg");
	this.shape_25.setTransform(763.9,-39.6,1.557,1.557);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgHAAQAAgHAHAAQAIAAAAAHQAAADgCACQgDADgDAAQgHAAAAgIg");
	this.shape_26.setTransform(605.9,66.4,1.557,1.557);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgSATQgHgIgBgLQABgKAHgHQAIgJAKABQALgBAHAJQAJAHgBAKQABAKgJAJQgHAHgLABQgKgBgIgHg");
	this.shape_27.setTransform(127.8,207.9,1.557,1.557);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgRATQgJgIAAgLQAAgJAJgJQAIgHAJAAQALAAAHAHQAJAJgBAJQABALgJAIQgHAHgLABQgJgBgIgHg");
	this.shape_28.setTransform(274.1,157.2,1.557,1.557);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgRASQgJgHABgLQgBgKAJgHQAHgIAKAAQAKAAAIAIQAJAHAAAKQAAALgJAHQgHAIgLAAQgKAAgHgIg");
	this.shape_29.setTransform(633.8,-76.7,1.557,1.557);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgRATQgJgIABgLQgBgJAJgJQAHgHAKAAQALAAAHAHQAJAJAAAJQAAALgJAIQgHAHgLABQgKgBgHgHg");
	this.shape_30.setTransform(609.3,132.7,1.557,1.557);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgFAFQgCgCAAgDQAAgHAHAAQAIAAAAAHQAAAIgIAAQgCAAgDgDg");
	this.shape_31.setTransform(581.4,97.4,1.557,1.557);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgRASQgIgHAAgLQAAgJAIgIQAHgIAKAAQALAAAIAIQAHAIABAJQgBALgHAHQgJAIgKAAQgKAAgHgIg");
	this.shape_32.setTransform(319,-101.8,1.557,1.557);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhiBiQgpgpAAg5QAAg4ApgpQAqgpA4AAQA5AAAqApQApApAAA4QAAA5gpApQgqApg5AAQg4AAgqgpg");
	this.shape_33.setTransform(476.5,-13,1.557,1.557);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("Ag6A7QgYgZAAgiQAAghAYgYQAZgZAhAAQAiAAAZAZQAZAYgBAhQABAigZAZQgZAYgiAAQghAAgZgYg");
	this.shape_34.setTransform(689.1,236.8,1.557,1.557);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("Ag6A6QgYgYAAgiQAAghAYgYQAYgZAiAAQAiAAAZAZQAZAYgBAhQABAigZAYQgZAZgiAAQgiAAgYgZg");
	this.shape_35.setTransform(446.8,153,1.557,1.557);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgSASQgHgHgBgLQABgJAHgIQAJgIAJAAQALAAAHAIQAIAIAAAJQAAALgIAHQgHAIgLAAQgJAAgJgIg");
	this.shape_36.setTransform(381.6,76.7,1.557,1.557);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgRASQgIgHAAgLQAAgJAIgIQAHgIAKAAQALAAAIAIQAHAIABAJQgBALgHAHQgJAIgKAAQgKAAgHgIg");
	this.shape_37.setTransform(769.4,306.5,1.557,1.557);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgRATQgJgIABgLQgBgJAJgJQAHgHAKgBQALABAHAHQAJAJgBAJQABALgJAIQgHAHgLAAQgKAAgHgHg");
	this.shape_38.setTransform(737.6,75.8,1.557,1.557);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgHAAQAAgHAHAAQAIAAAAAHQAAAIgIAAQgHAAAAgIg");
	this.shape_39.setTransform(513.5,227.7,1.557,1.557);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgRASQgIgHAAgLQAAgJAIgIQAHgIAKAAQALAAAIAIQAHAIABAJQgBALgHAHQgJAIgKAAQgKAAgHgIg");
	this.shape_40.setTransform(572.6,228,1.557,1.557);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgEAFQgDgCAAgDQAAgCADgDQACgCACAAQADAAACACQADADAAACQAAADgDACQgCADgDAAQgCAAgCgDg");
	this.shape_41.setTransform(260,-280.5,1.557,1.557);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgFAGQgCgDAAgDQAAgCACgDQADgCACAAQADAAACACQADADAAACQAAADgDADQgCACgDAAQgCAAgDgCg");
	this.shape_42.setTransform(824,-13.7,1.557,1.557);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("Ag6A6QgZgYABgiQgBghAZgYQAZgZAhAAQAiAAAZAZQAZAYAAAhQAAAigZAYQgZAZgiAAQghAAgZgZg");
	this.shape_43.setTransform(913.1,-52.3,1.557,1.557);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgSASQgHgHgBgLQABgJAHgIQAIgIAKAAQALAAAHAIQAJAIgBAJQABALgJAHQgHAIgLAAQgKAAgIgIg");
	this.shape_44.setTransform(910.3,58.4,1.557,1.557);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgHAAQAAgCADgCQACgDACAAQADAAACADQADACAAACQAAADgDADQgCACgDAAQgHAAAAgIg");
	this.shape_45.setTransform(844.1,-254.5,1.557,1.557);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgEAFQgDgCAAgDQAAgHAHAAQAIAAAAAHQAAADgDACQgCADgDAAQgCAAgCgDg");
	this.shape_46.setTransform(41.5,-279.2,1.557,1.557);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgHAAQAAgCADgCQACgDACAAQADAAACADQADACAAACQAAAIgIAAQgHAAAAgIg");
	this.shape_47.setTransform(449.1,-243,1.557,1.557);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgFAFQgCgCAAgDQAAgCACgCQADgDACAAQAIAAAAAHQAAAIgIAAQgCAAgDgDg");
	this.shape_48.setTransform(291.1,-137,1.557,1.557);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgSASQgHgHgBgLQABgKAHgHQAJgIAJAAQALAAAHAIQAIAHAAAKQAAAKgIAIQgHAIgLAAQgJAAgJgIg");
	this.shape_49.setTransform(381.6,250.5,1.557,1.557);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgRASQgIgHAAgLQAAgJAIgIQAHgIAKAAQALAAAIAIQAHAIABAJQgBALgHAHQgJAIgKAAQgKAAgHgIg");
	this.shape_50.setTransform(319,-280.2,1.557,1.557);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgRASQgJgHABgLQgBgKAJgHQAHgIAKAAQALAAAHAIQAJAHgBAKQABALgJAHQgHAIgLAAQgKAAgHgIg");
	this.shape_51.setTransform(4.2,-305.2,1.557,1.557);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AhiBiQgpgpAAg5QAAg4ApgpQApgpA5AAQA6AAApApQApApAAA4QAAA5gpApQgpApg6AAQg5AAgpgpg");
	this.shape_52.setTransform(791.3,-148.2,1.557,1.557);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AhiBiQgpgpAAg5QAAg4ApgpQApgpA5AAQA5AAAqApQApApAAA4QAAA5gpApQgqApg5AAQg5AAgpgpg");
	this.shape_53.setTransform(1097.4,-43.5,1.557,1.557);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AhiBiQgpgpAAg5QAAg4ApgpQApgpA5AAQA6AAApApQApApAAA4QAAA5gpApQgpApg6AAQg5AAgpgpg");
	this.shape_54.setTransform(161.7,-216.4,1.557,1.557);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("Ag6A6QgYgYAAgiQAAghAYgYQAZgZAhAAQAiAAAZAZQAYAYAAAhQAAAigYAYQgZAZgiAAQghAAgZgZg");
	this.shape_55.setTransform(544.5,-225.2,1.557,1.557);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("Ag6A6QgYgYAAgiQAAghAYgZQAZgYAhAAQAiAAAZAYQAYAZAAAhQAAAigYAYQgZAZgiAAQghAAgZgZg");
	this.shape_56.setTransform(132,-50.4,1.557,1.557);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("Ag6A7QgYgZAAgiQAAghAYgYQAZgZAhAAQAiAAAZAZQAYAYAAAhQAAAigYAZQgZAYgiAAQghAAgZgYg");
	this.shape_57.setTransform(933.1,-293.2,1.557,1.557);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgSASQgIgHAAgLQAAgKAIgHQAJgIAJAAQALAAAHAIQAJAHgBAKQABALgJAHQgHAIgLAAQgJAAgJgIg");
	this.shape_58.setTransform(66.7,-126.7,1.557,1.557);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgRASQgIgHAAgLQAAgJAIgIQAIgIAJAAQALAAAHAIQAIAIAAAJQAAALgIAHQgHAIgLAAQgJAAgIgIg");
	this.shape_59.setTransform(930.3,-182.4,1.557,1.557);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgRASQgIgHAAgLQAAgJAIgIQAHgIAKAAQALAAAHAIQAIAIAAAJQAAALgIAHQgIAIgKAAQgKAAgHgIg");
	this.shape_60.setTransform(636.8,-215.8,1.557,1.557);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgSASQgIgHAAgLQAAgKAIgHQAJgIAJAAQALAAAHAIQAJAHgBAKQABALgJAHQgHAIgLAAQgJAAgJgIg");
	this.shape_61.setTransform(70.9,153,1.557,1.557);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgSASQgHgHgBgLQABgJAHgIQAJgIAJAAQALAAAHAIQAIAIAAAJQAAALgIAHQgHAIgLAAQgJAAgJgIg");
	this.shape_62.setTransform(422.9,-127.6,1.557,1.557);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-310.6,1129.5,621.3);


(lib.shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.298)").s().p("AkWBkQhzgqgBg6QABg6BzgpQB0gqCiAAQCjAAB0AqQBzApABA6QgBA6hzAqQh0AqijAAQiiAAh0gqg");
	this.shape.setTransform(39.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-14.2,79,28.5);


(lib.rwing = function(mode,startPosition,loop) {
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


(lib.P2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6DA54F").s().p("AhCBDQgcgbAAgoQAAgmAcgcQAcgcAmAAQAoAAAbAcQAcAcAAAmQAAAogcAbQgbAcgoAAQgmAAgcgcg");
	this.shape.setTransform(9.6,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-9.5,19.1,19.1);


(lib.P1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#37703C").s().p("AhCBDQgcgcAAgnQAAgmAcgcQAcgcAmAAQAnAAAcAcQAcAcAAAmQAAAngcAcQgcAcgnAAQgmAAgcgcg");
	this.shape.setTransform(9.6,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-9.5,19.1,19.1);


(lib.Moon = function(mode,startPosition,loop) {
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


(lib.Lwing = function(mode,startPosition,loop) {
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


(lib.body = function(mode,startPosition,loop) {
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


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3F8EB").s().p("AGlKcQhkg2hChdQgVAigiAUQgjAVgpgBQg7AAgsgnQgpgogGg5Qg6ARg6AAQhDAAg+gXQgnB2hlBIQhlBLh/AAQihAAhxhxQhyhyABihIAAgIQg1AlhBABQg4AAgvgcQgugbgbguQggAQglAAQg/AAgtgtQgtgsAAhAQAAhAAtgsQAtgrA/AAIAFAAQAKgtAkghQgYgWgMgdQgPgeAAghQAAhAAtgtQAtgsA/gBQAxABAnAbQARhRBBg1QBCg1BUgBQBCAAA4AiQA3AhAeA4IAEABQAbiGBqhZQBshZCMAAQB1AABiBBQBeA/AsBoQAhglAugWQAwgWA0AAQBiAABFBGQBFBFAABiIAAAHQAXgHAZAAQA0AAAqAgQApAgANAyIADAAQBZgBBSAhQATgmAlgWQAkgYAsAAQA7AAAsApQArAoAGA7QAmgOAoAAQA2ABAxAXQAuAXAiAoQAOgDAMAAQBAAAAsAtQAuAqgBBAQABBAguAsQgsAthAAAQgMAAgOgDQghApgvAWQgxAYg2AAQgiAAghgKQgZCuiEB1QiGB2izAAQh2AAhog4g");
	this.shape.setTransform(174.1,81.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.8,8.8,308.6,144.9);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F75E34").s().p("AiCBCQg/g2gehCQAPgmAWgfQALgQAIgHIFPABIATAXQAWAfAPAmQgeBCg9A1Qg5AyhMAfQhKggg4gxg");
	this.shape.setTransform(22.5,14.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45,29.5);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNEcQgbgMgagPQg9glgqgwQgvg1gUhDQgVg/AHhHQAFg7ATgzQAWg5AkgmIFAABQAVABARAYQAGAIARAjIABACQAiBGAEBQQAEBRgeBGQgZA6gxAwQgtAtg8AgIgeAQQgJAEgIAAQgGAAgHgEg");
	this.shape_1.setTransform(45.1,37.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.8,8.8,50.7,57.6);


(lib.Rocketshipnoflame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.body();
	this.instance.setTransform(87.4,-91.5,1,1,0,0,0,43.9,-114);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:0,y:22.5},0).wait(1).to({x:87.9,y:22.4},0).wait(1).to({x:88.3},0).wait(1).to({x:88.6,y:22.3},0).wait(1).to({x:88.1},0).wait(1).to({x:88.5},0).wait(1).to({x:88.3,y:22.2},0).wait(2).to({x:88.4,y:22.1},0).wait(1).to({x:88.3},0).wait(1).to({x:88.4},0).wait(1).to({y:22},0).wait(1).to({x:88.3},0).wait(1).to({x:88.4},0).wait(1));

	// r-wing
	this.instance_1 = new lib.rwing();
	this.instance_1.setTransform(128.6,111.2,1,1,0,0,0,47.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:111},0).wait(1).to({y:110.9},0).wait(1).to({y:110.8},0).wait(1).to({y:110.7},0).wait(1).to({y:110.6},0).wait(1).to({y:110.4},0).wait(1).to({y:110.3},0).wait(1).to({y:110.5},0).wait(1).to({y:110.7},0).wait(1).to({y:110.9},0).wait(1).to({y:111.1},0).wait(1).to({y:111.3},0).wait(1).to({y:111.5},0).wait(1).to({y:111.7},0).wait(1));

	// L-wing
	this.instance_2 = new lib.Lwing();
	this.instance_2.setTransform(47.2,111.2,1,1,0,0,0,47.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:111},0).wait(1).to({y:110.9},0).wait(1).to({y:110.8},0).wait(1).to({y:110.7},0).wait(1).to({y:110.6},0).wait(1).to({y:110.4},0).wait(1).to({y:110.3},0).wait(1).to({y:110.5},0).wait(1).to({y:110.7},0).wait(1).to({y:110.9},0).wait(1).to({y:111.1},0).wait(1).to({y:111.3},0).wait(1).to({y:111.5},0).wait(1).to({y:111.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-91.5,175.8,255.4);


(lib.planet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// P2
	this.instance = new lib.P2();
	this.instance.setTransform(89.6,-72.5,1,1,0,0,0,9.6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:74.2,y:-71.8},0).wait(1).to({x:57,y:-70.6},0).wait(1).to({x:40.5,y:-68.7},0).wait(1).to({x:24,y:-65.7},0).wait(1).to({x:7.9,y:-60},0).wait(1).to({x:1.6,y:-50},0).wait(1).to({x:7.4,y:-35.4},0).wait(1).to({x:21.2,y:-22.4},0).wait(1).to({x:34.1,y:-13.6},0).wait(1).to({x:49.3,y:-5.2},0).wait(1).to({x:64.1,y:2.4},0).wait(1).to({x:77.6,y:8.7},0).wait(1).to({x:94.4,y:13.7},0).wait(1).to({x:110.4,y:18.1},0).wait(1).to({x:126.5,y:22.6},0).wait(1).to({x:143.4,y:27.3},0).wait(1).to({x:157.6,y:31.2},0).wait(1).to({x:174.2,y:35},0).wait(1).to({x:191.1,y:38.3},0).wait(1).to({x:206.5,y:40.9},0).wait(1).to({x:222.8,y:43.3},0).wait(1).to({x:239.1,y:45.5},0).wait(1).to({x:255.7,y:47.6},0).wait(1).to({x:271.6,y:49.1},0).wait(1));

	// P1
	this.instance_1 = new lib.P1();
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


(lib.Flame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_0();
	this.instance.setTransform(25.3,-14.1,1,1,0,0,0,22.4,14.8);
	this.instance.alpha = 0.48;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FC9837").s().p("AivCiQhMhbAAhyQAAhnAqhRQANgZAQgVQAIgKAFgFIFPABIANAPQAQAVANAZQAqBRABBmQAAByhLBbQhDBShvAtQhsguhDhRg");
	this.shape.setTransform(25.3,0);

	this.instance_1 = new lib.Path_1();
	this.instance_1.setTransform(25.4,-0.1,1,1,0,0,0,45.1,37.6);
	this.instance_1.shadow = new cjs.Shadow("rgba(56,56,56,0.498)",0,11,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.9,-39.9,95,102);


(lib.Rocketship = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.body();
	this.instance.setTransform(87.4,-91.5,1,1,0,0,0,43.9,-114);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:0,y:22.5},0).wait(1).to({x:87.9,y:22.4},0).wait(1).to({x:88.3},0).wait(1).to({x:88.6,y:22.3},0).wait(1).to({x:88.1},0).wait(1).to({x:88.5},0).wait(1).to({x:88.3,y:22.2},0).wait(2).to({x:88.4,y:22.1},0).wait(1).to({x:88.3},0).wait(1).to({x:88.4},0).wait(1).to({y:22},0).wait(1).to({x:88.3},0).wait(1).to({x:88.4},0).wait(1));

	// Flames
	this.instance_1 = new lib.Flame();
	this.instance_1.setTransform(87.7,135.2,1,1.461,0,0,0,25.4,-28.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:5.3,scaleX:0.97,scaleY:1.45,x:87.6,y:184.5},0).wait(1).to({scaleX:0.95,scaleY:1.43,y:183.9},0).wait(1).to({scaleX:0.92,scaleY:1.42,x:87.7,y:183.2},0).wait(1).to({scaleX:0.9,scaleY:1.4,y:182.6},0).wait(1).to({scaleX:0.86,scaleY:1.39,y:181.9},0).wait(1).to({scaleX:0.83,scaleY:1.34,y:180.1},0).wait(1).to({scaleX:0.8,scaleY:1.29,y:178.3},0).wait(1).to({scaleX:0.77,scaleY:1.24,x:87.6,y:176.5},0).wait(1).to({scaleX:0.75,scaleY:1.2,y:174.7},0).wait(1).to({scaleX:0.73,scaleY:1.15,y:172.9},0).wait(1).to({scaleX:0.7,scaleY:1.1,y:171},0).wait(1).to({scaleX:0.68,scaleY:1.05,x:87.7,y:169.2},0).wait(1).to({scaleX:0.67,scaleY:1,x:87.6,y:167.4},0).wait(1).to({scaleX:0.65,scaleY:0.95,y:165.6},0).wait(1));

	// r-wing
	this.instance_2 = new lib.rwing();
	this.instance_2.setTransform(128.6,111.2,1,1,0,0,0,47.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:111},0).wait(1).to({y:110.9},0).wait(1).to({y:110.8},0).wait(1).to({y:110.7},0).wait(1).to({y:110.6},0).wait(1).to({y:110.4},0).wait(1).to({y:110.3},0).wait(1).to({y:110.5},0).wait(1).to({y:110.7},0).wait(1).to({y:110.9},0).wait(1).to({y:111.1},0).wait(1).to({y:111.3},0).wait(1).to({y:111.5},0).wait(1).to({y:111.7},0).wait(1));

	// L-wing
	this.instance_3 = new lib.Lwing();
	this.instance_3.setTransform(47.2,111.2,1,1,0,0,0,47.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({y:111},0).wait(1).to({y:110.9},0).wait(1).to({y:110.8},0).wait(1).to({y:110.7},0).wait(1).to({y:110.6},0).wait(1).to({y:110.4},0).wait(1).to({y:110.3},0).wait(1).to({y:110.5},0).wait(1).to({y:110.7},0).wait(1).to({y:110.9},0).wait(1).to({y:111.1},0).wait(1).to({y:111.3},0).wait(1).to({y:111.5},0).wait(1).to({y:111.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-91.5,175.8,345.7);


// stage content:



(lib.sectionend = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Nice!
	this.text = new cjs.Text("Nice Work!", "bold 48px 'Roboto'", "#8BC34A");
	this.text.lineHeight = 68;
	this.text.setTransform(30,21.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(139,195,74,0.898)").s().p("AgVBxIAAgoIArAAIAAAogAgVAjIAAiTIArAAIAACTg");
	this.shape.setTransform(461.4,45.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(139,195,74,0.898)").s().p("AAaB5IgthHIgMAAIAABHIguAAIAAjxIAuAAIAACIIALAAIAlg+IA1AAIg2BLIA+Bcg");
	this.shape_1.setTransform(449.5,45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(139,195,74,0.898)").s().p("Ag5A/QgVgYAAgmIAAgBQAAgmAVgYQAVgYAkAAQAlAAAVAYQAVAYAAAmIAAABQAAAmgVAYQgVAYglAAQgkAAgVgYgAgZglQgIAOAAAXIAAABQAAAXAIAOQAIAOARAAQARAAAJgOQAIgOAAgXIAAgBQAAgXgJgOQgIgOgRAAQgQAAgJAOg");
	this.shape_2.setTransform(430.9,48.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(139,195,74,0.898)").s().p("Ag5A/QgVgYAAgmIAAgBQAAgmAVgYQAVgYAkAAQAlAAAVAYQAVAYAAAmIAAABQAAAmgVAYQgVAYglAAQgkAAgVgYgAgZglQgIAOAAAXIAAABQAAAXAIAOQAIAOARAAQARAAAJgOQAIgOAAgXIAAgBQAAgXgJgOQgIgOgRAAQgQAAgJAOg");
	this.shape_3.setTransform(412.8,48.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(139,195,74,0.898)").s().p("AgNB0QgMgFgHgNIgEAWIgnAAIAAjyIAuAAIAABdQAHgLAKgFQALgGALAAQAgAAARAYQARAZAAAmIAAAEQAAAlgRAXQgRAXggAAQgNAAgKgHgAgSgLQgHAFgEAGIAABHQAEAIAHAFQAIADAKAAQAQAAAHgMQAHgNAAgWIAAgEQAAgYgHgNQgHgPgQAAQgKAAgIAFg");
	this.shape_4.setTransform(395.1,45.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(139,195,74,0.898)").s().p("AAaB5IgthHIgNAAIAABHIgtAAIAAjxIAtAAIAACIIAMAAIAlg+IA1AAIg2BLIA+Bcg");
	this.shape_5.setTransform(378.3,45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(139,195,74,0.898)").s().p("AguBWIAAinIArAAIACAZQAEgOAKgHQAIgIANAAIAHABIAGABIgFAoIgSAAQgKAAgGAFQgHADgBAJIAABwg");
	this.shape_6.setTransform(363.9,48.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(139,195,74,0.898)").s().p("Ag5A/QgVgYAAgmIAAgBQAAgmAVgYQAVgYAkAAQAlAAAVAYQAVAYAAAmIAAABQAAAmgVAYQgVAYglAAQgkAAgVgYgAgZglQgIAOAAAXIAAABQAAAXAIAOQAIAOARAAQARAAAJgOQAIgOAAgXIAAgBQAAgXgJgOQgIgOgRAAQgQAAgJAOg");
	this.shape_7.setTransform(348.4,48.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(139,195,74,0.898)").s().p("AAqBxIgqiUIAAAAIgpCUIgqAAIg1jhIAtAAIAgCaIABAAIAqiaIAhAAIArCaIAAAAIAgiaIAtAAIg1Dhg");
	this.shape_8.setTransform(325.8,45.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(139,195,74,0.898)").s().p("AgzBAQgWgYAAgkIAAgEQAAgmAVgYQAVgZAhABQAiAAATAUQATAVAAAjIAAAXIhjAAIgBABQACAQAKALQAJALAPAAQAQAAAKgDQAKgDALgHIANAcQgKAJgRAFQgRAGgUAAQgjAAgWgXgAgQgqQgIAKgCAQIABABIA2AAIAAgEQAAgPgHgJQgHgIgNAAQgLAAgHAJg");
	this.shape_9.setTransform(295.4,48.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(139,195,74,0.898)").s().p("AAbB5IAAhlQAAgTgGgGQgIgJgNAAQgIAAgHAEQgHADgFAGIAAB6IgtAAIAAjxIAtAAIAABgQAIgMAMgGQAJgHAOAAQAbAAAPASQAPARAAAjIAABkg");
	this.shape_10.setTransform(277.8,45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(139,195,74,0.898)").s().p("AgMBeQgNgOAAgcIAAhUIgYAAIAAggIAYAAIAAgpIAsAAIAAApIAcAAIAAAgIgcAAIAABUQAAAKAEAEQAEAFAHgBIAGAAIAGgCIAEAiIgNADIgPABQgWAAgMgMg");
	this.shape_11.setTransform(262.8,46.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(139,195,74,0.898)").s().p("Ag5BkQgSgXAAglIAAgEQAAgmASgYQARgZAfAAQALAAAKAGQAKAFAIALIAAhdIAuAAIAADyIgoAAIgDgVQgIAMgLAFQgLAHgMAAQgfAAgRgXgAgVgBQgIAOAAAXIAAAEQAAAWAHANQAIAMAPAAQAJAAAIgDQAHgFAFgHIAAhIQgFgGgHgFQgHgFgKAAQgPAAgHAPg");
	this.shape_12.setTransform(240.3,45.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(139,195,74,0.898)").s().p("AgzBAQgWgYAAgkIAAgEQAAgmAVgYQAVgZAhABQAiAAATAUQATAVAAAjIAAAXIhjAAIgBABQACAQAKALQAJALAPAAQAQAAAKgDQAKgDALgHIANAcQgKAJgRAFQgRAGgUAAQgjAAgWgXgAgQgqQgIAKgCAQIABABIA2AAIAAgEQAAgPgHgJQgHgIgNAAQgLAAgHAJg");
	this.shape_13.setTransform(223.3,48.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(139,195,74,0.898)").s().p("AgMBeQgNgOAAgcIAAhUIgYAAIAAggIAYAAIAAgpIAsAAIAAApIAcAAIAAAgIgcAAIAABUQAAAKAEAEQAEAFAHgBIAGAAIAGgCIAEAiIgNADIgPABQgWAAgMgMg");
	this.shape_14.setTransform(208.8,46.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(139,195,74,0.898)").s().p("AgzBAQgWgYAAgkIAAgEQAAgmAVgYQAVgZAhABQAiAAATAUQATAVAAAjIAAAXIhjAAIgBABQACAQAKALQAJALAPAAQAQAAAKgDQAKgDALgHIANAcQgKAJgRAFQgRAGgUAAQgjAAgWgXgAgQgqQgIAKgCAQIABABIA2AAIAAgEQAAgPgHgJQgHgIgNAAQgLAAgHAJg");
	this.shape_15.setTransform(195.3,48.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(139,195,74,0.898)").s().p("AgVB5IAAjxIArAAIAADxg");
	this.shape_16.setTransform(182.4,45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(139,195,74,0.898)").s().p("AhLB2IAAjoIApAAIADAUQAIgLAKgGQALgGAMAAQAfAAARAZQASAYAAAoIAAADQAAAjgSAYQgRAXgfgBQgLAAgLgEQgKgGgHgJIAABRgAgShOQgHAFgEAHIAABJQAEAGAHAEQAHAEALAAQAPAAAHgNQAIgLAAgWIAAgDQAAgZgIgOQgIgPgOAAQgLAAgHAEg");
	this.shape_17.setTransform(169.5,51.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(139,195,74,0.898)").s().p("ABLBWIAAhlQAAgUgHgHQgFgIgNAAQgKAAgHAFQgHAEgEAHIAAAGIAAAEIAABuIgsAAIAAhlQABgTgHgIQgGgHgNgBQgIAAgIAEQgGADgFAHIAAB6IguAAIAAinIArAAIABAWQAJgNAMgGQANgHAPAAQARABAKAGQALAIAGAOQAIgOAMgHQANgIAQAAQAaAAAOARQAOASAAAjIAABlg");
	this.shape_18.setTransform(146.3,48.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(139,195,74,0.898)").s().p("Ag5A/QgVgYAAgmIAAgBQAAgmAVgYQAVgYAkAAQAlAAAVAYQAVAYAAAmIAAABQAAAmgVAYQgVAYglAAQgkAAgVgYgAgZglQgIAOAAAXIAAABQAAAXAIAOQAIAOARAAQARAAAJgOQAIgOAAgXIAAgBQAAgXgJgOQgIgOgRAAQgQAAgJAOg");
	this.shape_19.setTransform(123.4,48.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(139,195,74,0.898)").s().p("Ag/BaQgZgaAAgqIAAgrQAAgpAZgbQAZgbAmAAQAqAAAYAWQAXAWAAAlIAAABIgtAAQAAgWgLgMQgKgMgXAAQgTAAgMAQQgMARAAAaIAAArQABAaAMARQANAQATAAQAWAAAKgLQAKgMAAgWIAsAAIABABQAAAkgXAWQgXAWgpAAQgnAAgagbg");
	this.shape_20.setTransform(104.4,45.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(139,195,74,0.898)").s().p("Ag5BFQgPgSAAgkIAAhkIAtAAIAABlQAAASAGAIQAHAIAMAAQAJAAAIgDQAHgEAFgHIAAh5IAuAAIAACnIgnAAIgEgYQgIANgMAHQgKAIgPAAQgbAAgPgRg");
	this.shape_21.setTransform(77,48.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(139,195,74,0.898)").s().p("Ag5A/QgVgYAAgmIAAgBQAAgmAVgYQAVgYAkAAQAlAAAVAYQAVAYAAAmIAAABQAAAmgVAYQgVAYglAAQgkAAgVgYgAgZglQgIAOAAAXIAAABQAAAXAIAOQAIAOARAAQARAAAJgOQAIgOAAgXIAAgBQAAgXgJgOQgIgOgRAAQgQAAgJAOg");
	this.shape_22.setTransform(58.9,48.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(139,195,74,0.898)").s().p("AgWBxIAAhSIhMiPIAxAAIAxBpIAAAAIAxhpIAzAAIhPCRIAABQg");
	this.shape_23.setTransform(42.1,45.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.898)").s().p("AgQAOIAAgbIAgAAIAAAbg");
	this.shape_24.setTransform(697.8,297);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.898)").s().p("AgQAOIAAgbIAgAAIAAAbg");
	this.shape_25.setTransform(690.9,297);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.898)").s().p("AgPAOIAAgbIAgAAIAAAbg");
	this.shape_26.setTransform(683.9,297);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,255,255,0.898)").s().p("AgPAOIAAgbIAgAAIAAAbg");
	this.shape_27.setTransform(677,297);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(255,255,255,0.898)").s().p("AgXBXQgLgCgJgFIAGgZIAQAFQAIACAKAAQAMAAAHgGQAGgGAAgMIAAgLQgFAGgIAEQgIAEgHAAQgYAAgNgRQgNgRAAgbIAAgCQAAgeANgSQANgSAYAAQAIgBAJAFQAIAFAFAJIADgRIAeAAIAAB9QAAAYgRAOQgQAOgbAAQgJgBgLgCgAgQgzQgGALAAASIAAACQAAASAGAHQAGAKAKgBQAIAAAGgDQAFgCADgGIAAg1QgDgGgFgDQgGgEgIABQgKAAgGALg");
	this.shape_28.setTransform(666.6,294.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,255,255,0.898)").s().p("AAUBAIAAhNQAAgNgFgFQgFgGgKAAQgFAAgFADQgGACgDAGIAABaIgjAAIAAh9IAgAAIACATQAGgLAJgEQAIgGALAAQATAAALAMQALAMAAAaIAABNg");
	this.shape_29.setTransform(653.3,292);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(255,255,255,0.898)").s().p("AgQBbIAAh9IAgAAIAAB9gAgQhAIAAgaIAgAAIAAAag");
	this.shape_30.setTransform(643.4,289.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,255,255,0.898)").s().p("AgrBLQgMgRAAgcIAAgDQAAgcAMgSQANgSAYAAQAHAAAIAEQAHAEAHAHIAAhFIAhAAIAAC1IgdAAIgCgQQgHAJgIAFQgIAEgJAAQgXAAgNgRgAgQAAQgFAJgBASIAAADQAAARAGAJQAFAKALAAQAIAAAGgDQAFgDAEgGIAAg2QgEgEgFgEQgGgDgIAAQgKAAgGALg");
	this.shape_31.setTransform(633.2,289.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,255,255,0.898)").s().p("AguA3QgKgKAAgSQAAgTAOgIQAOgKAcAAIARAAIAAgKQAAgJgFgFQgFgFgHAAQgIAAgFAEQgEAEAAAHIghAAIAAgBQgBgQAPgMQAOgLAWAAQAXAAAOALQAOAMAAAVIAAAyQAAAJACAIQABAIADAIIgiAAIgDgJIgCgKQgGAJgIAGQgHAGgMAAQgUAAgLgKgAgRANQgFAFAAAIQAAAGAEAEQAEAEAIAAQAHAAAHgFQAHgEACgGIAAgSIgRAAQgLAAgGAGg");
	this.shape_32.setTransform(620.2,292.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,255,255,0.898)").s().p("AgqAvQgQgSAAgcIAAgBQAAgcAPgSQAQgSAbAAQAbAAAQASQAQASAAAcIAAABQAAAcgQASQgQASgbAAQgbAAgPgSgAgSgbQgGAKAAARIAAABQAAARAGAKQAGALAMAAQANAAAGgLQAGgKAAgRIAAgBQAAgRgGgKQgGgLgNAAQgMAAgGALg");
	this.shape_33.setTransform(607.1,292.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,255,255,0.898)").s().p("AgPBbIAAi1IAfAAIAAC1g");
	this.shape_34.setTransform(597.1,289.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,255,255,0.898)").s().p("AgmA0QgPgMABgRIAAgBIAfAAQABALAGAEQAGAFAIAAQAKAAAFgEQAFgEAAgGQAAgGgFgEQgGgEgNgDQgWgFgMgHQgLgJAAgPQAAgRAOgLQANgLAWAAQAYAAAOALQAPALgBASIAAAAIghAAQAAgHgFgFQgFgFgJAAQgHAAgEAEQgFAEAAAGQAAAGAFAEQAFAEANADQAXAEAMAHQALAJAAAQQAAASgPAKQgOALgYAAQgYAAgOgNg");
	this.shape_35.setTransform(581.7,292.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(255,255,255,0.898)").s().p("AgQBbIAAh9IAhAAIAAB9gAgQhAIAAgaIAhAAIAAAag");
	this.shape_36.setTransform(572.4,289.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,255,255,0.898)").s().p("AAUBbIgig1IgJAAIAAA1IgjAAIAAi1IAjAAIAABmIAJAAIAaguIApAAIgpA3IAuBGg");
	this.shape_37.setTransform(767.9,257.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(255,255,255,0.898)").s().p("AgqAvQgQgSAAgcIAAgBQAAgcAPgSQAQgSAbAAQAbAAAQASQAQASAAAcIAAABQAAAcgQASQgQASgbAAQgbAAgPgSgAgSgbQgGAKAAARIAAABQAAARAGAKQAGALAMAAQANAAAGgLQAGgKAAgRIAAgBQAAgRgGgKQgGgLgNAAQgMAAgGALg");
	this.shape_38.setTransform(753.9,260.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,255,255,0.898)").s().p("AgqAvQgQgSAAgcIAAgBQAAgcAPgSQAQgSAbAAQAbAAAQASQAQASAAAcIAAABQAAAcgQASQgQASgbAAQgbAAgPgSgAgSgbQgGAKAAARIAAABQAAARAGAKQAGALAMAAQANAAAGgLQAGgKAAgRIAAgBQAAgRgGgKQgGgLgNAAQgMAAgGALg");
	this.shape_39.setTransform(740.4,260.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(255,255,255,0.898)").s().p("AgKBYQgIgFgGgJIgCAQIgeAAIAAi1IAiAAIAABFQAGgHAIgEQAHgEAIAAQAYAAANASQANASAAAcIAAADQAAAcgNARQgNARgXAAQgJAAgJgEgAgNgIQgFAEgEAEIAAA2QAEAGAFADQAGADAHAAQAMAAAFgKQAGgJAAgRIAAgDQAAgSgGgJQgFgLgMAAQgHAAgGADg");
	this.shape_40.setTransform(727.2,257.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(255,255,255,0.898)").s().p("AATBbIghg1IgJAAIAAA1IgjAAIAAi1IAjAAIAABmIAIAAIAbguIApAAIgpA3IAuBGg");
	this.shape_41.setTransform(714.5,257.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(255,255,255,0.898)").s().p("AgiBAIAAh9IAgAAIACATQACgKAHgGQAHgFAKAAIAEABIAFABIgEAdIgMAAQgIAAgFADQgFAEgBAFIAABUg");
	this.shape_42.setTransform(703.7,260.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(255,255,255,0.898)").s().p("AgqAvQgQgSAAgcIAAgBQAAgcAPgSQAQgSAbAAQAbAAAQASQAQASAAAcIAAABQAAAcgQASQgQASgbAAQgbAAgPgSgAgSgbQgGAKAAARIAAABQAAARAGAKQAGALAMAAQANAAAGgLQAGgKAAgRIAAgBQAAgRgGgKQgGgLgNAAQgMAAgGALg");
	this.shape_43.setTransform(692.2,260.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(255,255,255,0.898)").s().p("AAYA/IgYhJIAAAAIgWBJIgdAAIggh9IAgAAIARBQIAAAAIAYhQIAVAAIAYBQIAAAAIARhQIAgAAIggB9g");
	this.shape_44.setTransform(676.6,260.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(255,255,255,0.898)").s().p("AgIBGQgKgKAAgVIAAg/IgSAAIAAgYIASAAIAAgfIAhAAIAAAfIAVAAIAAAYIgVAAIAAA/QAAAHADAEQACADAGAAIAEAAIAFgCIACAZIgKADIgKABQgRAAgIgKg");
	this.shape_45.setTransform(657.4,259);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(255,255,255,0.898)").s().p("AAUA/IgUgqIgTAqIgnAAIAog/Igng+IAnAAIASAoIAAAAIATgoIAmAAIgmA+IAoA/g");
	this.shape_46.setTransform(647.4,260.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(255,255,255,0.898)").s().p("AglAwQgRgSAAgbIAAgDQAAgcAQgSQAPgTAYABQAaAAAOAPQAOAQAAAaIAAARIhJAAIAAAAQAAANAIAIQAHAIALAAQALAAAIgCQAIgDAIgFIAKAVQgJAHgMAEQgNAEgOAAQgaAAgQgRgAgMgfQgFAIgBALIAAABIAnAAIAAgDQAAgLgEgGQgGgHgKAAQgIAAgFAHg");
	this.shape_47.setTransform(635,260.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(255,255,255,0.898)").s().p("AAUBAIAAhOQAAgMgFgGQgFgFgKAAQgFAAgFADQgGADgDAFIAABaIgjAAIAAh9IAgAAIACATQAGgKAJgGQAIgFALAAQATAAALAMQALAMAAAaIAABNg");
	this.shape_48.setTransform(621.8,260.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(255,255,255,0.898)").s().p("AgmAwQgQgSAAgbIAAgDQAAgcAPgSQAQgTAYABQAaAAAOAPQAOAQAAAaIAAARIhJAAIAAAAQAAANAHAIQAIAIALAAQAMAAAHgCQAHgDAJgFIAKAVQgJAHgMAEQgNAEgPAAQgZAAgRgRgAgMgfQgGAIAAALIAAABIAnAAIAAgDQAAgLgEgGQgGgHgKAAQgHAAgGAHg");
	this.shape_49.setTransform(602.8,260.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(255,255,255,0.898)").s().p("AAUBbIAAhLQAAgQgFgEQgFgGgKAAQgFAAgGADQgFADgEAEIAABbIgiAAIAAi1IAiAAIAABJQAGgKAJgEQAHgFAKAAQAUAAALANQAMANAAAaIAABLg");
	this.shape_50.setTransform(589.6,257.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(255,255,255,0.898)").s().p("AgQBVIAAiPIgwAAIAAgaICBAAIAAAaIgxAAIAACPg");
	this.shape_51.setTransform(576.1,258.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[{t:this.text}]},1).to({state:[]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},11).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.text).wait(8).to({_off:true},1).wait(33));

	// Smoke
	this.instance = new lib.Path();
	this.instance.setTransform(514.5,149.5,0.093,0.093,0,0,0,173.8,81);
	this.instance.alpha = 0.5;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(22).to({_off:false},0).wait(1).to({regX:174.1,regY:81.2,scaleX:0.11,scaleY:0.11,x:514.8,y:155,alpha:0.556},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:515.2,y:160.6,alpha:0.611},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:515.6,y:166.1,alpha:0.667},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:515.9,y:171.7,alpha:0.722},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:516.3,y:177.2,alpha:0.778},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:516.6,y:182.7,alpha:0.833},0).wait(1).to({scaleX:0.23,scaleY:0.23,x:517,y:188.3,alpha:0.889},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:517.3,y:193.8,alpha:0.944},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:517.7,y:199.4,alpha:1},0).wait(1).to({scaleX:0.31,scaleY:0.31,y:202.7,alpha:0.9},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:517.8,y:206,alpha:0.8},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:517.7,y:209.4,alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).wait(1));

	// Rocket
	this.instance_1 = new lib.Rocketship();
	this.instance_1.setTransform(170.2,252.6,0.427,0.427,0,0,0,87.9,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:82.5,rotation:2.8,x:183.6,y:268.3},0).wait(1).to({rotation:5.6,x:198.2,y:249.6},0).wait(1).to({rotation:8.4,x:213.7,y:231.6},0).wait(1).to({rotation:11.2,x:230,y:214.5},0).wait(1).to({rotation:14.1,x:247.2,y:198.1},0).wait(1).to({rotation:16.9,x:264.9,y:182.4},0).wait(1).to({rotation:19.7,x:283.2,y:167.3},0).wait(1).to({rotation:22.5,x:302.1,y:152.8},0).wait(1).to({rotation:25.3,x:321.4,y:139},0).wait(1).to({rotation:28.1,x:341.2,y:125.7},0).wait(1).to({rotation:30.9,x:361.2,y:112.8},0).wait(1).to({rotation:33.7,x:381.6,y:100.5},0).wait(1).to({rotation:36.6,x:402.4,y:88.5},0).wait(1).to({rotation:39.4,x:423.4,y:77.1},0).wait(1).to({rotation:42.2,x:444.7,y:65.9},0).wait(1).to({rotation:45,x:466.2,y:55.2},0).wait(1).to({rotation:37.5,x:473.7,y:61.8},0).wait(1).to({rotation:30,x:481.3,y:68.1},0).wait(1).to({rotation:22.5,x:489.1,y:73.9},0).wait(1).to({rotation:15,x:497.1,y:79.4},0).wait(1).to({rotation:7.5,x:504.9,y:84.4},0).wait(1).to({rotation:0,x:512.6,y:89},0).wait(1).to({x:515.5,y:93.5},0).wait(1).to({x:518.1,y:98.1},0).wait(1).to({x:520.3,y:103},0).wait(1).to({x:522.2,y:107.9},0).wait(1).to({x:523.6,y:113.1},0).wait(1).to({x:524.5,y:118.3},0).wait(1).to({x:524.9,y:123.6},0).wait(1).to({x:524.8,y:128.9},0).wait(1).to({x:524.1,y:134.2},0).wait(1).to({x:522.9,y:139.4},0).wait(1).to({x:521.3,y:144.5},0).to({_off:true},1).wait(8));

	// Rocket-2
	this.instance_2 = new lib.Rocketshipnoflame();
	this.instance_2.setTransform(521.7,68,0.432,0.432,0,0,0,87.8,-91.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(33).to({_off:false},0).wait(1).to({regX:87.9,regY:36.2,y:134.4},0).wait(1).to({y:145.8},0).wait(1).to({y:157.1},0).wait(6));

	// Shadow
	this.instance_3 = new lib.shadow();
	this.instance_3.setTransform(523.3,211.8,0.544,0.544,0,0,0,39.5,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(31).to({_off:false},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:523.2},0).wait(1).to({scaleX:0.73,scaleY:0.73},0).wait(1).to({scaleX:0.82,scaleY:0.82},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:1,scaleY:1},0).wait(6));

	// Planet
	this.instance_4 = new lib.planet();
	this.instance_4.setTransform(576.7,130.8,1,1,0,0,0,178.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:177.3,scaleX:1.08,scaleY:1.08,x:577.6,y:142.8},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:579.5,y:154.9},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:581.4,y:167},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:583.2,y:179.1},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:585.1,y:191.2},0).wait(1).to({scaleX:1.47,scaleY:1.47,x:587,y:203.3},0).wait(1).to({scaleX:1.55,scaleY:1.55,x:588.9,y:215.4},0).wait(1).to({scaleX:1.63,scaleY:1.63,x:590.8,y:227.5},0).wait(1).to({scaleX:1.71,scaleY:1.71,x:592.7,y:239.6},0).wait(1).to({scaleX:1.79,scaleY:1.79,x:594.6,y:251.7},0).wait(1).to({scaleX:1.87,scaleY:1.87,x:596.5,y:263.7},0).wait(1).to({scaleX:1.95,scaleY:1.95,x:598.4,y:275.8},0).wait(1).to({scaleX:2.03,scaleY:2.03,x:600.3,y:287.9},0).wait(1).to({scaleX:2.11,scaleY:2.11,x:602.2,y:300},0).wait(1).to({scaleX:2.18,scaleY:2.18,x:604.1,y:312.1},0).wait(1).to({scaleX:2.26,scaleY:2.26,x:606,y:324.2},0).wait(26));

	// Moon
	this.instance_5 = new lib.Moon();
	this.instance_5.setTransform(139.6,602.2,1,1,0,0,0,325,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({scaleX:0.98,scaleY:0.98,x:135.1,y:600.5},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:130.6,y:598.8},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:126.1,y:597},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:121.6,y:595.3},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:117.1,y:593.6},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:112.6,y:591.9},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:108.1,y:590.1},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:103.6,y:588.4},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:99.1,y:586.7},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:94.6,y:585},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:90.1,y:583.2},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:85.6,y:581.5},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:81.1,y:579.8},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:76.6,y:578.1},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:72.1,y:576.3},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:67.6,y:574.6},0).wait(26));

	// Stars
	this.instance_6 = new lib.stars2();
	this.instance_6.setTransform(384.4,223.1,1,1,0,0,0,564.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({scaleX:0.98,scaleY:0.98,x:384.9,y:221.9},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:385.4,y:220.7},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:385.9,y:219.6},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:386.4,y:218.4},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:386.8,y:217.2},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:387.4,y:216},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:387.8,y:214.8},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:388.3,y:213.7},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:388.8,y:212.5},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:389.3,y:211.3},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:389.8,y:210.1},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:390.3,y:208.9},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:390.8,y:207.7},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:391.2,y:206.6},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:391.8,y:205.4},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:392.2,y:204.2},0).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(204.6,122.5,1134.6,1007.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;