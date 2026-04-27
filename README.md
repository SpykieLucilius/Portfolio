# Portfolio

Personal portfolio website for showcasing projects across games, art, 3D models, security, programming, and more.

## Tech Stack

- **Framework:** [Astro](https://astro.build) (SSR mode)
- **Styling:** TailwindCSS v4
- **Database & Storage:** [Supabase](https://supabase.com) (PostgreSQL + file storage)
- **Auth:** Supabase Auth (email/password)

## Features

- Project gallery with category filtering
- Project detail pages with image lightbox
- Admin console to create, edit, and delete projects
- Gallery image upload, removal, and drag-to-reorder

## Project Structure

```
src/
├── components/        
├── layouts/          
├── lib/              
├── middleware.ts     
├── pages/
│   ├── admin/        
│   │   └── projects/ 
│   ├── projects/     
│   └── index.astro  
├── styles/           
└── types/            
```