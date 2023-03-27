import { clients } from "../constants"
import styles from "../style"

export default function Clients() {

    return (
        <section className={`${styles.flexCenter} my-4`}>
            <div  className={`${styles.flexCenter} flex-wrap w-full`}>
                {clients.map( (client) => (
                    <div className="sm:min-w-[192px] min-w-[120px] flex justify-center items-center flex-1 clients-card">
                    <img key={client.id} src={client.logo} className="sm:w-[192px] w-[100px] object-contain"/>
                    </div>
                ))}
            </div>
        </section>
    )
}