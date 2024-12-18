import './App.css'
import ImageCard from '../Components/ImageCard'
import ProfileCard from '../Components/ProfileCard'


function App() {
  return (
    <>
      <div className='card'>
        <ImageCard />
        <ProfileCard name="John Doe" title= "Frontend Developer" bio= "Passionate about building web applications with React." />
      </div>
    </>
  )
}

export default App
