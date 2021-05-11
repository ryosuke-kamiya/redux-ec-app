import React from "react";
import { useSelector } from "react-redux";
import { getUserId } from "../reducks/users/selectors";


const Home = () => {
    const selector = useSelector(state => state);//全体のstateを取得する
    const uid = getUserId(selector)

    return(
        <div>
        <h2>home</h2>
        <div>{uid}</div>
        </div>

    )
}

export default Home