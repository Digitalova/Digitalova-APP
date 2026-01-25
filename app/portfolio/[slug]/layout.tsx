import { Metadata } from 'next';
import { projects } from '../projects-data';

type Props = {
  params: { slug: string };
  children: React.ReactNode;
};

// Générer les metadata dynamiquement pour chaque projet
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: 'Projet non trouvé | Digitalova',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${project.title} | Portfolio Digitalova`,
    description: project.description,
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    },
    openGraph: {
      title: `${project.title} | Portfolio Digitalova`,
      description: project.description,
      images: [project.images[0]],
    },
  };
}

// Générer les pages statiques pour chaque projet
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectLayout({ children }: Props) {
  return <>{children}</>;
}
