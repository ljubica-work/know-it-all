import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';
import firebase from 'firebase';

import Header from '../../components/Header';
import Card from '../../components/Card';

import './Dashboard.scss';

const Dashboard = () => {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('tests')
      .get()
      .then((snapshot) => {
        const testsArray = snapshot.docs.map((doc) => doc.data());
        console.log(testsArray);
        setTests(testsArray);
      });
  }, []);
  return (
    <div className='dashboard'>
      DASHBOARD
      {tests && tests.map((test) => <Card key={test.name} cardInfo={test} />)}
    </div>
  );
};

export default Dashboard;
