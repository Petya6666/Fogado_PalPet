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
      <div className='container'>
        <div class='bg-torzs'>
          <h3>Napraforgós Nemzeti Tanúsító Védjegy célja</h3>
          <p>
          A falusi szálláshelyek napraforgós Nemzeti Tanúsító Védjegye a FATOSZ által több mint tíz éve létrehozott, és működtetett minősítési rendszer alapjaira épülve 2011 óta a minőségi falusi turizmus szimbóluma. A védjegy alapvető célja, hogy – összhangban az egyes szálláshelyek működtetéséről szóló 239/2009. Korm. rendeletben foglaltakkal – garanciát nyújtson a szálláshely szolgáltatás minőségének megfelelő színvonalára. A falusi vendégházak 1-4 napraforgós besorolást nyerhetnek el a külső, belső megjelenés, a felszereltség, a szolgáltatások színvonala, valamint a szállásadó személyes felkészültségének, szakmai képzettségének függvényében.
          </p>
          
          <a href="https://fatosz.hu/falusi-szallashely-minosites/">Tájékozató oldal</a>
          <p></p>
          <img className='logo' src="./img/logo.png" alt="" />
          <p></p>
          <img src="./img/holloko_masolata.jpg" alt="" className='keret'/>
        </div>
        
        <div class='bg-torzs' id='feher'>
          
          <h3>Falusi szálláshely fajtái:</h3>
          <ul>
          <li>Vendégszoba: a vendégek rendelkezésére bocsátható önálló lakóegység, amely egy lakóhelyiségből, és a minősítéstől függően a hozzátartozó mellékhelyiségekből áll.</li>
          <li>Lakrész: önálló épület kettő, illetve több szobából álló lehatárolt része a minősítéstől függően hozzátartozó mellékhelyiségekkel együtt</li>
          <li>Vendégház: önálló épület, több szobával, mellékhelyiségekkel és főzési lehetőséggel rendelkező lakó-, illetve üdülőegység, családok vagy kisebb csoportok elszállásolására.</li>
          <li>Sátorozóhely: csak valamelyik falusi szálláshely típus mellett, mintegy azt kiegészítve üzemeltethető az előírt feltételek megléte esetén. Pl.: falusi vendégház sátorozóhellyel.</li>
          </ul>
            <img src="./img/ketagyas.jpg" className='keret' />
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
      
        <div className='kihasznaltsag'>
          <h3>A szobák kihasználtsága</h3>
          <ul>
            {kihasznaltsag.map(k => (
              <li key={k.szoba}>
                Szoba: {k.szoba}, Vendégek: {k.vendegek}, Vendégéjszakák: {k.vendegejszakak}
              </li>
            ))}
          </ul>
        </div>
     
    </>
  );
}

export default App;

  



