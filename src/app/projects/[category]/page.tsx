import { ProjectCategory } from '@/components/ProjectCategory'

export default function CategoryPage({ params }: { params: { category: string } }) {
  return <ProjectCategory category={params.category} />
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
