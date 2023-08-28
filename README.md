
# Rapid Fort Project Assessment


First and foremost, I would like to express my gratitude to Rapid Fort and its team for providing us with this assessment opportunity, which allows us to showcase our technical skills in product development. Here is a brief documentation about my project and instructions on how to access it on your laptop.



#### clone the repository by running commond on terminal
```
  git clone https://github.com/noobtuber20103152/rapid-fort
```

#### Run .sh file 
```
./rapid.sh
```
## Steps to run server

after clone this repo open a new terminal in current directoy and run below command

```
  cd rapid-fort-backend
```

#### install dependencies

```
  npm install

  or 

  yarn install
```

#### run this command to run server 

```
  npm run start

  or

  yarn run start
```

note: please don't clone this terminal, if you close this terminal server will stop.


## Steps to run web app 

open the terminal in previous curr directry and run this command 

```
  cd rapid-fort-frontend
```

#### install dependencies

```
  npm install

  or 

  yarn install
```
#### run this command to run web app 

```
  npm run dev

  or

  yarn run dev
```

## API Reference for server

```
  bseURL = http://localhost:8000
```
#### Get all files

```
  GET baseURL/files
```


#### Get file

```
  GET baseURL/files/${id}
```

#### Upload file

```
  POST baseURL/upload
```

| Parameter | Type     | 
| :-------- | :------- | 
| `filename`      | `formData` |  




## Tech Stack

**Client:** Next.Js, TailwindCSS

**Server:** Node, Express, Firebase

**Deployment:** Docker, Kubernetes, Vercel, Google Cloud Plateform



## Live Links

Here are the live URLs of our web app:

#### Web URL
```
  https://rapid-fort.vercel.app/
```

#### Server baseURL

```
  http://35.202.124.42
```

#### Get All Files

```
  GET baseURL/files
```


#### Get a File

```
  GET baseURL/files/${id}
```

#### Upload a File

```
  POST baseURL/upload
```

