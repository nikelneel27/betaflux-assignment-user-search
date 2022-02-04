import React, { Suspense } from "react";
import Search from "./Search/Search";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ErrorBoundary } from "react-error-boundary";
import { Fallback } from "./Fallback";

function MainComponent() {
  const errorHandler = (error, errorInfo) => {
    console.log("logging", error, errorInfo);
  };
  return (
    <div>
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "90px",
            }}
          >
            <Loader
              type="Rings"
              color="#00BFFF"
              height={200}
              width={200}
              timeout={8000}
            />
          </div>
        }
      >
        <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
          <Search />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
}

export default MainComponent;
