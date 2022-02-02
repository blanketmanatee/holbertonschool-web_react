"use strict";
exports.__esModule = true;
exports.teachClass = exports.executeWork = exports.isDirector = exports.createEmployee = exports.Teacher = exports.Director = void 0;
var Director = /** @class */ (function () {
    function Director() {
        this.workFromHome = function () { return 'Working from home'; };
        this.getCoffeeBreak = function () { return 'Getting a coffee break'; };
        this.workDirectorTasks = function () { return 'Getting to director tasks'; };
    }
    return Director;
}());
exports.Director = Director;
var Teacher = /** @class */ (function () {
    function Teacher() {
        this.workFromHome = function () { return 'Cannot work from home'; };
        this.getCoffeeBreak = function () { return 'Cannot have a break'; };
        this.workTeacherTasks = function () { return 'Getting to work'; };
    }
    return Teacher;
}());
exports.Teacher = Teacher;
var createEmployee = function (salary) { return Number(salary) < 500 ? new Teacher() : new Director(); };
exports.createEmployee = createEmployee;
function isDirector(employee) {
    return employee.workDirectorTasks !== undefined;
}
exports.isDirector = isDirector;
function executeWork(employee) {
    var res = undefined;
    (isDirector(employee)) ? res = employee.workDirectorTasks() : res = employee.workTeacherTasks();
    return res;
}
exports.executeWork = executeWork;
function teachClass(todayClass) {
    if (todayClass === "Math") {
        return "Teaching Math";
    }
    else if (todayClass === "History") {
        return "Teaching History";
    }
}
exports.teachClass = teachClass;
console.log(teachClass("Math"));
console.log(teachClass("History"));
