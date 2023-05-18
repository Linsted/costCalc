export const TableLotion = ({ml, price}) => {






        let ml1 = price/ml;
  const packagePrice10ml = 15; 
  const packagePrice20ml = 10;
  const packagePrice30ml = 10;
  const packagePrice50ml = 15;
    const packagePrice100ml = 15;
    const packagePrice150ml = 17;
    const packagePrice200ml = 20;
    const packagePrice250ml = 20;
        const percentsL = 0.7;
const percentsS = 0.6;



  let ml5 = Math.ceil(ml1*5  + packagePrice10ml + 2);
  let ml10 = Math.ceil(ml1 * 10 + packagePrice10ml + 2);
  let ml20 = Math.ceil(ml1 * 20 + packagePrice20ml + 2);
  let ml30 = Math.ceil(ml1 * 30 + packagePrice30ml + 2);
  let ml40 = Math.ceil(ml1 * 40 + packagePrice50ml + 2);
  let ml50 = Math.ceil(ml1 * 50 + packagePrice50ml + 2);
  let ml100 = Math.ceil(ml1 * 100 + packagePrice100ml + 2);
  let ml150 = Math.ceil(ml1 * 150 + packagePrice150ml + 2);
let ml200 = Math.ceil(ml1 * 200 + packagePrice200ml + 2);
let ml250 = Math.ceil(ml1 * 250 + packagePrice250ml + 2);





    return (<>
    
        <table style={{ border: "1px solid black", borderCollapse: "collapse" }}>
            <tbody >
                <tr>
                    <td style={{ border: "1px solid black" }}>Тип</td>
                    <td style={{ border: "1px solid black" }}>5мл</td>
                    <td style={{ border: "1px solid black" }}>10мл</td>
                    <td style={{ border: "1px solid black" }}>20мл</td>
                    <td style={{ border: "1px solid black" }}>30мл</td>
                    <td style={{ border: "1px solid black" }}>40мл</td>
                    <td style={{ border: "1px solid black" }}>50мл</td>
                    <td style={{ border: "1px solid black" }}>100мл</td>
                    <td style={{ border: "1px solid black" }}>150мл</td>
                    <td style={{ border: "1px solid black" }}>200мл</td>
                    <td style={{ border: "1px solid black" }}>250мл</td>
                    <td style={{ border: "1px solid black" }}>---</td>
                    <td style={{ border: "1px solid black" }}>---</td>
                </tr>
                <tr>
                    <td style={{ border: "1px solid black" }}>Н</td>
                    <td style={{ border: "1px solid black" }}>{ml5 || 0}</td>
                    <td style={{ border: "1px solid black" }}>{ml10 || 0}</td>
                    <td style={{ border: "1px solid black" }}>{ml20 || 0}</td>
                    <td style={{ border: "1px solid black" }}>{ml30 || 0}</td>
                    <td style={{ border: "1px solid black" }}>{ml40 || 0}</td>
                    <td style={{ border: "1px solid black" }}>{ml50 || 0}</td>
                    <td style={{ border: "1px solid black" }}>{ml100 || 0}</td>
                    <td style={{ border: "1px solid black" }}>{ml150 || 0}</td>
                    <td style={{ border: "1px solid black" }}>{ml200 || 0}</td>
                    <td style={{ border: "1px solid black" }}>{ml250 || 0}</td>
                    <td style={{ border: "1px solid black" }}>--</td>
                    <td style={{ border: "1px solid black" }}>--</td>
                </tr>
                 <tr>
                    <td style={{ border: "1px solid black" }}>К</td>
                    <td style={{ border: "1px solid black" }}>{ Math.ceil(ml5 + ml5*percentsL) || 0}</td>
                    <td style={{ border: "1px solid black" }}>{ Math.ceil(ml10 + ml10*percentsL) || 0}</td>
                    <td style={{ border: "1px solid black" }}>{ Math.ceil(ml20 + ml20*percentsL) || 0}</td>
                    <td style={{ border: "1px solid black" }}>{ Math.ceil(ml30 + ml30*percentsL) || 0}</td>
                    <td style={{ border: "1px solid black" }}>{ Math.ceil(ml40 + ml40*percentsL) || 0}</td>
                    <td style={{ border: "1px solid black" }}>{ Math.ceil(ml50 + ml50*percentsS) || 0}</td>
                    <td style={{ border: "1px solid black" }}>{ Math.ceil(ml100 + ml100*percentsS) || 0}</td>
                    <td style={{ border: "1px solid black" }}>{ Math.ceil(ml150 + ml150*percentsS) || 0}</td>
                    <td style={{ border: "1px solid black" }}>{ Math.ceil(ml200 + ml200*percentsS) || 0}</td>
                    <td style={{ border: "1px solid black" }}>{ Math.ceil(ml250 + ml250*percentsS) || 0}</td>
                    <td style={{ border: "1px solid black" }}>--</td>
                    <td style={{ border: "1px solid black" }}>--</td>
                </tr>
            </tbody>
        </table>
    </>);

}