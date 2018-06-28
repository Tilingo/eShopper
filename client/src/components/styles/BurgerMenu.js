import styled from 'styled-components'

const BurgerMenu = styled.nav`
display: flex;
justify-content: space-around;
padding: 0 0 5% 0;
animation: show 300ms ease-in-out;

@keyframes show {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}
`

export default BurgerMenu