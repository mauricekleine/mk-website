import classNames from "classnames";
import { ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[];
  odd?: boolean;
};

const Section = ({ children, odd }: Props) => (
  <div
    className={classNames("px-8 py-16 rounded-lg sm:px-16", {
      "bg-gray-100": !odd,
      "bg-white": odd,
    })}
  >
    <section className={classNames("mx-auto sm:w-4/6 md:w-3/5")}>
      {children}
    </section>
  </div>
);

export default Section;
