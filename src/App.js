import './App.css';
import Avatar from './components/Avatar'
import SideBar from './components/SideBar';


const user = {
  src: "images/cow.jpeg",
  alt: "this is a cow"
}

function App() {
  return (
    <div className="App">
      {/*
      <Avatar
        src={user.src}
        alt={user.alt}
      />
      */}
      <SideBar />
    </div>
  );
}

export default App;
