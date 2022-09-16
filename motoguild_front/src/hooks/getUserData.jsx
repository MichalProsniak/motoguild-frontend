import React from "react";

const getRoutes(currentPage, itemsPerPage) {
    try {
      const res = await fetch(
        `https://localhost:3333/api/routes?page=${currentPage}&itemsperpage=${itemsPerPage}`,
        {
          headers: {
            "Content-type": "application/json",
            Authorization: `bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return res;
    } catch (error) {
      console.log(error);
    }
  }