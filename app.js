console.log("Message to Developer")
function Alertmessage(){
    const hi=()=>{alert("Message from Javascript Alert!")}
return <div><button onClick={hi}>Click</button></div>
}
ReactDOM.render(<Alertmessage/>,document.getElementById('mydiv'))