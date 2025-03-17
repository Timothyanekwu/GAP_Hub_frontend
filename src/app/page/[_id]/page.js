"use client";

import Header2 from "@/pageComponents/header/header2";
import React from "react";
import ImageSection from "./imageSection";
import Details from "./details";
import Actions from "./actions";
import Comment from "./comment";
import SimilarListing from "./similarListing";
import Footer from "@/pageComponents/footer";
import Detail2 from "./detail2";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "@/context/context";

const Property = () => {
  const [comments, setComments] = useState([]);
  const {
    properties,
    currProperty,
    setCurrProperty,
    similarListing,
    setSimilarListing,
    addToBookmarks,
    isAuthorized,
  } = useContext(AppContext);
  const { _id } = useParams();

  // fetch similar listings
  useEffect(() => {
    if (properties && _id) {
      const foundProduct = properties.find((item) => item._id === _id);

      // get similar listings
      const fetcher = async () => {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/app/api/similarListings?productId=${_id}`
        );

        const result = res.ok && (await res.json());
        !res.ok && console.log(await res.json());

        setSimilarListing(result.products);
      };

      if (foundProduct) {
        setCurrProperty(foundProduct);
        fetcher();
      } else {
        console.warn("Product not found!");
      }
    }
  }, [properties, _id]);

  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/app/api/comment?product_id=${_id}`
      );
      const result = await res.json();
      console.log(result);

      setComments(result.comments);
    };

    fetcher();
  }, [_id]);

  return (
    <div>
      <div className="sticky top-0 z-40 w-full"></div>
      <div className="w-full md:max-w-[640px] lg:max-w-[1200px] md:mx-auto xl:px-16 px-6">
        <div className="justify-center mt-5 xl:mt-10 xl:mb-20 mb-8 md:grid grid-col-1 lg:grid-cols-5 md:gap-x-3">
          <ImageSection currProperty={currProperty} />
          {/* ---------------- */}
          <div className="col-span-2 mt-4 lg:mt-0">
            <Details
              currProperty={currProperty}
              addToBookmarks={(e) => addToBookmarks(e, _id)}
            />
            <Detail2 currProperty={currProperty} />
          </div>
        </div>

        <div className="justify-center lg:grid lg:grid-cols-5 lg:gap-10 xl:mt-6 mt-16 mb-20 bg-white xl:space-x-8 p-6 xl:p-16 border">
          <Comment
            comments={comments}
            _id={_id}
            setComments={setComments}
            isAuthorized={isAuthorized}
          />
          <Actions currProperty={currProperty} />
        </div>

        <SimilarListing similarListing={similarListing} />
      </div>
      <Footer />
    </div>
  );
};

export default Property;
