import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getMissionsApi } from "../../redux/missions/actions/missionsAction"
export const missions=()=>{
    const missionsLists= useSelector((state)=> state.missions)
    const dispatch= useDispatch();

    useEffect(()=>{
        dispatch(getMissionsApi());
        console.log(missionsLists)
    }, [])
    return(
        {

        }
    )
}