import styled from 'styled-components'

const FormWrapp = styled.form`

display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
margin-bottom: 5px;

input{
    width: 350px;
    height: 40px;
    border: solid;
    margin-bottom: 10px;
    font-size: 1em;
    padding: 0 0 0 5px;
    background-color: lightblue;
    border: 2px solid black;
    border-radius: 5px;

    &:focus{
        outline: none;
    } 

    &::placeholder{
        color: grey;
    }
}
button{
    align-self: flex-end;
}


@media only screen and (min-width: 560px){

form{
    input{
        width: 500px;
        height: 50px;
        border: solid;
        font-size: 1.5em;
        padding: 0 0 0 10px;
    }
}
}
`

export default FormWrapp