import React, {  useEffect } from 'react';
import styled from 'styled-components';
import ConfettiGenerator from 'confetti-js';
const Absolute = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

const Body = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  text-align: center;
  background-color: #000;
`;
const Text = styled.h1`
  z-index: 100;
  font-size: 5em;
  color: #ff69b4;
`;

function Birthday(props) {
  var getDate = new Date();
  let month = getDate.getMonth() + 1;
  let day = getDate.getDate();
  let birthday = month === props.month && day === props.day;
  useEffect(() => {
    if (birthday) {
      const confettiSettings = {
        target: 'my-canvas'
      };
      const confetti = new ConfettiGenerator(confettiSettings);
      confetti.render();

      return () => confetti.clear();
    }
  });

  return (
    <Body>
      {birthday && (
        <div>
          <canvas id='my-canvas'> </canvas>
        </div>
      )}
      <Absolute>
        <Text>Birthday.</Text>
        <Text>Is it {props.person} Birthday?</Text>
        <Text>{birthday ? 'Yes.' : 'No.'}</Text>
      </Absolute>
    </Body>
  );
}

export default Birthday;
