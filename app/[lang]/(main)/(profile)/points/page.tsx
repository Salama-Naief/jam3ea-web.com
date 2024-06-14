import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import PointsCards from "./components/PointsCards";
import { Locale } from "../../../../../i18n-config";
import { getDictionary } from "@/lib/utils/dictionary";
import { translate } from "@/lib/utils/serverHelpers";
import apiHandler from "@/lib/utils/apiHandler";
import { IUser } from "../types";
import SharedLayout from "../components/SharedLayout";
import PointsTabs from "./components/PointsTabs";
import { IPointsHistory } from "./types";

export default async function PointsPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);
  const user: IUser = await apiHandler(
    "/profile",
    "GET",
    undefined,
    true,
    false
  );
  const points: IPointsHistory = await apiHandler(
    "/profile/points",
    "GET",
    undefined,
    true,
    false
  );

  return (
    <>
      <SharedLayout title={`My points (${user ? user.points : 0})`} user={user}>
        <PointsTabs points={points ? points.data : []} />
      </SharedLayout>
    </>
  );
}
