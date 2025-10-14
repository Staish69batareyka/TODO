export default function Task({data, deleteFunction}){
    return(
        <>
            {data.length === 0 ? (
                <div>Пока записей нет</div>
            ) : (
                <ul>
                    {data.map((value) => (
                        <li key={value.id}>
                            <input type="checkbox" id={value.id}/>
                            <label htmlFor={value.id}>{value.task}</label>

                            {/* Передаем функцию, а не вызов. Иначе будет без клика работать */}
                            <button onClick={() => deleteFunction(value.id)}>x</button>
                        </li>))}
                </ul>
            )
            }

        </>
    )
}