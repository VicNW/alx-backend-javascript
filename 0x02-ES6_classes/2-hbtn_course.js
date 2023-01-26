/* eslint-disable no-underscore-dangle */

export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name != 'string') {
      throw new TypeError("Name must be a string");
    }
    else {
      this._name = name;
    }
    if (typeof length != 'number') {
      throw new TypeError("Length must be a number");
    }
    else {
      this._length = length;
    }
    if (!Array.isArray(students)) {
      throw new TypeError("Students must be an array");
    }
    else {
      this._students = students;
    }
  }

  get name() {
    return this._name;
  }

  set name(n) {
    if (typeof n != 'string') {
      throw new TypeError("Name must be a string");
    }
    else {
      //name = n;
      this._name = n;
    }
  }

  get length() {
    return this._length;
  }

  set length(len) {
    if (typeof n != 'number') {
      throw new TypeError("Length must be an number");
    }
    else {
      //length = n;
      this.length = n;
    }
  }

  get students() {
    return this._studens;
  }

  set students(std) {
    if (!Array.isArray(students)) {
      throw new TypeError("Students must be an array");
    }
    else {
     // students = n;
      this._students = n;
    }
  } 
}
