import Breadcrumbs from "@/components/Breadcrumbs";
import Container from "@/components/Container";
import ProfileLinks from "../account/components/ProfileLinks";
import { IUser } from "../types";

interface ILayoutProps {
  children: React.ReactNode;
  title: string;
  user: IUser;
}

export default function SharedLayout({ children, title, user }: ILayoutProps) {
  const breadLinks = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "My Account",
      link: "/profile",
    },
  ];
  return (
    <div>
      <Container>
        <div className="px-20">
          <Breadcrumbs items={breadLinks} />
        </div>
        <div className="text-3xl mb-8 font-bold text-center">{title}</div>
        <div className="grid grid-cols-3 gap-8 items-start">
          <div className="col-span-1 p-6 rounded bg-slate-100 shadow-md">
            <ProfileLinks user={user} />
          </div>
          <div className="col-span-2 px-4">
            <>{children}</>
          </div>
        </div>
      </Container>
    </div>
  );
}
