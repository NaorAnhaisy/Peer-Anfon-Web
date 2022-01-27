/* eslint-disable @next/next/no-img-element */
import styles from './ProjectsCard.module.css';
import Link from "next/link";

export default function ProjectsCard({ project, index }) {
    return (
        <Link href={`/פרוייקטים/${project.projectID}`}>
            <a>
                <div className={`${styles.item} ${styles.vFade} ${styles.item0}`}>
                    <div className={`${styles.card} ${styles.cardProject}`}>
                        <div className={`${styles.imgBox} ${(index - 1) % 3 === 0 ? styles.middle : styles.side}`} style={{ backgroundImage: `url("${project.thumbnail}")` }}>
                            <div className={styles.cardBody}>
                                <img src={project.thumbnail} alt={`פאר אנפון - תמונת אווירה פרוייקט ${project.name}`} className={styles.srOnly} />
                            </div>
                            <div className={styles.cardOverlay}>
                                <p className={styles.caption}>
                                    {project.name}
                                </p>
                                <div className={styles.extraDetails}>
                                    <div className={`${styles.excerpt}`}>{project.description}</div>
                                    <div className={styles.actions}>
                                        <Link href={`/פרוייקטים/${project.projectID}`}>
                                            <a className={styles.linkToProject}>
                                                קרא עוד
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    )
}