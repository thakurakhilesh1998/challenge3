import React from 'react';
import * as ListItems from './List';
import './index.css'
function CreateList()
{
    return(<>
        <ul id="list">
            <ol>
                <li>{ListItems.firstname}</li>
                <li>{ListItems.Age}</li>
                <li>{ListItems.getGender()}</li>
                <li>{ListItems.getAddress()}</li>
            </ol>
        </ul>

    </>);
}
export {CreateList};