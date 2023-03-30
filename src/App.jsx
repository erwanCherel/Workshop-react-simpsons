import './App.css'
import Avatar from './components/Avatar'

const simpsons = [
  {
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
    firstName: "Bart",
    lastName: "simpson",
  },
  {
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2248-homer-simpson-happy.png",
    firstName: "Homer",
    lastName: "simpson",
  },
  {
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2250-lisa-simpson-sticker.png",
    firstName: "Lisa",
    lastName: "simpson",
  },
    {
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2252-marge-simpson-sticker.png",
    firstName: "Marge",
    lastName: "simpson",
  }
];

function App() {


  return (
    <div className="App">
      <div className='grid'>{simpsons.map((simpson) => 
      <Avatar
      image={simpson.image}
      firstName={simpson.firstName}
      lastName={simpson.lastName.toUpperCase()} 
      /> )}</div>
    </div>
  )
}

export default App
