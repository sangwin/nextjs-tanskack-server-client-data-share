# 🌐 Next.js + TanStack Query (App Router) with SSR and Hydration

## Sangwin Gawande - https://sangw.in

A working example of integrating **TanStack Query** (React Query) with **Next.js App Router**, showcasing how to:

- Server-side fetch data (`API route` or `fetch`)
- Use `dehydrate`/`HydrationBoundary` to hydrate cache
- Use the same data in a client-side rendered component
- Prevent hydration mismatches

---

## ⚙️ Tech Stack

- [Next.js 14+](https://nextjs.org/) (App Router)
- [TanStack Query](https://tanstack.com/query/latest)
- [Axios](https://axios-http.com/)
- [React Query Devtools](https://tanstack.com/query/latest/docs/devtools) (optional)

---

## 📂 Features

- ✅ Server-side data fetching with `prefetchQuery()`
- ✅ Safe hydration using `dehydrate` and `HydrationBoundary`
- ✅ Shared QueryClient setup
- ✅ Avoids hydration mismatches (`staleTime: Infinity`)
- ✅ Local `/api/data` route returns timestamp

---

## 🚀 Getting Started

```bash
npm install
# and
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
