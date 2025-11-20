interface DirectorInterface {
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string): Director | Teacher {
    // @ts-ignore
  if (salary < 500) {
    return new Teacher();
  } 
  return new Director();
}

function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

executeWork(createEmployee(200));
executeWork(createEmployee(1000));
