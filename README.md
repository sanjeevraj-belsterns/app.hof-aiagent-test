
# Project Setup

To set up the project for development, follow these steps:

1. Install dependencies:
   ```bash
   yarn install
   ```

2. Install Husky:
   ```bash
   yarn prepare
   ```

3. Run Prisma migrations:
   ```bash
   yarn run prisma:migrate
   ```

4. Start the development server:
   ```bash
   yarn run dev
   ```



Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Fix Auto CRLF issue in windows
1. First disable the autoCRLF in the git config by running the following command in your terminal 
    ```bash
    git config core.autocrlf false
    ```
2. Then remove the cached files in the git. Run the following command: 
    ```bash
    git rm --cached -r .
    ```
3. Then reset the project files by executing the following command to complete conversion. 
    ```bash
    git reset --hard
    ```
That's it now all the files that have CRLF will be converted to LF.