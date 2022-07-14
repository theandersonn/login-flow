import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../utils/api';

export default function useAuth() {
  const register = async (user) => {
    try {
      const data = await api.post('/users/register', user).then((response) => {
        return response.data;
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return { register };
}
