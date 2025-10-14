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
        <div class='bg-torzs'>
          <h3>Napraforgós Nemzeti Tanúsító Védjegy célja</h3>
          <p>
            A falusi szálláshelyek napraforgós Nemzeti Tanúsító Védjegye a FATOSZ által több mint tíz éve létrehozott, és működtetett minősítési rendszer alapjaira épülve 2011 óta a minőségi falusi turizmus szimbóluma...
          </p>
          <a href="https://fatosz.hu/falusi-szallashely-minosites/">Tájékozató oldal</a>

          <img className='logo' src="./img/logo.png" alt="" />
        </div>

        <div class='bg-torzs'>
          <h3>Falusi szálláshely fajtái:</h3>
          <ul>
          <li>Vendégszoba: a vendégek rendelkezésére bocsátható önálló lakóegység, amely egy lakóhelyiségből, és a minősítéstől függően a hozzátartozó mellékhelyiségekből áll.</li>
          <li>Lakrész: önálló épület kettő, illetve több szobából álló lehatárolt része a minősítéstől függően hozzátartozó mellékhelyiségekkel együtt</li>
          <li>Vendégház: önálló épület, több szobával, mellékhelyiségekkel és főzési lehetőséggel rendelkező lakó-, illetve üdülőegység, családok vagy kisebb csoportok elszállásolására.</li>
          <li>Sátorozóhely: csak valamelyik falusi szálláshely típus mellett, mintegy azt kiegészítve üzemeltethető az előírt feltételek megléte esetén. Pl.: falusi vendégház sátorozóhellyel.</li>
          </ul>
            <img src="./img/ketagyas.jpg" />
          </div>

        <div class='bg-torzs'>
          
<div className="contentbox" id="contbx3">
            <h3>A hét törpe fogadó</h3>
            <table className="table table-striped" id="fogado-table">
              <thead>
                <tr>
                  <th id="custom-cell">Szoba neve</th>
                  <th id="custom-cell">Ágyak száma</th>
                </tr>
              </thead>
              <tbody>
                {szobak.map((room, i) => (
                  <tr id="custom-cell" key={i}>
                    <td id="custom-cell">{room['Szobanév']}</td>
                    <td id="custom-cell">{room['Ágyak száma']}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p>
              A házban összesen 21 fő fér el. <br />
              Felszereltségük:
            </p>
            <ol>
              <li>Ruhásszekrény</li>
              <li>Saját fürdőszoba zuhanytálca</li>
              <li>WC (fürdőszobával egyben)</li>
            </ol>
            <div id="box3adjust"></div>
          </div>

        </div>

       
        <div className=''>
          <h3>A vendégszobák foglaltsága</h3>
          <ul>
            {foglaltsag.map(f => (
              <li key={f.név}>
                Vendég: {f.név}, Érkezés: {f.érkezés}, Távozás: {f.távozás}
              </li>
            ))}
          </ul>
        </div>

        <div className=''>
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

  



