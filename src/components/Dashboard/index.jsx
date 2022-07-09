import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import s from "./dashboard.module.css";
import { Button } from "@mui/material";

import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import Divider from "@mui/material/Divider";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useNavigate } from "react-router-dom";
import {
  clearBudget,
  getUserBudget,
} from "../../redux/actions/budgets.actions";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://glouapp.com/sign-in">
        Glou App
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function DashboardBudgets() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const budgets = useSelector((state) => state.budgets);
  const rest = budgets.moneyIn - budgets.moneyOut;
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (Array.isArray(budgets.rows)) {
      localStorage.setItem("id", budgets.id);
    } else {
      let id = localStorage.getItem("id");
      dispatch(getUserBudget(id, token));
    }
    return () => {
      dispatch(clearBudget());
      localStorage.removeItem("id");
    };
  });

  function handleClick(e) {
    e.preventDefault();
    navigate("../create");
  }

  return (
    <div className={s.divContainer}>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="md">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <PointOfSaleIcon />
            </Avatar>
            <Typography component="h1" variant="h4" sx={{ marginBottom: 8 }}>
              {budgets.name}
            </Typography>
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography component="h1" variant="h5">
                    Ingresos totales:
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} sx={{ marginBottom: 4 }}>
                  <div className={s.divDashboard}>
                    <Typography component="h1" variant="h5">
                      ${budgets.moneyIn ? budgets.moneyIn : 0}
                      {Array.isArray(budgets.rows) &&
                        budgets.rows.map((elm) => {
                          if (elm.isExpense === false) {
                            return (
                              <div key={elm.id}>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  {elm.name}: + ${elm.amount}
                                </Typography>
                              </div>
                            );
                          }
                        })}
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography component="h1" variant="h5">
                    Gastos recurrentes:
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <div className={s.divDashboard}>
                    <Typography component="h1" variant="h5">
                      ${budgets.moneyOut ? budgets.moneyOut : 0}
                      {Array.isArray(budgets.rows) &&
                        budgets.rows.map((elm) => {
                          if (elm.isExpense === true) {
                            return (
                              <div key={elm.id}>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  {elm.name}: - ${elm.amount}
                                </Typography>
                              </div>
                            );
                          }
                        })}
                    </Typography>
                  </div>
                </Grid>

                <Grid item xs={12}>
                  <Divider variant="middle" />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography component="h1" variant="h5">
                    Resto:
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div className={s.divDashboard}>
                    <Typography component="h1" variant="h5">
                      ${rest ? rest : 0}
                      <Typography variant="body2" color="text.secondary">
                        Esto nos queda para otros gastos y ahorro
                      </Typography>
                    </Typography>
                  </div>
                </Grid>
              </Grid>
              <Button
                onClick={handleClick}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, marginTop: 6 }}
              >
                Nuevo presupuesto
              </Button>
              {/* <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid> */}
            </Box>
          </Box>
          <Copyright sx={{ mt: 5, marginTop: 14 }} />
        </Container>
      </ThemeProvider>
    </div>
  );
}
