import React, { useState } from 'react';
import {
  isEmailInvalid,
  isPasswordInvalid,
  isEmpty,
} from '../../helpers/validations';
import firebase, { auth } from '../../firebase';
import { useHistory } from 'react-router-dom';
import routes from '../../constants/routes';

import Registration from '../../components/Registration';

import './Signup.scss';

const Signup = () => {
  let history = useHistory();
  const [error, setError] = useState('');

  const handleSubmit = (e, credentials) => {
    e.preventDefault();

    if (isEmailInvalid(credentials.email)) {
      setError(isEmailInvalid(credentials.email));
    } else if (isPasswordInvalid(credentials.password)) {
      setError(isPasswordInvalid(credentials.password));
    } else if (isEmpty(credentials.email)) {
      setError(isEmpty(credentials.email));
    } else {
      auth
        .createUserWithEmailAndPassword(credentials.email, credentials.password)
        .then((res) => {
          history.push(routes.LOGIN);
          return firebase
            .firestore()
            .collection('users')
            .doc(res.user.uid)
            .set({
              name: credentials.username,
            });
        })
        .catch((err) => setError(err.message));
    }
  };
  return (
    <div className='signup'>
      SIGNUP
      <Registration
        handleSubmit={handleSubmit}
        error={error}
        setError={setError}
      />
    </div>
  );
};

export default Signup;
