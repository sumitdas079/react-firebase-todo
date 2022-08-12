import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './components/login';
import DisplayTodo from './components/DisplayTodo'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase'

function App() {
  const [user] = useAuthState(auth)
  return (
    <div className="App">
      <div className="mx-auto px-4">
        {user ? <DisplayTodo /> : <Login />}
      </div>
    </div>
  );
}

export default App;
