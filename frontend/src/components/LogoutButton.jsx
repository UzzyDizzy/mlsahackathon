import React from 'react';
import { logout } from '../services/auth';

export default function LogoutButton() {
  return <button onClick={logout}>Logout</button>;
}
