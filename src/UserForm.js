import React from "react";
import { Button, Grid, Input, Typography } from "@mui/material";

const UserForm = () => {
  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: "#ffffff",
          marginBottom: "30px",
          display: "block",
        }}
      >
        <Grid item sx={12}>
          <Typography component={"h1"} sx={{ color: "#00000" }}>
            User Form
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ display: "block" }}>
          <Typography
            component={"label"}
            htmlFor="id"
            sx={{
              color: "#000000",
              marginRight: "20px",
              fontSize: "16px",
              width: "100px",
              display: "block",
            }}
          >
            ID
          </Typography>
          <Input
            type="number"
            name="id"
            id="id"
            value={""}
            onChange={() => {}}
            sx={{ width: "400px" }}
          />
        </Grid>
        <Grid item xs={12} sx={{ display: "block" }}>
          <Typography
            component={"label"}
            htmlFor="id"
            sx={{
              color: "#000000",
              marginRight: "20px",
              fontSize: "16px",
              width: "100px",
              display: "block",
            }}
          >
            NAME
          </Typography>
          <Input
            type="text"
            name="name"
            id="name"
            value={""}
            onChange={() => {}}
            sx={{ width: "400px" }}
          />
        </Grid>
        <Button
          sx={{
            margin: "auto",
            marginBottom: "20px",
            backgroundColor: "blue",
            color: "#ffffff",
            marginLeft: "15px",
            marginLeft: "10px",
            "&:hover": {
              opacity: "0.7",
              backgroundColor: "#dhdh4",
            },
          }}
        >
          ADD
        </Button>
      </Grid>
    </div>
  );
};

export default UserForm;
