import styled from 'styled-components'

const Button = styled.button`
width: 100px;
height: 40px;
border: 2px black solid;
font-size: 1em;
font-weight: bold;
background-color: ${props => props.primary ? 'blue' : 'white'};
color: ${props => props.primary ? 'white' : 'black'};
box-shadow: -7px 11px 31px -6px rgba(0,0,0,0.75);
border-radius: 5px;
cursor: pointer;

&:active{
    box-shadow: -7px 11px 31px -8px rgba(0,0,0,0.75);
    background-color: cyan;
}

&:focus{
    outline: none;
`

export default Button