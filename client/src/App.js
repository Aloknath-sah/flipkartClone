import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Cart } from './components/cart/Cart';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
