import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';

function App() {
  const [location, setLocation] = useState('');
  const [result, setResult] = useState({});
  const API_KEY = "429c092b2379f9bc6eda3f3f0803a8e1"; // 각자 개인의 API KEY를 발급받아 사용해주세요. 
  // 방법 : Open Weather Map API 가입 후 API_KEY 발급 받기

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;
  const searchWeather = async (e) => {
    if(e.key === 'Enter') {
      try {
        /*
        const data 에 axios 를 활용하여 url 을 get 하는 코드를 작성하고
        위에 본인이 작성한 코드의 data 를 setResult의 값으로 넣기.
        data가 잘 뜨는지 확인을 위해선 console.log(data); 로 console확인. 콘솔 확인법은 구글링 해볼것.
        
        윗말이 이해안되면 axios 사용법 구글링 하든 gpt를 사용하든 해서 코드를 작성해보세요~
        */

        const data = await axios.get(url); // or <axios.get(url).then;>
        // await(동기처리)를 안 하면 axios를 사용해서 data를 get해오기 전에(get 해오는 시간이 오래 걸림) 다음에서 data를 사용하려고 하기 때문에 실행이 안 됨.
        // await을 쓰려면 12줄의 async를 써야 함.
        
        setResult(data);
        console.log(data); // 데이터 확인을 위한 콘솔 로그
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
            <div className="city">{result.data.name}</div>
            <div className="city-code">국가코드 {result.data.sys.country}</div>
            <div className="temperature">
              {Math.round((result.data.main.temp - 273.15) * 10) / 10}°C
            </div>
            <div className="humidity">습도는 {result.data.main.humidity}%입니다.</div>
            <div></div>
            <div className="sky">{result.data.weather[0].main}</div>
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
  border: 1px black solid;
  padding: 10px;
  border-radius: 8px;

  .city {
    font-size: 24px;
  }
  .temperature {
    font-size: 60px;
    margin-top: 8px;
  }
  .sky {
    font-size: 20px;
    text-align: right;
    margin-top: 8px;
  }
  .humidity {
    font-size: 15px;
    text-align: left;
    margin-top: 8px;
  }

  .city-code {
    font-size: 15px;
    text-align: left;
    margin-top: 8px;
  }
`;