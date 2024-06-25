## Getting Started

<a name="readme-top"></a>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📗 Table of Contents](#-table-of-contents)
- [📖 \[TaskManager\] ](#-taskmanager-)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
  - [👥 Authors ](#-authors-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [📝 License ](#-license-)

<!-- PROJECT DESCRIPTION -->

# 📖 [TaskManager] <a name="about-project"></a>

**[TaskManager]** is a full-stack web application for task management. The front-end is built using HTML, CSS, and JavaScript, while the back-end utilizes C#, .NET, and PostgreSQL for the database.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
<summary>Backend</summary>
  <ul>
    <li><a href="https://dotnet.microsoft.com/">.NET</a></li>
    <li><a href="https://www.postgresql.org/">PostgreSQL</a></li>
  </ul>
</details>
<details>
<summary>Frontend</summary>
  <ul>
    <li>HTML, CSS, JavaScript</li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- **CRUD operations for tasks**
- **Filter tasks by priority and status**
- **Date picker for due dates**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

- [.NET SDK](https://dotnet.microsoft.com/download)
- [PostgreSQL](https://www.postgresql.org/download/)
- [Node.js](https://nodejs.org/) (for frontend dependencies)

### Setup

1. Clone this repository:

   ```sh
   git clone https://github.com/rodrigopenayo98/taskmanager.git
   cd TaskManager
   ```
   
2. Backend Setup (assuming PostgreSQL is installed):
   
   ```sh
   cd backend
   dotnet restore
   ```
   
   Modify appsettings.json in the backend folder to reflect your PostgreSQL configuration:

   ```sh
   "TaskDB": "Server=localhost;Port=5432;Database=TaskDB;Username=postgres;Password=yourpassword;"
   ```
   
   Run backend:

   ```sh
   dotnet run
   ```

3. Frontend Setup:

   ```sh
   cd frontend
   # If using npm
   npm install
   # Or if using yarn
   yarn install
   ```

   To start frontend run:
   
   ```sh
   live-server
   ```

   Running Tests

   Backend Tests:

   ```sh
   cd tests\TaskManager.Tests\Controllers
   dotnet test
   ```

   Frontend Tests:

   ```sh
    # Run your frontend testing command in the root folder of the project
    npm test
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>
<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Rodrigo Penayo**

- GitHub: [@rodrigopenayo98](https://github.com/rodrigopenayo98)
- Twitter: [@rodrigopenayo98](https://twitter.com/rodrigopenayo98)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/rodrigopenayo/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- [ ] **None for now**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/rodrigopenayo98/taskmanager/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

> If you'd like to contribute to this project, feel free to fork the repository and make changes as you see fit. Please submit a pull request with your changes and I'll review them as soon as possible.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

> I want to thank you if you took the time to see my project!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


  
   
