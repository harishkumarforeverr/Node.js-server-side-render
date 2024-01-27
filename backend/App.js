// YourReactComponent.jsx
const React = require("react");
const { Button, Checkbox, Form, Input } = require("antd");
const onFinish = (values) => {
  values.preventDefault();
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
 
const YourReactComponent = () => {
  const [count, setCount] = React.useState(0);
  const handle = () => {
    console.log("handlehandle", handle);
  };
 React.useEffect(()=>{
  console.log("vwindowwindow",window)
  if (typeof window !== 'undefined') {
    window.addEventListener("click",()=>{
      console.log("clicked")
    })
  }
 },[])

  return (
    <>
      <h1>Hello from YourReactComponent!{count}</h1>
      <button
        onClick={handle}
        style={{
          background: "red",
        }}
      >
        {" "}
        click me
      </button>
      {/* <App /> */}
    </>
  );
};

module.exports = YourReactComponent;
