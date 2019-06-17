function test() {
	console.log(this.myName);
	this.myName = "Hao";
}
test();
console.log(this.myName);

