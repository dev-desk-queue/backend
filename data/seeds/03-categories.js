exports.seed = function (knex) {
  return knex('categories').insert(
    validCategories.map(cat => {
      return { name: cat };
    })
  );
};

const validCategories = [
  'User Interface I',
  'User Interface II',
  'User Interface III',
  'Git for Web Development',
  'Responsive Design I',
  'Responsive Design II',
  'Preprocessing I',
  'Preprocessing II',
  'JavaScript I',
  'JavaScript II',
  'JavaScript III',
  'JavaScript IV',
  'DOM I',
  'DOM II',
  'Components I',
  'Components II',
  'Build Week: User Interface',
  'Functional Components I',
  'Functional Components II',
  'Class Components I',
  'Class Components II',
  'React Tooling',
  'The React Lifecycle',
  'React Composition Patterns',
  'CSS in JS',
  'React Router I',
  'React Router II',
  'HTTP / AJAX I',
  'HTTP / AJAX II',
  'Redux Fundamentals I',
  'Redux Fundamentals II',
  'Async Redux - Redux Thunk',
  'Redux Middleware / Authentication',
  'Build Week: Front End',
  'Introduction to Node.js and Express',
  'Server-side Routing',
  'Express Middleware',
  'Deployment and Best Practices',
  'Introduction to Relational Databases and SQL',
  'Inserting and Modifying Data',
  'Querying Data',
  'Migrations and Seeding',
  'Introduction to Data Modeling',
  'Introduction to Authentication',
  'Using Sessions and Cookies',
  'Using JSON Web Tokens (JWT)',
  'Client Side Authentication',
  'Testing I',
  'Testing II',
  'Testing III',
  'Testing IV',
  'Build Week: Back End',
];

module.exports = validCategories;
