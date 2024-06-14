# Next-JS-Basics
Next-JS Basics

# CRUD Operations API Endpoints

- Create: POST /api/posts/create
- Read All Posts: GET /api/posts
- Read Single Post: GET /api/posts/:id
- Delete: DELETE /api/posts/:id


# Consume APIs in the Application

- Frontend Components
    Form Component: /src/components/CreatePost.tsx
    List View: src/pages/api/posts/index.tsx

# API Endpoints

- Create a Post

    POST: /api/posts

    Request
    
    {
        "author": "John Doe",
        "title": "My First Blog Post",
        "content": "Lorem ipsum dolor sit amet..."
    }
    
    Response

    {
        "success": true,
        "message": "Post created successfully",
        "post": {
            "_id": "post_id",
            "author": "John Doe",
            "title": "My First Blog Post",
            "published_data": "2024-06-14T12:00:00.000Z",
            "content": "Lorem ipsum dolor sit amet..."
        }
    }

- Read All Posts

    GET: /api/posts
    
    {
        "success": true,
        "posts": [
            {
            "_id": "post_id_1",
            "author": "John Doe",
            "title": "My First Blog Post",
            "published_data": "2024-06-14T12:00:00.000Z",
            "content": "Lorem ipsum dolor sit amet..."
            },
            {
            "_id": "post_id_2",
            "author": "Jane Doe",
            "title": "Another Post",
            "published_data": "2024-06-13T12:00:00.000Z",
            "content": "Duis aute irure dolor in reprehenderit..."
            },
            ...
        ]
    }

- Read Single Post

    GET: /api/posts/:id

    {
        "success": true,
        "post": {
            "_id": "post_id",
            "author": "John Doe",
            "title": "My First Blog Post",
            "datePublished": "2024-06-14T12:00:00.000Z",
            "content": "Lorem ipsum dolor sit amet..."
        }
    }

- Delete a Post

    DELETE: /api/posts/:id
        
    {
        "success": true,
        "message": "Post deleted successfully"
    }
