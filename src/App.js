import React from 'react';
import './App.css';
import Gifticon from './components/Gifticon';

const gifticons = [{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '스타벅스',
  'exp_date' : '20200820',
  'used' : 'false'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '할리스',
  'exp_date' : '20200819',
  'used' : 'true'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '커피빈',
  'exp_date' : '20200818',
  'used' : 'true'
}]

function App() {
  return (
    <div>
      {
      gifticons.map(g => {
        return(
          <Gifticon
          key = {g.id}
          id = {g.id}
          gifticonimg = {g.gifticonimg}
          name = {g.name}
          exp_date = {g.exp_date}
          used = {g.used}
        />
        );
      })
    }
    </div>
  );
}
export default App;