import GlobalStyled from "./styles/global";
import { AppRoutes } from "./routes";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <AppRoutes />
      <GlobalStyled />
    </Provider>
  );
};

export default App;
