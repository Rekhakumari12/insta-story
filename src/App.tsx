import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Feed } from './components/Feed'
import { Story } from './components/Story'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/stories/:username" element={<Story />} />
      </Routes>
    </Router>
  )
}

export default App
