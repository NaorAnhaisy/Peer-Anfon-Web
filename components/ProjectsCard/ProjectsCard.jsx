/* eslint-disable @next/next/no-img-element */
import styles from './ProjectsCard.module.css';
import Link from "next/link";

export default function ProjectsCard({ project, index }) {
    return (
        <div className={`${styles.item} ${styles.vFade} ${styles.item0}`}>
            <div className={`${styles.card} ${styles.cardProject}`}>
                <Link href="/projects" passHref>
                    <div className={`${styles.imgBox} ${(index - 1) % 3 === 0 ? styles.middle : styles.side}`} style={{ backgroundImage: `url("${project.thumbnail}")` }}>
                        <div className={styles.cardBody}>
                            <img src={project.thumbnail} alt="תמונת אווירה פרויקט 1" className={styles.srOnly} />
                        </div>
                        <div className={styles.cardOverlay}>
                            <p className={styles.caption}>
                                {project.name}
                            </p>
                            <div className={styles.extraDetails}>
                                <div className={`${styles.excerpt}`}>{project.description}</div>
                                <div className={styles.actions}>
                                    <Link href={`/projects/${project.project_ID}`}>
                                        <a className={styles.linkToProject}>
                                            קרא עוד
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}