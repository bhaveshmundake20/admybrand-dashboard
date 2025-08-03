# 📊 ADmyBRAND Insights Dashboard

An AI-powered analytics dashboard built using **Next.js**, **Tailwind CSS**, and **Recharts**, designed to deliver clean, modern data insights with smooth animations, responsive charts, and dark/light mode support.

---

## 🚀 Live Demo

🔗 [Click here to view the live dashboard](https://admybrand-dashboard-beta.vercel.app)

---

## 📦 Features

✅ Responsive layout with modern design  
✅ Reusable Stat Cards for key metrics  
✅ Interactive Line, Bar, and Pie charts  
✅ Smooth animations via `framer-motion`  
✅ Dark/Light mode toggle using `next-themes`  
✅ CSV Export support for user data  
✅ Loading skeletons for better UX  

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS, CSS Modules
- **Charts:** Recharts
- **Icons:** React Icons
- **State Management:** React hooks
- **Animations:** Framer Motion
- **Dark Mode:** `next-themes`

---

## 📁 Project Structure

```bash
├── app/
│   ├── page.tsx           # Dashboard layout
│   ├── layout.tsx         # Root layout with ThemeProvider
│   ├── globals.css        # Global styles and variables
├── components/
│   ├── StatCard.tsx       # Stat card component
│   ├── AnalyticsCharts.tsx # Charts section
│   ├── UserTable.tsx      # Table with CSV export
│   ├── ThemeToggle.tsx    # Light/Dark toggle
│   ├── LoadingSkeleton.tsx # Skeleton loader
├── public/
├── README.md
├── package.json
