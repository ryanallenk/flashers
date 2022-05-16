import { Wrapper, Status } from "@googlemaps/react-wrapper";
import './App.css';

function App() {
  const render = (status) => {
    switch (status) {
      case Status.LOADING:
        return <Spinner />;
      case Status.FAILURE:
        return <ErrorComponent />;
      case Status.SUCCESS:
        return <MyMapComponent />;
    }
  };
  const MyApp = () => <Wrapper apiKey={"YOUR_API_KEY"} render={render} />;
  
  return (
    <div className="App">

    </div>
  );
}

export default App;
