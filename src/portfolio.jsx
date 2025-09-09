import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  const projects = [
    { title: "Fresh Food", desc: "Site de vente de produits frais en ligne", tech: "PHP et MySQL", img: "/images/freshfood.jpg" },
    { title: "Restaurant Akira", desc: "Site de restaurant en ligne", tech: "WordPress", img: "/images/restaurant.jpg" },
    { title: "Espace bien-être", desc: "Site de vente de produits bien-être", tech: "Laravel", img: "/images/spa.jpg" },
    { title: "SEO", desc: "Amélioration du référencement d’un site e-commerce", tech: "Outils SEO", img: "/images/seo.jpg" },
    { title: "Création d'une API", desc: "API RESTful publique", tech: "PHP - Symfony", img: "/images/api.jpg" },
    { title: "Maquette d'un site web", desc: "Prototype design", tech: "Figma", img: "/images/mockup.jpg" }
  ];

  return (
    <main className="w-full">
      {/* Bannière */}
      <div className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: "url('/images/banner.jpg')" }} />

      {/* Section portfolio */}
      <section className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h1 className="text-3xl font-bold">Portfolio</h1>
        <p className="text-gray-600 mt-2">Voici quelques-unes de mes réalisations</p>
        <div className="w-24 h-1 bg-blue-500 mx-auto my-6" />

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <Card key={i} className="shadow-md overflow-hidden">
              <img src={p.img} alt={p.title} className="h-48 w-full object-cover" />
              <CardContent className="p-4 text-left">
                <h2 className="font-semibold text-lg">{p.title}</h2>
                <p className="text-gray-600">{p.desc}</p>
                <p className="text-sm text-gray-500 mt-1">Réalisé avec {p.tech}</p>
                <Button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white">Voir le site</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
