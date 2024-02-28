import { Button, Input, Select } from "@/atoms";
import { useFormik } from "formik";
import React from "react";
import { IoMdSend } from "react-icons/io";
import * as Yup from "yup";

const ItemForm: React.FunctionComponent = () => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      category: "",
      cost: "",
      price: "",
      stock: "",
      hasOptions: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      category: Yup.string().required("Category is required"),
      cost: Yup.string().required("Cost is required"),
      price: Yup.string().required("Price is required"),
      stock: Yup.string().required("Stock is required"),
      hasOptions: Yup.boolean(),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const categoryOptions = ["Cake", "Pie", "Fried"];

  console.log(formik.values.category);

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-2xl text-secondary font-semibold">Create Item</h2>
      <form
        className="flex flex-col gap-7"
        onSubmit={(event) => {
          event.preventDefault();
          formik.handleSubmit();
          return false;
        }}
      >
        <div className="grid grid-cols-3 gap-4">
          <Input
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && formik.errors.name}
          />
          <Select
            name="category"
            value={formik.values.category}
            label="Category"
            options={categoryOptions}
            onChange={formik.handleChange}
            error={formik.touched.category && formik.errors.category}
          />
          <Input
            name="cost"
            label="Cost"
            value={formik.values.cost}
            type="number"
            placeholder="0.00"
            onChange={formik.handleChange}
            error={formik.touched.cost && formik.errors.cost}
          />
          <Input
            name="price"
            label="Price"
            value={formik.values.price}
            type="number"
            placeholder="0.00"
            onChange={formik.handleChange}
            error={formik.touched.price && formik.errors.price}
          />
          <Input
            name="stock"
            label="Stock"
            value={formik.values.stock}
            type="number"
            placeholder="0"
            onChange={formik.handleChange}
            error={formik.touched.stock && formik.errors.stock}
          />
        </div>
        <div>
          <Button>
            <div className="flex gap-2 items-center">
              <IoMdSend className="text-lg" /> Submit
            </div>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ItemForm;
