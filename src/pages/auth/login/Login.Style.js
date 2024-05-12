import styled from "styled-components";
import { GRAY } from "../../../styles/color/color";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid ${GRAY};
    border-radius: 10px;
    padding: 30px;
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

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
