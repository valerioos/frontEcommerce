import { ProductoPedido } from "./ProductoPedido.model"

export interface PedidosRequest{
    
    total: number,
    idCliente: number,
    fechaCreacion: Date,
    stestado: number,
    productos: ProductoPedido[]

}