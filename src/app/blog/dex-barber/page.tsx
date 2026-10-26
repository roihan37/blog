import { pageMetadata } from "../../lib/seo";
import DexBarberPage from "../../components/DexBarberPage";

export const metadata = pageMetadata("Dex Barber — Full-stack Mobile App Case Study", "How Roihan Salsabila and his team built Dex Barber: a full-stack mobile barber booking app, from product challenges to workflow and final results.", "/blog/dex-barber");

export default function IndexPage() {



  return (
    <DexBarberPage />
  );
}