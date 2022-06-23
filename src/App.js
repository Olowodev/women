import './App.css';
import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import Article from './components/article/Article'
import BlogArticle from './components/blogArticle/BlogArticle'
import Quote from './components/quote/Quote'
import LookBook from './components/lookBook/LookBook'
import Collections from './components/collections/Collections'
import Promo from './components/promo/Promo'
import Footer from './components/footer/Footer'


function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Article />
      <BlogArticle />
      <Quote />
      <LookBook />
      <Collections />
      <Promo />
      <Footer />
    </div>
  );
}

export default App;
