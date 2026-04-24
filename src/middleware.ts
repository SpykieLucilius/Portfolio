import { defineMiddleware } from 'astro:middleware';
import { createClient } from '@supabase/supabase-js';

export const onRequest = defineMiddleware(async (context, next) => {
  if (!context.url.pathname.startsWith('/admin')) {
    return next();
  }

  if (context.url.pathname === '/admin/login') {
    return next();
  }

  const supabase = createClient(
    import.meta.env.SUPABASE_URL,
    import.meta.env.SUPABASE_KEY
  );

  const authCookie = context.cookies.get('sb-access-token')?.value;

  if (!authCookie) {
    return context.redirect('/admin/login');
  }

  const { data: { user }, error } = await supabase.auth.getUser(authCookie);

  if (error || !user) {
    return context.redirect('/admin/login');
  }

  return next();
});
