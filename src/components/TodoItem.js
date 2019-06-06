import React, { useMemo } from 'react';
import PropType from 'prop-types';
import styled from 'styled-components/macro';

const TodoItem = styled.div`
  color: ${props => props.color};
`;

const TodoItemComponent = ({ text }) => {
  const calculateColor = charSize => {
    console.log('calculate color for ' + charSize);
    if (charSize < 3) return 'blue';
    else return 'green';
  };
  const color = useMemo(() => calculateColor(text.length), [text.length]);
  return <TodoItem color={color}>{text}</TodoItem>;
};

TodoItemComponent.propTypes = {
  text: PropType.string,
};

export default React.memo(TodoItemComponent);
