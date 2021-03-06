import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDate } from "../redux/slices/saveInfoSlice";

const Time = () => {
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
            <label htmlFor="time">íėŽėę°</label>
            <input id="time" className="userInfo__time" value={date.toLocaleTimeString()} readOnly></input>
        </div>
    );
};

export default Time;
