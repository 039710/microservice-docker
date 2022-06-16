# Comment service
This service provide followings endpoints

* GET /orgs/:orgName/comments
* POST /orgs/:orgName/comments
* DELETE /orgs/:orgName/comments


## REST API
### GET /orgs/:orgName/comments

> Get all comments belongs to organization member
_Paramater_
```
  parameter name : orgName
  type : string
  description : organization name
```
_Request Header_
```
  not needed
```

_Request Body_
```
  not needed
```

_Response (200)_
```
GET /orgs/xendi/comments
[
    {
        "comment": "This is a comment",
        "orgName": "xendit"
    },
    {
        "comment": "This is a comment 2",
        "orgName": "xendit"
    },
    {
        "comment": "This is a comment 3",
        "orgName": "xendit"
    }

]
```
_Response (500 - Internal server error)_
```
  Internal server error
```
### POST /orgs/:orgName/comments
> post new comment belongs to organization

_Paramater_

```
  parameter name : orgName
  type : string
  description : organization name

```
_Request Header_
```
    not needed
```

_Request Body_
```
    JSON 
    {
      "comment" : "this is new comment"
    }
```

_Response (200)_
```
{
    "id": 5,
    "comment": "this is a new comment",
    "orgName": "test",
    "softDeleted": false,
    "updatedAt": "2022-06-16T14:11:20.306Z",
    "createdAt": "2022-06-16T14:11:20.306Z"
}

```
_Response (500 - Internal server error)_
```
  Internal server error
```


### DELETE /orgs/:orgName/comments
> Soft delete all comments belongs to organization

_Paramater_

```
  parameter name : orgName
  type : string
  description : organization name
```

_Request Header_
```
  not needed
```


_Response (200)_
```
{
    "message": "Comments deleted"
}
```
_Response (400)_
```
{
    "message": "Organisation not found"
}
```

_Response (500 - Internal server error)_
```
{
  "message": "Internal server error"
}
```




