"use strict";
// The first column: A for Rock, B for Paper, and C for Scissors
// The second column--
// The second column, you reason, must be what you should play in response: X for Rock, Y for Paper, and Z for Scissors
// 1 for Rock, 2 for Paper, and 3 for Scissors + 0 if you lost, 3 if the round was a draw, and 6 if you won)
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
        while (_) try {
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
// 1. 일단 퍼즐 인풋을 읽어내야 함. 1 컬럼, 2 컬럼 분리해서. => 파일을 라인 단위로 읽고, 빈칸을 기준으로 구분.
// 2. 인풋을 순회하면서 계산 진행. => 이겼는지 졌는지. 내 모양은 무엇이었는지.
// 3. 계산에 필요한 알고리즘. 가위바위보 알고리즘을 만들어야 함.
// 4. 인풋 데이터를 어떤 구조에 담아둘까.
var fs = require("fs");
var readline = require("readline");
var readLines = function (filePath) { return __awaiter(void 0, void 0, void 0, function () {
    var lines;
    return __generator(this, function (_a) {
        lines = [];
        return [2 /*return*/, new Promise(function (resolve, reject) {
                var rl = readline.createInterface({
                    input: fs.createReadStream(filePath),
                    crlfDelay: Infinity
                });
                rl.on("line", function (line) {
                    lines.push(line);
                });
                // close 될 때 resolve 를 해주면 됨.
                rl.on("close", function () {
                    resolve(lines);
                });
            })];
    });
}); };
var 승부결과 = function (a, b) {
    var lost = 0;
    var draw = 3;
    var win = 6;
    if (a === "A") {
        if (b === "X")
            return draw;
        if (b === "Y")
            return win;
        if (b === "Z")
            return lost;
    }
    if (a === "B") {
        if (b === "X")
            return lost;
        if (b === "Y")
            return draw;
        if (b === "Z")
            return win;
    }
    if (a === "C") {
        if (b === "X")
            return win;
        if (b === "Y")
            return lost;
        if (b === "Z")
            return draw;
    }
    return 0;
};
var 모양에따른점수 = function (a) {
    if (a === "X")
        return 1;
    if (a === "Y")
        return 2;
    if (a === "Z")
        return 3;
    return 0;
};
var rockPaperScissors = function () { return __awaiter(void 0, void 0, void 0, function () {
    var res, lines, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                res = 0;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, readLines("./puzzle-input.txt")];
            case 2:
                lines = (_a.sent());
                lines.forEach(function (line) {
                    var opponent = line.split(" ")[0];
                    var me = line.split(" ")[1];
                    var 경기점수 = 승부결과(opponent, me);
                    var 모양점수 = 모양에따른점수(me);
                    res += 경기점수 + 모양점수;
                });
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.error("error", error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/, res];
        }
    });
}); };
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, rockPaperScissors()];
            case 1:
                res = _a.sent();
                console.log("🚀 turbo : res", res);
                return [2 /*return*/];
        }
    });
}); })();
