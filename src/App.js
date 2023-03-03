import "./App.css";
import CompA from "./CompA";
import { GlobalContextProvider } from "./GlobalContext";
import { UserContextProvider } from "./UserContext";

function App(props) {
  const { info } = props;
  return (
    <GlobalContextProvider>
      <UserContextProvider>
        <div className="App">
          <h1>UseContext</h1>
          <CompA info={info} />
        </div>
      </UserContextProvider>
    </GlobalContextProvider>
  );
}

export default App;
