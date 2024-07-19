// 'use client'

// import "./qr.css";
// import { useState } from "react";
// import QrReader from "react-qr-reader";

'use client'

import "./qr.css";
import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';


const Test = () => {
  const [selected, setSelected] = useState("environment");
  const [startScan, setStartScan] = useState(false);
  const [loadingScan, setLoadingScan] = useState(false);
  const [data, setData] = useState("");

  const handleScan = async (scanData) => {
    setLoadingScan(true);
    console.log(`loaded data data`, scanData);
    if (scanData && scanData !== "") {
      console.log(`loaded >>>`, scanData);
      setData(scanData);
      setStartScan(false);
      setLoadingScan(false);
      // setPrecScan(scanData);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };
  return (
    <div  className="h-[200px]">
      <h1>Hello CodeSandbox</h1>
      <h2>
        Last Scan:
        {selected}
      </h2>

      <button
        onClick={() => {
          setStartScan(!startScan);
        }}
      >
        {startScan ? "Stop Scan" : "Start Scan"}
      </button>
      {startScan && (
        <>
          <select onChange={(e) => setSelected(e.target.value)}>
            <option value={"environment"}>Back Camera</option>
            <option value={"user"}>Front Camera</option>
          </select>
          <div  className=" relative h-[200px]">
            <QrReader
              facingMode={selected}
              delay={10}
              onError={handleError}
              onScan={handleScan}
              // chooseDeviceId={()=>selected}
              style={{ width: "50px", height: "50px"}}
            />
          </div>

        </>
      )}
      {loadingScan && <p>Loading</p>}
      {data !== "" && <p>{data}</p>}
    </div>
  );
};

export default Test;























// 'use client'

// import React, { useState } from 'react';
// import { QrReader } from 'react-qr-reader';

// const Test = (props) => {
//   const [data, setData] = useState('No result');

//   return (
//     <>
//       <QrReader
//         onResult={(result, error) => {
//           if (!!result) {
//             setData(result?.text);
//           }

//           if (!!error) {
//             console.info(error);
//           }
//         }}
//         style={{ width: '100%' }}
//       />
//       <p>{data}</p>
//     </>
//   );
// };

// export default Test