import './App.scss';
import React from 'react';
import FirstSection from './Sections/FirstSection/FirstSection';
import SecondSection from './Sections/SecondSection/SecondSection';
function App() {
    const [lenguage, setLenguage] = React.useState(false)
    return (
        <><div className="App-topContainer">
            <h1 className="App-topContainer_name">Frontfrank.com</h1>
            <div className="App-topContainer-right">
                <div onClick={() => setLenguage(prevValue => false)} className={`App-topContainer-right${lenguage ? "_rightContainer" : "_leftContainer"}`}><h4>esp</h4></div>
                <div onClick={() => setLenguage(prevValue => true)} className={`App-topContainer-right${lenguage ? "_leftContainer" : "_rightContainer"}`}><h4>eng</h4></div>
            </div>
        </div><FirstSection lenguage={lenguage} />
            <SecondSection />
        </>
    );
}
export default App;
