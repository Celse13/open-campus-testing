"use client";

import React from 'react';
// @ts-ignore
import { LoginButton, useOCAuth } from '@opencampus/ocid-connect-js';

const Home = () => {
    const { authState, ocAuth, OCId, ethAddress } = useOCAuth();

    return <div>
        {!authState || !authState.isAuthenticated ? (
          <LoginButton />
        ) : (
          <div>
              <h4>User Info</h4>
              <pre>{OCId}</pre>
              <pre>{ethAddress}</pre>
              <pre>{ocAuth && typeof ocAuth.getStateParameter === 'function' ? ocAuth.getStateParameter() : 'N/A'}</pre>
              <pre>{JSON.stringify(authState)}</pre>
          </div>
        )}
    </div>;
};

export default Home;