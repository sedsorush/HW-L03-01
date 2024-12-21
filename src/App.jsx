import './App.css'
import ImageCard from '../Components/ImageCard'
import ProfileCard from '../Components/ProfileCard'


function App() {
  return (
    <>
      <div className='card'>
        <ImageCard source= "..\src\assets\pngtree-casual-man-flat-design-avatar-profile-picture-vector-png-image_15526568.png"
          altLink= "https://png.pngtree.com/png-clipart/20240709/original/pngtree-casual-man-flat-design-avatar-profile-picture-vector-png-image_15526568.png"
        />
        <ProfileCard name="John Doe" title= "Frontend Developer" bio= "Passionate about building web applications with React." />
      </div>
    </>
  )
}

export default App
