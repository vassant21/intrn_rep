
import './App.css';
import Header from './components/Header/Header';
import Paragraph from './components/Paragraph/Paragraph';
import Link from './components/Link/Link';
import Img from './components/Img/Img.js';
function App() {
  return (
  <div>
     <div>
    <Header></Header>
    <div>
    <Paragraph></Paragraph>
    </div>
    <Img></Img>
    
   </div>
    
    <Link url="https://myanimelist.net/anime/21/One_Piece" linktext="Source and more information"></Link><br></br>
    
  </div>
  );
}

export default App;
