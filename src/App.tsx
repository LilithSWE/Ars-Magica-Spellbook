import { lazy, Suspense } from "react";
import { Route, HashRouter, Routes } from "react-router-dom";
import { Header } from "./components/generic/Header";
import { Footer } from "./components/generic/Footer";

// Lazy-loaded components with original import paths
const Home = lazy(() =>
  import("./pages/Home").then((module) => ({ default: module.Home }))
);
const Login = lazy(() =>
  import("./pages/Login").then((module) => ({ default: module.Login }))
);
const Guest = lazy(() =>
  import("./pages/Guest").then((module) => ({ default: module.Guest }))
);

const theme = localStorage.getItem("theme");
const body = document.querySelector("#body");
if (theme == "dark") {
  body?.classList.add("dark");
} else {
  body?.classList.add("light");
}

function App() {
  return (
    <>
      <Header />
      <main
        style={{
          marginTop: "7rem",
          padding: "0 2rem",
        }}
      >
        <HashRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/guest" element={<Guest />} />
            </Routes>
          </Suspense>
        </HashRouter>
      </main>
      <Footer />
    </>
  );
}

export default App;
