const MY_PROJECT_NAME = `React Case Study Project`;
const START_DATE = `1401/07/15`;
const SESSION_COUNT = 8;
const CURRENT_SESSION = 3;

/*
    راه اول
    export { variable1 }
    export { variable2 }
    export { variable3 }
    export default variable4 
*/

// export { MY_PROJECT_NAME }
// export { START_DATE }
// export { SESSION_COUNT }
// export default CURRENT_SESSION

/*
    راه دوم
    export { variable1, variable2, ....}
    export default variable3
*/
// export { MY_PROJECT_NAME, START_DATE, SESSION_COUNT };
// export default CURRENT_SESSION;

/**
    راه سوم
    export { variable1, variable2 as newName, variable3 as default }
 */
export {
  MY_PROJECT_NAME,
  MY_PROJECT_NAME as MyProjectName,
  SESSION_COUNT,
  START_DATE,
  CURRENT_SESSION as default,
};
// export { MY_PROJECT_NAME as MyProjectName}

/*
    راه چهارم
    export const CONSTANT_NAME = value
    export let variable = value
    export function functionName() {....}
    export class ClassName { ... }

    export default function functionName() {....}
    export default class ClassName { ... }
*/

export const INSTITUE = 'Mojtame Fanni Tehran';

const teacher = {
  firstName: 'Hamid Rezad',
  lastName: 'Izadi Matin',
};

export const showTeacherInfo = () => `${teacher.firstName} ${teacher.lastName}`;

export class Course {
  #name;
  #duration;

  constructor(name, duration) {
    this.#name = name;
    this.#duration = duration;
  }

  get showInfo() {
    return `Course: ${this.#name}, Duration: ${this.#duration}, Teacher: ${teacher.firstName} ${
      teacher.lastName
    }`;
  }
}

export const studentList = [
    {
        firstName: 'پوریا',
        lastName: 'محمدیان',
    },
    {
        firstName: 'پویا',
        lastName: 'یموتی',
    },
    {
        firstName: 'ملینا',
        lastName: 'عبدلی',
    }
]