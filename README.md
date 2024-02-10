# FastAPI Application Setup Guide

This guide provides comprehensive instructions for setting up and running a FastAPI application from our repository. Follow the steps below to clone the repository, create and activate a Python virtual environment, install dependencies, and run the application using Uvicorn.

## Prerequisites

Ensure you have the following prerequisites installed on your system before proceeding:

- Git
- Python 3.6 or higher

## Setup Instructions

### Cloning the Repository

1. Open a terminal or command prompt.
2. Clone the repository to your local machine by running the following command:

```
git clone https://github.com/Mohamed-Rirash/pdf-search.git
```




### Creating and Activating a Python Virtual Environment

3. Navigate to the root directory of the cloned repository:


```
cd pdf-search/backend/
```




1. Create a Python virtual environment named `.venv` by executing:
```python
python3 -m venv .venv
```


1. Activate the virtual environment:

- On Linux/macOS:

  ```
  source .venv/bin/activate
  ```

- On Windows (cmd.exe):

  ```
  .venv\Scripts\activate.bat
  ```

- On Windows (PowerShell):

  ```
  .venv\Scripts\Activate.ps1
  ```

### Installing Dependencies

6. Install the required dependencies from the `requirements.txt` file:

```
pip install -r requirements.txt
```

### Running the Application with Uvicorn

7. Start the FastAPI application using Uvicorn with live reload enabled:

```
uvicorn backend.main:app --reload
```


This command runs the application and allows for changes to be applied live, without needing to restart the server.

## Accessing the Application

- After starting the application, you can access the API documentation by visiting `http://127.0.0.1:8000/docs` in your web browser. This page provides an interactive API documentation interface where you can test API endpoints.

## enjoy 