import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 0.5px solid var(--color-secondary);
    border-radius: var(--border-radius-xl);
    padding: var(--padding-2xl);
    width: 85%;
    gap: var(--padding-2xl);

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        gap: var(--padding-2xl);
    }
`

export const LoginDiv = styled.div`
    width: 40%;

    @media (max-width: 768px) {
        width: 100%;
    }
`

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: var(--padding-md);
    margin-bottom: var(--padding-3xl);
`

export const LoginTitle = styled.p`
    font-size: var(--font-size-title-xl);
    font-weight: bold;
    margin: 0 0 var(--padding-xs) 0;
`

export const LoginTitleDescription = styled.p`
    font-size: var(--font-size-xs);
    font-weight: 300;
    margin: 0 0 var(--padding-3xl) 0;
`

export const FormTitle = styled.p`
    font-size: var(--font-size-md);
    font-weight: 200;
    margin: 0 0 0.25rem 0;
`

export const ImageDiv = styled.div`
    width: 60%;

    @media (max-width: 768px) {
        display: none;
    }
`

export const Image = styled.img`
    width: 100%;
    border-radius: var(--border-radius-xl);
`

export const Hyperlink = styled.a`
    font-weight: bold;
    text-decoration: none;
    color: var(--color-black);
`