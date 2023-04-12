import './global.css';
import { Header } from './Components/Header';
import {Sidebar} from './Components/Sidebar';
import { Post } from './Components/Post';





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
      <Post/>
        </main>

      </div>
    </div>
  )
}

export default App
