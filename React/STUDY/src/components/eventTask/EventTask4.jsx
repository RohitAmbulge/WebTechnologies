const { useState } = require("react")

const EventTask4 = () =>{
    let [state , setState] = useState({});
    let [list , setList] = useState([]);

    let handleChange = (e) =>{
        setState({...state, [e.target.name] : e.target.value});
    };

    let handleSubmit = (e) =>{
        e.preventDefault();
        setList([])
    }
}