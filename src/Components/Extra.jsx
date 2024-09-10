










<div className="flex min-h-screen">
{/* Main content */}
<div className="flex-1 p-4 bg-gray-100">
  {/* Header */}
  <header className="flex items-center justify-between mb-6">
    <h1 className="text-xl font-bold">Dashboard</h1>
    <button className="px-4 py-2 text-white bg-gray-800 lg:hidden">Menu</button>
  </header>

  {/* Dashboard content (responsive grids) */}
  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
    {/* Meal List Card */}
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-lg font-bold">Today's Meals</h2>
      <ul className="space-y-2">
        <li>Breakfast: Oatmeal</li>
        <li>Lunch: Grilled Chicken Salad</li>
        <li>Dinner: Stir-fried Vegetables</li>
      </ul>
    </div>

    {/* Nutrition Summary Card */}
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-lg font-bold">Nutrition Summary</h2>
      <p>Calories: 1800 kcal</p>
      <p>Protein: 120g</p>
      <p>Carbs: 200g</p>
      <p>Fat: 50g</p>
    </div>

    {/* Challenges Card */}
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-lg font-bold">Challenges</h2>
      <p>No Sugar Week: In Progress</p>
      <p>10-Day Workout: Completed</p>
    </div>
  </div>
</div>
</div>