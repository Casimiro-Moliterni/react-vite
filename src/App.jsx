
import './assets/css/App.css';
import { Footer } from './components/Footer.jsx';
import { Header } from './components/Header.jsx';
import { Hero } from './components/Hero.jsx';
import { ListActors } from './components/ListActors.jsx';
import { ListFilm } from './components/ListFilm.jsx';
import { ListReviews } from './components/ListReviews.jsx';

function App() {

  return (
    <>
  <Header />
  <Hero />
  <ListFilm />
  <ListActors />
  <ListReviews />
  <Footer />
    </>
  )
}

export default App
