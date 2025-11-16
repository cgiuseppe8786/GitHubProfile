# 🧑‍💻 GitHub Profile Search

Applicazione Front-end realizzata in **React + TypeScript** con **Vite**, che permette di cercare utenti GitHub e visualizzare in modo chiaro e fedele al design i dati principali del profilo insieme alle repository più recenti.

L’interfaccia riproduce fedelmente il mockup fornito, con particolare attenzione a:
- tipografia Be Vietnam Pro
- palette di colori
- componenti riutilizzabili
- layout responsive (mobile / tablet / desktop)
- animazioni e ombre identiche al design originale

---

## 🎯 Obiettivi del progetto

- Creare una pagina di ricerca utenti GitHub con UI moderna.
- Implementare una **search bar con debounce** per evitare chiamate eccessive all’API.
- Visualizzare immagine profilo, bio, posizione, followers e following.
- Mostrare le repository più aggiornate con card complete di:
  - titolo
  - descrizione
  - licenza
  - numero stelle
  - fork
  - ultima modifica
- Riprodurre un layout identico alla proposta grafica.
- Garantire un comportamento responsive su tutte le risoluzioni.

---

## ⚙️ Funzionalità principali

### 🔍 Ricerca utenti GitHub
- Digitando un username, l’app effettua una ricerca automatica con un debounce di 500ms.
- La ricerca avviene tramite le API pubbliche GitHub REST.

### 👤 Header profilo
- Avatar con ombra e bordo identico al mockup.
- Pill “Followers”, “Following”, “Location” con stile dedicato.
- Nome e biografia perfettamente allineati secondo il design.

### 📦 Repository List
Ogni card mostra:
- titolo repo
- descrizione
- badge licenza
- icona e count delle stelle ⭐️
- icona e count dei fork
- ultima modifica
- apertura repo in una nuova tab

### ⚡ Performance
- Debouncing input → nessun lag mentre si scrive
- Chiamate API ottimizzate e ordinate
- Rendering fluido e componenti riutilizzabili

---

## 🧱 Tecnologie utilizzate

- **React 18**
- **TypeScript**
- **Vite**
- **CSS puro** con variabili e gradienti
- **GitHub REST API**
- **Google Fonts (Be Vietnam Pro)**

---

## 📁 Struttura del progetto

```
src/
│ App.tsx
│ styles.css
├─ assets/
│   ├─ hero-image-github-profile.jpg
│   ├─ hero-image-github-profile-sm.jpg
│   ├─ Search.svg
│   ├─ Star.svg
│   ├─ Nesting.svg
│   ├─ Chield_alt.svg
├─ components/
│   ├─ SearchBar.tsx
│   ├─ ProfileHeader.tsx
│   ├─ RepoCard.tsx
│   ├─ RepoList.tsx
├─ services/
│   └─ github.ts
└─ types/
    └─ types.ts
```

---

## 🚀 Demo
👉 **Live Preview:** [https://cgiuseppe8786.github.io/GitHubProfile/](https://cgiuseppe8786.github.io/GitHubProfile/)

---

## 💻 Codice sorgente
📂 **Repository:** [https://github.com/cgiuseppe8786/GitHubProfile](https://github.com/cgiuseppe8786/GitHubProfile)

---

## 🧰 Tecnologie utilizzate
- **React + TypeScript** → per componenti modulari e tipizzati  
- **Vite** → per sviluppo rapido e build ottimizzata  
- **CSS3 + variabili CSS** → per colori, media query e personalizzazione del tema  
- **GitHub Actions** → per CI/CD e deploy automatico  
- **GitHub Pages** → hosting statico del progetto  

---

## 🧾 Licenza
Rilasciato sotto licenza **MIT**.  