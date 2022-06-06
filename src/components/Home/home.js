import './home.css'
import image from '../../assets/diara.gif'
import write from '../../assets/write.gif';
import save from '../../assets/save.gif';
import Navigation from '../navigation/navigation';
//import video from '../assets/video.gif'
function Home(){
    return(
        <>
        <Navigation/>
        <div id="slides">
           <img src={image} alt="slideshow loading......"/>
        </div>
        <div id="works">
            <h1>How It Works ?</h1>
        </div>
        <div className='process'>
            <img src={write} alt="loading...."/>
            <img src={save} alt="loading...."/>
        </div>
        <button className='write'>Start Writing</button>
        <footer>
            <h1 id="about">About Diara</h1>
            <p>Diara is your personal diary in which you can write anything you want, expressing your current feeling, everyday happenings and many more. You can save your content and access it anytime you want.</p>
        </footer>
        </>
    )
}
export default Home;