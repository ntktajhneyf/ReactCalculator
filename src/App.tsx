import {
  InputField,
  Keyboard,
  Tablo,
  // Keyboard
} from './components';

function App() {
  return (
    <div>
      <h1>Calculator</h1>
      <div>
        <InputField />
        <Tablo />
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
