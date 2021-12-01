
import { Widget } from 'react-chat-widget';
import styles from './ChatWidget.module.css';
import 'react-chat-widget/lib/styles.css';

export default function ChatWidget() {
    const handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);
        // Now send the message throught the backend API
    };

    return (
        <div className={styles.chatContainer}>
            <Widget handleNewUserMessage={handleNewUserMessage} />
        </div>
    );
}