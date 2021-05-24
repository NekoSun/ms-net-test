import { api } from '@/plugins/axios'

export const postsGet = () => api.get('posts')
export const postUpdate = payload => api.put(`posts/${payload.id}`, payload)
