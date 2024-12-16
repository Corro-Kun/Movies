## Movies

A web application to search for movie information, ratings and trailers.

## Tech Stack

[![My framwork](https://skillicons.dev/icons?i=next,nest,prisma,sqlite)]()

**Client:** Next.js

**Server:** Nestjs

**Database:** prisma, Sqlite

## Run Locally

Node version 18 or higher is required installed

Clone the project

```bash
  git clone https://github.com/Corro-Kun/Movies.git
```

Go to the project directory

```bash
  cd Movies
```

Install dependencies

```bash
  # linux
  ./server.sh i all
  # windows with git bash or cmd
  .\server.bat i all
  # windows with powershell
  .\server.ps1 i all
```

Create a .env file in the backend folder with the following content

```env
  API_KEY=000
  KEY=000

  DATABASE_URL="file:./dev.db"
```

Start the app

```bash
  # linux
  ./server.sh run all
  # windows with git bash or cmd
  .\server.bat run all
  # windows with powershell
  .\server.ps1 run all
```

## Screenshots

<img src="https://res.cloudinary.com/daqrkk4sr/image/upload/f_auto,q_auto/gsvozm686zeqloen59ws" alt="App Screenshot">
<br>
<br>
<img src="https://res.cloudinary.com/daqrkk4sr/image/upload/f_auto,q_auto/n22hd27epqwmbxmv6zej" alt="App Screenshot">
<br>
<br>
<img src="https://res.cloudinary.com/daqrkk4sr/image/upload/f_auto,q_auto/g4uru1vhsoxbs4iwu9f7" alt="App Screenshot">

