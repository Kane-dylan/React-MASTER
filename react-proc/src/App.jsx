import CreateList from "./components/CreateList"
import Footer from "./components/Footer"
import Greeting from "./components/Greeting"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Person from "./components/Person"
import ProductList from "./components/ProductList"
import Props from "./components/Props"
import UserList from "./components/UserList"
import UserStatus from "./components/UserStatus"
import Weather from "./components/Weather"
import WelcomeMessage from "./components/WelcomeMessage"
import JSXRules from "./JSXRules"
import Product from "./Product"
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
      <Footer/>
      <CreateList/>
      <UserList/>
      <ProductList/>
      <Props/>
      <Person name="Jack Danzo"  age= {25}/>
      <Product name= "MacBook"  price="$3599"/> */}
      <Weather/>
      <UserStatus loggedIn= {true} isAdmin= {false}/>
      <Greeting timeOfDay="evening"/>
    </div>
  )
}

export default App