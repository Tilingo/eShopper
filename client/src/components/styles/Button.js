import styled from 'styled-components'

const Button = styled.button`
width: 100px;
height: 45px;
border: 2px black solid;
font-size: 1em;
font-weight: bold;

background-color: ${props => props.theme.bc};
color: ${props => props.theme.c};

box-shadow: -7px 11px 31px -6px rgba(0,0,0,0.75);
border-radius: 5px;
cursor: pointer;

&:active{
    box-shadow: -7px 11px 31px -8px rgba(0,0,0,0.75);
    background-color: cyan;
}

&:focus{
    outline: none;
}
`

const primary = {
    bc: 'blue',
    c: 'beige'
}

const danger = {
    bc: '#bc1010',
    c: 'beige'
}

const edit = {
    bc: 'orange',
    c: 'beige'
}

const create = {
    bc: 'darkgreen',
    c: 'beige'
}

export {
    Button,
    primary,
    danger,
    edit,
    create
}