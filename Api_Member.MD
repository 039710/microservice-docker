# Member service
This service provide followings endpoints

* GET /orgs/:orgName/member



## REST API
### GET /orgs/:orgName/members

> Get all comments belongs to organization member order by followers numbers
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

{
  "members": [
    {
        "id": 22,
        "orgName": "xendit",
        "avatar_url": "https://i.pravatar.cc/150?img=22",
        "followers": 89,
        "followings": 5,
        "createdAt": "2022-06-16T14:27:44.683Z",
        "updatedAt": "2022-06-16T14:27:44.683Z"
    },
    {
        "id": 16,
        "orgName": "xendit",
        "avatar_url": "https://i.pravatar.cc/150?img=16",
        "followers": 88,
        "followings": 65,
        "createdAt": "2022-06-16T14:27:44.683Z",
        "updatedAt": "2022-06-16T14:27:44.683Z"
    },
    {
        "id": 26,
        "orgName": "xendit",
        "avatar_url": "https://i.pravatar.cc/150?img=26",
        "followers": 81,
        "followings": 42,
        "createdAt": "2022-06-16T14:27:44.683Z",
        "updatedAt": "2022-06-16T14:27:44.683Z"
    },
    {
        "id": 20,
        "orgName": "xendit",
        "avatar_url": "https://i.pravatar.cc/150?img=20",
        "followers": 78,
        "followings": 43,
        "createdAt": "2022-06-16T14:27:44.683Z",
        "updatedAt": "2022-06-16T14:27:44.683Z"
    },
    ....
  ]
}

```
_Response (500 - Internal server error)_
```
  Internal server error
```
