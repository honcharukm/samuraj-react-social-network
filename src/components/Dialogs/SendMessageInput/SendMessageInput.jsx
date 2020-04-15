import React from 'react';

const SendMessageInput = (props) => {
    const changeMessageText = (e) => {
        const value = e.target.value;
        props.changeMessage(value);
    };

    const addMessage = () => {
        props.sendMessage();
    };

    return (
        <div>
            <textarea value={ props.currentMessageText }
                      onChange={ changeMessageText }/>
            <button onClick={ addMessage }>Send Message</button>
        </div>
    );
};

export default SendMessageInput;