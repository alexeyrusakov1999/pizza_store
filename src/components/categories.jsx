import { useState } from "react";

const Categories = () => {
  const [category, setCategory] = useState("Все");

  const categories = [
    "Все",
    "Мясные",
    "Вегетерианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName) => (
          <li
            onClick={() => setCategory(categoryName)}
            className={categoryName === category ? "active" : ""}
            key={categoryName}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
