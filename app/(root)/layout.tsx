

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <div>
        SIDEBAR
        {children}
      </div>
    </html>
  );
}