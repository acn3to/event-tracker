import { atom } from 'recoil'
import { IEvento } from '../interfaces/IEvento'

export const listaDeEventosState = atom<IEvento[]>({
  key: 'listaDeEventosState',
  default: [],
})
