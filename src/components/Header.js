import React, { useContext } from 'react';
import styled from 'styled-components/macro';

import AuthContext from '../auth-context';

const Container = styled.div`
  > b {
    margin-right: 10px;
  }
  margin-bottom: 10px;
`;

export default () => {
  const { userName, login } = useContext(AuthContext);
  return (
    <Container>
      <b>signed-in: {userName ? userName : 'nobody yet'}</b>
      {userName ? null : <button onClick={() => login()}>Login</button>}
    </Container>
  );
};
