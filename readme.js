First download the Postman collection
there is two API created Location and Notification API

created a crud for Location and Notification API 

On creating Location API the fields to be passed in the body in Json format
and endpoint for Location API to create "/api/v1/location/new"
{
    "name": "kapil",
    "url_name": "kapil-chouhan", 
    "email": "kapil@gmail.com",
    "city": "indore",
    "state": "mp",
    "country": "india",
    "postal_code": "123",
    "phone_number": 853098045
}

and the required fields for this Location API is `name, url_name, email, phone_number`

On creating Notification API the fields to be passed in the body in Json format
and endpoint for Notification API to create "/api/v1/notification/new"
{
    "title": "my first notification 2",
    "notification_text": "first notification_text 2",
    "location_id": "643a59c8c7b2dea9a9f4c19a"
}
all the fields are required to create a Notification API and Notification API is associated with Location API while
creating Notification API we have to pass location_id to create a notification


For Location update API we have to pass the values same in the body as create API of Location
and the endpoint for update Location API will be 
"/api/v1/location/update/643a59c8c7b2dea9a9f4c19a"

and endpoint for Notification update API the endpoint will be 
"/api/v1/notification/update/643947c184582aec54617136"

and the endpoint for Listing API of Location and Notification
"/api/v1/locations"
"/api/v1/notifications"
