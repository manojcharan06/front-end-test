# 🌿 FloraVision - Premium Plant E-Commerce

**FloraVision** is a high-end, responsive e-commerce storefront designed for a modern greenery shopping experience. This project showcases advanced UI/UX techniques using React and Tailwind CSS, focusing on a "Glassmorphism" aesthetic and custom SVG geometry.

---

## ✨ Key Features

*   **Custom Glassmorphism UI:** Advanced use of `clip-path` and backdrop filters to create unique, frosted-glass product cards.
*   **3D "Pop-Out" Effect:** Strategic layering and absolute positioning allow plant assets to break the boundaries of their containers for a premium look.
*   **Fully Responsive Layout:** Mobile-first architecture that reflows from a 3-column desktop grid to a single-column mobile stack.
*   **Dynamic Navigation:** A responsive Navbar with a functional mobile toggle menu and smooth transitions.
*   **Curated Sections:** Includes Hero, Trending Plants, Top Selling Grid, Customer Reviews, and a "Best O2" feature section.

---

## 🛠️ Tech Stack

*   **Frontend:** React.js
*   **Styling:** Tailwind CSS
*   **Icons:** React Icons (`ri`, `hi`, `md`, `io5`)
*   **Routing:** React Router DOM
*   **Design Patterns:** Glassmorphism, SVG Pathing, Mobile-First Design

---

## 📐 Technical Highlights

### 1. Advanced Clip-Path Geometry
One of the core technical challenges was creating the notched card design. Instead of standard rectangles, I implemented custom quadratic Bézier curves via CSS `clip-path` to allow images to "sit" into the cards. This required precise coordinate mapping to ensure the "dip" in the card perfectly framed the plant pots.

### 2. Mobile-First Responsiveness
The site handles different screen sizes using Tailwind's breakpoint system:
*   **Desktop (1024px+):** Utilizes `grid-cols-3` and `flex-row-reverse` for alternating sections.
*   **Mobile (<768px):** Automatically scales down typography (e.g., Hero text from `8xl` to `5xl`), centers content for better thumb-reach, and collapses navigation into a functional hamburger menu.

---

## 📂 Project Structure

```text
src/
 ├── assets/             # Project images (Plants, Users, Backgrounds)
 ├── components/
 │    ├── layout/        # Navbar, Container
 │    ├── home/          # Hero, Trending, ProductGrid, Footer, etc.
 │    └── ui/            # Reusable UI components (Buttons, GlassCarrd)
 ├── data/               # Product and review JSON data
 ├── App.js              # Main entry point
 └── index.css           # Global styles and Tailwind imports

 ```

---

## ⚙️ Setup
1. Clone the repo.
2. Run `npm install`.
3. Run `npm run dev` to start the local server.

---

## 📝 License
Distributed under the MIT License.

---

## 👤 Contact
**Manoj Charan** - manojcharan1525@gmail.com