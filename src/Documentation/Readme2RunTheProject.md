# Path: C:\B\react_te23\src\Documentation\Readme2RunTheProject.md

## To run:

### 1. Start servers:

#### Server 1: *** Node.js DB Server *** on PORT 3002
```DBTE23Server3002.js: Node.js: HTTP server (GET/POST). DB-access for all SPs & tables.
   Open a Cmd window
   >cd cd C:\B\server_db
   >node DBTE23Server3002.js 
      Server running on port 3002```

#### Server 2: *** Python Server *** on PORT 8765
```PyServer.py:    Python: HTTP server (GET/POST). DB-access for SignIn & SignUp.
   Open a Cmd window
   >cd cd C:\B
   >envB\Scripts\Activate
      (envB) C:\B>
   (envB) C:\B>py PyServer.py
      Starting server
      Hosting server on port 8765```

### 2. React app: Run on PORT 3000
```React runs on port 3000```
```Open VSCode```
```Open folder: C:\A\AITom\ReactTE23```
```New Terminal```
```>npm start```
```   Start the server: ... ```
![APIS GET](..\Images\image-3.png)

### Available Scripts
In the project directory, you can run:

#### `npm start`
App is run in *dev* mode.\
Browser: to view in a browser, open [http://localhost:3000](http://localhost:3000)

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`
*Test runner* launched in the interactive watch mode.\
More info: [running tests](https://facebook.github.io/create-react-app/docs/running-tests)
