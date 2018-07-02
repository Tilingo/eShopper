import styled from 'styled-components'

const ProductWrap = styled.div`
border: solid;
margin: 5% 0;
padding: 2%;
background-color: coral;
box-shadow: 0px 4px 37px -6px rgba(0,0,0,0.75);
border-radius: 5px;

p{
    font-size: 1.3em;
    text-align: left;
    border: 2px solid;
    background-color: beige;
    padding: 1%;
}

span{
    font-weight: bold;
    font-size: 1..5em;
}

@media only screen and (min-width: 800px){
    max-width: 500px;
}
`

export default ProductWrap