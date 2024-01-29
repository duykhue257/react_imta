import LayoutWebsite from './layouts/LayoutWebsite'
import { Route ,Routes } from 'react-router-dom'
import TimeLine from './pages/timeline'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<LayoutWebsite/>} />
      <Route path='/time' element={<TimeLine/>}/>
    </Routes>
    </>
  )
}

export default App
