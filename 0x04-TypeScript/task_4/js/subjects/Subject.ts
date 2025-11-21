namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
    experienceTeachingC?: number;
    experienceTeachingJava?: number;
    experienceTeachingReact?: number;
  }

  export class Subject {
    protected teacher?: Teacher;

    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
