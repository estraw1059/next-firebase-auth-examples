import { AuthAction, useUser, withUser } from 'next-firebase-auth';
import React from 'react';

const UserInfo = () => {
    const user = useUser();
    return (
        <div>
          <p>Your email is {user.email ? user.email : 'unknown'}.</p>
        </div>
    );
};

export default withUser({
    whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
    authPageURL: '/my-login-page/',
  })(UserInfo)