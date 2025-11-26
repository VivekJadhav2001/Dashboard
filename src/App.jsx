import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home'
import { Store } from './Store.jsx'
import ReactModal from 'react-modal';
import Profile from './pages/Profile/Profile.jsx';

function App() {

  return (
    <Store>
      <BrowserRouter>
        <div className="w-screen h-screen bg-gray-500 overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Store>

  )
}

export default App
