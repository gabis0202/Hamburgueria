import { randomUUID } from "crypto"

export class DatabaseMemory{
#hamburgueres = new Map()

list(search){
    return Array.from(this.#hamburgueres.entries()).map((hamburgueresArray) =>{
    // acessando primeira posição
        const id = hamburgueresArray[0]
        const data = hamburgueresArray[1]

        return{
            id,
            ...data
        }
    })
    .filter(hamburguer => {
        if (search){
            return hamburguer.nome.includes(search)
        }
        return true
    })
}
create(hamburguer){
    const hamburguerId = randomUUID()
    this.#hamburgueres.set(hamburguerId, hamburguer)
}
update(id, hamburguer){
    this.#hamburgueres.set(id, hamburguer)
}
delete(id, hamburguer){
    this.#hamburgueres.delete(id, hamburguer)
}
}
