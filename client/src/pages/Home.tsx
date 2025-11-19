import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Cloud, TrendingUp, Award, Users, Zap, Shield, BarChart3, CheckCircle2 } from "lucide-react";
import { APP_LOGO, APP_TITLE } from "@/const";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Cloud className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-primary">Google Cloud Formation</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#opportunite" className="text-foreground hover:text-primary transition">Opportunité</a>
            <a href="#pourquoi" className="text-foreground hover:text-primary transition">Pourquoi GCP</a>
            <a href="#offres" className="text-foreground hover:text-primary transition">Offres</a>
            <a href="#roi" className="text-foreground hover:text-primary transition">ROI</a>
            <a href="#faq" className="text-foreground hover:text-primary transition">FAQ</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                Proposition de Valeur : Formation et Services Google Cloud
              </h1>
              <p className="text-xl text-foreground/80 mb-4">
                Réécris et restructure tout le contenu du site en intégrant clairement les 8 parties suivantes
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button className="btn-primary">Découvrir l'opportunité</Button>
                <Button className="btn-outline">Télécharger le rapport</Button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <Card className="p-6 card-hover">
                <TrendingUp className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Marché en croissance</h3>
                <p className="text-foreground/70">Adoption massive du cloud, demande croissante de formations spécialisées</p>
              </Card>
              <Card className="p-6 card-hover">
                <Zap className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Haut ROI pour le client</h3>
                <p className="text-foreground/70">Réduction des coûts, optimisation des ressources, accélération de la transformation</p>
              </Card>
              <Card className="p-6 card-hover">
                <Award className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Formation certifiante</h3>
                <p className="text-foreground/70">Valorisation de l'expertise, reconnaissance officielle Google</p>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Section Contenu Google Cloud */}   <section id="opportunite" className="section-padding bg-background">
          <h2 className="text-4xl font-bold mb-12 text-center">1. Qu’est-ce que Google Cloud ?</h2>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 mb-12">
            <p className="text-lg text-foreground/80 mb-4">
              Google Cloud est la **plateforme cloud de Google**, offrant une suite complète de services pour les entreprises. Elle permet de transformer numériquement les organisations en fournissant des outils pour :
            </p>
            <ul className="space-y-3 list-disc pl-5 text-foreground/80">
              <li>**Héberger** les données et les applications de manière sécurisée et conforme.</li>
              <li>**Analyser** de grandes quantités de données grâce à des outils puissants comme **BigQuery**.</li>
              <li>**Innover** avec l'Intelligence Artificielle et le Machine Learning via la plateforme **Vertex AI**.</li>
              <li>**Déployer** des infrastructures flexibles avec la création de machines virtuelles via **Compute Engine**.</li>
              <li>**Stocker** des fichiers de manière distribuée et hautement disponible partout dans le monde avec **Cloud Storage**.</li>
            </ul>
            <p className="text-lg text-foreground/80 mt-4 font-semibold">
              En résumé, Google Cloud est un catalyseur qui aide les entreprises à **accélérer leur croissance**, à **réduire leurs coûts opérationnels** et à **sécuriser leurs actifs numériques**.
            </p>
          </div>

          <h2 className="text-4xl font-bold mb-12 text-center">2. Pourquoi ce domaine et pourquoi Google Cloud ?</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Notre choix stratégique</h3>
              <ul className="space-y-3 list-disc pl-5 text-foreground/80">
                <li>**Leadership Mondial** : Google Cloud est reconnu comme un leader mondial dans le secteur du cloud computing.</li>
                <li>**Scalabilité et Adaptabilité** : Ses services sont conçus pour être **hautement scalables**, s'adaptant parfaitement aux besoins des PME, des ETI et des grandes entreprises.</li>
                <li>**Sécurité de Niveau Supérieur** : La plateforme garantit une sécurité de très haut niveau, avec des certifications reconnues telles que **ISO, SOC2, et la conformité au RGPD**.</li>
                <li>**Fiabilité Exceptionnelle** : Google Cloud affiche une **disponibilité de 99,99%**, assurant la continuité des opérations.</li>
                <li>**Croissance du Marché** : Le marché Google Cloud est en **forte croissance** en 2025, avec une demande croissante de la part des clients pour des formations et des services d'accompagnement.</li>
              </ul>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 flex items-center justify-center">
              <p className="text-2xl font-bold text-primary text-center">
                Google Cloud représente une **opportunité stratégique majeure** pour l'année 2025.
              </p>
            </div>
          </div>

          <h2 className="text-4xl font-bold mb-12 text-center">3. Opportunité du marché</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 card-hover">
              <h3 className="text-2xl font-bold text-primary mb-4">Marché en explosion</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Adoption Google Cloud : +25% par an en 2025</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Forte demande des PME, ETI, startups</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Secteurs clés : finance, santé, e-commerce, retail</span>
                </li>
              </ul>
            </Card>
            <Card className="p-8 card-hover md:col-span-2">
              <h3 className="text-2xl font-bold text-primary mb-4">Potentiel de revenus</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="border border-border p-4 text-left font-semibold">Indicateur</th>
                      <th className="border border-border p-4 text-left font-semibold">Valeur</th>
                      <th className="border border-border p-4 text-left font-semibold">Résultat</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-4">Portefeuille clients</td>
                      <td className="border border-border p-4">500</td>
                      <td className="border border-border p-4">-</td>
                    </tr>
                    <tr className="bg-primary/5">
                      <td className="border border-border p-4">Adoption (10%)</td>
                      <td className="border border-border p-4">50 clients potentiels</td>
                      <td className="border border-border p-4 font-bold text-primary">50 clients</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-4">Revenu moyen/client (formation + services)</td>
                      <td className="border border-border p-4">1 200€</td>
                      <td className="border border-border p-4">-</td>
                    </tr>
                    <tr className="bg-primary/5">
                      <td className="border border-border p-4 font-bold">CA potentiel Année 1</td>
                      <td className="border border-border p-4">50 x 1 200€</td>
                      <td className="border border-border p-4 font-bold text-primary">60 000€</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </section>
 
        {/* Pourquoi Google Cloud */}

        <section id="offres" className="section-padding bg-card">
          <h2 className="text-4xl font-bold mb-12 text-center">4. Nos offres de formation et services</h2>
          <h3 className="text-3xl font-bold mb-8 text-center">Formations</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 card-hover border-2 border-primary/20">
              <h3 className="text-2xl font-bold text-primary mb-4">Initiation</h3>
              <p className="text-4xl font-bold mb-2">350-550€</p>
              <p className="text-foreground/70 mb-6">1 jour, bases GCP</p>
              <Button className="w-full btn-secondary">Détails</Button>
            </Card>

            <Card className="p-8 card-hover border-2 border-primary">
              <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full inline-block mb-4 text-sm font-semibold">
                Complète
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Complète</h3>
              <p className="text-4xl font-bold mb-2">900-1200€</p>
              <p className="text-foreground/70 mb-6">3 jours, architecture et TP avancés</p>
              <Button className="w-full btn-primary">Détails</Button>
            </Card>

            <Card className="p-8 card-hover border-2 border-primary/20">
              <h3 className="text-2xl font-bold text-primary mb-4">Certifiante</h3>
              <p className="text-4xl font-bold mb-2">600-900€</p>
              <p className="text-foreground/70 mb-6">Préparation certification officielle Google Cloud</p>
              <Button className="w-full btn-secondary">Détails</Button>
            </Card>
          </div>

          <h3 className="text-3xl font-bold mb-8 text-center">Services complémentaires</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="p-8">
              <h4 className="text-xl font-bold text-primary mb-4">Installation & Configuration</h4>
              <p className="text-foreground/70 mb-4">Mise en place de l'infrastructure Google Cloud adaptée à vos besoins</p>
              <p className="text-2xl font-bold text-primary">2 000 – 5 000€</p>
            </Card>
            <Card className="p-8">
              <h4 className="text-xl font-bold text-primary mb-4">Migration Cloud</h4>
              <p className="text-foreground/70 mb-4">Migration sécurisée de vos systèmes existants vers Google Cloud</p>
              <p className="text-2xl font-bold text-primary">5 000 – 15 000€</p>
            </Card>
            <Card className="p-8">
              <h4 className="text-xl font-bold text-primary mb-4">Support mensuel</h4>
              <p className="text-foreground/70 mb-4">Support technique et accompagnement continu</p>
              <p className="text-2xl font-bold text-primary">500 – 1 500€/mois</p>
            </Card>
            <Card className="p-8">
              <h4 className="text-xl font-bold text-primary mb-4">Audit & Optimisation</h4>
              <p className="text-foreground/70 mb-4">Analyse de votre infrastructure et recommandations d'optimisation</p>
              <p className="text-2xl font-bold text-primary">1 500 – 3 000€</p>
            </Card>
          </div>
          <div className="text-center mt-8">
            <p className="text-lg font-semibold text-foreground/80">
              Nous offrons un **accompagnement complet**, pas seulement une formation.
            </p>
          </div>
        </section>

        <section className="section-padding bg-background">
          <h2 className="text-4xl font-bold mb-12 text-center">5. Bénéfices pour notre entreprise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 card-hover">
              <TrendingUp className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Croissance du Chiffre d'Affaires</h3>
              <p className="text-foreground/70 mb-4">Potentiel de **+60 000€ de CA** dès la première année.</p>
            </Card>
            <Card className="p-8 card-hover">
              <Award className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Renforcement de l'Expertise</h3>
              <p className="text-foreground/70 mb-4">Consolidation de notre image en tant que **partenaire expert Google Cloud**.</p>
            </Card>
            <Card className="p-8 card-hover">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Fidélisation Client</h3>
              <p className="text-foreground/70 mb-4">L'offre de services complémentaires et de support renforce la **fidélisation de notre clientèle**.</p>
            </Card>
            <Card className="p-8 card-hover md:col-span-3">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Différenciation Concurrentielle</h3>
              <p className="text-foreground/70 mb-4">Création d'un avantage concurrentiel fort sur le marché.</p>
            </Card>
          </div>
        </section>

        <section id="roi" className="section-padding bg-card">
          <h2 className="text-4xl font-bold mb-12 text-center">6. ROI et exemple financier</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Exemple de Marge (Pack Complet)</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="border border-border p-4 text-left font-semibold">Élément</th>
                      <th className="border border-border p-4 text-left font-semibold">Montant</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-4">Revenu client</td>
                      <td className="border border-border p-4">10 050€</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-4">Coût interne</td>
                      <td className="border border-border p-4">2 000€</td>
                    </tr>
                    <tr className="bg-primary/5">
                      <td className="border border-border p-4 font-bold">Marge Brute</td>
                      <td className="border border-border p-4 font-bold text-primary">8 050€ (80%)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Projection Annuelle</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="border border-border p-4 text-left font-semibold">Indicateur</th>
                      <th className="border border-border p-4 text-left font-semibold">Valeur</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-4">CA Potentiel (50 clients)</td>
                      <td className="border border-border p-4">500 000€</td>
                    </tr>
                    <tr className="bg-primary/5">
                      <td className="border border-border p-4 font-bold">Marge Brute Potentielle</td>
                      <td className="border border-border p-4 font-bold text-primary">400 000€</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-lg text-foreground/80 mt-4 font-semibold text-center">
                → ROI rapide et durable.
              </p>
            </Card>
          </div>
        </section>

        <section className="section-padding bg-background">
          <h2 className="text-4xl font-bold mb-12 text-center">7. Argumentaire commercial et objections</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Pourquoi les commerciaux doivent proposer les formations :</h3>
              <ul className="space-y-4 list-disc pl-5 text-foreground/80">
                <li>**Répondre aux besoins clients**</li>
                <li>**Générer du revenu additionnel** (1000€+ par formation, 80% marge)</li>
                <li>**Fidéliser les clients**</li>
                <li>**Se différencier des concurrents**</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Réponses aux objections :</h3>
              <div className="space-y-4">
                <Card className="p-6">
                  <h4 className="font-semibold text-primary mb-2">« C’est trop cher »</h4>
                  <p className="text-foreground/70">→ ROI rapide, économie 10K€/an pour le client</p>
                </Card>
                <Card className="p-6">
                  <h4 className="font-semibold text-primary mb-2">« Pas besoin de formation »</h4>
                  <p className="text-foreground/70">→ 87% des clients formés réussissent leur migration</p>
                </Card>
                <Card className="p-6">
                  <h4 className="font-semibold text-primary mb-2">« Pas de ressources »</h4>
                  <p className="text-foreground/70">→ Formation clés en main</p>
                </Card>
                <Card className="p-6">
                  <h4 className="font-semibold text-primary mb-2">« Concurrents moins chers »</h4>
                  <p className="text-foreground/70">→ Notre support post-formation fait la différence.</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-card">
          <h2 className="text-4xl font-bold mb-12 text-center">8. Conclusion</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-foreground/80 mb-8">
              Le marché Google Cloud est en croissance, nos formations sont certifiantes, le ROI est excellent, et nos services complémentaires renforcent notre position.
            </p>
            <p className="text-2xl font-bold text-primary">
              Invitez les clients à contacter l’équipe commerciale pour lancer leurs premières formations.
            </p>
          </div>
        </section>
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Contexte & Opportunité du marché</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 card-hover">
              <h3 className="text-2xl font-bold text-primary mb-4">Marché 2025</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Adoption Google Cloud en croissance de 25% YoY</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>PME et ETI cherchent des solutions cloud</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Startups accélèrent leur transformation digitale</span>
                </li>
              </ul>
            </Card>
            <Card className="p-8 card-hover">
              <h3 className="text-2xl font-bold text-primary mb-4">Besoins clients</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Hébergement et infrastructure sécurisée</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Analyse de données et IA</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Migration et optimisation des coûts</span>
                </li>
              </ul>
            </Card>
            <Card className="p-8 card-hover">
              <h3 className="text-2xl font-bold text-primary mb-4">Secteurs cibles</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Secteur financier et assurance</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Santé et pharmaceutique</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Retail et e-commerce</span>
                </li>
              </ul>
            </Card>
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Potentiel de marché</h3>
            <p className="text-lg text-foreground/80 mb-4">
              Avec un portefeuille client de 500+ entreprises, même une adoption de 10% représente <span className="font-bold text-primary">50 clients potentiels</span> pour les formations Google Cloud. À un revenu moyen de 1 200€ par client (formation + services), cela représente <span className="font-bold text-primary">60 000€ de chiffre d'affaires additionnel</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Pourquoi Google Cloud */}
      <section id="pourquoi" className="section-padding bg-card">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Pourquoi Google Cloud ?</h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Services principaux</h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Cloud className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Compute Engine</h4>
                    <p className="text-foreground/70">Machines virtuelles flexibles et scalables</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Cloud Storage</h4>
                    <p className="text-foreground/70">Stockage sécurisé et durable à l'échelle mondiale</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">BigQuery</h4>
                    <p className="text-foreground/70">Analyse de données massive et rapide</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Vertex AI</h4>
                    <p className="text-foreground/70">Intelligence artificielle et machine learning</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Avantages compétitifs</h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Scalabilité</h4>
                    <p className="text-foreground/70">Croissance sans limites, paiement à l'usage</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Sécurité</h4>
                    <p className="text-foreground/70">Certifications ISO, SOC2, conformité RGPD</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Fiabilité</h4>
                    <p className="text-foreground/70">99.99% de disponibilité, SLA garantis</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Optimisation des coûts</h4>
                    <p className="text-foreground/70">Réduction jusqu'à 40% vs autres clouds</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Statistiques réelles 2025</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-4xl font-bold text-primary mb-2">37%</p>
                <p className="text-foreground/70">Part de marché cloud en croissance</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">10M+</p>
                <p className="text-foreground/70">Clients utilisant Google Cloud</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">$33B</p>
                <p className="text-foreground/70">Revenu annuel Google Cloud</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offres de formation */}
      <section id="offres" className="section-padding bg-background">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Nos offres de formation et services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 card-hover border-2 border-primary/20">
              <h3 className="text-2xl font-bold text-primary mb-4">Formation Initiation</h3>
              <p className="text-4xl font-bold mb-2">350-550€</p>
              <p className="text-foreground/70 mb-6">par participant</p>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>1 jour de formation</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Concepts fondamentaux GCP</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Cas d'usage pratiques</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Démonstrations en direct</span>
                </li>
              </ul>
              <Button className="w-full btn-secondary">Choisir</Button>
            </Card>

            <Card className="p-8 card-hover border-2 border-primary">
              <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full inline-block mb-4 text-sm font-semibold">
                Populaire
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Formation Complète</h3>
              <p className="text-4xl font-bold mb-2">900-1200€</p>
              <p className="text-foreground/70 mb-6">par participant</p>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>3 jours de formation</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Architecture et design patterns</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Travaux pratiques avancés</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Support post-formation</span>
                </li>
              </ul>
              <Button className="w-full btn-primary">Choisir</Button>
            </Card>

            <Card className="p-8 card-hover border-2 border-primary/20">
              <h3 className="text-2xl font-bold text-primary mb-4">Formation Certifiante</h3>
              <p className="text-4xl font-bold mb-2">600-900€</p>
              <p className="text-foreground/70 mb-6">par participant</p>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Certification Google Cloud</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Examen blanc inclus</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Digital Leader ou Associate</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Reconnaissance officielle</span>
                </li>
              </ul>
              <Button className="w-full btn-secondary">Choisir</Button>
            </Card>
          </div>

          <h3 className="text-3xl font-bold mb-8">Services complémentaires</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h4 className="text-xl font-bold text-primary mb-4">Installation & Configuration</h4>
              <p className="text-foreground/70 mb-4">Mise en place de l'infrastructure Google Cloud adaptée à vos besoins</p>
              <p className="text-2xl font-bold text-primary">2000-5000€</p>
            </Card>
            <Card className="p-8">
              <h4 className="text-xl font-bold text-primary mb-4">Migration Cloud</h4>
              <p className="text-foreground/70 mb-4">Migration sécurisée de vos systèmes existants vers Google Cloud</p>
              <p className="text-2xl font-bold text-primary">5000-15000€</p>
            </Card>
            <Card className="p-8">
              <h4 className="text-xl font-bold text-primary mb-4">Support mensuel</h4>
              <p className="text-foreground/70 mb-4">Support technique et accompagnement continu</p>
              <p className="text-2xl font-bold text-primary">500-1500€/mois</p>
            </Card>
            <Card className="p-8">
              <h4 className="text-xl font-bold text-primary mb-4">Audit & Optimisation</h4>
              <p className="text-foreground/70 mb-4">Analyse de votre infrastructure et recommandations d'optimisation</p>
              <p className="text-2xl font-bold text-primary">1500-3000€</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Bénéfices pour l'entreprise */}
      <section className="section-padding bg-card">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Bénéfices pour notre entreprise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 card-hover">
              <TrendingUp className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Augmentation du CA</h3>
              <p className="text-foreground/70 mb-4">Génération de revenus additionnels directs et récurrents grâce aux formations et services complémentaires.</p>
              <p className="text-lg font-bold text-primary">+60K€ potentiel année 1</p>
            </Card>
            <Card className="p-8 card-hover">
              <Award className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Valorisation expertise</h3>
              <p className="text-foreground/70 mb-4">Renforcement de notre positionnement comme partenaire Google Cloud de confiance et expert reconnu.</p>
              <p className="text-lg font-bold text-primary">Partenariat stratégique</p>
            </Card>
            <Card className="p-8 card-hover">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Relation client</h3>
              <p className="text-foreground/70 mb-4">Renforcement de la relation client par l'accompagnement et le support continu.</p>
              <p className="text-lg font-bold text-primary">Fidélisation accrue</p>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI et estimation financière */}
      <section id="roi" className="section-padding bg-background">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">ROI et estimation financière</h2>
          
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Exemple de revenus par client</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="border border-border p-4 text-left font-semibold">Scénario</th>
                    <th className="border border-border p-4 text-left font-semibold">Formation</th>
                    <th className="border border-border p-4 text-left font-semibold">Services</th>
                    <th className="border border-border p-4 text-left font-semibold">Support (1 an)</th>
                    <th className="border border-border p-4 text-left font-semibold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-4 font-semibold">Initiation seule</td>
                    <td className="border border-border p-4">450€</td>
                    <td className="border border-border p-4">-</td>
                    <td className="border border-border p-4">-</td>
                    <td className="border border-border p-4 font-bold text-primary">450€</td>
                  </tr>
                  <tr className="bg-primary/5">
                    <td className="border border-border p-4 font-semibold">Formation + Migration</td>
                    <td className="border border-border p-4">1050€</td>
                    <td className="border border-border p-4">8000€</td>
                    <td className="border border-border p-4">-</td>
                    <td className="border border-border p-4 font-bold text-primary">9050€</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-4 font-semibold">Pack complet</td>
                    <td className="border border-border p-4">1050€</td>
                    <td className="border border-border p-4">3000€</td>
                    <td className="border border-border p-4">6000€</td>
                    <td className="border border-border p-4 font-bold text-primary">10050€</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Coûts internes estimés</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span>Formateur (3 jours @ 500€/jour)</span>
                  <span className="font-semibold">1500€</span>
                </li>
                <li className="flex justify-between">
                  <span>Matériel & infrastructure</span>
                  <span className="font-semibold">300€</span>
                </li>
                <li className="flex justify-between">
                  <span>Certification Google</span>
                  <span className="font-semibold">200€</span>
                </li>
                <li className="flex justify-between border-t border-border pt-3 mt-3">
                  <span className="font-bold">Coût total</span>
                  <span className="font-bold text-primary">2000€</span>
                </li>
              </ul>
            </Card>
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Marge brute (Pack complet)</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span>Revenu client</span>
                  <span className="font-semibold">10050€</span>
                </li>
                <li className="flex justify-between">
                  <span>Coût interne</span>
                  <span className="font-semibold">-2000€</span>
                </li>
                <li className="flex justify-between border-t border-border pt-3 mt-3">
                  <span className="font-bold">Marge brute</span>
                  <span className="font-bold text-primary">8050€</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-sm text-foreground/70">Taux de marge</span>
                  <span className="text-sm font-bold text-primary">80%</span>
                </li>
              </ul>
            </Card>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Marché adressable</h3>
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div>
                <p className="text-sm text-foreground/70 mb-2">Portefeuille clients</p>
                <p className="text-3xl font-bold text-primary">500</p>
              </div>
              <div>
                <p className="text-sm text-foreground/70 mb-2">Taux adoption 10%</p>
                <p className="text-3xl font-bold text-primary">50</p>
              </div>
              <div>
                <p className="text-sm text-foreground/70 mb-2">Revenu moyen</p>
                <p className="text-3xl font-bold text-primary">10K€</p>
              </div>
              <div>
                <p className="text-sm text-foreground/70 mb-2">Potentiel total</p>
                <p className="text-3xl font-bold text-primary">500K€</p>
              </div>
            </div>
            <p className="text-foreground/80">
              Avec une adoption progressive de 10% la première année, nous pouvons générer <span className="font-bold">500 000€ de chiffre d'affaires</span> et <span className="font-bold">400 000€ de marge brute</span>, tout en renforçant notre partenariat avec Google Cloud.
            </p>
          </div>
        </div>
      </section>

      {/* Argumentaire commercial */}
      <section className="section-padding bg-card">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">Argumentaire commercial</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Pourquoi nos commerciaux doivent proposer cette formation</h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold">1</div>
                  <div>
                    <h4 className="font-semibold mb-1">Répondre aux besoins clients</h4>
                    <p className="text-foreground/70">Les clients demandent de l'expertise cloud pour accélérer leur transformation</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold">2</div>
                  <div>
                    <h4 className="font-semibold mb-1">Générer du revenu additionnel</h4>
                    <p className="text-foreground/70">Chaque formation génère 1000€+ de revenu avec 80% de marge</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold">3</div>
                  <div>
                    <h4 className="font-semibold mb-1">Fidéliser les clients</h4>
                    <p className="text-foreground/70">L'accompagnement renforce la relation et crée des opportunités de vente croisée</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold">4</div>
                  <div>
                    <h4 className="font-semibold mb-1">Différenciation vs concurrents</h4>
                    <p className="text-foreground/70">Nous offrons un accompagnement complet, pas juste une formation</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Objections fréquentes & réponses</h3>
              <div className="space-y-4">
                <Card className="p-6">
                  <h4 className="font-semibold text-primary mb-2">« Le client n'a pas besoin de formation »</h4>
                  <p className="text-foreground/70">La formation accélère l'adoption et réduit les risques. 87% des clients qui suivent une formation réussissent leur migration cloud.</p>
                </Card>
                <Card className="p-6">
                  <h4 className="font-semibold text-primary mb-2">« C'est trop cher »</h4>
                  <p className="text-foreground/70">Le ROI est rapide : une formation de 1200€ économise au client 10K€+ en coûts d'infrastructure annuels.</p>
                </Card>
                <Card className="p-6">
                  <h4 className="font-semibold text-primary mb-2">« Nous n'avons pas les ressources »</h4>
                  <p className="text-foreground/70">Nous proposons des formations clés en main avec formateurs certifiés. Zéro charge pour le client.</p>
                </Card>
                <Card className="p-6">
                  <h4 className="font-semibold text-primary mb-2">« Les concurrents le font moins cher »</h4>
                  <p className="text-foreground/70">Nous offrons un accompagnement post-formation et des services complémentaires (migration, support) que les concurrents ne proposent pas.</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-padding bg-background">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">FAQ interne</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="p-8">
              <h3 className="text-xl font-bold text-primary mb-3">Qui peut suivre la formation ?</h3>
              <p className="text-foreground/70">Tous les niveaux : débutants, administrateurs, architectes. Nous adaptons le contenu au public.</p>
            </Card>
            <Card className="p-8">
              <h3 className="text-xl font-bold text-primary mb-3">Combien de participants par session ?</h3>
              <p className="text-foreground/70">Idéalement 10-15 participants pour garantir une bonne qualité pédagogique et une interaction optimale.</p>
            </Card>
            <Card className="p-8">
              <h3 className="text-xl font-bold text-primary mb-3">Quelle est la durée d'une certification ?</h3>
              <p className="text-foreground/70">Les certifications Google Cloud sont valides 3 ans. Nous recommandons une mise à jour annuelle.</p>
            </Card>
            <Card className="p-8">
              <h3 className="text-xl font-bold text-primary mb-3">Proposons-nous du support post-formation ?</h3>
              <p className="text-foreground/70">Oui, nous offrons 3 mois de support gratuit et des packages de support mensuel à partir de 500€.</p>
            </Card>
            <Card className="p-8">
              <h3 className="text-xl font-bold text-primary mb-3">Comment mesurer le succès ?</h3>
              <p className="text-foreground/70">KPIs : nombre de certifications obtenues, adoption des services Google Cloud, satisfaction client (NPS), ROI réalisé.</p>
            </Card>
            <Card className="p-8">
              <h3 className="text-xl font-bold text-primary mb-3">Ressources disponibles</h3>
              <ul className="space-y-2 text-foreground/70">
                <li>• Documentation Google Cloud officielle</li>
                <li>• Slides de présentation personnalisées</li>
                <li>• Cas d'usage et études de cas</li>
                <li>• Devis et packages commerciaux</li>
                <li>• Support des formateurs certifiés</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">Prêt à lancer les formations Google Cloud ?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contactez l'équipe commerciale pour mettre en place un plan d'action et identifier vos premiers clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-3 rounded-lg font-semibold flex items-center gap-2">
              Mettre en place la formation <ArrowRight className="w-5 h-5" />
            </Button>
            <Button className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8 py-3 rounded-lg font-semibold">
              Télécharger le rapport complet
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-primary mb-4">À propos</h4>
              <p className="text-foreground/70 text-sm">Partenaire officiel Google Cloud Formation</p>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-4">Ressources</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#" className="hover:text-primary transition">Documentation</a></li>
                <li><a href="#" className="hover:text-primary transition">Cas d'usage</a></li>
                <li><a href="#" className="hover:text-primary transition">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-4">Formations</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#offres" className="hover:text-primary transition">Initiation</a></li>
                <li><a href="#offres" className="hover:text-primary transition">Complète</a></li>
                <li><a href="#offres" className="hover:text-primary transition">Certifiante</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary mb-4">Contact</h4>
              <p className="text-sm text-foreground/70">Pour plus d'informations sur nos formations</p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-foreground/70 text-sm">
            <p>&copy; 2025 Google Cloud Formation. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
