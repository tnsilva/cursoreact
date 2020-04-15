import React from 'react'
import ReactDom from 'react-dom'
//Se export default - import Primeiro, {Segundo } from './component'
import { Primeiro, Segundo } from './component'

ReactDom.render(
    <div>
        <Primeiro />
        <Segundo />
    </div>
, document.getElementById('app'))

