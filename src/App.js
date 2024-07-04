import AppLayout from './Layout/AppLayout';
import AppRouter from './routes/AppRouter';
import './App.scss';
import "./scss/Card.scss";

function App() {
  return (
    <div>
      <AppLayout>
        <AppRouter/>
      </AppLayout>
    </div>
  );
}

export default App;
