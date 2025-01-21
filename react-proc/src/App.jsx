import Footer from "./components/Footer"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import WelcomeMessage from "./components/WelcomeMessage"
import JSXRules from "./JSXRules"

const App  = () => {
  return  (
    <div>
      <JSXRules/>
      <Header/>
      <WelcomeMessage/>
      <MainContent/>
      <Footer/>
    </div>
  )
}

export default App