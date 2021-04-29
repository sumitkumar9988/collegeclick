import React from "react";
import Card from "./Card";
import data from "./../data/data.json";
function Index() {
  return (
    <>
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
        {data.books.map((item) => (
          <div className="">
            <Card name={item.book} link={item.link} image={item.image} />
          </div>
        ))}
      </div>
    </>
  );
}
export default Index;
