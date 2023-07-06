import Customers from "@/components/customComponents/Customers";
import Details from "@/components/customComponents/Details";
import Footer from "@/components/customComponents/Footer";
import Hero from "@/components/customComponents/Hero";
import Pitch from "@/components/customComponents/Pitch";
import Products from "@/components/customComponents/Products";

export default function Home() {
  return (
    <div>
      <Hero />
      <Customers />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <Details />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <Products />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <Pitch />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <Footer />
    </div>
  );
}
