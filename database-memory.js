import { randomUUID } from "crypto"

export class DatabaseMemory{
#carros = new Map()

list(search){
    return Array.from(this.#carros.entries()).map((carrosArray) =>{
    // acessando primeira posição
        const id = carrosArray[0]
        const data = carrosArray[1]

        return{
            id,
            ...data
        }
    })
    .filter(livro => {
        if (search){
            return carro.titulo.includes(search)
        }
        return true
    })
}
create(carro){
    const carroId = randomUUID()
    this.#carros.set(carroId, carro)
}
update(id, carro){
    this.#carros.set(id, carro)
}
delete(id, carro){
    this.#carros.delete(id, carro)
}
}
