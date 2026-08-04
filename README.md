
# Enrin

Enrin is an online platform designed to  discover meaningful opportunities for growth. From jobs and internships to scholarships, courses, and skill development resources, Enrin connects people with the tools they need to build a better future.

problem solve:
Enrin gather all oppurtunities in one place, we believe talent exists everywhere. Enrin can be a useful online platform helps you discover new oppurtunities for a better tomorrow. we have a special cti class for afghan girls helping them stand and get one step closer to their dreams.
---
<img width="1900" height="871" alt="image" src="https://github.com/user-attachments/assets/25ced674-decd-413d-92f8-bafa8632c247" />
---<br>
### live demo link: <br>
https://enrin-aw4zh5q2z-nasrin1.vercel.app/en <br>
--- <br>
### github link: <br>
https://github.com/nasrin-mirzayi <br>
---<br>
### repository link:<br>
https://github.com/nasrin-mirzayi/enrin/tree/main <br>
---

---
## ✨ Features

### Opportunity Management

* real and useful links to apply
* Search/filter by category, title, location, deadline and type
* Save favorite opportunities
* CRUD-> read, delete (confirm modal), update and create (val. hook & zod)
* special cti class --> poxy and validation
* deadline countdown system

### Authentication

* User login / logout system
* Protected routes  ---> Dashboard , edit opportunity
* Session-based authentication
  
  -- protected actions:
* Add new opportunities
* Edit existing opportunities
* Delete opportunities
* Access the dashboard

--cookies:
* app/api/auth/login/route.js ---> create cookies after successfully login
* lib/session ---> handle session/cookie logic
* proxy.ts ---> check the cookie before allowing access
* app/api/auth/me/route.ts ---> read the cookie to know who is logged in
* app/api/auth/logout/route.ts ---> delete cookies
  
### Dashboard
* dynamic data
* Opportunity statistics
* Category overview
* Visual charts
* Recent activity overview

### User Experience

* Responsive design (mobile, tablet, desktop)
* Dark/light mode support
* Modern glass/blur UI style
* Smooth animations
* Mobile-friendly navigation
 * not found, error, loading pages

### layout :
* navbar
* footer
*  metadata
* favicon
* openGraph
*  
  ### template:
  * animations
  * style
  
  ### cti access:
  to get cti access you must fill the form like this:
  * Name = Optional
  * Nationality =Afghanistan
  * Gender = Women
  * Commited to study = Yes
    ---
  ## 🛠 Tech Stack

### Frontend

* Next.js (App Router)
* React
* TypeScript
* Tailwind CSS
* Framer Motion
* Lucide Icons

### Forms & Validation

* React Hook Form
* Zod

### State Management

* Context API
* Local Storage

### Data & API

* Next.js API Routes
* Mock API architecture

### proxy
* Checks authentication cookies on incoming requests
* Protects private pages from unauthorized access
* Redirects unauthenticated users to the login page
* Supports localized routes with next-intl
* Allows public pages to remain accessible
* check for having access to cti page

  
### 🌍 Supported Languages

* English
* Persian
* Korean 

---
## 📂 Project Structure

```
enrin-job-placement/
│
├── app/
│   ├── [locale]/          # Localized pages
│   ├── api/               # API routes
│   └── globals.css
│
├── components/            # Reusable UI components
│
├── context/               # React Context providers
│
├── data/                  # Initial opportunity data
│
├── i18n/                  # Translation configuration
│
├── lib/                   # Validation and utilities
│
├── messages/              # Language files
│
├── public/                # Images and assets
│
└── types/                 # TypeScript types
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/nasrin-mirzayi/Enrin_Job_Placement_Agency.git
```

### 2. Run the development server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

### future improvment:
* server fetching
* OAuth providers (Google, GitHub)
* more authentication
* advance feauture

## 📸 Screenshots
<img width="1920" height="3142" alt="screencapture-localhost-3000-ko-dashboard-2026-08-02-22_27_08" src="https://github.com/user-attachments/assets/862048e8-fe57-468a-b0f9-53528eb9a367" />
---

<img width="1920" height="2061" alt="screencapture-localhost-3000-en-saved-2026-08-02-22_28_12" src="https://github.com/user-attachments/assets/7017f8c3-7d48-40e9-8ad8-86f80b04d30c" />
---

<img width="1920" height="875" alt="screencapture-localhost-3000-en-opportunities-2026-08-02-22_29_59" src="https://github.com/user-attachments/assets/38556f78-d8da-475c-abc7-83ecc63d055d" />
---

<img width="1920" height="1491" alt="screencapture-localhost-3000-en-add-opportunity-2026-08-02-22_25_02" src="https://github.com/user-attachments/assets/c1205ce9-f13f-403e-901e-9a63dbc8df8f" />
---
<img width="1920" height="1972" alt="screencapture-localhost-3000-en-contact-2026-08-02-22_28_54" src="https://github.com/user-attachments/assets/e49198bb-877f-40c8-8f12-1c1787340879" />
---
<img width="1920" height="1491" alt="screencapture-localhost-3000-en-cti-apply-2026-08-02-22_10_34" src="https://github.com/user-attachments/assets/8c6c37d9-8950-4be9-9735-068705a23a27" />

---

<img width="1920" height="2547" alt="screencapture-localhost-3000-en-opportunities-5-2026-08-02-22_29_33" src="https://github.com/user-attachments/assets/e3b98f56-6301-435e-9b56-f169dfcfaa35" />
---
<img width="1920" height="4627" alt="screencapture-localhost-3000-en-cti-2026-08-02-22_24_42" src="https://github.com/user-attachments/assets/b53eb5fc-bde4-4ec5-a10c-9405ce1858dd" />

---
---<img width="510" height="865" alt="screencapture-localhost-3000-ko-login-2026-08-03-00_18_14" src="https://github.com/user-attachments/assets/566d63cf-0db5-4b81-8f64-4e6f29da6245" />

---
<img width="720" height="1520" alt="Screenshot_20260803-091626_Gallery" src="https://github.com/user-attachments/assets/ae315777-b5c1-4512-b1fd-1eb8defa1b79" />


---
challenges and what i've learned:
<br>

this project helped me to understand proxy, authentication, cookies and local storage overall next.js and react in a better way.  from the very beginning when i started building the project, i thought about the overall structure, style and where to put what, while keeping all requirement of assignment. yes it was challenging because it was very close to a real project and to be honest i encountered a lot of problems specially with [locale] cause i had no idea how next behave. practiced for hours even started to watch all videos to keep in mind what we covered due this next.js class and be sure to cover all details.  i am satisfied with the result and glad that i was able to finish it well. agree have lots of problems, or complex codes hope u understand and expect better projects from me, also i try my best to be better than who am i today.
