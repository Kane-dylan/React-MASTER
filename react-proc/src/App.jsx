import Footer from "./components/Footer"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import WelcomeMessage from "./components/WelcomeMessage"

const App  = () => {
  return  (
    <div>
      <Header/>
      <WelcomeMessage/>
      <MainContent/>
      <Footer/>
    </div>
  )
}

export default App