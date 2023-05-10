export function Form({handleSubmit}) {


    


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
            <button type="submit"> Порахувати</button>
        </form>
    </>);
    
};