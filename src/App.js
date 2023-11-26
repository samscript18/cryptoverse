import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Cryptocurrencies,
  Exchanges,
  News,
  Error,
  SharedLayout,
  SingleCryptocurrency,
} from "./pages";
import { getCryptoData } from "../src/app/redux/features/cryptoApi";
import { getCryptoNewsData } from "../src/app/redux/features/cryptoNewsApi";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCryptoData("/coins"));
    dispatch(
      getCryptoNewsData(
        "/api/1/news?apikey=pub_333465719d5f6f9b27142d80eb04dd6820d68&q=bitcoin&language=en"
      )
    );
  }, [dispatch]);

  return (
    <div className="App bg-gray-100 pr-0">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="cryptocurrencies" element={<Cryptocurrencies />} />
            <Route
              path="cryptocurrencies/:cryptocurrencyId"
              element={<SingleCryptocurrency />}
            />
            <Route path="exchanges" element={<Exchanges />} />
            <Route path="news" element={<News />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
