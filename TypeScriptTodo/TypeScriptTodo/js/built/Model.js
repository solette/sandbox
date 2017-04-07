"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// using internal Model
var TodoState;
(function (TodoState) {
    TodoState[TodoState["New"] = 1] = "New";
    TodoState[TodoState["Active"] = 2] = "Active";
    TodoState[TodoState["Completed"] = 3] = "Completed";
    TodoState[TodoState["Deleted"] = 4] = "Deleted";
})(TodoState = exports.TodoState || (exports.TodoState = {}));
