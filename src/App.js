import './App.css';
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import Mainstory from './components/Mainstory';
import MainStoryImage from './components/MainStoryImage';
import CheckInForm from './components/CheckInForm';
import AboutStory from './components/AboutStory';
import AbsoluteStory from './components/AbsoluteStory';
import AbsoluteStoryPlain from './components/AbsoluteStoryPlain';
import GridComponent from './components/GridComponent';
import CarouselFunc from './components/CarouselFunc';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <Header />
      <Mainstory />
      <MainStoryImage />
      <CheckInForm />
      <AboutStory />
      <AbsoluteStory />
      <GridComponent 
      gridHead='OUR SERVICES'

      subHeadOne = 'Breakfast'
      subHeadTwo = 'Garden '
      subHeadThree = 'Pool'
      subHeadFour = 'Free Wifi'
      subHeadFive = 'Daily Housekeeping'
      subHeadSix = 'In-Room Dining Service'
      
      subContOne = "I'm a paragraph. Click here to add your own text and edit me."
      subContTwo = "I'm a paragraph. Click here to add your own text and edit me."
      subContThree = "I'm a paragraph. Click here to add your own text and edit me."
      subContFour = "I'm a paragraph. Click here to add your own text and edit me."
      subContFive = "I'm a paragraph. Click here to add your own text and edit me."
      subContSix = "I'm a paragraph. Click here to add your own text and edit me."
      />

      <CarouselFunc />

      <GridComponent 
      gridHead='THINGS TO DO'

      subHeadOne = 'Wineries Tour'
      subHeadTwo = 'Cultural Sites '
      subHeadThree = 'Market Tour '
      subHeadFour = 'Leisure Activities'
      subHeadFive = 'Birds Safari'
      subHeadSix = 'Horse Riding '
      
      subContOne = "I'm a paragraph. Click here to add your own text and edit me."
      subContTwo = "I'm a paragraph. Click here to add your own text and edit me."
      subContThree = "I'm a paragraph. Click here to add your own text and edit me."
      subContFour = "I'm a paragraph. Click here to add your own text and edit me."
      subContFive = "I'm a paragraph. Click here to add your own text and edit me."
      subContSix = "I'm a paragraph. Click here to add your own text and edit me."
      />
      <AbsoluteStoryPlain />

      <ContactForm />

    </div>
  );
}

export default App;
