import { useState } from "react";
import useScanDetection from 'use-scan-detection'


function Ingresos() {
  const [data, setData] = useState("Not Found");
    useScanDetection({
        onComplete:setData,
        minLength:3
    })

  return (
    <>
       <p>{data}</p>
    </>
  );
}

export default Ingresos;
