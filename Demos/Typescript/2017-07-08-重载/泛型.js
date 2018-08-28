function identity(arg) {
    return arg;
}
function loggingIdentity(arg) {
    return arg;
}
loggingIdentity({ value: 3, length: 1 });
var exam;
(function (exam) {
    exam[exam["A"] = 1] = "A";
    exam[exam["B"] = 2] = "B";
    exam[exam["C"] = 2] = "C";
})(exam || (exam = {}));
console.log(exam.B);
