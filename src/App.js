import Welcome from './views/Welcome';
import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route index element={<Welcome />} />

      <Route path="*" element={(
        <h1>Not Found</h1>
      )} />
    </Routes>
  );
}

export default App;
