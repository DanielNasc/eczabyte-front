// vai receber vários objetos com { label: string, component: React.ReactNode }
// poderá ser usado para selecionar um item de uma lista

import { useState } from "react";
import Popup from "../Poppup";
import { TabContent, TabsSelectButton, TabsSelectContainer } from "./styles";

type Props = {
    setPoppupVisible: (value: boolean) => void;
  }

type SelectionPopupProps = {
    items: { label: string, component: React.FC<Props> }[]
}

const SelectionPopup: React.FC<SelectionPopupProps> = ({ items }) => {
    const [selected, setSelected] = useState(0);
    const [visiblePoppup, setVisiblePoppup] = useState(true);
    
    console.log('selected:: ', selected);
    console.log(items);

    return (
        <Popup
            setPoppupVisible={setVisiblePoppup}
            poppupVisible={visiblePoppup}
        >
            <TabsSelectContainer>
                {items.map((item, index) => (
                    <TabsSelectButton
                        key={index}
                        selected={index === selected} 
                        onClick={() => setSelected(index)}>{item.label}</TabsSelectButton>
                ))}
            </TabsSelectContainer>
            <TabContent>
                {items[selected].component({ setPoppupVisible: setVisiblePoppup })}
            </TabContent>
        </Popup>
    )
}

export default SelectionPopup;