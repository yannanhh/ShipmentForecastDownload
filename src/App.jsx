import { useState } from 'react'
import './App.css'
function App() {
  const [url, setUrl] = useState('')
  return (
    <>
      <h1>Private S3 Static Site Demo</h1>
      <div className="card">
        <div style={{ marginBottom: '16px' }}>
          <button
            onClick={async () => {
              const data = await (await fetch('https://jnrzhqaid9.execute-api.us-east-1.amazonaws.com/test')).json()
              setUrl(data.url)
            }}
          >
            Get Pre-signed URL
          </button>
        </div>
          <div style={{ marginBottom: '16px' }}>
            <a href= "test.csv">
              <button>Download File</button>
            </a >
          </div>
      </div>
    </>
  )
}

export default App
