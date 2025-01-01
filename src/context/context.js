"use client";

import React from "react";
import { createContext, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [currProperty, setCurrProperty] = useState();
  // bool
  const [filterModal, setFilterModal] = useState(false);

  //auth-form
  const [signupField, setSignupField] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [loginField, setLoginField] = useState({
    email: "",
    password: "",
  });
  const [resetField, setResetField] = useState({
    createPassword: "",
    confirmPassword: "",
  });

  // other forms
  const [addProp, setAddProp] = useState({
    name: "",
    image: [],
    price: 0,
    category: "",
    type: "",
    location: "",
    tags: [],
    description: "",
  });

  //search form
  const [search, setSearch] = useState("");

  const [properties, setProperties] = useState([]);
  const [range, setRange] = useState({ min: 0, max: 0 });
  const [categories, setCategories] = useState();
  const [totalPages, setTotalPages] = useState(0);

  // constants
  const searchParams = useSearchParams();
  const router = useRouter();

  // ------------- USE EFFECTS --------------

  useEffect(() => {
    const fetcher = async () => {
      {
        try {
          const res = await fetch(
            `http://localhost:7000/app/api/getProperties?${searchParams.toString()}`
          );
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          const result = await res.json();
          setProperties(result.data);
          setTotalPages(result.totalPages);
        } catch (error) {
          console.error("Fetching error:", error);
        }
      }
    };

    fetcher();
  }, [searchParams]);

  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch("http://localhost:7000/app/api/filters");
      const result = await res.json();
      setCategories(result[0].categories);
    };

    fetcher();
  }, []);

  //-------------- HANDLERS ------------------

  // This is a tempoary handler and will be removed later on
  const addProperty = async () => {
    try {
      const res = await fetch("http://localhost:7000/app/api/addProperty", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(addProp),
      });

      if (!res.ok) {
        throw new Error("Failed to add property");
      }

      const result = await res.json();
      console.log(result);
      setAddProp({
        name: "",
        image: [],
        price: 0,
        category: "",
        type: "",
        location: "",
        tags: [],
        description: "",
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleSubmitSearch = () => {
    const setParams = new URLSearchParams(searchParams);
    setParams.set("query", search);
    router.push(`/page/listings?${setParams.toString()}`, undefined, {
      shallow: true,
    });
  };

  const handlePriceRange = () => {
    const setParams = new URLSearchParams(searchParams);
    setParams.set("priceRange", `${range.min},${range.max}`);
    router.push(`/page/listings?${setParams.toString()}`, undefined, {
      shallow: true,
    });
  };

  const handleType = (type) => {
    const setParams = new URLSearchParams(searchParams);
    type === "All" ? setParams.delete("type") : setParams.set("type", type);
    router.push(`/page/listings?${setParams.toString()}`, undefined, {
      shallow: true,
    });
  };

  const handleSort = (type) => {
    const setParams = new URLSearchParams(searchParams);
    setParams.set("sortBy", type);
    router.push(`/page/listings?${setParams.toString()}`, undefined, {
      shallow: true,
    });
  };

  const handlePage = (page) => {
    const setParams = new URLSearchParams(searchParams);
    setParams.set("page", page);
    router.push(`/page/listings?${setParams.toString()}`, undefined, {
      shallow: true,
    });
  };

  return (
    <AppContext.Provider
      value={{
        signupField,
        setSignupField,
        loginField,
        setLoginField,
        resetField,
        setResetField,
        filterModal,
        setFilterModal,
        addProp,
        setAddProp,
        addProperty,
        properties,
        setProperties,
        currProperty,
        setCurrProperty,
        search,
        setSearch,
        handleSubmitSearch,
        range,
        setRange,
        handlePriceRange,
        categories,
        searchParams,
        router,
        handleType,
        handleSort,
        handlePage,
        totalPages,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
