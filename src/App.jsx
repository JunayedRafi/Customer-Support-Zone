import './App.css'
import Navbar from './components/Navbar/Navbar'
import vector1 from './assets/vector1.png'
import vector3 from './assets/vector3.png'
import Footer from './components/Navbar/Footer'

function App() {
  return (
    <>
      <Navbar />
      <div className="inter flex gap-6 lg:flex-row flex-col max-w-[1200px] mx-auto mt-16">
        <div
          className="w-1/2 h-[200px] rounded-lg text-center flex flex-col justify-center items-center text-white"
          style={{
            backgroundImage: `url(${vector1}), url(${vector3}), linear-gradient(135deg, #632EE3, #9F62F2)`,
            backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
            backgroundPosition: 'bottom left, bottom right, center',
            backgroundSize: '45%, 45%, cover'
          }}
        >
          <h3 className="text-2xl">In-Progress</h3>
          <h2 className="text-6xl font-semibold">0</h2>
        </div>
        <div
          className="w-1/2 h-[200px] rounded-lg text-center flex flex-col justify-center items-center text-white"
          style={{
            backgroundImage: `url(${vector1}), url(${vector3}), linear-gradient(135deg, #54CF68, #00827A)`,
            backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
            backgroundPosition: 'bottom left, bottom right, center',
            backgroundSize: '45%, 45%, cover'
          }}
        >
          <h3 className="text-2xl">Resolved</h3>
          <h2 className="text-6xl font-semibold">0</h2>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
