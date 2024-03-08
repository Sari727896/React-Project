import logo from './logo.svg';
import './App.css';


import { Provider } from 'react-redux';
import store from './redux/store';
import ProductPresentation from './componants/Shop';


export default function App() {

  const time = new Date();
  time.setSeconds(time.getSeconds() + 200);

  return (
  
    <div className="App">
        <h1 id="title"> FrozenFantasia Treats</h1>
      <div className="App-header">
      
         <Provider store={store}>
         <ProductPresentation></ProductPresentation>
   
        </Provider> 
      {/* <CustomizedDialogs></CustomizedDialogs> */}
      </div>
    </div>
  );
}


