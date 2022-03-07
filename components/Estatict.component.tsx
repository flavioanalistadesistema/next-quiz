import styles from '../styles/EstaticComponent.module.css'

interface EstatictProps {
    value: any,
    text: string,
    background?: string,
    color?: string
}

export default function EstatictComponent(props: EstatictProps) {

    return (
        <div className={styles.estatict}>
            <div className={styles.value} style={{
            backgroundColor: props.background ?? '#FDD60F',
            color: props.color ?? '#333'
        }}>
                {props.value}
            </div>
            <div className={styles.text}>
                {props.text}
            </div>
        </div>
    )
}