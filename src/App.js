import logo from './logo.svg';
import './App.css';
import react, { useState } from 'react';

function App() {
  const [celcius, setCelsius] = useState('');
  const [farenheit, setFarenheit] = useState('');

  const toCelcius = (e) => {
    const f = e.target.value; 
    if (f){
      setFarenheit(f); 
      setCelsius(((f-32)*5/9).toFixed(2));
    }
    else{
      setCelsius('');
      setFarenheit('');
    }
  }

  const toFarenheit = (e) => {
    const c = e.target.value;
    if(c){
      setCelsius(c);
      setFarenheit(((c * 9/5) + 32).toFixed(2));
    }
    else{
      setCelsius('');
      setFarenheit('');
    }
  }

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f7f9fc',
      fontFamily: 'Arial, sans-serif',
  },
  heading: {
      fontSize: '2.5rem',
      marginBottom: '2rem',
      color: '#333',
  },
  inputGroup: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '1.5rem',
  },
  label: {
      fontSize: '1.2rem',
      marginBottom: '0.5rem',
      color: '#555',
  },
  input: {
      padding: '0.5rem',
      fontSize: '1rem',
      width: '200px',
      borderRadius: '5px',
      border: '1px solid #ccc',
  },
  };

  return (
    <div style={styles.container}>
      <div style = {styles.inputGroup}>
        <label styles={styles.label}>Celcius:</label>
        <input type = "number" value = {celcius} onChange={toFarenheit} style={styles.input} placeholder='Enter °C'></input>
      </div>
      <div style={styles.inputGroup}>
        <label style={styles.label}>Farenheit:</label>
        <input type="number" value={farenheit} onChange={toCelcius} style={styles.input} placeholder='Enter °F'></input>
      </div>
    </div>
  );
}

export default App;
