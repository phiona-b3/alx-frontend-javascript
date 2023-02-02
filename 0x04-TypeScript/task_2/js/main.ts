interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome() {
        return 'Working from home';
    }

    getCoffeeBreak() {
        return 'Getting a coffee break';
    }

    workDirectorTasks() {
        return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface {
    workFromHome() {
        return 'Cannot work from home';
    }

    getCoffeeBreak() {
        return 'Cannot have a break';
    }

    workTeacherTasks() {
        return 'Getting to work';
    }
}

function createEmployee(salary: number | string) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

function isDirector(employee: Teacher | Director): boolean {
    return employee instanceof Director;
}

function executeWork(employee: Teacher | Director): string {
    if (employee instanceof Director) {
        return employee.workDirectorTasks();
    } else if (employee instanceof Teacher) {
        return employee.workTeacherTasks();
    }
}

executeWork(createEmployee(200));
executeWork(createEmployee(1000));

type Subjects =  "Math" | "History";

function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
        return 'Teaching Math';
    } else if (todayClass === "History") {
        return 'Teaching History';
    }
}

teachClass('Math');
teachClass('History');