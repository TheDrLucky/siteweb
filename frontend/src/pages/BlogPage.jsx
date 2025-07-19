import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';
import { mockData } from '../data/mock';

const BlogPage = () => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const categories = [...new Set(mockData.blogArticles.map(article => article.category))];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Blog Technique
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Actualités, conseils et guides pratiques sur la domotique, la sécurité, 
              l'informatique et l'intelligence artificielle.
            </p>
            <Badge variant="outline" className="px-4 py-2 bg-white">
              Expertise • Conseils • Tendances technologiques
            </Badge>
          </div>
        </div>
      </section>

      {/* Search & Categories */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Rechercher un article..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="cursor-pointer hover:bg-blue-100">
                Tous
              </Badge>
              {categories.map((category) => (
                <Badge 
                  key={category}
                  variant="outline" 
                  className="cursor-pointer hover:bg-blue-50 hover:border-blue-300"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Article à la une</h2>
            <p className="text-gray-600">Ne manquez pas notre dernier article</p>
          </div>

          <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-12 h-12 text-white" />
                  </div>
                  <Badge className="bg-blue-600 text-white">Nouveau</Badge>
                </div>
              </div>
              
              <CardContent className="p-8 lg:p-12">
                <Badge className="mb-4">{mockData.blogArticles[0].category}</Badge>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {mockData.blogArticles[0].title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {mockData.blogArticles[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(mockData.blogArticles[0].date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>5 min</span>
                    </div>
                  </div>
                  <Button asChild>
                    <Link to={`/blog/${mockData.blogArticles[0].slug}`}>
                      Lire l'article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Tous nos articles</h2>
            <p className="text-gray-600">Découvrez nos conseils d'experts et actualités technologiques</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.blogArticles.slice(1).map((article) => (
              <Card key={article.id} className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 group">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <Calendar className="w-8 h-8 mx-auto mb-2" />
                    <span className="text-sm">Image d'illustration</span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline">{article.category}</Badge>
                    <span className="text-xs text-gray-500">{formatDate(article.date)}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>5 min</span>
                    </div>
                    
                    <Button asChild variant="ghost" size="sm" className="group-hover:bg-blue-50 group-hover:text-blue-600">
                      <Link to={`/blog/${article.slug}`}>
                        Lire plus
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </div>

                  <div className="mt-4 pt-4 border-t">
                    <div className="flex flex-wrap gap-1">
                      {article.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Charger plus d'articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Restez informé des dernières actualités tech
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Recevez nos conseils d'experts et les dernières tendances en domotique, 
            sécurité et intelligence artificielle.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button variant="secondary" size="lg" className="px-6">
                S'abonner
              </Button>
            </div>
            <p className="text-xs text-blue-200 mt-3">
              Pas de spam, désabonnement en un clic
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;