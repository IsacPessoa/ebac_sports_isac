import { useSelector } from 'react-redux'
import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'

import * as S from './styles'
import { RootReducer, StoreType } from '../store'

type Props = {
  produtos: ProdutoType[]
  favoritos: ProdutoType[]
  // adicionarAoCarrinho: (produto: ProdutoType) => void
  // favoritar: (produto: ProdutoType) => void
}

const ProdutosComponent = ({ produtos, favoritos }: Props) => {
  // const produtoEstaNosFavoritos = (produto: ProdutoType) => {
  //   const produtoId = produto.id
  //   const IdsDosFavoritos = favoritos.map((f) => f.id)

  //   return IdsDosFavoritos.includes(produtoId)
  // }
  const estaNosFavoritos = useSelector(
    (state: RootReducer) => (produto: ProdutoType) => {
      const produtoId = produto.id

      return state.favoritos.itens.some(
        (item: { id: number }) => item.id === produtoId
      )
    }
  )

  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <Produto
            key={produto.id}
            produto={produto}
            estaNosFavoritos={estaNosFavoritos(produto)}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
