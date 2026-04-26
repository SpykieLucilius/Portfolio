export interface Project {
  id: string;
  title: string;
  description?: string;
  image?: string;
  link?: string;
  category: string;
  display_order: number;
  created_at: string;
  detail_description?: string;
  detail_images?: string[];
  project_date?: number;
}
