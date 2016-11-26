
export const setCity = (city) => {


  const yql = `select item from weather.forecast where woeid in (select woeid from geo.places(1) where text='${city}') and u='c'`;
  const yahoo = `https://query.yahooapis.com/v1/public/yql?q=${yql}&format=json`;


  const owm = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${process.env.REACT_APP_OWM}`;

  return (dispatch) => {

    const owmData = fetch(owm).then((res) => res.json());
    const yahooData = fetch(yahoo).then((res) => res.json());

    Promise.all([owmData, yahooData]).then(values => {
      console.log(values);
      return {
        type: 'SET_CITY',
        city
      }
    });
  }
}
