import './App.css';

// import header
import Header from './components/Header';

// import products
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header/>

      {/* main */}
      <main>
        {/* products */}
        <Products/>
      </main>
    </div>
  );
}

export default App;
