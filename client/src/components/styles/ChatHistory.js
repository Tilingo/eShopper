import styled from 'styled-components'

const ChatHistory = styled.div`
 width: 300px;
    height: 400px;
    background-color: beige;
    overflow: scroll;
    border: 1px solid;
    border-radius: 5px;

@media only screen and (min-width: 800px){
    max-width: 500px;
    max-height: 500px;
}
`

export default ChatHistory