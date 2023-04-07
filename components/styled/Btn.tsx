import styled from "styled-components";

export const BtnIcon = styled.button`
    height: 45px;
    width: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    font-size: 24px;
    color:white;
    border: 1px solid white;
    transition: 0.4s;
    &:hover{
        color: ${props => props.theme.primary};
        border-color: ${props => props.theme.primary};
    }
`


export const OutlinedBtn = styled.button`
border: 1px solid ${props => props.theme[props.color ?? 'primary']};
color: ${props => props.theme[props.color ?? 'primary']} ;
border-radius: 4px;
padding:0.6rem 1rem;
@media (min-width:370px){
    padding: 0.8rem 2rem;
}

`

export const GradiantBtn = styled.button`
background: linear-gradient(90.1deg, #EA5400 0.06%, #FF7A00 99.88%);
padding:0.6rem 1rem;
@media (min-width:370px){
    padding: 0.8rem 2rem;
}color: white;
font-size: 1rem;
border-radius: 4px;

`