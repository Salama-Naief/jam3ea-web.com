import Breadcrumbs from "@/components/Breadcrumbs";
import Container from "@/components/Container";
import ProfileLinks from "../account/components/ProfileLinks";
import { IUser } from "../types";
import { Divider } from "@mantine/core";
import { translate } from "@/lib/utils/serverHelpers";

interface ILayoutProps {
  children: React.ReactNode;
  title: string;
  user: IUser;
  dict: any;
}

export default function SharedLayout({
  children,
  title,
  user,
  dict,
}: ILayoutProps) {
  const breadLinks = [
    {
      label: translate(dict, dict.home),
      link: "/",
    },
    {
      label: translate(dict, dict.my_account),
      link: "/profile",
    },
  ];
  return (
    <div>
      <Container>
        <div className="px-6 md:px-16 lg:px-20">
          <Breadcrumbs items={breadLinks} />
        </div>
        <div className="text-xl md:text-2xl lg:text-3xl mb-8 font-bold text-center">
          {title}
        </div>
        <div className="lg:grid lg:grid-cols-3 md:gap-8 items-start">
          <div className="col-span-1 p-3 md:p-4 lg:p-6 mb-4 rounded bg-slate-100 shadow-md">
            <ProfileLinks dict={dict} user={user} />
          </div>
          <div className="col-span-2 px-0 md:px-4">
            <Divider my={"xl"} color="gray.5" className="lg:hidden" />
            <>{children}</>
          </div>
        </div>
      </Container>
    </div>
  );
}
