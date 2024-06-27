
import './App.css';
import { Products } from './components/Products/Products';
import { Header } from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Cart } from './components/Cart/Cart';
import { ObjectInformation } from './components/ObjectInformation/ObjectInformation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={<Products />}
            />
            <Route
              path="/cart"
              element={<Cart />}
            />
            <Route
              path="/objectInfo/:id"
              element={<ObjectInformation />}
            />
          </Routes>

        </main>
      </BrowserRouter>




    </div>
  );
}

export default App;
