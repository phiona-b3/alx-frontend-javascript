/// <reference path="Teacher.ts" />

namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    getRequirements(): string {
        return "Here is the list of requirements for Cpp";
    }
    getAvailableTeacher(): string {
      const exp = this.teacher.experienceTeachingC;
      if (exp > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else { 
        return "No availbale teacher";
      }
    }
  }
}