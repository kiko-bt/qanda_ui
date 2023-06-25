/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchPage } from "./SearchPage";
import { SignInPage } from "./SignInPage";
import { Header } from "./Header";
import { HomePage } from "./HomePage";
import { fontFamily, fontSize, gray2 } from "./Styles";
import { NotFoundPage } from "./NotFoundPage";
import { QuestionPage } from "./QuestionPage";

const AskPage = lazy(() => import("./AskPage"));

function App() {
  return (
    <BrowserRouter>
      <div
        css={css`
          font-family: ${fontFamily};
          font-size: ${fontSize};
          color: ${gray2};
        `}
      >
        <Header />
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="search" element={<SearchPage />} />
          <Route
            path="ask"
            element={
              <Suspense
                fallback={
                  <div
                    css={css`
                      margin-top: 100px;
                      text-align: center;
                    `}
                  >
                    Loading...
                  </div>
                }
              >
                <AskPage />
              </Suspense>
            }
          />
          <Route path="signin" element={<SignInPage />} />
          <Route path="questions/:questionId" element={<QuestionPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
