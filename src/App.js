import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
import Login from './Components/Login';
import Footer from './Components/Footer'
import Home from './Pages/home/Home';
import Singlepage from './Pages/singlepage/Singlepage';
import Blog from './Pages/blog/Blog';
import Dashboard from './Pages/dashboard/Dashboard'
import Economics from './Pages/Economics/Economics';
import Politics from './Pages/politics/Politics';
import Funny from './Pages/funny/Funny';
import ProtectedComp from './Components/ProtectedComp';
import Comments from './Components/Comments';
import Forgetpass from './Components/Forgetpass';
import Changerole from './Pages/changerole/Changerole';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<ProtectedComp />}>
            <Route path='/' element={<Home />} />
            <Route path='/dash' element={<Dashboard />} />
            <Route path="/article/:id" element={<Singlepage />} />
            <Route path='/art-blog' element={<Blog />} />
            <Route path='/eco' element={<Economics />} />
            <Route path='/pol' element={<Politics />} />
            <Route path='/fun' element={<Funny />} />
            <Route path='/commmet-section' element={<Comments/>} />
            <Route path='/change-role' element={<Changerole/>} />
          </Route> 
          <Route path='/signup' element={<Register />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/forget' element={<Forgetpass />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;