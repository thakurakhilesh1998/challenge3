import React from 'react';
import TagLine from './TagLine'
import Message from './Message';
import Headings from './Heading';
import {CreateList} from './ListAbout';


function App()
{
    return(
        <>
            <TagLine/>
            <Message/>
            <Headings/>
            <CreateList/>
        </>
    );
}

export default App;