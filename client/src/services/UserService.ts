import axios from 'axios';
import type { User } from '@/models/User';

export default class UserService {

  static getAll(): Promise<({ users: User[] })> {
    return axios.get('/users').then(({ data }) => data);
  }

  static getById(id: number): Promise<({ user: User })> {
    return axios.get(`/users/${id}`).then(({ data }) => data);
  }

}