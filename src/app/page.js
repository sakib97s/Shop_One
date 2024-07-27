import Banner from "@/components/Banner";
import CustomerReview from "@/components/CustomerReview";
import DressStyle from "@/components/DressStyle";
import NewArrivals from "@/components/NewArrivals";
import TopSelling from "@/components/TopSelling";



export default function Home() {
  return (
    <>
      <Banner/>
      <NewArrivals/>
      <TopSelling/>
      <DressStyle/>
      <CustomerReview/>
    </>
  );
}
