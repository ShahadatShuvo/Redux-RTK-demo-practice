import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./CounterSlice";
function Counter() {
  const count = useSelector((state) => state.counter.value);
  const theme = useSelector((state) => state.theme.color);
  console.log('theme: ', theme); 

  const dispatch = useDispatch();

  return (
    <div className="mt-5">
      <div className="row justify-content-center">
        <div className="col-2">
          <Button
            variant="contained"
            color="success"
            sx={{ marginTop: "30px" }}
            onClick={() => dispatch(increment())}
          >
            Increment Value
          </Button>
        </div>
        <div className="col-1">
          <Typography
            variant="h1"
            component="div"
            gutterBottom
            sx={{ margin: "0px", padding: "0px", color: `${theme}` }} 
          >
            {count}
          </Typography>
        </div>
        <div className="col-2">
          <Button
            sx={{ marginTop: "30px" }}
            variant="contained"
            color="error"
            onClick={() => dispatch(decrement())}
          >
            Decrement Value
          </Button>
        </div>
        <div className="col-2">
          <Button
            sx={{ marginTop: "30px" }}
            variant="contained"
            color="error"
            onClick={() => dispatch(incrementByAmount(10))}
          >
            Increment by : 10
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
