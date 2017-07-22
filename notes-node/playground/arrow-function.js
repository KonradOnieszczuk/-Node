var square = x => x * x;

console.log(square(3));

var user = {
    name: 'Andrew',
    sayHi: function () {
        console.log(arguments);
        console.log(`Hi, I'm ${this.name}`);
    },
};

user.sayHi(1, 2, 3);