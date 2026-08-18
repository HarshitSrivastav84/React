import Header from "../components/Header"
import Footer from "../components/Footer"
// import HomeItem from "../components/HomeItem"
import { Outlet } from "react-router-dom"
import FetchItems from "../components/FetchItems"

function App() {

  return (
    <>
      <Header />
      <FetchItems />
      <Outlet />
      <Footer/>
    </>
  )
}

export default App;






// git subtree split --prefix="Projects/9-Myntra
// Clone" -b vastraa-branch
// git push vastraa vastraa-branch:main --force
// git branch -D vastraa-branch
