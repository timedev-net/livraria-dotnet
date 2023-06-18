import { create } from 'zustand'
import { livrariaService } from '../services/livrariaApi'
import { toast } from "react-toastify";

export const useGlobalStore = create((set) => ({
  // showSideBar: true,
  // toggleSideBar: () => set((state: any) => ({ showSideBar: !state.showSideBar })),

  autoresList: [],
  livrosList: [],
  generosList: [],
  vendasList: [],
  clientesList: [],

  autorShow: null,
  livroShow: null,
  vendaShow: null,
  generoShow: null,
  clienteShow: null,

  // Autor
  getAutorAll: async () => {
    const res = await livrariaService.get('/Autor')
    set(() => ({ autoresList: res.data }))
  },
  getAutorById: async (id: number) => {
    const res = await livrariaService.get(`/Autor/${id}`)
    set(() => ({ autorShow: res.data }))
  },
  createAutor: async (data: object) => {
    toast.success(`cadastrado com sucesso!`);
    return await livrariaService.post(`/Autor`, data)
  },
  updateAutorById: async (id: number, data: object) => {
    toast.success(`atualizado com sucesso!`);
    return await livrariaService.put(`/Autor/${id}`, data)
  },
  deleteAutorById: async (id: number) => {
    toast.success(`removido com sucesso!`);
    return await livrariaService.delete(`/Autor/${id}`)
  },

  // Cliente
  getClienteAll: async () => {
    const res = await livrariaService.get('/Cliente')
    set(() => ({ clientesList: res.data }))
  },
  getClienteById: async (id: number) => {
    const res = await livrariaService.get(`/Cliente/${id}`)
    set(() => ({ clienteShow: res.data }))
  },
  updateClienteById: async (id: number, data: object) => {
    return await livrariaService.put(`/Cliente/${id}`, data)
  },
  deleteClienteById: async (id: number) => {
    return await livrariaService.delete(`/Cliente/${id}`)
  },

  // Genero
  getGeneroAll: async () => {
    const res = await livrariaService.get('/Genero')
    set(() => ({ generosList: res.data }))
  },
  getGeneroById: async (id: number) => {
    const res = await livrariaService.get(`/Genero/${id}`)
    set(() => ({ generoShow: res.data }))
  },
  updateGeneroById: async (id: number, data: object) => {
    return await livrariaService.put(`/Genero/${id}`, data)
  },
  deleteGeneroById: async (id: number) => {
    return await livrariaService.delete(`/Genero/${id}`)
  },

  // Livro
  getLivroAll: async () => {
    const res = await livrariaService.get('/Livro')
    set(() => ({ livrosList: res.data }))
  },
  getLivroById: async (id: number) => {
    const res = await livrariaService.get(`/Livro/${id}`)
    set(() => ({ LivroShow: res.data }))
  },
  updateLivroById: async (id: number, data: object) => {
    return await livrariaService.put(`/Livro/${id}`, data)
  },
  deleteLivroById: async (id: number) => {
    return await livrariaService.delete(`/Livro/${id}`)
  },

  // Venda
  getVendaAll: async () => {
    const res = await livrariaService.get('/Venda')
    set(() => ({ vendasList: res.data }))
  },
  getVendaById: async (id: number) => {
    const res = await livrariaService.get(`/Venda/${id}`)
    set(() => ({ vendaShow: res.data }))
  },
  updateVendaById: async (id: number, data: object) => {
    return await livrariaService.put(`/Venda/${id}`, data)
  },
  deleteVendaById: async (id: number) => {
    return await livrariaService.delete(`/Venda/${id}`)
  },
}))