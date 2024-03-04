import styled from "styled-components";

type TabsSelectButtonProps = {
    selected: boolean;
}

export const TabsSelectContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    
    gap: 2rem;
`

export const TabsSelectButton = styled.button<TabsSelectButtonProps>`
    cursor: pointer;
    text-decoration: ${(props) => (props.selected ? "underline" : "none")};
`

export const TabContent = styled.div`
`