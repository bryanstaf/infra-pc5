import logo from './logo.svg';
import voz from './voz.jpg';
import './App.css';
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h5>Bienvenido</h5>
        <h1>Carlitos</h1>
        
        <button className='btn btn-success btn-lg my-4'>A leer</button>

        <img src={voz} className="my-4" alt="voz" />

        <button className='btn btn-warning btn-lg'>Mis trofeos</button>
        

        
      </header>
      
    </div>
  );
}

export default App;
