import './App.css';
import Profile from './profile/Profile';

function App() {
 
  const profile = {
    fullName: 'Emmanuel Ogbonnaya Nwafor',
    bio: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores ratione, consequatur nesciunt nostrum, voluptatem veritatis ea iste repellat, perspiciatis sequi animi vel nemo magni sed illum minima eius eveniet debitis!',
    profession: 'Student'
  };

  return (
  <div className='app'>
    <Profile fullName={profile.fullName} bio={profile.bio} profession={profile.profession}/>
  </div>
  );
}

export default App;
