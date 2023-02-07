import React from 'react';
import axios from "axios";
import './app.scss';
import clearSky from './assets/img/clearSky.png'; // чистое небо   01d
import fewClouds from './assets/img/fewClouds.png'; // несколько облаков   02d
import scatteredClouds from './assets/img/scatteredClouds.png'; // рассеянные облака   03d 
import brokenClouds from './assets/img/brokenClouds.png'; // разбитые облака   04d
import showerRain from './assets/img/showerRain.png'; // душ дождь   09d 
import rain from './assets/img/rain.png'; // дождь   10d               
import thunderstorm from './assets/img/thunderstorm.png'; // гроза   11d
import snow from './assets/img/snow.png'; // снег    13d         
import mist from './assets/img/mist.png'; // туман   50d
import cat from './assets/img/cat.jpg';
import clearSkyN from './assets/img/clearSkyN.png'; // чистое небо   01n
import fewCloudsN from './assets/img/fewCloudsN.png'; // несколько облаков   02n
import scatteredCloudsN from './assets/img/scatteredCloudsN.png'; // рассеянные облака   03n 
import brokenCloudsN from './assets/img/brokenCloudsN.png'; // разбитые облака   04n
import showerRainN from './assets/img/showerRainN.png'; // душ дождь   09n
import rainN from './assets/img/rainN.png'; // дождь   10n               
import thunderstormN from './assets/img/thunderstormN.png'; // гроза   11n
import snowN from './assets/img/snowN.png'; // снег    13n         
import mistN from './assets/img/mistN.png'; // туман   50n
 
import sunB from './assets/background/sun.jpg';
import skyBack from './assets/gif/skyBack.gif';


import backgroundB from './assets/background/background.jpg'; // чистое небо   01d
import fewCloudsB from './assets/background/fewClouds.jpg'; // несколько облаков   02n
import scatteredCloudsB from './assets/background/scatteredClouds.jpg'; // рассеянные облака   03d 
import brokenCloudsB from './assets/background/brokenClouds.jpg'; // разбитые облака   04n
import showerRainB from './assets/background/showerRain.jpg'; // душ дождь   09n
import rainB from './assets/background/rain.jpg'; // дождь   10n               
import thunderstormB from './assets/background/thunderstorm.jpg'; // гроза   11n
import snowB from './assets/background/snow.jpg'; // снег    13d 
import mistB from './assets/background/mist.jpg'; // туман   50n

const App = () => {
  const [catLength, setCatLength] = React.useState([]);
  const [cityName, setCityName] = React.useState('магнитогорск');
  const [count, setCount] = React.useState(0);


  const key = 'b90847b74ea9931ace87994ffa122a06';
  const language = 'ru';
  // const cityName = 'Magnitogorsk';
  const location = 'RU'
  // const key = 'ac8c195b8eaeee4efcfa4f3a9422bc2c';
  const comback = 0;

  const funCity = React.useCallback(() => {
    try {
      if (cityName === '') return; //отключил возможность поиска по пустому полю
      axios.get(
        `http://api.openweathermap.org/data/2.5/find?q=${cityName},${location}
      &lang=${language}&appid=${key}&units=metric`
      )
        .then((resp) => {
          const data = resp.data.list.slice(0, 1);
          // const data = resp.data.city.name;
          setCatLength(data);
          console.log(data);
        });
    } catch (error) {
      console.log(error + 'Header');
    }
  }, [cityName]);

  const handleChangeCity = (evenet) => {
    setCityName(evenet.target.value.trim()); // отлючил возможность пробела в инпуте
    // console.log(evenet);
  };

  const handleClick = React.useCallback(() => {
    // console.log(cityName);
    funCity(cityName);
    setCount(count + 1);
  },
    [cityName]
  );

  const handleDeleteText = () => {
    setCityName('');
  }

  const Background = () => {
    return (
      <img src={backgroundB} className='background'></img>
    );
  };

  const Gif = (props) => {
    let img = "";
    switch (props.weatherIcon) {
      case '01d':
        img = sunB;
        break;
      case '02d':
        // img = fewCloudsB;
        img = skyBack;        
        break;
      case '03d':
        img = scatteredCloudsB;
        break;
      case '04d':
        img = skyBack;
        // img = brokenCloudsB;
        break;
      case '09d':
        img = showerRainB;
        break;
      case '10d':
        img = rainB;
        break;
      case '11d':
        img = thunderstormB;
        break;
      case '13d':
        img = snowB;
        break;
      case '50d':
        img = mistB;
        break;
      case '01n':
        img = sunB;
        break;
      case '02n':
        img = fewCloudsB;
        break;
      case '03n':
        img = scatteredCloudsB;
        break;
      case '04n':
        img = brokenCloudsB;
        break;
      case '09n':
        img = showerRainB;
        break;
      case '10n':
        img = rainB;
        break;
      case '11n':
        img = thunderstormB;
        break;
      case '13n':
        img = snowB;
        break;
      case '50n':
        img = mistB;
        break;
      case '':
        img = mistB;
        break;
    }
    return (
      <img src={img} className='gifBackground'></img>
    );

  }


  const Icon = (props) => {
    let img = "";
    switch (props.weatherIcon) {
      case '01d':
        img = clearSky;
        break;
      case '02d':
        img = fewClouds;
        break;
      case '03d':
        img = scatteredClouds;
        break;
      case '04d':
        img = brokenClouds;
        break;
      case '09d':
        img = showerRain;
        break;
      case '10d':
        img = rain;
        break;
      case '11d':
        img = thunderstorm;
        break;
      case '13d':
        img = snow;
        break;
      case '50d':
        img = mist;
        break;
      case '01n':
        img = clearSkyN;
        break;
      case '02n':
        img = fewCloudsN;
        break;
      case '03n':
        img = scatteredCloudsN;
        break;
      case '04n':
        img = brokenCloudsN;
        break;
      case '09n':
        img = showerRainN;
        break;
      case '10n':
        img = rainN;
        break;
      case '11n':
        img = thunderstormN;
        break;
      case '13n':
        img = snowN;
        break;
      case '50n':
        img = mistN;
        break;
    }
    return <img src={img} className='imgIcon'></img>;
  }

  return (
    <div className="app">
      {comback === count ? <Background /> : ''}
      <div
      // className='background'
      >
        {catLength.map((items, index) => {
          let weatherIcon = items.weather[0].icon;
          return (
            <div key={index}>
              <Gif weatherIcon={weatherIcon} />

            </div>
          )
        })}
        <div className="app_max">
          <div className="weather">
            Погода
          </div>
          <div className="functionWeather">
            <input type="text" value={cityName} onChange={handleChangeCity} className="inputSearch" />
            <button onClick={handleClick} className="buttonSearch">Search</button>
            <button onClick={handleDeleteText} className="buttonDelete">Delete</button>
          </div>
          <div className="">
            {catLength.map((items, index) => {
              return (
                <div className="" key={index}>
                  <div className="nameCity">Название города: {items.name}</div>
                  <div className="nameCity">Скорость ветра: {items.wind.speed}</div>
                  <div className="nameCity">Погода:  {items.weather[0].description}</div>
                  <div className="nameCity">Температура:  {items.main.temp}&deg;</div>
                </div>
              );
            })}
          </div>
          <div className=''>
            {catLength.map((items, index) => {
              let weatherIcon = items.weather[0].icon;
              // console.log(weatherIcon);
              return (
                <div className="imgWeather" key={index}>
                  <Icon weatherIcon={weatherIcon} />
                  {/* <Gif weatherIcon={weatherIcon} /> */}
                  {/* <img src={weatherIcon === '01n' ? clearSky : ''
                    ||
                    weatherIcon === '02n' ? fewClouds : ''
                      ||
                      weatherIcon === '03n' ? scatteredClouds : ''
                        ||
                        weatherIcon === '04n' ? brokenClouds : ''
                          ||
                          weatherIcon === '09n' ? showerRain : ''
                            ||
                            weatherIcon === '10n' ? rain : ''
                              ||
                              weatherIcon === '11n' ? thunderstorm : ''
                                ||
                                weatherIcon === '13n' ? snow : ''
                                  ||
                                  weatherIcon === '50n' ? mist : ''
                  } className='imgIcon'></img> */}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;