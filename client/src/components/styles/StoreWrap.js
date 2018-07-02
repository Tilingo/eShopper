import styled from 'styled-components'

const StoreWrap = styled.div`
width: 90vw;
margin-bottom: 5%;
border: 2px solid;
padding: 2%;
background-color: orange;
box-shadow: 0px 4px 37px -6px rgba(0,0,0,0.75);
border-radius: 5px;

form{
    margin: 10% 0;
    input{
        width: 90%;
    }
}

@media only screen and (min-width: 800px){
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1em;
}
`

export default StoreWrap