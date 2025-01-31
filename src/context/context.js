"use client";

import React from "react";
import { createContext, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
// import { useAuthContext } from "@/hooks/useAuthContext";

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [currProperty, setCurrProperty] = useState();

  // bool
  const [filterModal, setFilterModal] = useState(false);
  const [profileModal, setProfileModal] = useState(false);

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
  const [similarListing, setSimilarListing] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [profile, setProfile] = useState();

  // constants
  const searchParams = useSearchParams();
  const router = useRouter();
  // const { user } = useAuthContext();

  // ------------- USE EFFECTS --------------

  // verify token
  useEffect(() => {
    const verifier = async () => {
      const res = await fetch("http://localhost:7000/v1/api/verifyToken", {
        credentials: "include",
      });

      const result = await res.json();

      if (res.ok) {
        setIsAuthorized(result.status);
      }
    };

    verifier();
  }, []);

  //get properties
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

  // get filters
  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch("http://localhost:7000/app/api/filters");
      const result = await res.json();
      setCategories(result[0].categories);
    };

    fetcher();
  }, []);

  // get bookmarks
  useEffect(() => {
    if (!isAuthorized) return;

    const ids = localStorage.getItem("bookmarks");
    if (!ids) return;

    const getter = async () => {
      const res = await fetch(
        `http://localhost:7000/v1/api/bookmarks?${searchParams.toString()}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      const result = await res.json();

      setBookmarks(result || []);
    };

    getter();
  }, [isAuthorized, searchParams]);

  // get profile
  useEffect(() => {
    if (!isAuthorized) return;
    const getter = async () => {
      const res = await fetch("http://localhost:7000/v1/api/profile", {
        // headers: {
        //   authorization: `Bearer ${user.token}`,
        // },
        credentials: "include",
      });

      const result = await res.json();

      if (res.ok) {
        setProfile(result.profile);
      }
    };

    getter();
  }, [isAuthorized]);

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

  const addToBookmarks = async (e, _id) => {
    e.stopPropagation();

    const prev = JSON.parse(localStorage.getItem("bookmarks")) || [];
    const newBookmarks = [...prev, _id];
    localStorage.setItem("bookmarks", JSON.stringify(newBookmarks));

    try {
      const res = await fetch("http://localhost:7000/v1/api/bookmarks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // authorization: `Bearer ${user.token}`,
        },
        credentials: "include",
        body: JSON.stringify({ productId: _id }),
      });

      const result = await res.json();

      if (res.ok) {
        setBookmarks(result.bookmarks.productId);
        alert(result.message);
      }

      if (!res.ok) {
        alert(result.error);
      }
    } catch (error) {
      console.error("Error adding bookmark:", error);
    }
  };

  const updateUsername = async (username) => {
    try {
      const res = await fetch("http://localhost:7000/v1/api/updateUsername", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // authorization: `Bearer ${user.token}`,
        },
        credentials: "include",
        body: JSON.stringify({ username }),
      });

      const result = await res.json();

      if (res.ok) {
        setProfile((prev) => ({ ...prev, username: result.username }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updatePhone = async (phone) => {
    try {
      const res = await fetch("http://localhost:7000/v1/api/updatePhone", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // authorization: `Bearer ${user.token}`,
        },
        credentials: "include",
        body: JSON.stringify({ phone }),
      });

      const result = await res.json();

      if (res.ok) {
        setProfile((prev) => ({ ...prev, phoneNumber: result.phoneNumber }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateAddress = async (address) => {
    try {
      const res = await fetch("http://localhost:7000/v1/api/updateAddress", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // authorization: `Bearer ${user.token}`,
        },
        credentials: "include",
        body: JSON.stringify({ address }),
      });

      const result = await res.json();

      if (res.ok) {
        setProfile((prev) => ({ ...prev, address: result.address }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateEmail = async (email) => {
    try {
      const res = await fetch("http://localhost:7000/v1/api/updateEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email }),
      });

      const result = await res.json();

      if (res.ok) {
        setProfile((prev) => ({ ...prev, email: result.email }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updatePassword = async (currentPassword, newPassword) => {
    try {
      const res = await fetch("http://localhost:7000/v1/api/updatePassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ currentPassword, newPassword }),
      });

      const result = await res.json();

      if (res.ok) {
        setProfile((prev) => ({ ...prev, password: result.password }));
        alert("Password changed successfully!!!");
      }
      if (!res.ok) {
        alert(result.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBookmark = async (productId) => {
    try {
      const res = await fetch(
        `http://localhost:7000/v1/api/bookmarks?productId=${productId}`,
        {
          method: "DELETE",
          // headers: {
          //   authorization: `Bearer ${user.token}`,
          // },
          credentials: "include",
        }
      );

      const result = await res.json();

      if (res.ok) {
        setBookmarks((prev) => prev.filter((prop) => prop._id !== productId));
      }

      if (!res.ok) {
        throw new Error(result.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleBookmarkSort = (type) => {
    const setParams = new URLSearchParams(searchParams);
    setParams.set("sortBy", type);
    router.push(`/page/dash/bookmarks?${setParams.toString()}`, undefined, {
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
        similarListing,
        setSimilarListing,
        bookmarks,
        setBookmarks,
        addToBookmarks,
        profileModal,
        setProfileModal,
        profile,
        setProfile,
        updateUsername,
        updatePhone,
        updateAddress,
        deleteBookmark,
        handleBookmarkSort,
        isAuthorized,
        setIsAuthorized,
        updateEmail,
        updatePassword,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
