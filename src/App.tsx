import { useState } from 'react'
import { RecoilRoot } from 'recoil'

import style from './App.module.scss'
import Calendario from './components/Calendario'
import Card from './components/Card'
import Formulario from './components/Formulario'
import ListaDeEventos from './components/ListaDeEventos'
import { IEvento } from './interfaces/IEvento'

function App() {
  const [filtro, setFiltro] = useState<Date | null>()

  const adicionarEvento = (evento: IEvento) => {
    evento.id = Math.round(new Date().getTime() / 1000)
  }
  const aplicarFiltro = (data: Date | null) => {
    setFiltro(data)
  }

  return (
    <RecoilRoot>
      <div className={style.App}>
        <div className={style.Coluna}>
          <Card>
            <Formulario />
          </Card>
          <hr />
          <Card>
            <ListaDeEventos aoFiltroAplicado={aplicarFiltro} />
          </Card>
        </div>
        <div className={style.Coluna}>
          <Calendario />
        </div>
      </div>
    </RecoilRoot>
  )
}

export default App
