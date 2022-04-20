import { useContext } from "react";
import { Context } from "../Context/ThemContext";

function useThem(){

    let {them , setThem } = useContext(Context)

    return [them , setThem]
}

export {useThem}