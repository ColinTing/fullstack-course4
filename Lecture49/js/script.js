// var literalCircle = {
// 	radius: 10,
// 	getArea: function () {
// 		console.log(this);
// 	}
// };

// literalCircle.getArea();

var literalCircle = {
	radius: 10,

	getArea: function () {
		self = this;
		console.log(this);

		var increaseRadius = function () {
			self.radius = 20;
		};
		increaseRadius();
		console.log(this.radius);
		return Math.PI * Math.pow(this.radius, 2);
	}
};

console.log(literalCircle.getArea());