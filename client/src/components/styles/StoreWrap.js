import styled from 'styled-components'

const StoreWrap = styled.div`
width: 90vw;
margin: 5% 0;
border: 2px solid;
padding: 2%;
background-color: orange;
box-shadow: 0px 4px 37px -6px rgba(0,0,0,0.75);

form{
    margin: 10% 0;
    input{
        width: 90%;
    }
}

@media only screen and (min-width: 800px){
    /* display: grid;
    grid-template-columns: repeat(2, 1fr); */
}
`

export default StoreWrap