import React from "react";
import Calculator from "../components/Calculator";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CalculatorProvider } from "../context/CalculatorContext";

const CalculatorPage: React.FC = () => (
  <>
    <Header />
    <main style={{ padding: "2em" }}>
      <CalculatorProvider>
        <Calculator />
      </CalculatorProvider>
    </main>
    <Footer />
  </>
);

export default CalculatorPage;