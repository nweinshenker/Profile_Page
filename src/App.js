import './App.css';
import Avatar from './components/Avatar'


const user = {
  src : "images/cow.jpeg",
  alt : "this is a cow"
}

function App() {
  return (
    <div className="App">
      <Avatar
        src={user.src}
        alt={user.alt}
                />
    </div>
  );
}

export default App;
