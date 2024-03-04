// vai receber vários objetos com { label: string, component: React.ReactNode }
// poderá ser usado para selecionar um item de uma lista

import { useState } from "react";
import Popup from "../Poppup";
import { TabContent, TabsSelectButton, TabsSelectContainer } from "./styles";
import Login from "../../pages/Login";
import Register from "../../pages/Register";

const SelectionPopup: React.FC = () => {
    const [selected, setSelected] = useState(0);
    const [visiblePoppup, setVisiblePoppup] = useState(true);

    return (
        <Popup
            setPoppupVisible={setVisiblePoppup}
            poppupVisible={visiblePoppup}
        >
            <TabsSelectContainer>
                <TabsSelectButton
                    selected={selected == 0} 
                    onClick={() => setSelected(0)}>Login
                </TabsSelectButton>
                <TabsSelectButton
                    selected={selected == 1} 
                    onClick={() => setSelected(1)}>Register
                </TabsSelectButton>
            </TabsSelectContainer>
            <TabContent>
                {
                    selected === 0 ?
                        <Login setPoppupVisible={setVisiblePoppup} /> :
                        <Register setPoppupVisible={setVisiblePoppup} />
                }
            </TabContent>
        </Popup>
    )
}

export default SelectionPopup;