import styles from '../styles/Statement.module.css'

interface StatementProps {
    text: string
}

export default function StatementComponent(props: StatementProps) {
        return (
            <div className={styles.statement}>
                <span className={styles.text}>{props.text}</span>
            </div>
        )
}