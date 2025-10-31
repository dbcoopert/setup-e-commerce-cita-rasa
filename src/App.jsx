import Home from "./pages/Home"
import Navbar from "./components/Navbar"

function App() {
  return(
    <div className="flex flex-col items-center justify-center flex-1 min-h-screen px-6 py-10 bg-red-500">
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App;