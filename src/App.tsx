import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import AllServices from './components/AllServices'
import TransmissionService from './components/services/TransmissionService'
import EngineService from './components/services/EngineService'
import MaintenanceService from './components/services/MaintenanceService'
import DiagnosticService from './components/services/DiagnosticService'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import useI18n from './hooks/useI18n'

function App() {
  const { t, isReady } = useI18n()

  if (!isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>{t('loading')}</div>
      </div>
    )
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="w-full h-full m-0 p-0">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<AllServices />} />
          <Route path="/services/transmission" element={<TransmissionService />} />
          <Route path="/services/engine" element={<EngineService />} />
          <Route path="/services/maintenance" element={<MaintenanceService />} />
          <Route path="/services/diagnostic" element={<DiagnosticService />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App