import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';

function App() {
  const [location, setLocation] = useState('');
  const [result, setResult] = useState({});
  const API_KEY = "8fe206d1ecf9d9ceda88327a090a7a89"; // 각자 개인의 API KEY를 발급받아 사용해주세요. 
  // 방법 : Open Weather Map API 가입 후 API_KEY 발급 받기

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;
  const searchWeather = async (e) => {
    if(e.key === 'Enter') {
      try {
        const response = await axios.get(url);
        const { name, main, weather, wind, sys } = response.data;
        const formattedData = {
          city: name,
          temperature: Math.round((main.temp - 273.15) * 10) / 10,
          weather: weather[0].main,
          windSpeed: wind.speed,
          windDirection: wind.deg,
          country: sys.country,
        };
        setResult(formattedData);
        console.log(formattedData); // 콘솔에 데이터 출력
      } 
      catch(err) {
        alert(err);
      }
    }
  }


  return (
    <AppWrap>
      <div className="appContentWrap">
        <input
          placeholder="도시를 입력하세요"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          type="text"
          onKeyDown={searchWeather}
        />
        {Object.keys(result).length !== 0 && (
          <ResultWrap>
            <div className="city">도시: {result.city}</div>
            <div className="temperature">기온: {Math.round(result.temperature * 10) / 10}°C</div>
            <div className="detail-info">
              <div>풍속: {result.windSpeed} m/s, 풍향: {result.windDirection}°</div>
            </div>
            <div className="sky">날씨: {result.weather}</div>
          </ResultWrap>
        )}

      </div>
    </AppWrap>
  );
}

export default App;

const AppWrap = styled.div`
  width: 100vw;
  height: 100vh;

  .appContentWrap {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    padding: 20px;
  }
  input {
    padding: 16px;
    border: 2px black solid;
    border-radius: 16px;
  }

`;

const ResultWrap = styled.div`
  margin-top: 60px;
  border: 2px black solid;
  padding: 30px;
  border-radius: 8px;

  .city {
    font-size: 20px;
  }
  .temperature {
    font-size: 40px;
    margin-top: 8px;
  }
  .sky {
    font-size: 20px;
    text-align: right;
    margin-top: 8px;
  }
  .detail-info{
    font-size: 20px;
    text-align: right;
    margin-top: 8px;
  }
`;