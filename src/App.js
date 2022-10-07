import {useRef} from "react";

function App() {

    const inputRef = useRef();

    function runRef() {
        inputRef.current.focus()
    }

    return (
        <div className={'container bg-dark p-5'}>
            <input type="text" className={'form-control my-5'} ref={inputRef}/>
            <button className={'btn btn-success'} onClick={runRef}>Submit</button>
        </div>
    );
}

export default App;
