var mongoose = require('mongoose')
  , Laptop = mongoose.model('Laptop');

exports.buy = function(req,res) {
	var ss = req.body.ss;
	var ms = req.body.ms;
	var ds = req.body.ds;
	
	
	//USING CONSTRUCTOR PATTERN.
	function computer() {
	    this.screenSize = function () {return 11;};
	    this.hardDrive = function () {return 128;};
	    this.memorySize = function () {return 8;};
	    this.price = function () {return 1000;};
	}

	//USING DECORATOR PATTERN.
	function screenInc(laptop) {
	    var p = laptop.price();
	    var ls = laptop.screenSize();
	    laptop.price = function() {
	        return p + 200;
	    };
	    laptop.screenSize = function() {
	        return ls + 4;
	    };

	}

	function driveInc(laptop) {
	    var p = laptop.price();
	    var hd = laptop.hardDrive();
	    laptop.price = function() {
	        return p + 200;
	    };
		laptop.hardDrive = function() {
	        return hd + 128;
	    };

	}

	function memoryInc(laptop) {
	    var p = laptop.price();
	    var lm = laptop.memorySize();
	    laptop.price = function() {
	        return p + 200;
	    };
	    laptop.memorySize = function() {
	        return lm + 8;
	    };

	}

	var lt = new computer();

	if (ss == 1){
		screenInc(lt);
	}
	if(ds == 1){
		driveInc(lt);
	}
	if(ms == 1) {
		memoryInc(lt);
	}
	
	 var laptop = new Laptop();
	 laptop.price = lt.price();
	 laptop.screen = lt.screenSize();
	 laptop.harddrive = lt.hardDrive();
	 laptop.memory = lt.memorySize();
  
  laptop.save(function (err) {
    if(err) {
      console.log(err)
    } else {
      console.log(laptop);
    }

  });
	res.render('index',{});
};

exports.prev = function(req,res) {
	Laptop.find({}, function(err, laptops) {
    res.render('laptops', { 
      laptops: laptops
    });
 });
};