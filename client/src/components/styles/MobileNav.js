import styled from 'styled-components'

const MobileNav = styled.header`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 1.5%;
background-color: lightblue;

button{
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:hover{
        color: black;
    }
    &:active{
        color: orange;
    }

    &:focus{
        outline: none;
    }
}

h1{
    font-family: 'Shrikhand', cursive;
    font-weight: bold;
}

@media only screen and (min-width: 800px){
    button{
        &:hover{
            color: orange;
        }
    }
}

`

export default MobileNav