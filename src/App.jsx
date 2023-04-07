import './global.css';
import { Header } from './Components/Header';
import {Sidebar} from './Components/Sidebar';





import styles from './App.module.css';

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
            
        <aside>

        <Sidebar/>
        
        </aside>


        <main>
        <p>AAAAAAAAAAAA</p>
   
        <p>AAAAAAAAAAAA</p>
        </main>

      </div>
    </div>
  )
}

export default App
