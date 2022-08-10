import { Route, Routes } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import WizardLayout from './layouts/Wizards'
import KeysLayout from './layouts/Keys'
import Keys from './pages/Keys';
import Key from './pages/Key';


//import RequestKeys from './pages/RequestKeys';
import RequestKeysStep1 from './pages/RequestKeysStep1';
import RequestKeysStep2 from './pages/RequestKeysStep2';


function App() {
  return (
    <div>
      <Routes>
        <WizardLayout>
          <Route path='request'>
            <Route path='keys'>
              <Route path='step1' element={<RequestKeysStep1 />} />
              <Route path='step2' element={<RequestKeysStep2 />} />
            </Route>
          </Route>
        </WizardLayout>
        <KeysLayout>
          <Route path='keys' element={<Keys />} />
          <Route path='keys/:keyid' element={<Key />} />
        </KeysLayout>
      </Routes>
    </div>
  );
}

export default App;
