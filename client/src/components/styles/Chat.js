import styled from 'styled-components'

const Chat = styled.button`
position: fixed;
right: 10px;
bottom: 10px;
box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.75);
background-color: darkblue;
display: flex;
flex-direction: column;
border: 1px solid;
border-radius: 5px;

button{
    align-self: flex-end;
    font-weight: bold;
    font-size: 15px;
    color: white;
    background-color: transparent;
    border: none;
        &:focus{
            outline: none;
        }
}
form{
    border-radius: 5px;
    margin-top: 3px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    input{
        height: 35px;
        width: 70%;
        border-radius: 5px; 
        border: 1px solid;
        background-color: beige;
        font-size: 17px;
        &:focus{
            outline: none;
        }
    }
    button{
        height: 35px;
        width: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        border: none;

        &:focus{
            outline: none;
        }
    }
}

@media only screen and (min-width: 800px){
    box-shadow: 0px 0px 20px 4px rgba(0,0,0,0.75);
    max-width: 500px;
    max-height: 700px;
}

`

export default Chat