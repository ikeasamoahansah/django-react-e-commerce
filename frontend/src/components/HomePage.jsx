import Navbar from './Navbar';
import Footer from './Footer';
import {AuthProvider} from '../context/AuthContext';

function Home() {

  return (
    <>
      <AuthProvider>
      <Navbar/>

      <Footer/>
      </AuthProvider>
    </>
  )
}

export default Home
