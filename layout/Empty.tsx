// import { LayoutProps } from 'models/common';
import * as React from "react";
import { LayoutProps } from "@/models/common";
import Link from "next/link";

export interface EmptyLayoutProps {}

export function EmptyLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
