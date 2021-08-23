import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import firebase from 'firebase';
import Icon from '../../helpers/Icon';
import { useHistory } from 'react-router-dom';
import routes from '../../constants/routes';

import Button from '../../components/Button';
import Header from '../../components/Header';

import './StartTest.scss';

const StartTest = () => {
  const [testData, setTestData] = useState({});

  const testId = useParams().id;
  let history = useHistory();

  useEffect(() => {
    firebase
      .firestore()
      .collection('tests')
      .doc(testId)
      .get()
      .then((snapshot) => {
        setTestData(snapshot.data());
      });
  }, [testId]);

  const handleClick = () => {
    history.push({
      pathname: `${routes.TEST}/${testId}`,
      state: { isStarted: true, testId: testId },
    });
  };

  return (
    <div className='start-test'>
      <Header />
      {testData && (
        <>
          <div className='start-test__heading'>
            <Icon className='start-test__image' name={testId} />

            <div className='start-test__heading-wrapper'>
              <div className='start-test__info'>
                <span className='start-test__small-info'>
                  {testData.duration}
                </span>
                <h2 className='start-test__title'>{testData.name}</h2>
                <span className='start-test__small-info'>{testData.level}</span>
              </div>
              <Button
                variant='secondary'
                className='start-test__button-heading'
                onClick={handleClick}
              >
                {' '}
                Start Test
              </Button>
            </div>
          </div>

          <div className='start-test__content'>
            <h3 className='start-test__content-title'>Description:</h3>
            <p>{testData.description}</p>
            <span className='start-test__number-of-questions'>
              Number of questions: {testData.numberOfQuestions}
            </span>
            <h3 className='start-test__content-title'>Instructions:</h3>
            <p>
              This quiz is meant to test your knowledge in a particular topic,
              but it should also be fun! We did our best to make it as
              straightforward as possible, so you can focus on answering the
              questions instead of figuring out how to answer them. There are a
              few simple rules you should follow:
            </p>
            <p>
              After you start the test - by clicking the 'Start test' button at
              the bottom or at the top of the page - you will be taken to the
              first question. Once you start the quiz, there is no going back
              and no pausing it, so make sure you are ready before starting it.
            </p>
            <p>
              During the test, you will see different types of questions. Some
              require you to select just one answer, and in other cases you will
              be asked to select multiple options. You might also encounter
              questions that require you to type in your answer. In any case,
              there is going to be clear instructions with every question.
            </p>
            <p>
              You can change your answer as long as you didn't submit it. After
              clicking 'Submit answer', you will go to the next question, and
              there is no returning to the previous one, so check to make
              sure you are satisfied with your answer before submitting it. 
            </p>
            <p>
              Do not close the test before finishing it, because you will not be
              able to go back to it. If you close it on the third question, for
              example, we will consider that you gave up and count the rest of
              the questions as if you answered wrong.
            </p>
            <p>
              Once you come to the end of the test, you will get to see your
              results right away.
            </p>
            <p>Good luck!</p>
          </div>

          <div className='start-test__footer'>
            <div className='start-test__footer-inner'>
              <div className='start-test__fotter-info'>
                <h3 className='start-test__footer-title'>{testData.name}</h3>
                <span className='start-test__small-info'>{testData.level}</span>
              </div>
              <Button
                variant='primary'
                className='start-test__footer-button'
                onClick={handleClick}
              >
                Start Test
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default StartTest;
