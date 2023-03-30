import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Schedule from './components/Schedule/Schedule'

function App() {
	return (
		<>
			<div
				className='fixed 
					z-[999]
					bottom-[10px] bg-sky-500  h-[30px] w-[70px] rounded border border-black/[.3] left-[5px]'
			>
				<div className='h-full w-full text-sm text-white font-bold flex items-center justify-center  after:absolute after:content-["xs"] sm:after:content-["sm"] md:after:content-["md"] lg:after:content-["lg"] xl:after:content-["xl"] 2xl:after:content-["2xl"] '></div>
			</div>
			<div className='App'>
				<Header />
				<Routes>
					<Route path='/' element={<Hero />}/>
					<Route path='/flight-schedule' element={<Schedule />}/>
				</Routes>
			</div>
		</>
	)
}

export default App
