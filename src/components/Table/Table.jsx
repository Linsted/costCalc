export const Table = ({ml, price}) => {






    let ml1;
  const packagePrice10ml = 10; 
  const packagePrice20ml = 15;
  const packagePrice30ml = 20;
  const packagePrice50ml = 25;
  const packagePrice100ml = 30;

  const getExpenses = (miligrams, price) => ml1 = price / miligrams;
  

getExpenses(+ml, +price)

  let ml5 = Math.ceil(ml1*5  + packagePrice10ml + 2);
  let ml10 = Math.ceil(ml1 * 10 + packagePrice10ml + 2);
  let ml20 = Math.ceil(ml1 * 20 + packagePrice20ml + 2);
  let ml30 = Math.ceil(ml1 * 30 + packagePrice30ml + 2);
  let ml40 = Math.ceil(ml1 * 40 + packagePrice50ml + 2);
  let ml50 = Math.ceil(ml1 * 50 + packagePrice50ml + 2);
  let ml100 = Math.ceil(ml1 * 100 + packagePrice100ml + 2);








    return (<>
    
        <table style={{ border: "1px solid black", borderCollapse: "collapse" }}>
            <tbody >
                <tr>
                    <td style={{ border: "1px solid black" }}>5мл</td>
                    <td style={{ border: "1px solid black" }}>10мл</td>
                    <td style={{ border: "1px solid black" }}>20мл</td>
                    <td style={{ border: "1px solid black" }}>30мл</td>
                    <td style={{ border: "1px solid black" }}>40мл</td>
                    <td style={{ border: "1px solid black" }}>50мл</td>
                    <td style={{ border: "1px solid black" }}>100мл</td>
                    <td style={{ border: "1px solid black" }}>---</td>
                    <td style={{ border: "1px solid black" }}>---</td>
                    <td style={{ border: "1px solid black" }}>---</td>
                    <td style={{ border: "1px solid black" }}>---</td>
                    <td style={{ border: "1px solid black" }}>---</td>
                </tr>
                <tr>
                    <td style={{ border: "1px solid black" }}>{ml5 || 0}</td>
                    <td style={{ border: "1px solid black" }}>{ml10 || 0}</td>
                    <td style={{ border: "1px solid black" }}>{ml20 || 0}</td>
                    <td style={{ border: "1px solid black" }}>{ml30 || 0}</td>
                    <td style={{ border: "1px solid black" }}>{ml40 || 0}</td>
                    <td style={{ border: "1px solid black" }}>{ml50 || 0}</td>
                    <td style={{ border: "1px solid black" }}>{ml100 || 0}</td>
                    <td style={{ border: "1px solid black" }}>--</td>
                    <td style={{ border: "1px solid black" }}>--</td>
                    <td style={{ border: "1px solid black" }}>--</td>
                    <td style={{ border: "1px solid black" }}>--</td>
                    <td style={{ border: "1px solid black" }}>--</td>
                </tr>
            </tbody>
        </table>
    </>);

}