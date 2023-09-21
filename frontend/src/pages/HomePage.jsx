import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
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
