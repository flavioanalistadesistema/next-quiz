import styles from "../styles/Result.module.css";
import { useRouter } from "next/router"
import EstatictComponent from "../components/Estatict.component";
import ButtonComponent from "../components/Button.componet";
import Link from "next/link";

export default function Result() {
    const router = useRouter();

    const total = +router.query.questions;
    const correct = +router.query.correct;
    const porcent = Math.round((correct / total) * 100);
    
    function renderCorrect() {
        return  porcent < 50 ? '#FF4500' : porcent >= 50 && porcent < 75 ? '#32CD32' : '#66CDAA';
    }

    function renderPorcent() {
        return  porcent < 50 ? '#FF6347' : porcent >= 50 && porcent < 75 ? '#ADFF2F' : '#AFEEEE';
    }

    return (
        <div className={styles.result}>
            <h1>Resultado Final</h1>
            <div style={{display: 'flex'}}>
                < EstatictComponent text="Perguntas" value={total} />
                < EstatictComponent 
                    text="Certas" 
                    value={correct} 
                    background={renderCorrect()}/>
                < EstatictComponent 
                    text="Porcentual" 
                    value={`${porcent}%`} 
                    background={renderPorcent()}/>
            </div>
            < ButtonComponent 
                text="Tentar Novamente"
                href="/"/>
                <div className={styles.link}>
                    <span>
                        <Link href="https://github.com/flavioanalistadesistema/next-quiz" >Link do repositorio</Link>
                    </span>
                </div>
        </div>
    )
}