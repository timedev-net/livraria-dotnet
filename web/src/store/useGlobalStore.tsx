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
  carrinhoList: [],

  autorShow: null,
  livroShow: null,
  vendaShow: null,
  generoShow: null,
  clienteShow: null,

  // Autor
  getAutorAll: async (filter?: any) => {
    const res = await livrariaService.get('/Autor')
    set(() => ({ autoresList: res.data.map((e: any) => ({...e, checked: false})) }))
    return res.data
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
  attAutoresList: (payload: any) => {
    set(() => ({ autoresList: payload }))
  },

  // Cliente
  getClienteAll: async (cpf: string) => {
    const res = await livrariaService.get(`/Cliente${cpf ? ('?cpf='+cpf): ''}`)
    set(() => ({ clientesList: res.data.map((e: any) => ({...e, checked: false})) }))
    return res.data
  },
  getClienteById: async (id: number) => {
    const res = await livrariaService.get(`/Cliente/${id}`)
    set(() => ({ clienteShow: res.data }))
  },
  createCliente: async (data: object) => {
    const res = await livrariaService.post(`/Cliente`, data)
    toast.success(`Cliente criado com sucesso!`);
    return res.data
  },
  updateClienteById: async (id: number, data: object) => {
    return await livrariaService.put(`/Cliente/${id}`, data)
  },
  deleteClienteById: async (id: number) => {
    toast.success(`Removido com sucesso!`);
    return await livrariaService.delete(`/Cliente/${id}`)
  },

  // Genero
  getGeneroAll: async () => {
    const res = await livrariaService.get('/Genero')
    set(() => ({ generosList: res.data.map((e: any) => ({...e, checked: false})) }))
    return res.data
  },
  getGeneroById: async (id: number) => {
    const res = await livrariaService.get(`/Genero/${id}`)
    set(() => ({ generoShow: res.data }))
  },
  createGenero: async (data: object) => {
    toast.success(`cadastrado com sucesso!`);
    return await livrariaService.post(`/genero`, data)
  },
  updateGeneroById: async (id: number, data: object) => {
    return await livrariaService.put(`/Genero/${id}`, data)
  },
  deleteGeneroById: async (id: number) => {
    toast.success(`removido com sucesso!`);
    return await livrariaService.delete(`/Genero/${id}`)
  },
  attGenerosList: (payload: any) => {
    set(() => ({ generosList: payload }))
  },

  // Livro
  getLivroAll: async () => {
    const res = await livrariaService.get('/Livro')
    set(() => ({ livrosList: res.data }))
    return res.data
  },
  getLivroById: async (id: number) => {
    const res = await livrariaService.get(`/Livro/${id}`)
    set(() => ({ livroShow: res.data }))
  },
  createLivro: async (data: object) => {
    toast.success(`cadastrado com sucesso!`);
    return await livrariaService.post(`/Livro`, data)
  },
  updateLivroById: async (id: number, data: object) => {
    return await livrariaService.put(`/Livro/${id}`, data)
  },
  deleteLivroById: async (id: number) => {
    toast.success(`removido com sucesso!`);
    return await livrariaService.delete(`/Livro/${id}`)
  },

  // Venda
  getVendaAll: async () => {
    const res = await livrariaService.get('/Venda')
    set(() => ({ vendasList: res.data }))
    return res.data
  },
  getVendaById: async (id: number) => {
    const res = await livrariaService.get(`/Venda/${id}`)
    set(() => ({ vendaShow: res.data }))
  },
  createVenda: async (data: object) => {
    toast.success(`Venda realizada com sucesso!`);
    return await livrariaService.post(`/Venda`, data)
  },
  updateVendaById: async (id: number, data: object) => {
    return await livrariaService.put(`/Venda/${id}`, data)
  },
  deleteVendaById: async (id: number) => {
    toast.success(`removido com sucesso!`);
    return await livrariaService.delete(`/Venda/${id}`)
  },
  handleCarrinhoList: (data: any) => {
    set(() => ({ carrinhoList: data }))
  },
}))