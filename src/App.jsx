import './App.css'
import Navbar from './components/Navbar/Navbar'
import vector1 from './assets/vector1.png'
import vector3 from './assets/vector3.png'
import Footer from './components/Navbar/Footer'
import { IoCalendar } from 'react-icons/io5';

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
          <div className="grid grid-cols-2 gap-4 ">
            <div className="p-4 bg-white rounded-lg shadow-lg-300">
              <div className='flex justify-between items-center'>
                <h4 className="text-lg text-[#001931]">Login Issues - Can't Access Account</h4>
                <div className="flex items-center space-x-2 bg-green-100 rounded-full py-2 px-4 w-fit">
                  <div className="w-3 h-3 bg-green-800 rounded-full"></div>                
                  <span className="text-green-800 font-semibold">Open</span>
                </div>
              </div>
              <p className="text-base text-[#627382] my-3">Customer is unable to log in to their account. They've tried resetting their password multiple times but still...</p>
              <div className="flex justify-between">
                <div className="align-center flex gap-3 w-[50%]">
                  <h4 className="text-base text-[#627382]">#1001</h4>
                  <h4 className="text-base text-[#F83044] uppercase">#HIGH PRIORITY</h4>
                </div>
                <div className="align-center flex gap-3 w-[50%] justify-end">
                  <h4 className="text-base text-[#627382]">John Smith</h4>
                  <div className="flex">
                    <IoCalendar color="#627382" size={23} />
                    <span className="text-base text-[#627382] ml-1">1/15/2024</span>
                  </div>
                </div>
              </div>
            </div>
          
          </div>
          
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
