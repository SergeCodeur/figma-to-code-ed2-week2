import { FilterTag } from "@/components/ui/filter-tag";
import { useCollectionStore } from "@/store/collections-store";

const ProductFilterButtons = () => {
  const { selectedCategory, setSelectedCategory, categories } =
    useCollectionStore();

  const handleFilterClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex lg:gap-4 md:justify-center gap-2 flex-wrap">
      <FilterTag
        variant={"outline"}
        className="text-lg max-sm:text-sm"
        onClick={() => handleFilterClick("All")}
        active={selectedCategory === "All"}
      >
        All{" "}
        <span className="text-base max-sm:text-xs">
          {Object.values(categories).reduce((a, b) => a + b, 0)}
        </span>
      </FilterTag>
      {Object.keys(categories).map((category) => (
        <FilterTag
          key={category}
          className="text-lg max-sm:text-sm"
          variant={"outline"}
          onClick={() => handleFilterClick(category)}
          active={selectedCategory === category}
        >
          {category}{" "}
          <span className="text-base max-sm:text-xs">
            {categories[category]}
          </span>
        </FilterTag>
      ))}
    </div>
  );
};

export default ProductFilterButtons;
