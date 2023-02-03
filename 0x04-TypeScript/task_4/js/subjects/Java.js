/// <reference path="Teacher.ts" />
var Subjects;
(function (Subjects) {
    class Java extends Subjects.Subject {
        getRequirements() {
            return "Here is the list of requirements for Java";
        }
        getAvailableTeacher() {
            const exp = this.teacher.experienceTeachingJava;
            if (exp > 0) {
                return `Available Teacher: ${this.teacher.firstName}`;
            }
            else {
                return "No availbale teacher";
            }
        }
    }
    Subjects.Java = Java;
})(Subjects || (Subjects = {}));
