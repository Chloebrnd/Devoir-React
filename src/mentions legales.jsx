import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, Phone, Mail, Building } from "lucide-react";

export default function MentionsLegales() {
  return (
    <main className="w-full max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center">Mentions légales</h1>
      <div className="w-24 h-1 bg-blue-500 mx-auto my-6" />

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="editor">
          <AccordionTrigger>Éditeur du site</AccordionTrigger>
          <AccordionContent>
            <p className="font-semibold">John Doe</p>
            <div className="mt-2 space-y-1 text-gray-700">
              <p className="flex items-center gap-2"><Building className="w-4 h-4" /> 40 rue Laure Diebold</p>
              <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> 69009 Lyon, France</p>
              <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> 10 20 30 40 50</p>
              <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> john.doe@gmail.com</p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="host">
          <AccordionTrigger>Hébergeur</AccordionTrigger>
          <AccordionContent>
            <p>Informations sur l’hébergeur...</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="credits">
          <AccordionTrigger>Crédits</AccordionTrigger>
          <AccordionContent>
            <p>Informations sur les crédits du site...</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
}
