document.addEventListener('DOMContentLoaded', () => {
  let students = [
    'Tim',
    'Marcel',
    'Noah',
    'Mark',
    'Joe',
    'Hunter',
    'Andres',
    'Alessa',
    'Jason',
    'Rachel',
    'Jeremy',
    'Thomas',
    'Jon',
    'Sky'
  ];

  let questions = [
    'What is Git? What is it used for?',
    'What the difference between Git and GitHub?',
    'What are two commonly used types of loops in JavaScript? When would you use one over another?',
    'What does Truthy and Falsey mean? Give examples of each.',
    'Array methods: what do push(), pop(), shift(), unshift(), and .length do when called on an array?',
    'What are the primitive datatypes in JavaScript?',
    'What are two ways of creating grid systems with CSS? Explain how they\'re used.',
    'Explain the Box Model. What is the difference between border-box and content-box?',
    'What is type coercion? Give an example.',
    'What is an if/else statment? What is it used for?',
    'What are functions used for? How do you write a function?',
    'Explain the difference between the following Git commands: "git add", "git commit", "git push"',
    'What is an array? What is it used for?',
    'What is a switch statement? What is it used for?'
  ];

  const currentStudent = document.querySelector('.current-student');
  const currentQuestion = document.querySelector('.current-question');
  
  const startSlips = () => {
    currentStudent.addEventListener('click', (event) => {
      if(students.length > 0 && questions.length > 0) {
        currentStudent.innerText = students.pop();
        currentQuestion.innerText = questions.pop();
      }
    });
  };

  startSlips();
});