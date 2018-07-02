import styled from 'styled-components'

const WatsonShow = styled.button`
position: fixed;
right: 10px;
bottom: 10px;
border-radius: 100%;
width: 50px;
height: 50px;
box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.75);
background-color: black;
border: none;
background-image: url('https://www.betterbuys.com/wp-content/uploads/2016/02/Watson-Analytics.png');
background-size: contain;
cursor: pointer;

&:focus{
    outline: none;
}

@media only screen and (min-width: 800px){
    width: 100px;
    height: 100px;
    box-shadow: 0px 0px 20px 4px rgba(0,0,0,0.75);
}
`

export default WatsonShow