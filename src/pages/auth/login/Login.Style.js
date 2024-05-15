import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 0.5px solid var(--color-secondary);
    border-radius: 10px;
    padding: var(--padding-xl);
`

export const LogoImg = styled.img`
    @media (max-width: 768px) {
        width: 100px;
        margin-bottom: 10px;
    }
    @media (min-width: 769px) {
        width: 150px;
        margin-bottom: 15px;
    }
`

export const LoginDiv = styled.div`

`

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: var(--padding-xs);
`

export const LoginTitle = styled.p`
    font-size: var(--font-size-title);
    font-weight: bold;
    margin: 0 0 0 0;
`

export const LoginTitleDescription = styled.p`
    font-size: var(--font-size-xs);
    font-weight: light;
    margin: 0 0 var(--padding-2xl) 0;
`

export const FormTitle = styled.p`
    font-size: var(--font-size-xs);
    margin: 0 0 var(--padding-xs) 0;
`
