import { Card, CardContent } from "@/components/ui/card";
import { Pencil, Code, Search } from "lucide-react";

export default function Services() {
  return (
    <main className="w-full">
      {/* Bannière */}
      <div className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: "url('/images/banner.jpg')" }} />

      {/* Section services */}
      <section className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h1 className="text-3xl font-bold">Mon offre de services</h1>
        <p className="text-gray-600 mt-2">Voici les prestations sur lesquelles je peux intervenir</p>
        <div className="w-24 h-1 bg-blue-500 mx-auto my-6" />

        {/* Cartes */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 shadow-md">
            <CardContent className="flex flex-col items-center text-center">
              <Pencil className="text-blue-500 w-10 h-10 mb-4" />
              <h2 className="font-semibold text-lg">UX Design</h2>
              <p className="text-gray-600 mt-2">
                L’UX Design consiste à concevoir des produits (sites web, applis, logiciels, objets connectés, etc.)
                en plaçant l’utilisateur au centre. Objectif : une expérience fluide et agréable.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 shadow-md">
            <CardContent className="flex flex-col items-center text-center">
              <Code className="text-blue-500 w-10 h-10 mb-4" />
              <h2 className="font-semibold text-lg">Développement web</h2>
              <p className="text-gray-600 mt-2">
                Création de sites internet avec HTML, CSS, JavaScript, PHP et frameworks (Bootstrap, React, Angular...).
              </p>
            </CardContent>
          </Card>

          <Card className="p-6 shadow-md">
            <CardContent className="flex flex-col items-center text-center">
              <Search className="text-blue-500 w-10 h-10 mb-4" />
              <h2 className="font-semibold text-lg">Référencement</h2>
              <p className="text-gray-600 mt-2">
                Optimisation SEO pour améliorer le positionnement d’un site web dans Google, Bing, Yahoo, etc.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
