//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  let firstName = 'Shantel';
  let age = 28;
  let hobbies = [
    { id: 1, title: 'biking' },
    { id: 2, title: 'hiking' },
    { id: 3, title: 'shooting' },
    { id: 4, title: 'fishing' },
    { id: 5, title: 'gaming' },
    { id: 6, title: 'coding' },
  ];
  return (
    <div>
      <h1>About Me</h1>
      <p>
        Hello my name is {firstName}. I am {age}, These are some of my hobbies
        that I enjoy when I can.
        <ul>
          {hobbies.map((hobby) => (
            <li key={hobby.id}>{hobby.title}</li>
          ))}
        </ul>
      </p>
      <p>
        I am currently in a Coding program learning front and back end software
        development. Some expectations for the future are to gain an
        apprenticeship and then move on to being a full time developer.
      </p>
    </div>
  );
}
