"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getText = void 0;
var Point_1 = require("./Point");
var getText = function () {
    var NewPoint = /** @class */ (function (_super) {
        __extends(NewPoint, _super);
        function NewPoint(age) {
            if (age === void 0) { age = 18; }
            var _this = _super.call(this, 12, 34) || this;
            _this.age = age;
            _this.age = age;
            return _this;
        }
        NewPoint.prototype.drawNew = function () {
            _super.prototype.drawPoint.call(this);
            console.log('erer');
        };
        return NewPoint;
    }(Point_1.Point));
    var point = new NewPoint();
    point.drawNew();
    console.log(point.age);
    // interface Person {
    //   name: string,
    //   age: number,
    //   bust?: number,
    //   [propname: string]: any
    // }
    // let arr: [string, string, number] = ['1', '2', 3]
    var text = {
        name: '霍建华开发商'
    };
    return text;
};
exports.getText = getText;
exports.getText();
