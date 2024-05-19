import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
export const WelcomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--padding-3xl);
  margin: var(--padding-3xl) 0;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;
    h1 {
      overflow-wrap: break-word;
      word-wrap: break-word;
      word-break: break-word;
      hyphens: auto;
      font-size: var(--font-size-title-xl);
      font-weight: bold;
    }
    p {
      font-size: var(--font-size-xs-xl);
    }
  }
`;

export const AdoptWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--padding-3xl);
  margin: var(--padding-3xl) 0;
  ul {
    display: flex;
    width: 80%;
    justify-content: space-around;
    align-items: center;
    gap: var(--padding-xl);
    list-style: none;
    margin: 0;
    padding: 0;
    @media (max-width: 768px) {
      display: none;
    }

    li {
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        gap: var(--padding-sm);
        div {
          background-color: var(--color-grey);
          padding: var(--padding-md);
          border-radius: var(--border-radius-full);
          span {
            font-size: 4rem;
            font-weight: bold;
          }
        }
        p {
          font-size: var(--font-size-lg);
        }
      }
    }
  }
`;
