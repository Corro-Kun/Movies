import Banner from "@/components/pages/app/Banner";
import LoginWindow from "@/components/layout/LoginWindow";
import Movies from "@/components/pages/app/Movies";
import Loader from "@/components/ui/Loader";
import { getBanner} from "@/utils/movies.api";
import { Suspense } from "react";

export default async function Home() {
  const movie = await getBanner();

  return (
    <div>
      <Banner movie={movie} />
      <Suspense fallback={<Loader />}>
        <Movies />
      </Suspense>
    </div>
  );
}
