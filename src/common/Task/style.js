import styled from 'styled-components'
import Button from '../../style/components/Button'
import Input from '../../style/components/Input'

export const TaskContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;
    max-width: 100%;

    .buttons {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 5px;
        margin-left: 5px;
    }
`

export const TaskContent = styled(Input)`
    flex: 1;
    max-width: 89%;
    font-weight: 500;
    padding: 5px 10px;
    border-radius: 3px;
    background-color: #F0F0F0;
    box-sizing: border-box;
    text-decoration: ${props => props.completed ? "line-through;" : "none"};
`

export const TaskButton = styled(Button)`
    background-color: ${props => props.completed ? "#FD4E0C" : "#F0F0F0"};
    border-radius: 3px;
    color: transparent;
    transition: all 0.2s;
    
    :hover {
        cursor: pointer;

        svg.trash path{
            fill: #FD4E0C
        }
    }

    svg {
        width: 20px;
        height: 20px;

        path {
            transition: all 0.2s;   
        }
    }

    svg.check {
        path {
            ${props => !props.completed ? "stroke: #838383" : ""};
        }
    }

    svg.trash path{
        fill: #6d6d6d;
        
    }

`