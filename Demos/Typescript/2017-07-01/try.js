var Dog = (function () {
    function Dog(theName) {
        this.name = theName;
    }
    Dog.prototype.eat = function () {
        console.log(this.name + " \u5403\u72D7\u7CAE.");
    };
    return Dog;
}());
var Cat = (function () {
    function Cat(theName) {
        this.name = theName;
    }
    Cat.prototype.eat = function () {
        console.log(this.name + " \u5403\u732B\u7CAE.");
    };
    return Cat;
}());
var Biology;
(function (Biology) {
    var Dog = (function () {
        function Dog(theName) {
            this.name = theName;
        }
        Dog.prototype.eat = function () {
            console.log(this.name + " \u5403\u72D7\u7CAE");
        };
        return Dog;
    }());
    Biology.Dog = Dog;
    var Cat = (function () {
        function Cat(theName) {
            this.name = theName;
        }
        Cat.prototype.eat = function () {
            console.log(this.name + " \u5403\u732B\u7CAE");
        };
        return Cat;
    }());
    Biology.Cat = Cat;
})(Biology || (Biology = {}));
var dog;
dog = new Biology.Dog('狗狗');
dog.eat();
