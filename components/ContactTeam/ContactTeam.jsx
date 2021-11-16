import Link from 'next/link';
import styles from './ContactTeam.module.css';

export default function ContactTeam() {
    return <div className={styles.contactTeamContainer}>
        <h1>שמרו על קשר</h1>
        <div className="separator"></div>
        <p>
            לקבלת הצעת מחיר, צרו עימנו קשר.
        </p>
        <Link href="/contact-us">דברו עם הצוות</Link>
    </div>
}
