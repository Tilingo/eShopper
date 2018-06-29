import styled from 'styled-components'

const SignUpWrapp = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
background-color: orange;
flex: 1;
overflow: scroll;

h3{
    width: 80%;
}

p{
    a{
        color: blue;
        text-decoration: none;
        font-weight: bold;
    }
}

@media only screen and (min-width: 560px){
    h1{
        font-size: 3em;
    }
}
`

export default SignUpWrapp