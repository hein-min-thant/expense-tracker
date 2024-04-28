import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface FormData {
  description: string;
  amount: number;
  category: string;
}

interface Props {
  onSubmit: (data: FormData) => void;
}

const schema = z.object({
  description: z.string().min(3, {
    message: "Description should be at least three characters long!",
  }),
  amount: z.number({ message: "This field is required" }),
  category: z.string(),
});

type FormValues = z.infer<typeof schema>;

const AddItems = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  return (
    <>
      <form
        className="mb-3"
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
      >
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            id="description"
            type="text"
            className="form-control"
          />
          {errors.description && <p>{errors.description.message}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="number"
            className="form-control"
          />
          {errors.amount && <p>{errors.amount.message}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            {...register("category")}
            id="category"
            className="form-select"
            aria-label="Default select example"
          >
            <option value=""></option>
            <option value="Groceries">Groceries</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
          </select>
          {errors.category && <p>{errors.category.message}</p>}
        </div>

        <button type="submit" className="btn btn-primary">
          Add Items
        </button>
      </form>
    </>
  );
};

export default AddItems;
