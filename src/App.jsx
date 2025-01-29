
import Header from './view/componants/Header'
import { CountProvider } from './view/context/CountContext'
function App() {
  return (

    <CountProvider>
      <Header />
    </CountProvider>

  )
}

export default App
