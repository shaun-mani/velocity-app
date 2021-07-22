import './App.css';

function App() {
  function headerInput(variable) {
    if (variable) {
      return "Image was clicked";
    } else {
      return "Image has not been clicked";
    }
  }
  function imageClickHandle() {
    return headerInput(true);
  };
  return (
    
    <div>
      <>
        <h2>{headerInput(false)}</h2>
        <button onClick={imageClickHandle()}>
        <img src="/images/campus_map_half.png" alt="" />
        </button>
    </>
    </div>
  );
}

export default App;
