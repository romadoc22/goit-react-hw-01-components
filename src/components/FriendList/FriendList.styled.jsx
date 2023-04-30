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
  background-color: #a1f1d5;
`;

export const Status = styled.span`
  background-color: ${props => (props.isOn ? `green` : `red`)};
  width: 20px;
  height: 20px;
  display: block;
  border-radius: 50%;
`;

export const Name = styled.p`
  text-align: center;
  font-size: 25px;
  color: #4e17a7;
`;
