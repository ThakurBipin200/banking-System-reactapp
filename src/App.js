import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Footer from "./components/Footer";
import AllCustomers from "./components/AllCustomers";
import Transactions from "./components/Transactions";
import TransferFunds from "./components/TransferFunds";
// import {app,database} from './firebaseConfig'

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Home />
                  <Services />
                </>
              }
            />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/allCustomers" element={<AllCustomers />} />
            <Route exact path="/transactions" element={<Transactions />} />
            <Route exact path="/moneyTransfer" element={<TransferFunds />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
