import CreateList from "./components/CreateList"
import Footer from "./components/Footer"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import ProductList from "./components/ProductList"
import UserList from "./components/UserList"
import WelcomeMessage from "./components/WelcomeMessage"
import Greeting from "./Greeting"
import JSXRules from "./JSXRules"
import ProductInfo from "./ProductInfo"

const App  = () => {
  return  (
    <div>
      {/* <JSXRules/>
      <Greeting/>
      <ProductInfo/>
      <Header/>
      <WelcomeMessage/>
      <MainContent/>
      <Footer/> */}
      <CreateList/>
      <UserList/>
      <ProductList/>
    </div>
  )
}

export default App