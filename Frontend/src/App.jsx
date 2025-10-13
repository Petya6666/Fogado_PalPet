import React, { useEffect, useState } from 'react';
import './fogado.css';
import axios from 'axios';

function App() {
  const [szobak, setSzobak] = useState([]);
  const [foglaltsag, setFoglaltsag] = useState([]);
  const [kihasznaltsag, setKihasznaltsag] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/fogado').then(res => setSzobak(res.data));
    axios.get('http://localhost:3001/foglaltsag').then(res => setFoglaltsag(res.data));
    axios.get('http://localhost:3001/kihasznaltsag').then(res => setKihasznaltsag(res.data));
  }, []);

  return (
    <>
      <div className='kep'>
        <img src="./img/top.jpg" alt="" />
      </div>
      <div>
        <div className='bg-torzs'>
          <h3>Napraforgós Nemzeti Tanúsító Védjegy célja</h3>
          <p>
            A falusi szálláshelyek napraforgós Nemzeti Tanúsító Védjegye a FATOSZ által több mint tíz éve létrehozott, és működtetett minősítési rendszer alapjaira épülve 2011 óta a minőségi falusi turizmus szimbóluma...
          </p>
          <img src="" alt="" />
        </div>

        <div className='feher'>
          <h3>Falusi szálláshely fajtái:</h3>
          <ul>
            <li>Vendégszoba...</li>
            <li>Lakrész...</li>
            <li>Vendégház...</li>
            <li>Sátorozóhely...</li>
          </ul>
            <img src="./img/ketagyas.jpg" />
          </div>

        <div className='bg-torzs'>
          <h3>A hét törpe fogadó</h3>
          <ul>
            <li>Ruhásszekrény</li>
            <li>Saját fürdőszoba zuhanytálca</li>
            <li>WC (fürdőszobával egyben)</li>
          </ul>
        </div>

        <div className='bg-torzs'>
          <h3>Szobák listája</h3>
          <ul>
            {szobak.map(szoba => (
              <li key={szoba.szoba}>
                Szoba: {szoba.szoba}, Típus: {szoba.tipus}
              </li>
            ))}
          </ul>
        </div>

        <div className='bg-torzs'>
          <h3>A vendégszobák foglaltsága</h3>
          <ul>
            {foglaltsag.map(f => (
              <li key={f.név}>
                Vendég: {f.név}, Érkezés: {f.érkezés}, Távozás: {f.távozás}
              </li>
            ))}
          </ul>
        </div>

        <div className='bg-torzs'>
          <h3>A szobák kihasználtsága</h3>
          <ul>
            {kihasznaltsag.map(k => (
              <li key={k.szoba}>
                Szoba: {k.szoba}, Vendégek: {k.vendegek}, Vendégéjszakák: {k.vendegejszakak}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;

  



