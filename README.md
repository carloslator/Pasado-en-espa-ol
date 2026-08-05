# Español: Pretérito o Pasado (Luz Spanish Grammar Reference)

An interactive, editorial-grade web application for English speakers learning Spanish past tenses (*Pretérito Indefinido*, *Pretérito Imperfecto*, *Pretérito Perfecto*, *Pluscuamperfecto*). Grounded in Hispanic linguistics research (Montero-Cádiz, Andrés Bello, Reichenbach, RAE NGLE).

---

## 🚀 Online Deployment on GitHub Pages

This project is pre-configured with **GitHub Actions** for automatic deployment to **GitHub Pages**.

### Steps to Host Online on GitHub:

1. **Create a GitHub Repository**:
   - Go to [GitHub New Repository](https://github.new).
   - Name your repository (e.g., `Espanol_preterito_o_pasado`).
   - Keep it Public (or Private with GitHub Pro/Teams).

2. **Push your code to GitHub**:
   In your terminal inside this project directory, run:
   ```bash
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/Espanol_preterito_o_pasado.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - In your GitHub repo, go to **Settings** > **Pages**.
   - Under **Build and deployment** -> **Source**, select **GitHub Actions**.

4. **Access your live app**:
   - The automated workflow in `.github/workflows/deploy.yml` will automatically build and publish your site!
   - Your app will be live at: `https://YOUR_GITHUB_USERNAME.github.io/Espanol_preterito_o_pasado/`

---

## 💻 Running Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)

### Setup & Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Build for production locally:
   ```bash
   npm run build
   ```

---

## 🛠️ Features & Tech Stack

- **React 19 + TypeScript + Vite**
- **Tailwind CSS v4 + Lucide Icons + Motion**
- **Interactive Grammar Matrix**, **Decision Tree Wizard**, **Verb Conjugator**, **Flashcards**, **Quizzes**, and **Annotated Reading Breakdown**.
