import { useRouter } from "next/router";
import Link from "next/link";
import { FC } from "react";

export function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

interface ActiveLinkProps {
  className: string;
  activeClassName?: string;
  defaultClassName?: string;
  href: string;
}

const ActiveLink: FC<ActiveLinkProps> = ({
  children,
  className,
  activeClassName,
  defaultClassName,
  href,
}) => {
  const { pathname } = useRouter();

  const activeClass = (href: string) =>
    pathname === href ? activeClassName ?? "" : defaultClassName ?? "";

  return (
    <Link href={href} passHref>
      <a className={classNames(activeClass(href), className)}>{children}</a>
    </Link>
  );
};

export default ActiveLink;
