const DrawList = ({list}) => {
    return (
        <ol>
            {list.map((item, index) => <li key={index}>{item}</li>)}
        </ol>
    )}

export default DrawList