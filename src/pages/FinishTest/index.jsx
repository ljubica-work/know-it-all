import React, { useEffect, useState } from 'react';
import firebase, { auth } from '../../firebase';
import { useParams } from 'react-router';

import CirclePercentage from '../../components/CirclePercentage';
import Card from '../../components/Card';
import Header from '../../components/Header';

import './FinishTest.scss';

const FinishTest = () => {
  const [percentage, setPercentage] = useState(0);
  const [availableTests, setAvailableTests] = useState([]);

  const testId = useParams().id;

  const getAvailableTests = (user) => {
    let avaliableTestArray = [];
    const userArray = Object.keys(user);

    firebase
      .firestore()
      .collection('tests')
      .get()
      .then((res) => {
        res.docs.forEach((doc) => {
          if (!userArray.includes(doc.id)) {
            avaliableTestArray.push({ ...doc.data(), id: doc.id });
          }
        });
        setAvailableTests(avaliableTestArray);
      });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe();
      if (user) {
        const userId = user.uid;
        firebase
          .firestore()
          .collection('users')
          .doc(userId)
          .get()
          .then((snapshot) => {
            setPercentage(Math.round(snapshot.data()[testId]));
            getAvailableTests(snapshot.data());
          });
      } else {
        console.log('nema usera');
      }
    });
  }, [testId]);

  const availableTestsTitle = () => {
    if (availableTests.length > 0) {
      return 'More available tests';
    } else {
      return 'No more available tests';
    }
  };

  return (
    <div className='finish-test'>
      <Header />
      <div className='finish-test__inner'>
        <h1 className='finish-test__title'>Test completed!</h1>
        <h2 className='finish-test__score'>Your score:</h2>
        <CirclePercentage percentage={percentage} />
        <h2 className='finish-test__small-title'>{availableTestsTitle()}</h2>
        <div className='finish-test__additional'>
          {availableTests &&
            availableTests.map((test) => (
              <Card
                key={test.name}
                cardInfo={test}
                className='finish-test__card'
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default FinishTest;
