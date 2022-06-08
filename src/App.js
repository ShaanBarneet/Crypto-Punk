import Header from "./components/Header";
import "./App.css";
import { useState, useEffect } from "react";
import Punklist from "./components/Punklist";
import Main from "./components/Main";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);
  


  useEffect(() => {
    fetch(
      "https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x7b4216ccB222340AB95f154D38a6d83EB8B4648D"
    )
      .then((response) => response.json())
      .then((data) => setPunkListData(data.assets));
  },[]);
  punkListData.sort((a, b) => (a.token_id > b.token_id) ? 1 : -1)

  return (
    <div className="app">
      <Header />
      {punkListData.length>0 &&(
      <>
        <Main punkListData={punkListData} selectedPunk={selectedPunk}/>
        <Punklist punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
      </>
      )}

    </div>
  );
}

export default App;
