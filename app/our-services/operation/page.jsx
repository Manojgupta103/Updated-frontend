import Footer from "@/components/Footer";
import Head from "@/components/Head";
import Header from "@/components/Header";
import React from "react";

const OperationPage = () => {
  return (
    <>
      <Head />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Operation Center</h1>
        <p>
          Detailed information about our operation services will be available
          here.
        </p>
      </div>
    </>
  );
};

export default OperationPage;
