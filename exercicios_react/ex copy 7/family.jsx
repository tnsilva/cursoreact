import React from 'react'

export default props => (
    <div>
        <h1>Família</h1>
        //{props.children}
        //{React.cloneElement(props.children, props)}
        <h1>Outra Forma</h1>
        {React.cloneElement(props.children, {...props})}
    </div>
)