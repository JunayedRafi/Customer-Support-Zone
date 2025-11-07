import './App.css'
import Navbar from './components/Navbar/Navbar'
import vector1 from './assets/vector1.png'
import vector3 from './assets/vector3.png'
import Footer from './components/Navbar/Footer'
import TicketCards from './components/TicketCards/TicketCards'

const fetchData = async () =>{
  const res = await fetch('./data.json')
  return res.json();
}
const dataPromise = fetchData()

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
      
      <div className="inter flex gap-6 lg:flex-row flex-col max-w-[1200px] mx-auto mt-16 justify-between">
        <div className="w-[80%]">
          <h3 className='font-semibold text-2xl mb-3 text-[#34485A]'>Customer Tickets</h3>
          {/* Data Starts here --- Component hobe */}
          <TicketCards dataPromise={dataPromise}></TicketCards>
          
        </div>
        <div className="w-[20%]">
          <h3 className='font-semibold text-2xl text-[#34485A]'>Task Status</h3>
        </div>
      </div>

      <Footer></Footer>
    </>
  )
}

export default App
