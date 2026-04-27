import type { APIRoute } from 'astro';
import { supabaseAdmin } from '../../../lib/supabase';

export const POST: APIRoute = async ({ request }) => {
  const { name } = await request.json();
  if (!name?.trim()) {
    return new Response(JSON.stringify({ error: 'Name required' }), { status: 400 });
  }
  const { data, error } = await supabaseAdmin
    .from('tags')
    .insert({ name: name.trim() })
    .select('id, name')
    .single();
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
  return new Response(JSON.stringify(data), { status: 200 });
};
