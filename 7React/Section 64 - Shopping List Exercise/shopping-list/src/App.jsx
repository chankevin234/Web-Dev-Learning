import './App.css'
import ShoppingList from './ShoppingList';

// fake DB seed data
const data = [
  {
    id: 1, item: 'eggs', qty: 12, completed: false
  },
  {
    id: 2, item: 'milk', qty: 1, completed: true
  },
  {
    id: 3, item: 'chicken', qty: 4, completed: false
  },
  {
    id: 4, item: 'carrots', qty: 6, completed: true
  },
];

function App() {
  return (
    <>
      <div>
        <ShoppingList items={data} />
      </div>
    </>
  )
}

export default App
