import React, { useState } from 'react';
import { Search, Leaf, Heart, Clock, ChefHat, Dumbbell, Apple, Salad } from 'lucide-react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFood, setSelectedFood] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);

  const foodList = [
    // Frutas
    { 
      name: 'Abacate',
      calories: 160,
      category: 'Frutas',
      nutrients: {
        carbs: 8.5,
        protein: 2,
        fat: 14.7,
        fiber: 6.7,
        vitaminC: 10,
        vitaminE: 2.07,
        potassium: 485,
        magnesium: 29,
        iron: 0.55,
        calcium: 12,
        omega3: 0.1,
        omega6: 1.7
      },
      benefits: ['Rico em gorduras boas', 'Alto teor de fibras', 'Fonte de vitamina E', 'Antioxidante natural'],
      recipes: [
        { name: 'Guacamole Mexicano', time: '15 min', rating: 4.8 },
        { name: 'Vitamina de Abacate', time: '5 min', rating: 4.5 },
        { name: 'Salada de Abacate', time: '10 min', rating: 4.7 }
      ]
    },
    { 
      name: 'Abacaxi',
      calories: 50,
      category: 'Frutas',
      nutrients: {
        carbs: 13,
        protein: 0.5,
        fat: 0.1,
        fiber: 1.4,
        vitaminC: 47.8,
        vitaminB1: 0.079,
        potassium: 109,
        magnesium: 12,
        calcium: 13,
        manganese: 0.927,
        bromelain: 'Presente'
      },
      benefits: ['Rico em vitamina C', 'Auxilia na digestão', 'Antioxidante natural', 'Anti-inflamatório'],
      recipes: [
        { name: 'Suco de Abacaxi com Hortelã', time: '5 min', rating: 4.7 },
        { name: 'Salada de Frutas Tropical', time: '10 min', rating: 4.6 },
        { name: 'Abacaxi Grelhado', time: '15 min', rating: 4.8 }
      ]
    },
    { name: 'Ameixa', calories: 46 }, { name: 'Banana', calories: 89 },
    { name: 'Caju', calories: 43 }, { name: 'Carambola', calories: 31 },
    { name: 'Damasco', calories: 48 }, { name: 'Figo', calories: 74 },
    { name: 'Goiaba', calories: 68 }, { name: 'Kiwi', calories: 61 },
    
    // Vegetais
    { 
      name: 'Brócolis',
      calories: 55,
      category: 'Vegetais',
      nutrients: {
        carbs: 11,
        protein: 3.7,
        fat: 0.6,
        fiber: 5.1,
        vitaminC: 89.2,
        vitaminK: 101.6,
        vitaminA: 623,
        folate: 57.3,
        potassium: 316,
        calcium: 47,
        iron: 0.73,
        sulforaphane: 'Presente'
      },
      benefits: ['Rico em vitamina C', 'Alto teor de fibras', 'Fonte de cálcio', 'Propriedades anticancerígenas'],
      recipes: [
        { name: 'Brócolis Gratinado', time: '25 min', rating: 4.9 },
        { name: 'Salada de Brócolis', time: '10 min', rating: 4.5 },
        { name: 'Sopa Cremosa de Brócolis', time: '30 min', rating: 4.7 }
      ]
    },
    { name: 'Abobrinha', calories: 17 }, { name: 'Aspargos', calories: 20 },
    { name: 'Berinjela', calories: 25 }, 
    { name: 'Cenoura', calories: 41 }, { name: 'Couve-flor', calories: 25 },
    { name: 'Espinafre', calories: 23 }, { name: 'Pepino', calories: 15 },
    { name: 'Pimentão', calories: 20 }, { name: 'Tomate', calories: 18 },
    
    // Proteínas
    { name: 'Atum', calories: 132 }, { name: 'Camarão', calories: 99 },
    { name: 'Frango Grelhado', calories: 165 }, { name: 'Ovo', calories: 155 },
    { name: 'Salmão', calories: 208 }, { name: 'Sardinha', calories: 208 },
    { name: 'Tilápia', calories: 128 }, { name: 'Carne Bovina', calories: 250 },
    { name: 'Peru', calories: 189 }, { name: 'Cordeiro', calories: 294 },
    
    // Grãos e Cereais
    { name: 'Arroz Integral', calories: 111 }, { name: 'Aveia', calories: 389 },
    { name: 'Cevada', calories: 354 }, { name: 'Quinoa', calories: 120 },
    { name: 'Trigo', calories: 339 }, { name: 'Centeio', calories: 338 },
    { name: 'Milho', calories: 365 }, { name: 'Amaranto', calories: 371 },
    { name: 'Chia', calories: 486 }, { name: 'Linhaça', calories: 534 },
  ];

  const filteredFoods = foodList.filter(food => 
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleFoodSelect = (food) => {
    setSelectedFood(food);
    setSearchTerm(food.name);
    setShowSidebar(false); // Close sidebar on mobile after selection
  };

  const getGoogleRecipeLink = (recipeName, foodName) => {
    const query = encodeURIComponent(`receita ${recipeName} com ${foodName}`);
    return `https://www.google.com/search?q=${query}`;
  };

  const getNutrientIcon = (nutrientName) => {
    switch (nutrientName.toLowerCase()) {
      case 'protein':
        return <Dumbbell className="w-4 h-4 text-blue-500" />;
      case 'carbs':
        return <Apple className="w-4 h-4 text-orange-500" />;
      case 'fiber':
        return <Salad className="w-4 h-4 text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center">
            <Leaf className="text-green-600 w-6 h-6 md:w-8 md:h-8 mr-2" />
            <h1 className="text-2xl md:text-3xl font-bold text-green-600">NutriSabor</h1>
          </div>
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <Search className="w-5 h-5 text-green-600" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-4 md:py-8">
        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-6 md:mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Pesquise por qualquer alimento (ex: brócolis)"
              className="w-full pl-12 pr-4 py-3 md:py-4 rounded-xl shadow-lg border-none focus:ring-2 focus:ring-green-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {/* Quick Suggestions */}
          <div className="flex gap-2 mt-4 flex-wrap">
            {['maçã', 'frango', 'quinoa', 'abacate'].map(suggestion => (
              <button
                key={suggestion}
                onClick={() => setSearchTerm(suggestion)}
                className="px-3 py-1 md:px-4 md:py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow text-sm text-gray-600"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {/* Main Content Area */}
          <div className="md:col-span-2 bg-white rounded-xl shadow-lg p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Resultados da Pesquisa</h2>
            {selectedFood && selectedFood.nutrients ? (
              <div className="space-y-4 md:space-y-6">
                <div className="bg-green-50 p-4 md:p-6 rounded-lg">
                  <h3 className="text-lg md:text-xl font-semibold mb-4">{selectedFood.name}</h3>
                  
                  {/* Macronutrientes */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6">
                    <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-500">Calorias</p>
                      <p className="text-base md:text-lg font-semibold">{selectedFood.calories} kcal</p>
                    </div>
                    <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm">
                      <div className="flex items-center gap-2">
                        <Apple className="w-4 h-4 text-orange-500" />
                        <p className="text-sm text-gray-500">Carboidratos</p>
                      </div>
                      <p className="text-base md:text-lg font-semibold">{selectedFood.nutrients.carbs}g</p>
                    </div>
                    <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm">
                      <div className="flex items-center gap-2">
                        <Dumbbell className="w-4 h-4 text-blue-500" />
                        <p className="text-sm text-gray-500">Proteínas</p>
                      </div>
                      <p className="text-base md:text-lg font-semibold">{selectedFood.nutrients.protein}g</p>
                    </div>
                    <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm">
                      <p className="text-sm text-gray-500">Gorduras</p>
                      <p className="text-base md:text-lg font-semibold">{selectedFood.nutrients.fat}g</p>
                    </div>
                  </div>

                  {/* Micronutrientes */}
                  <div className="bg-white p-3 md:p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">Micronutrientes</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                      {Object.entries(selectedFood.nutrients)
                        .filter(([key]) => !['carbs', 'protein', 'fat'].includes(key))
                        .map(([key, value]) => (
                          <div key={key} className="flex items-center gap-2">
                            <span className="text-sm font-medium capitalize">{key}:</span>
                            <span className="text-sm text-gray-600">
                              {typeof value === 'number' ? `${value}${key.includes('vitamin') ? 'mg' : 'g'}` : value}
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-lg font-semibold">Benefícios</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedFood.benefits.map((benefit, index) => (
                      <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-lg font-semibold">Receitas Sugeridas</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    {selectedFood.recipes.map((recipe, index) => (
                      <a
                        key={index}
                        href={getGoogleRecipeLink(recipe.name, selectedFood.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-50 p-3 md:p-4 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{recipe.name}</h4>
                          <div className="flex items-center text-yellow-500">
                            <span className="text-sm mr-1">{recipe.rating}</span>
                            <Heart size={16} />
                          </div>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock size={14} className="mr-1" />
                          <span>{recipe.time}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-500 py-8">
                <ChefHat className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <p>Selecione um alimento para ver informações detalhadas</p>
              </div>
            )}
          </div>

          {/* Food List Sidebar */}
          <div className={`fixed md:relative inset-0 z-40 md:z-auto transform ${showSidebar ? 'translate-x-0' : 'translate-x-full md:translate-x-0'} transition-transform duration-300 ease-in-out md:transform-none`}>
            <div className="h-full md:h-auto bg-white md:rounded-xl shadow-lg p-4 md:p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-4 md:hidden">
                <h2 className="text-xl font-semibold">Lista de Alimentos</h2>
                <button
                  onClick={() => setShowSidebar(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <span className="sr-only">Fechar</span>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <h2 className="text-xl font-semibold mb-4 hidden md:block">Lista de Alimentos</h2>
              <div className="space-y-2 max-h-[calc(100vh-12rem)] md:max-h-[600px] overflow-y-auto">
                {filteredFoods.map(food => (
                  <div
                    key={food.name}
                    className="p-3 hover:bg-green-50 rounded-lg cursor-pointer transition-colors"
                    onClick={() => handleFoodSelect(food)}
                  >
                    <p className="font-medium">{food.name}</p>
                    <p className="text-sm text-gray-500">{food.calories} kcal/100g</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;