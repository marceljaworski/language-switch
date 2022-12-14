import Header from './components/Header'
import Content from './components/Content'
import Context from './context/Context'
import "bootstrap/dist/css/bootstrap.min.css" 
import './App.css'

function App() {
  return (
    <div className="App">
      <Context>
        <Header />
        <Content />
      </Context>
    </div>
  )
}

export default App
