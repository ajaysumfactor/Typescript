var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Customer = /** @class */ (function () {
    function Customer(fname, lname, age) {
        this.firstName = '';
        this.lastName = '';
        this.age = 0;
        this.firstName = fname;
        this.lastName = lname;
        this.age = age;
    }
    return Customer;
}());
var RefactoredCustomer = /** @class */ (function () {
    // firstName='';
    // lastName='';
    // age=0;
    function RefactoredCustomer(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    RefactoredCustomer.prototype.placeOrder = function (productId) {
        console.log(productId);
    };
    return RefactoredCustomer;
}());
var GoldCustomer = /** @class */ (function (_super) {
    __extends(GoldCustomer, _super);
    function GoldCustomer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GoldCustomer;
}(RefactoredCustomer));
var customer = new RefactoredCustomer('John', 'Doe', 56);
console.log(customer.age);
customer.placeOrder(67);
var goldCustomer = new GoldCustomer('John', 'Doe', 78);
console.log(goldCustomer.age);
goldCustomer.placeOrder(56);
