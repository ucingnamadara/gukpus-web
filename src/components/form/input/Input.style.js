import styled from "styled-components";

export const InputTag = styled.input`
    padding: var(--padding-xs);
    font-size: ${(props) => props.fontSize || 'var(--font-size-xs)'};
    border-radius: var(--border-radius-md);
    border: 1px solid var(--color-secondary);
    width: 100%;
    box-sizing: border-box;
    
`