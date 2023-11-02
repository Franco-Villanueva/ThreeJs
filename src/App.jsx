
import { Suspense } from 'react'
import './App.css'
import Scene from './components/Scene'
import Labels from './components/Labels'

function App() {

  return (
    <>
    <Labels />
      <div className='scene_container'>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </div>
    </>
  )
}

export default App
