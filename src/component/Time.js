import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDate } from "../redux/slices/saveInfoSlice";

const Time = () => {
    console.log("Time component rendered");
    const date = useSelector((state) => state.saveInfo.date);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setDate(new Date()));
        let timeInterval = setInterval(() => dispatch(setDate(new Date())), 1000);
        return () => {
            clearInterval(timeInterval);
        };
    }, [dispatch]);
    return (
        <div className="time">
            <label htmlFor="time">현재시간</label>
            <input id="time" className="userInfo__time" value={date.toLocaleTimeString()} readOnly></input>
        </div>
    );
};

export default Time;
