import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import s from "./fields.module.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function FieldsForm({ name, value, label, type, onChange }) {
  if (type === "select-category")
    return (
      <Grid item xs={12}>
        <InputLabel required id="demo-simple-select-label">
          Categoria
        </InputLabel>
        <Select
          fullWidth
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name={name}
          value={value}
          label={label}
          onChange={onChange}
        >
          <MenuItem value={"Principal"}>Principal</MenuItem>
          <MenuItem value={"Secundario"}>Secundario</MenuItem>
          <MenuItem value={"Adicional"}>Adicional</MenuItem>
          <MenuItem value={"Hogar"}>Hogar</MenuItem>
          <MenuItem value={"Familia o Personal"}>Familia o Personal</MenuItem>
        </Select>
      </Grid>
    );
  if (type === "select-type")
    return (
      <Grid item xs={12}>
        <InputLabel required id="demo-simple-select-label">
          Tipo
        </InputLabel>
        <Select
          fullWidth
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name={name}
          value={value}
          label={label}
          onChange={onChange}
        >
          <MenuItem value={false}>Ingreso</MenuItem>
          <MenuItem value={true}>Gasto</MenuItem>
        </Select>
      </Grid>
    );

  return (
    <>
      <Grid item xs={12} sm={6}>
        <TextField
          type={type}
          onChange={onChange}
          required
          id="lastName"
          name={name}
          label={label}
          value={value}
          fullWidth
          autoComplete="family-name"
          variant="standard"
        />
      </Grid>
      {/* <Grid item xs={12}>
          <InputLabel required id="demo-simple-select-label">
            Tipo
          </InputLabel>
          <Select
            fullWidth
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label={label}
          >
            <MenuItem value={10}>Ingreso</MenuItem>
            <MenuItem value={20}>Gasto</MenuItem>
          </Select>
        </Grid>

        <Grid item xs={12}>
          <InputLabel required id="demo-simple-select-label">
            Categoria
          </InputLabel>
          <Select
            fullWidth
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label={label}
          >
            <MenuItem value={10}>Principal</MenuItem>
            <MenuItem value={20}>Secundario</MenuItem>
            <MenuItem value={20}>Adicional</MenuItem>
            <MenuItem value={20}>Hogar</MenuItem>
            <MenuItem value={20}>Familia o Personal</MenuItem>
          </Select>
        </Grid> */}
    </>
  );
}
