export function Form({handleSubmit,handleClean}) {


    


    return (<>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Міліграми <br />
                <input name="ml" type="text" />
            </label>
            <br />
            <label htmlFor="">Ціна<br />
                <input name="price" type="text" />
            </label>
            <br />
            
            <button type="button" onClick ={handleClean}> Очистити</button>
            <button type="submit"> Порахувати</button>
        </form>
    </>);
    
};