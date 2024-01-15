import { styled } from 'styled-components';

interface Props {
    outlined?: boolean;
}

export default styled.button<Props>`
    background-color: ${props => (props.outlined ? 'transparent' : 'var(--eczabyte)')};
    color: ${props => (props.outlined ? 'var(--eczabyte)' : 'var(--white)')};
    border: ${props => (props.outlined ? '1px solid var(--eczabyte)' : 'none')};
    
    padding: 16px;
    border-radius: 25px;
    
    font-weight: bold;
    font-size: 15px;
    
    cursor: pointer;
    outline: 0;
    
    &:hover {
        background-color: ${props => (props.outlined ? 'var(--twitter-dark-hover)' : 'var(--eczabyte-light)')};
        transition: background-color ease-in 0.3s;
    }
    transition: background-color ease-out 0.3s;
`;
