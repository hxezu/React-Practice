import Count from "./components/state/zustand/Count";
import CountOutsider from "./components/state/context-api/CountOutsider";

export default function App() {
  return (
    <>
      {/* <CounterProvider>
        <Count />
      </CounterProvider> */}

      {/* <Provider store={store}>
        <Count />
      </Provider> */}

      <Count />
      <CountOutsider />
    </>
  );
}
