import "./CategoryBar.css";

function CategoryBar({ categories, selectedCategory, setSelectedCategory }) {
  //  category buttons and highlight the selected category.
  return (
    <section className="category-section">
      <div className="category-title">
        <h2>Our Catalog</h2>
        <span>{categories.length} Categories</span>
      </div>

      <div className="category-list">
        <button
          className={selectedCategory === "all" ? "active-category" : ""}
          onClick={() => setSelectedCategory("all")}
        >
          All
        </button>

        {categories.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? "active-category" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}

export default CategoryBar;
