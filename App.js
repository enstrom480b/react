import './App.css';
import Post from './Post';
import Useref from './Useref';
import Child from './Childref';
import Usememo from './Usememo';
import Postform from './Postform';
import {Provider} from 'react-redux'
import store from './store'
import Reduxtext from './Reduxtext';
import Form from './Form.jsx';
import Tables from './Tables';
//import Datafetch from './Datafetch'

function App() {
  return (
    <div className="App">
      <h2>useHistory</h2>
      <Tables/>
    </div>

  );
}

export default App;
