import logo from './logo.svg';
import './App.css';
import RecipesComp from './components/RecipesArea/RecipeList/recipes';
import LayoutComp from './components/LayoutAre/Layout/layout';
import RoutingComp from './components/LayoutAre/Routing/routing';

function App() {
  return (
    <div className="App1">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        <LayoutComp/>
        
      {/* <RecipesComp /> */}
    </div>
  );
}

export default App;
