/// <reference path="Teacher.ts" />
var Subjects;
(function (Subjects) {
    class React extends Subjects.Subject {
        getRequirements() {
            return "Here is the list of requirements for React";
        }
        getAvailableTeacher() {
            const exp = this.teacher.experienceTeachingReact;
            if (exp > 0) {
                return `Available Teacher: ${this.teacher.firstName}`;
            }
            else {
                return "No available teacher";
            }
        }
    }
    Subjects.React = React;
})(Subjects || (Subjects = {}));
