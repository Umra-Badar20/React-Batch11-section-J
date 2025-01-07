import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import CustomUpdate from './components/CustomUpdate';



function App() {
  const products= ["shoes","Nail paint","Cloth"]
  return (
  <div>
  {/* <Card pName ={'CLOTH'} pPrice = {'4$'} pImage={'http://www.demothemes.net/lumina-select/dark.jpg'}/>
  <Card  pName ={'Shoes'} pPrice = {'3$'}/>
  <Card  pName ={'Nail paint'} pPrice = {'1$'}/> */}

  <ul>
    {/* {products.map((v,i)=> <li key={i}>{v}</li>)} */}
    {products.map((v,i)=> <Card key={i} value={v}/> )}

  </ul>
<CustomUpdate/>

  </div>
  );
}

export default App;
