/* eslint-disable @next/next/no-img-element */
export default function Avatar() {
    const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
    const description = 'Gregorio Y. Zara';
    const name = 'Gregorio Y. Zara';

    return (
      <>
      <img
        className="avatar"
        src={avatar}
        alt={description}
      />
      <br /><br />
      <h1>My Name Is {name}</h1>
      </>
    );
}