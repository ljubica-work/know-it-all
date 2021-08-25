import React, { useEffect, useState } from 'react';
import firebase, { auth } from '../../firebase';
import { useParams } from 'react-router';

import CirclePercentage from '../../components/CirclePercentage';

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
            avaliableTestArray.push(doc.data());
            setAvailableTests(avaliableTestArray);
          }
        });
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

  return (
    <div className='finish-test'>
      <CirclePercentage percentage={percentage} />
      {availableTests &&
        availableTests.map((test) => {
          return <h1 key={test.name}>{test.name}</h1>;
        })}
    </div>
  );
};

export default FinishTest;
