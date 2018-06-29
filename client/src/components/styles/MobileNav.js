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

    &:focus{
        outline: none;
    }
}

h1{
    font-family: 'Shrikhand', cursive;
    font-weight: bold;
}
`

export default MobileNav