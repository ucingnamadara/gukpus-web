import styled from "styled-components";

export const ButtonTag = styled.button`
  background-color: var(--color-black);
  color: var(--color-white);
  font-size: var(--font-size-md);
  border-radius: var(--border-radius-md);
  padding: var(--padding-sm);
  margin: var(--margin-xl) 0 0 0;
  border: 1px solid var(--color-black);

  &:hover {
    background-color: var(--color-white);
    color: var(--color-black);
    cursor: pointer;
    transition:
      background-color 0.2s ease,
      color 0.2s ease;
  }
`;
