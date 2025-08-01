import logo from './logo.svg';
import Greeter from './Greeter';
import Dog from './Dog';
import LoginForm from './LoginForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Learning JSX!</h1>
      <p>Testing Testing</p>
      <h2>Greeter Component</h2>
      <Greeter />
      <h2>Dog Component</h2>
      <Dog />
      <h2>LoginForm</h2>
      <LoginForm />

    </div>
  );
}

export default App;
