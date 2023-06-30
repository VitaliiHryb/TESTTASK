import { toast } from 'react-toastify';
import './App.css';
import Page from './components/Page';

function App() {
  toast.error(`Error fetching users:`);

  return (
    <div className="App">
      <Page />
    </div>
  );
}

export default App;
