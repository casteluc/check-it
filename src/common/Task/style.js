import styled from 'styled-components'

export const TaskContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;

    p {
        width: 100%;
        font-weight: 500;
        outline: none;
        padding: 5px 10px;
        border-radius: 3px;
        background-color: #F0F0F0;
        box-sizing: border-box;
    }

    .buttons {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 5px;
        margin-left: 5px;
    }
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 5px;
    background-color: ${props => props.completed ? "#FD4E0C" : "#F0F0F0"};
    border-radius: 3px;

    :hover {
        cursor: pointer;
    }

    svg {
        width: 20px;
        height: 20px;
    }

    svg.check {
        path {
            ${props => !props.completed ? "stroke: #838383" : ""};
        }
    }

    svg.trash {

        :hover {
            path {
                fill: #FD4E0C
            } 
        }
        path {
            fill: #6d6d6d;
        }
    }

`