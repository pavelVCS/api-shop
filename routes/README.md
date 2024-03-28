# Getters

### `GET` `/product`

route returns Array of **products** <br>

**Response:**<br>

```
[
    {
        "_id": ObjectID, // mongoDB ObjectID
        "title": String,
        "description": String,
        "img": String,
    },
]
```

<br>
<br>

### `GET` `/product/:id`

route returns an object of **single product** <br>

**Response:**<br>

```
{
    "_id": ObjectID, // mongoDB ObjectID
    "title": String,
    "description": String,
    "img": String,
}
```

<br>
<br>

# Setters

### `POST` `/product`

route creates a new product <br>

**Request body:**<br>

```
{
    "title": String,         // required
    "description": String,   // required
    "img": String,           // optional
}
```

**Response:**<br>

```
{
    "_id": ObjectID, // mongoDB ObjectID
    "title": String,
    "description": String,
    "img": String,
}
```

<br>
<br>
