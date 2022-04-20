import NextHead from "next/head";

export default function PageTitle({ children }) {
  return (
    <NextHead>
      <title>{children}</title>
    </NextHead>
  );
}
