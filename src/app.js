import "@tarojs/async-await";
import Taro, { Component } from "@tarojs/taro";
import Home from "./pages/home";
import dva from "./utils/dva";
import models from "./models";
import { Provider } from "@tarojs/redux";
import "./app.scss";

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
});
const store = dvaApp.getStore();

class App extends Component {
  config = {
    pages: ["pages/home/index"],
    window: {
      backgroundTextStyle: "dark",
      navigationBarBackgroundColor: "#F5F5F5",
      navigationBarTitleText: "首页",
      navigationBarTextStyle: "black",
    },
  };

  componentDidMount() {}

  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById("app"));
