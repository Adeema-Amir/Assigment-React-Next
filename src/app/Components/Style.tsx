/* eslint-disable @next/next/no-img-element */
const person = {
    name: 'Gregorio Y. Zara',
    src: 'https://i.imgur.com/7vQD0fPs.jpg',
    theme: {
      backgroundColor: 'black',
      color: 'yellow ',
    }
};
  
export default function Style() {
    return (
      <div style={person.theme}>
        <h1>{person.name}s Todos</h1>
        <img
          className="avatar"
          src={person.src}
          alt="Gregorio Y. Zara"
        />
        <ul>
          <li>Lorem ipsum dolor.</li>
          <li>Sit amet consectetur.</li>
          <li>Elit neque quas dolorum.</li>
        </ul>
      </div>
    );
}