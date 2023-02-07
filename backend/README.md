# Backend
Backend of the TopSpin Store project, describes the e-commerce application of table tennis sports products, user-server relationship, market items.
## Technologies Used
* OpenJDK 17.0.5 2022-10-18.
* ExpressJS >= 4.18.2.
* MondoDB >= 5.0.14.
### devDependencies
* body-parser => 1.20.1.
* cors => 2.8.5.
* mongoose => 6.9.0.
* nodemon => 2.0.20.
## Mongo DataBases
### Users DataBase:

| No.  |  Field    |   Type    |   Require   |    Unique  |
| :--- |  :---:    |   :---:   |    :---:    |    :---:   |
|   #  |   id      |  ObjectId |     NA      |     NA     |
|   1  |   CC      |   Number  |    True     |    True    | 
|   2  |  Name     |   String  |    True     |     NA     | 
|   3  |  Email    |   String  |    True     |    True    | 
|   4  | Password  |   String  |    True     |     NA     |
|   5  |  Phone    |   Number  |    True     |     NA     | 
|   6  | Address   |   String  |    True     |     NA     |
|  NA  |   Date    |   Date()  |     NA      |     NA     |

#### UserRoutes:

|  Method   |   Apply   |   Request   |   endPoint  |
|   :---    |   :---:   |    :---:    |    :---:    |
|   POST    |  Register |    2,3,4    |     NA      |
|   POST    |   Login   |     3,4     |    True     | 

### Items DataBase:

| No.  |  Field    |   Type    |   Require   |    Unique  |
| :--- |   :---:   |   :---:   |    :---:    |    :---:   |
|  #   |   id      |  ObjectId |     NA      |     NA     |
|  1   |   SKU     |   String  |    True     |    True    | 
|  2   |   Name    |   String  |    True     |    True    | 
|  3   | Category  |   String  |    True     |     NA     | 
|  4   |  Picture  |   String  |    True     |     NA     |
|  5   |   Stock   |   Number  |    True     |     NA     | 
|  6   |   Price   |   Number  |    True     |     NA     | 
|  7   |  Discount |   Number  |     NA      |     NA     | 
|  8   |Description|   String  |    True     |     NA     |
| NA   |   Date    |   Date()  |     NA      |     NA     | 

### UserRoutes:

|  Method   |   Apply   |   Request   |   endPoint  |
|   :---    |   :---:   |    :---:    |    :---:    |
|   POST    |  Register |     All     |     NA      |


