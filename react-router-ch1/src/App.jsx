import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Post from './pages/Post'
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import Navbar from './pages/Navbar'
import DashBoard from './pages/DashBoard'
import Login from './pages/Login'
import Logout from './pages/Logout'


function App() {
  
  let isLogged= true;
  let data = {
    'note':'Please Login first'
  }
  return (
    <>
    
      <BrowserRouter>
      <Navbar />
      <Routes >


      
        <Route path='/' element={<Navbar />}/>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/post' element={<Post />}/>

        {/* Create an dynamic url  */}

        <Route path='/post/:category/:id' element={<Post />}/>


        {/* When page no found */}
        <Route path='*' element={<h1 style={{'color':'red'}}>Page Not Found !</h1>}/>
        
        {/* Dependency Coditional Routes */}

        <Route path='/login' element={<Login />} />
        <Route  path='/logout' element={<Logout />}/>

        {/* Without Condition Easily Access Dashbord all Users */}


        {/* <Route path='/dashboard' element={<DashBoard />}  /> */}

        {/* Access Dashboard Only Thod=se Users Where Logged In */}

        <Route path='/dashboard' element={isLogged ? <DashBoard /> : <Navigate to='/login' replace state={data}/>}  />
      
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
