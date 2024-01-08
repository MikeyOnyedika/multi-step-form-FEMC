import './App.css';
import Menu from './components/Menu';
import Form from './components/Form';
import GlobalDataProvider from './contexts/GlobalDataProvider';

function App() {
  return (
    <GlobalDataProvider>
      <div className="flex flex-col w-screen h-screen font-sans">
        <Menu />
        <Form />
      </div>
    </GlobalDataProvider>
  );
}

export default App;
