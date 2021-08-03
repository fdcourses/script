"use strict";

let thread = [];

class User {
  constructor(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return `${this.name} ${this.lastName}`;
  }

  createMessage(message) {
    thread.push(message);
    return message;
  }
}

class Moderator extends User {
  constructor(name, lastName, age, permissions) {
    super(name, lastName, age);

    this.permissions = permissions;
  }
  deleteMessage(messageId) {
    thread.pop();
  }

  betterDeleteMessage(messageId) {
    thread = thread.filter((message, i) => {
      return messageId !== i;
    });
  }
}
// создать класс Admin, который наследуется от MOderator

class Admin extends Moderator {
  constructor(name, lastName, age, permissions, email) {
    super(name, lastName, age, permissions, email);

    this.email = email;
  }
}

const u1 = new User("Test", "tsts", 50);
const m1 = new Moderator("Petr", "Semenovich", 45, { canDeleteMessages: true });

const admin = new Admin(
  "Feofan",
  "Semenovich",
  25,
  { canDeleteUsers: true, canDeleteMessages: true },
  "nerazbany@mail.com"
);
