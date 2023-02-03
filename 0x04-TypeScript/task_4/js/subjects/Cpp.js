/// <reference path="Teacher.ts" />
var Subjects;
(function (Subjects) {
    class Cpp extends Subjects.Subject {
        getRequirements() {
            return "Here is the list of requirements for Cpp";
        }
        getAvailableTeacher() {
            const exp = this.teacher.experienceTeachingC;
            if (exp > 0) {
                return `Available Teacher: ${this.teacher.firstName}`;
            }
            else {
                return "No availbale teacher";
            }
        }
    }
    Subjects.Cpp = Cpp;
})(Subjects || (Subjects = {}));
