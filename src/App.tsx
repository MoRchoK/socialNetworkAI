import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Profile from './components/Profile'
import Dialogs from './components/Dialogs'
import styles from './App.module.scss'

function App() {
    return (
        <div className={styles.wrapperApp}>
            <Header/>
            <div className={styles.container}>
                <div className={styles.app}>
                    <Sidebar/>
                    <main className={styles.main}>
                        <Routes>
                            <Route path="/profile" element={<Profile/>}/>
                            <Route path="/dialogs" element={<Dialogs/>}/>
                            <Route path="/dialogs/:id" element={<Dialogs/>}/>
                        </Routes>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default App
