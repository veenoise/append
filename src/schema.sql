DROP TABLE IF EXISTS 'Courses';
DROP TABLE IF EXISTS 'UserCourses';
DROP TABLE IF EXISTS 'Topics';
DROP TABLE IF EXISTS 'User';


CREATE TABLE 'User' (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE 'Courses' (
    'id' INTEGER PRIMARY KEY AUTOINCREMENT,
    'name' TEXT NOT NULL,
    'difficulty' TEXT NOT NULL,
    'description' TEXT NOT NULL
);

CREATE TABLE 'UserCourses' (
    'id' INTEGER PRIMARY KEY AUTOINCREMENT,
    'user_id' INTEGER NOT NULL,
    'course_id' INTEGER NOT NULL,
    FOREIGN KEY('user_id') REFERENCES 'Users'('id'),
    FOREIGN KEY('course_id') REFERENCES 'Courses'('id')
);

CREATE TABLE 'Topics' (
    'id' INTEGER PRIMARY KEY AUTOINCREMENT,
    'name' TEXT NOT NULL,
    'course_id' INTEGER NOT NULL,
    FOREIGN KEY('course_id') REFERENCES 'Courses'('id')
);