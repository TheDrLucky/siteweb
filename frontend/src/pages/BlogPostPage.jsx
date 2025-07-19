import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  ArrowLeft, Calendar, Clock, Share2, 
  Facebook, Twitter, Linkedin, ArrowRight
} from 'lucide-react';
import { mockData } from '../data/mock';

const BlogPostPage = () => {
  const { slug } = useParams();
  const article = mockData.blogArticles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article non trouvé</h1>
          <Button asChild>
            <Link to="/blog">Retour au blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const relatedArticles = mockData.blogArticles
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 2);

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Accueil</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{article.category}</span>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" className="mb-6 -ml-4">
            <Link to="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour au blog
            </Link>
          </Button>

          <Badge className="mb-6">{article.category}</Badge>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 pb-8 border-b">
            <div className="flex items-center space-x-6 text-sm text-gray-600 mb-4 sm:mb-0">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium text-xs">G</span>
                </div>
                <span className="font-medium">{article.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(article.date)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>5 min de lecture</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600 mr-2">Partager :</span>
              <Button size="icon" variant="ghost" className="w-8 h-8">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="ghost" className="w-8 h-8">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="ghost" className="w-8 h-8">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="ghost" className="w-8 h-8">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Image */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center mb-12">
            <div className="text-center text-blue-600">
              <Calendar className="w-16 h-16 mx-auto mb-4" />
              <span className="text-lg font-medium">Image d'illustration</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-600 mb-8">
              {article.excerpt}
            </p>

            {/* Simulated article content */}
            <div className="text-gray-700 space-y-6">
              <p>
                L'évolution technologique de ces dernières années a profondément transformé 
                notre rapport à l'habitat et au travail. Les solutions connectées ne sont plus 
                un luxe, mais deviennent progressivement une nécessité pour optimiser confort, 
                sécurité et efficacité énergétique.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Les enjeux actuels
              </h2>

              <p>
                Face aux défis environnementaux et économiques, les particuliers comme les 
                entreprises cherchent des solutions pour réduire leur consommation énergétique 
                tout en améliorant leur qualité de vie ou de travail. C'est dans ce contexte 
                que s'inscrit notre approche.
              </p>

              <blockquote className="border-l-4 border-blue-600 pl-6 my-8 italic text-gray-600 bg-blue-50 py-4 rounded-r-lg">
                "La technologie doit servir l'humain, pas le contraindre. Notre rôle est de 
                rendre ces innovations accessibles et utiles au quotidien."
              </blockquote>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Notre approche pratique
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>Analyse personnalisée de vos besoins réels</li>
                <li>Solutions évolutives et compatibles</li>
                <li>Formation complète à l'utilisation</li>
                <li>Maintenance préventive incluse</li>
                <li>Support technique réactif</li>
              </ul>

              <p>
                Chaque projet est unique et mérite une attention particulière. C'est pourquoi 
                nous privilégions toujours une approche sur-mesure, en prenant le temps 
                d'analyser votre contexte spécifique avant de proposer les solutions les 
                plus adaptées.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Conclusion
              </h2>

              <p>
                L'investissement dans les technologies connectées représente un choix 
                stratégique pour l'avenir. Bien accompagné, il apporte des bénéfices 
                durables en termes de confort, d'économies et de valorisation de votre patrimoine.
              </p>
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t">
              <h4 className="font-medium text-gray-900 mb-4">Mots-clés :</h4>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="hover:bg-blue-100 cursor-pointer">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author CTA */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-md">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Une question sur cet article ?
              </h3>
              <p className="text-gray-600 mb-6">
                Nos experts sont là pour vous conseiller et vous accompagner 
                dans votre projet. Consultation gratuite.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link to="/contact">
                    Nous contacter
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/services">
                    Nos services
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Articles similaires</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <Card key={relatedArticle.id} className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-gray-400" />
                  </div>
                  
                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-3">{relatedArticle.category}</Badge>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {relatedArticle.title}
                    </h4>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {relatedArticle.excerpt}
                    </p>
                    <Button asChild variant="ghost" size="sm">
                      <Link to={`/blog/${relatedArticle.slug}`}>
                        Lire l'article
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPostPage;