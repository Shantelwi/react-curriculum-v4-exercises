//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  let f_name = 'Shantel';
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
      {
        <>
          {' '}
          Hello My name is {f_name}. I am {age}, These are some of my hobbies
          that I enjoy when I can.
          <ul>
            {hobbies.map((hobbies) => (
              <li key={hobbies.id}>{hobbies.title}</li>
            ))}
          </ul>
        </>
      }
      <p>
        {' '}
        I am currently in a Coding program learning front and back end software
        development. Some expectations for the future is to gain an
        apprecticeship and then move on to being a full time developer.
      </p>
    </div>
  );
}
