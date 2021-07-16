"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        if (_x === void 0) { _x = 2; }
        if (_y === void 0) { _y = 3; }
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.drawPoint = function () {
        console.log('x:' + this._x, 'y:' + this._y);
    };
    Point.prototype.getDistance = function (p) {
        return Math.pow(p.x - this._x, 2) + Math.pow(p.y - this._y, 2);
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
exports.Point = Point;
