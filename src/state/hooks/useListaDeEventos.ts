import { useRecoilValue } from 'recoil'
import { eventosFiltradosState } from '../seletores/index'

const useListaDeEventos = () => {
  return useRecoilValue(eventosFiltradosState)
}

export default useListaDeEventos
