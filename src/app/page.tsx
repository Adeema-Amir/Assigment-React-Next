import Avatar from "./Components/Avatar"
import Carousel from "./Components/Carousel"
import PackingList from "./Components/Conditionarendering"
import TodoList from "./Components/Date"
import Profile from "./Components/Profile"
import Propspage from "./Components/Props"
import Style from "./Components/Style"
import Form from "./Components/Message"
import Counter from "./Components/Counter"
import MovingDot from "./Components/Movingcursor"
import First from "./Components/managing/1"
import Second from "./Components/managing/2"
import Three from "./Components/managing/3"
import Four from "./Components/managing/4"
import Five from "./Components/managing/5"
import Six from "./Components/managing/6"
import Seven from "./Components/managing/7"
import Eight from "./Components/managing/8"
import Nine from "./Components/managing/9"
import Ten from "./Components/managing/10"


export default function Home() {
  return (
    <>
      {/* 1 */}
      <section className="flex gap-x-2">
        <Profile />
        <Profile />
        <Profile />
    </section>
      <br /><br />

      {/* 2 */}
      <Avatar />
      <br /><br />

      {/* 3 */}
      <TodoList />
      <br /><br />

      {/* 4 */}
      <Style />
      <br /><br />

      {/* 5 */}
      <Propspage />
      <br /><br />

      {/* 6 */}
      <PackingList />
      <br /><br />

      {/* 7 */}
      <Carousel />
      <br /><br />

      {/* 8 */}
      <Form />
      <br /><br />

      {/* 9 */}
      <Counter />
      <br /><br />

      {/* 10 */}
      <MovingDot />
      <br /><br />

      {/* 11 */}
      <Counter />
      <br /><br />

      <br /><br /><br /><br /><br /><br />

      <h1>Managing State</h1>

      <br /><br /><br />
      

      {/* managing 1 */}
      <br /><br />
      <h1>1</h1>
      <First />


      {/* managing 2 */}
      <br /><br />
      <h1>2</h1>
      <Second />
   

      {/* managing 3 */}
      <br /><br />
      <h1>3</h1>
      <Three />
      

      {/* managing 4 */}
      <br /><br />
      <h1>4</h1>
      <Four />
     

      {/* managing 5 */}
      <br /><br />
      <h1>5</h1>
      <Five />
      

      {/* managing 6 */}
      <br /><br />
      <h1>6</h1>
      <Six />
      
      {/* managing 7 */}
      <br /><br />
      <h1>7</h1>
      <Seven />
      
      {/* managing 8 */}
      <br /><br />
      <h1>8</h1>
      <Eight />

      {/* managing 9 */}
      <br /><br />
      <h1>9</h1>
      <Nine />

      {/* managing 10 */}
      <br /><br />
      <h1>10</h1>
      <Ten />
    </>
  )
}