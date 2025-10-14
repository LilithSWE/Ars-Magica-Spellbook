import { lazy, Suspense } from "react";
import { Route, HashRouter, Routes } from "react-router-dom";

// Lazy-loaded components with original import paths
const Home = lazy(() =>
  import("./pages/Home").then((module) => ({ default: module.Home }))
);

function App() {
  return (
    <>
      <HashRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </>
  );
}

export default App;
