import styled from 'styled-components'

const BurgerMenu = styled.div`
display: flex;
align-items: center;
max-width: 400px;
min-width: 400px;
justify-content: flex-start;
/* animation: show 300ms ease-in; */

a{
    text-decoration: none;
    color: black;
    font-size: 24px;
    font-weight: bold;
}

div{
    width: 240px;
    font-size: 20px;
    display: flex;
    margin-left: 15%;
    justify-content: space-between;

    button{
        font-size: 24px;
        font-weight: bold;
        border: none;
        background-color: transparent;
        cursor: pointer;
    }
}

@keyframes show {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

@media only screen and (min-width: 800px){

justify-content: space-around;

}
`

export default BurgerMenu