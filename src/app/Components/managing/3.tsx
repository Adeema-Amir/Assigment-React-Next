"use client"
import { useState } from 'react';

export default function Three() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h2>Adeema</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quibusdam exercitationem aut nostrum pariatur, earum veritatis debitis, unde nisi sed ullam, facilis ex totam asperiores ut qui tempore ipsum dolorum.
      </Panel>
      <Panel
        title="Adeema, Amir"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio totam iste neque sed facilis doloremque consequatur quibusdam assumenda in ex deserunt maxime quod et laudantium, voluptatibus ipsum expedita voluptatum soluta.
      </Panel>
    </>
  );
}

function Panel({
  title,
  children,
  isActive,
  onShow
} : { title:any; children:any; isActive:any; onShow:any; } ) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}
