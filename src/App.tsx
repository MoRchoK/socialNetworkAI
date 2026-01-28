import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Profile from './components/Profile'
import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.wrapperApp}>
      <Header />
      <div className={styles.container}>
        <div className={styles.app}>
          <Sidebar />
          <main className={styles.main}>
            <Profile />

          </main>
        </div>
      </div>
    </div>
  )
}

export default App
