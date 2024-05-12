import styled from 'styled-components';
import { PRIMARY, WHITE } from '../../../styles/color/color';

export const ButtonTag = styled.button`
     background-color: ${PRIMARY};
     color: ${WHITE};
     font-size: 1em;
     border-radius: 8px;
   
     @media (max-width: 768px) {
         font-size: 0.8em;
         margin: 0.5em;
         padding: 8px;
     }

     @media (min-width: 769px) {
         font-size: 1em;
         margin: 1em;
         padding: 8px;
     }

     &:hover {
         background-color: ${WHITE};
         color: ${PRIMARY};
         cursor: pointer;
         transition: background-color 0.2s ease, color 0.2s ease;
     }
`;
