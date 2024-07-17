"use client";
import React, { useState } from "react";
import { AddEmployeeDialog } from "./Dialog";

const AddEmployee = () => {
  const [open, setOpen] = useState();

  return <AddEmployeeDialog />;
};

export default AddEmployee;
