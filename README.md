# Book Management API

This Node.js-based RESTful API allows users to manage books by performing CRUD operations. The application uses MongoDB as the database for book storage.

## Features

- **Add a New Book**: Users can add a new book with details such as title, author, and summary.
- **View All Books**: Retrieve a list of all available books.
- **View a Specific Book**: Fetch details of a specific book using its unique ID.
- **Update Book Details**: Modify details of an existing book.
- **Delete a Book**: Remove a book from the database.

<!-- ## Video Demonstration

For a comprehensive demonstration of all CRUD operations, including various test cases and edge scenarios, please watch the [video demonstration](video_link). -->

## Setup

### Prerequisites

- Ensure Node.js is installed on your machine.
- Have access to a MongoDB instance, whether local or cloud-based.

### Installation

1. Clone the repository.
2. Install the necessary dependencies using `npm install`.

### Environment Variables

Create a `.env` file in the root directory and configure the following variables:

```plaintext
PORT=3000
MONGODB_URI=your_mongodb_connection_string
```
## Running the Application

Start the application by executing `npm start`.

## API Endpoints and Usage

### Add a New Book

- **Endpoint:** `POST /book/create`
- **Request Body:**
  ```json
  {
    "title": "Book Title",
    "author": "Author Name",
    "summary": "Book Summary"
  }
  ```
## View All Books

- **Endpoint:** `GET /book/all`

## View a Specific Book

- **Endpoint:** `GET /book/find/:id`
- **Parameters:** `id (ID of the book)`

## Update a Book

- **Endpoint:** `PATCH /book/update/:id`
- **Parameters:** `id (ID of the book)`

    **Request Body:** (fields to be updated)

  ```json
    {
      "title": "New Title",
      "author": "New Author",
      "summary": "New Summary"
    }
  ```
## Delete a Book

- **Endpoint:** `DELETE /book/delete/:id`
- **Parameters:** `id (ID of the book)`

## Assumptions and Decisions

- MongoDB is used as the database.
- Error handling for non-existent data has been implemented.
- The API assumes proper input formats for requests.