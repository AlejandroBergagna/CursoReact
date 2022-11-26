function ItemListContainer(props) {
    const {greetings} = props;
    return (
        <h1 className="list-container">{greetings}</h1>
    )
}

export default ItemListContainer;
