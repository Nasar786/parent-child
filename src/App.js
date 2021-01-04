import './App.css';
import Student from './student';

function App() {
  return (
    <div>
       <Student name='Asad' class='Matric' lives='Islamabad'/>
       
       <Student name='Ali' class='Inter' lives='Karachi'/> 
       
       <Student name='Babar' class='Bachelors' lives='Lahore'/>
       
       <Student name='Haris' class='Masters' lives='Hyderabad'/>     
       
    </div>
  );
}

export default App;
