import { randomUUID } from "crypto"

export class DatabaseMemory{
#hamburguers = new Map()

list(search){
    return Array.from(this.#hamburguers.entries()).map((hamburguersArray) =>{
    // acessando primeira posição
        const id = hamburguersArray[0]
        const data = hamburguersArray[1]

        return{
            id,
            ...data
        }
    })
    .filter(hamburguer => {
        if (search){
            return hamburguer.titulo.includes(search)
        }
        return true
    })
}
create(hamburguer){
    const hamburguerId = randomUUID()
    this.#hamburguers.set(hamburguerId, hamburguer)
}
update(id, hamburguer){
    this.#hamburguers.set(id, hamburguer)
}
delete(id, hamburguer){
    this.#hamburguers.delete(id, hamburguer)
}
}
