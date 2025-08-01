import './App.css'
import Counter from './Counter';
import Toggler from './Toggler';
import ToggleCounter from './TogglerCounter';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h2>React State Example: Counter</h2>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <Counter />
      </div>
      <h2>React State Example 2: Toggler</h2>
      <div>
        <Toggler />
      </div>
      <h2>
        <div>
          <ToggleCounter />
        </div>
      </h2>
    </>
  )
}

export default App
