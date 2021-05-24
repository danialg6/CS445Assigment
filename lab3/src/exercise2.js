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
var bankAccount = /** @class */ (function () {
    function bankAccount() {
        this.money = 2000;
    }
    bankAccount.prototype.deposit = function (value) {
        this.money += value;
    };
    return bankAccount;
}());
;
var myself = /** @class */ (function (_super) {
    __extends(myself, _super);
    function myself() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Assad";
        _this.hoobies = ["Violin", "Cooking"];
        return _this;
    }
    return myself;
}(bankAccount));
var m = new myself();
m.deposit(3000);
console.log(m);
