import styles from '../styles/Time.module.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

interface TimeProps {
    key: number
    duracao: number
    timeEnd: () => void
}

export default function Time(props: TimeProps) {
    return (
        <div className={styles.time}>
            <CountdownCircleTimer
                duration={props.duracao}
                size={120}
                isPlaying
                onComplete={props.timeEnd}
                colors={['#BCE596','#F7B801', '#ED827A', '#FF3300', '#FF0000']}
                colorsTime={[9, 5, 2, 1, 0]}>
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}
