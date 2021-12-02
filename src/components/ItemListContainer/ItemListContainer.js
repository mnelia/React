import React from 'react'

function ItemListContainer( props ) {
    const greeting = props.greeting
    return (
        <div>
            { props.greeting }
        </div>
    )
}

export default ItemListContainer
