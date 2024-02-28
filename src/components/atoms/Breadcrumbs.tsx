import React from "react";
import { Link } from "react-router-dom";

export interface ICrumb {
  name: string;
  link?: "/";
}

interface IBreadcrumbProps {
  crumbs?: ICrumb[];
}

const Breadcrumbs: React.FunctionComponent<IBreadcrumbProps> = ({
  crumbs = [],
}: IBreadcrumbProps) => {
  return (
    <div className="breadcrumbs text-[1rem]">
      <ul>
        {crumbs.map((crumb, idx) => (
          <li key={idx} className="font-medium">
            {crumb.link && idx < crumbs.length ? (
              <Link className="text-primary" to={crumb.link}>
                {crumb.name}
              </Link>
            ) : (
              <div className="text-secondary/70">{crumb.name}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
