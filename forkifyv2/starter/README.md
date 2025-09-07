# Forkify Recipe Application

A modern, responsive web application for searching, viewing, and managing recipes. Built with vanilla JavaScript, this app allows users to search through over 1,000,000 recipes, view detailed recipe information, adjust serving sizes, bookmark favorites, and even upload their own recipes.

## 🚀 Features

- **Recipe Search**: Search through a vast database of recipes using the Forkify API
- **Recipe Details**: View comprehensive recipe information including ingredients, cooking time, and instructions
- **Serving Adjustment**: Dynamically adjust ingredient quantities based on desired serving size
- **Bookmarking**: Save favorite recipes for quick access
- **Recipe Upload**: Add your own custom recipes to the platform
- **Responsive Design**: Fully responsive interface that works on all devices
- **Pagination**: Navigate through search results with pagination controls

## 🛠️ Technologies Used

- **Frontend**: Vanilla JavaScript (ES6+)
- **Styling**: SCSS/Sass
- **Build Tool**: Parcel
- **API**: Forkify API v2
- **Architecture**: MVC Pattern
- **State Management**: Custom state management system
- **Local Storage**: For persisting bookmarks

## 📁 Project Structure

```
src/
├── js/
│   ├── config.js          # API configuration and constants
│   ├── controller.js      # Main application controller
│   ├── model.js          # Data layer and state management
│   ├── helpers.js        # Utility functions
│   └── views/            # View components
│       ├── View.js       # Base view class
│       ├── recipeView.js # Recipe display view
│       ├── searchView.js # Search interface view
│       ├── resultsView.js # Search results view
│       ├── bookmarksView.js # Bookmarks view
│       ├── paginationView.js # Pagination controls
│       └── addRecipeView.js # Recipe upload form
├── sass/                 # SCSS stylesheets
└── img/                  # Images and icons
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd forkifyv2/starter
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:1234`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be available in the `dist/` directory.

## 🎯 How to Use

### Searching for Recipes
1. Enter a search term in the search field (e.g., "pasta", "chicken", "vegetarian")
2. Click the search button or press Enter
3. Browse through the search results
4. Click on any recipe to view its details

### Viewing Recipe Details
- See complete ingredient lists with quantities
- View cooking time and serving information
- Adjust serving sizes using the +/- buttons
- Access the original recipe source

### Managing Bookmarks
- Click the bookmark icon on any recipe to save it
- View all bookmarked recipes in the bookmarks panel
- Bookmarks are automatically saved to your browser's local storage

### Adding Your Own Recipe
1. Click the "Add recipe" button
2. Fill in the recipe details:
   - Title, URL, Image URL, Publisher
   - Prep time and servings
   - Ingredients (use format: "Quantity,Unit,Description")
3. Click "Upload" to add your recipe

## 🔧 Configuration

The application uses the Forkify API for recipe data. Configuration can be found in `src/js/config.js`:

- `API_URL`: Forkify API endpoint
- `RES_PER_PAGE`: Number of results per page (default: 10)
- `TIMEOUT_SEC`: API request timeout
- `KEY`: API key for authentication

## 🏗️ Architecture

This application follows the MVC (Model-View-Controller) pattern:

- **Model**: Handles data management, API calls, and state
- **View**: Manages UI rendering and user interactions
- **Controller**: Coordinates between model and view, handles application flow

### Key Components

- **State Management**: Centralized state object manages recipe data, search results, and bookmarks
- **View Classes**: Modular view components for different parts of the UI
- **Event Handling**: Event delegation for efficient DOM manipulation
- **API Integration**: Async/await pattern for API calls with error handling

## 🎨 Styling

The application uses SCSS for styling with a modular approach:
- `_base.scss`: Base styles and resets
- `_components.scss`: Reusable component styles
- `_header.scss`: Header and navigation styles
- `_recipe.scss`: Recipe display styles
- `_searchResults.scss`: Search results styling
- `_upload.scss`: Recipe upload form styles

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile phones

## 🔒 API Key

This application includes a demo API key. For production use, you should:
1. Get your own API key from the Forkify API
2. Replace the key in `src/js/config.js`
3. Never commit API keys to version control

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Williford Abunas**

## 🙏 Acknowledgments

- Forkify API for providing recipe data
- Parcel for the build system
- The Complete JavaScript Course by Jonas Schmedtmann for inspiration and guidance
