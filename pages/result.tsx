import  styles  from "../styles/Result.module.css";
import { useRouter } from "next/router"

export default function Result() {
    const router = useRouter();

    const total = +router.query.questions;
    const correct = +router.query.correct;
    const porcent = Math.round((correct / total) * 100);
    
    
    return (
        <div className={styles.result}>
            <h1>Page Result</h1>
            <div>Total: {total}</div>
            <div>Respostas corretas: {correct}</div>
            <div>Porcentagem de acerto: {`${correct}%`}</div>

        </div>
    )
}