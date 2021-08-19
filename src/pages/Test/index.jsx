import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { v1 as uuidv1 } from 'uuid';
import useStateWithLocalStorage from '../../helpers/useStateWithLocalStorage';
import { useParams } from 'react-router';

import Question from '../../components/Question';

import './Test.scss';

const Test = () => {
  const [questions, setQuestions] = useState([]);
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);
  const [resultMessage, setResultMessage] = useState('');
  const [currentQuestion, setCurrentQuestion] = useStateWithLocalStorage(
    'currentQuestion',
    0,
  );
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const [results, setResults] = useState([]);

  const testId = useParams().id;

  const reset = () => {
    setCurrentQuestion(0);
  };

  useEffect(() => {
    let questionsArray = [];
    firebase
      .firestore()
      .collection('tests')
      .doc(testId)
      .get()
      .then((snapshot) => {
        snapshot.ref
          .collection('questions')
          .get()
          .then((res) => {
            setNumberOfQuestions(res.size);
            res.docs.forEach((question) => {
              questionsArray.push({ id: question.id, ...question.data() });
            });
            console.log(questionsArray);
            setQuestions(questionsArray);
          });
      });
  }, [testId]);

  const finishTest = () => {
    let rightAnswers = 0;
    results.forEach((result) => {
      if (result.isRight) {
        rightAnswers++;
      }
    });
    const percentage = ((rightAnswers / numberOfQuestions) * 100).toFixed(1);
    firebase
      .firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .update({
        [`${testId}-result`]: percentage,
      });
  };

  const handleSubmit = (questionId) => {
    let isRight = false;
    const activeQuestion = questions.filter(
      (question) => question.id === questionId,
    )[0];
    if (selectedAnswer.length === 0) {
      setResultMessage('You have to choose answer');
      return;
    }
    if (activeQuestion.type === 'single_select') {
      if (selectedAnswer[0] === activeQuestion.answer) {
        isRight = true;
      }
    } else if (activeQuestion.type === 'multi_select') {
      let containsAnswers = 0;
      selectedAnswer.forEach((answer) => {
        if (activeQuestion.answer.includes(answer)) {
          containsAnswers++;
        }
      });
      if (
        containsAnswers === activeQuestion.answer.length &&
        selectedAnswer.length === activeQuestion.answer.length
      ) {
        isRight = true;
      }
    } else {
      if (
        selectedAnswer[0].trim().toLowerCase() ===
        activeQuestion.answer.toLowerCase()
      ) {
        isRight = true;
      }
    }

    const userId = firebase.auth().currentUser.uid;
    let temporaryResults = results;
    const data = {
      questionId,
      selectedAnswer,
      isRight,
      testId,
      userId,
    };

    temporaryResults.push(data);
    setResults(temporaryResults);

    firebase
      .firestore()
      .collection('users')
      .doc(userId)
      .collection(testId)
      .doc(uuidv1())
      .set(data);

    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  useEffect(() => {
    setSelectedAnswer([]);
    setResultMessage('');
  }, [currentQuestion]);

  const handleChange = (e) => {
    let temporaryAnswersArray = selectedAnswer;
    if (e.target.type !== 'text') {
      if (e.target.checked) {
        if (e.target.type === 'radio') {
          temporaryAnswersArray.length = 0;
        }
        temporaryAnswersArray.push(e.target.value);
      } else {
        if (temporaryAnswersArray.includes(e.target.value)) {
          const index = temporaryAnswersArray.indexOf(e.target.value);
          temporaryAnswersArray.splice(index, 1);
        }
      }
    } else {
      temporaryAnswersArray[0] = e.target.value;
    }
    setSelectedAnswer(temporaryAnswersArray);
    console.log(temporaryAnswersArray);
  };

  return (
    <div className='test'>
      <button onClick={reset}>Reset</button>
      {questions.length > 0 && currentQuestion < questions.length && (
        <Question
          question={questions[currentQuestion]}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          key={questions[currentQuestion].id}
        />
      )}
      {resultMessage}
      <button onClick={finishTest}>Finish test</button>
    </div>
  );
};

export default Test;
