import ChangeTheme from "./component/ChangeTheme"
import CounterApp from "./component/CounterApp"
import InputText from "./component/InputText"
import ToggleShow from "./component/ToggleShow"


function App() {

  return (
   <>
      <h1 className="underline font-bold text-blue-500">Rohit</h1>
      <p className="font-bold text-blue">i am from Nanded</p>
      <CounterApp></CounterApp>
      <br />
      <InputText></InputText>
      <br />
      <ToggleShow></ToggleShow>
      <br />
      <ChangeTheme></ChangeTheme>
   </>
  )
}

export default App
