import styled from 'styled-components'

const MobileMenuWrapp = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
background-color: lightblue;
min-height: 10vh;

&:nth-child(1) :nth-child(4){
    display: none;
}

@media only screen and (min-width: 800px){

    &:nth-child(1) :nth-child(3){
        display: none;
    }

    &:nth-child(1) :nth-child(4){
        display: flex;
    }

}
`

export default MobileMenuWrapp