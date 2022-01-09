import Link from 'next/link';
import styles from './ContactTeam.module.css';

export default function ContactTeam(props) {
    return <div className={styles.contactTeamContainer} style={props.style}>
        <h3 className={styles.title}>שמרו על קשר</h3>
        <div className="separator"></div>
        <p>
            לקבלת הצעת מחיר, צרו עימנו קשר.
        </p>
        <Link href="/contact-us">דברו עם הצוות</Link>
    </div>
}
