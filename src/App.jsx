import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
 

  const print = () => {
     // send evento to react-native to print ticket

     const data = {
      id: 1,
      name: "Hola ZeroQ"
     }

     
  if (window.ReactNativeWebView) {
    window.ReactNativeWebView.postMessage(JSON.stringify(data))
  }
  if (navigator.userAgent === `electron-webview`) {
    // Note that the sendMessage function needs to be setup in the preload
    // script and ties to a corresponding main process method/function
    // Send a message to the main process
    // eslint-disable-next-line no-console
    console.log(`print`)
    window.api.send(`printTicket`, data)

    //  window.Bridge.sendMessage('Message from web view index.js');
  } else {
    // eslint-disable-next-line no-console
    console.log(`fail`)
  }
  }

  return (
    <div className="App">
     <button onClick={print}>Imprime Pleaseee 🚀</button>
       
    </div>
  )
}

export default App
