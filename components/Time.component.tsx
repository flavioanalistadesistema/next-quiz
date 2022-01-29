import styles from '../styles/Time.module.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

interface TimeProps {
    duracao: number
    timeEnd: () => void
}

export default function Time(props: TimeProps) {
    return (
        <div className={styles.time}>
            <CountdownCircleTimer
                duration={9}
                size={120}
                isPlaying
                onComplete={props.timeEnd}
                colors={['#1FCB4A','#FFFF00', '#FF9900', '#FF3300', '#FF0000']}
                colorsTime={[9, 7, 5, 3, 0]}>
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}