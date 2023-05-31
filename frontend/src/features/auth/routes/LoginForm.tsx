import { Container, Paper } from '@mantine/core';
import { useEffect } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { supabase } from '@/lib/supabase';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import router from 'next/router';

export const LoginForm = () => {
  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      if (session) router.reload();
    });
  }, []);
  return (
    <Container size={420} my={40}>
      <Paper withBorder shadow="md" py={20} px={30} mt={30} radius="md">
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} providers={[]} />
      </Paper>
    </Container>
  );
};
