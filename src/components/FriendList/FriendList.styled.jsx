import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  list-style: none;
  padding: 0;
`;

export const Li = styled.li`
  flex-basis: auto;
  flex-basis: 125px;
  border: 3px solid rgba(0, 0, 0, 0.2);
  flex-shrink: 1;
`;

export const Status = styled.span`
  color: ${props => {
    return props.isOn ? `green` : `red`;
  }};
  width: 10px;
  height: 10px;
  display: block;
`;


