import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const CardWrapper = styled.div`
  background-color: var(--color-white);
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: shrink;
  justify-content: center;
  border: 0.5px solid var(--color-secondary);
  border-radius: var(--border-radius-xl);
  padding: var(--padding-3xl);
  margin: var(--padding-3xl) 0;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: var(--padding-2xl);
  }
`;

export const RegisterForm = styled.form`
  display: grid;
  grid-template-columns: 2fr 2fr;
  gap: var(--padding-sm);
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const RegisterTitle = styled.p`
  font-size: var(--font-size-title-xl);
  font-weight: bold;
  padding: 0 0 var(--padding-xs) 0;
`;

export const RegisterSubTitle = styled.p`
  font-size: var(--font-size-xs);
  font-weight: 200;
  padding: 0 0 var(--padding-md) 0;
`;

export const FormTitle = styled.p`
  font-size: var(--font-size-md);
  font-weight: 200;
  margin: 0 0 0.25rem 0;
`;

export const Hyperlink = styled.a`
  font-weight: bold;
  text-decoration: none;
  color: var(--color-black);
`;
