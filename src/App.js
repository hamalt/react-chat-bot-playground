import logo from './logo.svg';
import './App.css';
import Sample from './sample';

function App() {
    const style = {
        width: '50%',
        margin: '0 auto',
        marginTop: 150,
        display: 'flex',
        justifyContent: 'center'
    };
  return (
    <div className="App">
      <div style={style}>
        <Sample />
      </div>
    </div>
  );
}

export default App;
