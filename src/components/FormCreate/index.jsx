import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import s from "./create.module.css";
import { Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { NavLink } from "react-router-dom";
import CancelIcon from "@mui/icons-material/Cancel";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FieldsForm from "../FieldsCreate";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearBudget, createBudget } from "../../redux/actions/budgets.actions";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DenseAppBar from "../AppBar";

export default function AddressForm() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(false);
  const [alertToken, setAlertToken] = useState(false);
  const token = localStorage.getItem("token");
  const [name, setName] = useState("");
  const user = useSelector((state) => state.user);
  const [budgets, setBudgets] = useState([
    { name: "", category: "", amount: "", isExpense: false },
  ]);

  // useEffect(() => {
  //   !token && setAlertToken(true);
  //   token && setAlertToken(false);
  // }, [token]);

  useEffect(() => {
    dispatch(clearBudget());
    localStorage.removeItem("id");
    if (typeof user.accessToken === "string") {
      localStorage.setItem("token", user.accessToken);
    }
    !token && setAlertToken(true);
    token && setAlertToken(false);
  }, [user, token]);

  function handleSubmit(e) {
    e.preventDefault();
    for (let i = 0; i < budgets.length; i++) {
      if (Object.values(budgets[i]).includes("")) {
        return setAlert(true);
      }
    }
    let ultiBudget = { name: name, rows: budgets };
    if (!token) {
      return;
    }
    dispatch(createBudget(ultiBudget, token));
    setName("");
    setBudgets([{ name: "", category: "", amount: "", isExpense: false }]);
    navigate("../budget");
  }
  function handleChange(e, i) {
    const previousBudget = [...budgets];
    // JSON.parse(JSON.stringify(budgets)) para no mutar budgets
    previousBudget[i][e.target.name] = e.target.value;
    setBudgets(previousBudget);
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleClick() {
    const newBudget = { name: "", category: "", amount: "", isExpense: false };
    setBudgets([...budgets, newBudget]);
  }

  function handleDelete(i) {
    let previosBudget = [...budgets];
    previosBudget.splice(i, 1);
    setBudgets(previosBudget);
  }

  function handleLink() {
    setAlertToken(false);
  }

  return (
    <div>
      <DenseAppBar />
      <div className={s.divForm}>
        {alertToken && (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert
              severity="warning"
              onClose={() => {
                setAlert(false);
              }}
            >
              {/* Registrate para poder crear tu presupuesto! */}
              <NavLink onClick={handleLink} className={s.navLink} to={"/"}>
                Registrese{" "}
              </NavLink>
              para poder crear tu presupuesto!
            </Alert>
          </Stack>
        )}
        {alert && (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert
              severity="error"
              onClose={() => {
                setAlert(false);
              }}
            >
              Quedaron campos sin completar!
            </Alert>
          </Stack>
        )}
        <Typography variant="h4" gutterBottom sx={{ marginBottom: 6 }}>
          Crear presupuesto
          <Divider />
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <TextField
              onChange={handleChangeName}
              required
              id="firstName"
              name="name"
              value={name}
              label="Nombre del presupuesto"
              fullWidth
              autoComplete="given-name"
              variant="standard"
            />
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <TextField
              onChange={handleChangeToken}
              required
              id="lastName"
              name="token"
              label="Access token"
              value={token}
              fullWidth
              autoComplete="family-name"
              variant="standard"
            />
          </Grid> */}

          {budgets.map((p, i) => (
            <div key={i} className={s.divFields}>
              <div className={s.divDelete}>
                <Button
                  onClick={() => handleDelete(i)}
                  className={s.buttonDelete}
                  variant="contained"
                  color="error"
                >
                  <CancelIcon />
                </Button>
              </div>
              <Grid container spacing={3}>
                <FieldsForm
                  onChange={(e) => handleChange(e, i)}
                  name="name"
                  label={"Nombre"}
                  value={p.name}
                />
                <FieldsForm
                  onChange={(e) => handleChange(e, i)}
                  name="amount"
                  label={"Monto"}
                  value={p.amount}
                  type="number"
                />
                <FieldsForm
                  onChange={(e) => handleChange(e, i)}
                  type="select-category"
                  name="category"
                  label={"Categoria"}
                  value={p.category}
                />
                <FieldsForm
                  onChange={(e) => handleChange(e, i)}
                  type="select-type"
                  name="isExpense"
                  label={"Tipo"}
                  value={p.isExpense}
                />
              </Grid>
            </div>
          ))}
        </Grid>

        <Button onClick={handleClick} className={s.addButtonForm}>
          <AddCircleIcon color="action" fontSize="large" />
        </Button>

        <Button
          onClick={handleSubmit}
          className={s.buttonForm}
          variant="contained"
          color="primary"
        >
          Guardar Presupuesto
        </Button>
      </div>
    </div>
  );
}
