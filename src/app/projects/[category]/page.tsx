import { ProjectCategory } from '@/components/ProjectCategory'

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  return <ProjectCategory category={category} />
}

export function generateStaticParams() {
  return [
    { category: '3d-pixel-art' },
    { category: 'websites' },
    { category: 'web-apps' },
    { category: 'mobile' },
    { category: 'design-system' },
    { category: 'games' },
  ]
}
