import categories from "./category";

interface Props {
  onSelect: (category: string) => void;
}

const ExpenseFilter = ({ onSelect }: Props) => {
  return (
    <>
      <div className="mb-3">
        <select
          id="category"
          className="form-select"
          aria-label="Default select example"
          onChange={(event) => onSelect(event.target.value)}
        >
          <option value=""></option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default ExpenseFilter;
