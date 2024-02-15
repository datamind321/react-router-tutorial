import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Post from './pages/Post'
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import LayOut from './pages/LayOut'
import PostLayout from './pages/PostLayout'
import PostDetail from './pages/PostDetail'



function App() {
  

  return (
    <>


 

    <BrowserRouter>
    

  

    <Routes>



  
      <Route path='/' element={<LayOut />}>
        <Route index element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />}/>
        <Route path='/post' element={<PostLayout />}> 
        <Route path=':category' element={<PostDetail />} />
        </Route>
        </Route>
        
        <Route path='*' element={<h1>Page Not Found !</h1>}/>

        </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
