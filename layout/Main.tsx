// import { LayoutProps } from 'models/common';
import * as React from "react";
import { LayoutProps } from "@/models/common";
import Link from "next/link";

export interface MainLayoutProps {}

export function MainLayout({ children }: LayoutProps) {
  return (
    <div>
      <h1>Main Layout</h1>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <div>{children}</div>
    </div>
  );
}
