

## 📝 Project Overview

A responsive admin dashboard for a social media application. The dashboard includes essential features such as **user management**, **content moderation**, and **analytics** to give admins control over user data and platform activities.

🔗 **Admin Dashboard API**: `https://api.socialverseapp.com/admin/dashboard`

---

## 🌟 Key Features

1. 👤 User Management: Easily view & track activity, referrals, and identify active users or creators.

2. 📝 Content Moderation: Monitor daily views, shares, comments, and post exits.

3. 📊 Analytics: Visualize user activity and engagement metrics daily/monthly with charts; analyze views, likes, shares, and private messages.

5. 📈 Data Visualization: Responsive charts (Chart.js/Recharts) provide insights into user engagement and content performance.

---

## 🛠️ Tech Stack

- **Frontend**: Next.js
- **Styling**: Tailwind CSS 
- **Analytics Visualization**: Chart.js 

---

Steps
Clone the repository:
```bash
git clone https://github.com/souhirwalha03/nextjs-Dashboard-.git
cd nextjs-Dashboard
```
Install dependencies:
```bash
npm install
```
Run the development server:
```bash

npm run dev
```
***Project Structure***


.
├── public/             
├── src/              
│   ├── app/     
│      ├── ContentModeration
│      │   ├── components
│      │   │   └──StatisticsClientComponent.tsx
│      │   └──page.tsx
│      ├── engagement
│      │   ├── components
│      │   │   └──StatisticsClientComponent.tsx
│      │   └──page.tsx
│      ├── UserManagement
│      │   ├── components
│      │   │   └──StatisticsClientComponent.tsx
│      │   └──page.tsx
│      ├── globals.css
│      ├── layout.tsx
│      └── page.tsx
│   └── components/
│      └── AnalyticsChart.tsx
├── components/          
├── .env.local
└── package.json        

   <img width="1440" alt="Screenshot 2024-12-05 at 20 38 33" src="https://github.com/user-attachments/assets/aa817cad-a3d6-4e20-95f7-a164f50d285f">

<img width="1440" alt="Screenshot 2024-12-05 at 20 35 02" src="https://github.com/user-attachments/assets/985cae37-7e8f-474b-93be-446d90e93caf">
<img width="1440" alt="Screenshot 2024-12-05 at 20 35 02" src="https://github.com/user-attachments/assets/5b58c485-e34b-411d-9971-6d4b013b72a8">
<img width="1440" alt="Screenshot 2024-12-05 at 20 35 51" src="https://github.com/user-attachments/assets/e90a73f6-2774-4f76-a476-b9a40384b17c">
<img width="1440" alt="Screenshot 2024-12-05 at 20 36 05" src="https://github.com/user-attachments/assets/95a025e5-00a3-4922-94ea-2712cbd6c94d">


