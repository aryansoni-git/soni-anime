# sonianime (˶˃ᆺ˂˶)

Soni-Anime is a cutting-edge anime website developed using Next.js 14 and Tailwind CSS, offering seamless anime movie downloads and a fully responsive design for a smooth user experience across all devices. The project is deployed on Vercel and features an interactive contact form powered by Web3Forms API.

![cover](/public/soni-anime-cover.png)

You can try the game live [here](https://soni-anime.vercel.app/)!

## Table of Contents

## 🗂️ Table of Contents
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation Guide](#️-installation-guide)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)
- [Contributing](#️-contributing)
- [Contact Information](#-contact)
- [License](#-license)

## ✨ Features
- **Next.js 14**: Fast, SEO-friendly React framework.
- **Anime Movie Downloads**: One-click downloads for your favorite anime movies.
- **Responsive Design**: Ensures a consistent user experience across desktops, tablets, and mobile devices.
- **Contact Form**: Integrated with Web3Forms API for secure and serverless form submissions.
- **Tailwind CSS**: Easy-to-maintain, utility-first styling for a clean UI.
- **Vercel Deployment**: Continuous integration and deployment with Vercel, ensuring fast performance.
- **Animations & Hover Effects**: Interactive animations for better user engagement.

## 🛠 Tech Stack
- **Next.js 14**: For rendering and routing, enabling fast performance and SEO optimization.
- **React.js**: Component-based structure for building the dynamic interface.
- **Tailwind CSS**: Responsive and utility-first styling for a modern UI.
- **Web3Forms API**: Serverless solution for handling form submissions.
- **Vercel**: Platform for frontend deployment and hosting.
- **PostCSS & ESLint**: Code quality and pre-processing tools for optimized styling and linting.

## 📁 Project Structure
```
src/
 └── app/
     ├── contact/
     │   ├── components/
     │   │   ├── ContactForm.jsx
     │   │   ├── ContactInfo.jsx
     │   │   ├── FormBottom.jsx
     │   │   ├── FormTop.jsx
     │   ├── page.jsx
     ├── components/
     │   ├── AnimeCard.jsx
     │   ├── AnimeDetails.jsx
     │   ├── Banner.jsx
     │   ├── Footer.jsx
     │   ├── HeroSection.jsx
     │   ├── HoveredAnimeCard.jsx
     │   ├── MainSection.jsx
     │   ├── Navbar.jsx
     │   ├── PlayButton.jsx
     │   ├── SectionContainer.jsx
     │   ├── SocialLinks.jsx
     │   ├── useScreenSize.jsx
     ├── layout.js
     ├── page.js
 └── data/
     ├── animeData.json
```

This project follows a clean and organized structure:

- **Contact Components**: All form-related components are housed in `/app/contact/`.
- **Reusable UI Components**: Modular components like AnimeCard, Navbar, and Footer are in `/components/`.
- **Anime Data**: Static data for anime listings is kept in `/data/animeData.json` for quick retrieval.

## 🛠️ Installation Guide

### Step 1: Clone the Repository
```bash
git clone https://github.com/aryansoni-git/sonianime.git
cd sonianime
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Run the Development Server
```bash
npm run dev
```
Go to http://localhost:3000 to view the app.

### Step 4: Build for Production
```bash
npm run build
```

### Step 5: Deploy on Vercel
```bash
vercel deploy
```

## 🛠 Environment Variables
To connect Web3Forms API and other services, configure the `.env.local` file:

```makefile
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=<your_web3forms_access_key>
```

## 🚀 Deployment
Soni-Anime is deployed on Vercel, leveraging its fast deployment pipeline, caching, and automatic scaling. You can deploy your own fork by connecting the repository to Vercel.

```bash
vercel deploy
```

## 🖇️ Contributing
Contributions are welcome! Follow the steps below to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add a new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

For large features, please open an issue to discuss the feature first.

## Contact

If you have any questions or suggestions regarding this project, feel free to contact me:

| Platform | Link |
| --- | --- |
| Email | [<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg" width="50" height="50">](mailto:aryansoni.work@gmail.com) |
| GitHub | [<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" width="50" height="50">](https://github.com/aryansoni-git) |
| LinkedIn | [<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" width="50" height="50">](https://www.linkedin.com/in/aryansoni-work) |
| Instagram | [nocs_developer](https://www.instagram.com/nocs_developer/) |

## Acknowledgements
- Special thanks to Google Inter fonts.

## 📝 License
This project is licensed under the MIT License. You can freely use, modify, and distribute this code under the terms of the license.

## ⭐ Want to Support?
If you find this project helpful, please consider giving it a star on GitHub to help it grow!
