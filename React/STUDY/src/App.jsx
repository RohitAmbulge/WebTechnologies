import EventTask from "./components/eventTask/EventTask";
import StateIntro from "./components/intro/state/StateIntro"

let App =()=>{
    return(
        <>
        <h1>Tasks</h1>
        <StateIntro></StateIntro>
        <br />
        <EventTask></EventTask>
        </>
        
    )
}

export default App;