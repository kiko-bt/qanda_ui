/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState, useEffect } from "react";
import { QuestionData, getUnansweredQuestions } from "./QuestionsData";
import { QuestionList } from "./QuestionList";
import Page from "./Page";
import { PrimaryButton } from "./Styles";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const [questions, setQuestions] = useState<QuestionData[]>([]);
  const [questionsLoading, setQuestionsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const doGetUnansweredQuestions = async () => {
      const unansweredQuestions = await getUnansweredQuestions();
      setQuestions(unansweredQuestions);
      setQuestionsLoading(false);
    };
    doGetUnansweredQuestions();
  }, []);

  const handleAskQuestionClick = () => {
    navigate("ask");
  };

  return (
    <Page>
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <h2>Unanswered Questions</h2>
        <PrimaryButton onClick={handleAskQuestionClick}>
          Ask a question
        </PrimaryButton>
        {questionsLoading ? (
          <div>Loading...</div>
        ) : (
          <QuestionList data={questions}></QuestionList>
        )}
      </div>
    </Page>
  );
};
