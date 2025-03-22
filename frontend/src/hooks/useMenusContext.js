import { MenusContext } from "../context/menuContext";
import { useContext } from "react";

export const useMenusContext = () => {
    const context = useContext(MenusContext)

    // Error checking
    if(!context){
        throw Error("useMenusContext must be used inside an MenusContextProvider")
    }

    return context
}