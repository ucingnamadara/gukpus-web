import styled from "styled-components";
import { GRAY } from "../../../styles/color/color";

export const InputTag = styled.input`
    padding: 8px;
    font-size: ${(props) => props.fontSize || '16px'};
    border-radius: 8px;
    border: 1px solid ${GRAY};
`