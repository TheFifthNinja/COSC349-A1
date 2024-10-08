<br />
<p align="center">
    <h1 align="center">Full Stack Containerized Web App</h1>
    <h6 align="center">September 2024 - Daniel West & Kevin Albert</h6>
    <p align="center">
        Using virtualization to effect portable building and deployment of software applications
    </p>
</p>

___

## Overview 
[![GitHub license](https://img.shields.io/badge/license-MIT-green)](LICENSE)
![GitHub issues](https://img.shields.io/github/issues/TheFifthNinja/PropertySleeze)
![GitHub pull requests](https://img.shields.io/github/issues-pr/TheFifthNinja/PropertySleeze)
[![CI - Build and Test](https://github.com/TheFifthNinja/PropertySleeze/actions/workflows/frontend.yml/badge.svg)](https://github.com/TheFifthNinja/PropertySleeze/actions/workflows/frontend.yml)

This project leverages virtualization technologies to create and list properties and will display them to be rented by others. The application, called PropertySleeze, is developed to assist the everyday man meet their needs.

Deployed across three distinct virtual machines (VMs), PropertySleeze highlights the advantages of distributed systems and cloud-compatible development practices.

## Built With

* **Frontend:** [React.js](https://reactjs.org) **&** [Tailwind CSS](https://tailwindcss.com)
* **Backend:** [Kotlin](https://kotlinlang.org) **&** [Ktor](https://ktor.io/)
* **Database:** [PostgreSQL](https://www.postgresql.org) 

## File Tree 
- `frontend` - Contains the React frontend project
- `backend` - Contains the Kotlin Ktor backend project
- `database` - Contains the PostgreSQL database configuration

## Running Locally

1. Clone the repository
    ```bash
    git clone https://github.com/TheFifthNinja/PropertySleeze.git
    ```
2. Change into the project directory
    ```bash
    cd PropertySleeze
    ```
3. Open [Docker Desktop](https://www.docker.com/products/docker-desktop/) and ensure it is running.
4. Build and run the project
    ```bash
    docker-compose up -d
    ```
5. Open your browser and navigate to [http://localhost:5173](http://localhost:5173) to view the frontend application.
6. Open your browser and navigate to [http://localhost:8084](http://localhost:8084) to view the backend application.

### Shutting Down the Project

```bash
    docker-compose down
```

## Project Demo (Click Image to Watch)

<div align="center">
    <a href="https://www.youtube.com/watch?v=0uhlbVSp1Uw" target="_blank">
        <img src="./frontend/public/Large Logo.png" alt="Project Demo Video" />
    </a>
</div>

---

## Useful Docker Commands 

- **Building a single Docker image**
    ```bash
    docker build --no-cache --progress=plain --tag "job-tracker-<name>" .
    ```
    - `--no-cache` - Build the image without using cache.
    - `--progress=plain` - Show all output from build progress (verbose).

- **Running a single Docker container**
    ```bash
    docker run -d -p 5000:5000 --name "job-tracker-<name>" job-tracker-<name>
    ```

- **Stopping a single Docker container**
    ```bash
    docker stop job-tracker-<name>
    ```

- **Building and running multiple Docker containers from a `docker-compose` file**
    ```bash
    docker-compose up -d
    ```

- **Stopping multiple Docker containers from a `docker-compose` file**
    ```bash
    docker-compose down
    ```

- **Viewing all running Docker containers**
    ```bash
    docker ps
    ```
