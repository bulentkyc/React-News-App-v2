import React, {useState} from 'react';
import { HomePage } from './components/HomePage/HomePage';
import {Route} from 'react-router-dom';
import NavBar from './components/NavBar/Navbar'
//import DetailPage from './components/DetailPage/DetailPage';


function App() {

  const [stateCategory, updateStateCategory] = useState (null);
  const [stateCountry, updateStateCountry] = useState (null);

  const categoriesHandler = (category) => {
    updateStateCategory(category);
  }

  const countryHandler = (country) => {
    updateStateCountry(country);
  }

  return (
    <div className="App">
      <NavBar click = {categoriesHandler} click2 = {countryHandler}/>
        <Route exact path='/' component={() => <HomePage category={stateCategory} country ={stateCountry}/>}/>
  {/*<Route path='/news-detail' component={DetailPage}/>*/}
    </div>
  );
}

export default App;
