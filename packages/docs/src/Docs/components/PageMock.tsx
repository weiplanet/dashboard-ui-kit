import * as React from "react";
import classnames from "classnames";
import cls from "./docspage.module.scss";

type PageMockProps = JSX.IntrinsicElements["div"] & {
  white?: boolean;
};

export const PageMock = (props: PageMockProps) => {
  return (
    <div
      className={classnames(cls["page-mock"], {
        [cls.white]: props.white
      })}
      {...props}
    />
  );
};

PageMock.displayName = "PageMock";
