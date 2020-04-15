import React from 'react'
import ReactDom from 'react-dom'
import Family from './family'
import Member from './member'

ReactDom.render(
    <Family lastName='Silva'>
        <Member name='Guilherme' />
    </Family>
    /* <Family>
        <Member name='Guilherme' lastName='Silva' />
    </Family>*/

, document.getElementById('app'))

