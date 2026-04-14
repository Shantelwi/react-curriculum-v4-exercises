//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const fullName = 'Shantel Williams';
  const age = 28;
  const hobbies = [
    {id: 1, title: "Coding"},
    {id: 2, title: "Gaming"},
    {id: 3, title: "Biking"},
  ]
  return (
    <div>
      <h1>About Me</h1>
      <p>
        Hello! my name is {fullName}. I am {age} years old.
      </p>
      <h2>My Hobbies</h2>
      <ul>
        {hobbies.map(hobby => <li key={hobby.id}>{hobby.title}</li>)}
      </ul>
    </div>
  );
}
