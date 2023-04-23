import ImageLoader from '@/config/imageLoader';
import styles from './Project.module.scss';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectContent {
    git: string,
    url: string,
    desc: string,
    name: string,
    image: string,
    imagew: number,
    imageh: number,
}
const Project = (props: ProjectContent) => {
    return (
        <div className={styles.container}>
            <img className={`${styles.projectimg} ${styles.projectmobile}`} src={props.image} alt={props.name}/>
            <a className={styles.mobilegitlink} href={props.git}>
                <img className={styles.projectimg} src={props.image} alt={props.name}/>
            </a>
            <div className={styles.projecturls}>
                {props.git && 
                    <Link href={props.git} className={styles.projectmobile}>
                        <Image
                            src="github.svg"
                            alt="Github Link"
                            width={40}
                            height={40}
                        />
                    </Link>    
                }
                {props.url && 
                    <Link href={props.url}>
                        <Image
                            src="extlink.svg"
                            alt="Deployed Link"
                            width={40}
                            height={40}
                        />
                    </Link>
                }
            </div>
        </div>
    )
}

export default Project;