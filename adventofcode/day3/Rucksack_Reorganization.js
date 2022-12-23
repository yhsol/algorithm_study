"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var fs = require("fs");
var readlines = require("readline");
// Lowercase item types a through z have priorities 1 through 26.
// Uppercase item types A through Z have priorities 27 through 52.
// copilot 이 만든 코드
var getPriority = function (item) {
    var code = item.charCodeAt(0);
    if (code >= 97 && code <= 122) {
        return code - 96;
    }
    if (code >= 65 && code <= 90) {
        return code - 38;
    }
    return 0;
};
var readLines = function (filePath) { return __awaiter(void 0, void 0, void 0, function () {
    var lines;
    return __generator(this, function (_a) {
        lines = [];
        return [2 /*return*/, new Promise(function (resolve, reject) {
                var rl = readlines.createInterface({
                    input: fs.createReadStream(filePath),
                    crlfDelay: Infinity
                });
                rl.on("line", function (line) {
                    lines.push(line);
                });
                rl.on("close", function () {
                    resolve(lines);
                });
            })];
    });
}); };
var rucksackReorganizationPart1 = function () { return __awaiter(void 0, void 0, void 0, function () {
    var res, lines, storage_1, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                res = 0;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, readLines("./puzzle_input.txt")];
            case 2:
                lines = (_a.sent());
                storage_1 = new Map();
                lines.forEach(function (line, i) {
                    var lastIndex = line.length - 1;
                    var center = Math.floor(lastIndex / 2);
                    var _a = [line.slice(0, center), line.slice(center, lastIndex)], a = _a[0], b = _a[1];
                    var visited = new Set();
                    for (var _i = 0, b_1 = b; _i < b_1.length; _i++) {
                        var c = b_1[_i];
                        if (a.includes(c) && !visited.has(c)) {
                            visited.add(c);
                            var count = storage_1.get(c) || 0;
                            var priority = getPriority(c); // 스펠링 별 점수 계산
                            storage_1.set(c, count + priority);
                        }
                    }
                });
                storage_1.forEach(function (value) {
                    res += value;
                });
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.error(error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/, res];
        }
    });
}); };
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, rucksackReorganizationPart1()];
            case 1:
                res = _a.sent();
                console.log("res: ", res);
                return [2 /*return*/];
        }
    });
}); })();
