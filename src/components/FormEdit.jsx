import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { refreshtable } from "../redux/actions";

const validationSchema = yup.object({
  description: yup
    .string("Ingresar una descirpcion")
    .required("Descripcion es es requerido"),
  type: yup
    .string("Ingresar concepto /  ingreso o egreso")
    .required("concepto requerido"),
  amount: yup.string("Ingresar Monto").required("Campo requerido"),
  date: yup.string("Ingresar fecha").required("Campo requerido"),
});

const updateData = async (id, data) => {
  await axios.put(`${process.env.REACT_APP_SERVER}/operations/api/${id}`, data);
};

const FormEdit = ({ row, onClose }) => {
  const { description, amount, date, types, id } = row;

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      description,
      amount,
      date,
      type: types.id,
    },
    validationSchema: validationSchema,
    onSubmit: async (data) => {
      await updateData(id, data);
      await dispatch(refreshtable());
      onClose();
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="description"
          name="description"
          label="Descripcion"
          value={formik.values.description}
          onChange={formik.handleChange}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
          sx={{ mb: 3 }}
        />
        <TextField
          fullWidth
          id="amount"
          name="amount"
          label="Monto"
          value={formik.values.amount}
          onChange={formik.handleChange}
          error={formik.touched.amount && Boolean(formik.errors.amount)}
          helperText={formik.touched.amount && formik.errors.amount}
          sx={{ mb: 3 }}
        />

        <TextField
          fullWidth
          id="date"
          name="date"
          label="Fecha"
          type="date"
          value={formik.values.date}
          onChange={formik.handleChange}
          error={formik.touched.date && Boolean(formik.errors.date)}
          helperText={formik.touched.date && formik.errors.date}
          sx={{ mb: 3 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Select
          fullWidth
          labelId="type"
          id="type"
          name="type"
          value={formik.values.type}
          label="Concepto"
          onChange={formik.handleChange}
          error={formik.touched.type && Boolean(formik.errors.type)}
          sx={{ mb: 3 }}
        >
          <MenuItem value={1}>Ingreso</MenuItem>
          <MenuItem value={2}>Egreso</MenuItem>
        </Select>

        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit {id}
        </Button>
      </form>
    </div>
  );
};

export default FormEdit;
