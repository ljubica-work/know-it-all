import React, { useEffect, useState } from 'react';
import firebase from 'firebase';

import Header from '../../components/Header';
import Card from '../../components/Card';

import './Dashboard.scss';

const Dashboard = () => {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    let testsArray = [];
    firebase
      .firestore()
      .collection('tests')
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          testsArray.push({ ...doc.data(), id: doc.id });
        });
        console.log(testsArray);
        setTests(testsArray);
      });
  }, []);
  return (
    <div className='dashboard'>
      <Header />
      <div className='dashboard__cards'>
        {tests &&
          tests.map((test) => (
            <Card key={test.name} cardInfo={test} className='dashboard__card' />
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
