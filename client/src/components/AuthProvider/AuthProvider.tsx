"use client"

import { getSessionInfo } from '@/actions';
import { SessionData, defaultSession } from '@/lib';
import React, { createContext, useEffect, useContext, useState } from 'react';

const AuthContext = createContext(defaultSession);

export default function AuthProvider ({ children, session }: Readonly<{ children: React.ReactNode; session: SessionData }>) {
  const [authSession, setAuthSession] = useState(session);

  useEffect(() => {
    // Fetch session information and update state
    const fetchSession = async () => {
      try {
        const sessionData = await getSessionInfo();
        setAuthSession(sessionData);
      } catch (error) {
        console.error('Error fetching session information:', error);
      }
    };

    fetchSession();

    // Clean-up function if necessary
  }, []);

  return (
    <AuthContext.Provider value={authSession}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);