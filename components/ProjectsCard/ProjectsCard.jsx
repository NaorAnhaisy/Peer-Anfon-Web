/* eslint-disable @next/next/no-img-element */
import styles from './ProjectsCard.module.css';
import Link from "next/link";
import { useEffect } from 'react';

export default function ProjectsCard({ project, index }) {
    useEffect(() => {
        console.log(project);
    }, [project]);

    return (
        <div className={`${styles.item} ${styles.vFade} ${styles.item0}`}>
            <div className={`${styles.card} ${styles.cardProject}`}>
                <Link href="/פרוייקטים" passHref>
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
                                    <Link href={`/פרוייקטים/${project.projectID}`}>
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