
export const Select = ({ options = [], onSelect}) => {

    return (
        options.map((i) =>
            <div key={i.value} onClick={ () => {onSelect(i.value)}}>
                <div><p>{i.text}</p></div>
            </div>
        )
    )
}